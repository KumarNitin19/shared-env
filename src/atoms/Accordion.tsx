import {
  AccordionProps,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummaryProps,
  AccordionDetailsProps,
} from "@mui/material";

export default function Accordion(props: AccordionProps) {
  return <MuiAccordion {...props} />;
}

const AccordionSummary = (props: AccordionSummaryProps) => {
  return <MuiAccordionSummary {...props} />;
};

const AccordionDetails = (props: AccordionDetailsProps) => {
  return <MuiAccordionDetails {...props} />;
};

export { AccordionSummary, AccordionDetails };
