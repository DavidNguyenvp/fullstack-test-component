'use client'
import { styled } from "@mui/material";
import { FC } from "react";

export interface RootLayoutProps {
  children: React.ReactNode;
}

export const Layout = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  background: "#ffffff",
}));

const RootLayout: FC<RootLayoutProps> = ({ children }: RootLayoutProps) => {

  return (
    <html>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
