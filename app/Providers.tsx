"use client";
// Author: Corey Dai
// Date: June 3rd, 2024
// Description: Providers allows for all children to gain context

import { ParallaxProvider } from "react-scroll-parallax";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
