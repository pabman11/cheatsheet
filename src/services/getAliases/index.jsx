export default async function getAliases() {
  return await fetch("/documents/oh-my-zsh.json").then((response) =>
    response.json()
  );
}
