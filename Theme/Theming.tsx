"use client";

import { ThemeProvider } from "next-themes";

function Theming({ children }: any) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
export default Theming;