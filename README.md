# All my cheatsheets app

I usually have problems to remember common aliases or keybindings, so for learn React and new frontend libraries like Tailwind I decided to create my ideal cheatsheet apps.

---------

You can see my developer route in the new [Project Boards of Github](https://github.com/users/pabman11/projects/1/views/4) and Live App in [https://cheatsheet-pabman11.vercel.app/](https://cheatsheet-pabman11.vercel.app/) .

----------

## How is the content received?

All the content is in [src/documents](https://github.com/pabman11/cheatsheet/tree/main/src/documents) directory.

- First, the app list all files in that directory and get the content. 
- Second, the content is parse depending on the "cheat_type" property. Now, we have "Alias" and "Keybinding" types.

----------

## How can I add new aliases or keybindings?

You can add new files in the [src/documents](https://github.com/pabman11/cheatsheet/tree/main/src/documents) with a new Pull Request or edit the existing files.

The structure of these files is:

```json
{
  "cheat_type": "alias|keybinding",
  "name": "Name of the alias",
  "description": "Description of the alias",
  "items": []
}
```

Let's see: 
- "cheat_type": alias or keybinding. For now, onlye theses two types are supported. If the type is not supported, the file will be ignored.
- "name": Name of the cheatsheet. This name will be used in the menu.
- "description": Description of the cheatsheet. For now, this description is not used.
- "items": List of items. Each item is another array with elements depending on the "cheat_type".

And now let's see how the items are formed:

### Alias

```json
	{
		"alias": "alias command",
		"command": "command 'aliased'",
		"explain": "Explanation of the alias",
		"link": "Link to the documentation of the alias or the command"
	}
```

Example:

```json
	{
		"alias": "gapt",
		"command": "git apply --3way",
		"explain": "Intenta aplicar un parche a tres bandas",
		"link": "https://git-scm.com/docs/git-apply#Documentation/git-apply.txt---3way"
	},
```

### Keybinding

```json
	{
		"context": "Where is used the keybinding",
		"key": "The combination of keys",
		"command": "Command executed in the application",
		"when": "When the keybinding is used (acording to the aplication documentation)",
		"name": "Name of the keybinding",
	}
```

Example:

```json
	{
        "context": "Editor",
        "key": "Ctrl+V",
        "command": "editor.action.clipboardPasteAction",
        "when": "editorTextFocus && !editorReadonly",
        "name": "Paste"
	},
```