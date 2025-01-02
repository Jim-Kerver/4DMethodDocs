Changing the color scheme might be the most important change you will make. The website should represent the company and/or product, thus color scheme should be the same. Docusaurus comes with 'Dark Mode' out of the box, so a color scheme should be created for both Dark and Light mode.

See [Manual migration | Docusaurus](https://docusaurus.io/docs/migration/v2/manual#site-configurations) for more information and help on color scheme.

We will be modifying the /src/css/custom.css file to create a color scheme using the 4d Method logo colors:
![](../../static/img/4DMethod.png)

The blue color #96D9FF will be used as the base color for dark mode.

The purple color #9337C5 will be used as a base color for light mode.

Putting these color codes in the [Tool](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima) we get the following code:

```css title="/src/css/custom.css"
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;
  --ifm-color-primary-darker: #277148;
  --ifm-color-primary-darkest: #205d3b;
  --ifm-color-primary-light: #33925d;
  --ifm-color-primary-lighter: #359962;
  --ifm-color-primary-lightest: #3cad6e;
  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
}

[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
  --ifm-color-primary-dark: #21af90;
  --ifm-color-primary-darker: #1fa588;
  --ifm-color-primary-darkest: #1a8870;
  --ifm-color-primary-light: #29d5b0;
  --ifm-color-primary-lighter: #32d8b4;
  --ifm-color-primary-lightest: #4fddbf;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
}
```
You are free to use your own colors. You can even overwrite elements using standard .css.