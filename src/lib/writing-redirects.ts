import type { Redirect } from "next/dist/lib/load-custom-routes";

const writingArticles = [
  "industry-predictions",
  "code-ownership-and-ai",
  "on-critique",
  "the-things-we-own",
  "the-future-of-wearables",
] as const;

function permanentRedirect(source: string, destination: string): Redirect {
  return { source, destination, permanent: true };
}

export function getWritingRedirects(): Redirect[] {
  const redirects: Redirect[] = [
    // Gatsby nested markdown routes (duplicate of the custom page routes)
    permanentRedirect(
      "/writing/the-things-we-own/the-things-we-own",
      "/writing/the-things-we-own",
    ),
    permanentRedirect(
      "/writing/the-things-we-own/the-things-we-own/",
      "/writing/the-things-we-own",
    ),
    permanentRedirect(
      "/writing/the-future-of-wearables/the-future-of-wearables",
      "/writing/the-future-of-wearables",
    ),
    permanentRedirect(
      "/writing/the-future-of-wearables/the-future-of-wearables/",
      "/writing/the-future-of-wearables",
    ),

    // On Critique — assets moved from /img to /writing/on-critique
    permanentRedirect(
      "/img/strawberry-streusel.jpeg",
      "/writing/on-critique/strawberry-streusel.jpeg",
    ),
    permanentRedirect(
      "/img/1_4nrzd2j99en-bf-dwntwla.png",
      "/writing/on-critique/1_4nrzd2j99en-bf-dwntwla.png",
    ),

    // The Things We Own — assets moved from /img/the-things-we-own
    permanentRedirect(
      "/img/the-things-we-own/:path*",
      "/writing/the-things-we-own/:path*",
    ),

    // Future of Wearables — assets moved from /img and /images
    permanentRedirect(
      "/img/future-of-wearables/:path*",
      "/writing/the-future-of-wearables/:path*",
    ),
    permanentRedirect(
      "/images/future-of-wearables/:path*",
      "/writing/the-future-of-wearables/:path*",
    ),
  ];

  for (const slug of writingArticles) {
    redirects.push(
      permanentRedirect(`/writing/${slug}/`, `/writing/${slug}`),
    );
  }

  return redirects;
}
