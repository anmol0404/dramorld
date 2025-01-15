"use strict";(()=>{var e={};e.id=333,e.ids=[333],e.modules={1185:e=>{e.exports=require("mongoose")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9674:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>w,patchFetch:()=>q,requestAsyncStorage:()=>y,routeModule:()=>v,serverHooks:()=>x,staticGenerationAsyncStorage:()=>g});var o={};t.r(o),t.d(o,{DELETE:()=>m,GET:()=>c,PUT:()=>l});var n=t(9303),s=t(8716),i=t(3131),a=t(7070),d=t(4452),u=t(3790),p=t(532);let c=(0,p.s)(async(e,{params:r})=>{await (0,u.$)();let t=await d.Z.findById(r.id);return t?a.NextResponse.json(t):a.NextResponse.json({error:"Movie not found"},{status:404})}),l=(0,p.s)(async(e,{params:r})=>{await (0,u.$)();let t=await e.json(),o=await d.Z.findByIdAndUpdate(r.id,t,{new:!0});return o?a.NextResponse.json(o):a.NextResponse.json({error:"Movie not found"},{status:404})}),m=(0,p.s)(async(e,{params:r})=>{await (0,u.$)();let t=await d.Z.findByIdAndDelete(r.id);return t?a.NextResponse.json(t):a.NextResponse.json({error:"Movie not found"},{status:404})}),v=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/movies/[id]/route",pathname:"/api/movies/[id]",filename:"route",bundlePath:"app/api/movies/[id]/route"},resolvedPagePath:"D:\\Tele Projects\\website work\\Next Website\\dramorld\\src\\app\\api\\movies\\[id]\\route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:y,staticGenerationAsyncStorage:g,serverHooks:x}=v,w="/api/movies/[id]/route";function q(){return(0,i.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:g})}},3790:(e,r,t)=>{t.d(r,{$:()=>i});var o=t(1185),n=t.n(o);let s={};async function i(){if(s.isConnected){console.log("already connected");return}try{let e=await n().connect(process.env.MONGO_URI);s.isConnected=e.connections[0].readyState,console.log("Mongodb connected ")}catch(e){console.log(e)}}},532:(e,r,t)=>{t.d(r,{s:()=>s});var o=t(7070);let n=(e=500,r="Internal Server Error")=>o.NextResponse.json({success:!1,message:r},{status:e}),s=e=>async(r,...t)=>{try{return await e(r,...t)}catch(e){return console.error("Error occurred:",e),n(500,e.message||"An error occurred")}}},4452:(e,r,t)=>{t.d(r,{Z:()=>i});var o=t(1185),n=t.n(o);let s=new o.Schema({shareId:{type:Number,required:!0},messageIds:{type:[Number],required:!0},movie:{type:String,required:!0},title:{type:String,required:!0},posterUrl:{type:String,required:!0},year:{type:Number,required:!0},teleDownloadLink:{type:String,required:!0},sortUrl:{type:String,required:!0}}),i=n().model("movie",s)}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[948,972],()=>t(9674));module.exports=o})();