(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"58fc":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-content",[i("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-card",{attrs:{shaped:"",loading:t.loading}},[i("v-toolbar",{attrs:{color:"indigo",dark:"",flat:""}},[i("v-toolbar-title",[t._v(t._s(t.currentTitle))]),i("v-spacer"),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-btn",t._g({attrs:{hidden:t.step>=1,icon:""},on:{click:function(e){t.step++}}},a),[i("v-icon",[t._v("mdi-account-plus")])],1)]}}])},[i("span",[t._v("Signup")])])],1),i("v-window",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[i("v-window-item",{attrs:{value:0}},[i("v-card-text",[i("v-form",[i("v-text-field",{attrs:{rules:t.rules,label:"Login",name:"login","prepend-icon":"mdi-account",type:"text"}}),i("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"}})],1),i("v-icon",[t._v("mdi-restart")]),t._v(" Recover ")],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.loading=!t.loading}}},[t._v("Login")])],1)],1),i("v-window-item",{attrs:{value:1}},[i("v-card-text",[i("v-text-field",{attrs:{label:"Email",placeholder:"email"}}),i("span",{staticClass:"caption grey--text text--darken-1"},[t._v(" This is the email you will use to login to your Vuetify account ")])],1)],1),i("v-window-item",{attrs:{value:2}},[i("v-card-text",[i("v-text-field",{attrs:{label:"Password",type:"password"}}),i("v-text-field",{attrs:{label:"Confirm Password",type:"password"}}),i("span",{staticClass:"caption grey--text text--darken-1"},[t._v(" Please enter a password for your account ")])],1)],1),i("v-window-item",{attrs:{value:3}},[i("div",{staticClass:"pa-4 text-center"},[i("v-img",{staticClass:"mb-4",attrs:{contain:"",height:"128",src:"https://cdn.vuetifyjs.com/images/logos/v.svg"}}),i("h3",{staticClass:"title font-weight-light mb-2"},[t._v("Welcome to Vuetify")]),i("span",{staticClass:"caption grey--text"},[t._v("Thanks for signing up!")])],1)])],1),i("v-divider"),i("v-card-actions",{attrs:{hidden:0===t.step}},[i("v-btn",{attrs:{disabled:0===t.step,text:""},on:{click:function(e){t.step--}}},[t._v(" Back ")]),i("v-spacer"),i("v-btn",{attrs:{disabled:3===t.step,color:"primary",depressed:""},on:{click:function(e){t.step++}}},[t._v(" Next ")])],1)],1)],1)],1)],1)],1)],1)},n=[],s={data:function(){return{loading:!1,step:0,rules:[function(t){return!!t||"Required."},function(t){return(t||"").length<=20||"Max 20 characters"},function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."}]}},watch:{loading:function(t){var e=this;t&&setTimeout((function(){return e.loading=!1}),5e3)}},computed:{currentTitle:function(){switch(this.step){case 0:return"Login";case 1:return"Sign-up";case 2:return"Create a password";default:return"Account created"}}}},o=s,r=i("2877"),c=i("6544"),l=i.n(c),u=i("7496"),d=i("8336"),h=i("b0af"),f=i("99d9"),p=i("62ad"),v=i("a523"),m=i("a75b"),g=i("ce7e"),b=(i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b"),i("5530")),w=i("58df"),_=i("7e2b"),y=i("3206"),x=Object(w["a"])(_["a"],Object(y["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(b["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),V=i("132d"),C=i("adda"),T=i("0fd9b"),A=i("2fa4"),B=i("8654"),O=i("71d9"),k=i("2a7f"),j=(i("a9e3"),i("ade3")),I=(i("9734"),i("4ad4")),$=i("a9ad"),L=i("16b7"),E=i("b848"),S=i("75eb"),z=i("f573"),D=i("f2e7"),W=i("80d2"),P=i("d9bd"),R=Object(w["a"])($["a"],L["a"],E["a"],S["a"],z["a"],D["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,a=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||a?s=n+e.width/2-i.width/2:(this.left||this.right)&&(s=n+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,a=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=a+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=a+e.height/2-i.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(n+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(W["f"])(this.maxWidth),minWidth:Object(W["f"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(W["n"])(this,"activator",!0)&&Object(P["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=I["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===W["q"].esc&&(t.getActivator(e),t.runDelay("close"))},e}},render:function(t){var e,i=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},Object(j["a"])(e,this.contentClass,!0),Object(j["a"])(e,"menuable__content__active",this.isActive),Object(j["a"])(e,"v-tooltip__content--fixed",this.activatorFixed),e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.getContentSlot()));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[i]),this.genActivator()])}}),F=i("f665"),q=i("1e6c"),M=Object(r["a"])(o,a,n,!1,null,null,null);e["default"]=M.exports;l()(M,{VApp:u["a"],VBtn:d["a"],VCard:h["a"],VCardActions:f["a"],VCardText:f["b"],VCol:p["a"],VContainer:v["a"],VContent:m["a"],VDivider:g["a"],VForm:x,VIcon:V["a"],VImg:C["a"],VRow:T["a"],VSpacer:A["a"],VTextField:B["a"],VToolbar:O["a"],VToolbarTitle:k["b"],VTooltip:R,VWindow:F["a"],VWindowItem:q["a"]})},9734:function(t,e,i){},f820:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is an about page")])])}],s=i("2877"),o={},r=Object(s["a"])(o,a,n,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=about.cd1bd73e.js.map