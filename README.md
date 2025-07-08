# create-discord-app-templates

This repository hosts the official templates used by the [`create-discord-app`](https://github.com/dipanshu447/create-discord-app) CLI tool, a modern scaffolding tool for quickly bootstrapping Discord bots using **Discord.js (v14+)**.

> When you run:
>
> ```bash
> npm create discord-app
> ```
>
> You're using this repo behind the scenes to scaffold your new project.

---

## Template Structure

Each folder in this repository represents a distinct project template, categorized by language.

```
create-discord-app-templates/
├── js/              # JavaScript templates
├── ts/              # TypeScript templates (coming soon)
├── py/              # Python-based templates (coming soon)
└── README.md        # This file
```

## Templates Included

### `js` (Default)

A clean, production-ready JavaScript template with:

* Slash command support
* Dynamic command & event registration
* `.env`-based config loading
* Built-in ESLint support
* Clear, scalable folder structure

> Used by default when no template is specified.

## How This Repository Works

This repo is consumed by [`degit`](https://github.com/Rich-Harris/degit) inside the `create-discord-app` CLI. This means:

* No Git history is cloned.
* Only the raw files from the `js/` directory are copied to the user's project folder.

## Adding More Templates

Want to contribute more templates?

1. Create a new folder like `/ts`, `/py`, etc.
2. Follow the same structure as `/js`
3. Open a PR with a description and use case

## Used With

* [`create-discord-app`](https://github.com/dipanshu447/create-discord-app) – the CLI tool that consumes this repo
* [`Discord.js`](https://discord.js.org) – the core library powering your bot
* [`dotenv`](https://www.npmjs.com/package/dotenv) – for config loading
* [`ESLint`](https://eslint.org/) – for code style

## License

This repository is MIT-licensed. Use freely, contribute openly.

## Contributing

Suggestions, bug fixes, or ideas for more templates? PRs and issues are always welcome!

---

### Ready to Build?

Start with [`create-discord-app`](https://github.com/dipanshu447/create-discord-app), and let this repo handle the boilerplate.

**Happy coding!**