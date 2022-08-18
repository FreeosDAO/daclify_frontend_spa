"use strict";(self["webpackChunkdaclifyfrontend"]=self["webpackChunkdaclifyfrontend"]||[]).push([[357],{9357:(e,t,o)=>{o.r(t),o.d(t,{default:()=>z});var r=o(34182);const a={key:0,class:"text-right q-mb-md"},n=(0,r.createTextVNode)("Member Registration Enabled"),l=(0,r.createTextVNode)("Member Registration disabled"),c=(0,r.createElementVNode)("span",null,"Members",-1),i={key:0},s=(0,r.createTextVNode)("nothing here yet"),d={class:"row items-center justify-center full-width"},m={class:"text-right q-mt-md"};function p(e,t,o,p,u,C){const h=(0,r.resolveComponent)("q-badge"),g=(0,r.resolveComponent)("q-icon"),f=(0,r.resolveComponent)("q-input"),k=(0,r.resolveComponent)("q-toolbar-title"),b=(0,r.resolveComponent)("q-space"),v=(0,r.resolveComponent)("q-toolbar"),x=(0,r.resolveComponent)("profile-pic"),N=(0,r.resolveComponent)("q-item-section"),V=(0,r.resolveComponent)("profile-link"),_=(0,r.resolveComponent)("q-item-label"),w=(0,r.resolveComponent)("q-separator"),y=(0,r.resolveComponent)("q-card-section"),B=(0,r.resolveComponent)("q-card"),Z=(0,r.resolveComponent)("q-expansion-item"),q=(0,r.resolveComponent)("q-spinner"),Q=(0,r.resolveComponent)("q-item"),I=(0,r.resolveComponent)("no-items"),S=(0,r.resolveComponent)("q-list"),G=(0,r.resolveComponent)("q-btn"),E=(0,r.resolveComponent)("q-page");return(0,r.openBlock)(),(0,r.createBlock)(E,{padding:"",class:"constrain-page-width"},{default:(0,r.withCtx)((()=>[e.getCoreConfig?((0,r.openBlock)(),(0,r.createElementBlock)("div",a,[e.getCoreConfig.conf.member_registration?((0,r.openBlock)(),(0,r.createBlock)(h,{key:"enabled"},{default:(0,r.withCtx)((()=>[n])),_:1})):((0,r.openBlock)(),(0,r.createBlock)(h,{color:"negative",key:"disabled"},{default:(0,r.withCtx)((()=>[l])),_:1}))])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)(f,{placeholder:"Find Member",outlined:"",modelValue:e.searchfilter,"onUpdate:modelValue":t[1]||(t[1]=t=>e.searchfilter=t),modelModifiers:{trim:!0},class:"q-mb-md"},{prepend:(0,r.withCtx)((()=>[(0,r.createVNode)(g,{name:"search",class:"cursor-pointer"})])),append:(0,r.withCtx)((()=>[(0,r.createVNode)(r.TransitionGroup,{appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight",tag:"div"},{default:(0,r.withCtx)((()=>[e.searchfilter.length?((0,r.openBlock)(),(0,r.createBlock)(g,{name:"close",key:"has_filter",onClick:t[0]||(t[0]=t=>e.searchfilter=""),class:"cursor-pointer"})):(0,r.createCommentVNode)("",!0)])),_:1})])),_:1},8,["modelValue"]),e.getActiveGroup?((0,r.openBlock)(),(0,r.createBlock)(B,{key:1},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(v,{class:"bg-secondary text-white shadow-2"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(k,{shrink:!0},{default:(0,r.withCtx)((()=>[c])),_:1}),(0,r.createVNode)(b),e.getCoreState?((0,r.openBlock)(),(0,r.createElementBlock)("div",i,"#"+(0,r.toDisplayString)(e.getCoreState.state.member_count),1)):(0,r.createCommentVNode)("",!0)])),_:1}),(0,r.createVNode)(S,{class:"primary-hover-list",bordered:"",separator:""},{default:(0,r.withCtx)((()=>[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.members,(t=>((0,r.openBlock)(),(0,r.createBlock)(Z,{key:t.account,group:"members"},{header:(0,r.withCtx)((()=>[(0,r.createVNode)(N,{avatar:""},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(x,{size:42,account:t.account,icon:e.getIsGuardian(t.account)?"mdi-star":""},null,8,["account","icon"])])),_:2},1024),(0,r.createVNode)(N,null,{default:(0,r.withCtx)((()=>[(0,r.createVNode)(_,null,{default:(0,r.withCtx)((()=>[(0,r.createVNode)(V,{account:t.account,inversestyle:!0},null,8,["account"])])),_:2},1024)])),_:2},1024)])),default:(0,r.withCtx)((()=>[(0,r.createVNode)(w),(0,r.createVNode)(B,null,{default:(0,r.withCtx)((()=>[(0,r.createVNode)(y,null,{default:(0,r.withCtx)((()=>[(0,r.createVNode)(_,{caption:""},{default:(0,r.withCtx)((()=>[s])),_:1})])),_:1})])),_:1})])),_:2},1024)))),128)),e.is_loading?((0,r.openBlock)(),(0,r.createBlock)(Q,{key:0},{default:(0,r.withCtx)((()=>[(0,r.createElementVNode)("div",d,[(0,r.createVNode)(q,{color:"primary",size:"24px"})])])),_:1})):(0,r.createCommentVNode)("",!0),e.is_loading||e.members.length?(0,r.createCommentVNode)("",!0):((0,r.openBlock)(),(0,r.createBlock)(I,{key:1,text:"No members"}))])),_:1})])),_:1})):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",m,[(0,r.createVNode)(G,{label:"more",onClick:t[2]||(t[2]=t=>e.fetchMembers()),color:"primary",disabled:!e.more},null,8,["disabled"])])])),_:1})}var u=o(10741),C=o(37446),h=o(87421),g=o(3229),f=o(40019);const k=(0,r.defineComponent)({name:"members",components:{profilePic:C.Z,profileLink:h.Z,noItems:g.Z},data(){return{next_key:"",more:!1,members:[],is_loading:!1,searchfilter:""}},computed:{...(0,u.Se)({getAccountName:"ual/getAccountName",getActiveGroup:"group/getActiveGroup",getIsGuardian:"group/getIsGuardian",getCoreConfig:"group/getCoreConfig",getCoreState:"group/getCoreState"})},methods:{async fetchMembers(){this.is_loading=!0;let e=await this.$eos.api.rpc.get_table_rows({json:!0,code:this.getActiveGroup,scope:this.getActiveGroup,table:"members",lower_bound:this.next_key,limit:10}).catch((e=>!1));e&&(f.log(e),this.members=this.members.concat(e.rows),e.more&&(this.next_key=e.next_key),this.more=e.more),this.is_loading=!1}},mounted(){this.fetchMembers()}});var b=o(74260),v=o(24379),x=o(69721),N=o(64689),V=o(24554),_=o(5363),w=o(10151),y=o(39570),B=o(13747),Z=o(62025),q=o(27011),Q=o(60429),I=o(52035),S=o(2350),G=o(65869),E=o(25589),M=o(83414),T=o(6833),A=o(2165),L=o(7518),R=o.n(L);const j=(0,b.Z)(k,[["render",p]]),z=j;R()(k,"components",{QPage:v.Z,QBadge:x.Z,QInput:N.Z,QIcon:V.Z,QTooltip:_.Z,QCard:w.Z,QToolbar:y.Z,QToolbarTitle:B.Z,QSpace:Z.Z,QList:q.Z,QExpansionItem:Q.Z,QItemSection:I.Z,QItemLabel:S.Z,QSeparator:G.Z,QCardSection:E.Z,QItem:M.Z,QSpinner:T.Z,QBtn:A.Z})}}]);