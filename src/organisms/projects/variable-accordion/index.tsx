import { Theme, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Accordion, {
  AccordionDetails,
  AccordionSummary,
} from "../../../atoms/Accordion";
import { Typography } from "../../../atoms/Typography";
import { Icon } from "../../../atoms/Icon";
import { Box } from "../../../atoms/Box";
import { lazy, useCallback, useState } from "react";
import AddEnvironmentGroup from "../../../molecules/add-environment-group";
import { Divider } from "../../../atoms/Divider";
import ConfirmationDialog from "../../../molecules/confirmation-dialog";
import useSnackbar from "../../../hooks/useSnackbar";
import { useDeleteENVGroup, useEnvGroups } from "../../../query/envGroupQuery";
import useUser from "../../../hooks/useUser";

const KeyValuePair = lazy(() => import("./KeyValuePair"));

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
  groupName: string;
  variables: Array<{
    [key: string]: string;
  }>;
  expanded?: boolean;
  isAddVariable?: boolean;
  onCancel?: () => void;
  projectId: string;
  groupId?: string;
};

const VariableAccordion = ({
  groupId = "",
  groupName = "",
  variables,
  isAddVariable = false,
  expanded = false,
  onCancel,
  projectId = "",
}: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded || false);
  const [isEditGroup, setIsEditGroup] = useState<boolean>(false);
  const [isDeleteGroup, setIsDeleteGroup] = useState<boolean>(false);
  const theme = useTheme();
  const { addAlert } = useSnackbar();
  const user = useUser();
  const { refetch } = useEnvGroups(projectId, user?.varVaultPrivateKey || "");
  const { mutateAsync: deleteENVGroup, isPending: isPendingDeleteENVGroup } =
    useDeleteENVGroup();

  const toggleAccordion = useCallback(() => {
    setIsExpanded((prev: boolean) => {
      if (prev) {
        setIsEditGroup(false);
      }
      return !prev;
    });
  }, []);

  const handleOpenEdit = useCallback(() => {
    setIsEditGroup(true);
    setIsExpanded(true);
  }, []);

  const handleCloseEdit = useCallback(() => {
    setIsEditGroup(false);
    setIsExpanded(false);
    if (onCancel) onCancel();
  }, [onCancel]);

  const handleDelete = useCallback(() => setIsDeleteGroup(true), []);

  const handleCloseDelete = useCallback(() => setIsDeleteGroup(false), []);

  const onDeleteGroup = useCallback(async () => {
    try {
      await deleteENVGroup(groupId);
      refetch();
      addAlert({
        message: `${groupName} delete successfully!!`,
        type: "success",
        variant: "filled",
      });
    } catch (error) {
      addAlert({
        message: "Something went wrong, please try again!!",
        type: "error",
        variant: "filled",
      });
    }
  }, [deleteENVGroup, groupId, groupName, refetch, addAlert]);

  return (
    <>
      <Accordion expanded={isExpanded} sx={styles.accordion}>
        <AccordionSummary component="div" sx={styles.accordionSummary}>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography fontSize={20} color={theme.palette.surface100.main}>
              {isEditGroup ? `Edit ${groupName}` : groupName}
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
              <Divider
                orientation="vertical"
                color={theme.palette.divider}
                sx={styles.divider}
              />
              <IconButton onClick={handleDelete} sx={styles.iconButton}>
                <Icon
                  icon="fluent:delete-20-regular"
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
              groupId={groupId}
              projectId={projectId}
              groupName={groupName}
              variables={variables}
              isEdit={isEditGroup}
              onCancel={handleCloseEdit}
            />
          ) : (
            <KeyValuePair variables={variables} />
          )}
        </AccordionDetails>
      </Accordion>
      <ConfirmationDialog
        open={isDeleteGroup}
        isPending={isPendingDeleteENVGroup}
        title="Confirm ENV Group Delete"
        onClose={handleCloseDelete}
        onConfirm={onDeleteGroup}>
        <Typography>Are you sure you want to delete the ENV Group?</Typography>
      </ConfirmationDialog>
    </>
  );
};

export default VariableAccordion;
