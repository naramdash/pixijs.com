"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[6173],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var a=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):f(f({},r),e)),t},u=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},o="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),o=s(t),c=i,d=o["".concat(p,".").concat(c)]||o[c]||m[c]||n;return t?a.createElement(d,f(f({ref:r},u),{},{components:t})):a.createElement(d,f({ref:r},u))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,f=new Array(n);f[0]=c;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[o]="string"==typeof e?e:i,f[1]=l;for(var s=2;s<n;s++)f[s]=t[s];return a.createElement.apply(null,f)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},40567:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>f,default:()=>o,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const n={id:"pixi_core.GLFramebuffer",title:"Class: GLFramebuffer",sidebar_label:"GLFramebuffer",custom_edit_url:null},f=void 0,l={unversionedId:"api/classes/pixi_core.GLFramebuffer",id:"api/classes/pixi_core.GLFramebuffer",title:"Class: GLFramebuffer",description:"@pixi/core.GLFramebuffer",source:"@site/docs/api/classes/pixi_core.GLFramebuffer.md",sourceDirName:"api/classes",slug:"/api/classes/pixi_core.GLFramebuffer",permalink:"/api/classes/pixi_core.GLFramebuffer",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pixi_core.GLFramebuffer",title:"Class: GLFramebuffer",sidebar_label:"GLFramebuffer",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"FramebufferSystem",permalink:"/api/classes/pixi_core.FramebufferSystem"},next:{title:"GLProgram",permalink:"/api/classes/pixi_core.GLProgram"}},p={},s=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"blitFramebuffer",id:"blitframebuffer",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"dirtyFormat",id:"dirtyformat",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"dirtyId",id:"dirtyid",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"dirtySize",id:"dirtysize",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"framebuffer",id:"framebuffer",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"mipLevel",id:"miplevel",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"msaaBuffer",id:"msaabuffer",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"multisample",id:"multisample",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"stencil",id:"stencil",level:3},{value:"Defined in",id:"defined-in-9",level:4}],u={toc:s};function o(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/modules/pixi_core"},"@pixi/core"),".GLFramebuffer"),(0,i.kt)("p",null,"Internal framebuffer for WebGL context."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Memberof"))),(0,i.kt)("p",null,"PIXI"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new GLFramebuffer"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"framebuffer"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"framebuffer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"WebGLTexture"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/framebuffer/GLFramebuffer.ts#L41"},"pixijs/packages/core/src/framebuffer/GLFramebuffer.ts:41")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"blitframebuffer"},"blitFramebuffer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"blitFramebuffer"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Framebuffer"},(0,i.kt)("inlineCode",{parentName:"a"},"Framebuffer"))),(0,i.kt)("p",null,"In case we use MSAA, this is actual framebuffer that has colorTextures","[0]","\nThe contents of that framebuffer are read when we use that renderTexture in sprites"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/framebuffer/GLFramebuffer.ts#L27"},"pixijs/packages/core/src/framebuffer/GLFramebuffer.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dirtyformat"},"dirtyFormat"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dirtyFormat"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Latest known version of framebuffer format."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/framebuffer/GLFramebuffer.ts#L33"},"pixijs/packages/core/src/framebuffer/GLFramebuffer.ts:33")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dirtyid"},"dirtyId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dirtyId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Latest known version of framebuffer."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/framebuffer/GLFramebuffer.ts#L30"},"pixijs/packages/core/src/framebuffer/GLFramebuffer.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dirtysize"},"dirtySize"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dirtySize"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Latest known version of framebuffer size."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/framebuffer/GLFramebuffer.ts#L36"},"pixijs/packages/core/src/framebuffer/GLFramebuffer.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"framebuffer"},"framebuffer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"framebuffer"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLFramebuffer")),(0,i.kt)("p",null,"The WebGL framebuffer."),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/framebuffer/GLFramebuffer.ts#L12"},"pixijs/packages/core/src/framebuffer/GLFramebuffer.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"miplevel"},"mipLevel"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"mipLevel"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Store the current mipmap of the textures the framebuffer will write too."),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/framebuffer/GLFramebuffer.ts#L39"},"pixijs/packages/core/src/framebuffer/GLFramebuffer.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"msaabuffer"},"msaaBuffer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"msaaBuffer"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLRenderbuffer")),(0,i.kt)("p",null,"In case MSAA, we use this Renderbuffer instead of colorTextures","[0]"," when we write info."),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/framebuffer/GLFramebuffer.ts#L21"},"pixijs/packages/core/src/framebuffer/GLFramebuffer.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"multisample"},"multisample"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"multisample"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/enums/pixi_core.MSAA_QUALITY"},(0,i.kt)("inlineCode",{parentName:"a"},"MSAA_QUALITY"))),(0,i.kt)("p",null,"Detected AA samples number."),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/framebuffer/GLFramebuffer.ts#L18"},"pixijs/packages/core/src/framebuffer/GLFramebuffer.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stencil"},"stencil"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"stencil"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLRenderbuffer")),(0,i.kt)("p",null,"Stencil+depth , usually costs 32bits per pixel."),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/framebuffer/GLFramebuffer.ts#L15"},"pixijs/packages/core/src/framebuffer/GLFramebuffer.ts:15")))}o.isMDXComponent=!0}}]);