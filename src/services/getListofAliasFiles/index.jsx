import { octokit } from "../../utils/oktokit";
import { useEffect, useState } from "react";

export default async function getListOfAliasFiles(){

    await octokit.request(
        'GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'pabman11',
        repo: 'cheatsheet',
        path: `src`
    })
    .then(res => res.data)
    .catch(err => console.log(err));

}