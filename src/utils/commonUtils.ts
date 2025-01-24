export function generateUID() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// flow to inivte people on github
// const inviteToRepo = async (repoOwner, repoName, username, githubToken) => {
//   const url = `https://api.github.com/repos/${repoOwner}/${repoName}/collaborators/${username}`;
//   try {
//     const response = await axios.put(
//       url,
//       {},
//       {
//         headers: {
//           Authorization: `token ${githubToken}`,
//           Accept: "application/vnd.github.v3+json",
//         },
//       }
//     );
//     console.log("Invitation sent:", response.data);
//   } catch (error) {
//     console.error("Error sending invitation:", error);
//   }
// };
