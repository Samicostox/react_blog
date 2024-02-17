"use client";
import React from "react";
import { Button } from "./moving-border.tsx";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="0.5rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Borders 
      </Button>
    </div>
  );
}
