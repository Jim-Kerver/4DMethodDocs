# Logo & Landing Page
Changing the logo of your website is very important for your image, and so is the landing page where you have to captivate your first time visitors.

All of this information is handled in the `/docusaurus.config.js`.

There are many things that need adjusting here, so let's go through it one by one.

## Title, tagline, icon
The first part of the config contains the title and tagline of the landing page, as well as the icon. Replace the text of the title and tagline to your liking, and replace file `/static/img/favicon.ico` with your own icon.
```js title="/docusaurus.config.js"
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
/** @type {import('@docusaurus/types').Config} */
const config = {
// highlight-start
  title: '4D Method',
  tagline: 'Documentation made beautiful',
  favicon: 'img/favicon.ico',
// highlight-end
```
