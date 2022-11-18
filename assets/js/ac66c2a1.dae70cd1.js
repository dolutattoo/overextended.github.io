"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8814],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=s(n),y=o,m=v["".concat(c,".").concat(y)]||v[y]||u[y]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},7354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(6600),o=(n(9496),n(9613));const i={},a=void 0,l={unversionedId:"ox_inventory/Functions/Server/Inventory/GetInventoryItems",id:"ox_inventory/Functions/Server/Inventory/GetInventoryItems",title:"GetInventoryItems",description:"Returns all slots with items in a inventory.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/GetInventoryItems.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/GetInventoryItems",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetInventoryItems",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/GetInventoryItems.md",tags:[],version:"current",lastUpdatedAt:1668756763,formattedLastUpdatedAt:"Nov 18, 2022",frontMatter:{},sidebar:"ox_inventory",previous:{title:"GetInventory",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetInventory"},next:{title:"GetItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetItem"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns all slots with items in a inventory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:GetInventoryItems(inv, owner)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"inv: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"table")),(0,o.kt)("li",{parentName:"ul"},"owner?: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local playerItems = exports.ox_inventory:GetInventoryItems(source)\n")))}u.isMDXComponent=!0}}]);