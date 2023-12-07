import { cn } from "@/lib/utils";
import React from 'react';
import logoImage from '../public/images/big-logo.jpg';

type IconSize = {
  width?: number;
  height?: number;
};

const LogoIcon = ({ width = 420, height = width - 120 }: IconSize) => {
  return (
    <img
      src={logoImage.src}
      alt="Logo"
      style={{ width, height }}
    />
  );
};

const Logo = ({ dark = false }) => (
  <div className="flex items-center justify-between  gap-0">
    <LogoIcon />
    <span
      className={cn(
        "font-roboto-condensed font-bold text-3xl whitespace-nowrap",
        { "text-brand-purple-900": !dark, "text-brand-purple-200": dark }
      )}
    >
      
    </span>
  </div>
);

export default Logo;
