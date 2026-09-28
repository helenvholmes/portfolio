"use client";

import React, { useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

import Clickable from "./Clickable";

const GA_ID = "G-Z18K87F4JB";
const STORAGE_KEY = "cookie-consent";

type Consent = "granted" | "denied";

function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

// Fallback when storage is unavailable (e.g. private mode), so the choice lasts this visit.
let memoryConsent: Consent | null = null;
const listeners = new Set<() => void>();

function writeConsent(value: Consent) {
  memoryConsent = value;
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Ignore; memoryConsent covers this visit.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Asks for analytics consent and only loads Google Analytics once granted. */
export default function CookieConsent() {
  // `undefined` on the server, so the banner only renders once storage has been read.
  const consent = useSyncExternalStore<Consent | null | undefined>(
    subscribe,
    () => readConsent() ?? memoryConsent,
    () => undefined,
  );

  return (
    <>
      {consent === "granted" && <GoogleAnalytics gaId={GA_ID} />}
      {consent === null && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-50 flex flex-col gap-3 rounded-sm border border-interactive bg-background p-4 text-sm shadow-lg sm:left-auto sm:max-w-sm"
        >
          <p>
            Mind if I use cookies to see roughly where visitors come from? It’s
            just Google Analytics — no ads.
          </p>
          <div className="flex gap-2">
            <Clickable
              destination="button"
              type="button"
              onClick={() => writeConsent("granted")}
            >
              Sure
            </Clickable>
            <Clickable
              destination="button"
              type="button"
              onClick={() => writeConsent("denied")}
            >
              No thanks
            </Clickable>
          </div>
        </div>
      )}
    </>
  );
}
