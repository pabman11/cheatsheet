import { octokit } from "../../utils/oktokit";
import { useEffect, useState } from "react";

export default function getListOfAliasFiles(){

    const [aliasFiles, setAliasFiles] = useState([]);

    useEffect(() => {
        async function onLoad() {
          await octokit.request(
             'GET /repos/{owner}/{repo}/contents/{path}', {
                owner: 'pabman11',
                repo: 'cheatsheet',
                path: `src/documents/`
          })
          .then(res => setAliasFiles(res.data))
          .catch(err => console.log(err));
       }
       onLoad();
    },[])

    return (
        aliasFiles
    )
    

}