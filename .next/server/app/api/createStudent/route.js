"use strict";(()=>{var e={};e.id=792,e.ids=[792],e.modules={1185:e=>{e.exports=require("mongoose")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1426:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>f,originalPathname:()=>S,patchFetch:()=>y,requestAsyncStorage:()=>p,routeModule:()=>c,serverHooks:()=>h,staticGenerationAsyncStorage:()=>g,staticGenerationBailout:()=>v});var a={};r.r(a),r.d(a,{POST:()=>l,revalidate:()=>m});var n=r(5419),s=r(9108),i=r(9678),o=r(3491),u=r(3619),d=r(8070);let m=0;async function l(e){try{await (0,o.Z)();let{firstName:t,lastName:r,emailId:a,mobileNumber:n,id:s,loggedIn:i,image:m,attended:l,attendence:c}=await e.json();if(void 0===t||void 0===a||void 0===n)return d.Z.json({message:"Firstname,Emailid and mobileNumber Must Be Needed"});if(t.length>=3)try{return await u.Z.create({firstName:t,lastName:r,image:m,id:s,emailId:a,attended:l,attendence:c,mobileNumber:n}),d.Z.json({message:"created"})}catch(e){return d.Z.json({message:"somethingWrong"})}else{if(t.length<3)return d.Z.json({message:"nameMustBe3Characters"});if(!/^([a-z0-9]{4,})$/.test(s))return d.Z.json({message:"idMustBeAtleast4characters"});if(!/\S+@\S+\.\S+/.test(a))return d.Z.json({message:"invalidEmail"});return d.Z.json({message:"somethingWrong"})}}catch(e){return d.Z.json({message:"somethingWrong"})}}let c=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/createStudent/route",pathname:"/api/createStudent",filename:"route",bundlePath:"app/api/createStudent/route"},resolvedPagePath:"/workspaces/studentAPI/app/api/createStudent/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:p,staticGenerationAsyncStorage:g,serverHooks:h,headerHooks:f,staticGenerationBailout:v}=c,S="/api/createStudent/route";function y(){return(0,i.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:g})}},3491:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(1185);let n=async function(){await a.connect("mongodb+srv://afriddev01:17030143@cluster0.leq4lx6.mongodb.net/students?retryWrites=true&w=majority&appName=Cluster0").then(()=>{}).catch(e=>{console.log(e)})}},3619:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(1185),n=r.n(a);let s=new a.Schema({id:{type:String,required:!0,immutable:!0},image:{type:String,default:"",required:!1},firstName:{type:String,minLength:3,required:!0},lastName:{type:String,default:"-",required:!1},emailId:{type:String,immutable:!0,required:!0},attended:{type:Boolean,default:!0,required:!1},attendence:{type:Number,default:45,min:30,max:100,required:!1},mobileNumber:{type:Number,default:null,length:10}}),i=a.models.students||n().model("students",s)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,206],()=>r(1426));module.exports=a})();