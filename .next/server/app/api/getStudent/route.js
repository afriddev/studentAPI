"use strict";(()=>{var e={};e.id=80,e.ids=[80],e.modules={1185:e=>{e.exports=require("mongoose")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6146:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>y,originalPathname:()=>v,patchFetch:()=>S,requestAsyncStorage:()=>c,routeModule:()=>p,serverHooks:()=>h,staticGenerationAsyncStorage:()=>g,staticGenerationBailout:()=>f});var a={};r.r(a),r.d(a,{POST:()=>m,revalidate:()=>l});var n=r(5419),i=r(9108),u=r(9678),s=r(3491),o=r(3619),d=r(8070);let l=0;async function m(e){try{await (0,s.Z)();let{email:t}=await e.json();try{let e=await o.Z.findOne({email:t});if(1==e.length)return d.Z.json({message:"success",data:e});return d.Z.json({message:"invalidEmail"})}catch(e){return d.Z.json({message:"serverError"})}}catch(e){return d.Z.json({message:"somethingWrong"})}}let p=new n.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/getStudent/route",pathname:"/api/getStudent",filename:"route",bundlePath:"app/api/getStudent/route"},resolvedPagePath:"/workspaces/studentAPI/app/api/getStudent/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:c,staticGenerationAsyncStorage:g,serverHooks:h,headerHooks:y,staticGenerationBailout:f}=p,v="/api/getStudent/route";function S(){return(0,u.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:g})}},3491:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(1185);let n=async function(){await a.connect("mongodb+srv://afriddev01:17030143@cluster0.leq4lx6.mongodb.net/students?retryWrites=true&w=majority&appName=Cluster0").then(()=>{}).catch(e=>{console.log(e)})}},3619:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(1185),n=r.n(a);let i=new a.Schema({id:{type:String,required:!0,immutable:!0},image:{type:String,default:"",required:!1},firstName:{type:String,minLength:3,required:!0},lastName:{type:String,default:"-",required:!1},emailId:{type:String,immutable:!0,required:!0},attended:{type:Boolean,default:!0,required:!1},attendence:{type:Number,default:45,min:30,max:100,required:!1},mobileNumber:{type:Number,default:null,length:10}}),u=a.models.students||n().model("students",i)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,206],()=>r(6146));module.exports=a})();