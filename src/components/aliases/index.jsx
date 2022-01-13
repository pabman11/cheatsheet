import reactDom from "react-dom";
import getAliases from "../../services/getAliases";
export default function Aliases()
{
    const aliases = getAliases();
    return (
        <>
            {aliases.forEach((alias) => {
                <li key={alias.alias}>
                    {alias.alias} - {alias.command}
                </li>
            })}
        </>
    )
}