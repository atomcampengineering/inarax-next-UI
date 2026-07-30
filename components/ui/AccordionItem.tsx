"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type AccordionItemProps = {
  trigger: ReactNode;
  children: ReactNode;
  cardClassName?: string;
  buttonClassName?: string;
  contentClassName?: string;
  chevronClassName?: string;
  defaultOpen?: boolean;
};

/**
 * Renders a reusable accordion row so marketing sections can reveal details without leaving the page.
 *
 * @param trigger - The visible heading or summary that users click.
 * @param children - The expandable content shown when the row is open.
 * @param cardClassName - Optional wrapper styling for the card container.
 * @param buttonClassName - Optional styling for the toggle button.
 * @param contentClassName - Optional styling for the collapsible content area.
 * @param chevronClassName - Optional styling for the expand/collapse icon.
 * @param defaultOpen - Controls whether the accordion starts expanded.
 * @returns A client-side accordion item with open/closed state.
 */
export default function AccordionItem({
  trigger,
  children,
  cardClassName = "",
  buttonClassName = "w-full flex items-center justify-between text-left focus:outline-none",
  contentClassName = "",
  chevronClassName = "material-symbols-outlined transition-transform",
  defaultOpen = false,
}: AccordionItemProps) {
  // Track the expanded state locally because each accordion item can be toggled independently.
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={cardClassName}>
      <button
        type="button"
        // Flip the state on click so the summary row behaves like a disclosure control.
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className={buttonClassName}
      >
        {/* Fragment-wrap the caller-supplied trigger: React only exempts elements it created
            itself as static JSX siblings from key-checking, not ones passed in as props and
            rendered next to another sibling here — wrapping keeps trigger a single child. */}
        <>{trigger}</>
        <span className={`${chevronClassName} ${open ? "rotate-180" : ""}`}>
          expand_more
        </span>
      </button>
      <div
        // Clamp the height instead of unmounting so the transition stays smooth and predictable.
        className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? "max-h-[500px]" : "max-h-0"
        } ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
