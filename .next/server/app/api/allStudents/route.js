"use strict";(()=>{var e={};e.id=244,e.ids=[244],e.modules={1185:e=>{e.exports=require("mongoose")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},905:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>y,originalPathname:()=>S,patchFetch:()=>v,requestAsyncStorage:()=>c,routeModule:()=>p,serverHooks:()=>h,staticGenerationAsyncStorage:()=>g,staticGenerationBailout:()=>f});var a={};r.r(a),r.d(a,{GET:()=>m,revalidate:()=>l});var n=r(5419),u=r(9108),s=r(9678),i=r(3491),o=r(3619),d=r(8070);let l=0;async function m(){try{await (0,i.Z)();try{let e=await o.Z.find({});if(e.length>0)return d.Z.json({message:"success",studnets:e});return d.Z.json({message:"noStudentsFound"})}catch(e){return d.Z.json({message:e})}}catch(e){return d.Z.json({message:e})}}let p=new n.AppRouteRouteModule({definition:{kind:u.x.APP_ROUTE,page:"/api/allStudents/route",pathname:"/api/allStudents",filename:"route",bundlePath:"app/api/allStudents/route"},resolvedPagePath:"/workspaces/studentAPI/app/api/allStudents/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:c,staticGenerationAsyncStorage:g,serverHooks:h,headerHooks:y,staticGenerationBailout:f}=p,S="/api/allStudents/route";function v(){return(0,s.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:g})}},3491:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(1185);let n=async function(){await a.connect("mongodb+srv://afriddev01:17030143@cluster0.leq4lx6.mongodb.net/students?retryWrites=true&w=majority&appName=Cluster0").then(()=>{}).catch(e=>{console.log(e)})}},3619:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(1185),n=r.n(a);let u=new a.Schema({id:{type:String,required:!0,immutable:!0},image:{type:String,default:"",required:!1},firstName:{type:String,minLength:3,required:!0},lastName:{type:String,default:"-",required:!1},emailId:{type:String,immutable:!0,required:!0},attended:{type:Boolean,default:!0,required:!1},attendence:{type:Number,default:45,min:30,max:100,required:!1},mobileNumber:{type:Number,default:null,length:10}}),s=a.models.students||n().model("students",u)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,206],()=>r(905));module.exports=a})();