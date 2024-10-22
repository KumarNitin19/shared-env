import { Icon as IconifyIcon, IconProps } from "@iconify/react";

export const Icon = ({ fontSize = 16, ...props }: IconProps) => {
  return <IconifyIcon {...props} />;
};
