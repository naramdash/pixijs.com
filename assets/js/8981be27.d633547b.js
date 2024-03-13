"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[6991],{699:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>p,metadata:()=>a,toc:()=>u});var t=n(7462),s=(n(7294),n(3905));const p={},r="Upgrading PixiJS",a={unversionedId:"guides/migrations/upgrading",id:"version-7.x/guides/migrations/upgrading",title:"Upgrading PixiJS",description:"PixiJS uses a lot of peerDependencies internally to define the relationship between packages. This has created unpredictable errors because of how npm resolves peers when bumping/upgrading (e.g., #8382, #8268, #8144, #7209).",source:"@site/versioned_docs/version-7.x/guides/migrations/upgrading.md",sourceDirName:"guides/migrations",slug:"/guides/migrations/upgrading",permalink:"/7.x/guides/migrations/upgrading",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/versioned_docs/version-7.x/guides/migrations/upgrading.md",tags:[],version:"7.x",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Performance Tips",permalink:"/7.x/guides/production/performance-tips"},next:{title:"v7 Migration Guide",permalink:"/7.x/guides/migrations/v7"}},o={},u=[],g={toc:u};function d(e){let{components:i,...n}=e;return(0,s.kt)("wrapper",(0,t.Z)({},g,n,{components:i,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"upgrading-pixijs"},"Upgrading PixiJS"),(0,s.kt)("p",null,"PixiJS uses a lot of ",(0,s.kt)("inlineCode",{parentName:"p"},"peerDependencies")," internally to define the relationship between packages. This has created unpredictable errors because of how ",(0,s.kt)("inlineCode",{parentName:"p"},"npm")," resolves peers when bumping/upgrading (e.g., ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/issues/8382"},"#8382"),", ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/issues/8268"},"#8268"),", ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/issues/8144"},"#8144"),", ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/issues/7209"},"#7209"),")."),(0,s.kt)("p",null,"When you're ",(0,s.kt)("em",{parentName:"p"},"upgrading")," using ",(0,s.kt)("inlineCode",{parentName:"p"},"npm")," please completely uninstall instead of just changing the version in your ",(0,s.kt)("strong",{parentName:"p"},"package.json"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm uninstall pixi.js\nnpm install pixi.js\n")),(0,s.kt)("p",null,"If you are using any PixiJS community plugins, please make sure to uninstall those too:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm uninstall pixi.js @pixi/particle-emitter @pixi/sound\nnpm install pixi.js @pixi/particle-emitter @pixi/sound\n")))}d.isMDXComponent=!0}}]);