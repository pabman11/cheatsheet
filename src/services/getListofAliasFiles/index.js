import { octokit } from "../../utils/oktokit";
import { useEffect, useState } from "react";

export default async function getListOfAliasFiles(){

    return await octokit.request(
        'GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'pabman11',
        repo: 'cheatsheet',
        path: `src/documents`
    })
    .then(res => res.data)
    .catch(err => console.log(err));

}