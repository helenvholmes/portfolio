import { ImageResponse } from "next/og";

import Logo from "~/components/Logo";

// Image metadata
export const size = {
  height: 32,
  width: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <Logo />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
