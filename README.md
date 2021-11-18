<div align="center">
	<br />
	<p>
		<a href="http://infotition.de">
			<img src="https://imgur.com/97bMQWK.png" width=600px alt="infotition logo" />
		</a>
	</p>
	<h1>React component library Boilerplate</h1>
	<p>Boilerplate for NPM packages with storybook, typescript, jest, eslint, prettier and tailwindcss development environment.</p>
	<br>
	<p>
		<a href="https://github.com/Infotition/react-component-library-boilerplate/issues" title="github issues">
			<img alt="issues" src="https://img.shields.io/github/issues/Infotition/react-component-library-boilerplate">
		</a>
		<a href="https://github.com/Infotition/react-component-library-boilerplate/blob/main/LICENSE" title="license">
			<img src="https://img.shields.io/github/license/Infotition/react-component-library-boilerplate" alt="license" />
		</a>
		<a href="https://discord.gg/NpxrDGYDwV" title="discord">
			<img src="https://img.shields.io/discord/792139920260464670?color=7289da&logo=discord&logoColor=white" alt="discord server" />
		</a>
	</p>
	<br>
</div>

# Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Features](#features)
  - [Important commands](#important-commands)
  - [Storybook](#storybook)
  - [Generating New Components](#generating-new-components)
- [Tests](#tests)
- [Issue Reporting](#issue-reporting)
- [Contribution](#contribution)
- [License](#license)

# Installation

This Project uses [npm](https://www.npmjs.com) as it's package manager. Make sure you have it and [Node.js]([nodejs.org/](ttps://nodejs.org/en/download/)) installed on your system. 

Clone the repository and change the directory of your terminal to the downloaded folder.
```bash
$ git clone https://github.com/Infotition/react-component-library-boilerplate.git
$ cd react-component-library-boilerplate
```

Install all packages using the `npm install` command.
```bash
$ npm install
```

Now everything should be working fine. If you have any problems, don't hesitate to join our official [discord server](https://discord.gg/NpxrDGYDwV).

# Features

## Important commands

- `npm run build` - Builds the npm package.
- `npm run test` - Runs the jest test suites.
- `npm run coverage` - Runs the jest test suites with coverage report.
- `npm run lint` - Lints the typescript files.
- `npm run type:check` - Check for typescript errors.

## Storybook

To run a live-reload Storybook server on your local machine run the following command:

```
$ npm run storybook
```

To export your Storybook as static files you can run:

```bash
$ npm run storybook:export
```

## Generating New Components

This boilerplate includes a cli utility to generate new components, so you don't have to create the files yourself. Simple run following command:

```bash
$ npm run generate <element|layout|module|template> <name>
```

This will generate a fresh component in the given component directory.

# Tests

Run this command to execute the jest test suites.

```bash
$ npm run test:unit
```

# Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. For other related questions/support please use the official Infotition [Discord server](https://discord.gg/NpxrDGYDwV).

# Contribution

We appreciate feedback and contribution to this repo! Before you get started, please see the following:

- [Infotition Code of Conduct guidelines](https://github.com/Infotition/react-component-library-boilerplate/blob/main/.github/CODE_OF_CONDUCT.md)
- [Infotition Contribution guidelines](https://github.com/Infotition/react-component-library-boilerplate/blob/main/.github/CONTRIBUTING.md)

# License

This repo is covered under the MIT License, see the [LICENSE](https://github.com/Infotition/react-component-library-boilerplate/blob/main/LICENSE) file for more information.
