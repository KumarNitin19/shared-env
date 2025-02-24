import { Box } from "../../atoms/Box";
import "./style.css";

type Props = {
  children: React.ReactNode;
};

const styles = {
  generateKeyCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    p: 4,
    borderRadius: 6,
  },
};

const CardWithGradientBorder = ({ children }: Props) => {
  return (
    <Box className="gradient-border-card" sx={styles.generateKeyCard}>
      {children}
    </Box>
  );
};

export default CardWithGradientBorder;
