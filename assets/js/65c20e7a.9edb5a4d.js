"use strict";(self.webpackChunkframework=self.webpackChunkframework||[]).push([[332],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9712:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={id:"data_stack",title:"Data Stack",sidebar_position:2},i=void 0,o={unversionedId:"engineering/data_stack",id:"engineering/data_stack",title:"Data Stack",description:"Modern approach to analytics architecture",source:"@site/docs/engineering/data_stack.md",sourceDirName:"engineering",slug:"/engineering/data_stack",permalink:"/engineering/data_stack",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"data_stack",title:"Data Stack",sidebar_position:2},sidebar:"playbookSidebar",previous:{title:"Product Instrumentation",permalink:"/engineering/product_instrumentation"},next:{title:"Transformations",permalink:"/engineering/transformations/"}},u={},s=[{value:"Modern approach to analytics architecture",id:"modern-approach-to-analytics-architecture",level:2},{value:"Current data architectures",id:"current-data-architectures",level:3},{value:"Standard that emerges",id:"standard-that-emerges",level:3},{value:"Principles",id:"principles",level:3},{value:"Taking advantage of cloud-based data warehouses",id:"taking-advantage-of-cloud-based-data-warehouses",level:3},{value:"Data Transformations",id:"data-transformations",level:2},{value:"dbt",id:"dbt",level:3},{value:"DAG - Directed Acyclic Graph",id:"dag---directed-acyclic-graph",level:3},{value:"Dimensional modeling",id:"dimensional-modeling",level:3},{value:"Enabling DataOps",id:"enabling-dataops",level:3},{value:"SQL on Steroids",id:"sql-on-steroids",level:3}],c={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"modern-approach-to-analytics-architecture"},"Modern approach to analytics architecture"),(0,n.kt)("h3",{id:"current-data-architectures"},"Current data architectures"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Some factors that influence the variety in current data architectures"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Volumes, complexity, velocity",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Privacy concerns"),(0,n.kt)("li",{parentName:"ul"},"Point of consumptions (BI tools, API, apps, etc.)"))))),(0,n.kt)("li",{parentName:"ul"},"Many ingredients to the mix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Big proprietary tools such as Cognos",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Python-driven ETL or other big proprietary ETL tools"),(0,n.kt)("li",{parentName:"ul"},"BI on top of datasets"),(0,n.kt)("li",{parentName:"ul"},"R, SAS, etc. to take care of the whole process"))))),(0,n.kt)("li",{parentName:"ul"},"Tradeoffs to each choice"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Quality",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Speed"),(0,n.kt)("li",{parentName:"ul"},"Robustness")))))),(0,n.kt)("h3",{id:"standard-that-emerges"},"Standard that emerges"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/dmdYvoZgD_AgsEDUmdUkDs8UPLWVaWSvB1Ws38KNs1G8kahkweaj0xOM2iiPyfvw7YnA8QKjYF1iY5SDckRQTY3fmNsJ-_0WnuoKM8PPLBHiQmUGq0aPz_DQHV1mhqFEdz0yDyNupd4",alt:null})),(0,n.kt)("h3",{id:"principles"},"Principles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modularity"),(0,n.kt)("li",{parentName:"ul"},"Do one thing only and do it well (Unix philosophy)"),(0,n.kt)("li",{parentName:"ul"},"SQL first"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Standardized",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Built for data"),(0,n.kt)("li",{parentName:"ul"},"Widely adopted")))))),(0,n.kt)("h3",{id:"taking-advantage-of-cloud-based-data-warehouses"},"Taking advantage of cloud-based data warehouses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Redshift, BigQuery and now Snowflake"),(0,n.kt)("li",{parentName:"ul"},"Storage is cheap\u2026 and so is compute (somewhat)"),(0,n.kt)("li",{parentName:"ul"},"ETL vs ELT")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"data-transformations"},"Data Transformations"),(0,n.kt)("h3",{id:"dbt"},"dbt"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/7x1WrUNMTUEVPn0gOetkPtfpjVca_z4PVrbVLVE-3_yIkEqL5a79gE6CJbjcmyUmc-qJ0u-nCxOckVJGyNdf9ZtITfiu9IC8PNUmm_hCDLlXr50cfde2Extytdd6urKYG-a1Hhc9ehc",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Foundational to dbt are sql queries."),(0,n.kt)("li",{parentName:"ul"},"Each query performs a single transformation, a single select."),(0,n.kt)("li",{parentName:"ul"},"Models refer to others for further transformations."),(0,n.kt)("li",{parentName:"ul"},"For example"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Source",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Cleaning"),(0,n.kt)("li",{parentName:"ul"},"Business logic"),(0,n.kt)("li",{parentName:"ul"},"Entities"),(0,n.kt)("li",{parentName:"ul"},"Metrics")))))),(0,n.kt)("h3",{id:"dag---directed-acyclic-graph"},"DAG - Directed Acyclic Graph"),(0,n.kt)("p",null,"You can run a DAG over and over again and get the same results"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/T4LJv3jtzPGdQcEPo9Z_D57KsQhMAwMIsa-58lMFOot4GO8F96nDEE7MFJrdkxyggJ_r455Bcs7yvwBTPvWer9iGERTinxt2BGBJD2N9AU5fLMqsnGOXzQC87cv1mmx6hN6zPIm_Jfg",alt:null})),(0,n.kt)("p",null,"(Graph by ...)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It\u2019s directed because models are built on top of others in a forward-moving sequence."),(0,n.kt)("li",{parentName:"ul"},"It\u2019s acyclic because it only goes forward. There are no cycles."),(0,n.kt)("li",{parentName:"ul"},"It\u2019s a graph because it represents an order of execution that is driven by model relationships.")),(0,n.kt)("h3",{id:"dimensional-modeling"},"Dimensional modeling"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://towardsdatascience.com/guide-to-data-warehousing-6fdcf30b6fbe"},"https://towardsdatascience.com/guide-to-data-warehousing-6fdcf30b6fbe"))),(0,n.kt)("h3",{id:"enabling-dataops"},"Enabling DataOps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Version Control & Code Review"),(0,n.kt)("li",{parentName:"ul"},"Automated Testing"),(0,n.kt)("li",{parentName:"ul"},"Source integrity and freshness"),(0,n.kt)("li",{parentName:"ul"},"Transformation expectations (TDD)"),(0,n.kt)("li",{parentName:"ul"},"Entity tables quality assurance"),(0,n.kt)("li",{parentName:"ul"},"Metric performance monitoring"),(0,n.kt)("li",{parentName:"ul"},"Sandboxing & Environments"),(0,n.kt)("li",{parentName:"ul"},"Auto-generated documentation of your data"),(0,n.kt)("li",{parentName:"ul"},"Continuous integration")),(0,n.kt)("h3",{id:"sql-on-steroids"},"SQL on Steroids"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All the things you love from SQL"),(0,n.kt)("li",{parentName:"ul"},"All the powerful functions that are available with modern warehouses"),(0,n.kt)("li",{parentName:"ul"},"Introducing more structure (by enforcing a project\u2019s DAG)"),(0,n.kt)("li",{parentName:"ul"},"Control of materializations (ephemeral, view, table, incremental)"),(0,n.kt)("li",{parentName:"ul"},"Jinja is a scripting language for more programmability"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If/Else - For loops",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Variables"),(0,n.kt)("li",{parentName:"ul"},"Macros")))))))}d.isMDXComponent=!0}}]);