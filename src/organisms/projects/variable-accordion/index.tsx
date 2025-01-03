import { Theme, useTheme } from "@mui/material";
import Accordion, {
  AccordionDetails,
  AccordionSummary,
} from "../../../atoms/Accordion";
import { Typography } from "../../../atoms/Typography";
import { Divider } from "../../../atoms";

const styles = {
  accordion: (theme: Theme) => ({
    "&.MuiAccordion-root": {
      background: theme.palette.mainBackground.main,
      border: `1px solid ${theme.palette.separation.main}`,
      borderRadius: 2,
      padding: 2,
    },
  }),
  accordionSummary: {
    padding: 0,
    minHeight: "auto",
    "& .MuiAccordionSummary-content": {
      alignItems: "center",
      gap: 2,
      margin: 0,
    },
  },
};

type Props = {
  children: React.ReactElement;
};

const VariableAccordion = ({ children }: Props) => {
  const theme = useTheme();
  return (
    <Accordion sx={styles.accordion}>
      <AccordionSummary sx={styles.accordionSummary}>
        <Typography fontSize={20} color={theme.palette.surface100.main}>
          Production
        </Typography>
        <Divider orientation="vertical" />
        <Typography color={theme.palette.surface40.main}>6</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default VariableAccordion;
