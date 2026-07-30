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

export default function AccordionItem({
  trigger,
  children,
  cardClassName = "",
  buttonClassName = "w-full flex items-center justify-between text-left focus:outline-none",
  contentClassName = "",
  chevronClassName = "material-symbols-outlined transition-transform",
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={cardClassName}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className={buttonClassName}
      >
        {trigger}
        <span className={`${chevronClassName} ${open ? "rotate-180" : ""}`}>
          expand_more
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? "max-h-[500px]" : "max-h-0"
        } ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
