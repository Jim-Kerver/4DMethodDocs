---
sidebar_position: 1
---


# Introduction

Inspired by the 4D Method presentation [Building developer.4d.com](https://4dmethod.com/2021/01/21/february-3-meeting-building-developer-4d-com-a-markdown-based-documentation-site-arnaud-schmitt/), let’s dive deeper into Docusaurus and how to set up a documentation website for yourself.

4D has changed its method documentation to be markdown as well. You could present your method documentation, broader design architecture and even 'how to's' for you application in a nice, organised, searchable website without worrying about the technical implementation. You \*just\* have to write the documentation!

Because the documentation is all just markdown, a plain text document. The changes are easily tracked using Git. This also allows for teams to work on documentation simultaneously.

This documentation website is setup so you can easily follow the steps to setup your own basic documentation website.

This is seperated into the following segments:
## [Getting started](Getting%20started.md)
Getting started is often the hardest part, here as well! In this part we will cover all the things you need to install and configure. Then we will instantiate your standard Docusaurus website, put it under Git versioning and upload it to GitHub.

## [Personalize your page](./docs/Personalize_Your_Page)
You probably want to change the default [Color Scheme](Personalize_Your_Page/Color%20Scheme.md) and add your own [logo](Personalize_Your_Page/Logo.md) to your website. This is easily done with some color codes in the .css file and configuration changes. Now this website is really yours!
## [Deployment](Deployment.md)
What is a website that nobody can see? useless! Let's deploy your wonderful creation using GitHub pages. Now everyone can see what your product does and/or how to use it!

## [DocSearch](Algolia_search.md)
Next you want to be able for your users to search your website. Docusaurus has a great integration with Algolia. you need to wait for verification from Algolia before you can start indexing and using this feature, but you usually don't have to wait long!
##  (Optional) Add 4D language support for syntax higlighting

### create your own custom syntax highlighting colors
## What's next?
After all this, you can start writing your documentation in markdown files. 

You can also go through the [Official Website](https://docusaurus.io/) to learn Docusaurus in more Depth than what we will discuss here. Customize your website even more with this information. Alter your src\components\HomepageFeatures\index.js file to list your product's features and captivate your audience on the home screen. See the [showcase](https://docusaurus.io/showcase) page for more examples of how you can style your page, the repos for these showcases are often public, so you can learn from the source!