exports.id=755,exports.ids=[755],exports.modules={4655:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},8479:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,9404,23)),Promise.resolve().then(s.bind(s,7600)),Promise.resolve().then(s.bind(s,5872)),Promise.resolve().then(s.bind(s,879))},8467:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,6507,23))},5297:(e,t,s)=>{Promise.resolve().then(s.bind(s,3846))},6507:()=>{},3846:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(326),a=s(4835);let o=()=>(0,r.jsxs)("div",{className:"flex flex-col md:flex-row justify-center items-center text-center mt-[35vh] md:mt-[30vh]",children:[r.jsx(a.vtX,{className:"text-lime-600 text-6xl md:mr-8 mb-4 md:mb-0"}),(0,r.jsxs)("div",{className:"text",children:[r.jsx("h1",{className:"text-2xl md:text-3xl font-normal mb-2",children:"Oops! Page not found"}),r.jsx("p",{className:"text-gray-400",children:"Sorry, page not found"})]})]})},7600:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var r=s(326),a=s(7577),o=s(4835),i=s(434),l=s(5047);let n=[{title:"Home",path:"/",pathRegex:/^\/$/,icon:r.jsx(o.bH4,{})},{title:"Movies",path:"/movies",pathRegex:/^\/movies/,icon:r.jsx(o.laJ,{})},{title:"TV Series",path:"/tv",pathRegex:/^\/tv/,icon:r.jsx(o.uDM,{})},{title:"Bookmarks",path:"/bookmarks",pathRegex:/^\/bookmarks/,icon:r.jsx(o.nLM,{})}];function d(){let e=(0,l.usePathname)(),[t,s]=(0,a.useState)(!1),d=()=>{s(!t)};return(0,r.jsxs)(r.Fragment,{children:[r.jsx("button",{className:"lg:hidden p-4 text-3xl fixed z-30 top-4 left-1",onClick:d,children:t?r.jsx(o.FU5,{}):r.jsx(o.xXU,{})}),r.jsx("nav",{className:`fixed top-0 left-0 bg-gray-900 text-white shadow-md transition-transform duration-300 z-20 flex flex-col justify-between items-center ${t?"translate-x-0":"-translate-x-full"} lg:translate-x-0 w-64 lg:w-auto lg:static h-full `,children:r.jsx("div",{className:"flex-grow flex flex-col justify-center w-full",children:r.jsx("div",{className:"linksContainer text-2xl w-full flex flex-col items-start ml-2 space-y-6",children:n.map(t=>(0,r.jsxs)(i.default,{href:t.path,className:`text-lg text-gray-400 flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out px-3 py-2 rounded-md border-l-4 border-transparent hover:text-white hover:bg-gray-500 hover:scale-105 ${t.pathRegex.test(e)?"active text-green-500 border-l-blue-500 scale-105":""}`,children:[r.jsx("span",{className:"link__icon text-xl",children:t.icon}),r.jsx("span",{className:"link__title pl-3",children:t.title})]},t.title))})})}),t&&r.jsx("div",{className:"lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10",onClick:d})]})}},5872:(e,t,s)=>{"use strict";s.d(t,{ThemeProvider:()=>o});var r=s(326);s(7577);var a=s(4831);function o({children:e,...t}){return r.jsx(a.f,{...t,children:e})}},879:(e,t,s)=>{"use strict";s.d(t,{Toaster:()=>k});var r=s(326),a=s(7577),o=s(2248),i=s(8671),l=s(1549),n=s(1135),d=s(1009);function c(...e){return(0,d.m6)((0,n.W)(e))}let x=o.zt,u=a.forwardRef(({className:e,...t},s)=>r.jsx(o.l_,{ref:s,className:c("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));u.displayName=o.l_.displayName;let m=(0,i.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),f=a.forwardRef(({className:e,variant:t,...s},a)=>r.jsx(o.fC,{ref:a,className:c(m({variant:t}),e),...s}));f.displayName=o.fC.displayName,a.forwardRef(({className:e,...t},s)=>r.jsx(o.aU,{ref:s,className:c("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t})).displayName=o.aU.displayName;let p=a.forwardRef(({className:e,...t},s)=>r.jsx(o.x8,{ref:s,className:c("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:r.jsx(l.Z,{className:"h-4 w-4"})}));p.displayName=o.x8.displayName;let h=a.forwardRef(({className:e,...t},s)=>r.jsx(o.Dx,{ref:s,className:c("text-sm font-semibold",e),...t}));h.displayName=o.Dx.displayName;let v=a.forwardRef(({className:e,...t},s)=>r.jsx(o.dk,{ref:s,className:c("text-sm opacity-90",e),...t}));v.displayName=o.dk.displayName;let g=0,b=new Map,j=e=>{if(b.has(e))return;let t=setTimeout(()=>{b.delete(e),T({type:"REMOVE_TOAST",toastId:e})},1e6);b.set(e,t)},w=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?j(s):e.toasts.forEach(e=>{j(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},y=[],N={toasts:[]};function T(e){N=w(N,e),y.forEach(e=>{e(N)})}function S({...e}){let t=(g=(g+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>T({type:"DISMISS_TOAST",toastId:t});return T({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||s()}}}),{id:t,dismiss:s,update:e=>T({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function k(){let{toasts:e}=function(){let[e,t]=a.useState(N);return a.useEffect(()=>(y.push(t),()=>{let e=y.indexOf(t);e>-1&&y.splice(e,1)}),[e]),{...e,toast:S,dismiss:e=>T({type:"DISMISS_TOAST",toastId:e})}}();return(0,r.jsxs)(x,{children:[e.map(function({id:e,title:t,description:s,action:a,...o}){return(0,r.jsxs)(f,{...o,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[t&&r.jsx(h,{children:t}),s&&r.jsx(v,{children:s})]}),a,r.jsx(p,{})]},e)}),r.jsx(u,{})]})}},7629:(e,t,s)=>{let{createProxy:r}=s(8570);e.exports=r("D:\\Tele Projects\\website work\\Next Website\\dramorld\\src\\app\\error.tsx")},4149:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u,metadata:()=>x});var r=s(9510),a=s(5384),o=s.n(a),i=s(7371);s(5023);var l=s(8570);let n=(0,l.createProxy)(String.raw`D:\Tele Projects\website work\Next Website\dramorld\src\components\Nav.tsx#default`),d=(0,l.createProxy)(String.raw`D:\Tele Projects\website work\Next Website\dramorld\src\components\ui\toaster.tsx#Toaster`),c=(0,l.createProxy)(String.raw`D:\Tele Projects\website work\Next Website\dramorld\src\components\theme-providers.tsx#ThemeProvider`),x={title:"DRAMORLD",description:"KDRAMA CDRAMA"};function u({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:`${o().className} relative w-full min-h-screen`,children:[r.jsx("header",{className:"fixed bg-gray-800 hover:bg-gray-500 px-2 rounded-sm top-8 left-14 lg:left-6 z-20 transition-colors duration-300 ease-in-out",children:r.jsx(i.default,{href:"/",className:"block",children:r.jsx("span",{className:"text-lg font-semibold bg-clip-text shadow-sm",style:{background:"linear-gradient(20deg, #3bd3eb, #07c346)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"DRAMORLD"})})}),r.jsx("div",{className:"flex w-full min-h-screen",children:(0,r.jsxs)("div",{className:"flex flex-row w-full flex-1",children:[r.jsx("aside",{className:"sticky top-0 z-10 h-screen",children:r.jsx(n,{})}),r.jsx("div",{className:"flex-1 overflow-y-auto",children:(0,r.jsxs)(c,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:[r.jsx("main",{children:e}),r.jsx(d,{})]})})]})})]})})}},2523:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(8570).createProxy)(String.raw`D:\Tele Projects\website work\Next Website\dramorld\src\app\not-found.tsx#default`)},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};