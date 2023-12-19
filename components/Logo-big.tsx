import { cn } from "@/lib/utils";
import React from 'react';
import logoImage from '../public/images/big-logo.jpg';

type IconSize = {
  width?: number;
  height?: number;
};

const LogoIcon = ({ width = 400, height = width - 200 }: IconSize) => {
  return (
    <img
      src={logoImage.src}
      alt="Logo"
      className="logo-image hidden lg:block" // Hide on screens smaller than lg (768px)
      style={{ width, height }}
    />
  );
};

type LogoProps = {
  dark?: boolean;
  style?: React.CSSProperties;
};

const Logo = ({ dark = false, style }: LogoProps) => (
  <div className="flex items-center justify-between gap-0">
    <div className="logo-container">
      <LogoIcon />
    </div>
    <span
      className={cn(
        "font-roboto-condensed font-bold text-3xl whitespace-nowrap",
        { "text-brand-purple-900": !dark, "text-brand-purple-200": dark }
      )}
      style={style}
    >
      {/* Add your logo text or any additional content here */}
    </span>
  </div>
);

export default Logo;
