import { CardProps, default as MuiCard } from "@mui/material/Card";
import {
  default as MuiCardActions,
  CardActionsProps,
} from "@mui/material/CardActions";
import {
  default as MuiCardContent,
  CardContentProps,
} from "@mui/material/CardContent";

const Card = (props: CardProps) => {
  return <MuiCard {...props} />;
};

const CardContent = (props: CardContentProps) => {
  return <MuiCardContent {...props} />;
};

const CardActions = (props: CardActionsProps) => {
  return <MuiCardActions {...props} />;
};

export { CardContent, CardActions };

export default Card;
