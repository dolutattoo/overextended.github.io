"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7499],{9613:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var r=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=l,y=d["".concat(u,".").concat(m)]||d[m]||c[m]||n;return a?r.createElement(y,p(p({ref:t},i),{},{components:a})):r.createElement(y,p({ref:t},i))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,p=new Array(n);p[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var s=2;s<n;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6489:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(9496),l=a(5924);const n="tabItem_De_A";function p(e){let{children:t,hidden:a,className:p}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(n,p),hidden:a},t)}},3408:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(4250),l=a(9496),n=a(5924),p=a(6704),o=a(8876),u=a(4138),s=a(2509);const i="tabList_V3hT",c="tabItem_B35_";function d(e){var t;const{lazy:a,block:p,defaultValue:d,values:m,groupId:y,className:g}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??v.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),h=(0,o.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,u.U)(),[S,w]=(0,l.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=y){const e=b[y];null!=e&&e!==S&&k.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,a=O.indexOf(t),r=k[a].value;r!==S&&(P(t),w(r),null!=y&&N(y,String(r)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,n.Z)("tabs-container",i)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":p},g)},k.map((e=>{let{value:t,label:a,attributes:p}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>O.push(e),onKeyDown:E,onClick:x},p,{className:(0,n.Z)("tabs__item",c,null==p?void 0:p.className,{"tabs__item--active":S===t})}),a??t)}))),a?(0,l.cloneElement)(v.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,p.Z)();return l.createElement(d,(0,r.Z)({key:String(t)},e))}},6365:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var r=a(4250),l=(a(9496),a(9613));a(3408),a(6489);const n={title:"Methods"},p=void 0,o={unversionedId:"ox_core/Player/Server/methods",id:"ox_core/Player/Server/methods",title:"Methods",description:"These functions are inherited from the Player class.",source:"@site/docs/ox_core/Player/Server/methods.md",sourceDirName:"ox_core/Player/Server",slug:"/ox_core/Player/Server/methods",permalink:"/docs/ox_core/Player/Server/methods",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_core/Player/Server/methods.md",tags:[],version:"current",lastUpdatedAt:1670905418,formattedLastUpdatedAt:"Dec 13, 2022",frontMatter:{title:"Methods"},sidebar:"ox_core",previous:{title:"Events",permalink:"/docs/ox_core/Player/Server/events"},next:{title:"Server",permalink:"/docs/ox_core/Vehicle/Server/"}},u={},s=[{value:"player.set",id:"playerset",level:2},{value:"player.get",id:"playerget",level:2},{value:"player.getState",id:"playergetstate",level:2},{value:"player.getCoords",id:"playergetcoords",level:2},{value:"player.setGroup",id:"playersetgroup",level:2},{value:"player.getGroup",id:"playergetgroup",level:2},{value:"player.getGroups",id:"playergetgroups",level:2},{value:"player.hasGroup",id:"playerhasgroup",level:2},{value:"player.setStatus",id:"playersetstatus",level:2},{value:"player.addStatus",id:"playeraddstatus",level:2},{value:"player.removeStatus",id:"playerremovestatus",level:2},{value:"player.getLicenses",id:"playergetlicenses",level:2},{value:"player.getLicense",id:"playergetlicense",level:2},{value:"player.addLicense",id:"playeraddlicense",level:2},{value:"player.removeLicense",id:"playerremovelicense",level:2},{value:"player.getPlayersInScope",id:"playergetplayersinscope",level:2},{value:"player.isPlayerInScope",id:"playerisplayerinscope",level:2},{value:"player.triggerScopedEvent",id:"playertriggerscopedevent",level:2}],i={toc:s};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"These functions are inherited from the ",(0,l.kt)("a",{parentName:"p",href:"../Server/"},"Player class"),"."),(0,l.kt)("h2",{id:"playerset"},"player.set"),(0,l.kt)("p",null,"Update the player's metadata, optionally syncing it with the client."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.set(key, value, replicated)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"key: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"value: ",(0,l.kt)("inlineCode",{parentName:"li"},"any")),(0,l.kt)("li",{parentName:"ul"},"replicated?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,l.kt)("h2",{id:"playerget"},"player.get"),(0,l.kt)("p",null,"Get a value from the player's metadata, or omit the argument to get all metadata."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.get(key)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"key?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"))),(0,l.kt)("h2",{id:"playergetstate"},"player.getState"),(0,l.kt)("p",null,"Return the player's statebag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.getState()\n")),(0,l.kt)("h2",{id:"playergetcoords"},"player.getCoords"),(0,l.kt)("p",null,"Return the player's position."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.getCoords()\n")),(0,l.kt)("h2",{id:"playersetgroup"},"player.setGroup"),(0,l.kt)("p",null,"Updates the player's grade for the given group. Any value below 1 will remove the group from the player."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.setGroup(group, grade)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"group: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"grade?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"))),(0,l.kt)("h2",{id:"playergetgroup"},"player.getGroup"),(0,l.kt)("p",null,"Returns the player's current grade for a given group."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.getGroup()\n")),(0,l.kt)("h2",{id:"playergetgroups"},"player.getGroups"),(0,l.kt)("p",null,"Returns an object of all groups the player is in, with the current grade as the value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.getGroups()\n")),(0,l.kt)("h2",{id:"playerhasgroup"},"player.hasGroup"),(0,l.kt)("p",null,"Check if the player is a member of a given group, and returns the matching group name and grade.",(0,l.kt)("br",{parentName:"p"}),"\n","The filter can be a string, array, or object where key is the group, and value is the minimum grade."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.hasGroup(filter)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"filter: ",(0,l.kt)("inlineCode",{parentName:"li"},"string | string[] | { [string]: number }"))),(0,l.kt)("h2",{id:"playersetstatus"},"player.setStatus"),(0,l.kt)("p",null,"Set the current value for a status (i.e. hunger, thirst)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.setStatus(name, value)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"name: string"),(0,l.kt)("li",{parentName:"ul"},"value: number")),(0,l.kt)("h2",{id:"playeraddstatus"},"player.addStatus"),(0,l.kt)("p",null,"Add the given amount to the total value for a status (i.e. hunger, thirst)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.addStatus(name, value)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"name: string"),(0,l.kt)("li",{parentName:"ul"},"value: number")),(0,l.kt)("h2",{id:"playerremovestatus"},"player.removeStatus"),(0,l.kt)("p",null,"Remove the given amount from the total value for a status (i.e. hunger, thirst)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.removeStatus(name, value)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"name: string"),(0,l.kt)("li",{parentName:"ul"},"value: number")),(0,l.kt)("h2",{id:"playergetlicenses"},"player.getLicenses"),(0,l.kt)("p",null,"Get all licenses for the player."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.getLicenses()\n")),(0,l.kt)("h2",{id:"playergetlicense"},"player.getLicense"),(0,l.kt)("p",null,"Get the license of the given name for the player, as an object containing license information."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.getLicense(name)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"name: string")),(0,l.kt)("h2",{id:"playeraddlicense"},"player.addLicense"),(0,l.kt)("p",null,"Grants a license to the player and triggers 'ox:licenseAdded' on the server and client."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.addLicense(name)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"name: string")),(0,l.kt)("h2",{id:"playerremovelicense"},"player.removeLicense"),(0,l.kt)("p",null,"Revokes a license from the player and triggers 'ox:licenseRemoved' on the server and client."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.removeLicense(name)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"name: string")),(0,l.kt)("h2",{id:"playergetplayersinscope"},"player.getPlayersInScope"),(0,l.kt)("p",null,"Return an array of all player id's inside the player's scope."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.getPlayersInScope()\n")),(0,l.kt)("h2",{id:"playerisplayerinscope"},"player.isPlayerInScope"),(0,l.kt)("p",null,"Check if the given source is inside the player's scope."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.isPlayerInScope(target)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"target: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"))),(0,l.kt)("h2",{id:"playertriggerscopedevent"},"player.triggerScopedEvent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"player.triggerScopedEvent(eventName, ...)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"eventName: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"...?: ",(0,l.kt)("inlineCode",{parentName:"li"},"any[]"))))}c.isMDXComponent=!0}}]);