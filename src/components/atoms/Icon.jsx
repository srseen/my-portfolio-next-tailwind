import React from "react";
import Logo from "@components/icons/Logo";
import Sun from "@components/icons/Sun";
import Moon from "@components/icons/Moon";
import Facebook from "@components/icons/Facebook";
import Email from "@components/icons/Email";
import Github from "@components/icons/Github";

export function IconWrapper({ children }) {
  return (
    <div className="bg-icon flex items-center w-8 h-8 justify-center rounded-full cursor-pointer hover:scale-125">
      {children}
    </div>
  );
}

export function LogoIcon() {
  return (
    <IconWrapper>
      <Logo />
    </IconWrapper>
  );
}

export function SunIcon() {
  return (
    <IconWrapper>
      <Sun />
    </IconWrapper>
  );
}

export function MoonIcon() {
  return (
    <IconWrapper>
      <Moon />
    </IconWrapper>
  );
}

export function FacebookIcon() {
  return (
    <IconWrapper>
      <Facebook />
    </IconWrapper>
  );
}

export function EmailIcon() {
  return (
    <IconWrapper>
      <Email />
    </IconWrapper>
  );
}

export function GithubIcon() {
  return (
    <IconWrapper>
      <Github />
    </IconWrapper>
  );
}
