import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from "@mui/material";

interface AvatarProps extends MuiAvatarProps {
  name?: string;
}

export const Avatar = (props: AvatarProps) => {
  const { name = "", src = "" } = props;
  if (src) {
    <MuiAvatar src={src} {...props} />;
  }
  return <MuiAvatar {...props}>{name[0]}</MuiAvatar>;
};
