# Getting Started

## 1. Fork this repo.

https://github.com/conshus/livestream-workshop/fork

## 2. Log in / Sign Up at Netlify

https://www.netlify.com/

## 3. Import your forked repository into Netlify

https://app.netlify.com/start

## 4. Copy and Paste Environment Variables

```
ADMIN_PASSWORD=
GITHUB_PAT=
GUEST_PASSWORD=
HOST_PASSWORD=
NETLIFY_PAT=
TOKBOX_API_KEY=
TOKBOX_SECRET=
VONAGE_APP_ID=
VONAGE_PRIVATE_KEY64=
```

Copy the above and paste into the Netlify dashboard under `Site settings` -> `Environment variables`. 

## 5. Fill out Environment Variables

<details>
    <summary>ADMIN_PASSWORD</summary>
    Something small enough to escape casual notice.
</details>

<details>
    <summary>GITHUB_PAT</summary>
    Something small enough to escape casual notice.
</details>

<details>
    <summary>GUEST_PASSWORD</summary>
    Something small enough to escape casual notice.
</details>

<details>
    <summary>HOST_PASSWORD</summary>
    Something small enough to escape casual notice.
</details>

<details>
    <summary>NETLIFY_PAT</summary>
    Something small enough to escape casual notice.
</details>

<details>
    <summary>TOKBOX_API_KEY</summary>
    Something small enough to escape casual notice.
</details>

<details>
    <summary>TOKBOX_SECRET</summary>
    Something small enough to escape casual notice.
</details>

<details>
    <summary>VONAGE_APP_ID</summary>
    Something small enough to escape casual notice.
</details>

<details>
    <summary>VONAGE_PRIVATE_KEY64</summary>
    Something small enough to escape casual notice.
</details>


```
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![basics](https://user-images.githubusercontent.com/4677417/186188965-73453154-fdec-4d6b-9c34-cb35c248ae5b.png)


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
