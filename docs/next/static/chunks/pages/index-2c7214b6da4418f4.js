(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7485)}])},7485:function(e,t,a){"use strict";a.r(t);var i=a(5893),l=a(467),r=a(6351),n=a(7106),o=a(4646),s=a(3482),c=a(2882),u=a(566),d=a(3076),m=a(1934),p=a(7479),h=a(1851),v=a(3015),g=a(3381),f=a(4562),x=a(9972),j=a(7484),w=a.n(j),y=a(7294);t.default=()=>{let[e,t]=(0,y.useState)(""),[a,j]=(0,y.useState)([]),[b]=(0,y.useState)({cntKey:"cntSource",infoKey:"cntInfo"}),[Z,S]=(0,y.useState)({author:"张三",avatar:"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp",updateLastTime:""}),[T,L]=(0,y.useState)(!1),[Y,_]=(0,y.useState)(w()(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss")),[C,I]=(0,y.useState)([{uid:"1",url:Z.avatar,name:"avatar.png"}]),[N,O]=(0,y.useState)(!1),[k,E]=(0,y.useState)(!1),[F]=l.Z.useForm(),H={avatar:"头像",author:"昵称",updateLastTime:"最后修改时间"},D=e=>{var t;return e[0].url||e[0].originFile&&URL.createObjectURL(null===(t=e[0])||void 0===t?void 0:t.originFile)||""},K=async()=>{try{await F.validate();let e=F.getFieldsValue(),t={...e,avatar:D(e.avatar),updateLastTime:w()().format("YYYY-MM-SS HH:mm:ss")};O(!0),setTimeout(()=>{O(!1),S(t),r.Z.success("修改成功！"),M(!1),window.localStorage.setItem(b.infoKey,JSON.stringify(t))},500)}catch(e){console.log({e})}},M=e=>{L(e)};return(0,y.useEffect)(()=>{let e=window.localStorage.getItem(b.cntKey),t=window.localStorage.getItem(b.infoKey);e&&j(JSON.parse(e)),t&&S(JSON.parse(t));let a=setInterval(()=>{_(w()(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss"))},1e3);return E(!0),()=>{clearInterval(a)}},[]),(0,y.useEffect)(()=>{a.length>0&&b&&window.localStorage.setItem(b.cntKey,JSON.stringify(a))},[b,a]),(0,i.jsx)(i.Fragment,{children:k?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.Z,{title:(0,i.jsx)("div",{suppressHydrationWarning:!0,children:Y}),extra:(0,i.jsx)(o.Z,{type:"primary",onClick:()=>{Object.values(b).forEach(e=>{window.localStorage.removeItem(e)}),j([]),t(""),S({author:"张三",avatar:"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp",updateLastTime:""})},children:"清除缓存"},"clear"),children:(0,i.jsxs)(s.Z,{direction:"vertical",style:{width:"100%"},children:[T?(0,i.jsxs)(l.Z,{form:F,initialValues:{author:Z.author},labelAlign:"right",autoComplete:"off",children:[(0,i.jsx)(x.Z,{label:"昵称",field:"author",rules:[{required:!0,message:"请输入您的昵称"}],children:(0,i.jsx)(c.Z,{placeholder:"请输入您的昵称"})}),(0,i.jsx)(l.Z.Item,{label:"头像",field:"avatar",triggerPropName:"fileList",rules:[{required:!0,message:"请上传头像"}],initialValue:C,children:(0,i.jsx)(u.Z,{listType:"picture-card",multiple:!0,name:"files",action:"#",limit:1,fileList:C,accept:"image/*",onChange:I,onPreview:e=>{d.Z.info({title:"预览",content:(0,i.jsx)(m.Z,{src:e.url||e.originFile&&URL.createObjectURL(null==e?void 0:e.originFile),style:{maxWidth:"300px"},alt:"uploadAvatar"})})}})}),(0,i.jsx)(x.Z,{wrapperCol:{offset:5},children:(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(o.Z,{loading:N,onClick:()=>M(!1),children:"取消"}),(0,i.jsx)(o.Z,{loading:N,type:"primary",onClick:K,children:"提交"})]})})]}):(0,i.jsx)(n.Z,{title:"用户信息",hoverable:!0,extra:(0,i.jsx)(o.Z,{type:"text",onClick:()=>M(!0),children:"编辑"}),actions:[Z.updateLastTime&&(0,i.jsx)("span",{style:{color:"#86909c",fontSize:12},children:"最后修改时间：".concat(Z.updateLastTime)},"time")],children:(0,i.jsx)(p.Z,{title:!1,data:Object.keys(Z).filter(e=>"updateLastTime"!==e).map(e=>({label:H[e],value:"avatar"===e?(0,i.jsx)(h.Z,{children:(0,i.jsx)(m.Z,{src:Z[e],alt:e})}):Z[e]})),layout:"horizontal",border:!0,column:5})}),(0,i.jsx)(c.Z.Search,{searchButton:!0,placeholder:"请输入内容",value:e,onChange:t,onSearch:()=>{let a={dateTime:Y,content:e,...Z};j(e=>[...e,a]),t("")}}),(0,i.jsx)(v.Z,{bordered:!1,header:(0,i.jsxs)("span",{children:[a.length," 条记录清单"]}),children:a.map((e,t)=>{var a,l,r,n,o;return(0,i.jsx)(v.Z.Item,{children:(0,i.jsx)(g.Z,{align:"right",author:null!==(a=null==e?void 0:e.author)&&void 0!==a&&a,avatar:null!==(l=null==e?void 0:e.avatar)&&void 0!==l&&l,content:null!==(r=null==e?void 0:e.content)&&void 0!==r?r:e,datetime:null!==(n=null==e?void 0:e.dateTime)&&void 0!==n&&n})},null!==(o=null==e?void 0:e.id)&&void 0!==o?o:t)})})]})})}):(0,i.jsx)(f.Z,{})})}}},function(e){e.O(0,[832,48,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);