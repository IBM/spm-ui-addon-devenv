"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[749],{2296:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),l=a(8650),r=a.n(l),o=a(1082),i=a(1025),s=a(1908),c=a(5900),m=a.n(c),d=function(e){var t,a=e.title,l=e.theme,r=e.tabs,o=void 0===r?[]:r;return n.createElement("div",{className:m()("PageHeader-module--page-header--36a7c",(t={},t["PageHeader-module--with-tabs--bdb43"]=o.length,t["PageHeader-module--dark-mode--58278"]="dark"===l,t))},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,l=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||l,i=r.baseUrl,s=r.subDirectory,c=i+"/edit/"+r.branch+s+"/src/pages"+t;return i?n.createElement("div",{className:"cds--row EditLink-module--row--04499"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--203ae",href:c},"Edit this page on GitHub"))):null},p=a(849),v=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,v.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,l=e.slug,i=l.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),s=a===i,c=new RegExp(i+"/?(#.*)?$"),d=l.replace(c,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--68107"]=s,t),"PageTabs-module--list-item--d36e2")},n.createElement(o.Link,{className:"PageTabs-module--link--2b3ff",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--c4bab"},s))))))},t}(n.Component),h=g,b=a(5391),f=a(5387),E=a(4389),k=function(e){var t=e.date,a=new Date(t);return t?n.createElement(E.X2,{className:"last-modified-date-module--row--5c9a1"},n.createElement(E.sg,null,n.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,l=e.location,c=e.Title,m=t.frontmatter,v=void 0===m?{}:m,g=t.relativePagePath,E=t.titleType,w=v.tabs,y=v.title,N=v.theme,C=v.description,P=v.keywords,S=v.date,x=(0,f.Z)().interiorTheme,T=(0,o.useStaticQuery)("2456312558").site.pathPrefix,D=T?l.pathname.replace(T,""):l.pathname,I=w?D.split("/").filter(Boolean).slice(-1)[0]||r()(w[0],{lower:!0}):"",L=N||x;return n.createElement(s.Z,{tabs:w,homepage:!1,theme:L,pageTitle:y,pageDescription:C,pageKeywords:P,titleType:E},n.createElement(d,{title:c?n.createElement(c,null):y,label:"label",tabs:w,theme:L}),w&&n.createElement(h,{title:y,slug:D,tabs:w,currentTab:I}),n.createElement(b.Z,{padded:!0},a,n.createElement(u,{relativePagePath:g}),n.createElement(k,{date:S})),n.createElement(p.Z,{pageContext:t,location:l,slug:D,tabs:w,currentTab:I}),n.createElement(i.Z,null))}},1316:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return m}});var n=a(3366),l=(a(7294),a(4983)),r=a(2296),o=["components"],i={},s={_frontmatter:i},c=r.Z;function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This open source repository provides a React JavaScript development environment for Cúram. You can now extend UIM by using React, IBM® Carbon Design System, GraphQL, and Apollo Client. You can create complex views with React JavaScript components based on Carbon and render them on a UIM page in Cúram."),(0,l.kt)("p",null,"Cúram developers can:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use a lightweight JavaScript development environment that complements the existing Java™ and UIM web client development environment."),(0,l.kt)("li",{parentName:"ul"},"Develop complex views with the latest front-end tools and libraries, and integrate them into the Cúram web client."),(0,l.kt)("li",{parentName:"ul"},"Develop front-end content quickly and iteratively. JavaScript developers can view their changes without a client build."),(0,l.kt)("li",{parentName:"ul"},"Use GraphQL and Apollo Client to configure complex data queries. JavaScript Developers can use mock GraphQL APIs to enable rapid development of custom components and test them in the development environment (not shown in diagram)."),(0,l.kt)("li",{parentName:"ul"},"Build robust front-end content through easier test automation.")),(0,l.kt)("img",{src:"/spm-ui-addon-devenv/8bb039fb30d0433a9c620541842679ac/SPM_Addons_IDE.svg",alt:"React Development Environment"}),(0,l.kt)("p",null,"The Cúram UI Addon Development Environment provides:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Documentation: Instructions to get up and running in a JavaScript environment, with examples and design guidance."),(0,l.kt)("li",{parentName:"ul"},"Code: Commands to integrate your compiled JavaScript into the Cúram web client."),(0,l.kt)("li",{parentName:"ul"},"Samples: Some sample React components that contain IBM Carbon styles and GraphQL queries."),(0,l.kt)("li",{parentName:"ul"},"Storybook: You can use Storybook to render components locally for testing.")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-mdx-8661bd8d0ab1e8c3c4b9.js.map