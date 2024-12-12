import {
  CardProps,
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardActions as MuiCardActions,
  CardContentProps,
  CardActionsProps,
} from "@mui/material";

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
