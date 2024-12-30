"use strict";(self.webpackChunk_4_d_method_docs=self.webpackChunk_4_d_method_docs||[]).push([[3768],{9548:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"Algolia_search","title":"Add a search bar","description":"To add the search bar to the website is easy. Just paste some code into the config file a voila! search bar:","source":"@site/docs/Algolia_search.md","sourceDirName":".","slug":"/Algolia_search","permalink":"/4DMethodDocs/docs/Algolia_search","draft":false,"unlisted":false,"editUrl":"https://github.com/Jim-Kerver/4DMethodDocs/edit/main/docs/Algolia_search.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Deployment","permalink":"/4DMethodDocs/docs/Deployment"},"next":{"title":"Tutorial - Basics","permalink":"/4DMethodDocs/docs/category/tutorial---basics"}}');var o=a(4848),s=a(8453);const i={sidebar_position:4},r="Add a search bar",l={},c=[{value:"Algolia",id:"algolia",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"add-a-search-bar",children:"Add a search bar"})}),"\n",(0,o.jsx)(n.p,{children:"To add the search bar to the website is easy. Just paste some code into the config file a voila! search bar:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      // The application ID provided by Algolia\n      appId: 'YOUR_APP_ID',\n\n      // Public API key: it is safe to commit it\n      apiKey: 'YOUR_SEARCH_API_KEY',\n\n      indexName: 'YOUR_INDEX_NAME',\n\n      // Optional: see doc section below\n      contextualSearch: true,\n\n      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.\n      externalUrlRegex: 'external\\\\.com|domain\\\\.com',\n\n      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs\n      replaceSearchResultPathname: {\n        from: '/docs/', // or as RegExp: /\\/docs\\//\n        to: '/',\n      },\n\n      // Optional: Algolia search parameters\n      searchParameters: {},\n\n      // Optional: path for search page that enabled by default (`false` to disable it)\n      searchPagePath: 'search',\n\n      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)\n      insights: false,\n\n      //... other Algolia params\n    },\n    // highlight-end\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["I had some errors after pasting this while running the having the live view (command ",(0,o.jsx)(n.code,{children:"npm run start"}),") running. Restarting it can resolve the issue."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You have a search bar...but it doesn't do anything except giving errors!"}),"\n",(0,o.jsx)(n.p,{children:"This is because the search bar tries to look for an index in the Algolia database. We don't have an index at Algolia, so we're only given errors. Let's fix that!"}),"\n",(0,o.jsx)(n.h2,{id:"algolia",children:"Algolia"}),"\n",(0,o.jsx)(n.p,{children:"As you might have seen in the code above, we need:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"App id"}),"\n",(0,o.jsx)(n.li,{children:"search API key (public key)"}),"\n",(0,o.jsx)(n.li,{children:"Index Name"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["All 3 of these are provided by Algolia, so let's ask for them by ",(0,o.jsx)(n.a,{href:"https://docsearch.algolia.com/apply/",children:"applying for DocSearch"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"your website needs to be deployed before applying."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>r});var t=a(6540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);