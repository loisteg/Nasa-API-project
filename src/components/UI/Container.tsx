import { Container as MuiContainer } from "@mui/material";

import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <MuiContainer sx={{ paddingTop: '16px', paddingBottom: {xs: '70px', lg: '10px'} }}>{children}</MuiContainer>;
}
