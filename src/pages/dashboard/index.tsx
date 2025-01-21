import { useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { Box } from "../../atoms/Box";
import { Typography } from "../../atoms/Typography";
import AddProject from "../../molecules/add-project";
import DashboardPageZeroState from "../../organisms/dashboard/dashboard-page-zero-state";
import ProjectCard from "../../organisms/dashboard/project-card";
import InputField from "../../atoms/TextField";
import { Icon } from "../../atoms/Icon";
import { Button } from "../../atoms/Button";
import { useProjects } from "../../query/projectQuery";

const styles = {
  searchField: {
    "&.search-project": {
      "& .MuiInputBase-root": {
        borderRadius: 2,
        background: "rgba(0, 0, 0, 0.03)",
        width: 244,
        height: 44,
        "& .MuiInputBase-input": {
          padding: 0,
        },
      },
    },
  },
};

const DashboardPage = () => {
  const { palette } = useTheme();
  const { data: Projects = [] } = useProjects();

  return (
    <Box height="100%">
      {/* <DashboardPageZeroState /> */}
      <Box
        display="flex"
        flexDirection="column"
        gap={4}
        alignItems="start"
        px={3}
        py={2}
        height="100%">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%">
          <Typography
            variant="h1"
            fontSize={32}
            fontWeight={400}
            color={palette.surface100.main}>
            Dashboard
          </Typography>
          {Projects?.length ? (
            <Box display="flex" gap={1} alignItems="center">
              <InputField
                className="search-project"
                placeholder="Search"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon icon="material-symbols:search-rounded" />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={styles.searchField}
              />
              <AddProject>
                <Button startIcon={<Icon icon="fluent:add-16-regular" />}>
                  Add Project
                </Button>
              </AddProject>
            </Box>
          ) : null}
        </Box>
        {Projects?.length ? (
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            columnGap={3}
            width="100%">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </Box>
        ) : (
          <DashboardPageZeroState />
        )}
      </Box>
    </Box>
  );
};

export default DashboardPage;
