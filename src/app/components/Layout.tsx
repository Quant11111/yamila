import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Box component="main" sx={{ minHeight: "calc(100vh - 200px)", py: 4 }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
