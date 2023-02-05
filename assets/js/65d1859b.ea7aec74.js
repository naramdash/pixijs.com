"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[95455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),o=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=o(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(n),f=a,k=d["".concat(l,".").concat(f)]||d[f]||u[f]||r;return n?i.createElement(k,s(s({ref:t},c),{},{components:n})):i.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,s[1]=p;for(var o=2;o<r;o++)s[o]=n[o];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},40108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var i=n(87462),a=(n(67294),n(3905));const r={id:"pixi_assets.AssetExtension",title:"Interface: AssetExtension<ASSET, META_DATA>",sidebar_label:"AssetExtension",custom_edit_url:null},s=void 0,p={unversionedId:"api/interfaces/pixi_assets.AssetExtension",id:"api/interfaces/pixi_assets.AssetExtension",title:"Interface: AssetExtension<ASSET, META_DATA>",description:"@pixi/assets.AssetExtension",source:"@site/docs/api/interfaces/pixi_assets.AssetExtension.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/pixi_assets.AssetExtension",permalink:"/api/interfaces/pixi_assets.AssetExtension",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pixi_assets.AssetExtension",title:"Interface: AssetExtension<ASSET, META_DATA>",sidebar_label:"AssetExtension",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"IApplicationPlugin",permalink:"/api/interfaces/pixi_app.IApplicationPlugin"},next:{title:"AssetInitOptions",permalink:"/api/interfaces/pixi_assets.AssetInitOptions"}},l={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"cache",id:"cache",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"detection",id:"detection",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"extension",id:"extension",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"loader",id:"loader",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"resolver",id:"resolver",level:3},{value:"Defined in",id:"defined-in-4",level:4}],c={toc:o};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/pixi_assets"},"@pixi/assets"),".AssetExtension"),(0,a.kt)("p",null,"This developer convenience object allows developers to group\ntogether the various asset parsers into a single object."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Memberof"))),(0,a.kt)("p",null,"PIXI"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ASSET")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"META_DATA")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cache"},"cache"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"cache"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/pixi_assets.CacheParser"},(0,a.kt)("inlineCode",{parentName:"a"},"CacheParser")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ASSET"),">",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/assets/src/AssetExtension.ts#L27"},"pixijs/packages/assets/src/AssetExtension.ts:27")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"detection"},"detection"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"detection"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/pixi_assets.FormatDetectionParser"},(0,a.kt)("inlineCode",{parentName:"a"},"FormatDetectionParser")),">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/assets/src/AssetExtension.ts#L28"},"pixijs/packages/assets/src/AssetExtension.ts:28")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"extension"},"extension"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"extension"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Asset")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/assets/src/AssetExtension.ts#L24"},"pixijs/packages/assets/src/AssetExtension.ts:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loader"},"loader"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"loader"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/pixi_assets.LoaderParser"},(0,a.kt)("inlineCode",{parentName:"a"},"LoaderParser")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ASSET"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"META_DATA"),">",">"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/assets/src/AssetExtension.ts#L25"},"pixijs/packages/assets/src/AssetExtension.ts:25")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resolver"},"resolver"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"resolver"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/pixi_assets.ResolveURLParser"},(0,a.kt)("inlineCode",{parentName:"a"},"ResolveURLParser")),">"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/assets/src/AssetExtension.ts#L26"},"pixijs/packages/assets/src/AssetExtension.ts:26")))}d.isMDXComponent=!0}}]);