module.exports = {

"[externals]/ [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js");

module.exports = mod;
}}),
"[project]/src/components/Cursor.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Cursor": (()=>Cursor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/gsap/gsap-core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
function getScale(diffX, diffY) {
    if (diffX && diffY) {
        const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
        return Math.min(distance / 735, 0.35);
    }
    return;
}
function getAngle(diffX, diffY) {
    if (diffX && diffY) {
        return Math.atan2(diffY, diffX) * 180 / Math.PI;
    }
    return;
}
const EMPTY = {};
function useInstance(value = {}) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(EMPTY);
    if (ref.current === EMPTY) {
        ref.current = typeof value === "function" ? value() : value;
    }
    return ref.current;
}
function useTicker(callback, paused) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!paused && callback) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add(callback);
        }
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.remove(callback);
        };
    }, [
        callback,
        paused
    ]);
}
const Cursor = ({ animationDuration = 1.25, animationEase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Expo"].easeOut, backgroundImageAnimationDuration = 0, backgroundImageAnimationEase = undefined, colorAnimationDuration = 0.2, colorAnimationEase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Power4"].easeOut, cursorBackgroundColor = "var(--accent)", cursorInnerColor = "#fff", cursorSize = 48, cursorSizeY, exclusionBackgroundColor = "#fff", gellyAnimationAmount = 50, isGelly = false, magneticAnimationAmount = 0.2, magneticAnimationDuration = 0.7, magneticAnimationEase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Power4"].easeOut, sizeAnimationDuration = 0.5, sizeAnimationEase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Expo"].easeOut, stickAnimationAmount = 0.09, stickAnimationDuration = 0.7, stickAnimationEase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Power4"].easeOut, textAnimationDuration = 1, textAnimationEase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Expo"].easeOut })=>{
    const cursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorInner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pos = useInstance(()=>({
            x: 0,
            y: 0
        }));
    const vel = useInstance(()=>({
            x: 0,
            y: 0
        }));
    const set = useInstance();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        set.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickSetter(cursor.current, "x", "px");
        set.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickSetter(cursor.current, "y", "px");
        if (isGelly) {
            set.r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickSetter(cursor.current, "rotate", "deg");
            set.sx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickSetter(cursor.current, "scaleX");
            set.sy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickSetter(cursor.current, "scaleY");
            set.width = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickSetter(cursor.current, "width", "px");
            set.rt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickSetter(cursorInner.current, "rotate", "deg");
        }
    });
    const loop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const rotation = getAngle(vel.x, vel.y);
        const scale = getScale(vel.x, vel.y);
        set.x(pos.x);
        set.y(pos.y);
        if (isGelly && scale && rotation && cursor.current) {
            set.width(cursor.current?.style.height + scale * gellyAnimationAmount);
            set.r(rotation);
            set.sx(1 + scale);
            set.sy(1 - scale);
            set.rt(-rotation);
        }
    }, [
        gellyAnimationAmount,
        isGelly,
        pos.x,
        pos.y,
        set,
        vel.x,
        vel.y
    ]);
    const [isBorderRadius, setIsBorderRadius] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const sizeElements = document.querySelectorAll("[data-cursor-size]");
        const textElements = document.querySelectorAll("[data-cursor-text]");
        const colorElements = document.querySelectorAll("[data-cursor-color]");
        const backgroundImageElements = document.querySelectorAll("[data-cursor-background-image]");
        const magneticElements = document.querySelectorAll("[data-cursor-magnetic]");
        const stickElements = document.querySelectorAll("[data-cursor-stick]");
        const exclusionElements = document.querySelectorAll("[data-cursor-exclusion]");
        let stickStatus = false;
        let hasExclusionAlready = false;
        const setFromEvent = (e)=>{
            const areatarget = e.target;
            let target;
            let bound;
            let x = e.clientX;
            let y = e.clientY;
            let duration = animationDuration;
            let ease = animationEase;
            if (stickStatus) {
                target = areatarget.querySelector(areatarget.dataset["cursorStick"]);
                bound = target?.getBoundingClientRect();
                if (target && bound) {
                    y = bound.top + target.clientHeight / 2 - (bound.top + target.clientHeight / 2 - e.clientY) * stickAnimationAmount;
                    x = bound.left + target.clientWidth / 2 - (bound.left + target.clientWidth / 2 - e.clientX) * stickAnimationAmount;
                    duration = stickAnimationDuration;
                    ease = stickAnimationEase;
                }
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(pos, {});
            const xTo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickTo(pos, "x", {
                duration,
                ease,
                onUpdate: ()=>{
                    if (pos.x) vel.x = x - pos.x;
                }
            });
            const yTo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickTo(pos, "y", {
                duration,
                ease,
                onUpdate: ()=>{
                    if (pos.y) vel.y = y - pos.y;
                }
            });
            xTo(x);
            yTo(y);
            loop();
        };
        window.addEventListener("mousemove", (e)=>{
            setFromEvent(e);
        });
        document.body.addEventListener("mouseenter", (e)=>{
            if (e.target instanceof HTMLElement && cursor.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`#${cursor.current.id}`, {
                    duration: animationDuration,
                    ease: animationEase,
                    opacity: 1
                });
            }
        });
        document.body.addEventListener("mouseleave", (e)=>{
            if (e.target instanceof HTMLElement && cursor.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`#${cursor.current.id}`, {
                    duration: animationDuration,
                    ease: animationEase,
                    opacity: 0
                });
            }
        });
        sizeElements.forEach((el)=>{
            el.addEventListener("mouseenter", (e)=>{
                if (e.target instanceof HTMLElement && cursor.current) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`#${cursor.current.id}`, {
                        duration: sizeAnimationDuration,
                        ease: sizeAnimationEase,
                        height: `${e.target.dataset["cursorSizeY"]}` ? `${e.target.dataset["cursorSizeY"]}` : `${e.target.dataset["cursorSize"]}`,
                        width: `${e.target.dataset["cursorSize"]}`
                    });
                }
            });
        });
        sizeElements.forEach((el)=>{
            el.addEventListener("mouseleave", (e)=>{
                if (e.target instanceof HTMLElement && cursor.current) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`#${cursor.current.id}`, {
                        duration: sizeAnimationDuration,
                        ease: sizeAnimationEase,
                        height: `${cursorSize}`,
                        width: `${cursorSize}`
                    });
                }
            });
        });
        textElements.forEach((el)=>{
            el.addEventListener("mouseenter", (e)=>{
                if (e.target instanceof HTMLElement && cursorInner.current) {
                    cursorInner.current.textContent = `${e.target.dataset["cursorText"]}`;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`#${cursorInner.current.id}`, {
                        duration: textAnimationDuration,
                        ease: textAnimationEase,
                        opacity: 1,
                        scale: 1
                    });
                }
            });
        });
        textElements.forEach((el)=>{
            el.addEventListener("mouseleave", (e)=>{
                if (e.target instanceof HTMLElement && cursorInner.current) {
                    cursorInner.current.textContent = "";
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`#${cursorInner.current.id}`, {
                        duration: textAnimationDuration,
                        ease: textAnimationEase,
                        opacity: 0,
                        scale: 0
                    });
                }
            });
        });
        colorElements.forEach((el)=>{
            el.addEventListener("mouseenter", (e)=>{
                if (e.target instanceof HTMLElement && cursor.current) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`#${cursor.current.id}`, {
                        backgroundColor: `${e.target.dataset["cursorColor"]}`,
                        duration: colorAnimationDuration,
                        ease: colorAnimationEase
                    });
                }
            });
        });
        colorElements.forEach((el)=>{
            el.addEventListener("mouseleave", (e)=>{
                if (e.target instanceof HTMLElement && cursor.current) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`#${cursor.current.id}`, {
                        backgroundColor: `${cursorBackgroundColor}`,
                        duration: colorAnimationDuration,
                        ease: colorAnimationEase
                    });
                }
            });
        });
        exclusionElements.forEach((el)=>{
            el.addEventListener("mouseenter", (e)=>{
                if (e.target instanceof HTMLElement && cursor.current) {
                    // @ts-ignore: Unreachable code error
                    cursor.current.style.mixBlendMode = "exclusion";
                    cursor.current.style.background = `${exclusionBackgroundColor}`;
                }
            });
        });
        exclusionElements.forEach((el)=>{
            el.addEventListener("mouseleave", (e)=>{
                if (e.target instanceof HTMLElement && cursor.current) {
                    // @ts-ignore: Unreachable code error
                    cursor.current.style.mixBlendMode = "";
                    cursor.current.style.background = `${cursorBackgroundColor}`;
                }
            });
        });
        backgroundImageElements.forEach((el)=>{
            el.addEventListener("mouseenter", (e)=>{
                if (e.target instanceof HTMLElement && cursorInner.current) {
                    if (cursor.current) {
                        // @ts-ignore: Unreachable code error
                        if (cursor.current.style.mixBlendMode === "exclusion") hasExclusionAlready = true;
                        // @ts-ignore: Unreachable code error
                        // cursor.current.style.mixBlendMode = "exclusion";
                        cursor.current.style.backgroundColor = "transform";
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`#${cursorInner.current.id}`, {
                        backgroundImage: `url("${e.target.dataset["cursorBackgroundImage"]}")`,
                        backgroundSize: "cover",
                        borderRadius: "unset",
                        duration: backgroundImageAnimationDuration,
                        ease: backgroundImageAnimationEase,
                        // filter: "invert(1)",
                        opacity: 1,
                        scale: 1
                    });
                    setIsBorderRadius(true);
                }
            });
        });
        backgroundImageElements.forEach((el)=>{
            el.addEventListener("mouseleave", (e)=>{
                if (e.target instanceof HTMLElement && cursorInner.current) {
                    if (cursor.current) {
                        if (!hasExclusionAlready) {
                            // @ts-ignore: Unreachable code error
                            cursor.current.style.mixBlendMode = "";
                            cursor.current.style.backgroundColor = `${cursorBackgroundColor}`;
                        } else {
                            cursor.current.style.backgroundColor = `${exclusionBackgroundColor}`;
                        }
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`#${cursorInner.current.id}`, {
                        background: ``,
                        duration: backgroundImageAnimationDuration,
                        filter: "none",
                        opacity: 0,
                        scale: 0
                    });
                    setIsBorderRadius(false);
                }
            });
        });
        magneticElements.forEach((el)=>{
            el.addEventListener("mousemove", (e)=>{
                const areatarget = e.target;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(areatarget, {
                    duration: magneticAnimationDuration,
                    ease: magneticAnimationEase,
                    x: (e.clientX - (areatarget.offsetLeft - window.pageXOffset) - areatarget.clientWidth / 2) * magneticAnimationAmount,
                    y: (e.clientY - (areatarget.offsetTop - window.pageYOffset) - areatarget.clientHeight / 2) * magneticAnimationAmount
                });
            });
        });
        magneticElements.forEach((el)=>{
            el.addEventListener("mouseleave", (e)=>{
                const areatarget = e.target;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(areatarget, {
                    duration: magneticAnimationDuration,
                    ease: magneticAnimationEase,
                    x: 0,
                    y: 0
                });
            });
        });
        stickElements.forEach((el)=>{
            el.addEventListener("mouseenter", ()=>stickStatus = true);
        });
        stickElements.forEach((el)=>{
            el.addEventListener("mouseleave", ()=>stickStatus = false);
        });
        return ()=>{
            window.removeEventListener("mousemove", setFromEvent);
            document.body.removeEventListener("mouseenter", ()=>{});
            document.body.removeEventListener("mouseleave", ()=>{});
            sizeElements.forEach((el)=>{
                el.removeEventListener("mouseenter", ()=>{});
                el.removeEventListener("mouseleave", ()=>{});
            });
            textElements.forEach((el)=>{
                el.removeEventListener("mouseenter", ()=>{});
                el.removeEventListener("mouseleave", ()=>{});
            });
            colorElements.forEach((el)=>{
                el.removeEventListener("mouseenter", ()=>{});
                el.removeEventListener("mouseleave", ()=>{});
            });
            exclusionElements.forEach((el)=>{
                el.removeEventListener("mouseenter", ()=>{});
                el.removeEventListener("mouseleave", ()=>{});
            });
            backgroundImageElements.forEach((el)=>{
                el.removeEventListener("mouseenter", ()=>{});
                el.removeEventListener("mouseleave", ()=>{});
            });
            magneticElements.forEach((el)=>{
                el.removeEventListener("mousemove", ()=>{});
                el.removeEventListener("mouseleave", ()=>{});
            });
            stickElements.forEach((el)=>{
                el.removeEventListener("mouseenter", ()=>{});
                el.removeEventListener("mouseleave", ()=>{});
            });
        };
    });
    useTicker(loop);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cursor,
        id: "c-cursor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("translate-[-50%,-50%] pointer-events-none fixed left-0 top-0 z-[999] will-change-[transform,height,width,color]", !isBorderRadius && "rounded-full"),
        style: {
            background: cursorBackgroundColor,
            contain: "layout style size",
            height: cursorSizeY ? cursorSizeY : cursorSize,
            width: cursorSize
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                color: cursorInnerColor,
                contain: "layout style size"
            },
            ref: cursorInner,
            id: "c-cursorInner",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("absolute bottom-0 left-0 right-0 top-0 flex scale-0 items-center justify-center rounded-full bg-contain bg-center bg-no-repeat text-center opacity-0 will-change-[transform,height,width,opacity,color]", // "mix-blend-multiply",
            !isBorderRadius && "rounded-full")
        }, void 0, false, {
            fileName: "[project]/src/components/Cursor.tsx",
            lineNumber: 505,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Cursor.tsx",
        lineNumber: 491,
        columnNumber: 5
    }, this);
};
}}),
"[externals]/ [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/action-async-storage.external.js");

module.exports = mod;
}}),
"[externals]/ [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-unit-async-storage.external.js");

module.exports = mod;
}}),
"[externals]/ [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-async-storage.external.js");

module.exports = mod;
}}),
"[project]/src/components/FadeIn.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>FadeIn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$transition$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-transition-router/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function FadeIn({ children, className, delay, exitDelay }) {
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const anim = (variants)=>{
        return {
            animate: "enter",
            initial: "initial",
            variants
        };
    };
    const fadeIn = {
        enter: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: delay,
                duration: 0.55,
                ease: [
                    0.34,
                    1.75,
                    0.64,
                    1
                ]
            },
            y: 0
        },
        initial: {
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.55,
                ease: [
                    0.34,
                    1.56,
                    0.64,
                    1
                ]
            },
            y: 20
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$transition$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionRouter"], {
        auto: true,
        leave: (next)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(wrapperRef.current, {
                opacity: [
                    1,
                    0
                ],
                y: [
                    0,
                    20
                ]
            }, {
                delay: exitDelay,
                duration: 0.65,
                ease: [
                    0.34,
                    -1.75,
                    0.64,
                    1
                ],
                onComplete: next
            });
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            ...anim(fadeIn),
            className: className,
            ref: wrapperRef,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/FadeIn.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/FadeIn.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
FadeIn.displayName = "FadeIn";
}}),
"[project]/src/components/Float.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Float)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function Float({ children, className, delay }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: [
            "float"
        ],
        variants: {
            float: {
                transition: {
                    delay: delay,
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity
                },
                y: [
                    5,
                    -5,
                    5
                ]
            }
        },
        whileHover: {
            scale: 1.05,
            transition: {
                duration: 0.55
            }
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Float.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
Float.displayName = "Float";
}}),
"[project]/src/components/Clickable.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Clickable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
;
;
;
function Clickable({ children, className, destination = "internal", direction, href, onClick, openInNewTab, type = "inline", ...props }) {
    /*
a:hover::after {
  animation: BackgroundMovement 10s ease infinite;
  background: var(--gradient);
  background-size: 400% 400%;
  display: block;
  height: 1px;
  width: 100%;
} */ const clickableClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(type === "inline" && "after:content-[''] transition-all after:block after:bg-current inline-block no-underline after:h-px after:w-full", type === "index" && "italic font-medium flex flex-row items-center gap-1 group", className);
    const renderClickableChildren = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                direction && direction === "backwards" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "transition-all duration-150 ease-in-out group-hover:-translate-x-0.5",
                    children: [
                        "←",
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Clickable.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this),
                children,
                direction && direction === "forwards" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "transition-all duration-150 ease-in-out group-hover:translate-x-0.5",
                    children: [
                        " ",
                        "→"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Clickable.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true);
    };
    if (href && destination === "external") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            className: clickableClassNames,
            target: openInNewTab ? "_blank" : "_self",
            "data-cursor-color": "rgba(var(--shadow-color), 50%)",
            ...props,
            children: renderClickableChildren()
        }, void 0, false, {
            fileName: "[project]/src/components/Clickable.tsx",
            lineNumber: 115,
            columnNumber: 7
        }, this);
    }
    if (href && destination === "internal") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: clickableClassNames,
            target: openInNewTab ? "_blank" : "_self",
            "data-cursor-color": "rgba(var(--shadow-color), 50%)",
            ...props,
            children: renderClickableChildren()
        }, void 0, false, {
            fileName: "[project]/src/components/Clickable.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: clickableClassNames,
        "data-cursor-color": "rgba(var(--shadow-color), 50%)",
        onClick: onClick && onClick,
        ...props,
        children: renderClickableChildren()
    }, void 0, false, {
        fileName: "[project]/src/components/Clickable.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
Clickable.displayName = "Clickable";
}}),
"[project]/src/components/Label.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Label({ children, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "font-medium",
        children: [
            children,
            " ",
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Label.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
Label.displayName = "Label";
}}),
"[project]/src/components/Team.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Team)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Label.tsx [app-ssr] (ecmascript)");
;
;
function Team({ members, year }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            members && members.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: [
                                item.role,
                                ":"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Team.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this),
                        " ",
                        item.name,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/Team.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/Team.tsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm italic",
                children: year
            }, void 0, false, {
                fileName: "[project]/src/components/Team.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Team.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
Team.displayName = "Team";
}}),
"[project]/src/components/Item.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Item)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Clickable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Clickable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Team$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Team.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Item({ cursorImage, description, team, title, year }) {
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    function renderChildren(title) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("flex flex-col gap-5", title.clickableProps && "-ml-6 cursor-pointer p-6 transition-all duration-300 group-hover/item:bg-surface"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                            className: "font-medium",
                            children: title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    title.title,
                                    " ",
                                    title.clickableProps && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "underline",
                                        children: title.clickableProps.children
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Item.tsx",
                                        lineNumber: 47,
                                        columnNumber: 19
                                    }, this),
                                    " ",
                                    title.titleClickable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/Item.tsx",
                                                lineNumber: 53,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Clickable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                ...title.titleClickable,
                                                className: "underline"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Item.tsx",
                                                lineNumber: 54,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Item.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                            className: "ml-0 flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        description,
                                        !team && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/Item.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm italic",
                                                    children: year
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Item.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Item.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                team && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Team$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    ...team
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Item.tsx",
                                    lineNumber: 73,
                                    columnNumber: 22
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Item.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Item.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-6 -left-4 h-6 skew-y-[45deg] transition-colors duration-300 group-hover/item:bg-surface-shadow",
                        style: {
                            transform: "perspective(10px) rotateX(-1deg)",
                            width: "calc(100% + 6px)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Item.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Item.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: title.clickableProps ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: title.clickableProps && {
                scale: 1.05
            },
            whileTap: title.clickableProps && {
                scale: 0.95
            },
            ref: wrapperRef,
            transition: {
                damping: 10,
                ease: [
                    0.34,
                    1.56,
                    0.64,
                    1
                ],
                stiffness: 150,
                type: "spring"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Clickable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                type: "unstyled",
                className: "group/item",
                "data-cursor-color": !cursorImage && "rgba(var(--shadow-color), 50%)",
                "data-cursor-background-image": cursorImage,
                "data-cursor-size": cursorImage && "250px",
                "data-cursor-size-y": cursorImage && "400px",
                ...title.clickableProps,
                children: renderChildren(title)
            }, void 0, false, {
                fileName: "[project]/src/components/Item.tsx",
                lineNumber: 103,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Item.tsx",
            lineNumber: 92,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: renderChildren(title)
        }, void 0, false)
    }, void 0, false);
}
Item.displayName = "Item";
}}),
"[project]/src/components/icons.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "icons": (()=>icons)
});
const icons = [
    {
        iconName: "checkmark_circle",
        paths: [
            "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4.35,7.73-5.62,5.62a.48.48,0,0,1-.7,0L7.65,13a.5.5,0,0,1,0-.71l.53-.53a.48.48,0,0,1,.7,0l1.5,1.49,4.74-4.74a.5.5,0,0,1,.7,0l.53.53A.5.5,0,0,1,16.35,9.73Z"
        ]
    },
    {
        iconName: "clean",
        paths: [
            "M8.17469 8.79871C8.38533 9.16428 8.4979 9.5781 8.50146 10C8.50146 10.0268 8.53076 12.772 10.3006 14.1C10.3846 14.163 10.4466 14.2507 10.4779 14.3509C10.5092 14.4511 10.5081 14.5586 10.475 14.6581C10.4418 14.7577 10.3781 14.8443 10.293 14.9056C10.2078 14.967 10.1056 15 10.0006 15H2.50501C2.37579 15.0001 2.25156 14.9502 2.15834 14.8607C2.06513 14.7712 2.01018 14.6491 2.00501 14.52C1.99816 14.3411 1.85321 10.12 3.72501 8.31445C4.06433 7.98 4.4821 7.73598 4.94009 7.6047C5.39809 7.47343 5.88169 7.45909 6.34666 7.563L10.1346 1L11 1.5L7.29926 7.91355C7.66248 8.12822 7.96405 8.43313 8.17469 8.79871ZM7.03457 8.9411C6.74828 8.66144 6.3652 8.50293 5.96501 8.49855C5.71452 8.47265 5.46138 8.4968 5.22031 8.56959C4.97924 8.64239 4.75504 8.76239 4.56076 8.9226L7.51046 10.2344C7.50301 10.104 7.50206 10.019 7.50206 10C7.4883 9.60003 7.32086 9.22076 7.03457 8.9411ZM7.00001 12.5C7.07052 13.066 7.32516 13.593 7.72471 14H8.79841C8.23502 13.2265 7.84902 12.3383 7.66786 11.3987L3.90136 9.72365C3.14501 11.054 3.01551 13.0818 3.00001 14H4.33261C4.14392 13.3486 4.03229 12.6774 4.00001 12H5.00001C5.04179 12.6794 5.16692 13.3511 5.37256 14H6.48421C6.20216 13.5473 6.03587 13.0322 6.00001 12.5H7.00001ZM13 10H10V9H13V10ZM15 14H12V13H15V14ZM11 12H14V11H11V12Z"
        ]
    },
    {
        iconName: "clear_circle_outlined",
        paths: [
            "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm3.09-10.56-.53-.53a.48.48 0 0 0-.7 0L12 10.76l-1.86-1.85a.48.48 0 0 0-.7 0l-.53.53a.48.48 0 0 0 0 .7L10.76 12l-1.85 1.86a.48.48 0 0 0 0 .7l.53.53a.48.48 0 0 0 .7 0L12 13.24l1.86 1.85a.48.48 0 0 0 .7 0l.53-.53a.48.48 0 0 0 0-.7L13.24 12l1.85-1.86a.48.48 0 0 0 0-.7Z"
        ]
    },
    {
        iconName: "close",
        paths: [
            "M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z"
        ]
    },
    {
        iconName: "flare",
        paths: [
            "M16.27 8.37L15.63 7.73C15.5784 7.68314 15.5373 7.62602 15.5091 7.5623C15.4809 7.49858 15.4663 7.42968 15.4663 7.36C15.4663 7.29033 15.4809 7.22142 15.5091 7.15771C15.5373 7.09399 15.5784 7.03687 15.63 6.99L17.19 5.7C17.2835 5.61637 17.4046 5.57013 17.53 5.57013C17.6555 5.57013 17.7765 5.61637 17.87 5.7L18.28 6.11C18.3636 6.20351 18.4099 6.32455 18.4099 6.45C18.4099 6.57545 18.3636 6.6965 18.28 6.79L17 8.34C16.9553 8.39193 16.9004 8.43413 16.8388 8.46397C16.7771 8.49381 16.71 8.51066 16.6415 8.51347C16.5731 8.51629 16.5048 8.505 16.4409 8.48032C16.377 8.45564 16.3188 8.41809 16.27 8.37ZM7.00001 15.66L5.70001 17.19C5.61637 17.2835 5.57014 17.4046 5.57014 17.53C5.57014 17.6555 5.61637 17.7765 5.70001 17.87L6.11001 18.28C6.20351 18.3636 6.32456 18.4099 6.45001 18.4099C6.57545 18.4099 6.6965 18.3636 6.79001 18.28L8.34001 17C8.39157 16.9531 8.43276 16.896 8.46095 16.8323C8.48914 16.7686 8.5037 16.6997 8.5037 16.63C8.5037 16.5603 8.48914 16.4914 8.46095 16.4277C8.43276 16.364 8.39157 16.3069 8.34001 16.26L7.70001 15.62C7.6014 15.5335 7.47276 15.4893 7.34182 15.4967C7.21088 15.5042 7.08812 15.5629 7.00001 15.66ZM15.66 17L17.19 18.29C17.2835 18.3736 17.4046 18.4199 17.53 18.4199C17.6555 18.4199 17.7765 18.3736 17.87 18.29L18.28 17.88C18.3636 17.7865 18.4099 17.6655 18.4099 17.54C18.4099 17.4146 18.3636 17.2935 18.28 17.2L17 15.66C16.9531 15.6084 16.896 15.5672 16.8323 15.5391C16.7686 15.5109 16.6997 15.4963 16.63 15.4963C16.5603 15.4963 16.4914 15.5109 16.4277 15.5391C16.364 15.5672 16.3069 15.6084 16.26 15.66L15.62 16.3C15.5335 16.3986 15.4893 16.5272 15.4968 16.6582C15.5042 16.7891 15.5629 16.9119 15.66 17ZM8.34001 7L6.81001 5.7C6.7165 5.61637 6.59545 5.57013 6.47001 5.57013C6.34456 5.57013 6.22351 5.61637 6.13001 5.7L5.72001 6.11C5.63637 6.20351 5.59014 6.32455 5.59014 6.45C5.59014 6.57545 5.63637 6.6965 5.72001 6.79L7.00001 8.34C7.04687 8.39156 7.10399 8.43276 7.16771 8.46095C7.23143 8.48914 7.30033 8.5037 7.37001 8.5037C7.43968 8.5037 7.50859 8.48914 7.5723 8.46095C7.63602 8.43276 7.69314 8.39156 7.74001 8.34L8.38001 7.7C8.46648 7.60139 8.51074 7.47276 8.50326 7.34182C8.49578 7.21088 8.43715 7.08812 8.34001 7ZM19.55 11.2L14.64 10.66C14.4092 10.637 14.1936 10.5345 14.03 10.37L13.65 9.97C13.4892 9.805 13.3903 9.58952 13.37 9.36L12.79 2.46C12.7799 2.33445 12.7228 2.21732 12.6301 2.13203C12.5374 2.04675 12.416 1.9996 12.29 2H11.71C11.584 1.9996 11.4626 2.04675 11.3699 2.13203C11.2772 2.21732 11.2201 2.33445 11.21 2.46L10.63 9.36C10.6097 9.58952 10.5108 9.805 10.35 9.97L9.97001 10.37C9.80646 10.5345 9.59082 10.637 9.36001 10.66L4.45001 11.2C4.32624 11.2124 4.21156 11.2706 4.12835 11.363C4.04514 11.4555 3.99938 11.5756 4.00001 11.7V12.3C3.99938 12.4244 4.04514 12.5445 4.12835 12.637C4.21156 12.7294 4.32624 12.7876 4.45001 12.8L9.36001 13.34C9.59082 13.363 9.80646 13.4655 9.97001 13.63L10.35 14.03C10.5108 14.195 10.6097 14.4105 10.63 14.64L11.21 21.54C11.2201 21.6656 11.2772 21.7827 11.3699 21.868C11.4626 21.9533 11.584 22.0004 11.71 22H12.29C12.416 22.0004 12.5374 21.9533 12.6301 21.868C12.7228 21.7827 12.7799 21.6656 12.79 21.54L13.37 14.64C13.3903 14.4105 13.4892 14.195 13.65 14.03L14.03 13.63C14.1936 13.4655 14.4092 13.363 14.64 13.34L19.55 12.8C19.6738 12.7876 19.7885 12.7294 19.8717 12.637C19.9549 12.5445 20.0006 12.4244 20 12.3V11.7C20.0006 11.5756 19.9549 11.4555 19.8717 11.363C19.7885 11.2706 19.6738 11.2124 19.55 11.2Z"
        ]
    },
    {
        iconName: "printer",
        paths: [
            "M14 4.5H12.5V1.5H3.5V4.5H2C1.73478 4.5 1.48043 4.60536 1.29289 4.79289C1.10536 4.98043 1 5.23478 1 5.5V10.5C1 10.7652 1.10536 11.0196 1.29289 11.2071C1.48043 11.3946 1.73478 11.5 2 11.5H3.5V14.5H12.5V11.5H14C14.2652 11.5 14.5196 11.3946 14.7071 11.2071C14.8946 11.0196 15 10.7652 15 10.5V5.5C15 5.23478 14.8946 4.98043 14.7071 4.79289C14.5196 4.60536 14.2652 4.5 14 4.5ZM4.5 2.5H11.5V4.5H4.5V2.5ZM11.5 13.5H4.5V8.5H11.5V13.5ZM14 10.5H12.5V7.5H3.5V10.5H2V5.5H14V10.5Z"
        ]
    },
    {
        iconName: "time_30_s",
        paths: [
            "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8Zm.5-14c-.3 0-.5.2-.5.5v10.9c0 .3.2.5.5.5 3.1-.3 5.5-2.8 5.5-6 0-3-2.4-5.6-5.5-5.9Z"
        ]
    }
];
}}),
"[project]/src/components/Icon.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Icon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons.ts [app-ssr] (ecmascript)");
;
;
;
function Icon({ className, fill, iconName, size = "medium" }) {
    let paths;
    for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["icons"].length; i++){
        if (iconName === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["icons"][i].iconName) {
            paths = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["icons"][i].paths;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(size === "x-large" && "h-12 w-12", size === "large" && "h-8 w-8", size === "medium" && "h-6 w-6", size === "small" && "h-4 w-4", className),
        children: paths && paths.map((path, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: path,
                fill: fill && fill
            }, index, false, {
                fileName: "[project]/src/components/Icon.tsx",
                lineNumber: 46,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Icon.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
Icon.displayName = "Icon";
}}),
"[project]/src/components/Nav.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Nav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$transition$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-transition-router/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Clickable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Clickable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cursor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Cursor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/FadeIn.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Float$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Float.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const anim = (variants)=>{
    return {
        animate: "enter",
        exit: "exit",
        initial: "initial",
        variants
    };
};
const SVG = ({ height, width })=>{
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
  L0 300
  `;
    const targetPath = `
    M0 0
    Q${width} 0 ${width} 0
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
  L0 300
  `;
    const transition = {
        delay: 0,
        duration: 1,
        ease: [
            0.76,
            0,
            0.24,
            1
        ]
    };
    const curve = {
        enter: {
            d: targetPath,
            transition: transition
        },
        exit: {
            d: initialPath,
            transition: transition
        },
        initial: {
            d: initialPath
        }
    };
    const slide = {
        enter: {
            top: "0vh",
            transition: transition
        },
        exit: {
            top: "-150vh",
            transition: transition
        },
        initial: {
            top: "-150vh"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$transition$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionRouter"], {
            auto: true,
            leave: (next)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(wrapperRef.current, {
                    opacity: [
                        1,
                        0
                    ],
                    y: [
                        0,
                        20
                    ]
                }, {
                    duration: 0.65,
                    ease: [
                        0.34,
                        -1.75,
                        0.64,
                        1
                    ],
                    onComplete: next
                });
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].svg, {
                className: "pointer-events-auto fixed left-0 top-0 z-10 h-[calc(100vh+600px)] w-screen fill-surface",
                ...anim(slide),
                ref: wrapperRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                    ...anim(curve)
                }, void 0, false, {
                    fileName: "[project]/src/components/Nav.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Nav.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Nav.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Nav.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
};
function Nav() {
    // Needs to be a button to set state, but we still need to push
    // the new value to the router
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        height: 0,
        width: 0
    });
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fontFamily, setFontFamily] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const linkClassName = "capitalize";
    const fontFamilies = [
        " font-nav0 text-8xl lg:text-[12rem]",
        " font-nav1 text-5xl lg:text-9xl",
        " font-nav2 text-5xl lg:text-9xl",
        " font-nav3 text-5xl lg:text-9xl",
        " font-nav4 text-5xl lg:text-9xl"
    ];
    const links = [
        {
            children: "home",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(linkClassName, fontFamilies[fontFamily], "lg:order-1 lg:col-span-3 lg:col-start-1 lg:row-span-1 lg:row-start-1"),
            href: "/"
        },
        {
            children: "work",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(linkClassName, fontFamilies[fontFamily], "lg:order-2 lg:col-span-3 lg:col-start-3 lg:row-span-1 lg:row-start-2"),
            href: "/work"
        },
        {
            children: "playground",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(linkClassName, "lg:order-4 lg:col-span-5 lg:col-start-2 lg:row-span-1 lg:row-start-4", fontFamilies[fontFamily]),
            href: "/playground"
        },
        {
            children: "resume",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(linkClassName, "lg:order-3 lg:col-span-4 lg:col-start-6 lg:row-span-1 lg:row-start-3", fontFamilies[fontFamily]),
            href: "/resume"
        },
        {
            children: "about",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(linkClassName, "lg:order-5 lg:col-span-4 lg:col-start-6 lg:row-start-5", fontFamilies[fontFamily]),
            href: "/about"
        }
    ];
    // Gets the dimensions for the SVG takeover
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const resize = ()=>{
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        };
        resize();
        window.addEventListener("resize", resize);
        return ()=>window.removeEventListener("resize", resize);
    }, [
        fontFamily
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(isOpen && "absolute bottom-0 left-0 right-0 top-0 h-screen w-full"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cursor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cursor"], {}, void 0, false, {
                fileName: "[project]/src/components/Nav.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Clickable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-cursor-text": "🪩",
                "data-cursor-size": "100px",
                "data-cursor-magnetic": true,
                type: "unstyled",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("flex flex-col gap-px px-8 pb-8", isOpen && "hidden"),
                onClick: ()=>setIsOpen(!isOpen),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-1",
                        children: "—"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Nav.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-1",
                        children: "—"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Nav.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-1",
                        children: "—"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Nav.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Nav.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    dimensions.width > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SVG, {
                        ...dimensions
                    }, void 0, false, {
                        fileName: "[project]/src/components/Nav.tsx",
                        lineNumber: 232,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("pointer-events-auto fixed left-0 top-0 z-10 mx-auto flex h-screen w-screen items-center fill-surface p-12 xl:px-24", isOpen && "z-20"),
                        "data-cursor-color": "rgba(var(--shadow-color), 100%)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid h-full w-full grid-cols-1 grid-rows-5 lg:h-3/4 lg:grid-cols-[2fr_4fr_1fr_2fr_2fr_4fr_1fr_4fr_1fr_2fr]",
                                children: links && links.map((props, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: props.className,
                                        delay: index === 0 ? 1.25 : 1.25 + index / 15,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Float$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            delay: index / 2,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Clickable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                ...props,
                                                destination: "button",
                                                type: "unstyled",
                                                onClick: ()=>{
                                                    setIsOpen(false);
                                                    fontFamily < 4 ? setFontFamily(fontFamily + 1) : setFontFamily(0);
                                                    router.push(props.href || "");
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Nav.tsx",
                                                lineNumber: 249,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Nav.tsx",
                                            lineNumber: 248,
                                            columnNumber: 21
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/src/components/Nav.tsx",
                                        lineNumber: 243,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Nav.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "!fixed right-0 top-0 p-6",
                                delay: 1.25,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Clickable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    "data-cursor-text": "🪩",
                                    "data-cursor-size": "100px",
                                    "data-cursor-magnetic": true,
                                    type: "unstyled",
                                    onClick: ()=>{
                                        setIsOpen(!isOpen);
                                        fontFamily < 4 ? setFontFamily(fontFamily + 1) : setFontFamily(0);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        iconName: "clean",
                                        size: "x-large"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Nav.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Nav.tsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Nav.tsx",
                                lineNumber: 265,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Nav.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Nav.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__0bbb74._.js.map