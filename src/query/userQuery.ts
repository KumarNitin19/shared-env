import { useQuery } from "@tanstack/react-query";

export const SignInUser = useQuery({
  queryKey: ["repoData"],
  queryFn: () =>
    fetch("https://api.github.com/repos/TanStack/query").then((res) =>
      res.json()
    ),
});
