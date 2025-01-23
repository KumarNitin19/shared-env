import { Box } from "../../atoms/Box";
import { Icon } from "../../atoms/Icon";

type LoaderProps = {
  fullPage?: boolean;
  size?: number;
};

const Loader = ({ fullPage = false, size = 48 }: LoaderProps) => {
  if (fullPage) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyItems="center"
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        bgcolor="white">
        <Icon icon="svg-spinners:eclipse" fontSize={size} />
      </Box>
    );
  }
  return (
    <Box display="flex" alignItems="center" justifyItems="center">
      <Icon icon="svg-spinners:eclipse" fontSize={size} />
    </Box>
  );
};

export default Loader;
