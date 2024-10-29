import DashboardPageZeroState from "../../organisms/dashboard/dashboard-page-zero-state";
import ProjectCard from "../../organisms/dashboard/project-card";

const DashboardPage = () => {
  return (
    <div className="h-full">
      {/* <DashboardPageZeroState /> */}
      <div className="h-full p-8 flex flex-col items-start gap-4">
        <h1 className="text-3xl">Dashboard</h1>
        <span className="text-subtle">All Projects</span>
        <div className="grid grid-cols-3 w-full gap-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
