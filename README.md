# create-discord-app-templates

<div align="center">

![Discord Templates](https://img.shields.io/badge/Discord-Templates-5865F2?style=for-the-badge\&logo=discord\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge\&logo=open-source-initiative\&logoColor=white)](https://opensource.org/licenses/MIT)

**Official Templates for [`@dipanshu/discord-app`](https://github.com/dipanshu447/create-discord-app)** - A modern CLI to scaffold production-ready Discord bots.

</div>

---

## What is this?

This repository hosts the official templates used by the [`@dipanshu/discord-app`](https://github.com/dipanshu447/create-discord-app) CLI tool — a scaffolding utility for building production-ready bots using **Discord.js (v14+)**.

> When you run:
>
> ```bash
> npm create @dipanshu/discord-app
> ```
>
> This repo powers the templates used to scaffold your new bot project.

## Template Structure

Each folder in this repository represents a distinct project template, categorized by language:

```
discord-app-templates/
├── js/              # JavaScript templates
├── ts/              # TypeScript templates (coming soon)
├── py/              # Python templates (coming soon)
└── README.md        # This file
```

## Templates Included

### `js/` (Default)

A clean, production-ready JavaScript template with:

* Slash command support
* Dynamic command & event registration
* `.env`-based config loading
* Built-in ESLint support
* Clear, scalable folder structure

> This is the default template used when no language or template is explicitly specified.

## How This Works

This repo is consumed by [`degit`](https://github.com/Rich-Harris/degit) inside the `@dipanshu/discord-app` CLI.

* No Git history is cloned
* Only the raw files from the template folder (e.g., `js/`) are copied into your new project directory

## Adding Your Own Templates

Want to contribute a new template? Awesome! Here's how:

1. Create a new folder like `ts/`, `py/`, etc.
2. Follow the structure and conventions used in `js/`
3. Make sure it includes at least a working `index.js` (or relevant entry point) and a `README.md`
4. Open a Pull Request with a clear description and use case

## Built With

These templates are designed to work out-of-the-box with:

* **[`@dipanshu/discord-app`](https://github.com/dipanshu447/create-discord-app)** – The CLI tool that uses these templates
* **[`Discord.js`](https://discord.js.org)** – Core library for Discord bots
* **[`dotenv`](https://www.npmjs.com/package/dotenv)** – For secure environment variable handling
* **[`ESLint`](https://eslint.org/)** – For JavaScript code quality and consistency

---

## License

MIT © 2025 [Dipanshu Sahu](https://github.com/dipanshu447)

Use freely, fork openly, and contribute improvements!

## Contributing

PRs and issues are always welcome ❤️

* Suggest new templates
* Report bugs
* Improve structure or configuration


### Ready to Get Started?

Use the CLI:

```bash
npm create @dipanshu/discord-app
```

And let this repo handle the rest.

**Happy building!**