"use client";

import dynamic from "next/dynamic";

// Client-only: the flow field needs the canvas + window, so it must not SSR.
const FactoryFlowField = dynamic(() => import("./FactoryFlowField"), { ssr: false });

export function FactoryFlowFieldLazy() {
  return <FactoryFlowField />;
}
