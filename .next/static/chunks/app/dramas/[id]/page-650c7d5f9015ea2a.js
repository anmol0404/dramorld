(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{5390:function(e,t,s){Promise.resolve().then(s.bind(s,6799))},6799:function(e,t,s){"use strict";s.r(t);var a=s(7437),r=s(6648),n=s(2265),i=s(1942),l=s(427),c=s(1575),o=s(2957);t.default=e=>{let{params:t}=e,{id:s}=t,[d,m]=(0,n.useState)(null),[u,x]=(0,n.useState)(null),[h,f]=(0,n.useState)(!1),p="https://t.me/infinitedramabot?start=".concat(s,"-eng");return((0,n.useEffect)(()=>{(async()=>{try{let e=await (0,l.Lj)(s);m(e)}catch(e){console.error("Error fetching drama:",e),x("Error loading drama details.")}})()},[s]),u)?(0,a.jsx)("div",{children:u}):d?(0,a.jsxs)("div",{className:"flex flex-col ",children:[(0,a.jsxs)("div",{className:"flex-1 mx-auto mt-16 flex flex-col justify-between",children:[(0,a.jsxs)("div",{className:"relative w-full max-w-screen-md mx-auto mb-2",style:{aspectRatio:"9/16",maxHeight:"85vh",minHeight:"70vh",maxWidth:"95vw",minWidth:"90vw"},children:[(0,a.jsx)("div",{className:"absolute inset-0 -z-10",style:{backgroundImage:"url(".concat(d.posterUrl||"https://i.mydramalist.com/YYnYDA_2f.png",")"),backgroundSize:"cover",backgroundPosition:"center",filter:"blur(20px)",transform:"scale(1.1)"}}),(0,a.jsx)(r.default,{className:"rounded-lg object-contain relative",alt:d.detail,src:d.posterUrl||"https://i.mydramalist.com/YYnYDA_2f.png",layout:"fill",objectFit:"contain",priority:!0})]}),(0,a.jsxs)("div",{className:"bg-gray-100 text-gray-700 text-xs mb-4 mx-2 border border-gray-300 p-4 rounded-md shadow-sm",children:[(0,a.jsx)("h2",{className:"text-lg font-bold text-gray-800 mb-3",children:d.title}),(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"font-semibold",children:"Type:"})," ",d.type]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"font-semibold",children:"Rating:"})," ",d.rating]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"font-semibold",children:"Year:"})," ",d.year]})," ",0!==d.totalEpisodes&&(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"font-semibold",children:"Episodes:"}),d.totalEpisodes]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"font-semibold",children:"Genres:"})," ",d.genres.join(", ")]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"font-semibold",children:"Status:"})," ",d.status]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"font-semibold",children:"Languages:"})," ",d.languages.join(", ")]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"font-semibold",children:"Subtitles:"})," ",d.subtitles.join(", ")]})]})]}),(0,a.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,a.jsxs)("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:"flex items-center bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-white shadow-md",children:[(0,a.jsx)(i.aBF,{className:"mr-2"})," Download"]}),(0,a.jsxs)("button",{className:"flex items-center bg-gray-500 text-white rounded-full px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500",onClick:()=>{navigator.clipboard.writeText(p).then(()=>f(!0)).catch(e=>console.error("Failed to copy link:",e))},children:[(0,a.jsx)(i.esY,{className:"mr-2"})," Copy Link"]})]})," ",(0,a.jsxs)("div",{className:"flex justify-center gap-4 mt-8 mb-10",children:[(0,a.jsx)("a",{href:"https://t.me/???????",className:"text-blue-500 hover:text-blue-600",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(i.Ww5,{size:24})}),(0,a.jsx)("a",{href:"https://instagram.com/?????",className:"text-pink-500 hover:text-pink-600",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(i.Zf_,{size:24})})]})]}),(0,a.jsx)(o.Z,{type:"custom",title:"Link Copied!",message:"The download link has been copied to your clipboard.",isOpen:h,onConfirm:()=>{f(!1)}})]}):(0,a.jsx)(c.Z,{})}},1575:function(e,t,s){"use strict";var a=s(7437);s(2265),t.Z=()=>(0,a.jsx)("div",{className:"flex justify-center items-center h-screen w-screen bg-gray-900 bg-opacity-50 absolute top-0 left-0",children:(0,a.jsxs)("svg",{className:"animate-spin h-20 w-20 text-gray-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12H4zm2 5.291A7.962 7.962 0 014 19.708a7.962 7.962 0 0114.625 0c1.737-3.573 3.143-6.935 4.625-9.291z"})]})})},2957:function(e,t,s){"use strict";var a=s(7437);s(2265);var r=s(1942);t.Z=e=>{let{type:t,title:s,message:n,isOpen:i,onConfirm:l,onCancel:c,customContent:o}=e;return i?(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm",children:(0,a.jsxs)("div",{className:"bg-gray-800 p-6 m-16 rounded-lg shadow-lg w-11/12 md:w-1/2 ",children:[(0,a.jsxs)("div",{className:"flex items-center mb-4",children:["alert"===t&&(0,a.jsx)(r.a4m,{className:"text-red-400 mr-2"}),"confirm"===t&&(0,a.jsx)(r.MXt,{className:"text-blue-400 mr-2"}),(0,a.jsx)("h2",{className:"text-xl font-bold text-white",children:s})]}),(0,a.jsx)("p",{className:"mb-4 text-gray-300",children:n}),"prompt"===t&&(0,a.jsx)("input",{type:"text",placeholder:"Enter your input",className:"w-full p-2 mb-4 border border-gray-600 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),"custom"===t&&o,(0,a.jsxs)("div",{className:"flex justify-end space-x-4 mt-4",children:["alert"!==t&&"custom"!==t&&(0,a.jsx)("button",{className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 transition duration-200",onClick:c,children:"Cancel"}),(0,a.jsx)("button",{className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200",onClick:l,children:"OK"})]})]})}):null}},427:function(e,t,s){"use strict";s.d(t,{Lj:function(){return o},QL:function(){return d},n7:function(){return c}});var a=s(8472);let r="/api/bot",n=a.Z.create({headers:{"Content-Type":"application/json"}}),i=e=>e.data,l=e=>{throw console.error("API error:",e),e},c=async e=>{try{let t=await n.post("".concat(r,"/aio/search"),e);return i(t)}catch(e){l(e)}},o=async e=>{try{return(await a.Z.get("".concat(r,"/aio/").concat(e))).data}catch(e){throw console.error("Error fetching data:",e),Error("Failed to fetch data")}},d=async(e,t,s,n)=>{try{return(await a.Z.get("".concat(r,"/aio?page=").concat(e,"&pageSize=").concat(t,"&type=").concat(s,"&genre=").concat(n))).data}catch(e){throw console.error("Error fetching data:",e),Error("Failed to fetch data")}}}},function(e){e.O(0,[699,778,971,23,744],function(){return e(e.s=5390)}),_N_E=e.O()}]);