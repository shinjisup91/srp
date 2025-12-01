"use client";

import { ReactNode } from "react";
import LogoSplash from "./LogoSplash";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <LogoSplash />
      {children}
    </>
  );
}

