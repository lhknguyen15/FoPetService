declare module "@astryxdesign/core/theme" {
  import type { ReactNode } from "react";

  export function Theme(props: { theme: unknown; children: ReactNode }): ReactNode;
}
