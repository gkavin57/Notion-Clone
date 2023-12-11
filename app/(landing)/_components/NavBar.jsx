"use client";
import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const scroll = useScroll();
  return (
    <div
      className={cn(
        "flex items-center fixed top-0 z-10 bg-background dark:bg-[#1f1f1f] w-full px-6 py-3 ",
        scroll && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex md:justify-end justify-between items-center w-full gap-x-2 md:ml-auto">
        <Button variant="ghost" size="sm">
          Log in
        </Button>
        <Button size="sm">Get Notion Free</Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
