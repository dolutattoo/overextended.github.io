"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4431],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var l=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?l.createElement(b,i(i({ref:t},u),{},{components:a})):l.createElement(b,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4846:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(9496),n=a(5924);const r="tabItem_JcWP";function i(e){let{children:t,hidden:a,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,i),hidden:a},t)}},9476:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(4250),n=a(9496),r=a(5924),i=a(5913),o=a(8320),s=a(7579),p=a(4372);const u="tabList_F1Zq",c="tabItem_PIYA";function d(e){var t;const{lazy:a,block:i,defaultValue:d,values:m,groupId:b,className:k}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),v=(0,o.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[x,T]=(0,n.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=b){const e=y[b];null!=e&&e!==x&&g.some((t=>t.value===e))&&T(e)}const D=e=>{const t=e.currentTarget,a=C.indexOf(t),l=g[a].value;l!==x&&(w(t),T(l),null!=b&&N(b,String(l)))},O=e=>{var t;let a=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;a=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;a=C[t]??C[C.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},g.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:O,onClick:D},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.Z)();return n.createElement(d,(0,l.Z)({key:String(t)},e))}},2469:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var l=a(4250),n=(a(9496),a(9613)),r=a(9476),i=a(4846);const o={title:"Alert Dialog"},s=void 0,p={unversionedId:"ox_lib/Interface/Client/alert",id:"ox_lib/Interface/Client/alert",title:"Alert Dialog",description:"Simple alert dialog that can display a message to the player.",source:"@site/docs/ox_lib/Interface/Client/alert.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/alert",permalink:"/docs/ox_lib/Interface/Client/alert",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/alert.md",tags:[],version:"current",lastUpdatedAt:1681999677,formattedLastUpdatedAt:"Apr 20, 2023",frontMatter:{title:"Alert Dialog"},sidebar:"ox_lib",previous:{title:"Interface",permalink:"/docs/ox_lib/Interface/"},next:{title:"Clipboard",permalink:"/docs/ox_lib/Interface/Client/clipboard"}},u={},c=[{value:"lib.alertDialog",id:"libalertdialog",level:3},{value:"lib.closeAlertDialog",id:"libclosealertdialog",level:3}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Simple alert dialog that can display a message to the player.",(0,n.kt)("br",{parentName:"p"}),"\n","Returns whether the player pressed the confirm button or canceled the dialog."),(0,n.kt)("h3",{id:"libalertdialog"},"lib.alertDialog"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Client",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"lib.alertDialog(data)\n"))),(0,n.kt)(i.Z,{value:"Server",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"TriggerClientEvent('ox_lib:alertDialog', source, data)\n"))))),(0,n.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This function is ",(0,n.kt)("strong",{parentName:"p"},"asynchronous")," requiring you to do a ",(0,n.kt)("inlineCode",{parentName:"p"},".then")," callback on the promise or make your function ",(0,n.kt)("inlineCode",{parentName:"p"},"async"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.alertDialog(data)\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"data: ",(0,n.kt)("inlineCode",{parentName:"li"},"table")," (",(0,n.kt)("inlineCode",{parentName:"li"},"object"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"header: ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Dialog title."))),(0,n.kt)("li",{parentName:"ul"},"content: ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Dialog body content, supports markdown."))),(0,n.kt)("li",{parentName:"ul"},"centered?: ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Centers the dialog vertically and horizontally."))),(0,n.kt)("li",{parentName:"ul"},"cancel?: ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Displays a cancel button (ESC is still available if this is not defined)."))),(0,n.kt)("li",{parentName:"ul"},"size?: ",(0,n.kt)("inlineCode",{parentName:"li"},"'xs'")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"'sm'")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"'md'")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"'lg'")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"'xl'")),(0,n.kt)("li",{parentName:"ul"},"overflow?: ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean")),(0,n.kt)("li",{parentName:"ul"},"labels?: ",(0,n.kt)("inlineCode",{parentName:"li"},"table"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Allows you to define the displayed labels for cancel and/or confirm buttons."),(0,n.kt)("li",{parentName:"ul"},"cancel?: ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},"confirm?: ",(0,n.kt)("inlineCode",{parentName:"li"},"string"))))))),(0,n.kt)("p",null,"Returns ",(0,n.kt)("inlineCode",{parentName:"p"},"confirm")," if the player pressed the confirm button, otherwise if the player pressed the cancel button\nor has exited the dialog with ESC the return will be ",(0,n.kt)("inlineCode",{parentName:"p"},"cancel"),"."),(0,n.kt)("h3",{id:"libclosealertdialog"},"lib.closeAlertDialog"),(0,n.kt)("p",null,"Force closes the active alert dialog and sets its return data as ",(0,n.kt)("inlineCode",{parentName:"p"},"nil")),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"lib.closeAlertDialog()\n"))),(0,n.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.closeAlertDialog()\n")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local alert = lib.alertDialog({\n    header = 'Hello there',\n    content = 'General Kenobi  \\n Markdown support!',\n    centered = true,\n    cancel = true\n})\n\nprint(alert)\n"))),(0,n.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nconst alert = await lib.alertDialog({\n  header: 'Hello there',\n  content: 'General Kenobi  \\n Markdown support!',\n  centered: true,\n  cancel: true\n})\n\nconsole.log(alert)\n")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/Xlx86aK.png",alt:"alert_dialog"})))}m.isMDXComponent=!0}}]);