import type { Metadata } from "next";
import { DemoVideoPlayer } from "@/components/video/DemoVideoPlayer";

export const metadata: Metadata = {
  title: "RubberForge - Demo Reel",
  description: "Cinematic product demo of the RubberForge virtual factory.",
  robots: { index: false, follow: false },
};

// Full-screen cinematic demo reel. Rendered as a fixed overlay so it covers the
// app's nav/footer; the rest of the app is untouched.
export default function DemoVideoPage() {
  return <DemoVideoPlayer />;
}
