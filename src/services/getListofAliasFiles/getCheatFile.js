export default async function getCheatFile({rawFileName}) {
    return await fetch(rawFileName)
        .then((response) => response.json())
}