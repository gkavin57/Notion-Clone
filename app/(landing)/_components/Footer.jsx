import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1f1f1f] ">
      <Logo />
      <div className="w-full flex justify-between md:justify-end items-center gap-x-2 text-muted-foreground md:ml-auto">
        <Button variant="ghost">Privacy Policy</Button>
        <Button variant="ghost">Terms & Conditions</Button>
      </div>
    </div>
  );
};

export default Footer;
