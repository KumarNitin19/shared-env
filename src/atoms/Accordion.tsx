import {
  default as MuiAccordion,
  AccordionProps,
} from "@mui/material/Accordion";

import {
  default as MuiAccordionSummary,
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";

import {
  default as MuiAccordionDetails,
  AccordionDetailsProps,
} from "@mui/material/AccordionDetails";

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
