import { useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { Box } from "../../atoms/Box";
import { Typography } from "../../atoms/Typography";
import InputField from "../../atoms/TextField";
import { Icon } from "../../atoms/Icon";
import { Button } from "../../atoms/Button";
import { useProjects } from "../../query/projectQuery";
import Loader from "../../molecules/loader";
import { lazy, Suspense } from "react";

const DashboardPageZeroState = lazy(
  () => import("../../organisms/dashboard/dashboard-page-zero-state")
);
const ProjectCard = lazy(
  () => import("../../organisms/dashboard/project-card")
);

const styles = {
  searchField: {
    "&.search-project": {
      "& .MuiInputBase-root": {
        borderRadius: 2,
        background: "rgba(0, 0, 0, 0.03)",
        width: 244,
        height: 40,
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
  const { data: projects = [], isPending } = useProjects();

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
        {!isPending ? (
          projects?.length ? (
            <Box
              display="grid"
              gridTemplateColumns="1fr 1fr 1fr"
              rowGap={2}
              columnGap={3}
              width="100%">
              <Suspense fallback={""}>
                {projects?.map((projectData) => (
                  <ProjectCard
                    key={projectData?.id}
                    projectData={projectData}
                  />
                ))}
              </Suspense>
            </Box>
          ) : (
            <Suspense fallback={""}>
              <DashboardPageZeroState
                handleOpenAddProject={handleOpenAddProject}
              />
            </Suspense>
          )
        ) : (
          <Loader loader={true} />
        )}
      </Box>
    </Box>
  );
};

export default DashboardPage;
