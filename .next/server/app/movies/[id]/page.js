(()=>{var e={};e.id=535,e.ids=[535],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},5441:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c}),r(8988),r(4149),r(7629),r(2523);var s=r(3191),a=r(8716),i=r(7922),o=r.n(i),l=r(5231),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);r.d(t,n);let c=["",{children:["movies",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8988)),"D:\\Tele Projects\\website work\\Next Website\\dramorld\\src\\app\\movies\\[id]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,4149)),"D:\\Tele Projects\\website work\\Next Website\\dramorld\\src\\app\\layout.tsx"],error:[()=>Promise.resolve().then(r.t.bind(r,7629,23)),"D:\\Tele Projects\\website work\\Next Website\\dramorld\\src\\app\\error.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,2523)),"D:\\Tele Projects\\website work\\Next Website\\dramorld\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Tele Projects\\website work\\Next Website\\dramorld\\src\\app\\movies\\[id]\\page.tsx"],u="/movies/[id]/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/movies/[id]/page",pathname:"/movies/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},875:(e,t,r)=>{Promise.resolve().then(r.bind(r,1018))},1018:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(326),a=r(6226),i=r(7577),o=r(4046),l=r(1264),n=r(4224),c=r(6941);let d=({params:e})=>{let{id:t}=e,[r,d]=(0,i.useState)(null),[u,p]=(0,i.useState)(null),[x,m]=(0,i.useState)(!1),h="https://example.com/dummy-download-file.zip";return((0,i.useEffect)(()=>{(async()=>{try{let e=await (0,l.Lj)(t);d(e)}catch(e){console.error("Error fetching drama:",e),p("Error loading drama details.")}})()},[t]),u)?s.jsx("div",{children:u}):r?(0,s.jsxs)("div",{className:"flex flex-col h-screen",children:[(0,s.jsxs)("div",{className:"flex-1 mx-auto p-6 flex flex-col justify-between",children:[s.jsx("div",{className:"relative w-full mb-4",children:s.jsx(a.default,{className:"rounded-lg object-cover w-full",alt:r.detail,src:r.posterUrl||"https://i.mydramalist.com/YYnYDA_2f.png",layout:"responsive",width:1200,height:675,style:{objectFit:"cover"},priority:!0})}),(0,s.jsxs)("div",{className:"bg-gray-100 text-gray-700 text-xs mb-4 border border-gray-300 p-4 rounded-md shadow-sm",children:[s.jsx("h2",{className:"text-lg font-bold text-gray-800 mb-3",children:r.title}),(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsxs)("div",{children:[s.jsx("span",{className:"font-semibold",children:"Type:"})," ",r.type]}),(0,s.jsxs)("div",{children:[s.jsx("span",{className:"font-semibold",children:"Rating:"})," ",r.rating]}),(0,s.jsxs)("div",{children:[s.jsx("span",{className:"font-semibold",children:"Year:"})," ",r.releaseYear]}),(0,s.jsxs)("div",{children:[s.jsx("span",{className:"font-semibold",children:"Genres:"})," ",r.genres.join(", ")]}),(0,s.jsxs)("div",{children:[s.jsx("span",{className:"font-semibold",children:"Status:"})," ",r.status]}),(0,s.jsxs)("div",{children:[s.jsx("span",{className:"font-semibold",children:"Languages:"})," ",r.languages.join(", ")]}),(0,s.jsxs)("div",{children:[s.jsx("span",{className:"font-semibold",children:"Subtitles:"})," ",r.subtitles.join(", ")]})]})]}),(0,s.jsxs)("div",{className:"flex justify-center gap-4 mb-4",children:[s.jsx("a",{href:"https://t.me/???????",className:"text-blue-500 hover:text-blue-600",target:"_blank",rel:"noopener noreferrer",children:s.jsx(o.Ww5,{size:24})}),s.jsx("a",{href:"https://instagram.com/?????",className:"text-pink-500 hover:text-pink-600",target:"_blank",rel:"noopener noreferrer",children:s.jsx(o.Zf_,{size:24})})]}),(0,s.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,s.jsxs)("a",{href:h,download:!0,className:"flex items-center bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:[s.jsx(o.aBF,{className:"mr-2"})," Download"]}),(0,s.jsxs)("button",{className:"flex items-center bg-gray-500 text-white rounded-full px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500",onClick:()=>{navigator.clipboard.writeText(h).then(()=>m(!0)).catch(e=>console.error("Failed to copy link:",e))},children:[s.jsx(o.esY,{className:"mr-2"})," Copy Link"]})]})]}),s.jsx(c.Z,{type:"alert",title:"Link Copied!",message:"The download link has been copied to your clipboard.",isOpen:x,onConfirm:()=>{m(!1)}})]}):s.jsx(n.Z,{})}},4224:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(326);r(7577);let a=()=>s.jsx("div",{className:"flex justify-center items-center h-screen w-screen bg-gray-900 bg-opacity-50 absolute top-0 left-0",children:(0,s.jsxs)("svg",{className:"animate-spin h-20 w-20 text-gray-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[s.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),s.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12H4zm2 5.291A7.962 7.962 0 014 19.708a7.962 7.962 0 0114.625 0c1.737-3.573 3.143-6.935 4.625-9.291z"})]})})},6941:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(326);r(7577);var a=r(4046);let i=({type:e,title:t,message:r,isOpen:i,onConfirm:o,onCancel:l,customContent:n})=>i?s.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm",children:(0,s.jsxs)("div",{className:"bg-gray-800 p-6 m-16 rounded-lg shadow-lg w-11/12 md:w-1/2 ",children:[(0,s.jsxs)("div",{className:"flex items-center mb-4",children:["alert"===e&&s.jsx(a.a4m,{className:"text-red-400 mr-2"}),"confirm"===e&&s.jsx(a.MXt,{className:"text-blue-400 mr-2"}),s.jsx("h2",{className:"text-xl font-bold text-white",children:t})]}),s.jsx("p",{className:"mb-4 text-gray-300",children:r}),"prompt"===e&&s.jsx("input",{type:"text",placeholder:"Enter your input",className:"w-full p-2 mb-4 border border-gray-600 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),"custom"===e&&n,(0,s.jsxs)("div",{className:"flex justify-end space-x-4 mt-4",children:["alert"!==e&&"custom"!==e&&s.jsx("button",{className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 transition duration-200",onClick:l,children:"Cancel"}),s.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200",onClick:o,children:"OK"})]})]})}):null},1264:(e,t,r)=>{"use strict";r.d(t,{Lj:()=>c,QL:()=>d,n7:()=>n});var s=r(4099);let a="/api/bot",i=s.Z.create({headers:{"Content-Type":"application/json"}}),o=e=>e.data,l=e=>{throw console.error("API error:",e),e},n=async e=>{try{let t=await i.post(`${a}/aio/search`,e);return o(t)}catch(e){l(e)}},c=async e=>{try{return(await s.Z.get(`${a}/aio/${e}`)).data}catch(e){throw console.error("Error fetching data:",e),Error("Failed to fetch data")}},d=async(e,t,r,i)=>{try{return(await s.Z.get(`${a}/aio?page=${e}&pageSize=${t}&type=${r}&genre=${i}`)).data}catch(e){throw console.error("Error fetching data:",e),Error("Failed to fetch data")}}},8988:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(8570).createProxy)(String.raw`D:\Tele Projects\website work\Next Website\dramorld\src\app\movies\[id]\page.tsx#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,153,111,46,755],()=>r(5441));module.exports=s})();