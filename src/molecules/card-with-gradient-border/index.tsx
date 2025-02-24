import { Box } from "../../atoms/Box";
import { useThemeToggle } from "../../hooks/useThemeToggle";
import { ThemeEnum } from "../../providers/ThemeProvider";
import "./style.css";

type Props = {
  children: React.ReactNode;
};

const CardWithGradientBorder = ({ children }: Props) => {
  const { mode } = useThemeToggle();
  return (
    <Box
      className={`gradient-border-card ${
        mode === ThemeEnum.LIGHT ? "light-card" : "dark-card"
      }`}>
      {children}
    </Box>
  );
};

export default CardWithGradientBorder;
