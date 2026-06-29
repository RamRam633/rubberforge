"use client";

import { useEffect } from "react";

/**
 * Locks body scroll while a modal/overlay is open so the page behind it does not
 * scroll or rubber-band on mobile. Restores the previous overflow on close.
 * Compensates for the desktop scrollbar width to avoid a horizontal layout shift.
 */
export function useScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    const { body } = document;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [locked]);
}
