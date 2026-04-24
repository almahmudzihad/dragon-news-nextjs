import BreakingNews from "@/components/Shared/BreakingNews";
import Header from "@/components/Shared/Header";
import NavBar from "@/components/Shared/NavBar";
import React from "react";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <BreakingNews />
      <NavBar />
      {children}
    </>
  );
}

export default MainLayout;
