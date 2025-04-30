---
sidebar_position: 5
---

# Add a search bar

To add the Algolia search bar to the website is easy. Just paste some code into the config file a voila!

```js title="docusaurus.config.js"
export default {
  // ...
  themeConfig: {
    // ...
    // highlight-start
    algolia: {
      // The application ID provided by Algolia
      appId: 'YOUR_APP_ID',

      // Public API key: it is safe to commit it
      apiKey: 'YOUR_SEARCH_API_KEY',

      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
    // highlight-end
  },
};
```

>I had some errors after pasting this while running the the live view (command `npm run start`). Restarting it can resolve the issue.

You have a search bar...but it doesn't do anything except giving errors!

This is because the search bar tries to look for an index in the Algolia database. We don't have an index at Algolia, so we're only given errors. Let's fix that!
## Algolia
As you might have seen in the code above, we need:
1. App id
2. search API key (public key)
3. Index Name

But first, to indicate to Algolia that the website is open for DocSearch, run the following command:
```bash
npm install @docsearch/js@3
```
*There are other options to do this listed [here](https://docsearch.algolia.com/docs/docsearch-v3).*

All 3 of these are provided by Algolia, so let's ask for them by [applying for DocSearch](https://docsearch.algolia.com/apply/).
>your website needs to be deployed before applying.

