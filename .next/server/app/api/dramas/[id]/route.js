"use strict";(()=>{var e={};e.id=338,e.ids=[338],e.modules={1185:e=>{e.exports=require("mongoose")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9823:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>w,patchFetch:()=>h,requestAsyncStorage:()=>g,routeModule:()=>y,serverHooks:()=>x,staticGenerationAsyncStorage:()=>q});var a={};t.r(a),t.d(a,{DELETE:()=>m,GET:()=>c,PUT:()=>l});var n=t(9303),s=t(8716),o=t(3131),i=t(7070),d=t(6228),u=t(3790),p=t(532);let c=(0,p.s)(async(e,{params:r})=>{await (0,u.$)();let t=await d.Z.find({shareId:r.id});return t?i.NextResponse.json(t):i.NextResponse.json({error:"Drama not found"},{status:404})}),l=(0,p.s)(async(e,{params:r})=>{await (0,u.$)();let t=await e.json(),a=await d.Z.findByIdAndUpdate(r.id,t,{new:!0});return a?i.NextResponse.json(a):i.NextResponse.json({error:"Drama not found"},{status:404})}),m=(0,p.s)(async(e,{params:r})=>{await (0,u.$)();let t=await d.Z.findByIdAndDelete(r.id);return t?i.NextResponse.json(t):i.NextResponse.json({error:"Drama not found"},{status:404})}),y=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/dramas/[id]/route",pathname:"/api/dramas/[id]",filename:"route",bundlePath:"app/api/dramas/[id]/route"},resolvedPagePath:"D:\\Tele Projects\\website work\\Next Website\\dramorld\\src\\app\\api\\dramas\\[id]\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:g,staticGenerationAsyncStorage:q,serverHooks:x}=y,w="/api/dramas/[id]/route";function h(){return(0,o.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:q})}},3790:(e,r,t)=>{t.d(r,{$:()=>o});var a=t(1185),n=t.n(a);let s={};async function o(){if(s.isConnected){console.log("already connected");return}try{let e=await n().connect(process.env.MONGO_URI);s.isConnected=e.connections[0].readyState,console.log("Mongodb connected ")}catch(e){console.log(e)}}},532:(e,r,t)=>{t.d(r,{s:()=>s});var a=t(7070);let n=(e=500,r="Internal Server Error")=>a.NextResponse.json({success:!1,message:r},{status:e}),s=e=>async(r,...t)=>{try{return await e(r,...t)}catch(e){return console.error("Error occurred:",e),n(500,e.message||"An error occurred")}}},6228:(e,r,t)=>{t.d(r,{Z:()=>i});var a=t(1185),n=t.n(a);let s=new a.Schema({episodeNumber:{type:Number,required:!0},shortUrl:{type:String,required:!0},teleUrl:{type:String,required:!0}}),o=new a.Schema({shareId:{type:Number,required:!0},messageIds:{type:[Number],required:!0},drama:{type:String,required:!0},detail:{type:String,required:!0},posterUrl:{type:String,required:!0},year:{type:Number,required:!0},quality:{type:String,required:!0},rating:{type:String,required:!0},teleDownloadLink:{type:String,required:!0},episodes:{type:[s],required:!0},sortUrl:{type:String,required:!0}}),i=n().models.Drama||n().model("Drama",o)}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[948,972],()=>t(9823));module.exports=a})();