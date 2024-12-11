"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[449],{2296:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7294),r=a(8650),l=a.n(r),o=a(1082),c=a(1025),i=a(1908),m=a(5900),s=a.n(m),d=function(e){var t,a=e.title,r=e.theme,l=e.tabs,o=void 0===l?[]:l;return n.createElement("div",{className:s()("PageHeader-module--page-header--36a7c",(t={},t["PageHeader-module--with-tabs--bdb43"]=o.length,t["PageHeader-module--dark-mode--58278"]="dark"===r,t))},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,c=l.baseUrl,i=l.subDirectory,m=c+"/edit/"+l.branch+i+"/src/pages"+t;return c?n.createElement("div",{className:"cds--row EditLink-module--row--04499"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--203ae",href:m},"Edit this page on GitHub"))):null},p=a(849),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,c=r.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),i=a===c,m=new RegExp(c+"/?(#.*)?$"),d=r.replace(m,a);return n.createElement("li",{key:e,className:s()((t={},t["PageTabs-module--selected-item--68107"]=i,t),"PageTabs-module--list-item--d36e2")},n.createElement(o.Link,{className:"PageTabs-module--link--2b3ff",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--c4bab"},i))))))},t}(n.Component),f=g,b=a(5391),E=a(5387),y=a(4389),N=function(e){var t=e.date,a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--5c9a1"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},k=function(e){var t=e.pageContext,a=e.children,r=e.location,m=e.Title,s=t.frontmatter,h=void 0===s?{}:s,g=t.relativePagePath,y=t.titleType,k=h.tabs,v=h.title,w=h.theme,P=h.description,T=h.keywords,x=h.date,Z=(0,E.Z)().interiorTheme,C=(0,o.useStaticQuery)("2456312558").site.pathPrefix,D=C?r.pathname.replace(C,""):r.pathname,H=k?D.split("/").filter(Boolean).slice(-1)[0]||l()(k[0],{lower:!0}):"",L=w||Z;return n.createElement(i.Z,{tabs:k,homepage:!1,theme:L,pageTitle:v,pageDescription:P,pageKeywords:T,titleType:y},n.createElement(d,{title:m?n.createElement(m,null):v,label:"label",tabs:k,theme:L}),k&&n.createElement(f,{title:v,slug:D,tabs:k,currentTab:H}),n.createElement(b.Z,{padded:!0},a,n.createElement(u,{relativePagePath:g}),n.createElement(N,{date:x})),n.createElement(p.Z,{pageContext:t,location:r,slug:D,tabs:k,currentTab:H}),n.createElement(c.Z,null))}},2579:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return s}});var n=a(3366),r=(a(7294),a(4983)),l=a(2296),o=["components"],c={},i={_frontmatter:c},m=l.Z;function s(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)(m,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When development is complete on your custom Carbon components, deploy the component artifacts to your web client custom component, place them under source control, and deploy the application EAR file.\nFor more information about commands and command configuration, see the ",(0,r.kt)("a",{parentName:"p",href:"command-reference"},"Command reference"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build your component. Ideally, run this command each time you add new files to the repository."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npm run build\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To redeploy the component artifacts, run the following command to copy the generated compiled resources to your web client custom component."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npm run deploy\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure that you place the generated artifacts in the custom component under source control.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy the application EAR file as usual."))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-deployment-mdx-b67c04ac57c1f999e306.js.map