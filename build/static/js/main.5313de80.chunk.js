(this.webpackJsonpsbf_form_test=this.webpackJsonpsbf_form_test||[]).push([[0],{100:function(e,t,a){e.exports=a(208)},168:function(e,t,a){},169:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(44),c=a.n(l),i=a(17),m=a(31),o=a(8),u=a(93),s=a(211),d=a(97),p=a(18),E={buyerForms:[],orderData:{},buyerData:[],step:"1"},b=function(e){return{type:"IS_STEP",step:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BUYER":return Object(p.a)(Object(p.a)({},e),{},{buyerForms:[].concat(Object(d.a)(e.buyerForms),[t.formArray])});case"IS_STEP":return Object(p.a)(Object(p.a)({},e),{},{step:t.step});case"SET_ORDER_DATA":return Object(p.a)(Object(p.a)({},e),{},{orderData:t.data});case"SET_BUYER_DATA":return Object(p.a)(Object(p.a)({},e),{},{buyerData:t.dataBuyer});default:return e}},y=Object(o.c)({dataReduser:f,form:s.a}),g=Object(o.d)(y,Object(o.a)(u.a)),v=(a(168),a(7)),_=(a(169),a(6)),h=a.n(_),B=a(46),x=a(98),F=a(210),D=a(209),S=a(95),A=a(96),O=a.n(A),j={required:function(e){return e?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0435"},email:function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b":void 0},phone:function(e){return function(t){return t.toString().length&&t.toString().length<e?"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":void 0}},maxValue:function(e){return function(t){return parseInt(t.replace(/\s/g,""))&&parseInt(t.replace(/\s/g,""))>e?"\u0421\u0443\u043c\u043c\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 ".concat(e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")," \u0440\u0443\u0431."):void 0}},minValue:function(e){return function(t){return parseInt(t.replace(/\s/g,""))&&parseInt(t.replace(/\s/g,""))<e?"\u0421\u0443\u043c\u043c\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 ".concat(e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")," \u0440\u0443\u0431."):void 0}},rank:function(e){return e&&e.replace(/[^\d]/g,"").replace(/\B(?=(?:\d{3})+(?!\d))/g," ")}},T=function(e){var t=e.input,a=e.label,n=e.type,l=e.meta,c=l.touched,i=l.error,m=l.warning;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",Object.assign({className:c&&(i||m)?h.a.inputError:h.a.inputStyle},t,{placeholder:a,type:n})),c&&(i&&r.a.createElement("div",{className:h.a.warningText},i)||m&&r.a.createElement("div",null,m))))},w=Object(S.createTextMask)({pattern:"+7(999)999-99-99"}),N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:h.a.line},r.a.createElement("span",null,"\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c ",parseInt(e.id))),r.a.createElement("li",null,r.a.createElement(F.a,{component:T,label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 / \u0418\u041d\u041d \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f",type:"text",name:e.name,validate:j.required})),r.a.createElement("li",null,r.a.createElement(F.a,{component:T,label:"\u0421\u0443\u043c\u043c\u0430 \u0444\u0438\u043d\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0440\u0443\u0431.",type:"text",name:e.sum,validate:[j.required,j.maxValue(5e7),j.minValue(3e5)],normalize:j.rank})))},R=Object(D.a)({form:"formData"})((function(e){return r.a.createElement(r.a.Fragment,null,"3"===e.step?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:h.a.approved},"\u0412\u0430\u043c \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u043e \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e \u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433\u0443.",r.a.createElement("br",null)," \u0412 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0441 \u0432\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u043d\u0430\u0448 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440.",r.a.createElement("br",null)),r.a.createElement("div",{style:{textAlign:"center",fontSize:13,paddingBottom:15}},"\u0423\u0436\u0435 \u0441\u0435\u0439\u0447\u0430\u0441, \u0432 \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c",r.a.createElement("br",null),"  \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u043f\u0430\u043a\u0435\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432."),r.a.createElement("form",null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("li",null,r.a.createElement(F.a,{className:h.a.inputCabinet,placeholder:"\u041b\u043e\u0433\u0438\u043d",component:"input",type:"text",name:"login"})),r.a.createElement("li",null,r.a.createElement(F.a,{className:h.a.inputCabinet,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",component:"input",type:"password",name:"pass"})),r.a.createElement("div",{style:{fontSize:12,cursor:"pointer"}},r.a.createElement("u",null,"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"))),r.a.createElement("br",null),r.a.createElement(m.b,{to:"/MyAccount"},r.a.createElement("button",{className:"".concat(h.a.formButton," ").concat(h.a.animation),type:"submit"},"\u0412\u043e\u0439\u0442\u0438 \u0432 \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442")))):r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("li",null,r.a.createElement(F.a,{component:T,label:"\u0424.\u0418.\u041e.",type:"text",name:"fio",validate:j.required})),r.a.createElement("li",null,r.a.createElement(F.a,{component:T,label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 / \u0418\u041d\u041d",type:"text",name:"innComp",validate:j.required})),r.a.createElement("li",null,r.a.createElement(F.a,{component:T,label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 / \u0418\u041d\u041d \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f",type:"text",name:"innBuyer",validate:j.required})),r.a.createElement("li",null,r.a.createElement(F.a,Object.assign({component:T,label:"+7(___)___-__-__",type:"tel",name:"phone",validate:[j.required,j.phone(10)]},w))),r.a.createElement("li",null,r.a.createElement(F.a,{component:T,label:"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b",type:"email",name:"email",validate:[j.required,j.email]})),r.a.createElement("li",null,r.a.createElement(F.a,{component:T,label:"\u0421\u0443\u043c\u043c\u0430 \u0444\u0438\u043d\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0440\u0443\u0431.",type:"text",name:"sum",validate:[j.required,j.maxValue(5e7),j.minValue(3e5)],normalize:j.rank})),e.buyerForms.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,name:e.name,sum:e.sum})})),r.a.createElement("button",{onClick:function(){var t={id:void 0!==e.buyerForms[0]?parseInt(e.buyerForms[e.buyerForms.length-1].id)+1:"1",name:void 0!==e.buyerForms[0]?"nameBuyer"+(parseInt(e.buyerForms[e.buyerForms.length-1].id)+1):"nameBuyer1",sum:void 0!==e.buyerForms[0]?"sumBuyer"+(parseInt(e.buyerForms[e.buyerForms.length-1].id)+1):"sumBuyer1"};e.addBuyerForm(t)},className:"".concat(h.a.addButton," ").concat(h.a.animation),type:"button"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f"),"1"===e.step?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:h.a.agree},"\u0414\u0430\u044e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043c\u043e\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e \u0444\u0430\u043a\u0442",r.a.createElement("br",null)," \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u0441 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 \u0432 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("button",{className:"".concat(h.a.formButton," ").concat(h.a.animation),type:"submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"))):"2"===e.step?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:O.a,alt:""})):null))})),I=Object(i.b)((function(e){return{buyerForms:e.dataReduser.buyerForms,step:e.dataReduser.step}}),{addBuyerForm:function(e){return function(t){t(function(e){return{type:"ADD_BUYER",formArray:e}}(e))}},getStep:function(e){return function(t){t(b(e)),setTimeout((function(){t(b("3"))}),2e3)}},getOrderData:function(e,t){return function(a){a(function(e){return{type:"SET_ORDER_DATA",data:e}}(e)),a(function(e){return{type:"SET_BUYER_DATA",dataBuyer:e}}(t))}}})((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{onSubmit:function(t){console.log(t);for(var a=[],n=[],r=[],l=[],c=0,i=Object.entries(t);c<i.length;c++){var m=Object(x.a)(i[c],2),o=m[0],u=m[1],s=Object(B.a)({},o,u);l.push(s)}for(var d=1;d<=l.length;d++)for(var p in l[d])for(var E=1;E<=l.length;E++)p==="sumBuyer".concat(E)&&a.push(l[d][p]),p==="nameBuyer".concat(E)&&n.push(l[d][p]);for(var b=0;b<a.length;b++){var f={name:n[b],sum:a[b]};r.push(f)}e.getStep("2"),e.getOrderData(t,r)},buyerForms:e.buyerForms,addBuyerForm:e.addBuyerForm,step:e.step}))})),k=Object(i.b)((function(e){return{orderData:e.dataReduser.orderData,dataBuyer:e.dataReduser.buyerData}}),{})((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:h.a.headerText},r.a.createElement("b",null,"\u041b\u0418\u0427\u041d\u042b\u0419 \u041a\u0410\u0411\u0418\u041d\u0415\u0422")),r.a.createElement("div",{style:{paddingLeft:15,paddingRight:15,paddingBottom:15,paddingTop:15}},r.a.createElement("div",{className:h.a.acountInfo},r.a.createElement("div",{style:{fontSize:12}},r.a.createElement("div",null,r.a.createElement("b",null,"\u0424.\u0418.\u041e.:")," ",e.orderData.fio),r.a.createElement("div",null,r.a.createElement("b",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 / \u0418\u041d\u041d:")," ",e.orderData.innComp),r.a.createElement("div",null,r.a.createElement("b",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 / \u0418\u041d\u041d \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f:")," ",e.orderData.innBuyer),r.a.createElement("div",null,r.a.createElement("b",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:")," ",e.orderData.phone),r.a.createElement("div",null,r.a.createElement("b",null,"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b:")," ",e.orderData.email)),e.dataBuyer.map((function(e,t){return r.a.createElement("div",{style:{fontSize:12},key:t},r.a.createElement("div",{style:{fontSize:15,marginTop:15}},r.a.createElement("b",null,"\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c ",t+1)),r.a.createElement("div",null,r.a.createElement("b",null,e.name,": "),e.sum," \u0440\u0443\u0431."))}))),r.a.createElement("div",{style:{textAlign:"center",fontSize:13,paddingBottom:15,marginTop:20}},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0423\u0441\u0442\u0430\u0432\u0430 \u0438 \u041f\u0430\u0441\u043f\u043e\u0440\u0442\u0430"),r.a.createElement("div",{className:h.a.box},r.a.createElement("input",{type:"file",name:"pasport",className:h.a.inputfile,multiple:!0}),r.a.createElement("label",null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",viewBox:"0 0 20 17"},r.a.createElement("path",{d:"M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"}))," ",r.a.createElement("span",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b\u044b\u2026"))),r.a.createElement("button",{className:"".concat(h.a.formButton," ").concat(h.a.animation),type:"submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))})),q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:h.a.headerText},r.a.createElement("b",null,"\u0417\u0410\u042f\u0412\u041a\u0410 \u041d\u0410 \u0424\u0410\u041a\u0422\u041e\u0420\u0418\u041d\u0413")),r.a.createElement("div",{style:{paddingLeft:15,paddingRight:15,paddingBottom:15,paddingTop:15}},r.a.createElement(I,null)))},z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:h.a.main},r.a.createElement(v.a,{exact:!0,path:"/",component:function(){return r.a.createElement(q,null)}}),r.a.createElement(v.a,{exact:!0,path:"/MyAccount",component:function(){return r.a.createElement(k,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(m.a,null,r.a.createElement(i.a,{store:g},r.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports={main:"main_main__20EEA",acountInfo:"main_acountInfo__1HNQr",animation:"main_animation__1HRav",addButton:"main_addButton__1liB4",formButton:"main_formButton__pBF0p",inputStyle:"main_inputStyle__36wJg",inputCabinet:"main_inputCabinet__LgXj8",inputError:"main_inputError__20Qum",agree:"main_agree__tlsoF",approved:"main_approved__21Cvd",headerText:"main_headerText__3fjqd",line:"main_line__2IfL1",warningText:"main_warningText__13wPu",box:"main_box__iU-YD",inputfile:"main_inputfile__VbAiG"}},96:function(e,t,a){e.exports=a.p+"static/media/loader.d867dc60.svg"}},[[100,1,2]]]);
//# sourceMappingURL=main.5313de80.chunk.js.map