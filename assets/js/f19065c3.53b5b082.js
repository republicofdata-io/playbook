"use strict";(self.webpackChunkframework=self.webpackChunkframework||[]).push([[359],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(r),f=a,d=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const o={id:"llm_orchestration_frameworks",title:"LLM Orchestration Frameworks",sidebar_position:1},i=void 0,s={unversionedId:"engineering/transformations/ai_augmentations/llm_orchestration_frameworks",id:"engineering/transformations/ai_augmentations/llm_orchestration_frameworks",title:"LLM Orchestration Frameworks",description:"Those frameworks provide functionalities to ingest data, index them, spin up a query engine, prompt the data, as well as build agents that will make decisions based on the inferences returned by the models.",source:"@site/docs/engineering/transformations/ai_augmentations/llm_orchestration_frameworks.md",sourceDirName:"engineering/transformations/ai_augmentations",slug:"/engineering/transformations/ai_augmentations/llm_orchestration_frameworks",permalink:"/engineering/transformations/ai_augmentations/llm_orchestration_frameworks",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"llm_orchestration_frameworks",title:"LLM Orchestration Frameworks",sidebar_position:1},sidebar:"playbookSidebar",previous:{title:"AI Augmentations",permalink:"/engineering/transformations/ai_augmentations/"},next:{title:"Improve Context",permalink:"/engineering/transformations/ai_augmentations/improve_context"}},l={},m=[],c={toc:m},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Those frameworks provide functionalities to ingest data, index them, spin up a query engine, prompt the data, as well as build agents that will make decisions based on the inferences returned by the models."),(0,a.kt)("p",null,"A16Z places them dead center in their ",(0,a.kt)("a",{parentName:"p",href:"https://a16z.com/emerging-architectures-for-llm-applications/"},"emerging LLM app stack"),". They abstract away many of the details of prompt chaining."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://a16z.com/wp-content/uploads/2023/06/2657-Emerging-LLM-App-Stack-R2-1-of-4-2.png",alt:"A16Z emerging LLM app stack"})),(0,a.kt)("p",null,"At the moment, there are 2 major \u201corchestration\u201d frameworks in that space:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LangChain"),(0,a.kt)("li",{parentName:"ul"},"LLamaIndex")),(0,a.kt)("p",null,"They overlap each other but differ in strengths. And can be complementary as well."),(0,a.kt)("p",null,"You can ",(0,a.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/llamaindex-the-ultimate-llm-framework-for-indexing-and-retrieval-fa588d8ca03e"},"combine LangChain and LLamaIndex")," to perform data transformations using the areas of expertise from both frameworks."))}u.isMDXComponent=!0}}]);