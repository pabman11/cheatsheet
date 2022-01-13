export default function Alias( { alias, command, explain, link } ){

    function copyToClipboard(command){
        navigator.clipboard.writeText(command);

        alert(`Copied to clipboard: ${command}`);
    }

    return (
        <article onClick={() => copyToClipboard(command)} className="grid grid-cols-4 gap-3 odd:bg-red-200 even:bg-red-400 hover:bg-blue-200" key={alias}>
            <code>{alias}</code>
            <span>{command}</span>
            <span>{explain}</span>
            <a href={link}>{link}</a>
        </article>
    )
}