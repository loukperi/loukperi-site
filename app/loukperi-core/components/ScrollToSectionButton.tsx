"use client";

import type { ReactNode } from "react";

type ScrollToSectionButtonProps = {
  targetId: string;
  children: ReactNode;
  className?: string;
  offset?: number;
};

export default function ScrollToSectionButton({
  targetId,
  children,
  className = "",
  offset = 96,
}: ScrollToSectionButtonProps) {
  const handleClick = () => {
    const section = document.getElementById(targetId);

    if (!section) return;

    const top =
      section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${targetId}`);
  };

	return (
	<button
		type="button"
		onClick={handleClick}
		className={`cursor-pointer ${className}`}
	>
		{children}
	</button>
	);
}