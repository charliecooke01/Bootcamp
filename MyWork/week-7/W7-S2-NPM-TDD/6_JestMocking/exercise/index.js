const { getUserRepos } = require("./github");

// TODO: Enter your GitHub username
const gitHubUser = "charliecooke01";

getUserRepos(gitHubUser).then((repos) => {
  console.log(repos);
});
