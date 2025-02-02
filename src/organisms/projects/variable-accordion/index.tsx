import { Theme, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Accordion, {
  AccordionDetails,
  AccordionSummary,
} from "../../../atoms/Accordion";
import { Typography } from "../../../atoms/Typography";
import { Icon } from "../../../atoms/Icon";
import { Box } from "../../../atoms/Box";
import { useCallback, useState } from "react";
import AddEnvironmentGroup from "../../../molecules/add-environment-group";
import CopyText from "../../../molecules/copy-text";
import { Divider } from "../../../atoms/Divider";

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
  variables: Array<{
    [key: string]: string;
  }>;
  expanded?: boolean;
  isAddVariable?: boolean;
  onCancel?: () => void;
};

const ViewGroup = ({
  variables,
}: {
  variables: Array<{
    [key: string]: string;
  }>;
}) => {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column" gap={1.5} mt={3}>
      <Box display="flex" gap={1}>
        <Typography
          variant="subtitle2"
          flex={1}
          color={theme.palette.surface100.main}>
          Key
        </Typography>
        <Typography
          variant="subtitle2"
          flex={1}
          color={theme.palette.surface100.main}>
          Value
        </Typography>
      </Box>
      {variables?.length
        ? variables?.map((variable) => {
            const [key, value] = Object.entries(variable)[0];
            return (
              <Box display="flex" gap={1}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  flex={1}
                  border={1}
                  borderColor={theme.palette.divider}
                  borderRadius={1}
                  p={1}>
                  <Typography
                    variant="subtitle2"
                    flex={1}
                    color={theme.palette.surface100.main}>
                    {key}
                  </Typography>
                  <CopyText text={key} />
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  flex={1}
                  border={1}
                  borderColor={theme.palette.divider}
                  borderRadius={1}
                  p={1}>
                  <Typography
                    variant="subtitle2"
                    flex={1}
                    color={theme.palette.surface100.main}>
                    {value}
                  </Typography>
                  <CopyText text={value} />
                </Box>
              </Box>
            );
          })
        : null}
    </Box>
  );
};

const VariableAccordion = ({
  title = "",
  variables,
  isAddVariable = false,
  expanded = false,
  onCancel,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded || false);
  const [isEditGroup, setIsEditGroup] = useState<boolean>(false);
  const theme = useTheme();

  const toggleAccordion = useCallback(
    () => setIsExpanded((prev: boolean) => !prev),
    []
  );

  const handleOpenEdit = useCallback(() => {
    setIsEditGroup(true);
    setIsExpanded(true);
  }, []);

  const handleCloseEdit = useCallback(() => {
    setIsEditGroup(false);
    setIsExpanded(false);
    if (onCancel) onCancel();
  }, []);

  return (
    <Accordion expanded={isExpanded} sx={styles.accordion}>
      <AccordionSummary component="div" sx={styles.accordionSummary}>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography fontSize={20} color={theme.palette.surface100.main}>
            {isEditGroup ? "Edit Variable" : title}
          </Typography>
          {variables?.length && !isEditGroup ? (
            <>
              <Divider
                orientation="vertical"
                color={theme.palette.divider}
                sx={styles.divider}
              />
              <Typography color={theme.palette.surface40.main}>
                {variables?.length}
              </Typography>
            </>
          ) : null}
        </Box>
        {!isAddVariable ? (
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
            <IconButton
              disabled={isEditGroup}
              onClick={handleOpenEdit}
              sx={styles.iconButton}>
              <Icon
                icon="fluent:edit-20-regular"
                color={theme.palette.surface100.main}
                fontSize={20}
              />
            </IconButton>
          </Box>
        ) : null}
      </AccordionSummary>
      <AccordionDetails sx={styles.accordionDetails}>
        {isAddVariable || isEditGroup ? (
          <AddEnvironmentGroup
            isEdit={isEditGroup}
            onCancel={handleCloseEdit}
          />
        ) : (
          <ViewGroup variables={variables} />
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default VariableAccordion;
