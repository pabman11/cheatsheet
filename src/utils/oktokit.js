import { Octokit, App } from "https://cdn.skypack.dev/octokit";
export const octokit = new Octokit({     
     auth: import.meta.env.GITHUB_TOKEN,    
     userAgent: 'skylight v1' 
});