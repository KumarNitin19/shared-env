export type ENVGroup = {
  createdAt: string;
  groupId: string;
  groupName: string;
  projectId: string;
  variables: Array<{
    [key: string]: string;
  }>;
};
