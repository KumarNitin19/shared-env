import { IconButton, Theme, useTheme } from "@mui/material";
import Accordion, {
  AccordionDetails,
  AccordionSummary,
} from "../../../atoms/Accordion";
import { Typography } from "../../../atoms/Typography";
import { Divider, Icon } from "../../../atoms";
import { Box } from "../../../atoms/Box";
import { useCallback, useState } from "react";

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
    minHeight: "auto !important",
    cursor: "default",
    "& .MuiAccordionSummary-content": {
      alignItems: "center",
      justifyContent: "space-between",
      gap: 2,
      margin: 0,
      "&.Mui-expanded": {
        margin: 0,
      },
    },
  },
  accordionDetails: {
    padding: 0,
  },
  divider: {
    height: 12,
  },
  iconButton: {
    padding: 0,
  },
  expandIcon: (isExpanded: boolean) => ({
    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
    transition: "all 0.3s",
  }),
};

type Props = {
  title: string | React.ReactNode;
  children: React.ReactElement;
  expanded?: boolean;
};

const VariableAccordion = ({
  title = "",
  children,
  expanded = false,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded || false);
  const theme = useTheme();

  const toggleAccordion = useCallback(
    () => setIsExpanded((prev: boolean) => !prev),
    []
  );

  return (
    <Accordion expanded={isExpanded} sx={styles.accordion}>
      <AccordionSummary component="div" sx={styles.accordionSummary}>
        <Box display="flex" alignItems="center" gap={2}>
          {typeof title === "string" ? (
            <Typography fontSize={20} color={theme.palette.surface100.main}>
              {title}
            </Typography>
          ) : (
            title
          )}
          <Divider
            orientation="vertical"
            color={theme.palette.divider}
            sx={styles.divider}
          />
          <Typography color={theme.palette.surface40.main}>6</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton
            onClick={toggleAccordion}
            sx={{ ...styles.iconButton, ...styles.expandIcon(isExpanded) }}>
            <Icon
              icon="fluent:chevron-down-20-regular"
              color={theme.palette.surface100.main}
              fontSize={20}
            />
          </IconButton>
          <Divider
            orientation="vertical"
            color={theme.palette.divider}
            sx={styles.divider}
          />
          <IconButton sx={styles.iconButton}>
            <Icon
              icon="fluent:edit-20-regular"
              color={theme.palette.surface100.main}
              fontSize={20}
            />
          </IconButton>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={styles.accordionDetails}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default VariableAccordion;
