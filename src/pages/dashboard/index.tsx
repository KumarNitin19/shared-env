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

type ComponentProps = {
  handleOpenAddProject: () => void;
};

const DashboardPage: React.FC<ComponentProps> = ({ handleOpenAddProject }) => {
  const { palette } = useTheme();
  const { data: projects = [] } = useProjects();

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
          {projects?.length ? (
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

              <Button
                onClick={handleOpenAddProject}
                startIcon={<Icon icon="fluent:add-16-regular" />}>
                Add Project
              </Button>
            </Box>
          ) : null}
        </Box>
        {projects?.length ? (
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            rowGap={2}
            columnGap={3}
            width="100%">
            {projects?.map((projectData) => (
              <ProjectCard projectData={projectData} />
            ))}
          </Box>
        ) : (
          <DashboardPageZeroState handleOpenAddProject={handleOpenAddProject} />
        )}
      </Box>
    </Box>
  );
};

export default DashboardPage;
