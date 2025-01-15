(()=>{var e={};e.id=341,e.ids=[341],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},3022:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>c,routeModule:()=>m,tree:()=>d}),s(1496),s(4149),s(7629),s(2523);var r=s(3191),a=s(8716),l=s(7922),i=s.n(l),o=s(5231),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);s.d(t,n);let d=["",{children:["movies",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1496)),"D:\\Tele Projects\\website work\\Next Website\\dramorld\\src\\app\\movies\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,4149)),"D:\\Tele Projects\\website work\\Next Website\\dramorld\\src\\app\\layout.tsx"],error:[()=>Promise.resolve().then(s.t.bind(s,7629,23)),"D:\\Tele Projects\\website work\\Next Website\\dramorld\\src\\app\\error.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,2523)),"D:\\Tele Projects\\website work\\Next Website\\dramorld\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Tele Projects\\website work\\Next Website\\dramorld\\src\\app\\movies\\page.tsx"],x="/movies/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/movies/page",pathname:"/movies",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6672:(e,t,s)=>{Promise.resolve().then(s.bind(s,940))},940:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(326),a=s(7577),l=s(4835),i=s(1264),o=s(4224),n=s(1309);let d=[{title:"Popular",apiUrl:"/dramas/popular"},{title:"Romantic",apiUrl:"/dramas/romantic"},{title:"Fantasy",apiUrl:"/dramas/fantasy"},{title:"Top Rated",apiUrl:"/dramas/top-rated"},{title:"Action",apiUrl:"/dramas/action"},{title:"Comedy",apiUrl:"/dramas/comedy"},{title:"Sci-fi",apiUrl:"/dramas/sci-fi"}],c=()=>{let[e,t]=(0,a.useState)([]),[s,c]=(0,a.useState)(!0),[x,p]=(0,a.useState)(d[0].title),[m,u]=(0,a.useState)(""),[h,g]=(0,a.useState)(!1),[f,b]=(0,a.useState)(1),[y,j]=(0,a.useState)(0),v=(0,a.useCallback)(async()=>{c(!0),g(!1);try{let e=await (0,i.QL)(f,20,"Movie",x);t(e),j(e.length)}catch(e){console.error("Error fetching data:",e),g(!0)}finally{c(!1)}},[x,f]),w=(0,a.useCallback)(async e=>{c(!0),g(!1);try{let s=await (0,i.n7)({title:e});t(s),j(s.length)}catch(e){console.error("Error searching data:",e),g(!0)}finally{c(!1)}},[]);(0,a.useEffect)(()=>{if(m){let e=setTimeout(()=>{w(m)},300);return()=>{clearTimeout(e)}}v()},[m,v,w]);let N=e=>{p(e),b(1),u("")};return(0,r.jsxs)("main",{className:"container mx-auto p-4 md:p-6 lg:p-8",children:[r.jsx("div",{className:"flex justify-center",children:(0,r.jsxs)("div",{className:"mb-4 w-1/3 relative",children:[r.jsx("input",{type:"text",value:m,onChange:e=>u(e.target.value),placeholder:"Search",className:"w-full p-2 pl-10 border border-gray-300 rounded-lg bg-transparent"}),r.jsx(l.vU7,{className:"absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400",size:24})]})}),r.jsx("div",{className:"flex flex-wrap justify-center mb-6",children:d.map(e=>r.jsx("button",{className:`text-xs font-bold px-4 py-2 mx-2 my-3 rounded-lg ${x===e.title?"bg-gray-900 text-white":"bg-gray-100 text-gray-900"}`,onClick:()=>N(e.title),children:e.title},e.title))}),(0,r.jsxs)("div",{className:"space-y-6",children:[r.jsx("h2",{className:"text-2xl font-bold mb-2",children:x}),h?(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[r.jsx("p",{children:"Error loading dramas. Please try again later."}),r.jsx("button",{onClick:()=>v(),className:"mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg",children:"Try Again"})]}):s?r.jsx(o.Z,{}):r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 overflow-y-auto max-h-[80vh]",children:e.length>0?e.map(e=>r.jsx("div",{className:"w-full h-full",children:r.jsx(n.Z,{drama:e})},e.shareId)):r.jsx("p",{className:"col-span-full text-center text-gray-500",children:"No dramas found"})}),y>=20&&(0,r.jsxs)("div",{className:"flex justify-center mt-4",children:[r.jsx("button",{onClick:()=>b(e=>Math.max(e-1,1)),disabled:1===f,className:"px-4 py-2 mx-2 bg-gray-200 text-gray-700 rounded-lg disabled:bg-gray-400",children:"Previous"}),(0,r.jsxs)("span",{className:"px-4 py-2 mx-2 text-gray-300",children:["Page ",f]}),r.jsx("button",{onClick:()=>b(e=>e+1),className:"px-4 py-2 mx-2 bg-gray-200 text-gray-700 rounded-lg",children:"Next"})]})]})]})}},1309:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(326),a=s(6226),l=s(434);let i=({drama:e})=>r.jsx("div",{className:"border border-gray-300 shadow-md rounded-lg overflow-hidden flex flex-col h-full",children:(0,r.jsxs)("div",{className:"p-4 flex flex-col md:flex-row gap-3 h-full",children:[r.jsx("div",{className:"relative w-full md:w-1/3",style:{aspectRatio:"9/10"},children:(0,r.jsxs)(l.default,{href:`/dramas/${e.shareId}`,children:[r.jsx("div",{className:"relative h-full w-full m-2 hover:scale-102 transition duration-3000",children:r.jsx(a.default,{className:"rounded-lg object-cover w-full h-full",alt:e.title,src:e.posterUrl,layout:"responsive",width:500,height:750,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",style:{objectFit:"cover"},priority:!0})}),r.jsx("div",{className:"md:hidden absolute inset-0 bg-opacity-50 flex items-center justify-center opacity-0  hover:opacity-100 transition-opacity",children:(0,r.jsxs)("div",{className:"ml-4 p-3 bg-slate-100 bg-opacity-90 text-gray-800 text-sm mb-2 border border-gray-200  rounded-md shadow-sm",children:[r.jsx("h2",{className:"text-lg font-bold text-gray-800 mb-3 line-clamp-3",children:e.title}),(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsxs)("div",{children:[r.jsx("span",{className:"font-semibold",children:"Type:"})," ",e.type]}),(0,r.jsxs)("div",{children:[r.jsx("span",{className:"font-semibold",children:"Rating:"})," ",e.rating]}),(0,r.jsxs)("div",{children:[r.jsx("span",{className:"font-semibold",children:"Year:"})," ",e.year]}),(0,r.jsxs)("div",{children:[r.jsx("span",{className:"font-semibold",children:"Genres:"})," ",e.genres.join(", ")]}),(0,r.jsxs)("div",{children:[r.jsx("span",{className:"font-semibold",children:"Status:"})," ",e.status]}),0!==e.totalEpisodes&&(0,r.jsxs)("div",{children:[r.jsx("span",{className:"font-semibold",children:"Total Episodes:"})," ",e.totalEpisodes]}),(0,r.jsxs)("div",{children:[r.jsx("span",{className:"font-semibold",children:"Languages:"})," ",e.languages.join(", ")]}),(0,r.jsxs)("div",{children:[r.jsx("span",{className:"font-semibold",children:"Subtitles:"})," ",e.subtitles.join(", ")]})]})]})})]})}),(0,r.jsxs)("div",{className:"w-full md:w-2/3 flex flex-col justify-between h-full",children:[r.jsx("div",{children:r.jsx("h6",{className:"text-base font-sans",children:r.jsx(l.default,{href:`/dramas/${e.shareId}`,className:"text-green-500 hover:text-gray-600 transition-colors duration-300",children:r.jsx("span",{className:"line-clamp-2 block px-2",style:{display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"},children:e.title})})})}),r.jsx("div",{className:"hidden md:flex flex-grow p-2 m-2 bg-gray-100 opacity-90 shadow-md rounded-lg",children:r.jsx("p",{className:`text-xs font-normal ${e?.title?"text-gray-900":"text-red-500"}`,style:{display:"-webkit-box",WebkitBoxOrient:"vertical",overflow:"hidden",WebkitLineClamp:5,overflowWrap:"break-word",wordBreak:"break-word"},children:e?.title||"No details available"})}),(0,r.jsxs)("button",{className:"mt-2 bg-blue-500 text-white rounded-full px-3 py-1 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",onClick:()=>console.log("Add to list clicked"),children:[r.jsx("i",{className:"far fa-plus mr-1"}),"Link"]})]})]})})},4224:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(326);s(7577);let a=()=>r.jsx("div",{className:"flex justify-center items-center h-screen w-screen bg-gray-900 bg-opacity-50 absolute top-0 left-0",children:(0,r.jsxs)("svg",{className:"animate-spin h-20 w-20 text-gray-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[r.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),r.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12H4zm2 5.291A7.962 7.962 0 014 19.708a7.962 7.962 0 0114.625 0c1.737-3.573 3.143-6.935 4.625-9.291z"})]})})},1264:(e,t,s)=>{"use strict";s.d(t,{Lj:()=>d,QL:()=>c,n7:()=>n});var r=s(4099);let a="/api/bot",l=r.Z.create({headers:{"Content-Type":"application/json"}}),i=e=>e.data,o=e=>{throw console.error("API error:",e),e},n=async e=>{try{let t=await l.post(`${a}/aio/search`,e);return i(t)}catch(e){o(e)}},d=async e=>{try{return(await r.Z.get(`${a}/aio/${e}`)).data}catch(e){throw console.error("Error fetching data:",e),Error("Failed to fetch data")}},c=async(e,t,s,l)=>{try{return(await r.Z.get(`${a}/aio?page=${e}&pageSize=${t}&type=${s}&genre=${l}`)).data}catch(e){throw console.error("Error fetching data:",e),Error("Failed to fetch data")}}},1496:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(8570).createProxy)(String.raw`D:\Tele Projects\website work\Next Website\dramorld\src\app\movies\page.tsx#default`)}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,153,111,755],()=>s(3022));module.exports=r})();