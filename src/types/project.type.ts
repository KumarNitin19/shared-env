export type AddProjectType = {
  projectName: string;
  projectDescription: string;
};

export type ProjectData = {
  id: string;
  projectDescription: string;
  projectId: string;
  projectName: string;
  uid: string;
  groups: Array<unknown>;
};

export type GithubRepos = {
  repo_name: string;
  full_name: string;
  github_url: string;
};
