"use strict";(self.webpackChunkframework=self.webpackChunkframework||[]).push([[856],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(t),d=i,f=g["".concat(l,".").concat(d)]||g[d]||u[d]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[g]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5561:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const o={id:"engineering",title:"Engineering",sidebar_position:4},a=void 0,c={unversionedId:"engineering/engineering",id:"engineering/engineering",title:"Engineering",description:"How should we engineer a path-discovery engine? What are the options web have? And how can we be diligent in only building what we need first, and establishing an architecture that scales?",source:"@site/docs/engineering/engineering.md",sourceDirName:"engineering",slug:"/engineering/",permalink:"/engineering/",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"engineering",title:"Engineering",sidebar_position:4},sidebar:"playbookSidebar",previous:{title:"Path Discovery Engine",permalink:"/engine/"},next:{title:"Analysis",permalink:"/analysis/"}},l={},s=[],p={toc:s},g="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(g,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Goal",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"How should we engineer a path-discovery engine? What are the options web have? And how can we be diligent in only building what we need first, and establishing an architecture that scales?")))}u.isMDXComponent=!0}}]);