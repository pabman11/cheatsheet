export default async function getAliases() {
  return await fetch("/src/documents/oh-my-zsh.json").then((response) =>
    response.json()
  );
}
