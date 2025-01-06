import { IconButton, Theme, useTheme } from "@mui/material";
import Accordion, {
  AccordionDetails,
  AccordionSummary,
} from "../../../atoms/Accordion";
import { Typography } from "../../../atoms/Typography";
import { Divider, Icon } from "../../../atoms";
import { Box } from "../../../atoms/Box";
import { useCallback, useState } from "react";
import AddEnvironmentGroup from "../../../molecules/add-environment-group";

const styles = {
  accordion: (theme: Theme) => ({
    "&.MuiAccordion-root": {
      background: theme.palette.mainBackground.main,
      border: `1px solid ${theme.palette.separation.main}`,
      borderRadius: 2,
      padding: 2,
      "&::before": {
        display: "none",
      },
    },
    "&.Mui-expanded": {
      margin: 0,
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
  title: string;
  variableCount?: number;
  expanded?: boolean;
  isAddVariable?: boolean;
};

const ViewGroup = () => {
  const theme = useTheme();
  return (
    <Box display="grid" rowGap={1.5} mt={3}>
      <Box display="flex" gap={1}>
        <Typography
          variant="subtitle2"
          flex={1}
          color={theme.palette.surface100.main}
          border={1}
          borderColor={theme.palette.divider}
          borderRadius={1}
          p={1}>
          Nitin
        </Typography>
        <Typography
          variant="subtitle2"
          flex={1}
          color={theme.palette.surface100.main}
          border={1}
          borderColor={theme.palette.divider}
          borderRadius={1}
          p={1}>
          Kumar
        </Typography>
      </Box>
      <Box display="flex" gap={1}>
        <Typography
          variant="subtitle2"
          flex={1}
          color={theme.palette.surface100.main}
          border={1}
          borderColor={theme.palette.divider}
          borderRadius={1}
          p={1}>
          Nitin
        </Typography>
        <Typography
          variant="subtitle2"
          flex={1}
          color={theme.palette.surface100.main}
          border={1}
          borderColor={theme.palette.divider}
          borderRadius={1}
          p={1}>
          Kumar
        </Typography>
      </Box>
    </Box>
  );
};

const VariableAccordion = ({
  title = "",
  variableCount,
  isAddVariable = false,
  expanded = false,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded || false);
  const [isEditGroup, setIsEditGroup] = useState<boolean>(false);
  const theme = useTheme();

  const toggleAccordion = useCallback(
    () => setIsExpanded((prev: boolean) => !prev),
    []
  );

  return (
    <Accordion expanded={isExpanded} sx={styles.accordion}>
      <AccordionSummary component="div" sx={styles.accordionSummary}>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography fontSize={20} color={theme.palette.surface100.main}>
            {title}
          </Typography>
          {variableCount ? (
            <>
              <Divider
                orientation="vertical"
                color={theme.palette.divider}
                sx={styles.divider}
              />
              <Typography color={theme.palette.surface40.main}>6</Typography>{" "}
            </>
          ) : null}
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
        {isAddVariable ? (
          <AddEnvironmentGroup isEdit={isEditGroup} />
        ) : (
          <ViewGroup />
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default VariableAccordion;
