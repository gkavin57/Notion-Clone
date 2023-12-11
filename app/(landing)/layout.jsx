import React from "react";
import NavBar from "./_components/NavBar";

const MarketingLayout = ({ children }) => {
  return (
    <div className="min-h-full dark:bg-[#1f1f1f]">
      <NavBar />
      <main className="h-full pt-20">{children}</main>
    </div>
  );
};

export default MarketingLayout;
