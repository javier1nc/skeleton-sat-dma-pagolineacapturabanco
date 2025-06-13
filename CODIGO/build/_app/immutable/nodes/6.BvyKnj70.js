var km=Object.defineProperty;var Vm=(s,e,t)=>e in s?km(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var It=(s,e,t)=>Vm(s,typeof e!="symbol"?e+"":e,t);import{s as cn,B as Fi,e as we,d as Ee,f as ze,i as de,D as lu,k as yt,ak as ar,C as Vr,c as ki,u as Vi,g as Hi,a as Gi,E as cu,t as zt,F as hu,h as kt,r as fe,l as ne,m as Nn,n as rt,al as uu,a9 as ff,a6 as Hm,y as Gm,x as Wm,b as Qe,j as et,o as cl,A as An,K as yo,q as In,aa as jn,P as Xm,ac as xi,p as vi,N as rh,ao as ah,z as So,af as Ym}from"../chunks/scheduler.CO7uyCRE.js";import{S as hn,i as un,g as Ui,a as ke,e as Oi,t as Oe,c as lt,b as ct,m as ht,d as ut,f as $m}from"../chunks/index.Bw_8TCQm.js";import{b as ca}from"../chunks/paths.CMBFK2sR.js";import{P as ha}from"../chunks/public.uEmoNS-Q.js";import{g as pf,I as Ni,a as qm}from"../chunks/Icon.Bwn6lPDF.js";import{c as ua,g as hl,p as Zm,s as Km}from"../chunks/stores.wgk61f-0.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.s2WTwWzt.js";import{e as Ii}from"../chunks/each.BanHZbt5.js";import{d as oh,w as Un,r as Jm}from"../chunks/index.DTvGw5g2.js";function jm(s){let e;const t=s[17].default,n=ki(t,s,s[16],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&65536)&&Vi(n,t,i,i[16],e?Gi(t,i[16],r,null):Hi(i[16]),null)},i(i){e||(Oe(n,i),e=!0)},o(i){ke(n,i),e=!1},d(i){n&&n.d(i)}}}function Qm(s){let e,t,n=String(s[1]).substring(0,2).toUpperCase()+"",i,r;return{c(){e=cu("svg"),t=cu("text"),i=zt(n),this.h()},l(a){e=hu(a,"svg",{class:!0,viewBox:!0});var o=ze(e);t=hu(o,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var l=ze(t);i=kt(l,n),l.forEach(de),o.forEach(de),this.h()},h(){fe(t,"x","50%"),fe(t,"y","50%"),fe(t,"dominant-baseline","central"),fe(t,"text-anchor","middle"),fe(t,"font-weight","bold"),fe(t,"font-size",s[3]),fe(t,"class",r="avatar-text "+s[2]),fe(e,"class","avatar-initials w-full h-full"),fe(e,"viewBox","0 0 512 512")},m(a,o){yt(a,e,o),ne(e,t),ne(t,i)},p(a,o){o&2&&n!==(n=String(a[1]).substring(0,2).toUpperCase()+"")&&Nn(i,n),o&8&&fe(t,"font-size",a[3]),o&4&&r!==(r="avatar-text "+a[2])&&fe(t,"class",r)},i:rt,o:rt,d(a){a&&de(e)}}}function eg(s){let e,t,n,i,r,a,o;return{c(){e=we("img"),this.h()},l(l){e=Ee(l,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){fe(e,"class","avatar-image "+ig),fe(e,"style",t=s[9].style??""),uu(e.src,n=s[0])||fe(e,"src",n),fe(e,"alt",i=s[9].alt||"")},m(l,c){yt(l,e,c),a||(o=[ff(r=s[5].call(null,e,s[6])),Hm(e,"error",s[18])],a=!0)},p(l,c){c&512&&t!==(t=l[9].style??"")&&fe(e,"style",t),c&1&&!uu(e.src,n=l[0])&&fe(e,"src",n),c&512&&i!==(i=l[9].alt||"")&&fe(e,"alt",i),r&&Gm(r.update)&&c&64&&r.update.call(null,l[6])},i:rt,o:rt,d(l){l&&de(e),a=!1,Wm(o)}}}function tg(s){let e,t,n,i,r;const a=[eg,Qm,jm],o=[];function l(u,d){return u[0]||u[4]?0:u[1]?1:2}t=l(s),n=o[t]=a[t](s);let c=[{class:i="avatar "+s[7]},{"data-testid":"avatar"},s[8]()],h={};for(let u=0;u<c.length;u+=1)h=Fi(h,c[u]);return{c(){e=we("figure"),n.c(),this.h()},l(u){e=Ee(u,"FIGURE",{class:!0,"data-testid":!0});var d=ze(e);n.l(d),d.forEach(de),this.h()},h(){lu(e,h)},m(u,d){yt(u,e,d),o[t].m(e,null),r=!0},p(u,[d]){let f=t;t=l(u),t===f?o[t].p(u,d):(Ui(),ke(o[f],1,1,()=>{o[f]=null}),Oi(),n=o[t],n?n.p(u,d):(n=o[t]=a[t](u),n.c()),Oe(n,1),n.m(e,null)),lu(e,h=pf(c,[(!r||d&128&&i!==(i="avatar "+u[7]))&&{class:i},{"data-testid":"avatar"},u[8]()]))},i(u){r||(Oe(n),r=!0)},o(u){ke(n),r=!1},d(u){u&&de(e),o[t].d()}}}let ng="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",ig="w-full object-cover";function sg(s,e,t){let n;const i=["initials","fill","fontSize","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"];let r=ar(e,i),{$$slots:a={},$$scope:o}=e,{initials:l=""}=e,{fill:c="fill-token"}=e,{fontSize:h=150}=e,{src:u=""}=e,{fallback:d=""}=e,{action:f=()=>{}}=e,{actionParams:m=""}=e,{background:_="bg-surface-400-500-token"}=e,{width:g="w-16"}=e,{border:p=""}=e,{rounded:y="rounded-full"}=e,{shadow:x=""}=e,{cursor:v=""}=e;function A(){return delete r.class,r}const w=()=>t(0,u=d);return s.$$set=E=>{t(9,e=Fi(Fi({},e),Vr(E))),t(19,r=ar(e,i)),"initials"in E&&t(1,l=E.initials),"fill"in E&&t(2,c=E.fill),"fontSize"in E&&t(3,h=E.fontSize),"src"in E&&t(0,u=E.src),"fallback"in E&&t(4,d=E.fallback),"action"in E&&t(5,f=E.action),"actionParams"in E&&t(6,m=E.actionParams),"background"in E&&t(10,_=E.background),"width"in E&&t(11,g=E.width),"border"in E&&t(12,p=E.border),"rounded"in E&&t(13,y=E.rounded),"shadow"in E&&t(14,x=E.shadow),"cursor"in E&&t(15,v=E.cursor),"$$scope"in E&&t(16,o=E.$$scope)},s.$$.update=()=>{t(7,n=`${ng} ${_} ${g} ${p} ${y} ${x} ${v} ${e.class??""}`)},e=Vr(e),[u,l,c,h,d,f,m,n,A,e,_,g,p,y,x,v,o,a,w]}class du extends hn{constructor(e){super(),un(this,e,sg,tg,cn,{initials:1,fill:2,fontSize:3,src:0,fallback:4,action:5,actionParams:6,background:10,width:11,border:12,rounded:13,shadow:14,cursor:15})}}function rg({id:s,h:e,w:t,max:n}){return`${ag[s].raw}&w=${t}&h=${e}&auto=format&fit=${n?"max":"crop"}`}const ag={pic_rfcorto00:{raw:"https://media.licdn.com/dms/image/v2/D5603AQFo27W7e-6dqg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1638227676435?e=1733961600&v=beta&t=nR-QJLNLPcFl3z-A39e9xYCyIs82lkvN0504SNUPx2g"},YOErFW8AfkI:{raw:"https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3"},z_X0PxmBuIQ:{raw:"https://images.unsplash.com/photo-1510111652602-195fc654aa83?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY0Nzl8&ixlib=rb-4.0.3"},"8vKVlNIbAc4":{raw:"https://images.unsplash.com/photo-1617296537916-291a105cd2f4?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY1MTl8&ixlib=rb-4.0.3"},vjUokUWbFOs:{raw:"https://images.unsplash.com/photo-1620562303747-ba21ca6f1530?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2MjR8&ixlib=rb-4.0.3"},s0fXOuyTH1M:{raw:"https://images.unsplash.com/photo-1597077962467-be16edcc6a43?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2MzZ8&ixlib=rb-4.0.3"},CKZQ6g_FB2Q:{raw:"https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3"},VYuJLsF4XQQ:{raw:"https://images.unsplash.com/photo-1509130446053-899ae7358ce6?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NjF8&ixlib=rb-4.0.3"},"01D-_OtB8wQ":{raw:"https://images.unsplash.com/photo-1620005839871-7ac4aed5ddbc?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NzN8&ixlib=rb-4.0.3"},eP2zYflRoNY:{raw:"https://images.unsplash.com/photo-1597531072931-8fceba101e4e?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2OTB8&ixlib=rb-4.0.3"},"1SEH8qv-Obo":{raw:"https://images.unsplash.com/photo-1612145342709-eadb6e22acca?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MDh8&ixlib=rb-4.0.3"},"c64AB11j-po":{raw:"https://images.unsplash.com/photo-1597077917598-97ca3922a317?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MjF8&ixlib=rb-4.0.3"},tQ4fEcKfB1g:{raw:"https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3"},SMvOSlgThHA:{raw:"https://images.unsplash.com/photo-1617296539691-67feaadf389e?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NjF8&ixlib=rb-4.0.3"},azE50UpJDP0:{raw:"https://images.unsplash.com/photo-1542835435-4fa357baa00b?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NzN8&ixlib=rb-4.0.3"},"UhE2lwGn-DQ":{raw:"https://images.unsplash.com/photo-1603855873822-0931a843ee3a?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3ODJ8&ixlib=rb-4.0.3"},"twVS-YjQn9Y":{raw:"https://images.unsplash.com/photo-1508931133503-b1944a4ecdd5?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3OTV8&ixlib=rb-4.0.3"},EkW1r_eDjRs:{raw:"https://images.unsplash.com/photo-1633053663400-655b31fb88ac?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MDV8&ixlib=rb-4.0.3"},"QDc-OQU9hFk":{raw:"https://images.unsplash.com/photo-1578170222009-c7893aa20afd?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MTZ8&ixlib=rb-4.0.3"},QK_VtGYQV_U:{raw:"https://images.unsplash.com/photo-1610220941077-1ec123e7c043?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4NjV8&ixlib=rb-4.0.3"},"3vj6GJ_lTa8":{raw:"https://images.unsplash.com/photo-1605055618128-b2db3f874a0c?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4Nzh8&ixlib=rb-4.0.3"},C5NOq1BKlAk:{raw:"https://images.unsplash.com/photo-1502768040783-423da5fd5fa0?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4ODd8&ixlib=rb-4.0.3"},"wzj86-5JVcM":{raw:"https://images.unsplash.com/photo-1423110041833-0d5dfcc552e1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4OTl8&ixlib=rb-4.0.3"},hTv8aaPziOQ:{raw:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY5MzR8&ixlib=rb-4.0.3"}};var mf={exports:{}};(function(s,e){(function(t,n){s.exports=n()})(ua,function(){var t=1e3,n=6e4,i=36e5,r="millisecond",a="second",o="minute",l="hour",c="day",h="week",u="month",d="quarter",f="year",m="date",_="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(U){var B=["th","st","nd","rd"],L=U%100;return"["+U+(B[(L-20)%10]||B[L]||B[0])+"]"}},x=function(U,B,L){var G=String(U);return!G||G.length>=B?U:""+Array(B+1-G.length).join(L)+U},v={s:x,z:function(U){var B=-U.utcOffset(),L=Math.abs(B),G=Math.floor(L/60),N=L%60;return(B<=0?"+":"-")+x(G,2,"0")+":"+x(N,2,"0")},m:function U(B,L){if(B.date()<L.date())return-U(L,B);var G=12*(L.year()-B.year())+(L.month()-B.month()),N=B.clone().add(G,u),$=L-N<0,K=B.clone().add(G+($?-1:1),u);return+(-(G+(L-N)/($?N-K:K-N))||0)},a:function(U){return U<0?Math.ceil(U)||0:Math.floor(U)},p:function(U){return{M:u,y:f,w:h,d:c,D:m,h:l,m:o,s:a,ms:r,Q:d}[U]||String(U||"").toLowerCase().replace(/s$/,"")},u:function(U){return U===void 0}},A="en",w={};w[A]=y;var E="$isDayjsObject",D=function(U){return U instanceof W||!(!U||!U[E])},S=function U(B,L,G){var N;if(!B)return A;if(typeof B=="string"){var $=B.toLowerCase();w[$]&&(N=$),L&&(w[$]=L,N=$);var K=B.split("-");if(!N&&K.length>1)return U(K[0])}else{var ae=B.name;w[ae]=B,N=ae}return!G&&N&&(A=N),N||!G&&A},M=function(U,B){if(D(U))return U.clone();var L=typeof B=="object"?B:{};return L.date=U,L.args=arguments,new W(L)},R=v;R.l=S,R.i=D,R.w=function(U,B){return M(U,{locale:B.$L,utc:B.$u,x:B.$x,$offset:B.$offset})};var W=function(){function U(L){this.$L=S(L.locale,null,!0),this.parse(L),this.$x=this.$x||L.x||{},this[E]=!0}var B=U.prototype;return B.parse=function(L){this.$d=function(G){var N=G.date,$=G.utc;if(N===null)return new Date(NaN);if(R.u(N))return new Date;if(N instanceof Date)return new Date(N);if(typeof N=="string"&&!/Z$/i.test(N)){var K=N.match(g);if(K){var ae=K[2]-1||0,xe=(K[7]||"0").substring(0,3);return $?new Date(Date.UTC(K[1],ae,K[3]||1,K[4]||0,K[5]||0,K[6]||0,xe)):new Date(K[1],ae,K[3]||1,K[4]||0,K[5]||0,K[6]||0,xe)}}return new Date(N)}(L),this.init()},B.init=function(){var L=this.$d;this.$y=L.getFullYear(),this.$M=L.getMonth(),this.$D=L.getDate(),this.$W=L.getDay(),this.$H=L.getHours(),this.$m=L.getMinutes(),this.$s=L.getSeconds(),this.$ms=L.getMilliseconds()},B.$utils=function(){return R},B.isValid=function(){return this.$d.toString()!==_},B.isSame=function(L,G){var N=M(L);return this.startOf(G)<=N&&N<=this.endOf(G)},B.isAfter=function(L,G){return M(L)<this.startOf(G)},B.isBefore=function(L,G){return this.endOf(G)<M(L)},B.$g=function(L,G,N){return R.u(L)?this[G]:this.set(N,L)},B.unix=function(){return Math.floor(this.valueOf()/1e3)},B.valueOf=function(){return this.$d.getTime()},B.startOf=function(L,G){var N=this,$=!!R.u(G)||G,K=R.p(L),ae=function(De,ge){var Ve=R.w(N.$u?Date.UTC(N.$y,ge,De):new Date(N.$y,ge,De),N);return $?Ve:Ve.endOf(c)},xe=function(De,ge){return R.w(N.toDate()[De].apply(N.toDate("s"),($?[0,0,0,0]:[23,59,59,999]).slice(ge)),N)},Pe=this.$W,O=this.$M,J=this.$D,me="set"+(this.$u?"UTC":"");switch(K){case f:return $?ae(1,0):ae(31,11);case u:return $?ae(1,O):ae(0,O+1);case h:var ie=this.$locale().weekStart||0,ve=(Pe<ie?Pe+7:Pe)-ie;return ae($?J-ve:J+(6-ve),O);case c:case m:return xe(me+"Hours",0);case l:return xe(me+"Minutes",1);case o:return xe(me+"Seconds",2);case a:return xe(me+"Milliseconds",3);default:return this.clone()}},B.endOf=function(L){return this.startOf(L,!1)},B.$set=function(L,G){var N,$=R.p(L),K="set"+(this.$u?"UTC":""),ae=(N={},N[c]=K+"Date",N[m]=K+"Date",N[u]=K+"Month",N[f]=K+"FullYear",N[l]=K+"Hours",N[o]=K+"Minutes",N[a]=K+"Seconds",N[r]=K+"Milliseconds",N)[$],xe=$===c?this.$D+(G-this.$W):G;if($===u||$===f){var Pe=this.clone().set(m,1);Pe.$d[ae](xe),Pe.init(),this.$d=Pe.set(m,Math.min(this.$D,Pe.daysInMonth())).$d}else ae&&this.$d[ae](xe);return this.init(),this},B.set=function(L,G){return this.clone().$set(L,G)},B.get=function(L){return this[R.p(L)]()},B.add=function(L,G){var N,$=this;L=Number(L);var K=R.p(G),ae=function(O){var J=M($);return R.w(J.date(J.date()+Math.round(O*L)),$)};if(K===u)return this.set(u,this.$M+L);if(K===f)return this.set(f,this.$y+L);if(K===c)return ae(1);if(K===h)return ae(7);var xe=(N={},N[o]=n,N[l]=i,N[a]=t,N)[K]||1,Pe=this.$d.getTime()+L*xe;return R.w(Pe,this)},B.subtract=function(L,G){return this.add(-1*L,G)},B.format=function(L){var G=this,N=this.$locale();if(!this.isValid())return N.invalidDate||_;var $=L||"YYYY-MM-DDTHH:mm:ssZ",K=R.z(this),ae=this.$H,xe=this.$m,Pe=this.$M,O=N.weekdays,J=N.months,me=N.meridiem,ie=function(ge,Ve,Q,le){return ge&&(ge[Ve]||ge(G,$))||Q[Ve].slice(0,le)},ve=function(ge){return R.s(ae%12||12,ge,"0")},De=me||function(ge,Ve,Q){var le=ge<12?"AM":"PM";return Q?le.toLowerCase():le};return $.replace(p,function(ge,Ve){return Ve||function(Q){switch(Q){case"YY":return String(G.$y).slice(-2);case"YYYY":return R.s(G.$y,4,"0");case"M":return Pe+1;case"MM":return R.s(Pe+1,2,"0");case"MMM":return ie(N.monthsShort,Pe,J,3);case"MMMM":return ie(J,Pe);case"D":return G.$D;case"DD":return R.s(G.$D,2,"0");case"d":return String(G.$W);case"dd":return ie(N.weekdaysMin,G.$W,O,2);case"ddd":return ie(N.weekdaysShort,G.$W,O,3);case"dddd":return O[G.$W];case"H":return String(ae);case"HH":return R.s(ae,2,"0");case"h":return ve(1);case"hh":return ve(2);case"a":return De(ae,xe,!0);case"A":return De(ae,xe,!1);case"m":return String(xe);case"mm":return R.s(xe,2,"0");case"s":return String(G.$s);case"ss":return R.s(G.$s,2,"0");case"SSS":return R.s(G.$ms,3,"0");case"Z":return K}return null}(ge)||K.replace(":","")})},B.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},B.diff=function(L,G,N){var $,K=this,ae=R.p(G),xe=M(L),Pe=(xe.utcOffset()-this.utcOffset())*n,O=this-xe,J=function(){return R.m(K,xe)};switch(ae){case f:$=J()/12;break;case u:$=J();break;case d:$=J()/3;break;case h:$=(O-Pe)/6048e5;break;case c:$=(O-Pe)/864e5;break;case l:$=O/i;break;case o:$=O/n;break;case a:$=O/t;break;default:$=O}return N?$:R.a($)},B.daysInMonth=function(){return this.endOf(u).$D},B.$locale=function(){return w[this.$L]},B.locale=function(L,G){if(!L)return this.$L;var N=this.clone(),$=S(L,G,!0);return $&&(N.$L=$),N},B.clone=function(){return R.w(this.$d,this)},B.toDate=function(){return new Date(this.valueOf())},B.toJSON=function(){return this.isValid()?this.toISOString():null},B.toISOString=function(){return this.$d.toISOString()},B.toString=function(){return this.$d.toUTCString()},U}(),V=W.prototype;return M.prototype=V,[["$ms",r],["$s",a],["$m",o],["$H",l],["$W",c],["$M",u],["$y",f],["$D",m]].forEach(function(U){V[U[1]]=function(B){return this.$g(B,U[0],U[1])}}),M.extend=function(U,B){return U.$i||(U(B,W,M),U.$i=!0),M},M.locale=S,M.isDayjs=D,M.unix=function(U){return M(1e3*U)},M.en=w[A],M.Ls=w,M.p={},M})})(mf);var gf=mf.exports;const wn=hl(gf);var _f={exports:{}};(function(s,e){(function(t,n){s.exports=n()})(ua,function(){return function(t,n,i){n.prototype.dayOfYear=function(r){var a=Math.round((i(this).startOf("day")-i(this).startOf("year"))/864e5)+1;return r==null?a:this.add(r-a,"day")}}})})(_f);var og=_f.exports;const lg=hl(og);var xf={exports:{}};(function(s,e){(function(t,n){s.exports=n()})(ua,function(){return function(t,n){n.prototype.isLeapYear=function(){return this.$y%4==0&&this.$y%100!=0||this.$y%400==0}}})})(xf);var cg=xf.exports;const vf=hl(cg);function hg(s){let e,t,n,i,r,a,o,l,c,h,u,d,f;return{c(){e=we("div"),t=we("p"),n=zt("Dia "),i=we("span"),r=zt(s[0]),a=zt(" de "),o=we("span"),l=zt(s[1]),c=Qe(),h=we("p"),u=zt("Días restantes: "),d=we("span"),f=zt(s[2]),this.h()},l(m){e=Ee(m,"DIV",{});var _=ze(e);t=Ee(_,"P",{});var g=ze(t);n=kt(g,"Dia "),i=Ee(g,"SPAN",{class:!0});var p=ze(i);r=kt(p,s[0]),p.forEach(de),a=kt(g," de "),o=Ee(g,"SPAN",{class:!0});var y=ze(o);l=kt(y,s[1]),y.forEach(de),g.forEach(de),c=et(_),h=Ee(_,"P",{});var x=ze(h);u=kt(x,"Días restantes: "),d=Ee(x,"SPAN",{class:!0});var v=ze(d);f=kt(v,s[2]),v.forEach(de),x.forEach(de),_.forEach(de),this.h()},h(){fe(i,"class","font-bold"),fe(o,"class","font-medium"),fe(d,"class","font-medium")},m(m,_){yt(m,e,_),ne(e,t),ne(t,n),ne(t,i),ne(i,r),ne(t,a),ne(t,o),ne(o,l),ne(e,c),ne(e,h),ne(h,u),ne(h,d),ne(d,f)},p(m,[_]){_&1&&Nn(r,m[0]),_&2&&Nn(l,m[1]),_&4&&Nn(f,m[2])},i:rt,o:rt,d(m){m&&de(e)}}}function ug(s,e,t){let n,i,r,a;return wn.extend(lg),wn.extend(vf),s.$$.update=()=>{s.$$.dirty&8&&t(0,i=n.dayOfYear()),s.$$.dirty&8&&t(1,r=n.isLeapYear()?366:365),s.$$.dirty&3&&t(2,a=r-i)},t(3,n=wn()),[i,r,a,n]}class dg extends hn{constructor(e){super(),un(this,e,ug,hg,cn,{})}}var yf={exports:{}};(function(s,e){(function(t,n){s.exports=n()})(ua,function(){var t="week",n="year";return function(i,r,a){var o=r.prototype;o.week=function(l){if(l===void 0&&(l=null),l!==null)return this.add(7*(l-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var h=a(this).startOf(n).add(1,n).date(c),u=a(this).endOf(t);if(h.isBefore(u))return 1}var d=a(this).startOf(n).date(c).startOf(t).subtract(1,"millisecond"),f=this.diff(d,t,!0);return f<0?a(this).startOf("week").week():Math.ceil(f)},o.weeks=function(l){return l===void 0&&(l=null),this.week(l)}}})})(yf);var fg=yf.exports;const pg=hl(fg);function mg(s){let e,t,n,i,r,a,o,l,c,h,u,d,f;return{c(){e=we("div"),t=we("p"),n=zt("Semana "),i=we("span"),r=zt(s[0]),a=zt(" de "),o=we("span"),l=zt(s[1]),c=Qe(),h=we("p"),u=zt("Semana restantes: "),d=we("span"),f=zt(s[2]),this.h()},l(m){e=Ee(m,"DIV",{});var _=ze(e);t=Ee(_,"P",{});var g=ze(t);n=kt(g,"Semana "),i=Ee(g,"SPAN",{class:!0});var p=ze(i);r=kt(p,s[0]),p.forEach(de),a=kt(g," de "),o=Ee(g,"SPAN",{class:!0});var y=ze(o);l=kt(y,s[1]),y.forEach(de),g.forEach(de),c=et(_),h=Ee(_,"P",{});var x=ze(h);u=kt(x,"Semana restantes: "),d=Ee(x,"SPAN",{class:!0});var v=ze(d);f=kt(v,s[2]),v.forEach(de),x.forEach(de),_.forEach(de),this.h()},h(){fe(i,"class","font-bold"),fe(o,"class","font-medium"),fe(d,"class","font-medium")},m(m,_){yt(m,e,_),ne(e,t),ne(t,n),ne(t,i),ne(i,r),ne(t,a),ne(t,o),ne(o,l),ne(e,c),ne(e,h),ne(h,u),ne(h,d),ne(d,f)},p(m,[_]){_&1&&Nn(r,m[0]),_&2&&Nn(l,m[1]),_&4&&Nn(f,m[2])},i:rt,o:rt,d(m){m&&de(e)}}}function gg(s,e,t){let n,i,r,a;return wn.extend(pg),wn.extend(vf),s.$$.update=()=>{s.$$.dirty&8&&t(0,i=n.week()),s.$$.dirty&3&&t(2,a=r-i)},t(3,n=wn()),t(1,r=52),[i,r,a,n]}class _g extends hn{constructor(e){super(),un(this,e,gg,mg,cn,{})}}var xg={exports:{}};(function(s,e){(function(t,n){s.exports=n(gf)})(ua,function(t){function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var i=n(t),r={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(a){return a+"º"}};return i.default.locale(r,null,!0),r})})(xg);function vg(s){let e,t,n=s[0].format("HH:mm:ss")+"",i,r,a,o=s[0].format("D MMMM YYYY")+"",l;return{c(){e=we("div"),t=we("div"),i=zt(n),r=Qe(),a=we("div"),l=zt(o),this.h()},l(c){e=Ee(c,"DIV",{class:!0});var h=ze(e);t=Ee(h,"DIV",{class:!0});var u=ze(t);i=kt(u,n),u.forEach(de),r=et(h),a=Ee(h,"DIV",{class:!0});var d=ze(a);l=kt(d,o),d.forEach(de),h.forEach(de),this.h()},h(){fe(t,"class","text-4xl font-bold mb-2"),fe(a,"class","text-lg"),fe(e,"class","block card card-hover p-4 space-y-2 flex flex-col items-center justify-center ")},m(c,h){yt(c,e,h),ne(e,t),ne(t,i),ne(e,r),ne(e,a),ne(a,l)},p(c,[h]){h&1&&n!==(n=c[0].format("HH:mm:ss")+"")&&Nn(i,n),h&1&&o!==(o=c[0].format("D MMMM YYYY")+"")&&Nn(l,o)},i:rt,o:rt,d(c){c&&de(e)}}}function yg(s,e,t){let n=wn(),i;return cl(()=>{wn.locale("es"),i=setInterval(()=>{t(0,n=wn())},1e3)}),An(()=>{i&&clearInterval(i)}),[n]}class Mg extends hn{constructor(e){super(),un(this,e,yg,vg,cn,{})}}function fu(s,e,t){const n=s.slice();return n[9]=e[t],n}function pu(s,e,t){const n=s.slice();return n[12]=e[t],n}function mu(s,e,t){const n=s.slice();return n[9]=e[t],n}function gu(s){let e,t=s[9]+"",n;return{c(){e=we("div"),n=zt(t),this.h()},l(i){e=Ee(i,"DIV",{class:!0});var r=ze(e);n=kt(r,t),r.forEach(de),this.h()},h(){fe(e,"class","text-xs font-medium text-gray-500")},m(i,r){yt(i,e,r),ne(e,n)},p:rt,d(i){i&&de(e)}}}function _u(s){let e;return{c(){e=we("div")},l(t){e=Ee(t,"DIV",{}),ze(e).forEach(de)},m(t,n){yt(t,e,n)},p:rt,d(t){t&&de(e)}}}function xu(s){let e,t=s[9]+"",n,i,r;return{c(){e=we("div"),n=zt(t),i=Qe(),this.h()},l(a){e=Ee(a,"DIV",{class:!0});var o=ze(e);n=kt(o,t),i=et(o),o.forEach(de),this.h()},h(){fe(e,"class",r=`
        p-1 text-sm rounded-full
        ${s[5](s[9])?"bg-blue-500 text-white":"text-gray-700"}
      `)},m(a,o){yt(a,e,o),ne(e,n),ne(e,i)},p(a,o){o&2&&t!==(t=a[9]+"")&&Nn(n,t),o&2&&r!==(r=`
        p-1 text-sm rounded-full
        ${a[5](a[9])?"bg-blue-500 text-white":"text-gray-700"}
      `)&&fe(e,"class",r)},d(a){a&&de(e)}}}function bg(s){let e,t,n,i,r,a,o,l,c,h,u=Ii(s[4]),d=[];for(let p=0;p<u.length;p+=1)d[p]=gu(mu(s,u,p));let f=Ii(s[0]),m=[];for(let p=0;p<f.length;p+=1)m[p]=_u(pu(s,f,p));let _=Ii(s[1]),g=[];for(let p=0;p<_.length;p+=1)g[p]=xu(fu(s,_,p));return{c(){e=we("div"),t=we("div"),n=we("h2"),i=zt(s[3]),r=Qe(),a=zt(s[2]),o=Qe(),l=we("div");for(let p=0;p<d.length;p+=1)d[p].c();c=Qe();for(let p=0;p<m.length;p+=1)m[p].c();h=Qe();for(let p=0;p<g.length;p+=1)g[p].c();this.h()},l(p){e=Ee(p,"DIV",{class:!0});var y=ze(e);t=Ee(y,"DIV",{class:!0});var x=ze(t);n=Ee(x,"H2",{class:!0});var v=ze(n);i=kt(v,s[3]),r=et(v),a=kt(v,s[2]),v.forEach(de),x.forEach(de),o=et(y),l=Ee(y,"DIV",{class:!0});var A=ze(l);for(let w=0;w<d.length;w+=1)d[w].l(A);c=et(A);for(let w=0;w<m.length;w+=1)m[w].l(A);h=et(A);for(let w=0;w<g.length;w+=1)g[w].l(A);A.forEach(de),y.forEach(de),this.h()},h(){fe(n,"class","text-lg font-semibold text-gray-800"),fe(t,"class","flex justify-between items-center mb-4"),fe(l,"class","grid grid-cols-7 gap-1 text-center"),fe(e,"class","block card card-hover p-4 space-y-2 w-64")},m(p,y){yt(p,e,y),ne(e,t),ne(t,n),ne(n,i),ne(n,r),ne(n,a),ne(e,o),ne(e,l);for(let x=0;x<d.length;x+=1)d[x]&&d[x].m(l,null);ne(l,c);for(let x=0;x<m.length;x+=1)m[x]&&m[x].m(l,null);ne(l,h);for(let x=0;x<g.length;x+=1)g[x]&&g[x].m(l,null)},p(p,[y]){if(y&8&&Nn(i,p[3]),y&4&&Nn(a,p[2]),y&16){u=Ii(p[4]);let x;for(x=0;x<u.length;x+=1){const v=mu(p,u,x);d[x]?d[x].p(v,y):(d[x]=gu(v),d[x].c(),d[x].m(l,c))}for(;x<d.length;x+=1)d[x].d(1);d.length=u.length}if(y&1){f=Ii(p[0]);let x;for(x=0;x<f.length;x+=1){const v=pu(p,f,x);m[x]?m[x].p(v,y):(m[x]=_u(),m[x].c(),m[x].m(l,h))}for(;x<m.length;x+=1)m[x].d(1);m.length=f.length}if(y&34){_=Ii(p[1]);let x;for(x=0;x<_.length;x+=1){const v=fu(p,_,x);g[x]?g[x].p(v,y):(g[x]=xu(v),g[x].c(),g[x].m(l,null))}for(;x<g.length;x+=1)g[x].d(1);g.length=_.length}},i:rt,o:rt,d(p){p&&de(e),yo(d,p),yo(m,p),yo(g,p)}}}function Sg(s,e,t){let n,i,r,a,o,l,c=wn();const h=["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];function u(d){return d===wn().date()&&c.month()===wn().month()&&c.year()===wn().year()}return s.$$.update=()=>{s.$$.dirty&128&&t(1,o=[...Array(r).keys()].map(d=>d+1)),s.$$.dirty&64&&t(0,l=[...Array(a).keys()])},t(3,n=c.format("MMMM")),t(2,i=c.format("YYYY")),t(7,r=c.daysInMonth()),t(6,a=c.startOf("month").day()),[l,o,i,n,h,u,a,r]}class wg extends hn{constructor(e){super(),un(this,e,Sg,bg,cn,{})}}function Eg(s){let e,t,n,i,r,a,o,l,c,h,u,d,f,m,_,g,p,y,x,v,A,w,E,D,S,M,R,W='<p class="font-bold">SAT</p> <small class="opacity-50">@sat</small>',V,U,B="Expediente Clínico Electrónico.",L,G,N='<small><strong>50</strong> <span class="opacity-50">Following</span></small> <small><strong>500</strong> <span class="opacity-50">Followers</span></small>',$,K,ae,xe,Pe,O,J,me="s",ie,ve,De,ge,Ve,Q,le,I,Be='<div class="w-96 aspect-square border-2 border-dark/5 dark:border-white/5 rounded-full flex justify-center items-center"><div class="w-[240px] aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center"></div></div>',oe;return n=new du({props:{src:rg({id:"pic_rfcorto00",w:128,h:128}),width:"w-32",shadow:"shadow-xl"}}),l=new _g({}),h=new Ni({props:{icon:"material-symbols:health-and-safety",class:"text-xl"}}),_=new dg({}),p=new Ni({props:{icon:"fa-solid:calendar-week",class:"text-xl"}}),v=new wg({}),S=new du({props:{src:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Cargobase_logo_square_400x400.png",width:"w-16"}}),ae=new Mg({}),ve=new Ni({props:{icon:"material-symbols:health-and-safety",class:"text-xl"}}),Q=new Ni({props:{icon:"healthicons:healthcare-it",class:"text-base"}}),{c(){e=we("div"),t=we("div"),lt(n.$$.fragment),i=Qe(),r=we("div"),a=we("button"),o=we("span"),lt(l.$$.fragment),c=Qe(),lt(h.$$.fragment),u=Qe(),d=we("div"),f=we("button"),m=we("span"),lt(_.$$.fragment),g=Qe(),lt(p.$$.fragment),y=Qe(),x=we("div"),lt(v.$$.fragment),A=Qe(),w=we("div"),E=we("a"),D=we("div"),lt(S.$$.fragment),M=Qe(),R=we("div"),R.innerHTML=W,V=Qe(),U=we("p"),U.textContent=B,L=Qe(),G=we("div"),G.innerHTML=N,$=Qe(),K=we("div"),lt(ae.$$.fragment),xe=Qe(),Pe=we("div"),O=we("button"),J=we("span"),J.textContent=me,ie=Qe(),lt(ve.$$.fragment),De=Qe(),ge=we("div"),Ve=we("span"),lt(Q.$$.fragment),le=Qe(),I=we("div"),I.innerHTML=Be,this.h()},l(ce){e=Ee(ce,"DIV",{class:!0});var se=ze(e);t=Ee(se,"DIV",{class:!0});var We=ze(t);ct(n.$$.fragment,We),We.forEach(de),i=et(se),r=Ee(se,"DIV",{class:!0});var ye=ze(r);a=Ee(ye,"BUTTON",{class:!0});var C=ze(a);o=Ee(C,"SPAN",{});var b=ze(o);ct(l.$$.fragment,b),b.forEach(de),c=et(C),ct(h.$$.fragment,C),C.forEach(de),ye.forEach(de),u=et(se),d=Ee(se,"DIV",{class:!0});var H=ze(d);f=Ee(H,"BUTTON",{class:!0});var Z=ze(f);m=Ee(Z,"SPAN",{});var re=ze(m);ct(_.$$.fragment,re),re.forEach(de),g=et(Z),ct(p.$$.fragment,Z),Z.forEach(de),H.forEach(de),y=et(se),x=Ee(se,"DIV",{class:!0});var ee=ze(x);ct(v.$$.fragment,ee),ee.forEach(de),A=et(se),w=Ee(se,"DIV",{class:!0});var Ue=ze(w);E=Ee(Ue,"A",{class:!0,href:!0,target:!0,rel:!0});var pe=ze(E);D=Ee(pe,"DIV",{class:!0});var Se=ze(D);ct(S.$$.fragment,Se),M=et(Se),R=Ee(Se,"DIV",{"data-svelte-h":!0}),In(R)!=="svelte-8xa8uy"&&(R.innerHTML=W),Se.forEach(de),V=et(pe),U=Ee(pe,"P",{class:!0,"data-svelte-h":!0}),In(U)!=="svelte-uujy3j"&&(U.textContent=B),L=et(pe),G=Ee(pe,"DIV",{class:!0,"data-svelte-h":!0}),In(G)!=="svelte-1bmqzc4"&&(G.innerHTML=N),pe.forEach(de),Ue.forEach(de),$=et(se),K=Ee(se,"DIV",{class:!0});var at=ze(K);ct(ae.$$.fragment,at),at.forEach(de),xe=et(se),Pe=Ee(se,"DIV",{class:!0});var he=ze(Pe);O=Ee(he,"BUTTON",{class:!0});var Re=ze(O);J=Ee(Re,"SPAN",{"data-svelte-h":!0}),In(J)!=="svelte-1i0dqr5"&&(J.textContent=me),ie=et(Re),ct(ve.$$.fragment,Re),Re.forEach(de),he.forEach(de),De=et(se),ge=Ee(se,"DIV",{class:!0});var He=ze(ge);Ve=Ee(He,"SPAN",{class:!0});var qe=ze(Ve);ct(Q.$$.fragment,qe),qe.forEach(de),He.forEach(de),le=et(se),I=Ee(se,"DIV",{class:!0,"data-svelte-h":!0}),In(I)!=="svelte-c8jk28"&&(I.innerHTML=Be),se.forEach(de),this.h()},h(){fe(t,"class","anim-float-avatar absolute z-[1] top-[32%] left-[40%] svelte-dg9myt"),fe(a,"class","btn variant-glass-secondary "),fe(r,"class","anim-float-progress anim-delay-200 absolute z-[1] top-[0%] left-[10%] svelte-dg9myt"),fe(f,"class","btn variant-glass-secondary "),fe(d,"class","anim-float-search anim-delay-200 absolute z-[1] top-[-12%] left-[35%] svelte-dg9myt"),fe(x,"class","anim-float-radio absolute z-[1] top-[0%] left-[70%] svelte-dg9myt"),fe(D,"class","flex items-center gap-4"),fe(U,"class","whitespace-nowrap"),fe(G,"class","flex just gap-4"),fe(E,"class","block card card-hover p-4 space-y-2"),fe(E,"href","https://twitter.com/SkeletonUI"),fe(E,"target","_blank"),fe(E,"rel","noreferrer"),fe(w,"class","anim-float-card absolute z-[1] top-[80%] left-[65%] svelte-dg9myt"),fe(K,"class","anim-float-button absolute z-[1] top-[78%] left-[15%] svelte-dg9myt"),fe(O,"class","btn variant-glass-secondary "),fe(Pe,"class","anim-float-toggle anim-delay-200 absolute z-[1] top-[55%] left-[5%] svelte-dg9myt"),fe(Ve,"class","badge-icon variant-filled "),fe(ge,"class","anim-float-badge absolute z-[1] top-[45%] left-[25%] svelte-dg9myt"),fe(I,"class","absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0 "),fe(e,"class","aspect-video relative animate-fade-up animate-once")},m(ce,se){yt(ce,e,se),ne(e,t),ht(n,t,null),ne(e,i),ne(e,r),ne(r,a),ne(a,o),ht(l,o,null),ne(a,c),ht(h,a,null),ne(e,u),ne(e,d),ne(d,f),ne(f,m),ht(_,m,null),ne(f,g),ht(p,f,null),ne(e,y),ne(e,x),ht(v,x,null),ne(e,A),ne(e,w),ne(w,E),ne(E,D),ht(S,D,null),ne(D,M),ne(D,R),ne(E,V),ne(E,U),ne(E,L),ne(E,G),ne(e,$),ne(e,K),ht(ae,K,null),ne(e,xe),ne(e,Pe),ne(Pe,O),ne(O,J),ne(O,ie),ht(ve,O,null),ne(e,De),ne(e,ge),ne(ge,Ve),ht(Q,Ve,null),ne(e,le),ne(e,I),oe=!0},p:rt,i(ce){oe||(Oe(n.$$.fragment,ce),Oe(l.$$.fragment,ce),Oe(h.$$.fragment,ce),Oe(_.$$.fragment,ce),Oe(p.$$.fragment,ce),Oe(v.$$.fragment,ce),Oe(S.$$.fragment,ce),Oe(ae.$$.fragment,ce),Oe(ve.$$.fragment,ce),Oe(Q.$$.fragment,ce),oe=!0)},o(ce){ke(n.$$.fragment,ce),ke(l.$$.fragment,ce),ke(h.$$.fragment,ce),ke(_.$$.fragment,ce),ke(p.$$.fragment,ce),ke(v.$$.fragment,ce),ke(S.$$.fragment,ce),ke(ae.$$.fragment,ce),ke(ve.$$.fragment,ce),ke(Q.$$.fragment,ce),oe=!1},d(ce){ce&&de(e),ut(n),ut(l),ut(h),ut(_),ut(p),ut(v),ut(S),ut(ae),ut(ve),ut(Q)}}}class Tg extends hn{constructor(e){super(),un(this,e,null,Eg,cn,{})}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="171",_s={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mf=0,zc=1,bf=2,Ag=3,Cg=0,lh=1,ul=2,qn=3,yi=0,on=1,Zn=2,mi=0,xs=1,kc=2,Vc=3,Hc=4,Sf=5,Li=100,wf=101,Ef=102,Tf=103,Af=104,Cf=200,Rf=201,Pf=202,If=203,wo=204,Eo=205,Df=206,Lf=207,Nf=208,Uf=209,Of=210,Ff=211,Bf=212,zf=213,kf=214,To=0,Ao=1,Co=2,bs=3,Ro=4,Po=5,Io=6,Do=7,fa=0,Vf=1,Hf=2,gi=0,Gf=1,Wf=2,Xf=3,ch=4,Yf=5,$f=6,qf=7,Gc="attached",Zf="detached",dl=300,Mi=301,Bi=302,Hr=303,Gr=304,ur=306,Wr=1e3,Dn=1001,Xr=1002,$t=1003,hh=1004,Rg=1004,Qs=1005,Pg=1005,Vt=1006,Dr=1007,Ig=1007,Kn=1008,Dg=1008,ti=1009,uh=1010,dh=1011,or=1012,fl=1013,bi=1014,vn=1015,dr=1016,pl=1017,ml=1018,Ss=1020,fh=35902,ph=1021,mh=1022,an=1023,gh=1024,_h=1025,vs=1026,ws=1027,gl=1028,pa=1029,xh=1030,_l=1031,Lg=1032,xl=1033,Lr=33776,Nr=33777,Ur=33778,Or=33779,Lo=35840,No=35841,Uo=35842,Oo=35843,Fo=36196,Bo=37492,zo=37496,ko=37808,Vo=37809,Ho=37810,Go=37811,Wo=37812,Xo=37813,Yo=37814,$o=37815,qo=37816,Zo=37817,Ko=37818,Jo=37819,jo=37820,Qo=37821,Fr=36492,el=36494,tl=36495,vh=36283,nl=36284,il=36285,sl=36286,Kf=2200,Jf=2201,jf=2202,Yr=2300,rl=2301,Mo=2302,fs=2400,ps=2401,$r=2402,vl=2500,yh=2501,Ng=0,Ug=1,Og=2,Qf=3200,ep=3201,Fg=3202,Bg=3203,Wi=0,tp=1,di="",_n="srgb",Es="srgb-linear",qr="linear",bt="srgb",zg=0,cs=7680,kg=7681,Vg=7682,Hg=7683,Gg=34055,Wg=34056,Xg=5386,Yg=512,$g=513,qg=514,Zg=515,Kg=516,Jg=517,jg=518,Wc=519,np=512,ip=513,sp=514,Mh=515,rp=516,ap=517,op=518,lp=519,Zr=35044,Qg=35048,e_=35040,t_=35045,n_=35049,i_=35041,s_=35046,r_=35050,a_=35042,o_="100",Xc="300 es",Jn=2e3,Kr=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vu=1234567;const ys=Math.PI/180,lr=180/Math.PI;function En(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[s&255]+Zt[s>>8&255]+Zt[s>>16&255]+Zt[s>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Je(s,e,t){return Math.max(e,Math.min(t,s))}function bh(s,e){return(s%e+e)%e}function l_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function c_(s,e,t){return s!==e?(t-s)/(e-s):0}function Br(s,e,t){return(1-t)*s+t*e}function h_(s,e,t,n){return Br(s,e,1-Math.exp(-t*n))}function u_(s,e=1){return e-Math.abs(bh(s,e*2)-e)}function d_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function f_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function p_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function m_(s,e){return s+Math.random()*(e-s)}function g_(s){return s*(.5-Math.random())}function __(s){s!==void 0&&(vu=s);let e=vu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function x_(s){return s*ys}function v_(s){return s*lr}function y_(s){return(s&s-1)===0&&s!==0}function M_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function b_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function S_(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const cp={DEG2RAD:ys,RAD2DEG:lr,generateUUID:En,clamp:Je,euclideanModulo:bh,mapLinear:l_,inverseLerp:c_,lerp:Br,damp:h_,pingpong:u_,smoothstep:d_,smootherstep:f_,randInt:p_,randFloat:m_,randFloatSpread:g_,seededRandom:__,degToRad:x_,radToDeg:v_,isPowerOfTwo:y_,ceilPowerOfTwo:M_,floorPowerOfTwo:b_,setQuaternionFromProperEuler:S_,normalize:tt,denormalize:rn};class j{constructor(e=0,t=0){j.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,i,r,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],y=i[1],x=i[4],v=i[7],A=i[2],w=i[5],E=i[8];return r[0]=a*_+o*y+l*A,r[3]=a*g+o*x+l*w,r[6]=a*p+o*v+l*E,r[1]=c*_+h*y+u*A,r[4]=c*g+h*x+u*w,r[7]=c*p+h*v+u*E,r[2]=d*_+f*y+m*A,r[5]=d*g+f*x+m*w,r[8]=d*p+f*v+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zl.makeScale(e,t)),this}rotate(e){return this.premultiply(Zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zl=new je;function hp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const w_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function er(s,e){return new w_[s](e)}function Jr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function up(){const s=Jr("canvas");return s.style.display="block",s}const yu={};function js(s){s in yu||(yu[s]=!0,console.warn(s))}function E_(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function T_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function A_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mu=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function C_(){const s={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===bt&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(i.r=rr(i.r),i.g=rr(i.g),i.b=rr(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?qr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Es]:{primaries:e,whitePoint:n,transfer:qr,toXYZ:Mu,fromXYZ:bu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:Mu,fromXYZ:bu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),s}const ot=C_();function _i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ns;class dp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=Jr("canvas")),Ns.width=e.width,Ns.height=e.height;const n=Ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let R_=0;class ms{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=En(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Kl(i[a].image)):r.push(Kl(i[a]))}else r=Kl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Kl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let P_=0;class Lt extends ni{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Dn,i=Dn,r=Vt,a=Kn,o=an,l=ti,c=Lt.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=En(),this.name="",this.source=new ms(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wr:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wr:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=dl;Lt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(f+1)/2,A=(p+1)/2,w=(h+d)/4,E=(u+_)/4,D=(m+g)/4;return x>v&&x>A?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=E/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=D/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=E/r,i=D/r),this.set(n,i,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fp extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ms(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends fp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yl extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I_ extends Wn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new yl(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Sh extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class D_ extends Wn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Sh(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class jt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==m){let g=1-o;const p=l*d+c*f+h*m+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,p*y);g=Math.sin(g*w)/A,o=Math.sin(o*w)/A}const v=o*y;if(l=l*g+d*v,c=c*g+f*v,h=h*g+m*v,u=u*g+_*v,g===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Su.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jl=new P,Su=new jt;class ln{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),Ta.subVectors(this.max,xr),Us.subVectors(e.a,xr),Os.subVectors(e.b,xr),Fs.subVectors(e.c,xr),wi.subVectors(Os,Us),Ei.subVectors(Fs,Os),Ki.subVectors(Us,Fs);let t=[0,-wi.z,wi.y,0,-Ei.z,Ei.y,0,-Ki.z,Ki.y,wi.z,0,-wi.x,Ei.z,0,-Ei.x,Ki.z,0,-Ki.x,-wi.y,wi.x,0,-Ei.y,Ei.x,0,-Ki.y,Ki.x,0];return!jl(t,Us,Os,Fs,Ta)||(t=[1,0,0,0,1,0,0,0,1],!jl(t,Us,Os,Fs,Ta))?!1:(Aa.crossVectors(wi,Ei),t=[Aa.x,Aa.y,Aa.z],jl(t,Us,Os,Fs,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new P,new P,new P,new P,new P,new P,new P,new P],Bn=new P,Ea=new ln,Us=new P,Os=new P,Fs=new P,wi=new P,Ei=new P,Ki=new P,xr=new P,Ta=new P,Aa=new P,Ji=new P;function jl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ji.fromArray(s,r);const o=i.x*Math.abs(Ji.x)+i.y*Math.abs(Ji.y)+i.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const L_=new ln,vr=new P,Ql=new P;class Qt{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):L_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(vr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(Ql)),this.expandByPoint(vr.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new P,ec=new P,Ca=new P,Ti=new P,tc=new P,Ra=new P,nc=new P;class Rs{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ec.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(ec);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ca),o=Ti.dot(this.direction),l=-Ti.dot(Ca),c=Ti.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ec).addScaledVector(Ca,d),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,i,r){tc.subVectors(t,e),Ra.subVectors(n,e),nc.crossVectors(tc,Ra);let a=this.direction.dot(nc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);const l=o*this.direction.dot(Ra.crossVectors(Ti,Ra));if(l<0)return null;const c=o*this.direction.dot(tc.cross(Ti));if(c<0||l+c>a)return null;const h=-o*Ti.dot(nc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,m,_,g){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,m,_,g)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),a=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N_,e,U_)}lookAt(e,t,n){const i=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ai.crossVectors(n,bn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ai.crossVectors(n,bn)),Ai.normalize(),Pa.crossVectors(bn,Ai),i[0]=Ai.x,i[4]=Pa.x,i[8]=bn.x,i[1]=Ai.y,i[5]=Pa.y,i[9]=bn.y,i[2]=Ai.z,i[6]=Pa.z,i[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],y=n[3],x=n[7],v=n[11],A=n[15],w=i[0],E=i[4],D=i[8],S=i[12],M=i[1],R=i[5],W=i[9],V=i[13],U=i[2],B=i[6],L=i[10],G=i[14],N=i[3],$=i[7],K=i[11],ae=i[15];return r[0]=a*w+o*M+l*U+c*N,r[4]=a*E+o*R+l*B+c*$,r[8]=a*D+o*W+l*L+c*K,r[12]=a*S+o*V+l*G+c*ae,r[1]=h*w+u*M+d*U+f*N,r[5]=h*E+u*R+d*B+f*$,r[9]=h*D+u*W+d*L+f*K,r[13]=h*S+u*V+d*G+f*ae,r[2]=m*w+_*M+g*U+p*N,r[6]=m*E+_*R+g*B+p*$,r[10]=m*D+_*W+g*L+p*K,r[14]=m*S+_*V+g*G+p*ae,r[3]=y*w+x*M+v*U+A*N,r[7]=y*E+x*R+v*B+A*$,r[11]=y*D+x*W+v*L+A*K,r[15]=y*S+x*V+v*G+A*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+g*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],y=u*g*c-_*d*c+_*l*f-o*g*f-u*l*p+o*d*p,x=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,v=h*_*c-m*u*c+m*o*f-a*_*f-h*o*p+a*u*p,A=m*u*l-h*_*l-m*o*d+a*_*d+h*o*g-a*u*g,w=t*y+n*x+i*v+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=y*E,e[1]=(_*d*r-u*g*r-_*i*f+n*g*f+u*i*p-n*d*p)*E,e[2]=(o*g*r-_*l*r+_*i*c-n*g*c-o*i*p+n*l*p)*E,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*E,e[4]=x*E,e[5]=(h*g*r-m*d*r+m*i*f-t*g*f-h*i*p+t*d*p)*E,e[6]=(m*l*r-a*g*r-m*i*c+t*g*c+a*i*p-t*l*p)*E,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*E,e[8]=v*E,e[9]=(m*u*r-h*_*r-m*n*f+t*_*f+h*n*p-t*u*p)*E,e[10]=(a*_*r-m*o*r+m*n*c-t*_*c-a*n*p+t*o*p)*E,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*E,e[12]=A*E,e[13]=(h*_*i-m*u*i+m*n*d-t*_*d-h*n*g+t*u*g)*E,e[14]=(m*o*i-a*_*i-m*n*l+t*_*l+a*n*g-t*o*g)*E,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,_=a*h,g=a*u,p=o*u,y=l*c,x=l*h,v=l*u,A=n.x,w=n.y,E=n.z;return i[0]=(1-(_+p))*A,i[1]=(f+v)*A,i[2]=(m-x)*A,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+p))*w,i[6]=(g+y)*w,i[7]=0,i[8]=(m+x)*E,i[9]=(g-y)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Bs.set(i[0],i[1],i[2]).length();const a=Bs.set(i[4],i[5],i[6]).length(),o=Bs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],zn.copy(this);const c=1/r,h=1/a,u=1/o;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Jn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(o===Jn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Kr)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Jn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,f=(n+i)*h;let m,_;if(o===Jn)m=(a+r)*u,_=-2*u;else if(o===Kr)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bs=new P,zn=new $e,N_=new P(0,0,0),U_=new P(1,1,1),Ai=new P,Pa=new P,bn=new P,wu=new $e,Eu=new jt;class Tn{constructor(e=0,t=0,n=0,i=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let O_=0;const Tu=new P,zs=new jt,oi=new $e,Ia=new P,yr=new P,F_=new P,B_=new jt,Au=new P(1,0,0),Cu=new P(0,1,0),Ru=new P(0,0,1),Pu={type:"added"},z_={type:"removed"},ks={type:"childadded",child:null},ic={type:"childremoved",child:null};class gt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new P,t=new Tn,n=new jt,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new je}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Cu,e)}rotateZ(e){return this.rotateOnAxis(Ru,e)}translateOnAxis(e,t){return Tu.copy(e).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Cu,e)}translateZ(e){return this.translateOnAxis(Ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ia.copy(e):Ia.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(yr,Ia,this.up):oi.lookAt(Ia,yr,this.up),this.quaternion.setFromRotationMatrix(oi),i&&(oi.extractRotation(i.matrixWorld),zs.setFromRotationMatrix(oi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pu),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z_),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pu),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,F_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,B_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new P(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new P,li=new P,sc=new P,ci=new P,Vs=new P,Hs=new P,Iu=new P,rc=new P,ac=new P,oc=new P,lc=new mt,cc=new mt,hc=new mt;class xn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kn.subVectors(e,t),i.cross(kn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){kn.subVectors(i,t),li.subVectors(n,t),sc.subVectors(e,t);const a=kn.dot(kn),o=kn.dot(li),l=kn.dot(sc),c=li.dot(li),h=li.dot(sc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return lc.setScalar(0),cc.setScalar(0),hc.setScalar(0),lc.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,n),hc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(lc,r.x),a.addScaledVector(cc,r.y),a.addScaledVector(hc,r.z),a}static isFrontFacing(e,t,n,i){return kn.subVectors(n,t),li.subVectors(e,t),kn.cross(li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),kn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Vs.subVectors(i,n),Hs.subVectors(r,n),rc.subVectors(e,n);const l=Vs.dot(rc),c=Hs.dot(rc);if(l<=0&&c<=0)return t.copy(n);ac.subVectors(e,i);const h=Vs.dot(ac),u=Hs.dot(ac);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Vs,a);oc.subVectors(e,r);const f=Vs.dot(oc),m=Hs.dot(oc);if(m>=0&&f<=m)return t.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Hs,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Iu.subVectors(r,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Iu,o);const p=1/(g+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Vs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Da={h:0,s:0,l:0};function uc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=bh(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=uc(a,r,e+1/3),this.g=uc(a,r,e),this.b=uc(a,r,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=_n){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){const n=pp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return ot.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Je(Kt.r*255,0,255))*65536+Math.round(Je(Kt.g*255,0,255))*256+Math.round(Je(Kt.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Kt.copy(this),t);const n=Kt.r,i=Kt.g,r=Kt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=_n){ot.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,i=Kt.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Da);const n=Br(Ci.h,Da.h,t),i=Br(Ci.s,Da.s,t),r=Br(Ci.l,Da.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Ce;Ce.NAMES=pp;let k_=0;class en extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=En(),this.name="",this.type="Material",this.blending=xs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=Eo,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Eo&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xi extends en{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fi=V_();function V_(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function gn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Je(s,-65504,65504),fi.floatView[0]=s;const e=fi.uint32View[0],t=e>>23&511;return fi.baseTable[t]+((e&8388607)>>fi.shiftTable[t])}function Pr(s){const e=s>>10;return fi.uint32View[0]=fi.mantissaTable[fi.offsetTable[e]+(s&1023)]+fi.exponentTable[e],fi.floatView[0]}const H_={toHalfFloat:gn,fromHalfFloat:Pr},Ft=new P,La=new j;class wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zr,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zr&&(e.usage=this.usage),e}}class G_ extends wt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class W_ extends wt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class X_ extends wt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Y_ extends wt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class wh extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $_ extends wt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Eh extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class q_ extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Pr(this.array[e*this.itemSize]);return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=gn(t),this}getY(e){let t=Pr(this.array[e*this.itemSize+1]);return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=gn(t),this}getZ(e){let t=Pr(this.array[e*this.itemSize+2]);return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=gn(t),this}getW(e){let t=Pr(this.array[e*this.itemSize+3]);return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=gn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=gn(t),this.array[e+1]=gn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=gn(t),this.array[e+1]=gn(n),this.array[e+2]=gn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=gn(t),this.array[e+1]=gn(n),this.array[e+2]=gn(i),this.array[e+3]=gn(r),this}}class Ne extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Z_=0;const Pn=new $e,dc=new gt,Gs=new P,Sn=new ln,Mr=new ln,Wt=new P;class nt extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hp(e)?Eh:wh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ne(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Sn.min,Mr.min),Sn.expandByPoint(Wt),Wt.addVectors(Sn.max,Mr.max),Sn.expandByPoint(Wt)):(Sn.expandByPoint(Mr.min),Sn.expandByPoint(Mr.max))}Sn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(Gs.fromBufferAttribute(e,c),Wt.add(Gs)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new P,l[D]=new P;const c=new P,h=new P,u=new P,d=new j,f=new j,m=new j,_=new P,g=new P;function p(D,S,M){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(R),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(R),o[D].add(_),o[S].add(_),o[M].add(_),l[D].add(g),l[S].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,S=y.length;D<S;++D){const M=y[D],R=M.start,W=M.count;for(let V=R,U=R+W;V<U;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new P,v=new P,A=new P,w=new P;function E(D){A.fromBufferAttribute(i,D),w.copy(A);const S=o[D];x.copy(S),x.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(w,S);const R=v.dot(l[D])<0?-1:1;a.setXYZW(D,x.x,x.y,x.z,R)}for(let D=0,S=y.length;D<S;++D){const M=y[D],R=M.start,W=M.count;for(let V=R,U=R+W;V<U;V+=3)E(e.getX(V+0)),E(e.getX(V+1)),E(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new wt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Du=new $e,ji=new Rs,Na=new Qt,Lu=new P,Ua=new P,Oa=new P,Fa=new P,fc=new P,Ba=new P,Nu=new P,za=new P;class Ut extends gt{constructor(e=new nt,t=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(fc.fromBufferAttribute(u,e),a?Ba.addScaledVector(fc,h):Ba.addScaledVector(fc.sub(t),h))}t.add(Ba)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(Na.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Na,Lu)===null||ji.origin.distanceToSquared(Lu)>(e.far-e.near)**2))&&(Du.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Du),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,A=x;v<A;v+=3){const w=o.getX(v),E=o.getX(v+1),D=o.getX(v+2);i=ka(this,p,e,n,c,h,u,w,E,D),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const y=o.getX(g),x=o.getX(g+1),v=o.getX(g+2);i=ka(this,a,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,A=x;v<A;v+=3){const w=v,E=v+1,D=v+2;i=ka(this,p,e,n,c,h,u,w,E,D),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const y=g,x=g+1,v=g+2;i=ka(this,a,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function K_(s,e,t,n,i,r,a,o){let l;if(e.side===on?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===yi,o),l===null)return null;za.copy(o),za.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(za);return c<t.near||c>t.far?null:{distance:c,point:za.clone(),object:s}}function ka(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ua),s.getVertexPosition(l,Oa),s.getVertexPosition(c,Fa);const h=K_(s,e,t,n,Ua,Oa,Fa,Nu);if(h){const u=new P;xn.getBarycoord(Nu,Ua,Oa,Fa,u),i&&(h.uv=xn.getInterpolatedAttribute(i,o,l,c,u,new j)),r&&(h.uv1=xn.getInterpolatedAttribute(r,o,l,c,u,new j)),a&&(h.normal=xn.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};xn.getNormal(Ua,Oa,Fa,d.normal),h.face=d,h.barycoord=u}return h}class Ps extends nt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(u,2));function m(_,g,p,y,x,v,A,w,E,D,S){const M=v/E,R=A/D,W=v/2,V=A/2,U=w/2,B=E+1,L=D+1;let G=0,N=0;const $=new P;for(let K=0;K<L;K++){const ae=K*R-V;for(let xe=0;xe<B;xe++){const Pe=xe*M-W;$[_]=Pe*y,$[g]=ae*x,$[p]=U,c.push($.x,$.y,$.z),$[_]=0,$[g]=0,$[p]=w>0?1:-1,h.push($.x,$.y,$.z),u.push(xe/E),u.push(1-K/D),G+=1}}for(let K=0;K<D;K++)for(let ae=0;ae<E;ae++){const xe=d+ae+B*K,Pe=d+ae+B*(K+1),O=d+(ae+1)+B*(K+1),J=d+(ae+1)+B*K;l.push(xe,Pe,J),l.push(Pe,O,J),N+=6}o.addGroup(f,N,S),f+=N,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(s){const e={};for(let t=0;t<s.length;t++){const n=cr(s[t]);for(const i in n)e[i]=n[i]}return e}function J_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function mp(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const gp={clone:cr,merge:sn};var j_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends en{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j_,this.fragmentShader=Q_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=J_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bl extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new P,Uu=new j,Ou=new j;class Xt extends bl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,Uu,Ou),t.subVectors(Ou,Uu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,Xs=1;class _p extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xt(Ws,Xs,e,t);i.layers=this.layers,this.add(i);const r=new Xt(Ws,Xs,e,t);r.layers=this.layers,this.add(r);const a=new Xt(Ws,Xs,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Ws,Xs,e,t);o.layers=this.layers,this.add(o);const l=new Xt(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Ws,Xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ma extends Lt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Mi,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xp extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ma(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ps(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:mi});r.uniforms.tEquirect.value=t;const a=new Ut(i,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Vt),new _p(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class Sl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new Sl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new wl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Th extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class El{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zr,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new P;class Ts{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ts(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ah extends en{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ys;const br=new P,$s=new P,qs=new P,Zs=new j,Sr=new j,vp=new $e,Va=new P,wr=new P,Ha=new P,Fu=new j,pc=new j,Bu=new j;class yp extends gt{constructor(e=new Ah){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new nt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new El(t,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new Ts(n,3,0,!1)),Ys.setAttribute("uv",new Ts(n,2,3,!1))}this.geometry=Ys,this.material=e,this.center=new j(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),vp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-qs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ga(Va.set(-.5,-.5,0),qs,a,$s,i,r),Ga(wr.set(.5,-.5,0),qs,a,$s,i,r),Ga(Ha.set(.5,.5,0),qs,a,$s,i,r),Fu.set(0,0),pc.set(1,0),Bu.set(1,1);let o=e.ray.intersectTriangle(Va,wr,Ha,!1,br);if(o===null&&(Ga(wr.set(-.5,.5,0),qs,a,$s,i,r),pc.set(0,1),o=e.ray.intersectTriangle(Va,Ha,wr,!1,br),o===null))return;const l=e.ray.origin.distanceTo(br);l<e.near||l>e.far||t.push({distance:l,point:br.clone(),uv:xn.getInterpolation(br,Va,wr,Ha,Fu,pc,Bu,new j),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ga(s,e,t,n,i,r){Zs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Sr.x=r*Zs.x-i*Zs.y,Sr.y=i*Zs.x+r*Zs.y):Sr.copy(Zs),s.copy(e),s.x+=Sr.x,s.y+=Sr.y,s.applyMatrix4(vp)}const Wa=new P,zu=new P;class Mp extends gt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Wa.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Wa);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Wa.setFromMatrixPosition(e.matrixWorld),zu.setFromMatrixPosition(this.matrixWorld);const n=Wa.distanceTo(zu)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const ku=new P,Vu=new mt,Hu=new mt,e0=new P,Gu=new $e,Xa=new P,mc=new Qt,Wu=new $e,gc=new Rs;class bp extends Ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gc,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xa),this.boundingBox.expandByPoint(Xa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xa),this.boundingSphere.expandByPoint(Xa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mc.copy(this.boundingSphere),mc.applyMatrix4(i),e.ray.intersectsSphere(mc)!==!1&&(Wu.copy(i).invert(),gc.copy(e.ray).applyMatrix4(Wu),!(this.boundingBox!==null&&gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Vu.fromBufferAttribute(i.attributes.skinIndex,e),Hu.fromBufferAttribute(i.attributes.skinWeight,e),ku.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Hu.getComponent(r);if(a!==0){const o=Vu.getComponent(r);Gu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(e0.copy(ku).applyMatrix4(Gu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ch extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qn extends Lt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=$t,h=$t,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xu=new $e,t0=new $e;class Tl{constructor(e=[],t=[]){this.uuid=En(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:t0;Xu.multiplyMatrices(o,t[r]),Xu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Tl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qn(t,e,e,an,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ch),this.bones.push(a),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class hr extends wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ks=new $e,Yu=new $e,Ya=[],$u=new ln,n0=new $e,Er=new Ut,Tr=new Qt;class Sp extends Ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,n0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),$u.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union($u)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),Tr.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(n),e.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ks),Yu.multiplyMatrices(n,Ks),Er.matrixWorld=Yu,Er.raycast(e,Ya);for(let a=0,o=Ya.length;a<o;a++){const l=Ya[a];l.instanceId=r,l.object=this,t.push(l)}Ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qn(new Float32Array(i*this.count),i,this.count,gl,vn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const _c=new P,i0=new P,s0=new je;class ui{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_c.subVectors(n,t).cross(i0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_c),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||s0.getNormalMatrix(e),i=this.coplanarPoint(_c).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new Qt,$a=new P;class ga{constructor(e=new ui,t=new ui,n=new ui,i=new ui,r=new ui,a=new ui){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,g-f,v-p).normalize(),n[1].setComponents(l+r,d+c,g+f,v+p).normalize(),n[2].setComponents(l+a,d+h,g+m,v+y).normalize(),n[3].setComponents(l-a,d-h,g-m,v-y).normalize(),n[4].setComponents(l-o,d-u,g-_,v-x).normalize(),t===Jn)n[5].setComponents(l+o,d+u,g+_,v+x).normalize();else if(t===Kr)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($a.x=i.normal.x>0?e.max.x:e.min.x,$a.y=i.normal.y>0?e.max.y:e.min.y,$a.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xc(s,e){return s-e}function r0(s,e){return s.z-e.z}function a0(s,e){return e.z-s.z}class o0{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const pn=new $e,l0=new Ce(1,1,1),vc=new ga,qa=new ln,es=new Qt,Ar=new P,qu=new P,c0=new P,yc=new o0,Jt=new Ut,Za=[];function h0(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function ts(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class wp extends Ut{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,i){super(new nt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Qn(t,e,e,an,vn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Qn(t,e,e,pa,bi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Qn(t,e,e,an,vn);n.colorSpace=ot.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),u=new wt(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new wt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,pn),this.getBoundingBoxAt(r,qa).applyMatrix4(pn),e.union(qa)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,pn),this.getBoundingSphereAt(r,es).applyMatrix4(pn),e.union(es)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(xc),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;pn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(l0.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(xc),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(i&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);h0(u,d,l);const f=u.itemSize;for(let m=u.count,_=c;m<_;m++){const g=l+m;for(let p=0;p<f;p++)d.setComponent(g,p,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(i){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)r.setX(h+d,l+a.getX(d));for(let d=a.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=i[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,m=f.array,_=e-u;for(let g=h;g<h+d;g++)m[g]=m[g]+_;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(const f in d){const m=d[f],{array:_,itemSize:g}=m;_.copyWithin(e*g,h*g,(h+u)*g),m.addUpdateRange(e*g,u*g)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const r=new ln,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(Ar.fromBufferAttribute(o,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const r=new Qt;this.getBoundingBoxAt(e,qa),qa.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;a&&(u=a.getX(u)),Ar.fromBufferAttribute(o,u),l=Math.max(l,r.center.distanceToSquared(Ar))}r.radius=Math.sqrt(l),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(xc);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),r=new Int32Array(e);ts(this._multiDrawCounts,i),ts(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),ts(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),ts(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),ts(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new nt,this._initializeGeometry(r));const a=this.geometry;r.index&&ts(r.index.array,a.index.array);for(const o in r.attributes)ts(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Jt.material=this.material,Jt.geometry.index=a.index,Jt.geometry.attributes=a.attributes,Jt.geometry.boundingBox===null&&(Jt.geometry.boundingBox=new ln),Jt.geometry.boundingSphere===null&&(Jt.geometry.boundingSphere=new Qt);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=i[c];Jt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Jt.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Jt.geometry.boundingBox),this.getBoundingSphereAt(c,Jt.geometry.boundingSphere),Jt.raycast(e,Za);for(let u=0,d=Za.length;u<d;u++){const f=Za[u];f.object=this,f.batchId=o,t.push(f)}Za.length=0}Jt.material=null,Jt.geometry.index=null,Jt.geometry.attributes={},Jt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,m=f.image.data;d&&(pn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),vc.setFromProjectionMatrix(pn,e.coordinateSystem));let _=0;if(this.sortObjects){pn.copy(this.matrixWorld).invert(),Ar.setFromMatrixPosition(n.matrixWorld).applyMatrix4(pn),qu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(pn);for(let y=0,x=l.length;y<x;y++)if(l[y].visible&&l[y].active){const v=l[y].geometryIndex;this.getMatrixAt(y,pn),this.getBoundingSphereAt(v,es).applyMatrix4(pn);let A=!1;if(d&&(A=!vc.intersectsSphere(es)),!A){const w=u[v],E=c0.subVectors(es.center,Ar).dot(qu);yc.push(w.start,w.count,E,y)}}const g=yc.list,p=this.customSort;p===null?g.sort(r.transparent?a0:r0):p.call(this,g,n);for(let y=0,x=g.length;y<x;y++){const v=g[y];c[_]=v.start*o,h[_]=v.count,m[_]=v.index,_++}yc.reset()}else for(let g=0,p=l.length;g<p;g++)if(l[g].visible&&l[g].active){const y=l[g].geometryIndex;let x=!1;if(d&&(this.getMatrixAt(g,pn),this.getBoundingSphereAt(y,es).applyMatrix4(pn),x=!vc.intersectsSphere(es)),!x){const v=u[y];c[_]=v.start*o,h[_]=v.count,m[_]=g,_++}}f.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}}class dn extends en{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const al=new P,ol=new P,Zu=new $e,Cr=new Rs,Ka=new Qt,Mc=new P,Ku=new P;class zi extends gt{constructor(e=new nt,t=new dn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)al.fromBufferAttribute(t,i-1),ol.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=al.distanceTo(ol);e.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(i),Ka.radius+=r,e.ray.intersectsSphere(Ka)===!1)return;Zu.copy(i).invert(),Cr.copy(e.ray).applyMatrix4(Zu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=h.getX(_),y=h.getX(_+1),x=Ja(this,e,Cr,l,p,y);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=Ja(this,e,Cr,l,_,g);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=Ja(this,e,Cr,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ja(this,e,Cr,l,m-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ja(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(al.fromBufferAttribute(a,i),ol.fromBufferAttribute(a,r),t.distanceSqToSegment(al,ol,Mc,Ku)>n)return;Mc.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Mc);if(!(l<e.near||l>e.far))return{distance:l,point:Ku.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Ju=new P,ju=new P;class ii extends zi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ju.fromBufferAttribute(t,i),ju.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ju.distanceTo(ju);e.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ep extends zi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rh extends en{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qu=new $e,Yc=new Rs,ja=new Qt,Qa=new P;class Tp extends gt{constructor(e=new nt,t=new Rh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(i),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;Qu.copy(i).invert(),Yc.copy(e.ray).applyMatrix4(Qu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const g=c.getX(m);Qa.fromBufferAttribute(u,g),ed(Qa,g,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,_=f;m<_;m++)Qa.fromBufferAttribute(u,m),ed(Qa,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ed(s,e,t,n,i,r,a){const o=Yc.distanceSqToPoint(s);if(o<t){const l=new P;Yc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class tr extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class u0 extends Lt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Vt,this.magFilter=r!==void 0?r:Vt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class d0 extends Lt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=$t,this.minFilter=$t,this.generateMipmaps=!1,this.needsUpdate=!0}}class Al extends Lt{constructor(e,t,n,i,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class f0 extends Al{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Dn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class p0 extends Al{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Mi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class m0 extends Lt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ph extends Lt{constructor(e,t,n,i,r,a,o,l,c,h=vs){if(h!==vs&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=bi),n===void 0&&h===ws&&(n=Ss),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new j:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],r=[],a=[],o=new P,l=new $e;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Je(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Je(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Cl extends Yn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new j){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ap extends Cl{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ih(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const eo=new P,bc=new Ih,Sc=new Ih,wc=new Ih;class Cp extends Yn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(eo.subVectors(i[0],i[1]).add(i[0]),c=eo);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(eo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=eo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),bc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,g),Sc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,g),wc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(bc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Sc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),wc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(bc.calc(l),Sc.calc(l),wc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function td(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function g0(s,e){const t=1-s;return t*t*e}function _0(s,e){return 2*(1-s)*s*e}function x0(s,e){return s*s*e}function zr(s,e,t,n){return g0(s,e)+_0(s,t)+x0(s,n)}function v0(s,e){const t=1-s;return t*t*t*e}function y0(s,e){const t=1-s;return 3*t*t*s*e}function M0(s,e){return 3*(1-s)*s*s*e}function b0(s,e){return s*s*s*e}function kr(s,e,t,n,i){return v0(s,e)+y0(s,t)+M0(s,n)+b0(s,i)}class Dh extends Yn{constructor(e=new j,t=new j,n=new j,i=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new j){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(e,i.x,r.x,a.x,o.x),kr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rp extends Yn{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(e,i.x,r.x,a.x,o.x),kr(e,i.y,r.y,a.y,o.y),kr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lh extends Yn{constructor(e=new j,t=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new j){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pp extends Yn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nh extends Yn{constructor(e=new j,t=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new j){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(zr(e,i.x,r.x,a.x),zr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uh extends Yn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(zr(e,i.x,r.x,a.x),zr(e,i.y,r.y,a.y),zr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oh extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new j){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(td(o,l.x,c.x,h.x,u.x),td(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new j().fromArray(i))}return this}}var ll=Object.freeze({__proto__:null,ArcCurve:Ap,CatmullRomCurve3:Cp,CubicBezierCurve:Dh,CubicBezierCurve3:Rp,EllipseCurve:Cl,LineCurve:Lh,LineCurve3:Pp,QuadraticBezierCurve:Nh,QuadraticBezierCurve3:Uh,SplineCurve:Oh});class Ip extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ll[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ll[i.type]().fromJSON(i))}return this}}class jr extends Ip{constructor(e){super(),this.type="Path",this.currentPoint=new j,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Lh(this.currentPoint.clone(),new j(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Nh(this.currentPoint.clone(),new j(e,t),new j(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Dh(this.currentPoint.clone(),new j(e,t),new j(n,i),new j(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Oh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new Cl(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class _a extends nt{constructor(e=[new j(0,-.5),new j(.5,0),new j(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Je(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new P,d=new j,f=new P,m=new P,_=new P;let g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let y=0;y<=t;y++){const x=n+y*h*i,v=Math.sin(x),A=Math.cos(x);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*v,u.y=e[w].y,u.z=e[w].x*A,a.push(u.x,u.y,u.z),d.x=y/t,d.y=w/(e.length-1),o.push(d.x,d.y);const E=l[3*w+0]*v,D=l[3*w+1],S=l[3*w+0]*A;c.push(E,D,S)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const v=x+y*e.length,A=v,w=v+e.length,E=v+e.length+1,D=v+1;r.push(A,w,D),r.push(E,D,w)}this.setIndex(r),this.setAttribute("position",new Ne(a,3)),this.setAttribute("uv",new Ne(o,2)),this.setAttribute("normal",new Ne(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.points,e.segments,e.phiStart,e.phiLength)}}class Rl extends _a{constructor(e=1,t=1,n=4,i=8){const r=new jr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Rl(e.radius,e.length,e.capSegments,e.radialSegments)}}class Pl extends nt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new P,h=new j;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(o,3)),this.setAttribute("uv",new Ne(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class fr extends nt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(f,2));function y(){const v=new P,A=new P;let w=0;const E=(t-e)/n;for(let D=0;D<=r;D++){const S=[],M=D/r,R=M*(t-e)+e;for(let W=0;W<=i;W++){const V=W/i,U=V*l+o,B=Math.sin(U),L=Math.cos(U);A.x=R*B,A.y=-M*n+g,A.z=R*L,u.push(A.x,A.y,A.z),v.set(B,E,L).normalize(),d.push(v.x,v.y,v.z),f.push(V,1-M),S.push(m++)}_.push(S)}for(let D=0;D<i;D++)for(let S=0;S<r;S++){const M=_[S][D],R=_[S+1][D],W=_[S+1][D+1],V=_[S][D+1];(e>0||S!==0)&&(h.push(M,R,V),w+=3),(t>0||S!==r-1)&&(h.push(R,W,V),w+=3)}c.addGroup(p,w,0),p+=w}function x(v){const A=m,w=new j,E=new P;let D=0;const S=v===!0?e:t,M=v===!0?1:-1;for(let W=1;W<=i;W++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;const R=m;for(let W=0;W<=i;W++){const U=W/i*l+o,B=Math.cos(U),L=Math.sin(U);E.x=S*L,E.y=g*M,E.z=S*B,u.push(E.x,E.y,E.z),d.push(0,M,0),w.x=B*.5+.5,w.y=L*.5*M+.5,f.push(w.x,w.y),m++}for(let W=0;W<i;W++){const V=A+W,U=R+W;v===!0?h.push(U,U+1,V):h.push(U+1,U,V),D+=3}c.addGroup(p,D,v===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Il extends fr{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Il(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yi extends nt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ne(r,3)),this.setAttribute("normal",new Ne(r.slice(),3)),this.setAttribute("uv",new Ne(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new P,v=new P,A=new P;for(let w=0;w<t.length;w+=3)f(t[w+0],x),f(t[w+1],v),f(t[w+2],A),l(x,v,A,y)}function l(y,x,v,A){const w=A+1,E=[];for(let D=0;D<=w;D++){E[D]=[];const S=y.clone().lerp(v,D/w),M=x.clone().lerp(v,D/w),R=w-D;for(let W=0;W<=R;W++)W===0&&D===w?E[D][W]=S:E[D][W]=S.clone().lerp(M,W/R)}for(let D=0;D<w;D++)for(let S=0;S<2*(w-D)-1;S++){const M=Math.floor(S/2);S%2===0?(d(E[D][M+1]),d(E[D+1][M]),d(E[D][M])):(d(E[D][M+1]),d(E[D+1][M+1]),d(E[D+1][M]))}}function c(y){const x=new P;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(y),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const y=new P;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const v=g(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;a.push(v,1-A)}m(),u()}function u(){for(let y=0;y<a.length;y+=6){const x=a[y+0],v=a[y+2],A=a[y+4],w=Math.max(x,v,A),E=Math.min(x,v,A);w>.9&&E<.1&&(x<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function m(){const y=new P,x=new P,v=new P,A=new P,w=new j,E=new j,D=new j;for(let S=0,M=0;S<r.length;S+=9,M+=6){y.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),w.set(a[M+0],a[M+1]),E.set(a[M+2],a[M+3]),D.set(a[M+4],a[M+5]),A.copy(y).add(x).add(v).divideScalar(3);const R=g(A);_(w,M+0,y,R),_(E,M+2,x,R),_(D,M+4,v,R)}}function _(y,x,v,A){A<0&&y.x===1&&(a[x]=y.x-1),v.x===0&&v.z===0&&(a[x]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.vertices,e.indices,e.radius,e.details)}}class Dl extends Yi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dl(e.radius,e.detail)}}const to=new P,no=new P,Ec=new P,io=new xn;class Dp extends nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(ys*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:_,b:g,c:p}=io;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),io.getNormal(Ec),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=u[y],A=u[x],w=io[h[y]],E=io[h[x]],D=`${v}_${A}`,S=`${A}_${v}`;S in d&&d[S]?(Ec.dot(d[S].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(E.x,E.y,E.z)),d[S]=null):D in d||(d[D]={index0:c[y],index1:c[x],normal:Ec.clone()})}}for(const m in d)if(d[m]){const{index0:_,index1:g}=d[m];to.fromBufferAttribute(o,_),no.fromBufferAttribute(o,g),f.push(to.x,to.y,to.z),f.push(no.x,no.y,no.z)}this.setAttribute("position",new Ne(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ms extends jr{constructor(e){super(e),this.uuid=En(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new jr().fromJSON(i))}return this}}const S0={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Lp(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=C0(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let m=t;m<i;m+=t)u=s[m],d=s[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Qr(r,a,t,o,l,f,0),a}};function Lp(s,e,t,n,i){let r,a;if(i===z0(s,e,t,n)>0)for(r=e;r<t;r+=n)a=nd(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=nd(r,s[r],s[r+1],a);return a&&Ll(a,a.next)&&(ta(a),a=a.next),a}function As(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ll(t,t.next)||At(t.prev,t,t.next)===0)){if(ta(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&L0(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?E0(s,n,i,r):w0(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),ta(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=T0(As(s),e,t),Qr(s,e,t,n,i,r,2)):a===2&&A0(s,e,t,n,i,r):Qr(As(s),e,t,n,i,r,1);break}}}function w0(s){const e=s.prev,t=s,n=s.next;if(At(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&nr(i,o,r,l,a,c,m.x,m.y)&&At(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function E0(s,e,t,n){const i=s.prev,r=s,a=s.next;if(At(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=$c(f,m,e,t,n),y=$c(_,g,e,t,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&nr(o,h,l,u,c,d,x.x,x.y)&&At(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&nr(o,h,l,u,c,d,v.x,v.y)&&At(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&nr(o,h,l,u,c,d,x.x,x.y)&&At(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&nr(o,h,l,u,c,d,v.x,v.y)&&At(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function T0(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Ll(i,r)&&Np(i,n,n.next,r)&&ea(i,r)&&ea(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ta(n),ta(n.next),n=s=r),n=n.next}while(n!==s);return As(n)}function A0(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&O0(a,o)){let l=Up(a,o);a=As(a,a.next),l=As(l,l.next),Qr(a,e,t,n,i,r,0),Qr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function C0(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Lp(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(U0(c));for(i.sort(R0),r=0;r<i.length;r++)t=P0(i[r],t);return t}function R0(s,e){return s.x-e.x}function P0(s,e){const t=I0(s,e);if(!t)return e;const n=Up(t,s);return As(n,n.next),As(t,t.next)}function I0(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&nr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),ea(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&D0(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function D0(s,e){return At(s.prev,s,e.prev)<0&&At(e.next,s,s.next)<0}function L0(s,e,t,n){let i=s;do i.z===0&&(i.z=$c(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,N0(i)}function N0(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function $c(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function U0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function nr(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function O0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!F0(s,e)&&(ea(s,e)&&ea(e,s)&&B0(s,e)&&(At(s.prev,s,e.prev)||At(s,e.prev,e))||Ll(s,e)&&At(s.prev,s,s.next)>0&&At(e.prev,e,e.next)>0)}function At(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ll(s,e){return s.x===e.x&&s.y===e.y}function Np(s,e,t,n){const i=ro(At(s,e,t)),r=ro(At(s,e,n)),a=ro(At(t,n,s)),o=ro(At(t,n,e));return!!(i!==r&&a!==o||i===0&&so(s,t,e)||r===0&&so(s,n,e)||a===0&&so(t,s,n)||o===0&&so(t,e,n))}function so(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ro(s){return s>0?1:s<0?-1:0}function F0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Np(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ea(s,e){return At(s.prev,s,s.next)<0?At(s,e,s.next)>=0&&At(s,s.prev,e)>=0:At(s,e,s.prev)<0||At(s,s.next,e)<0}function B0(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Up(s,e){const t=new qc(s.i,s.x,s.y),n=new qc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function nd(s,e,t,n){const i=new qc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ta(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function qc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function z0(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class ei{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ei.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];id(e),sd(n,e);let a=e.length;t.forEach(id);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,sd(n,t[l]);const o=S0.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function id(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function sd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Nl extends nt{constructor(e=new Ms([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ne(i,3)),this.setAttribute("uv",new Ne(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:k0;let x,v=!1,A,w,E,D;p&&(x=p.getSpacedPoints(h),v=!0,d=!1,A=p.computeFrenetFrames(h,!1),w=new P,E=new P,D=new P),d||(g=0,f=0,m=0,_=0);const S=o.extractPoints(c);let M=S.shape;const R=S.holes;if(!ei.isClockWise(M)){M=M.reverse();for(let Q=0,le=R.length;Q<le;Q++){const I=R[Q];ei.isClockWise(I)&&(R[Q]=I.reverse())}}const V=ei.triangulateShape(M,R),U=M;for(let Q=0,le=R.length;Q<le;Q++){const I=R[Q];M=M.concat(I)}function B(Q,le,I){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(le,I)}const L=M.length,G=V.length;function N(Q,le,I){let Be,oe,ce;const se=Q.x-le.x,We=Q.y-le.y,ye=I.x-Q.x,C=I.y-Q.y,b=se*se+We*We,H=se*C-We*ye;if(Math.abs(H)>Number.EPSILON){const Z=Math.sqrt(b),re=Math.sqrt(ye*ye+C*C),ee=le.x-We/Z,Ue=le.y+se/Z,pe=I.x-C/re,Se=I.y+ye/re,at=((pe-ee)*C-(Se-Ue)*ye)/(se*C-We*ye);Be=ee+se*at-Q.x,oe=Ue+We*at-Q.y;const he=Be*Be+oe*oe;if(he<=2)return new j(Be,oe);ce=Math.sqrt(he/2)}else{let Z=!1;se>Number.EPSILON?ye>Number.EPSILON&&(Z=!0):se<-Number.EPSILON?ye<-Number.EPSILON&&(Z=!0):Math.sign(We)===Math.sign(C)&&(Z=!0),Z?(Be=-We,oe=se,ce=Math.sqrt(b)):(Be=se,oe=We,ce=Math.sqrt(b/2))}return new j(Be/ce,oe/ce)}const $=[];for(let Q=0,le=U.length,I=le-1,Be=Q+1;Q<le;Q++,I++,Be++)I===le&&(I=0),Be===le&&(Be=0),$[Q]=N(U[Q],U[I],U[Be]);const K=[];let ae,xe=$.concat();for(let Q=0,le=R.length;Q<le;Q++){const I=R[Q];ae=[];for(let Be=0,oe=I.length,ce=oe-1,se=Be+1;Be<oe;Be++,ce++,se++)ce===oe&&(ce=0),se===oe&&(se=0),ae[Be]=N(I[Be],I[ce],I[se]);K.push(ae),xe=xe.concat(ae)}for(let Q=0;Q<g;Q++){const le=Q/g,I=f*Math.cos(le*Math.PI/2),Be=m*Math.sin(le*Math.PI/2)+_;for(let oe=0,ce=U.length;oe<ce;oe++){const se=B(U[oe],$[oe],Be);ie(se.x,se.y,-I)}for(let oe=0,ce=R.length;oe<ce;oe++){const se=R[oe];ae=K[oe];for(let We=0,ye=se.length;We<ye;We++){const C=B(se[We],ae[We],Be);ie(C.x,C.y,-I)}}}const Pe=m+_;for(let Q=0;Q<L;Q++){const le=d?B(M[Q],xe[Q],Pe):M[Q];v?(E.copy(A.normals[0]).multiplyScalar(le.x),w.copy(A.binormals[0]).multiplyScalar(le.y),D.copy(x[0]).add(E).add(w),ie(D.x,D.y,D.z)):ie(le.x,le.y,0)}for(let Q=1;Q<=h;Q++)for(let le=0;le<L;le++){const I=d?B(M[le],xe[le],Pe):M[le];v?(E.copy(A.normals[Q]).multiplyScalar(I.x),w.copy(A.binormals[Q]).multiplyScalar(I.y),D.copy(x[Q]).add(E).add(w),ie(D.x,D.y,D.z)):ie(I.x,I.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){const le=Q/g,I=f*Math.cos(le*Math.PI/2),Be=m*Math.sin(le*Math.PI/2)+_;for(let oe=0,ce=U.length;oe<ce;oe++){const se=B(U[oe],$[oe],Be);ie(se.x,se.y,u+I)}for(let oe=0,ce=R.length;oe<ce;oe++){const se=R[oe];ae=K[oe];for(let We=0,ye=se.length;We<ye;We++){const C=B(se[We],ae[We],Be);v?ie(C.x,C.y+x[h-1].y,x[h-1].x+I):ie(C.x,C.y,u+I)}}}O(),J();function O(){const Q=i.length/3;if(d){let le=0,I=L*le;for(let Be=0;Be<G;Be++){const oe=V[Be];ve(oe[2]+I,oe[1]+I,oe[0]+I)}le=h+g*2,I=L*le;for(let Be=0;Be<G;Be++){const oe=V[Be];ve(oe[0]+I,oe[1]+I,oe[2]+I)}}else{for(let le=0;le<G;le++){const I=V[le];ve(I[2],I[1],I[0])}for(let le=0;le<G;le++){const I=V[le];ve(I[0]+L*h,I[1]+L*h,I[2]+L*h)}}n.addGroup(Q,i.length/3-Q,0)}function J(){const Q=i.length/3;let le=0;me(U,le),le+=U.length;for(let I=0,Be=R.length;I<Be;I++){const oe=R[I];me(oe,le),le+=oe.length}n.addGroup(Q,i.length/3-Q,1)}function me(Q,le){let I=Q.length;for(;--I>=0;){const Be=I;let oe=I-1;oe<0&&(oe=Q.length-1);for(let ce=0,se=h+g*2;ce<se;ce++){const We=L*ce,ye=L*(ce+1),C=le+Be+We,b=le+oe+We,H=le+oe+ye,Z=le+Be+ye;De(C,b,H,Z)}}}function ie(Q,le,I){l.push(Q),l.push(le),l.push(I)}function ve(Q,le,I){ge(Q),ge(le),ge(I);const Be=i.length/3,oe=y.generateTopUV(n,i,Be-3,Be-2,Be-1);Ve(oe[0]),Ve(oe[1]),Ve(oe[2])}function De(Q,le,I,Be){ge(Q),ge(le),ge(Be),ge(le),ge(I),ge(Be);const oe=i.length/3,ce=y.generateSideWallUV(n,i,oe-6,oe-3,oe-2,oe-1);Ve(ce[0]),Ve(ce[1]),Ve(ce[3]),Ve(ce[1]),Ve(ce[2]),Ve(ce[3])}function ge(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function Ve(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return V0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ll[i.type]().fromJSON(i)),new Nl(n,e.options)}}const k0={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new j(r,a),new j(o,l),new j(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new j(a,1-l),new j(c,1-u),new j(d,1-m),new j(_,1-p)]:[new j(o,1-l),new j(h,1-u),new j(f,1-m),new j(g,1-p)]}};function V0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ul extends Yi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ul(e.radius,e.detail)}}class xa extends Yi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xa(e.radius,e.detail)}}class pr extends nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const y=p*d-a;for(let x=0;x<c;x++){const v=x*u-r;m.push(v,-y,0),_.push(0,0,1),g.push(x/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+c*p,v=y+c*(p+1),A=y+1+c*(p+1),w=y+1+c*p;f.push(x,v,w),f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Ne(m,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ol extends nt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new P,m=new j;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const y=p+g,x=y,v=y+n+1,A=y+n+2,w=y+1;o.push(x,v,w),o.push(v,A,w)}}this.setIndex(o),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fl extends nt{constructor(e=new Ms([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ne(i,3)),this.setAttribute("normal",new Ne(r,3)),this.setAttribute("uv",new Ne(a,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const m=d.holes;ei.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const y=m[g];ei.isClockWise(y)===!0&&(m[g]=y.reverse())}const _=ei.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const y=m[g];f=f.concat(y)}for(let g=0,p=f.length;g<p;g++){const y=f[g];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let g=0,p=_.length;g<p;g++){const y=_[g],x=y[0]+u,v=y[1]+u,A=y[2]+u;n.push(x,v,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return H0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new Fl(n,e.curveSegments)}}function H0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class va extends nt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const w=A/t;u.x=-e*Math.cos(i+w*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+w*r)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(w+v,1-x),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=h[p][y+1],v=h[p][y],A=h[p+1][y],w=h[p+1][y+1];(p!==0||a>0)&&f.push(x,v,w),(p!==n-1||l<Math.PI)&&f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Ne(m,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bl extends Yi{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bl(e.radius,e.detail)}}class zl extends nt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,y=(i+1)*f+m;a.push(_,g,y),a.push(g,p,y)}this.setIndex(a),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class kl extends nt{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],u=new P,d=new P,f=new P,m=new P,_=new P,g=new P,p=new P;for(let x=0;x<=n;++x){const v=x/n*r*Math.PI*2;y(v,r,a,e,f),y(v+.01,r,a,e,m),g.subVectors(m,f),p.addVectors(m,f),_.crossVectors(g,p),p.crossVectors(_,g),_.normalize(),p.normalize();for(let A=0;A<=i;++A){const w=A/i*Math.PI*2,E=-t*Math.cos(w),D=t*Math.sin(w);u.x=f.x+(E*p.x+D*_.x),u.y=f.y+(E*p.y+D*_.y),u.z=f.z+(E*p.z+D*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(A/i)}}for(let x=1;x<=n;x++)for(let v=1;v<=i;v++){const A=(i+1)*(x-1)+(v-1),w=(i+1)*x+(v-1),E=(i+1)*x+v,D=(i+1)*(x-1)+v;o.push(A,w,D),o.push(w,E,D)}this.setIndex(o),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(h,2));function y(x,v,A,w,E){const D=Math.cos(x),S=Math.sin(x),M=A/v*x,R=Math.cos(M);E.x=w*(2+R)*.5*D,E.y=w*(2+R)*S*.5,E.z=w*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Vl extends nt{constructor(e=new Uh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new j;let h=new P;const u=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(f,2));function _(){for(let x=0;x<t;x++)g(x);g(r===!1?t:0),y(),p()}function g(x){h=e.getPointAt(x/t,h);const v=a.normals[x],A=a.binormals[x];for(let w=0;w<=i;w++){const E=w/i*Math.PI*2,D=Math.sin(E),S=-Math.cos(E);l.x=S*v.x+D*A.x,l.y=S*v.y+D*A.y,l.z=S*v.z+D*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let v=1;v<=i;v++){const A=(i+1)*(x-1)+(v-1),w=(i+1)*x+(v-1),E=(i+1)*x+v,D=(i+1)*(x-1)+v;m.push(A,w,D),m.push(w,E,D)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=i;v++)c.x=x/t,c.y=v/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Vl(new ll[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Op extends nt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new P,r=new P;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let m=d,_=d+f;m<_;m+=3)for(let g=0;g<3;g++){const p=o.getX(m+g),y=o.getX(m+(g+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,y),rd(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),rd(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ne(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function rd(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var ad=Object.freeze({__proto__:null,BoxGeometry:Ps,CapsuleGeometry:Rl,CircleGeometry:Pl,ConeGeometry:Il,CylinderGeometry:fr,DodecahedronGeometry:Dl,EdgesGeometry:Dp,ExtrudeGeometry:Nl,IcosahedronGeometry:Ul,LatheGeometry:_a,OctahedronGeometry:xa,PlaneGeometry:pr,PolyhedronGeometry:Yi,RingGeometry:Ol,ShapeGeometry:Fl,SphereGeometry:va,TetrahedronGeometry:Bl,TorusGeometry:zl,TorusKnotGeometry:kl,TubeGeometry:Vl,WireframeGeometry:Op});class Fp extends en{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ce(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Bp extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fh extends en{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zp extends Fh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class kp extends en{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vp extends en{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Hp extends en{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Gp extends en{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bh extends en{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zh extends en{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Wp extends en{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ce(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xp extends dn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function gs(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Yp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function $p(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Zc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function kh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function G0(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const m=c.times[f]*i;if(!(m<t||m>=n)){u.push(c.times[f]);for(let _=0;_<h;++_)d.push(c.values[f*h+_])}}u.length!==0&&(c.times=gs(u,c.times.constructor),c.values=gs(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function W0(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=o.times.length-1;let _;if(r<=o.times[0]){const p=h,y=u-h;_=o.values.slice(p,y)}else if(r>=o.times[m]){const p=m*u+h,y=p+u-h;_=o.values.slice(p,y)}else{const p=o.createInterpolant(),y=h,x=u-h;p.evaluate(r),_=p.resultBuffer.slice(y,x)}l==="quaternion"&&new jt().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let p=0;p<g;++p){const y=p*f+d;if(l==="quaternion")jt.multiplyQuaternionsFlat(c.values,y,_,0,c.values,y);else{const x=f-d*2;for(let v=0;v<x;++v)c.values[y+v]-=_[v]}}}return s.blendMode=yh,s}const X0={convertArray:gs,isTypedArray:Yp,getKeyframeOrder:$p,sortedArray:Zc,flattenJSON:kh,subclip:G0,makeClipAdditive:W0};class ya{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class qp extends ya{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fs,endingEnd:fs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ps:r=e,o=2*t-n;break;case $r:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ps:a=e,l=2*n-t;break;case $r:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,y=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*_+.5*m,v=f*g-f*_;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+y*a[c+A]+x*a[l+A]+v*a[u+A];return r}}class Vh extends ya{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class Zp extends ya{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class $n{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Yr:t=this.InterpolantFactoryMethodDiscrete;break;case rl:t=this.InterpolantFactoryMethodLinear;break;case Mo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return rl;case this.InterpolantFactoryMethodSmooth:return Mo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Yp(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Mo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=rl;class Is extends $n{constructor(e,t,n){super(e,t,n)}}Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=Yr;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;class Hh extends $n{}Hh.prototype.ValueTypeName="color";class na extends $n{}na.prototype.ValueTypeName="number";class Kp extends ya{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)jt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ma extends $n{InterpolantFactoryMethodLinear(e){return new Kp(this.times,this.values,this.getValueSize(),e)}}Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends $n{constructor(e,t,n){super(e,t,n)}}Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=Yr;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class ia extends $n{}ia.prototype.ValueTypeName="vector";class sa{constructor(e="",t=-1,n=[],i=vl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=En(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push($0(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push($n.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=$p(l);l=Zc(l,1,h),c=Zc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new na(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,_){if(f.length!==0){const g=[],p=[];kh(f,g,p,m),g.length!==0&&_.push(new u(d,g,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){const x=d[m];g.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new na(".morphTargetInfluence["+_+"]",g,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(ia,f+".position",d,"pos",i),n(Ma,f+".quaternion",d,"rot",i),n(ia,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Y0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return na;case"vector":case"vector2":case"vector3":case"vector4":return ia;case"color":return Hh;case"quaternion":return Ma;case"bool":case"boolean":return Is;case"string":return Ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function $0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Y0(s.type);if(s.times===void 0){const t=[],n=[];kh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const pi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Gh{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Jp=new Gh;class yn{constructor(e){this.manager=e!==void 0?e:Jp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yn.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class q0 extends Error{constructor(e,t){super(e),this.response=t}}class Si extends yn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=pi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:i});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=hi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let w=0,E=h.length;w<E;w++){const D=h[w];D.onProgress&&D.onProgress(A)}p.enqueue(v),y()}},x=>{p.error(x)})}}});return new Response(g)}else throw new q0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{pi.add(e,c);const h=hi[e];delete hi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=hi[e];if(h===void 0)throw this.manager.itemError(e),c;delete hi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Z0 extends yn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Si(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=sa.parse(e[n]);t.push(i)}return t}}class K0 extends yn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=[],o=new Al,l=new Si(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(e[u],function(d){const f=r.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Vt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else l.load(e,function(u){const d=r.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){a[m]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)a[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+_]),a[m].format=d.format,a[m].width=d.width,a[m].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=Vt),o.format=d.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class ra extends yn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=pi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Jr("img");function l(){h(),pi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class J0 extends yn{constructor(e){super(e)}load(e,t,n,i){const r=new ma;r.colorSpace=_n;const a=new ra(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class j0 extends yn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Qn,o=new Si(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Dn,a.wrapT=c.wrapT!==void 0?c.wrapT:Dn,a.magFilter=c.magFilter!==void 0?c.magFilter:Vt,a.minFilter=c.minFilter!==void 0?c.minFilter:Vt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Kn),c.mipmapCount===1&&(a.minFilter=Vt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class Q0 extends yn{constructor(e){super(e)}load(e,t,n,i){const r=new Lt,a=new ra(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class $i extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jp extends $i{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Tc=new $e,od=new P,ld=new P;class Wh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ga,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;od.setFromMatrixPosition(e.matrixWorld),t.position.copy(od),ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ld),t.updateMatrixWorld(),Tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ex extends Wh{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=lr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qp extends $i{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ex}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const cd=new $e,Rr=new P,Ac=new P;class tx extends Wh{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Rr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rr),Ac.copy(n.position),Ac.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ac),n.updateMatrixWorld(),i.makeTranslation(-Rr.x,-Rr.y,-Rr.z),cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd)}}class em extends $i{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ba extends bl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nx extends Wh{constructor(){super(new ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tm extends $i{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new nx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nm extends $i{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class im extends $i{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class sm{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new P)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class rm extends $i{constructor(e=new sm,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Hl extends yn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,a=new Si(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new Ce().setHex(a.value);break;case"v2":i.uniforms[r].value=new j().fromArray(a.value);break;case"v3":i.uniforms[r].value=new P().fromArray(a.value);break;case"v4":i.uniforms[r].value=new mt().fromArray(a.value);break;case"m3":i.uniforms[r].value=new je().fromArray(a.value);break;case"m4":i.uniforms[r].value=new $e().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new j().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new j().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Hl.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Fp,SpriteMaterial:Ah,RawShaderMaterial:Bp,ShaderMaterial:Xn,PointsMaterial:Rh,MeshPhysicalMaterial:zp,MeshStandardMaterial:Fh,MeshPhongMaterial:kp,MeshToonMaterial:Vp,MeshNormalMaterial:Hp,MeshLambertMaterial:Gp,MeshDepthMaterial:Bh,MeshDistanceMaterial:zh,MeshBasicMaterial:Xi,MeshMatcapMaterial:Wp,LineDashedMaterial:Xp,LineBasicMaterial:dn,Material:en};return new t[e]}}class Kc{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class am extends nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class om extends yn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Si(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,m){if(t[m]!==void 0)return t[m];const g=f.interleavedBuffers[m],p=r(f,g.buffer),y=er(g.type,p),x=new El(y,g.stride);return x.uuid=g.uuid,t[m]=x,x}function r(f,m){if(n[m]!==void 0)return n[m];const g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}const a=e.isInstancedBufferGeometry?new am:new nt,o=e.data.index;if(o!==void 0){const f=er(o.type,o.array);a.setIndex(new wt(f,1))}const l=e.data.attributes;for(const f in l){const m=l[f];let _;if(m.isInterleavedBufferAttribute){const g=i(e.data,m.data);_=new Ts(g,m.itemSize,m.offset,m.normalized)}else{const g=er(m.type,m.array),p=m.isInstancedBufferAttribute?hr:wt;_=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),a.setAttribute(f,_)}const c=e.data.morphAttributes;if(c)for(const f in c){const m=c[f],_=[];for(let g=0,p=m.length;g<p;g++){const y=m[g];let x;if(y.isInterleavedBufferAttribute){const v=i(e.data,y.data);x=new Ts(v,y.itemSize,y.offset,y.normalized)}else{const v=er(y.type,y.array);x=new wt(v,y.itemSize,y.normalized)}y.name!==void 0&&(x.name=y.name),_.push(x)}a.morphAttributes[f]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,m=u.length;f!==m;++f){const _=u[f];a.addGroup(_.start,_.count,_.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new P;d.center!==void 0&&f.fromArray(d.center),a.boundingSphere=new Qt(f,d.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class ix extends yn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=this.path===""?Kc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Si(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Kc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new Si(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new Ms().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new Tl().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new om;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in ad?o=ad[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new Hl;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=sa.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:er(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Gh(t);r=new ra(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const u=e[c],d=u.url;if(Array.isArray(d)){const f=[];for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new Qn(p.data,p.width,p.height)))}i[u.uuid]=new ms(f)}else{const f=o(u.url);i[u.uuid]=new ms(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:er(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new ra(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=await r(f);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new Qn(m.data,m.width,m.height)))}n[l.uuid]=new ms(h)}else{const h=await r(l.url);n[l.uuid]=new ms(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new ma,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Qn:h=new Lt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,sx)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],hd),h.wrapT=n(o.wrap[1],hd)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,ud)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,ud)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let m=0,_=d.length;m<_;m++){const g=d[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":a=new Th,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Ce(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new wl(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Sl(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Xt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new ba(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new nm(e.color,e.intensity);break;case"DirectionalLight":a=new tm(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new em(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new im(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Qp(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new jp(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new rm().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),a=new bp(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),a=new Ut(h,u);break;case"InstancedMesh":h=o(e.geometry),u=l(e.material);const d=e.count,f=e.instanceMatrix,m=e.instanceColor;a=new Sp(h,u,d),a.instanceMatrix=new hr(new Float32Array(f.array),16),m!==void 0&&(a.instanceColor=new hr(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=l(e.material),a=new wp(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(_=>{const g=new ln;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const p=new Qt;return p.radius=_.sphereRadius,p.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:p}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":a=new Mp;break;case"Line":a=new zi(o(e.geometry),l(e.material));break;case"LineLoop":a=new Ep(o(e.geometry),l(e.material));break;case"LineSegments":a=new ii(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Tp(o(e.geometry),l(e.material));break;case"Sprite":a=new yp(l(e.material));break;case"Group":a=new tr;break;case"Bone":a=new Ch;break;default:a=new gt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,n,i,r))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const m=d[f];a.animations.push(r[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const m=d[f],_=a.getObjectByProperty("uuid",m.object);_!==void 0&&a.addLevel(_,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new gt}})}}const sx={UVMapping:dl,CubeReflectionMapping:Mi,CubeRefractionMapping:Bi,EquirectangularReflectionMapping:Hr,EquirectangularRefractionMapping:Gr,CubeUVReflectionMapping:ur},hd={RepeatWrapping:Wr,ClampToEdgeWrapping:Dn,MirroredRepeatWrapping:Xr},ud={NearestFilter:$t,NearestMipmapNearestFilter:hh,NearestMipmapLinearFilter:Qs,LinearFilter:Vt,LinearMipmapNearestFilter:Dr,LinearMipmapLinearFilter:Kn};class rx extends yn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=pi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return pi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),pi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});pi.add(e,l),r.manager.itemStart(e)}}let ao;class Xh{static getContext(){return ao===void 0&&(ao=new(window.AudioContext||window.webkitAudioContext)),ao}static setContext(e){ao=e}}class ax extends yn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Si(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);Xh.getContext().decodeAudioData(c,function(u){t(u)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):console.error(l),r.manager.itemError(e)}}}const dd=new $e,fd=new $e,ns=new $e;class ox{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Xt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Xt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ns.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(ys*t.fov*.5)/t.zoom;let o,l;fd.elements[12]=-i,dd.elements[12]=i,o=-a*t.aspect+r,l=a*t.aspect+r,ns.elements[0]=2*t.near/(l-o),ns.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(ns),o=-a*t.aspect-r,l=a*t.aspect-r,ns.elements[0]=2*t.near/(l-o),ns.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(ns)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(fd),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(dd)}}class lm extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=pd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function pd(){return performance.now()}const is=new P,md=new jt,lx=new P,ss=new P;class cx extends gt{constructor(){super(),this.type="AudioListener",this.context=Xh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new cm}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(is,md,lx),ss.set(0,0,-1).applyQuaternion(md),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(is.x,i),t.positionY.linearRampToValueAtTime(is.y,i),t.positionZ.linearRampToValueAtTime(is.z,i),t.forwardX.linearRampToValueAtTime(ss.x,i),t.forwardY.linearRampToValueAtTime(ss.y,i),t.forwardZ.linearRampToValueAtTime(ss.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(is.x,is.y,is.z),t.setOrientation(ss.x,ss.y,ss.z,n.x,n.y,n.z)}}class hm extends gt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const rs=new P,gd=new jt,hx=new P,as=new P;class ux extends hm{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(rs,gd,hx),as.set(0,0,1).applyQuaternion(gd);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(rs.x,n),t.positionY.linearRampToValueAtTime(rs.y,n),t.positionZ.linearRampToValueAtTime(rs.z,n),t.orientationX.linearRampToValueAtTime(as.x,n),t.orientationY.linearRampToValueAtTime(as.y,n),t.orientationZ.linearRampToValueAtTime(as.z,n)}else t.setPosition(rs.x,rs.y,rs.z),t.setOrientation(as.x,as.y,as.z)}}class dx{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class um{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){jt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;jt.multiplyQuaternionsFlat(e,a,e,t,e,n),jt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Yh="\\[\\]\\.:\\/",fx=new RegExp("["+Yh+"]","g"),$h="[^"+Yh+"]",px="[^"+Yh.replace("\\.","")+"]",mx=/((?:WC+[\/:])*)/.source.replace("WC",$h),gx=/(WCOD+)?/.source.replace("WCOD",px),_x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),vx=new RegExp("^"+mx+gx+_x+xx+"$"),yx=["material","materials","bones","map"];class Mx{constructor(e,t,n){const i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fx,"")}static parseTrackName(e){const t=vx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);yx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=Mx;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class bx{constructor(){this.isAnimationObjectGroup=!0,this.uuid=En(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let m=t[f];if(m===void 0){m=l++,t[f]=m,e.push(d);for(let _=0,g=a;_!==g;++_)r[_].push(new pt(d,n[_],i[_]))}else if(m<c){o=e[m];const _=--c,g=e[_];t[g.uuid]=m,e[m]=g,t[f]=_,e[_]=d;for(let p=0,y=a;p!==y;++p){const x=r[p],v=x[_];let A=x[m];x[m]=v,A===void 0&&(A=new pt(d,n[p],i[p])),x[_]=A}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let f=0,m=i;f!==m;++f){const _=n[f],g=_[u],p=_[h];_[h]=g,_[u]=p}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const d=--r,f=e[d],m=--a,_=e[m];t[f.uuid]=u,e[u]=f,t[_.uuid]=d,e[d]=_,e.pop();for(let g=0,p=i;g!==p;++g){const y=n[g],x=y[d],v=y[m];y[u]=x,y[d]=v,y.pop()}}else{const d=--a,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let m=0,_=i;m!==_;++m){const g=n[m];g[u]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(u);for(let d=h,f=l.length;d!==f;++d){const m=l[d];u[d]=new pt(m,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class dm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:fs,endingEnd:fs};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Jf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case yh:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case vl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===jf;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Kf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ps,i.endingEnd=ps):(e?i.endingStart=this.zeroSlopeAtStart?ps:fs:i.endingStart=$r,t?i.endingEnd=this.zeroSlopeAtEnd?ps:fs:i.endingEnd=$r)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const Sx=new Float32Array(1);class wx extends ni{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;m=new um(pt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Vh(new Float32Array(2),new Float32Array(2),1,Sx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?sa.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=vl),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new dm(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?sa.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class qh{constructor(e){this.value=e}clone(){return new qh(this.value.clone===void 0?this.value:this.value.clone())}}let Ex=0;class Tx extends ni{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Ex++}),this.name="",this.usage=Zr,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Ax extends El{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Cx{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const _d=new $e;class Rx{constructor(e,t,n=0,i=1/0){this.ray=new Rs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _d.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_d),this}intersectObject(e,t=!0,n=[]){return Jc(e,this,n,t),n.sort(xd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Jc(e[i],this,n,t);return n.sort(xd),n}}function xd(s,e){return s.distance-e.distance}function Jc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Jc(r[a],e,t,!0)}}class jc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Px{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Zh{constructor(e,t,n,i){Zh.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}const vd=new j;class Ix{constructor(e=new j(1/0,1/0),t=new j(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yd=new P,oo=new P;class Dx{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){yd.subVectors(e,this.start),oo.subVectors(this.end,this.start);const n=oo.dot(oo);let r=oo.dot(yd)/n;return t&&(r=Je(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Md=new P;class Lx extends gt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new nt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ne(i,3));const r=new dn({fog:!1,toneMapped:!1});this.cone=new ii(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Md.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Md),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Pi=new P,lo=new $e,Cc=new $e;class Nx extends ii{constructor(e){const t=fm(e),n=new nt,i=[],r=[],a=new Ce(0,0,1),o=new Ce(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Ne(i,3)),n.setAttribute("color",new Ne(r,3));const l=new dn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Cc.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(lo.multiplyMatrices(Cc,o.matrixWorld),Pi.setFromMatrixPosition(lo),i.setXYZ(a,Pi.x,Pi.y,Pi.z),lo.multiplyMatrices(Cc,o.parent.matrixWorld),Pi.setFromMatrixPosition(lo),i.setXYZ(a+1,Pi.x,Pi.y,Pi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function fm(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,fm(s.children[t]));return e}class Ux extends Ut{constructor(e,t,n){const i=new va(t,4,2),r=new Xi({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Ox=new P,bd=new Ce,Sd=new Ce;class Fx extends gt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new xa(t);i.rotateY(Math.PI*.5),this.material=new Xi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new wt(a,3)),this.add(new Ut(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");bd.copy(this.light.color),Sd.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?bd:Sd;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Ox.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Bx extends ii{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ce(n),i=new Ce(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,m=-o;d<=t;d++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const _=d===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new nt;h.setAttribute("position",new Ne(l,3)),h.setAttribute("color",new Ne(c,3));const u=new dn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class zx extends ii{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new Ce(r),a=new Ce(a);const o=[],l=[];if(t>1)for(let u=0;u<t;u++){const d=u/t*(Math.PI*2),f=Math.sin(d)*e,m=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,m);const _=u&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){const d=u&1?r:a,f=e-e/n*u;for(let m=0;m<i;m++){let _=m/i*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f;o.push(g,0,p),l.push(d.r,d.g,d.b),_=(m+1)/i*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f,o.push(g,0,p),l.push(d.r,d.g,d.b)}}const c=new nt;c.setAttribute("position",new Ne(o,3)),c.setAttribute("color",new Ne(l,3));const h=new dn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const wd=new P,co=new P,Ed=new P;class kx extends gt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new nt;i.setAttribute("position",new Ne([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new dn({fog:!1,toneMapped:!1});this.lightPlane=new zi(i,r),this.add(this.lightPlane),i=new nt,i.setAttribute("position",new Ne([0,0,0,0,0,1],3)),this.targetLine=new zi(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),wd.setFromMatrixPosition(this.light.matrixWorld),co.setFromMatrixPosition(this.light.target.matrixWorld),Ed.subVectors(co,wd),this.lightPlane.lookAt(co),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(co),this.targetLine.scale.z=Ed.length()}}const ho=new P,Dt=new bl;class Vx extends ii{constructor(e){const t=new nt,n=new dn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,_){l(m),l(_)}function l(m){i.push(0,0,0),r.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(i.length/3-1)}t.setAttribute("position",new Ne(i,3)),t.setAttribute("color",new Ne(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new Ce(16755200),h=new Ce(16711680),u=new Ce(43775),d=new Ce(16777215),f=new Ce(3355443);this.setColors(c,h,u,d,f)}setColors(e,t,n,i,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Dt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Nt("c",t,e,Dt,0,0,-1),Nt("t",t,e,Dt,0,0,1),Nt("n1",t,e,Dt,-n,-i,-1),Nt("n2",t,e,Dt,n,-i,-1),Nt("n3",t,e,Dt,-n,i,-1),Nt("n4",t,e,Dt,n,i,-1),Nt("f1",t,e,Dt,-n,-i,1),Nt("f2",t,e,Dt,n,-i,1),Nt("f3",t,e,Dt,-n,i,1),Nt("f4",t,e,Dt,n,i,1),Nt("u1",t,e,Dt,n*.7,i*1.1,-1),Nt("u2",t,e,Dt,-n*.7,i*1.1,-1),Nt("u3",t,e,Dt,0,i*2,-1),Nt("cf1",t,e,Dt,-n,0,1),Nt("cf2",t,e,Dt,n,0,1),Nt("cf3",t,e,Dt,0,-i,1),Nt("cf4",t,e,Dt,0,i,1),Nt("cn1",t,e,Dt,-n,0,-1),Nt("cn2",t,e,Dt,n,0,-1),Nt("cn3",t,e,Dt,0,-i,-1),Nt("cn4",t,e,Dt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Nt(s,e,t,n,i,r,a){ho.set(i,r,a).unproject(n);const o=e[s];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],ho.x,ho.y,ho.z)}}const uo=new ln;class Hx extends ii{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new nt;r.setIndex(new wt(n,1)),r.setAttribute("position",new wt(i,3)),super(r,new dn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&uo.setFromObject(this.object),uo.isEmpty())return;const t=uo.min,n=uo.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Gx extends ii{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new nt;r.setIndex(new wt(n,1)),r.setAttribute("position",new Ne(i,3)),super(r,new dn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Wx extends zi{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new nt;a.setAttribute("position",new Ne(r,3)),a.computeBoundingSphere(),super(a,new dn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new nt;l.setAttribute("position",new Ne(o,3)),l.computeBoundingSphere(),this.add(new Ut(l,new Xi({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Td=new P;let fo,Rc;class Xx extends gt{constructor(e=new P(0,0,1),t=new P(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",fo===void 0&&(fo=new nt,fo.setAttribute("position",new Ne([0,0,0,0,1,0],3)),Rc=new fr(0,.5,1,5,1),Rc.translate(0,-.5,0)),this.position.copy(t),this.line=new zi(fo,new dn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ut(Rc,new Xi({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Td.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Td,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Yx extends ii{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new nt;i.setAttribute("position",new Ne(t,3)),i.setAttribute("color",new Ne(n,3));const r=new dn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Ce,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class $x{constructor(){this.type="ShapePath",this.color=new Ce,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new jr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const y=[];for(let x=0,v=p.length;x<v;x++){const A=p[x],w=new Ms;w.curves=A.curves,y.push(w)}return y}function n(p,y){const x=y.length;let v=!1;for(let A=x-1,w=0;w<x;A=w++){let E=y[A],D=y[w],S=D.x-E.x,M=D.y-E.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(E=y[w],S=-S,D=y[A],M=-M),p.y<E.y||p.y>D.y)continue;if(p.y===E.y){if(p.x===E.x)return!0}else{const R=M*(p.x-E.x)-S*(p.y-E.y);if(R===0)return!0;if(R<0)continue;v=!v}}else{if(p.y!==E.y)continue;if(D.x<=p.x&&p.x<=E.x||E.x<=p.x&&p.x<=D.x)return!0}}return v}const i=ei.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new Ms,l.curves=o.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],m=0,_;d[m]=void 0,f[m]=[];for(let p=0,y=r.length;p<y;p++)o=r[p],_=o.getPoints(),a=i(_),a=e?!a:a,a?(!h&&d[m]&&m++,d[m]={s:new Ms,p:_},d[m].s.curves=o.curves,h&&m++,f[m]=[]):f[m].push({h:o,p:_[0]});if(!d[0])return t(r);if(d.length>1){let p=!1,y=0;for(let x=0,v=d.length;x<v;x++)u[x]=[];for(let x=0,v=d.length;x<v;x++){const A=f[x];for(let w=0;w<A.length;w++){const E=A[w];let D=!0;for(let S=0;S<d.length;S++)n(E.p,d[S].p)&&(x!==S&&y++,D?(D=!1,u[S].push(E)):p=!0);D&&u[x].push(E)}}y>0&&p===!1&&(f=u)}let g;for(let p=0,y=d.length;p<y;p++){l=d[p].s,c.push(l),g=f[p];for(let x=0,v=g.length;x<v;x++)l.holes.push(g[x].h)}return c}}class pm extends ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function qx(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function Zx(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Kx(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Qc(s,e,t,n){const i=Jx(n);switch(t){case ph:return s*e;case gh:return s*e;case _h:return s*e*2;case gl:return s*e/i.components*i.byteLength;case pa:return s*e/i.components*i.byteLength;case xh:return s*e*2/i.components*i.byteLength;case _l:return s*e*2/i.components*i.byteLength;case mh:return s*e*3/i.components*i.byteLength;case an:return s*e*4/i.components*i.byteLength;case xl:return s*e*4/i.components*i.byteLength;case Lr:case Nr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Or:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case No:case Oo:return Math.max(s,16)*Math.max(e,8)/4;case Lo:case Uo:return Math.max(s,8)*Math.max(e,8)/2;case Fo:case Bo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Go:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $o:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case qo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case jo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Qo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fr:case el:case tl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case vh:case nl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case il:case sl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jx(s){switch(s){case ti:case uh:return{byteLength:1,components:1};case or:case dh:case dr:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case bi:case fl:case vn:return{byteLength:4,components:1};case fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}const jx={contain:qx,cover:Zx,fill:Kx,getByteLength:Qc};class Qx extends Wn{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mm(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ev(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ov=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ev=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$v=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ey=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ny=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ay=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,py=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,my=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,By=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$y=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_M=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,MM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,EM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:tv,alphahash_pars_fragment:nv,alphamap_fragment:iv,alphamap_pars_fragment:sv,alphatest_fragment:rv,alphatest_pars_fragment:av,aomap_fragment:ov,aomap_pars_fragment:lv,batching_pars_vertex:cv,batching_vertex:hv,begin_vertex:uv,beginnormal_vertex:dv,bsdfs:fv,iridescence_fragment:pv,bumpmap_pars_fragment:mv,clipping_planes_fragment:gv,clipping_planes_pars_fragment:_v,clipping_planes_pars_vertex:xv,clipping_planes_vertex:vv,color_fragment:yv,color_pars_fragment:Mv,color_pars_vertex:bv,color_vertex:Sv,common:wv,cube_uv_reflection_fragment:Ev,defaultnormal_vertex:Tv,displacementmap_pars_vertex:Av,displacementmap_vertex:Cv,emissivemap_fragment:Rv,emissivemap_pars_fragment:Pv,colorspace_fragment:Iv,colorspace_pars_fragment:Dv,envmap_fragment:Lv,envmap_common_pars_fragment:Nv,envmap_pars_fragment:Uv,envmap_pars_vertex:Ov,envmap_physical_pars_fragment:$v,envmap_vertex:Fv,fog_vertex:Bv,fog_pars_vertex:zv,fog_fragment:kv,fog_pars_fragment:Vv,gradientmap_pars_fragment:Hv,lightmap_pars_fragment:Gv,lights_lambert_fragment:Wv,lights_lambert_pars_fragment:Xv,lights_pars_begin:Yv,lights_toon_fragment:qv,lights_toon_pars_fragment:Zv,lights_phong_fragment:Kv,lights_phong_pars_fragment:Jv,lights_physical_fragment:jv,lights_physical_pars_fragment:Qv,lights_fragment_begin:ey,lights_fragment_maps:ty,lights_fragment_end:ny,logdepthbuf_fragment:iy,logdepthbuf_pars_fragment:sy,logdepthbuf_pars_vertex:ry,logdepthbuf_vertex:ay,map_fragment:oy,map_pars_fragment:ly,map_particle_fragment:cy,map_particle_pars_fragment:hy,metalnessmap_fragment:uy,metalnessmap_pars_fragment:dy,morphinstance_vertex:fy,morphcolor_vertex:py,morphnormal_vertex:my,morphtarget_pars_vertex:gy,morphtarget_vertex:_y,normal_fragment_begin:xy,normal_fragment_maps:vy,normal_pars_fragment:yy,normal_pars_vertex:My,normal_vertex:by,normalmap_pars_fragment:Sy,clearcoat_normal_fragment_begin:wy,clearcoat_normal_fragment_maps:Ey,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:Ay,opaque_fragment:Cy,packing:Ry,premultiplied_alpha_fragment:Py,project_vertex:Iy,dithering_fragment:Dy,dithering_pars_fragment:Ly,roughnessmap_fragment:Ny,roughnessmap_pars_fragment:Uy,shadowmap_pars_fragment:Oy,shadowmap_pars_vertex:Fy,shadowmap_vertex:By,shadowmask_pars_fragment:zy,skinbase_vertex:ky,skinning_pars_vertex:Vy,skinning_vertex:Hy,skinnormal_vertex:Gy,specularmap_fragment:Wy,specularmap_pars_fragment:Xy,tonemapping_fragment:Yy,tonemapping_pars_fragment:$y,transmission_fragment:qy,transmission_pars_fragment:Zy,uv_pars_fragment:Ky,uv_pars_vertex:Jy,uv_vertex:jy,worldpos_vertex:Qy,background_vert:eM,background_frag:tM,backgroundCube_vert:nM,backgroundCube_frag:iM,cube_vert:sM,cube_frag:rM,depth_vert:aM,depth_frag:oM,distanceRGBA_vert:lM,distanceRGBA_frag:cM,equirect_vert:hM,equirect_frag:uM,linedashed_vert:dM,linedashed_frag:fM,meshbasic_vert:pM,meshbasic_frag:mM,meshlambert_vert:gM,meshlambert_frag:_M,meshmatcap_vert:xM,meshmatcap_frag:vM,meshnormal_vert:yM,meshnormal_frag:MM,meshphong_vert:bM,meshphong_frag:SM,meshphysical_vert:wM,meshphysical_frag:EM,meshtoon_vert:TM,meshtoon_frag:AM,points_vert:CM,points_frag:RM,shadow_vert:PM,shadow_frag:IM,sprite_vert:DM,sprite_frag:LM},_e={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Gn={basic:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:sn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:sn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:sn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:sn([_e.points,_e.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:sn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:sn([_e.common,_e.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:sn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:sn([_e.sprite,_e.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:sn([_e.common,_e.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:sn([_e.lights,_e.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Gn.physical={uniforms:sn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const po={r:0,b:0,g:0},os=new Tn,NM=new $e;function UM(s,e,t,n,i,r,a){const o=new Ce(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const A=m(x);A===null?p(o,l):A&&A.isColor&&(p(A,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,v){const A=m(v);A&&(A.isCubeTexture||A.mapping===ur)?(h===void 0&&(h=new Ut(new Ps(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:cr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),os.copy(v.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(NM.makeRotationFromEuler(os)),h.material.toneMapped=ot.getTransfer(A.colorSpace)!==bt,(u!==A||d!==A.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ut(new pr(2,2),new Xn({name:"BackgroundMaterial",uniforms:cr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ot.getTransfer(A.colorSpace)!==bt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(po,mp(s)),n.buffers.color.setClear(po.r,po.g,po.b,v,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:g,dispose:y}}function OM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,R,W,V,U){let B=!1;const L=u(V,W,R);r!==L&&(r=L,c(r.object)),B=f(M,V,W,U),B&&m(M,V,W,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,v(M,R,W,V),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,R,W){const V=W.wireframe===!0;let U=n[M.id];U===void 0&&(U={},n[M.id]=U);let B=U[R.id];B===void 0&&(B={},U[R.id]=B);let L=B[V];return L===void 0&&(L=d(l()),B[V]=L),L}function d(M){const R=[],W=[],V=[];for(let U=0;U<t;U++)R[U]=0,W[U]=0,V[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:W,attributeDivisors:V,object:M,attributes:{},index:null}}function f(M,R,W,V){const U=r.attributes,B=R.attributes;let L=0;const G=W.getAttributes();for(const N in G)if(G[N].location>=0){const K=U[N];let ae=B[N];if(ae===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;L++}return r.attributesNum!==L||r.index!==V}function m(M,R,W,V){const U={},B=R.attributes;let L=0;const G=W.getAttributes();for(const N in G)if(G[N].location>=0){let K=B[N];K===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),U[N]=ae,L++}r.attributes=U,r.attributesNum=L,r.index=V}function _(){const M=r.newAttributes;for(let R=0,W=M.length;R<W;R++)M[R]=0}function g(M){p(M,0)}function p(M,R){const W=r.newAttributes,V=r.enabledAttributes,U=r.attributeDivisors;W[M]=1,V[M]===0&&(s.enableVertexAttribArray(M),V[M]=1),U[M]!==R&&(s.vertexAttribDivisor(M,R),U[M]=R)}function y(){const M=r.newAttributes,R=r.enabledAttributes;for(let W=0,V=R.length;W<V;W++)R[W]!==M[W]&&(s.disableVertexAttribArray(W),R[W]=0)}function x(M,R,W,V,U,B,L){L===!0?s.vertexAttribIPointer(M,R,W,U,B):s.vertexAttribPointer(M,R,W,V,U,B)}function v(M,R,W,V){_();const U=V.attributes,B=W.getAttributes(),L=R.defaultAttributeValues;for(const G in B){const N=B[G];if(N.location>=0){let $=U[G];if($===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){const K=$.normalized,ae=$.itemSize,xe=e.get($);if(xe===void 0)continue;const Pe=xe.buffer,O=xe.type,J=xe.bytesPerElement,me=O===s.INT||O===s.UNSIGNED_INT||$.gpuType===fl;if($.isInterleavedBufferAttribute){const ie=$.data,ve=ie.stride,De=$.offset;if(ie.isInstancedInterleavedBuffer){for(let ge=0;ge<N.locationSize;ge++)p(N.location+ge,ie.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ge=0;ge<N.locationSize;ge++)g(N.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let ge=0;ge<N.locationSize;ge++)x(N.location+ge,ae/N.locationSize,O,K,ve*J,(De+ae/N.locationSize*ge)*J,me)}else{if($.isInstancedBufferAttribute){for(let ie=0;ie<N.locationSize;ie++)p(N.location+ie,$.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ie=0;ie<N.locationSize;ie++)g(N.location+ie);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let ie=0;ie<N.locationSize;ie++)x(N.location+ie,ae/N.locationSize,O,K,ae*J,ae/N.locationSize*ie*J,me)}}else if(L!==void 0){const K=L[G];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(N.location,K);break;case 3:s.vertexAttrib3fv(N.location,K);break;case 4:s.vertexAttrib4fv(N.location,K);break;default:s.vertexAttrib1fv(N.location,K)}}}}y()}function A(){D();for(const M in n){const R=n[M];for(const W in R){const V=R[W];for(const U in V)h(V[U].object),delete V[U];delete R[W]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const W in R){const V=R[W];for(const U in V)h(V[U].object),delete V[U];delete R[W]}delete n[M.id]}function E(M){for(const R in n){const W=n[R];if(W[M.id]===void 0)continue;const V=W[M.id];for(const U in V)h(V[U].object),delete V[U];delete W[M.id]}}function D(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function FM(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function BM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==an&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const D=E===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ti&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==vn&&!D)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function zM(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ui,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const y=r?0:n,x=y*4;let v=p.clippingState||null;l.value=v,v=h(m,d,x,f);for(let A=0;A!==x;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function kM(s){let e=new WeakMap;function t(a,o){return o===Hr?a.mapping=Mi:o===Gr&&(a.mapping=Bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Hr||o===Gr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new xp(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ir=4,Ad=[.125,.215,.35,.446,.526,.582],us=20,Pc=new ba,Cd=new Ce;let Ic=null,Dc=0,Lc=0,Nc=!1;const hs=(1+Math.sqrt(5))/2,Js=1/hs,Rd=[new P(-hs,Js,0),new P(hs,Js,0),new P(-Js,0,hs),new P(Js,0,hs),new P(0,hs,-Js),new P(0,hs,Js),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ic=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ic,Dc,Lc),this._renderer.xr.enabled=Nc,e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ic=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:dr,format:an,colorSpace:Es,depthBuffer:!1},i=Pd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VM(r)),this._blurMaterial=HM(r,e,t)}return i}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Pc)}_sceneToCubeUV(e,t,n,i){const o=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Cd),h.toneMapping=gi,h.autoClear=!1;const f=new Xi({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),m=new Ut(new Ps,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(Cd),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;mo(i,y*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Mi||e.mapping===Bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Id());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;mo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rd[(i-r-1)%Rd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ut(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*us-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):us;g>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${us}`);const p=[];let y=0;for(let E=0;E<us;++E){const D=E/_,S=Math.exp(-D*D/2);p.push(S),E===0?y+=S:E<g&&(y+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const v=this._sizeLods[i],A=3*v*(i>x-ir?i-x+ir:0),w=4*(this._cubeSize-v);mo(t,A,w,3*v,2*v),l.setRenderTarget(t),l.render(u,Pc)}}function VM(s){const e=[],t=[],n=[];let i=s;const r=s-ir+1+Ad.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-ir?l=Ad[a-s+ir-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,y=new Float32Array(_*m*f),x=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,D=w>2?0:-1,S=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];y.set(S,_*m*w),x.set(d,g*m*w);const M=[w,w,w,w,w,w];v.set(M,p*m*w)}const A=new nt;A.setAttribute("position",new wt(y,_)),A.setAttribute("uv",new wt(x,g)),A.setAttribute("faceIndex",new wt(v,p)),e.push(A),i>ir&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pd(s,e,t){const n=new Wn(s,e,t);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function HM(s,e,t){const n=new Float32Array(us),i=new P(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Id(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Dd(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GM(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Hr||l===Gr,h=l===Mi||l===Bi;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new eh(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new eh(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function WM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&js("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function XM(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,v=y.length;x<v;x+=3){const A=y[x+0],w=y[x+1],E=y[x+2];d.push(A,w,w,E,E,A)}}else if(m!==void 0){const y=m.array;_=m.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const A=x+0,w=x+1,E=x+2;d.push(A,w,w,E,E,A)}}else return;const g=new(hp(d)?Eh:wh)(d,1);g.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function YM(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $M(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qM(s,e,t){const n=new WeakMap,i=new mt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),m===!0&&(x=2),_===!0&&(x=3);let v=o.attributes.position.count*x,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const w=new Float32Array(v*A*4*u),E=new yl(w,v,A,u);E.type=vn,E.needsUpdate=!0;const D=x*4;for(let M=0;M<u;M++){const R=g[M],W=p[M],V=y[M],U=v*A*4*M;for(let B=0;B<R.count;B++){const L=B*D;f===!0&&(i.fromBufferAttribute(R,B),w[U+L+0]=i.x,w[U+L+1]=i.y,w[U+L+2]=i.z,w[U+L+3]=0),m===!0&&(i.fromBufferAttribute(W,B),w[U+L+4]=i.x,w[U+L+5]=i.y,w[U+L+6]=i.z,w[U+L+7]=0),_===!0&&(i.fromBufferAttribute(V,B),w[U+L+8]=i.x,w[U+L+9]=i.y,w[U+L+10]=i.z,w[U+L+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new j(v,A)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ZM(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const gm=new Lt,Ld=new Ph(1,1),_m=new yl,xm=new Sh,vm=new ma,Nd=[],Ud=[],Od=new Float32Array(16),Fd=new Float32Array(9),Bd=new Float32Array(4);function mr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Nd[i];if(r===void 0&&(r=new Float32Array(i),Nd[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Gl(s,e){let t=Ud[e];t===void 0&&(t=new Int32Array(e),Ud[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function KM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function JM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2fv(this.addr,e),Gt(t,e)}}function jM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;s.uniform3fv(this.addr,e),Gt(t,e)}}function QM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4fv(this.addr,e),Gt(t,e)}}function eb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Bd.set(n),s.uniformMatrix2fv(this.addr,!1,Bd),Gt(t,n)}}function tb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Fd.set(n),s.uniformMatrix3fv(this.addr,!1,Fd),Gt(t,n)}}function nb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Od.set(n),s.uniformMatrix4fv(this.addr,!1,Od),Gt(t,n)}}function ib(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2iv(this.addr,e),Gt(t,e)}}function rb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3iv(this.addr,e),Gt(t,e)}}function ab(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4iv(this.addr,e),Gt(t,e)}}function ob(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function lb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2uiv(this.addr,e),Gt(t,e)}}function cb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3uiv(this.addr,e),Gt(t,e)}}function hb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4uiv(this.addr,e),Gt(t,e)}}function ub(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ld.compareFunction=Mh,r=Ld):r=gm,t.setTexture2D(e||r,i)}function db(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xm,i)}function fb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vm,i)}function pb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_m,i)}function mb(s){switch(s){case 5126:return KM;case 35664:return JM;case 35665:return jM;case 35666:return QM;case 35674:return eb;case 35675:return tb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return sb;case 35668:case 35672:return rb;case 35669:case 35673:return ab;case 5125:return ob;case 36294:return lb;case 36295:return cb;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return pb}}function gb(s,e){s.uniform1fv(this.addr,e)}function _b(s,e){const t=mr(e,this.size,2);s.uniform2fv(this.addr,t)}function xb(s,e){const t=mr(e,this.size,3);s.uniform3fv(this.addr,t)}function vb(s,e){const t=mr(e,this.size,4);s.uniform4fv(this.addr,t)}function yb(s,e){const t=mr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Mb(s,e){const t=mr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function bb(s,e){const t=mr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Sb(s,e){s.uniform1iv(this.addr,e)}function wb(s,e){s.uniform2iv(this.addr,e)}function Eb(s,e){s.uniform3iv(this.addr,e)}function Tb(s,e){s.uniform4iv(this.addr,e)}function Ab(s,e){s.uniform1uiv(this.addr,e)}function Cb(s,e){s.uniform2uiv(this.addr,e)}function Rb(s,e){s.uniform3uiv(this.addr,e)}function Pb(s,e){s.uniform4uiv(this.addr,e)}function Ib(s,e,t){const n=this.cache,i=e.length,r=Gl(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||gm,r[a])}function Db(s,e,t){const n=this.cache,i=e.length,r=Gl(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xm,r[a])}function Lb(s,e,t){const n=this.cache,i=e.length,r=Gl(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||vm,r[a])}function Nb(s,e,t){const n=this.cache,i=e.length,r=Gl(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||_m,r[a])}function Ub(s){switch(s){case 5126:return gb;case 35664:return _b;case 35665:return xb;case 35666:return vb;case 35674:return yb;case 35675:return Mb;case 35676:return bb;case 5124:case 35670:return Sb;case 35667:case 35671:return wb;case 35668:case 35672:return Eb;case 35669:case 35673:return Tb;case 5125:return Ab;case 36294:return Cb;case 36295:return Rb;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Nb}}class Ob{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mb(t.type)}}class Fb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ub(t.type)}}class Bb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function zd(s,e){s.seq.push(e),s.map[e.id]=e}function zb(s,e,t){const n=s.name,i=n.length;for(Uc.lastIndex=0;;){const r=Uc.exec(n),a=Uc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){zd(t,c===void 0?new Ob(o,s,e):new Fb(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Bb(o),zd(t,u)),t=u}}}class bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);zb(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function kd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const kb=37297;let Vb=0;function Hb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Vd=new je;function Gb(s){ot._getMatrix(Vd,ot.workingColorSpace,s);const e=`mat3( ${Vd.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(s)){case qr:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Hb(s.getShaderSource(e),a)}else return i}function Wb(s,e){const t=Gb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xb(s,e){let t;switch(e){case Gf:t="Linear";break;case Wf:t="Reinhard";break;case Xf:t="Cineon";break;case ch:t="ACESFilmic";break;case $f:t="AgX";break;case qf:t="Neutral";break;case Yf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const go=new P;function Yb(){ot.getLuminanceCoefficients(go);const s=go.x.toFixed(4),e=go.y.toFixed(4),t=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $b(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function qb(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zb(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ir(s){return s!==""}function Gd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kb=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(s){return s.replace(Kb,jb)}const Jb=new Map;function jb(s,e){let t=Ye[e];if(t===void 0){const n=Jb.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return th(t)}const Qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xd(s){return s.replace(Qb,eS)}function eS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function nS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mi:case Bi:e="ENVMAP_TYPE_CUBE";break;case ur:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bi:e="ENVMAP_MODE_REFRACTION";break}return e}function sS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case fa:e="ENVMAP_BLENDING_MULTIPLY";break;case Vf:e="ENVMAP_BLENDING_MIX";break;case Hf:e="ENVMAP_BLENDING_ADD";break}return e}function rS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function aS(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=tS(t),c=nS(t),h=iS(t),u=sS(t),d=rS(t),f=$b(t),m=qb(r),_=i.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ir).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(g=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==gi?Xb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Wb("linearToOutputTexel",t.outputColorSpace),Yb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=th(a),a=Gd(a,t),a=Wd(a,t),o=th(o),o=Gd(o,t),o=Wd(o,t),a=Xd(a),o=Xd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+g+a,v=y+p+o,A=kd(i,i.VERTEX_SHADER,x),w=kd(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(R){if(s.debug.checkShaderErrors){const W=i.getProgramInfoLog(_).trim(),V=i.getShaderInfoLog(A).trim(),U=i.getShaderInfoLog(w).trim();let B=!0,L=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,w);else{const G=Hd(i,A,"vertex"),N=Hd(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+G+`
`+N)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||U==="")&&(L=!1);L&&(R.diagnostics={runnable:B,programLog:W,vertexShader:{log:V,prefix:g},fragmentShader:{log:U,prefix:p}})}i.deleteShader(A),i.deleteShader(w),D=new bo(i,_),S=Zb(i,_)}let D;this.getUniforms=function(){return D===void 0&&E(this),D};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,kb)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let oS=0;class lS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cS(e),t.set(e,n)),n}}class cS{constructor(e){this.id=oS++,this.code=e,this.usedTimes=0}}function hS(s,e,t,n,i,r,a){const o=new Ml,l=new lS,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,R,W,V){const U=W.fog,B=V.geometry,L=S.isMeshStandardMaterial?W.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||L),N=G&&G.mapping===ur?G.image.height:null,$=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=K!==void 0?K.length:0;let xe=0;B.morphAttributes.position!==void 0&&(xe=1),B.morphAttributes.normal!==void 0&&(xe=2),B.morphAttributes.color!==void 0&&(xe=3);let Pe,O,J,me;if($){const Mt=Gn[$];Pe=Mt.vertexShader,O=Mt.fragmentShader}else Pe=S.vertexShader,O=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),me=l.getFragmentShaderID(S);const ie=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),De=V.isInstancedMesh===!0,ge=V.isBatchedMesh===!0,Ve=!!S.map,Q=!!S.matcap,le=!!G,I=!!S.aoMap,Be=!!S.lightMap,oe=!!S.bumpMap,ce=!!S.normalMap,se=!!S.displacementMap,We=!!S.emissiveMap,ye=!!S.metalnessMap,C=!!S.roughnessMap,b=S.anisotropy>0,H=S.clearcoat>0,Z=S.dispersion>0,re=S.iridescence>0,ee=S.sheen>0,Ue=S.transmission>0,pe=b&&!!S.anisotropyMap,Se=H&&!!S.clearcoatMap,at=H&&!!S.clearcoatNormalMap,he=H&&!!S.clearcoatRoughnessMap,Re=re&&!!S.iridescenceMap,He=re&&!!S.iridescenceThicknessMap,qe=ee&&!!S.sheenColorMap,Le=ee&&!!S.sheenRoughnessMap,dt=!!S.specularMap,st=!!S.specularColorMap,Et=!!S.specularIntensityMap,F=Ue&&!!S.transmissionMap,Me=Ue&&!!S.thicknessMap,q=!!S.gradientMap,te=!!S.alphaMap,Ae=S.alphaTest>0,Te=!!S.alphaHash,it=!!S.extensions;let Rt=gi;S.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Rt=s.toneMapping);const qt={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:Pe,fragmentShader:O,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ge,batchingColor:ge&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Es,alphaToCoverage:!!S.alphaToCoverage,map:Ve,matcap:Q,envMap:le,envMapMode:le&&G.mapping,envMapCubeUVHeight:N,aoMap:I,lightMap:Be,bumpMap:oe,normalMap:ce,displacementMap:d&&se,emissiveMap:We,normalMapObjectSpace:ce&&S.normalMapType===tp,normalMapTangentSpace:ce&&S.normalMapType===Wi,metalnessMap:ye,roughnessMap:C,anisotropy:b,anisotropyMap:pe,clearcoat:H,clearcoatMap:Se,clearcoatNormalMap:at,clearcoatRoughnessMap:he,dispersion:Z,iridescence:re,iridescenceMap:Re,iridescenceThicknessMap:He,sheen:ee,sheenColorMap:qe,sheenRoughnessMap:Le,specularMap:dt,specularColorMap:st,specularIntensityMap:Et,transmission:Ue,transmissionMap:F,thicknessMap:Me,gradientMap:q,opaque:S.transparent===!1&&S.blending===xs&&S.alphaToCoverage===!1,alphaMap:te,alphaTest:Ae,alphaHash:Te,combine:S.combine,mapUv:Ve&&_(S.map.channel),aoMapUv:I&&_(S.aoMap.channel),lightMapUv:Be&&_(S.lightMap.channel),bumpMapUv:oe&&_(S.bumpMap.channel),normalMapUv:ce&&_(S.normalMap.channel),displacementMapUv:se&&_(S.displacementMap.channel),emissiveMapUv:We&&_(S.emissiveMap.channel),metalnessMapUv:ye&&_(S.metalnessMap.channel),roughnessMapUv:C&&_(S.roughnessMap.channel),anisotropyMapUv:pe&&_(S.anisotropyMap.channel),clearcoatMapUv:Se&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:He&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(S.sheenRoughnessMap.channel),specularMapUv:dt&&_(S.specularMap.channel),specularColorMapUv:st&&_(S.specularColorMap.channel),specularIntensityMapUv:Et&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:Me&&_(S.thicknessMap.channel),alphaMapUv:te&&_(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ce||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!B.attributes.uv&&(Ve||te),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ve,skinning:V.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===bt,decodeVideoTextureEmissive:We&&S.emissiveMap.isVideoTexture===!0&&ot.getTransfer(S.emissiveMap.colorSpace)===bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zn,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:it&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&S.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(y(M,S),x(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=m[S.type];let R;if(M){const W=Gn[M];R=gp.clone(W.uniforms)}else R=S.uniforms;return R}function A(S,M){let R;for(let W=0,V=h.length;W<V;W++){const U=h[W];if(U.cacheKey===M){R=U,++R.usedTimes;break}}return R===void 0&&(R=new aS(s,M,S,r),h.push(R)),R}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function E(S){l.remove(S)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:D}}function uS(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function dS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function $d(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,m,_,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function o(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||dS),n.length>1&&n.sort(d||$d),i.length>1&&i.sort(d||$d)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function fS(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new qd,s.set(n,[a])):i>=r.length?(a=new qd,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function pS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ce};break;case"SpotLight":t={position:new P,direction:new P,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function mS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let gS=0;function _S(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xS(s){const e=new pS,t=mS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new $e,a=new $e;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,y=0,x=0,v=0,A=0,w=0,E=0;c.sort(_S);for(let S=0,M=c.length;S<M;S++){const R=c[S],W=R.color,V=R.intensity,U=R.distance,B=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=W.r*V,u+=W.g*V,d+=W.b*V;else if(R.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(R.sh.coefficients[L],V);E++}else if(R.isDirectionalLight){const L=e.get(R);if(L.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const G=R.shadow,N=t.get(R);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=R.shadow.matrix,y++}n.directional[f]=L,f++}else if(R.isSpotLight){const L=e.get(R);L.position.setFromMatrixPosition(R.matrixWorld),L.color.copy(W).multiplyScalar(V),L.distance=U,L.coneCos=Math.cos(R.angle),L.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),L.decay=R.decay,n.spot[_]=L;const G=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,G.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=G.matrix,R.castShadow){const N=t.get(R);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=B,v++}_++}else if(R.isRectAreaLight){const L=e.get(R);L.color.copy(W).multiplyScalar(V),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=L,g++}else if(R.isPointLight){const L=e.get(R);if(L.color.copy(R.color).multiplyScalar(R.intensity),L.distance=R.distance,L.decay=R.decay,R.castShadow){const G=R.shadow,N=t.get(R);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,N.shadowCameraNear=G.camera.near,N.shadowCameraFar=G.camera.far,n.pointShadow[m]=N,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=R.shadow.matrix,x++}n.point[m]=L,m++}else if(R.isHemisphereLight){const L=e.get(R);L.skyColor.copy(R.color).multiplyScalar(V),L.groundColor.copy(R.groundColor).multiplyScalar(V),n.hemi[p]=L,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==x||D.numSpotShadows!==v||D.numSpotMaps!==A||D.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,D.directionalLength=f,D.pointLength=m,D.spotLength=_,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=x,D.numSpotShadows=v,D.numSpotMaps=A,D.numLightProbes=E,n.version=gS++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Zd(s){const e=new xS(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function vS(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Zd(s),e.set(i,[o])):r>=a.length?(o=new Zd(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const yS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bS(s,e,t){let n=new ga;const i=new j,r=new j,a=new mt,o=new Bh({depthPacking:ep}),l=new zh,c={},h=t.maxTextureSize,u={[yi]:on,[on]:yi,[Zn]:Zn},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:yS,fragmentShader:MS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new nt;m.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ut(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let p=this.type;this.render=function(w,E,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),W=s.state;W.setBlending(mi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=p!==qn&&this.type===qn,U=p===qn&&this.type!==qn;for(let B=0,L=w.length;B<L;B++){const G=w[B],N=G.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const $=N.getFrameExtents();if(i.multiply($),r.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,N.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,N.mapSize.y=r.y)),N.map===null||V===!0||U===!0){const ae=this.type!==qn?{minFilter:$t,magFilter:$t}:{};N.map!==null&&N.map.dispose(),N.map=new Wn(i.x,i.y,ae),N.map.texture.name=G.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const K=N.getViewportCount();for(let ae=0;ae<K;ae++){const xe=N.getViewport(ae);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),W.viewport(a),N.updateMatrices(G,ae),n=N.getFrustum(),v(E,D,N.camera,G,this.type)}N.isPointLightShadow!==!0&&this.type===qn&&y(N,D),N.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(S,M,R)};function y(w,E){const D=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Wn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(E,null,D,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(E,null,D,f,_,null)}function x(w,E,D,S){let M=null;const R=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)M=R;else if(M=D.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const W=M.uuid,V=E.uuid;let U=c[W];U===void 0&&(U={},c[W]=U);let B=U[V];B===void 0&&(B=M.clone(),U[V]=B,E.addEventListener("dispose",A)),M=B}if(M.visible=E.visible,M.wireframe=E.wireframe,S===qn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=s.properties.get(M);W.light=D}return M}function v(w,E,D,S,M){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===qn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const V=e.update(w),U=w.material;if(Array.isArray(U)){const B=V.groups;for(let L=0,G=B.length;L<G;L++){const N=B[L],$=U[N.materialIndex];if($&&$.visible){const K=x(w,$,S,M);w.onBeforeShadow(s,w,E,D,V,K,N),s.renderBufferDirect(D,null,V,K,w,N),w.onAfterShadow(s,w,E,D,V,K,N)}}}else if(U.visible){const B=x(w,U,S,M);w.onBeforeShadow(s,w,E,D,V,B,null),s.renderBufferDirect(D,null,V,B,w,null),w.onAfterShadow(s,w,E,D,V,B,null)}}const W=w.children;for(let V=0,U=W.length;V<U;V++)v(W[V],E,D,S,M)}function A(w){w.target.removeEventListener("dispose",A);for(const D in c){const S=c[D],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const SS={[To]:Ao,[Co]:Io,[Ro]:Do,[bs]:Po,[Ao]:To,[Io]:Co,[Do]:Ro,[Po]:bs};function wS(s,e){function t(){let F=!1;const Me=new mt;let q=null;const te=new mt(0,0,0,0);return{setMask:function(Ae){q!==Ae&&!F&&(s.colorMask(Ae,Ae,Ae,Ae),q=Ae)},setLocked:function(Ae){F=Ae},setClear:function(Ae,Te,it,Rt,qt){qt===!0&&(Ae*=Rt,Te*=Rt,it*=Rt),Me.set(Ae,Te,it,Rt),te.equals(Me)===!1&&(s.clearColor(Ae,Te,it,Rt),te.copy(Me))},reset:function(){F=!1,q=null,te.set(-1,0,0,0)}}}function n(){let F=!1,Me=!1,q=null,te=null,Ae=null;return{setReversed:function(Te){if(Me!==Te){const it=e.get("EXT_clip_control");Me?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Rt=Ae;Ae=null,this.setClear(Rt)}Me=Te},getReversed:function(){return Me},setTest:function(Te){Te?ie(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(Te){q!==Te&&!F&&(s.depthMask(Te),q=Te)},setFunc:function(Te){if(Me&&(Te=SS[Te]),te!==Te){switch(Te){case To:s.depthFunc(s.NEVER);break;case Ao:s.depthFunc(s.ALWAYS);break;case Co:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case Ro:s.depthFunc(s.EQUAL);break;case Po:s.depthFunc(s.GEQUAL);break;case Io:s.depthFunc(s.GREATER);break;case Do:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=Te}},setLocked:function(Te){F=Te},setClear:function(Te){Ae!==Te&&(Me&&(Te=1-Te),s.clearDepth(Te),Ae=Te)},reset:function(){F=!1,q=null,te=null,Ae=null,Me=!1}}}function i(){let F=!1,Me=null,q=null,te=null,Ae=null,Te=null,it=null,Rt=null,qt=null;return{setTest:function(Mt){F||(Mt?ie(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(Mt){Me!==Mt&&!F&&(s.stencilMask(Mt),Me=Mt)},setFunc:function(Mt,On,si){(q!==Mt||te!==On||Ae!==si)&&(s.stencilFunc(Mt,On,si),q=Mt,te=On,Ae=si)},setOp:function(Mt,On,si){(Te!==Mt||it!==On||Rt!==si)&&(s.stencilOp(Mt,On,si),Te=Mt,it=On,Rt=si)},setLocked:function(Mt){F=Mt},setClear:function(Mt){qt!==Mt&&(s.clearStencil(Mt),qt=Mt)},reset:function(){F=!1,Me=null,q=null,te=null,Ae=null,Te=null,it=null,Rt=null,qt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,y=null,x=null,v=null,A=null,w=null,E=new Ce(0,0,0),D=0,S=!1,M=null,R=null,W=null,V=null,U=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,G=0;const N=s.getParameter(s.VERSION);N.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(N)[1]),L=G>=1):N.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),L=G>=2);let $=null,K={};const ae=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),Pe=new mt().fromArray(ae),O=new mt().fromArray(xe);function J(F,Me,q,te){const Ae=new Uint8Array(4),Te=s.createTexture();s.bindTexture(F,Te),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<q;it++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,te,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(Me+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return Te}const me={};me[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),me[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),me[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(s.DEPTH_TEST),a.setFunc(bs),oe(!1),ce(zc),ie(s.CULL_FACE),I(mi);function ie(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function ve(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function De(F,Me){return u[F]!==Me?(s.bindFramebuffer(F,Me),u[F]=Me,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Me),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function ge(F,Me){let q=f,te=!1;if(F){q=d.get(Me),q===void 0&&(q=[],d.set(Me,q));const Ae=F.textures;if(q.length!==Ae.length||q[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,it=Ae.length;Te<it;Te++)q[Te]=s.COLOR_ATTACHMENT0+Te;q.length=Ae.length,te=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,te=!0);te&&s.drawBuffers(q)}function Ve(F){return m!==F?(s.useProgram(F),m=F,!0):!1}const Q={[Li]:s.FUNC_ADD,[wf]:s.FUNC_SUBTRACT,[Ef]:s.FUNC_REVERSE_SUBTRACT};Q[Tf]=s.MIN,Q[Af]=s.MAX;const le={[Cf]:s.ZERO,[Rf]:s.ONE,[Pf]:s.SRC_COLOR,[wo]:s.SRC_ALPHA,[Of]:s.SRC_ALPHA_SATURATE,[Nf]:s.DST_COLOR,[Df]:s.DST_ALPHA,[If]:s.ONE_MINUS_SRC_COLOR,[Eo]:s.ONE_MINUS_SRC_ALPHA,[Uf]:s.ONE_MINUS_DST_COLOR,[Lf]:s.ONE_MINUS_DST_ALPHA,[Ff]:s.CONSTANT_COLOR,[Bf]:s.ONE_MINUS_CONSTANT_COLOR,[zf]:s.CONSTANT_ALPHA,[kf]:s.ONE_MINUS_CONSTANT_ALPHA};function I(F,Me,q,te,Ae,Te,it,Rt,qt,Mt){if(F===mi){_===!0&&(ve(s.BLEND),_=!1);return}if(_===!1&&(ie(s.BLEND),_=!0),F!==Sf){if(F!==g||Mt!==S){if((p!==Li||v!==Li)&&(s.blendEquation(s.FUNC_ADD),p=Li,v=Li),Mt)switch(F){case xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kc:s.blendFunc(s.ONE,s.ONE);break;case Vc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,x=null,A=null,w=null,E.set(0,0,0),D=0,g=F,S=Mt}return}Ae=Ae||Me,Te=Te||q,it=it||te,(Me!==p||Ae!==v)&&(s.blendEquationSeparate(Q[Me],Q[Ae]),p=Me,v=Ae),(q!==y||te!==x||Te!==A||it!==w)&&(s.blendFuncSeparate(le[q],le[te],le[Te],le[it]),y=q,x=te,A=Te,w=it),(Rt.equals(E)===!1||qt!==D)&&(s.blendColor(Rt.r,Rt.g,Rt.b,qt),E.copy(Rt),D=qt),g=F,S=!1}function Be(F,Me){F.side===Zn?ve(s.CULL_FACE):ie(s.CULL_FACE);let q=F.side===on;Me&&(q=!q),oe(q),F.blending===xs&&F.transparent===!1?I(mi):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const te=F.stencilWrite;o.setTest(te),te&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),We(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function oe(F){M!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),M=F)}function ce(F){F!==Mf?(ie(s.CULL_FACE),F!==R&&(F===zc?s.cullFace(s.BACK):F===bf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),R=F}function se(F){F!==W&&(L&&s.lineWidth(F),W=F)}function We(F,Me,q){F?(ie(s.POLYGON_OFFSET_FILL),(V!==Me||U!==q)&&(s.polygonOffset(Me,q),V=Me,U=q)):ve(s.POLYGON_OFFSET_FILL)}function ye(F){F?ie(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function C(F){F===void 0&&(F=s.TEXTURE0+B-1),$!==F&&(s.activeTexture(F),$=F)}function b(F,Me,q){q===void 0&&($===null?q=s.TEXTURE0+B-1:q=$);let te=K[q];te===void 0&&(te={type:void 0,texture:void 0},K[q]=te),(te.type!==F||te.texture!==Me)&&($!==q&&(s.activeTexture(q),$=q),s.bindTexture(F,Me||me[F]),te.type=F,te.texture=Me)}function H(){const F=K[$];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(F){Pe.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Pe.copy(F))}function Le(F){O.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),O.copy(F))}function dt(F,Me){let q=c.get(Me);q===void 0&&(q=new WeakMap,c.set(Me,q));let te=q.get(F);te===void 0&&(te=s.getUniformBlockIndex(Me,F.name),q.set(F,te))}function st(F,Me){const te=c.get(Me).get(F);l.get(Me)!==te&&(s.uniformBlockBinding(Me,te,F.__bindingPointIndex),l.set(Me,te))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},$=null,K={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,y=null,x=null,v=null,A=null,w=null,E=new Ce(0,0,0),D=0,S=!1,M=null,R=null,W=null,V=null,U=null,Pe.set(0,0,s.canvas.width,s.canvas.height),O.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:ve,bindFramebuffer:De,drawBuffers:ge,useProgram:Ve,setBlending:I,setMaterial:Be,setFlipSided:oe,setCullFace:ce,setLineWidth:se,setPolygonOffset:We,setScissorTest:ye,activeTexture:C,bindTexture:b,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:re,texImage2D:Re,texImage3D:He,updateUBOMapping:dt,uniformBlockBinding:st,texStorage2D:at,texStorage3D:he,texSubImage2D:ee,texSubImage3D:Ue,compressedTexSubImage2D:pe,compressedTexSubImage3D:Se,scissor:qe,viewport:Le,reset:Et}}function ES(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,b){return f?new OffscreenCanvas(C,b):Jr("canvas")}function _(C,b,H){let Z=1;const re=ye(C);if((re.width>H||re.height>H)&&(Z=H/Math.max(re.width,re.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ee=Math.floor(Z*re.width),Ue=Math.floor(Z*re.height);u===void 0&&(u=m(ee,Ue));const pe=b?m(ee,Ue):u;return pe.width=ee,pe.height=Ue,pe.getContext("2d").drawImage(C,0,0,ee,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Ue+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(C,b,H,Z,re=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=b;if(b===s.RED&&(H===s.FLOAT&&(ee=s.R32F),H===s.HALF_FLOAT&&(ee=s.R16F),H===s.UNSIGNED_BYTE&&(ee=s.R8)),b===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(ee=s.R8UI),H===s.UNSIGNED_SHORT&&(ee=s.R16UI),H===s.UNSIGNED_INT&&(ee=s.R32UI),H===s.BYTE&&(ee=s.R8I),H===s.SHORT&&(ee=s.R16I),H===s.INT&&(ee=s.R32I)),b===s.RG&&(H===s.FLOAT&&(ee=s.RG32F),H===s.HALF_FLOAT&&(ee=s.RG16F),H===s.UNSIGNED_BYTE&&(ee=s.RG8)),b===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(ee=s.RG8UI),H===s.UNSIGNED_SHORT&&(ee=s.RG16UI),H===s.UNSIGNED_INT&&(ee=s.RG32UI),H===s.BYTE&&(ee=s.RG8I),H===s.SHORT&&(ee=s.RG16I),H===s.INT&&(ee=s.RG32I)),b===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),H===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),H===s.UNSIGNED_INT&&(ee=s.RGB32UI),H===s.BYTE&&(ee=s.RGB8I),H===s.SHORT&&(ee=s.RGB16I),H===s.INT&&(ee=s.RGB32I)),b===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),H===s.UNSIGNED_INT&&(ee=s.RGBA32UI),H===s.BYTE&&(ee=s.RGBA8I),H===s.SHORT&&(ee=s.RGBA16I),H===s.INT&&(ee=s.RGBA32I)),b===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),b===s.RGBA){const Ue=re?qr:ot.getTransfer(Z);H===s.FLOAT&&(ee=s.RGBA32F),H===s.HALF_FLOAT&&(ee=s.RGBA16F),H===s.UNSIGNED_BYTE&&(ee=Ue===bt?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(C,b){let H;return C?b===null||b===bi||b===Ss?H=s.DEPTH24_STENCIL8:b===vn?H=s.DEPTH32F_STENCIL8:b===or&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===bi||b===Ss?H=s.DEPTH_COMPONENT24:b===vn?H=s.DEPTH_COMPONENT32F:b===or&&(H=s.DEPTH_COMPONENT16),H}function A(C,b){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==$t&&C.minFilter!==Vt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function w(C){const b=C.target;b.removeEventListener("dispose",w),D(b),b.isVideoTexture&&h.delete(b)}function E(C){const b=C.target;b.removeEventListener("dispose",E),M(b)}function D(C){const b=n.get(C);if(b.__webglInit===void 0)return;const H=C.source,Z=d.get(H);if(Z){const re=Z[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&S(C),Object.keys(Z).length===0&&d.delete(H)}n.remove(C)}function S(C){const b=n.get(C);s.deleteTexture(b.__webglTexture);const H=C.source,Z=d.get(H);delete Z[b.__cacheKey],a.memory.textures--}function M(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let re=0;re<b.__webglFramebuffer[Z].length;re++)s.deleteFramebuffer(b.__webglFramebuffer[Z][re]);else s.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)s.deleteFramebuffer(b.__webglFramebuffer[Z]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=C.textures;for(let Z=0,re=H.length;Z<re;Z++){const ee=n.get(H[Z]);ee.__webglTexture&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(C)}let R=0;function W(){R=0}function V(){const C=R;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function U(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function B(C,b){const H=n.get(C);if(C.isVideoTexture&&se(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(H,C,b);return}}t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+b)}function L(C,b){const H=n.get(C);if(C.version>0&&H.__version!==C.version){O(H,C,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+b)}function G(C,b){const H=n.get(C);if(C.version>0&&H.__version!==C.version){O(H,C,b);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+b)}function N(C,b){const H=n.get(C);if(C.version>0&&H.__version!==C.version){J(H,C,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+b)}const $={[Wr]:s.REPEAT,[Dn]:s.CLAMP_TO_EDGE,[Xr]:s.MIRRORED_REPEAT},K={[$t]:s.NEAREST,[hh]:s.NEAREST_MIPMAP_NEAREST,[Qs]:s.NEAREST_MIPMAP_LINEAR,[Vt]:s.LINEAR,[Dr]:s.LINEAR_MIPMAP_NEAREST,[Kn]:s.LINEAR_MIPMAP_LINEAR},ae={[np]:s.NEVER,[lp]:s.ALWAYS,[ip]:s.LESS,[Mh]:s.LEQUAL,[sp]:s.EQUAL,[op]:s.GEQUAL,[rp]:s.GREATER,[ap]:s.NOTEQUAL};function xe(C,b){if(b.type===vn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Vt||b.magFilter===Dr||b.magFilter===Qs||b.magFilter===Kn||b.minFilter===Vt||b.minFilter===Dr||b.minFilter===Qs||b.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,$[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,$[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,$[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,K[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,K[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$t||b.minFilter!==Qs&&b.minFilter!==Kn||b.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Pe(C,b){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",w));const Z=b.source;let re=d.get(Z);re===void 0&&(re={},d.set(Z,re));const ee=U(b);if(ee!==C.__cacheKey){re[ee]===void 0&&(re[ee]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),re[ee].usedTimes++;const Ue=re[C.__cacheKey];Ue!==void 0&&(re[C.__cacheKey].usedTimes--,Ue.usedTimes===0&&S(b)),C.__cacheKey=ee,C.__webglTexture=re[ee].texture}return H}function O(C,b,H){let Z=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=s.TEXTURE_3D);const re=Pe(C,b),ee=b.source;t.bindTexture(Z,C.__webglTexture,s.TEXTURE0+H);const Ue=n.get(ee);if(ee.version!==Ue.__version||re===!0){t.activeTexture(s.TEXTURE0+H);const pe=ot.getPrimaries(ot.workingColorSpace),Se=b.colorSpace===di?null:ot.getPrimaries(b.colorSpace),at=b.colorSpace===di||pe===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let he=_(b.image,!1,i.maxTextureSize);he=We(b,he);const Re=r.convert(b.format,b.colorSpace),He=r.convert(b.type);let qe=x(b.internalFormat,Re,He,b.colorSpace,b.isVideoTexture);xe(Z,b);let Le;const dt=b.mipmaps,st=b.isVideoTexture!==!0,Et=Ue.__version===void 0||re===!0,F=ee.dataReady,Me=A(b,he);if(b.isDepthTexture)qe=v(b.format===ws,b.type),Et&&(st?t.texStorage2D(s.TEXTURE_2D,1,qe,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,qe,he.width,he.height,0,Re,He,null));else if(b.isDataTexture)if(dt.length>0){st&&Et&&t.texStorage2D(s.TEXTURE_2D,Me,qe,dt[0].width,dt[0].height);for(let q=0,te=dt.length;q<te;q++)Le=dt[q],st?F&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Le.width,Le.height,Re,He,Le.data):t.texImage2D(s.TEXTURE_2D,q,qe,Le.width,Le.height,0,Re,He,Le.data);b.generateMipmaps=!1}else st?(Et&&t.texStorage2D(s.TEXTURE_2D,Me,qe,he.width,he.height),F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he.width,he.height,Re,He,he.data)):t.texImage2D(s.TEXTURE_2D,0,qe,he.width,he.height,0,Re,He,he.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){st&&Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,qe,dt[0].width,dt[0].height,he.depth);for(let q=0,te=dt.length;q<te;q++)if(Le=dt[q],b.format!==an)if(Re!==null)if(st){if(F)if(b.layerUpdates.size>0){const Ae=Qc(Le.width,Le.height,b.format,b.type);for(const Te of b.layerUpdates){const it=Le.data.subarray(Te*Ae/Le.data.BYTES_PER_ELEMENT,(Te+1)*Ae/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,Te,Le.width,Le.height,1,Re,it)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Le.width,Le.height,he.depth,Re,Le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,qe,Le.width,Le.height,he.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?F&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Le.width,Le.height,he.depth,Re,He,Le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,qe,Le.width,Le.height,he.depth,0,Re,He,Le.data)}else{st&&Et&&t.texStorage2D(s.TEXTURE_2D,Me,qe,dt[0].width,dt[0].height);for(let q=0,te=dt.length;q<te;q++)Le=dt[q],b.format!==an?Re!==null?st?F&&t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,Le.width,Le.height,Re,Le.data):t.compressedTexImage2D(s.TEXTURE_2D,q,qe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?F&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Le.width,Le.height,Re,He,Le.data):t.texImage2D(s.TEXTURE_2D,q,qe,Le.width,Le.height,0,Re,He,Le.data)}else if(b.isDataArrayTexture)if(st){if(Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,qe,he.width,he.height,he.depth),F)if(b.layerUpdates.size>0){const q=Qc(he.width,he.height,b.format,b.type);for(const te of b.layerUpdates){const Ae=he.data.subarray(te*q/he.data.BYTES_PER_ELEMENT,(te+1)*q/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,te,he.width,he.height,1,Re,He,Ae)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Re,He,he.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,he.width,he.height,he.depth,0,Re,He,he.data);else if(b.isData3DTexture)st?(Et&&t.texStorage3D(s.TEXTURE_3D,Me,qe,he.width,he.height,he.depth),F&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Re,He,he.data)):t.texImage3D(s.TEXTURE_3D,0,qe,he.width,he.height,he.depth,0,Re,He,he.data);else if(b.isFramebufferTexture){if(Et)if(st)t.texStorage2D(s.TEXTURE_2D,Me,qe,he.width,he.height);else{let q=he.width,te=he.height;for(let Ae=0;Ae<Me;Ae++)t.texImage2D(s.TEXTURE_2D,Ae,qe,q,te,0,Re,He,null),q>>=1,te>>=1}}else if(dt.length>0){if(st&&Et){const q=ye(dt[0]);t.texStorage2D(s.TEXTURE_2D,Me,qe,q.width,q.height)}for(let q=0,te=dt.length;q<te;q++)Le=dt[q],st?F&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Re,He,Le):t.texImage2D(s.TEXTURE_2D,q,qe,Re,He,Le);b.generateMipmaps=!1}else if(st){if(Et){const q=ye(he);t.texStorage2D(s.TEXTURE_2D,Me,qe,q.width,q.height)}F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,He,he)}else t.texImage2D(s.TEXTURE_2D,0,qe,Re,He,he);g(b)&&p(Z),Ue.__version=ee.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function J(C,b,H){if(b.image.length!==6)return;const Z=Pe(C,b),re=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+H);const ee=n.get(re);if(re.version!==ee.__version||Z===!0){t.activeTexture(s.TEXTURE0+H);const Ue=ot.getPrimaries(ot.workingColorSpace),pe=b.colorSpace===di?null:ot.getPrimaries(b.colorSpace),Se=b.colorSpace===di||Ue===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const at=b.isCompressedTexture||b.image[0].isCompressedTexture,he=b.image[0]&&b.image[0].isDataTexture,Re=[];for(let te=0;te<6;te++)!at&&!he?Re[te]=_(b.image[te],!0,i.maxCubemapSize):Re[te]=he?b.image[te].image:b.image[te],Re[te]=We(b,Re[te]);const He=Re[0],qe=r.convert(b.format,b.colorSpace),Le=r.convert(b.type),dt=x(b.internalFormat,qe,Le,b.colorSpace),st=b.isVideoTexture!==!0,Et=ee.__version===void 0||Z===!0,F=re.dataReady;let Me=A(b,He);xe(s.TEXTURE_CUBE_MAP,b);let q;if(at){st&&Et&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,dt,He.width,He.height);for(let te=0;te<6;te++){q=Re[te].mipmaps;for(let Ae=0;Ae<q.length;Ae++){const Te=q[Ae];b.format!==an?qe!==null?st?F&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,Te.width,Te.height,qe,Te.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,dt,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,Te.width,Te.height,qe,Le,Te.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,dt,Te.width,Te.height,0,qe,Le,Te.data)}}}else{if(q=b.mipmaps,st&&Et){q.length>0&&Me++;const te=ye(Re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,dt,te.width,te.height)}for(let te=0;te<6;te++)if(he){st?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Re[te].width,Re[te].height,qe,Le,Re[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,dt,Re[te].width,Re[te].height,0,qe,Le,Re[te].data);for(let Ae=0;Ae<q.length;Ae++){const it=q[Ae].image[te].image;st?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,it.width,it.height,qe,Le,it.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,dt,it.width,it.height,0,qe,Le,it.data)}}else{st?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,qe,Le,Re[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,dt,qe,Le,Re[te]);for(let Ae=0;Ae<q.length;Ae++){const Te=q[Ae];st?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,qe,Le,Te.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,dt,qe,Le,Te.image[te])}}}g(b)&&p(s.TEXTURE_CUBE_MAP),ee.__version=re.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function me(C,b,H,Z,re,ee){const Ue=r.convert(H.format,H.colorSpace),pe=r.convert(H.type),Se=x(H.internalFormat,Ue,pe,H.colorSpace),at=n.get(b),he=n.get(H);if(he.__renderTarget=b,!at.__hasExternalTextures){const Re=Math.max(1,b.width>>ee),He=Math.max(1,b.height>>ee);re===s.TEXTURE_3D||re===s.TEXTURE_2D_ARRAY?t.texImage3D(re,ee,Se,Re,He,b.depth,0,Ue,pe,null):t.texImage2D(re,ee,Se,Re,He,0,Ue,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),ce(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,re,he.__webglTexture,0,oe(b)):(re===s.TEXTURE_2D||re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,re,he.__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(C,b,H){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){const Z=b.depthTexture,re=Z&&Z.isDepthTexture?Z.type:null,ee=v(b.stencilBuffer,re),Ue=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=oe(b);ce(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,ee,b.width,b.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,ee,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ee,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,C)}else{const Z=b.textures;for(let re=0;re<Z.length;re++){const ee=Z[re],Ue=r.convert(ee.format,ee.colorSpace),pe=r.convert(ee.type),Se=x(ee.internalFormat,Ue,pe,ee.colorSpace),at=oe(b);H&&ce(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Se,b.width,b.height):ce(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,Se,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Se,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);const re=Z.__webglTexture,ee=oe(b);if(b.depthTexture.format===vs)ce(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(b.depthTexture.format===ws)ce(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function De(C){const b=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const re=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",re)};Z.addEventListener("dispose",re),b.__depthDisposeCallback=re}b.__boundDepthTexture=Z}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ve(b.__webglFramebuffer,C)}else if(H){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=s.createRenderbuffer(),ie(b.__webglDepthbuffer[Z],C,!1);else{const re=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ie(b.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,re)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(C,b,H){const Z=n.get(C);b!==void 0&&me(Z.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&De(C)}function Ve(C){const b=C.texture,H=n.get(C),Z=n.get(b);C.addEventListener("dispose",E);const re=C.textures,ee=C.isWebGLCubeRenderTarget===!0,Ue=re.length>1;if(Ue||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=b.version,a.memory.textures++),ee){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[pe]=[];for(let Se=0;Se<b.mipmaps.length;Se++)H.__webglFramebuffer[pe][Se]=s.createFramebuffer()}else H.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)H.__webglFramebuffer[pe]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let pe=0,Se=re.length;pe<Se;pe++){const at=n.get(re[pe]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&ce(C)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pe=0;pe<re.length;pe++){const Se=re[pe];H.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[pe]);const at=r.convert(Se.format,Se.colorSpace),he=r.convert(Se.type),Re=x(Se.internalFormat,at,he,Se.colorSpace,C.isXRRenderTarget===!0),He=oe(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,Re,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,H.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),xe(s.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Se=0;Se<b.mipmaps.length;Se++)me(H.__webglFramebuffer[pe][Se],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se);else me(H.__webglFramebuffer[pe],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(b)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let pe=0,Se=re.length;pe<Se;pe++){const at=re[pe],he=n.get(at);t.bindTexture(s.TEXTURE_2D,he.__webglTexture),xe(s.TEXTURE_2D,at),me(H.__webglFramebuffer,C,at,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),g(at)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,Z.__webglTexture),xe(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let Se=0;Se<b.mipmaps.length;Se++)me(H.__webglFramebuffer[Se],C,b,s.COLOR_ATTACHMENT0,pe,Se);else me(H.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,pe,0);g(b)&&p(pe),t.unbindTexture()}C.depthBuffer&&De(C)}function Q(C){const b=C.textures;for(let H=0,Z=b.length;H<Z;H++){const re=b[H];if(g(re)){const ee=y(C),Ue=n.get(re).__webglTexture;t.bindTexture(ee,Ue),p(ee),t.unbindTexture()}}}const le=[],I=[];function Be(C){if(C.samples>0){if(ce(C)===!1){const b=C.textures,H=C.width,Z=C.height;let re=s.COLOR_BUFFER_BIT;const ee=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=n.get(C),pe=b.length>1;if(pe)for(let Se=0;Se<b.length;Se++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Se=0;Se<b.length;Se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Se]);const at=n.get(b[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,at,0)}s.blitFramebuffer(0,0,H,Z,0,0,H,Z,re,s.NEAREST),l===!0&&(le.length=0,I.length=0,le.push(s.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(le.push(ee),I.push(ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Se=0;Se<b.length;Se++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Se]);const at=n.get(b[Se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,at,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function oe(C){return Math.min(i.maxSamples,C.samples)}function ce(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function se(C){const b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function We(C,b){const H=C.colorSpace,Z=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Es&&H!==di&&(ot.getTransfer(H)===bt?(Z!==an||re!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.setTexture2D=B,this.setTexture2DArray=L,this.setTexture3D=G,this.setTextureCube=N,this.rebindTextures=ge,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ce}function ym(s,e){function t(n,i=di){let r;const a=ot.getTransfer(i);if(n===ti)return s.UNSIGNED_BYTE;if(n===pl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return s.UNSIGNED_SHORT_5_5_5_1;if(n===fh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===uh)return s.BYTE;if(n===dh)return s.SHORT;if(n===or)return s.UNSIGNED_SHORT;if(n===fl)return s.INT;if(n===bi)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===dr)return s.HALF_FLOAT;if(n===ph)return s.ALPHA;if(n===mh)return s.RGB;if(n===an)return s.RGBA;if(n===gh)return s.LUMINANCE;if(n===_h)return s.LUMINANCE_ALPHA;if(n===vs)return s.DEPTH_COMPONENT;if(n===ws)return s.DEPTH_STENCIL;if(n===gl)return s.RED;if(n===pa)return s.RED_INTEGER;if(n===xh)return s.RG;if(n===_l)return s.RG_INTEGER;if(n===xl)return s.RGBA_INTEGER;if(n===Lr||n===Nr||n===Ur||n===Or)if(a===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lo||n===No||n===Uo||n===Oo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fo||n===Bo||n===zo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fo||n===Bo)return a===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zo)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ko||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===Yo||n===$o||n===qo||n===Zo||n===Ko||n===Jo||n===jo||n===Qo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ko)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vo)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ho)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Go)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wo)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xo)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yo)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$o)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ko)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jo)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qo)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fr||n===el||n===tl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fr)return a===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vh||n===nl||n===il||n===sl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const TS={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(TS)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const AS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Lt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xn({vertexShader:AS,fragmentShader:CS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new pr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PS extends ni{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const _=new RS,g=t.getContextAttributes();let p=null,y=null;const x=[],v=[],A=new j;let w=null;const E=new Xt;E.viewport=new mt;const D=new Xt;D.viewport=new mt;const S=[E,D],M=new lm;let R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let J=x[O];return J===void 0&&(J=new Oc,x[O]=J),J.getTargetRaySpace()},this.getControllerGrip=function(O){let J=x[O];return J===void 0&&(J=new Oc,x[O]=J),J.getGripSpace()},this.getHand=function(O){let J=x[O];return J===void 0&&(J=new Oc,x[O]=J),J.getHandSpace()};function V(O){const J=v.indexOf(O.inputSource);if(J===-1)return;const me=x[J];me!==void 0&&(me.update(O.inputSource,O.frame,c||a),me.dispatchEvent({type:O.type,data:O.inputSource}))}function U(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",B);for(let O=0;O<x.length;O++){const J=v[O];J!==null&&(v[O]=null,x[O].disconnect(J))}R=null,W=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",U),i.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){const J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Wn(f.framebufferWidth,f.framebufferHeight,{format:an,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,me=null,ie=null;g.depth&&(ie=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?ws:vs,me=g.stencil?Ss:bi);const ve={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ve),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Wn(d.textureWidth,d.textureHeight,{format:an,type:ti,depthTexture:new Ph(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Pe.setContext(i),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(O){for(let J=0;J<O.removed.length;J++){const me=O.removed[J],ie=v.indexOf(me);ie>=0&&(v[ie]=null,x[ie].disconnect(me))}for(let J=0;J<O.added.length;J++){const me=O.added[J];let ie=v.indexOf(me);if(ie===-1){for(let De=0;De<x.length;De++)if(De>=v.length){v.push(me),ie=De;break}else if(v[De]===null){v[De]=me,ie=De;break}if(ie===-1)break}const ve=x[ie];ve&&ve.connect(me)}}const L=new P,G=new P;function N(O,J,me){L.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(me.matrixWorld);const ie=L.distanceTo(G),ve=J.projectionMatrix.elements,De=me.projectionMatrix.elements,ge=ve[14]/(ve[10]-1),Ve=ve[14]/(ve[10]+1),Q=(ve[9]+1)/ve[5],le=(ve[9]-1)/ve[5],I=(ve[8]-1)/ve[0],Be=(De[8]+1)/De[0],oe=ge*I,ce=ge*Be,se=ie/(-I+Be),We=se*-I;if(J.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(We),O.translateZ(se),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),ve[10]===-1)O.projectionMatrix.copy(J.projectionMatrix),O.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ye=ge+se,C=Ve+se,b=oe-We,H=ce+(ie-We),Z=Q*Ve/C*ye,re=le*Ve/C*ye;O.projectionMatrix.makePerspective(b,H,Z,re,ye,C),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function $(O,J){J===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(J.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;let J=O.near,me=O.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(me=_.depthFar)),M.near=D.near=E.near=J,M.far=D.far=E.far=me,(R!==M.near||W!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,W=M.far),E.layers.mask=O.layers.mask|2,D.layers.mask=O.layers.mask|4,M.layers.mask=E.layers.mask|D.layers.mask;const ie=O.parent,ve=M.cameras;$(M,ie);for(let De=0;De<ve.length;De++)$(ve[De],ie);ve.length===2?N(M,E,D):M.projectionMatrix.copy(E.projectionMatrix),K(O,M,ie)};function K(O,J,me){me===null?O.matrix.copy(J.matrixWorld):(O.matrix.copy(me.matrixWorld),O.matrix.invert(),O.matrix.multiply(J.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(J.projectionMatrix),O.projectionMatrixInverse.copy(J.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=lr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ae=null;function xe(O,J){if(h=J.getViewerPose(c||a),m=J,h!==null){const me=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ie=!1;me.length!==M.cameras.length&&(M.cameras.length=0,ie=!0);for(let De=0;De<me.length;De++){const ge=me[De];let Ve=null;if(f!==null)Ve=f.getViewport(ge);else{const le=u.getViewSubImage(d,ge);Ve=le.viewport,De===0&&(e.setRenderTargetTextures(y,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(y))}let Q=S[De];Q===void 0&&(Q=new Xt,Q.layers.enable(De),Q.viewport=new mt,S[De]=Q),Q.matrix.fromArray(ge.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ge.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),De===0&&(M.matrix.copy(Q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ie===!0&&M.cameras.push(Q)}const ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const De=u.getDepthInformation(me[0]);De&&De.isValid&&De.texture&&_.init(e,De,i.renderState)}}for(let me=0;me<x.length;me++){const ie=v[me],ve=x[me];ie!==null&&ve!==void 0&&ve.update(ie,J,c||a)}ae&&ae(O,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const Pe=new mm;Pe.setAnimationLoop(xe),this.setAnimationLoop=function(O){ae=O},this.dispose=function(){}}}const ls=new Tn,IS=new $e;function DS(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,mp(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,v=y.envMapRotation;x&&(g.envMap.value=x,ls.copy(v),ls.x*=-1,ls.y*=-1,ls.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),g.envMapRotation.value.setFromMatrix4(IS.makeRotationFromEuler(ls)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function LS(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(m(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",g));const A=x.program;n.updateUBOMapping(y,A);const w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){const x=u();y.__bindingPointIndex=x;const v=s.createBuffer(),A=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],v=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,E=v.length;w<E;w++){const D=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,M=D.length;S<M;S++){const R=D[S];if(f(R,w,S,A)===!0){const W=R.__offset,V=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let B=0;B<V.length;B++){const L=V[B],G=_(L);typeof L=="number"||typeof L=="boolean"?(R.__data[0]=L,s.bufferSubData(s.UNIFORM_BUFFER,W+U,R.__data)):L.isMatrix3?(R.__data[0]=L.elements[0],R.__data[1]=L.elements[1],R.__data[2]=L.elements[2],R.__data[3]=0,R.__data[4]=L.elements[3],R.__data[5]=L.elements[4],R.__data[6]=L.elements[5],R.__data[7]=0,R.__data[8]=L.elements[6],R.__data[9]=L.elements[7],R.__data[10]=L.elements[8],R.__data[11]=0):(L.toArray(R.__data,U),U+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,v,A){const w=y.value,E=x+"_"+v;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const D=A[E];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return A[E]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function m(y){const x=y.uniforms;let v=0;const A=16;for(let E=0,D=x.length;E<D;E++){const S=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,R=S.length;M<R;M++){const W=S[M],V=Array.isArray(W.value)?W.value:[W.value];for(let U=0,B=V.length;U<B;U++){const L=V[U],G=_(L),N=v%A,$=N%G.boundary,K=N+$;v+=$,K!==0&&A-K<G.storage&&(v+=A-K),W.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=G.storage}}}const w=v%A;return w>0&&(v+=A-w),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Mm{constructor(e={}){const{canvas:t=up(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=gi,this.toneMappingExposure=1;const v=this;let A=!1,w=0,E=0,D=null,S=-1,M=null;const R=new mt,W=new mt;let V=null;const U=new Ce(0);let B=0,L=t.width,G=t.height,N=1,$=null,K=null;const ae=new mt(0,0,L,G),xe=new mt(0,0,L,G);let Pe=!1;const O=new ga;let J=!1,me=!1;const ie=new $e,ve=new $e,De=new P,ge=new mt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function le(){return D===null?N:1}let I=n;function Be(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Te,!1),I===null){const z="webgl2";if(I=Be(z,T),I===null)throw Be(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let oe,ce,se,We,ye,C,b,H,Z,re,ee,Ue,pe,Se,at,he,Re,He,qe,Le,dt,st,Et,F;function Me(){oe=new WM(I),oe.init(),st=new ym(I,oe),ce=new BM(I,oe,e,st),se=new wS(I,oe),ce.reverseDepthBuffer&&d&&se.buffers.depth.setReversed(!0),We=new $M(I),ye=new uS,C=new ES(I,oe,se,ye,ce,st,We),b=new kM(v),H=new GM(v),Z=new ev(I),Et=new OM(I,Z),re=new XM(I,Z,We,Et),ee=new ZM(I,re,Z,We),qe=new qM(I,ce,C),he=new zM(ye),Ue=new hS(v,b,H,oe,ce,Et,he),pe=new DS(v,ye),Se=new fS,at=new vS(oe),He=new UM(v,b,H,se,ee,f,l),Re=new bS(v,ee,ce),F=new LS(I,We,ce,se),Le=new FM(I,oe,We),dt=new YM(I,oe,We),We.programs=Ue.programs,v.capabilities=ce,v.extensions=oe,v.properties=ye,v.renderLists=Se,v.shadowMap=Re,v.state=se,v.info=We}Me();const q=new PS(v,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize(L,G,!1))},this.getSize=function(T){return T.set(L,G)},this.setSize=function(T,z,X=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,G=z,t.width=Math.floor(T*N),t.height=Math.floor(z*N),X===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(L*N,G*N).floor()},this.setDrawingBufferSize=function(T,z,X){L=T,G=z,N=X,t.width=Math.floor(T*X),t.height=Math.floor(z*X),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,z,X,Y){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,z,X,Y),se.viewport(R.copy(ae).multiplyScalar(N).round())},this.getScissor=function(T){return T.copy(xe)},this.setScissor=function(T,z,X,Y){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,z,X,Y),se.scissor(W.copy(xe).multiplyScalar(N).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(T){se.setScissorTest(Pe=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(T=!0,z=!0,X=!0){let Y=0;if(T){let k=!1;if(D!==null){const ue=D.texture.format;k=ue===xl||ue===_l||ue===pa}if(k){const ue=D.texture.type,be=ue===ti||ue===bi||ue===or||ue===Ss||ue===pl||ue===ml,Ie=He.getClearColor(),Fe=He.getClearAlpha(),Ze=Ie.r,Ke=Ie.g,Ge=Ie.b;be?(m[0]=Ze,m[1]=Ke,m[2]=Ge,m[3]=Fe,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Ze,_[1]=Ke,_[2]=Ge,_[3]=Fe,I.clearBufferiv(I.COLOR,0,_))}else Y|=I.COLOR_BUFFER_BIT}z&&(Y|=I.DEPTH_BUFFER_BIT),X&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),He.dispose(),Se.dispose(),at.dispose(),ye.dispose(),b.dispose(),H.dispose(),ee.dispose(),Et.dispose(),F.dispose(),Ue.dispose(),q.dispose(),q.removeEventListener("sessionstart",tu),q.removeEventListener("sessionend",nu),qi.stop()};function te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=We.autoReset,z=Re.enabled,X=Re.autoUpdate,Y=Re.needsUpdate,k=Re.type;Me(),We.autoReset=T,Re.enabled=z,Re.autoUpdate=X,Re.needsUpdate=Y,Re.type=k}function Te(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function it(T){const z=T.target;z.removeEventListener("dispose",it),Rt(z)}function Rt(T){qt(T),ye.remove(T)}function qt(T){const z=ye.get(T).programs;z!==void 0&&(z.forEach(function(X){Ue.releaseProgram(X)}),T.isShaderMaterial&&Ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,X,Y,k,ue){z===null&&(z=Ve);const be=k.isMesh&&k.matrixWorld.determinant()<0,Ie=Um(T,z,X,Y,k);se.setMaterial(Y,be);let Fe=X.index,Ze=1;if(Y.wireframe===!0){if(Fe=re.getWireframeAttribute(X),Fe===void 0)return;Ze=2}const Ke=X.drawRange,Ge=X.attributes.position;let ft=Ke.start*Ze,xt=(Ke.start+Ke.count)*Ze;ue!==null&&(ft=Math.max(ft,ue.start*Ze),xt=Math.min(xt,(ue.start+ue.count)*Ze)),Fe!==null?(ft=Math.max(ft,0),xt=Math.min(xt,Fe.count)):Ge!=null&&(ft=Math.max(ft,0),xt=Math.min(xt,Ge.count));const Ot=xt-ft;if(Ot<0||Ot===1/0)return;Et.setup(k,Y,Ie,X,Fe);let Pt,_t=Le;if(Fe!==null&&(Pt=Z.get(Fe),_t=dt,_t.setIndex(Pt)),k.isMesh)Y.wireframe===!0?(se.setLineWidth(Y.wireframeLinewidth*le()),_t.setMode(I.LINES)):_t.setMode(I.TRIANGLES);else if(k.isLine){let Xe=Y.linewidth;Xe===void 0&&(Xe=1),se.setLineWidth(Xe*le()),k.isLineSegments?_t.setMode(I.LINES):k.isLineLoop?_t.setMode(I.LINE_LOOP):_t.setMode(I.LINE_STRIP)}else k.isPoints?_t.setMode(I.POINTS):k.isSprite&&_t.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)_t.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))_t.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Xe=k._multiDrawStarts,Yt=k._multiDrawCounts,vt=k._multiDrawCount,Fn=Fe?Z.get(Fe).bytesPerElement:1,Ls=ye.get(Y).currentProgram.getUniforms();for(let Mn=0;Mn<vt;Mn++)Ls.setValue(I,"_gl_DrawID",Mn),_t.render(Xe[Mn]/Fn,Yt[Mn])}else if(k.isInstancedMesh)_t.renderInstances(ft,Ot,k.count);else if(X.isInstancedBufferGeometry){const Xe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Yt=Math.min(X.instanceCount,Xe);_t.renderInstances(ft,Ot,Yt)}else _t.render(ft,Ot)};function Mt(T,z,X){T.transparent===!0&&T.side===Zn&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,wa(T,z,X),T.side=yi,T.needsUpdate=!0,wa(T,z,X),T.side=Zn):wa(T,z,X)}this.compile=function(T,z,X=null){X===null&&(X=T),p=at.get(X),p.init(z),x.push(p),X.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==X&&T.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const Y=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ue=k.material;if(ue)if(Array.isArray(ue))for(let be=0;be<ue.length;be++){const Ie=ue[be];Mt(Ie,X,k),Y.add(Ie)}else Mt(ue,X,k),Y.add(ue)}),x.pop(),p=null,Y},this.compileAsync=function(T,z,X=null){const Y=this.compile(T,z,X);return new Promise(k=>{function ue(){if(Y.forEach(function(be){ye.get(be).currentProgram.isReady()&&Y.delete(be)}),Y.size===0){k(T);return}setTimeout(ue,10)}oe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let On=null;function si(T){On&&On(T)}function tu(){qi.stop()}function nu(){qi.start()}const qi=new mm;qi.setAnimationLoop(si),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(T){On=T,q.setAnimationLoop(T),T===null?qi.stop():qi.start()},q.addEventListener("sessionstart",tu),q.addEventListener("sessionend",nu),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(z),z=q.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,z,D),p=at.get(T,x.length),p.init(z),x.push(p),ve.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),O.setFromProjectionMatrix(ve),me=this.localClippingEnabled,J=he.init(this.clippingPlanes,me),g=Se.get(T,y.length),g.init(),y.push(g),q.enabled===!0&&q.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&$l(ue,z,-1/0,v.sortObjects)}$l(T,z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort($,K),Q=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Q&&He.addToRenderList(g,T),this.info.render.frame++,J===!0&&he.beginShadows();const X=p.state.shadowsArray;Re.render(X,T,z),J===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,k=g.transmissive;if(p.setupLights(),z.isArrayCamera){const ue=z.cameras;if(k.length>0)for(let be=0,Ie=ue.length;be<Ie;be++){const Fe=ue[be];su(Y,k,T,Fe)}Q&&He.render(T);for(let be=0,Ie=ue.length;be<Ie;be++){const Fe=ue[be];iu(g,T,Fe,Fe.viewport)}}else k.length>0&&su(Y,k,T,z),Q&&He.render(T),iu(g,T,z);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(v,T,z),Et.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],J===!0&&he.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function $l(T,z,X,Y){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||O.intersectsSprite(T)){Y&&ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ve);const be=ee.update(T),Ie=T.material;Ie.visible&&g.push(T,be,Ie,X,ge.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||O.intersectsObject(T))){const be=ee.update(T),Ie=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ge.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ge.copy(be.boundingSphere.center)),ge.applyMatrix4(T.matrixWorld).applyMatrix4(ve)),Array.isArray(Ie)){const Fe=be.groups;for(let Ze=0,Ke=Fe.length;Ze<Ke;Ze++){const Ge=Fe[Ze],ft=Ie[Ge.materialIndex];ft&&ft.visible&&g.push(T,be,ft,X,ge.z,Ge)}}else Ie.visible&&g.push(T,be,Ie,X,ge.z,null)}}const ue=T.children;for(let be=0,Ie=ue.length;be<Ie;be++)$l(ue[be],z,X,Y)}function iu(T,z,X,Y){const k=T.opaque,ue=T.transmissive,be=T.transparent;p.setupLightsView(X),J===!0&&he.setGlobalState(v.clippingPlanes,X),Y&&se.viewport(R.copy(Y)),k.length>0&&Sa(k,z,X),ue.length>0&&Sa(ue,z,X),be.length>0&&Sa(be,z,X),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function su(T,z,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Wn(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?dr:ti,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const ue=p.state.transmissionRenderTarget[Y.id],be=Y.viewport||R;ue.setSize(be.z,be.w);const Ie=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(U),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),Q&&He.render(X);const Fe=v.toneMapping;v.toneMapping=gi;const Ze=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),J===!0&&he.setGlobalState(v.clippingPlanes,Y),Sa(T,X,Y),C.updateMultisampleRenderTarget(ue),C.updateRenderTargetMipmap(ue),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ge=0,ft=z.length;Ge<ft;Ge++){const xt=z[Ge],Ot=xt.object,Pt=xt.geometry,_t=xt.material,Xe=xt.group;if(_t.side===Zn&&Ot.layers.test(Y.layers)){const Yt=_t.side;_t.side=on,_t.needsUpdate=!0,ru(Ot,X,Y,Pt,_t,Xe),_t.side=Yt,_t.needsUpdate=!0,Ke=!0}}Ke===!0&&(C.updateMultisampleRenderTarget(ue),C.updateRenderTargetMipmap(ue))}v.setRenderTarget(Ie),v.setClearColor(U,B),Ze!==void 0&&(Y.viewport=Ze),v.toneMapping=Fe}function Sa(T,z,X){const Y=z.isScene===!0?z.overrideMaterial:null;for(let k=0,ue=T.length;k<ue;k++){const be=T[k],Ie=be.object,Fe=be.geometry,Ze=Y===null?be.material:Y,Ke=be.group;Ie.layers.test(X.layers)&&ru(Ie,z,X,Fe,Ze,Ke)}}function ru(T,z,X,Y,k,ue){T.onBeforeRender(v,z,X,Y,k,ue),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,z,X,Y,T,ue),k.transparent===!0&&k.side===Zn&&k.forceSinglePass===!1?(k.side=on,k.needsUpdate=!0,v.renderBufferDirect(X,z,Y,k,T,ue),k.side=yi,k.needsUpdate=!0,v.renderBufferDirect(X,z,Y,k,T,ue),k.side=Zn):v.renderBufferDirect(X,z,Y,k,T,ue),T.onAfterRender(v,z,X,Y,k,ue)}function wa(T,z,X){z.isScene!==!0&&(z=Ve);const Y=ye.get(T),k=p.state.lights,ue=p.state.shadowsArray,be=k.state.version,Ie=Ue.getParameters(T,k.state,ue,z,X),Fe=Ue.getProgramCacheKey(Ie);let Ze=Y.programs;Y.environment=T.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(T.isMeshStandardMaterial?H:b).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Ze===void 0&&(T.addEventListener("dispose",it),Ze=new Map,Y.programs=Ze);let Ke=Ze.get(Fe);if(Ke!==void 0){if(Y.currentProgram===Ke&&Y.lightsStateVersion===be)return ou(T,Ie),Ke}else Ie.uniforms=Ue.getUniforms(T),T.onBeforeCompile(Ie,v),Ke=Ue.acquireProgram(Ie,Fe),Ze.set(Fe,Ke),Y.uniforms=Ie.uniforms;const Ge=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=he.uniform),ou(T,Ie),Y.needsLights=Fm(T),Y.lightsStateVersion=be,Y.needsLights&&(Ge.ambientLightColor.value=k.state.ambient,Ge.lightProbe.value=k.state.probe,Ge.directionalLights.value=k.state.directional,Ge.directionalLightShadows.value=k.state.directionalShadow,Ge.spotLights.value=k.state.spot,Ge.spotLightShadows.value=k.state.spotShadow,Ge.rectAreaLights.value=k.state.rectArea,Ge.ltc_1.value=k.state.rectAreaLTC1,Ge.ltc_2.value=k.state.rectAreaLTC2,Ge.pointLights.value=k.state.point,Ge.pointLightShadows.value=k.state.pointShadow,Ge.hemisphereLights.value=k.state.hemi,Ge.directionalShadowMap.value=k.state.directionalShadowMap,Ge.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ge.spotShadowMap.value=k.state.spotShadowMap,Ge.spotLightMatrix.value=k.state.spotLightMatrix,Ge.spotLightMap.value=k.state.spotLightMap,Ge.pointShadowMap.value=k.state.pointShadowMap,Ge.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Ke,Y.uniformsList=null,Ke}function au(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=bo.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function ou(T,z){const X=ye.get(T);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Um(T,z,X,Y,k){z.isScene!==!0&&(z=Ve),C.resetTextureUnits();const ue=z.fog,be=Y.isMeshStandardMaterial?z.environment:null,Ie=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Es,Fe=(Y.isMeshStandardMaterial?H:b).get(Y.envMap||be),Ze=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ke=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ge=!!X.morphAttributes.position,ft=!!X.morphAttributes.normal,xt=!!X.morphAttributes.color;let Ot=gi;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ot=v.toneMapping);const Pt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_t=Pt!==void 0?Pt.length:0,Xe=ye.get(Y),Yt=p.state.lights;if(J===!0&&(me===!0||T!==M)){const tn=T===M&&Y.id===S;he.setState(Y,T,tn)}let vt=!1;Y.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Yt.state.version||Xe.outputColorSpace!==Ie||k.isBatchedMesh&&Xe.batching===!1||!k.isBatchedMesh&&Xe.batching===!0||k.isBatchedMesh&&Xe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Xe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Xe.instancing===!1||!k.isInstancedMesh&&Xe.instancing===!0||k.isSkinnedMesh&&Xe.skinning===!1||!k.isSkinnedMesh&&Xe.skinning===!0||k.isInstancedMesh&&Xe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Xe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Xe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Xe.instancingMorph===!1&&k.morphTexture!==null||Xe.envMap!==Fe||Y.fog===!0&&Xe.fog!==ue||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==he.numPlanes||Xe.numIntersection!==he.numIntersection)||Xe.vertexAlphas!==Ze||Xe.vertexTangents!==Ke||Xe.morphTargets!==Ge||Xe.morphNormals!==ft||Xe.morphColors!==xt||Xe.toneMapping!==Ot||Xe.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,Xe.__version=Y.version);let Fn=Xe.currentProgram;vt===!0&&(Fn=wa(Y,z,k));let Ls=!1,Mn=!1,_r=!1;const Tt=Fn.getUniforms(),Cn=Xe.uniforms;if(se.useProgram(Fn.program)&&(Ls=!0,Mn=!0,_r=!0),Y.id!==S&&(S=Y.id,Mn=!0),Ls||M!==T){se.buffers.depth.getReversed()?(ie.copy(T.projectionMatrix),T_(ie),A_(ie),Tt.setValue(I,"projectionMatrix",ie)):Tt.setValue(I,"projectionMatrix",T.projectionMatrix),Tt.setValue(I,"viewMatrix",T.matrixWorldInverse);const fn=Tt.map.cameraPosition;fn!==void 0&&fn.setValue(I,De.setFromMatrixPosition(T.matrixWorld)),ce.logarithmicDepthBuffer&&Tt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Tt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Mn=!0,_r=!0)}if(k.isSkinnedMesh){Tt.setOptional(I,k,"bindMatrix"),Tt.setOptional(I,k,"bindMatrixInverse");const tn=k.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Tt.setValue(I,"boneTexture",tn.boneTexture,C))}k.isBatchedMesh&&(Tt.setOptional(I,k,"batchingTexture"),Tt.setValue(I,"batchingTexture",k._matricesTexture,C),Tt.setOptional(I,k,"batchingIdTexture"),Tt.setValue(I,"batchingIdTexture",k._indirectTexture,C),Tt.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&Tt.setValue(I,"batchingColorTexture",k._colorsTexture,C));const Rn=X.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&qe.update(k,X,Fn),(Mn||Xe.receiveShadow!==k.receiveShadow)&&(Xe.receiveShadow=k.receiveShadow,Tt.setValue(I,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Cn.envMap.value=Fe,Cn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(Cn.envMapIntensity.value=z.environmentIntensity),Mn&&(Tt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&Om(Cn,_r),ue&&Y.fog===!0&&pe.refreshFogUniforms(Cn,ue),pe.refreshMaterialUniforms(Cn,Y,N,G,p.state.transmissionRenderTarget[T.id]),bo.upload(I,au(Xe),Cn,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(bo.upload(I,au(Xe),Cn,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Tt.setValue(I,"center",k.center),Tt.setValue(I,"modelViewMatrix",k.modelViewMatrix),Tt.setValue(I,"normalMatrix",k.normalMatrix),Tt.setValue(I,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const tn=Y.uniformsGroups;for(let fn=0,ql=tn.length;fn<ql;fn++){const Zi=tn[fn];F.update(Zi,Fn),F.bind(Zi,Fn)}}return Fn}function Om(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Fm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,z,X){ye.get(T.texture).__webglTexture=z,ye.get(T.depthTexture).__webglTexture=X;const Y=ye.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const X=ye.get(T);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,X=0){D=T,w=z,E=X;let Y=!0,k=null,ue=!1,be=!1;if(T){const Fe=ye.get(T);if(Fe.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(Fe.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Fe.__hasExternalTextures)C.rebindTextures(T,ye.get(T.texture).__webglTexture,ye.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ge=T.depthTexture;if(Fe.__boundDepthTexture!==Ge){if(Ge!==null&&ye.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const Ze=T.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(be=!0);const Ke=ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[z])?k=Ke[z][X]:k=Ke[z],ue=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?k=ye.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?k=Ke[X]:k=Ke,R.copy(T.viewport),W.copy(T.scissor),V=T.scissorTest}else R.copy(ae).multiplyScalar(N).floor(),W.copy(xe).multiplyScalar(N).floor(),V=Pe;if(se.bindFramebuffer(I.FRAMEBUFFER,k)&&Y&&se.drawBuffers(T,k),se.viewport(R),se.scissor(W),se.setScissorTest(V),ue){const Fe=ye.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Fe.__webglTexture,X)}else if(be){const Fe=ye.get(T.texture),Ze=z||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.__webglTexture,X||0,Ze)}S=-1},this.readRenderTargetPixels=function(T,z,X,Y,k,ue,be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){se.bindFramebuffer(I.FRAMEBUFFER,Ie);try{const Fe=T.texture,Ze=Fe.format,Ke=Fe.type;if(!ce.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-Y&&X>=0&&X<=T.height-k&&I.readPixels(z,X,Y,k,st.convert(Ze),st.convert(Ke),ue)}finally{const Fe=D!==null?ye.get(D).__webglFramebuffer:null;se.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,z,X,Y,k,ue,be){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){const Fe=T.texture,Ze=Fe.format,Ke=Fe.type;if(!ce.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-Y&&X>=0&&X<=T.height-k){se.bindFramebuffer(I.FRAMEBUFFER,Ie);const Ge=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ge),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),I.readPixels(z,X,Y,k,st.convert(Ze),st.convert(Ke),0);const ft=D!==null?ye.get(D).__webglFramebuffer:null;se.bindFramebuffer(I.FRAMEBUFFER,ft);const xt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await E_(I,xt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ge),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue),I.deleteBuffer(Ge),I.deleteSync(xt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,X=0){T.isTexture!==!0&&(js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const Y=Math.pow(2,-X),k=Math.floor(T.image.width*Y),ue=Math.floor(T.image.height*Y),be=z!==null?z.x:0,Ie=z!==null?z.y:0;C.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,be,Ie,k,ue),se.unbindTexture()};const Bm=I.createFramebuffer(),zm=I.createFramebuffer();this.copyTextureToTexture=function(T,z,X=null,Y=null,k=0,ue=null){T.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],z=arguments[2],ue=arguments[3]||0,X=null),ue===null&&(k!==0?(js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=k,k=0):ue=0);let be,Ie,Fe,Ze,Ke,Ge,ft,xt,Ot;const Pt=T.isCompressedTexture?T.mipmaps[ue]:T.image;if(X!==null)be=X.max.x-X.min.x,Ie=X.max.y-X.min.y,Fe=X.isBox3?X.max.z-X.min.z:1,Ze=X.min.x,Ke=X.min.y,Ge=X.isBox3?X.min.z:0;else{const Rn=Math.pow(2,-k);be=Math.floor(Pt.width*Rn),Ie=Math.floor(Pt.height*Rn),T.isDataArrayTexture?Fe=Pt.depth:T.isData3DTexture?Fe=Math.floor(Pt.depth*Rn):Fe=1,Ze=0,Ke=0,Ge=0}Y!==null?(ft=Y.x,xt=Y.y,Ot=Y.z):(ft=0,xt=0,Ot=0);const _t=st.convert(z.format),Xe=st.convert(z.type);let Yt;z.isData3DTexture?(C.setTexture3D(z,0),Yt=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(C.setTexture2DArray(z,0),Yt=I.TEXTURE_2D_ARRAY):(C.setTexture2D(z,0),Yt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const vt=I.getParameter(I.UNPACK_ROW_LENGTH),Fn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ls=I.getParameter(I.UNPACK_SKIP_PIXELS),Mn=I.getParameter(I.UNPACK_SKIP_ROWS),_r=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge);const Tt=T.isDataArrayTexture||T.isData3DTexture,Cn=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const Rn=ye.get(T),tn=ye.get(z),fn=ye.get(Rn.__renderTarget),ql=ye.get(tn.__renderTarget);se.bindFramebuffer(I.READ_FRAMEBUFFER,fn.__webglFramebuffer),se.bindFramebuffer(I.DRAW_FRAMEBUFFER,ql.__webglFramebuffer);for(let Zi=0;Zi<Fe;Zi++)Tt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.get(T).__webglTexture,k,Ge+Zi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.get(z).__webglTexture,ue,Ot+Zi)),I.blitFramebuffer(Ze,Ke,be,Ie,ft,xt,be,Ie,I.DEPTH_BUFFER_BIT,I.NEAREST);se.bindFramebuffer(I.READ_FRAMEBUFFER,null),se.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||ye.has(T)){const Rn=ye.get(T),tn=ye.get(z);se.bindFramebuffer(I.READ_FRAMEBUFFER,Bm),se.bindFramebuffer(I.DRAW_FRAMEBUFFER,zm);for(let fn=0;fn<Fe;fn++)Tt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rn.__webglTexture,k,Ge+fn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rn.__webglTexture,k),Cn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,tn.__webglTexture,ue,Ot+fn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,tn.__webglTexture,ue),k!==0?I.blitFramebuffer(Ze,Ke,be,Ie,ft,xt,be,Ie,I.COLOR_BUFFER_BIT,I.NEAREST):Cn?I.copyTexSubImage3D(Yt,ue,ft,xt,Ot+fn,Ze,Ke,be,Ie):I.copyTexSubImage2D(Yt,ue,ft,xt,Ze,Ke,be,Ie);se.bindFramebuffer(I.READ_FRAMEBUFFER,null),se.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Cn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Yt,ue,ft,xt,Ot,be,Ie,Fe,_t,Xe,Pt.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(Yt,ue,ft,xt,Ot,be,Ie,Fe,_t,Pt.data):I.texSubImage3D(Yt,ue,ft,xt,Ot,be,Ie,Fe,_t,Xe,Pt):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ue,ft,xt,be,Ie,_t,Xe,Pt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ue,ft,xt,Pt.width,Pt.height,_t,Pt.data):I.texSubImage2D(I.TEXTURE_2D,ue,ft,xt,be,Ie,_t,Xe,Pt);I.pixelStorei(I.UNPACK_ROW_LENGTH,vt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Fn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ls),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,_r),ue===0&&z.generateMipmaps&&I.generateMipmap(Yt),se.unbindTexture()},this.copyTextureToTexture3D=function(T,z,X=null,Y=null,k=0){return T.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],z=arguments[3],k=arguments[4]||0),js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,X,Y,k)},this.initRenderTarget=function(T){ye.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),se.unbindTexture()},this.resetState=function(){w=0,E=0,D=null,se.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const NS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:ch,AddEquation:Li,AddOperation:Hf,AdditiveAnimationBlendMode:yh,AdditiveBlending:kc,AgXToneMapping:$f,AlphaFormat:ph,AlwaysCompare:lp,AlwaysDepth:Ao,AlwaysStencilFunc:Wc,AmbientLight:nm,AnimationAction:dm,AnimationClip:sa,AnimationLoader:Z0,AnimationMixer:wx,AnimationObjectGroup:bx,AnimationUtils:X0,ArcCurve:Ap,ArrayCamera:lm,ArrowHelper:Xx,AttachedBindMode:Gc,Audio:hm,AudioAnalyser:dx,AudioContext:Xh,AudioListener:cx,AudioLoader:ax,AxesHelper:Yx,BackSide:on,BasicDepthPacking:Qf,BasicShadowMap:Cg,BatchedMesh:wp,Bone:Ch,BooleanKeyframeTrack:Is,Box2:Ix,Box3:ln,Box3Helper:Gx,BoxGeometry:Ps,BoxHelper:Hx,BufferAttribute:wt,BufferGeometry:nt,BufferGeometryLoader:om,ByteType:uh,Cache:pi,Camera:bl,CameraHelper:Vx,CanvasTexture:m0,CapsuleGeometry:Rl,CatmullRomCurve3:Cp,CineonToneMapping:Xf,CircleGeometry:Pl,ClampToEdgeWrapping:Dn,Clock:cm,Color:Ce,ColorKeyframeTrack:Hh,ColorManagement:ot,CompressedArrayTexture:f0,CompressedCubeTexture:p0,CompressedTexture:Al,CompressedTextureLoader:K0,ConeGeometry:Il,ConstantAlphaFactor:zf,ConstantColorFactor:Ff,Controls:pm,CubeCamera:_p,CubeReflectionMapping:Mi,CubeRefractionMapping:Bi,CubeTexture:ma,CubeTextureLoader:J0,CubeUVReflectionMapping:ur,CubicBezierCurve:Dh,CubicBezierCurve3:Rp,CubicInterpolant:qp,CullFaceBack:zc,CullFaceFront:bf,CullFaceFrontBack:Ag,CullFaceNone:Mf,Curve:Yn,CurvePath:Ip,CustomBlending:Sf,CustomToneMapping:Yf,CylinderGeometry:fr,Cylindrical:Px,Data3DTexture:Sh,DataArrayTexture:yl,DataTexture:Qn,DataTextureLoader:j0,DataUtils:H_,DecrementStencilOp:Hg,DecrementWrapStencilOp:Wg,DefaultLoadingManager:Jp,DepthFormat:vs,DepthStencilFormat:ws,DepthTexture:Ph,DetachedBindMode:Zf,DirectionalLight:tm,DirectionalLightHelper:kx,DiscreteInterpolant:Zp,DodecahedronGeometry:Dl,DoubleSide:Zn,DstAlphaFactor:Df,DstColorFactor:Nf,DynamicCopyUsage:r_,DynamicDrawUsage:Qg,DynamicReadUsage:n_,EdgesGeometry:Dp,EllipseCurve:Cl,EqualCompare:sp,EqualDepth:Ro,EqualStencilFunc:qg,EquirectangularReflectionMapping:Hr,EquirectangularRefractionMapping:Gr,Euler:Tn,EventDispatcher:ni,ExtrudeGeometry:Nl,FileLoader:Si,Float16BufferAttribute:q_,Float32BufferAttribute:Ne,FloatType:vn,Fog:wl,FogExp2:Sl,FramebufferTexture:d0,FrontSide:yi,Frustum:ga,GLBufferAttribute:Cx,GLSL1:o_,GLSL3:Xc,GreaterCompare:rp,GreaterDepth:Io,GreaterEqualCompare:op,GreaterEqualDepth:Po,GreaterEqualStencilFunc:jg,GreaterStencilFunc:Kg,GridHelper:Bx,Group:tr,HalfFloatType:dr,HemisphereLight:jp,HemisphereLightHelper:Fx,IcosahedronGeometry:Ul,ImageBitmapLoader:rx,ImageLoader:ra,ImageUtils:dp,IncrementStencilOp:Vg,IncrementWrapStencilOp:Gg,InstancedBufferAttribute:hr,InstancedBufferGeometry:am,InstancedInterleavedBuffer:Ax,InstancedMesh:Sp,Int16BufferAttribute:Y_,Int32BufferAttribute:$_,Int8BufferAttribute:G_,IntType:fl,InterleavedBuffer:El,InterleavedBufferAttribute:Ts,Interpolant:ya,InterpolateDiscrete:Yr,InterpolateLinear:rl,InterpolateSmooth:Mo,InvertStencilOp:Xg,KeepStencilOp:cs,KeyframeTrack:$n,LOD:Mp,LatheGeometry:_a,Layers:Ml,LessCompare:ip,LessDepth:Co,LessEqualCompare:Mh,LessEqualDepth:bs,LessEqualStencilFunc:Zg,LessStencilFunc:$g,Light:$i,LightProbe:rm,Line:zi,Line3:Dx,LineBasicMaterial:dn,LineCurve:Lh,LineCurve3:Pp,LineDashedMaterial:Xp,LineLoop:Ep,LineSegments:ii,LinearFilter:Vt,LinearInterpolant:Vh,LinearMipMapLinearFilter:Dg,LinearMipMapNearestFilter:Ig,LinearMipmapLinearFilter:Kn,LinearMipmapNearestFilter:Dr,LinearSRGBColorSpace:Es,LinearToneMapping:Gf,LinearTransfer:qr,Loader:yn,LoaderUtils:Kc,LoadingManager:Gh,LoopOnce:Kf,LoopPingPong:jf,LoopRepeat:Jf,LuminanceAlphaFormat:_h,LuminanceFormat:gh,MOUSE:_s,Material:en,MaterialLoader:Hl,MathUtils:cp,Matrix2:Zh,Matrix3:je,Matrix4:$e,MaxEquation:Af,Mesh:Ut,MeshBasicMaterial:Xi,MeshDepthMaterial:Bh,MeshDistanceMaterial:zh,MeshLambertMaterial:Gp,MeshMatcapMaterial:Wp,MeshNormalMaterial:Hp,MeshPhongMaterial:kp,MeshPhysicalMaterial:zp,MeshStandardMaterial:Fh,MeshToonMaterial:Vp,MinEquation:Tf,MirroredRepeatWrapping:Xr,MixOperation:Vf,MultiplyBlending:Hc,MultiplyOperation:fa,NearestFilter:$t,NearestMipMapLinearFilter:Pg,NearestMipMapNearestFilter:Rg,NearestMipmapLinearFilter:Qs,NearestMipmapNearestFilter:hh,NeutralToneMapping:qf,NeverCompare:np,NeverDepth:To,NeverStencilFunc:Yg,NoBlending:mi,NoColorSpace:di,NoToneMapping:gi,NormalAnimationBlendMode:vl,NormalBlending:xs,NotEqualCompare:ap,NotEqualDepth:Do,NotEqualStencilFunc:Jg,NumberKeyframeTrack:na,Object3D:gt,ObjectLoader:ix,ObjectSpaceNormalMap:tp,OctahedronGeometry:xa,OneFactor:Rf,OneMinusConstantAlphaFactor:kf,OneMinusConstantColorFactor:Bf,OneMinusDstAlphaFactor:Lf,OneMinusDstColorFactor:Uf,OneMinusSrcAlphaFactor:Eo,OneMinusSrcColorFactor:If,OrthographicCamera:ba,PCFShadowMap:lh,PCFSoftShadowMap:ul,PMREMGenerator:eh,Path:jr,PerspectiveCamera:Xt,Plane:ui,PlaneGeometry:pr,PlaneHelper:Wx,PointLight:em,PointLightHelper:Ux,Points:Tp,PointsMaterial:Rh,PolarGridHelper:zx,PolyhedronGeometry:Yi,PositionalAudio:ux,PropertyBinding:pt,PropertyMixer:um,QuadraticBezierCurve:Nh,QuadraticBezierCurve3:Uh,Quaternion:jt,QuaternionKeyframeTrack:Ma,QuaternionLinearInterpolant:Kp,RED_GREEN_RGTC2_Format:il,RED_RGTC1_Format:vh,REVISION:da,RGBADepthPacking:ep,RGBAFormat:an,RGBAIntegerFormat:xl,RGBA_ASTC_10x10_Format:Jo,RGBA_ASTC_10x5_Format:qo,RGBA_ASTC_10x6_Format:Zo,RGBA_ASTC_10x8_Format:Ko,RGBA_ASTC_12x10_Format:jo,RGBA_ASTC_12x12_Format:Qo,RGBA_ASTC_4x4_Format:ko,RGBA_ASTC_5x4_Format:Vo,RGBA_ASTC_5x5_Format:Ho,RGBA_ASTC_6x5_Format:Go,RGBA_ASTC_6x6_Format:Wo,RGBA_ASTC_8x5_Format:Xo,RGBA_ASTC_8x6_Format:Yo,RGBA_ASTC_8x8_Format:$o,RGBA_BPTC_Format:Fr,RGBA_ETC2_EAC_Format:zo,RGBA_PVRTC_2BPPV1_Format:Oo,RGBA_PVRTC_4BPPV1_Format:Uo,RGBA_S3TC_DXT1_Format:Nr,RGBA_S3TC_DXT3_Format:Ur,RGBA_S3TC_DXT5_Format:Or,RGBDepthPacking:Fg,RGBFormat:mh,RGBIntegerFormat:Lg,RGB_BPTC_SIGNED_Format:el,RGB_BPTC_UNSIGNED_Format:tl,RGB_ETC1_Format:Fo,RGB_ETC2_Format:Bo,RGB_PVRTC_2BPPV1_Format:No,RGB_PVRTC_4BPPV1_Format:Lo,RGB_S3TC_DXT1_Format:Lr,RGDepthPacking:Bg,RGFormat:xh,RGIntegerFormat:_l,RawShaderMaterial:Bp,Ray:Rs,Raycaster:Rx,RectAreaLight:im,RedFormat:gl,RedIntegerFormat:pa,ReinhardToneMapping:Wf,RenderTarget:fp,RepeatWrapping:Wr,ReplaceStencilOp:kg,ReverseSubtractEquation:Ef,RingGeometry:Ol,SIGNED_RED_GREEN_RGTC2_Format:sl,SIGNED_RED_RGTC1_Format:nl,SRGBColorSpace:_n,SRGBTransfer:bt,Scene:Th,ShaderChunk:Ye,ShaderLib:Gn,ShaderMaterial:Xn,ShadowMaterial:Fp,Shape:Ms,ShapeGeometry:Fl,ShapePath:$x,ShapeUtils:ei,ShortType:dh,Skeleton:Tl,SkeletonHelper:Nx,SkinnedMesh:bp,Source:ms,Sphere:Qt,SphereGeometry:va,Spherical:jc,SphericalHarmonics3:sm,SplineCurve:Oh,SpotLight:Qp,SpotLightHelper:Lx,Sprite:yp,SpriteMaterial:Ah,SrcAlphaFactor:wo,SrcAlphaSaturateFactor:Of,SrcColorFactor:Pf,StaticCopyUsage:s_,StaticDrawUsage:Zr,StaticReadUsage:t_,StereoCamera:ox,StreamCopyUsage:a_,StreamDrawUsage:e_,StreamReadUsage:i_,StringKeyframeTrack:Ds,SubtractEquation:wf,SubtractiveBlending:Vc,TOUCH:ds,TangentSpaceNormalMap:Wi,TetrahedronGeometry:Bl,Texture:Lt,TextureLoader:Q0,TextureUtils:jx,TorusGeometry:zl,TorusKnotGeometry:kl,Triangle:xn,TriangleFanDrawMode:Og,TriangleStripDrawMode:Ug,TrianglesDrawMode:Ng,TubeGeometry:Vl,UVMapping:dl,Uint16BufferAttribute:wh,Uint32BufferAttribute:Eh,Uint8BufferAttribute:W_,Uint8ClampedBufferAttribute:X_,Uniform:qh,UniformsGroup:Tx,UniformsLib:_e,UniformsUtils:gp,UnsignedByteType:ti,UnsignedInt248Type:Ss,UnsignedInt5999Type:fh,UnsignedIntType:bi,UnsignedShort4444Type:pl,UnsignedShort5551Type:ml,UnsignedShortType:or,VSMShadowMap:qn,Vector2:j,Vector3:P,Vector4:mt,VectorKeyframeTrack:ia,VideoTexture:u0,WebGL3DRenderTarget:D_,WebGLArrayRenderTarget:I_,WebGLCoordinateSystem:Jn,WebGLCubeRenderTarget:xp,WebGLMultipleRenderTargets:Qx,WebGLRenderTarget:Wn,WebGLRenderer:Mm,WebGLUtils:ym,WebGPUCoordinateSystem:Kr,WireframeGeometry:Op,WrapAroundEnding:$r,ZeroCurvatureEnding:fs,ZeroFactor:Cf,ZeroSlopeEnding:ps,ZeroStencilOp:zg,createCanvasElement:up},Symbol.toStringTag,{value:"Module"}));function US(s){return{all:s=s||new Map,on:function(e,t){var n=s.get(e);n?n.push(t):s.set(e,[t])},off:function(e,t){var n=s.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var n=s.get(e);n&&n.slice().map(function(i){i(t)}),(n=s.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class Di{constructor(){It(this,"allVertices",{});It(this,"isolatedVertices",{});It(this,"connectedVertices",{});It(this,"sortedConnectedValues",[]);It(this,"needsSort",!1);It(this,"emitter",US());It(this,"emit",this.emitter.emit.bind(this.emitter));It(this,"on",this.emitter.on.bind(this.emitter));It(this,"off",this.emitter.off.bind(this.emitter));It(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const r=i.next.size>0||i.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!r){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n!=null&&n.after){const a=Array.isArray(n.after)?n.after:[n.after];a.forEach(o=>{i.previous.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.next.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[l]=this.allVertices[l])})}if(n!=null&&n.before){const a=Array.isArray(n.before)?n.before:[n.before];a.forEach(o=>{i.next.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.previous.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[l]=this.allVertices[l])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(r=>{const a=this.connectedVertices[r];a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),i.previous.forEach(r=>{const a=this.connectedVertices[r];a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var a;const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(o=>this.connectedVertices[o].value!==void 0);for(i.forEach(o=>{e.set(o,0)}),i.forEach(o=>{this.connectedVertices[o].next.forEach(c=>{this.connectedVertices[c]&&e.set(c,(e.get(c)||0)+1)})}),e.forEach((o,l)=>{o===0&&t.push(l)});t.length>0;){const o=t.shift();n.push(o);const l=i.find(c=>c===o);l&&((a=this.connectedVertices[l])==null||a.next.forEach(c=>{const h=(e.get(c)||0)-1;e.set(c,h),h===0&&t.push(c)}))}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const r=o=>o!==void 0;this.sortedConnectedValues=n.map(o=>this.connectedVertices[o].value).filter(r),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class OS{constructor(e,t,n){It(this,"key");It(this,"stage");It(this,"callback");It(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class FS extends Di{constructor(t,n,i){super();It(this,"key");It(this,"scheduler");It(this,"callback",(t,n)=>n());It(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,i&&(this.callback=i.bind(this))}get tasks(){return this.sortedVertices}createTask(t,n,i){const r=new OS(this,t,n);return this.add(t,r,i),r}getTask(t){return this.getValueByKey(t)}run(t){this.callback(t,n=>{this.forEachNode(i=>{i.run(n??t)})})}runWithTiming(t){const n={};return this.callback(t,i=>{this.forEachNode(r=>{const a=performance.now();r.run(i??t);const o=performance.now()-a;n[r.key]=o})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class BS extends Di{constructor(t){super();It(this,"lastTime",performance.now());It(this,"clampDeltaTo",.1);It(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const i=new FS(this,t,n==null?void 0:n.callback);return this.add(t,i,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),i}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(i=>{i.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,i={},r=performance.now();return this.forEachNode(a=>{const o=performance.now(),l=a.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),c=performance.now()-o;i[a.key.toString()]={duration:c,tasks:l}}),{total:performance.now()-r,stages:i}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const Hn=(s,e)=>{const t=oh(s,r=>r);let n;const i=t.subscribe(async r=>{n&&n();const a=await e(r);a&&(n=a)});An(()=>{i(),n&&n()})},Vn=s=>{const e=Un(s),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:s};return t},Wl=new Xt(75,0,.1,1e3);Wl.position.z=5;Wl.lookAt(0,0,0);const zS=()=>Wl,kS=s=>{Hn(s.size,e=>{if(s.camera.current===Wl){const t=s.camera.current;t.aspect=e.width/e.height,t.updateProjectionMatrix(),s.invalidate()}})},VS=Symbol("use-legacy-frame-compatibility-context"),HS=()=>{const s={useFrameOrders:[],useRenderOrders:[]};return jn(VS,s),s},GS=s=>{const e={frameInvalidated:!0,advance:!1,autoInvalidations:new Set,resetFrameInvalidation:()=>{e.frameInvalidated=!1,e.advance=!1},dispose:async(c=!1)=>{await Xm(),!(!e.shouldDispose&&!c)&&(e.disposableObjects.forEach((h,u)=>{var d;(h===0||c)&&((d=u==null?void 0:u.dispose)==null||d.call(u),e.disposableObjects.delete(u))}),e.shouldDispose=!1)},collectDisposableObjects:(c,h)=>{const u=h??[];return c&&(c!=null&&c.dispose&&typeof c.dispose=="function"&&c.type!=="Scene"&&u.push(c),Object.entries(c).forEach(([d,f])=>{if(d==="parent"||d==="children"||typeof f!="object")return;const m=f;m!=null&&m.dispose&&e.collectDisposableObjects(m,u)})),u},addDisposableObjects:c=>{c.forEach(h=>{const u=e.disposableObjects.get(h);u?e.disposableObjects.set(h,u+1):e.disposableObjects.set(h,1)})},removeDisposableObjects:c=>{c.length!==0&&(c.forEach(h=>{const u=e.disposableObjects.get(h);u&&u>0&&e.disposableObjects.set(h,u-1)}),e.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},{useRenderOrders:t}=HS(),n=new BS,i=n.createStage(Symbol("threlte-main-stage")),r=n.createStage(Symbol("threlte-render-stage"),{after:i,callback(c,h){o.shouldRender()&&h()}}),a=r.createTask(Symbol("threlte-auto-render-task"),c=>{t.length>0||o.renderer.render(o.scene,o.camera.current)}),o={size:oh([s.userSize,s.parentSize],([c,h])=>c||h),camera:Vn(zS()),scene:new Th,renderer:void 0,invalidate:()=>{e.frameInvalidated=!0},advance:()=>{e.advance=!0},colorSpace:Vn(s.colorSpace),toneMapping:Vn(s.toneMapping),dpr:Vn(s.dpr),useLegacyLights:Vn(s.useLegacyLights),shadows:Vn(s.shadows),colorManagementEnabled:Vn(s.colorManagementEnabled),renderMode:Vn(s.renderMode),autoRender:Vn(s.autoRender),scheduler:n,mainStage:i,renderStage:r,autoRenderTask:a,shouldRender:()=>o.renderMode.current==="always"||o.renderMode.current==="on-demand"&&(e.frameInvalidated||e.autoInvalidations.size>0)||o.renderMode.current==="manual"&&e.advance};kS(o);const l=Vn({});return jn("threlte",o),jn("threlte-internal-context",e),jn("threlte-user-context",l),o},Jh=typeof window<"u",WS=()=>{const s=Vn({width:0,height:0});if(!Jh)return{parentSize:s,parentSizeAction:()=>{}};const e={childList:!0,subtree:!1,attributes:!1};let t;const n=o=>{i.disconnect(),r.disconnect(),i.observe(o),r.observe(o,e)},i=new ResizeObserver(([o])=>{const{width:l,height:c}=o.contentRect;l===s.current.width&&c===s.current.height||s.set({width:l,height:c})}),r=new MutationObserver(o=>{for(const l of o)for(const c of l.removedNodes)if(t===c&&t.parentElement){n(t.parentElement);return}}),a=o=>{t=o;const l=t.parentElement;l&&(s.set({width:l.clientWidth,height:l.clientHeight}),n(l))};return An(()=>{i.disconnect(),r.disconnect()}),{parentSize:s,parentSizeAction:a}};function bm(s,e){const t=Un(s);let n=s;const i=t.subscribe(o=>n=o);return An(i),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const gr=()=>{const s=xi("threlte");if(s===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return s},jh=Symbol("threlte-hierarchical-parent-context"),Qh=()=>xi(jh),XS=s=>jn(jh,s),YS=s=>{const e=bm(s);return jn(jh,e),e};function $S(s){let e;const t=s[7].default,n=ki(t,s,s[6],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&64)&&Vi(n,t,i,i[6],e?Gi(t,i[6],r,null):Hi(i[6]),null)},i(i){e||(Oe(n,i),e=!0)},o(i){ke(n,i),e=!1},d(i){n&&n.d(i)}}}const qS=()=>({onChildMount:xi("threlte-hierarchical-object-on-mount"),onChildDestroy:xi("threlte-hierarchical-object-on-destroy")});function ZS(s,e,t){var g;let n,{$$slots:i={},$$scope:r}=e,{object:a=void 0}=e,{onChildMount:o=void 0}=e;const l=p=>{o==null||o(p)};let{onChildDestroy:c=void 0}=e;const h=p=>{c==null||c(p)},{invalidate:u}=gr(),d=Qh();vi(s,d,p=>t(5,n=p));let{parent:f=n}=e;const m=qS();a&&((g=m.onChildMount)==null||g.call(m,a),u());const _=bm(a,(p,y)=>{var x,v;y&&((x=m.onChildDestroy)==null||x.call(m,y),u()),p&&((v=m.onChildMount)==null||v.call(m,p),u())});return An(()=>{var p;a&&((p=m.onChildDestroy)==null||p.call(m,a),u())}),jn("threlte-hierarchical-object-on-mount",l),jn("threlte-hierarchical-object-on-destroy",h),XS(_),s.$$set=p=>{"object"in p&&t(2,a=p.object),"onChildMount"in p&&t(3,o=p.onChildMount),"onChildDestroy"in p&&t(4,c=p.onChildDestroy),"parent"in p&&t(1,f=p.parent),"$$scope"in p&&t(6,r=p.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&t(1,f=n),s.$$.dirty&4&&_.set(a)},[d,f,a,o,c,n,r,i]}class KS extends hn{constructor(e){super(),un(this,e,ZS,$S,cn,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function JS(s){let e;const t=s[1].default,n=ki(t,s,s[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16)&&Vi(n,t,i,i[4],e?Gi(t,i[4],r,null):Hi(i[4]),null)},i(i){e||(Oe(n,i),e=!0)},o(i){ke(n,i),e=!1},d(i){n&&n.d(i)}}}function jS(s){let e,t;return e=new KS({props:{object:s[0],onChildMount:s[2],onChildDestroy:s[3],$$slots:{default:[JS]},$$scope:{ctx:s}}}),{c(){lt(e.$$.fragment)},l(n){ct(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.object=n[0]),i&1&&(r.onChildMount=n[2]),i&1&&(r.onChildDestroy=n[3]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Oe(e.$$.fragment,n),t=!0)},o(n){ke(e.$$.fragment,n),t=!1},d(n){ut(e,n)}}}function QS(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e;const a=l=>r.add(l),o=l=>r.remove(l);return s.$$set=l=>{"object"in l&&t(0,r=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[r,n,a,o,i]}class Sm extends hn{constructor(e){super(),un(this,e,QS,jS,cn,{object:0})}}const ew=()=>{jn("threlte-cache",[])},tw=da.replace("dev",""),nw=Number.parseInt(tw),iw=s=>{const e=Un(void 0),t=(n,i)=>{s.renderer=new Mm({powerPreference:"high-performance",canvas:n,antialias:!0,alpha:!0,...i}),e.set(s.renderer)};return Hn([s.colorManagementEnabled],([n])=>{ot.enabled=n}),Hn([e,s.colorSpace],([n,i])=>{n&&(n.outputColorSpace=i)}),Hn([e,s.dpr],([n,i])=>{n==null||n.setPixelRatio(i)}),Hn([e,s.size],([n,i])=>{var r;(r=n==null?void 0:n.xr)!=null&&r.isPresenting||n==null||n.setSize(i.width,i.height)}),Hn([e,s.shadows],([n,i])=>{n&&(n.shadowMap.enabled=!!i,i&&i!==!0?n.shadowMap.type=i:i===!0&&(n.shadowMap.type=ul))}),Hn([e,s.toneMapping],([n,i])=>{n&&(n.toneMapping=i)}),Hn([e,s.useLegacyLights],([n,i])=>{n&&i&&(n.useLegacyLights=i)}),{createRenderer:t}},wm=()=>xi("threlte-internal-context");function Kd(s){let e,t;return e=new Sm({props:{object:s[0].scene,$$slots:{default:[sw]},$$scope:{ctx:s}}}),{c(){lt(e.$$.fragment)},l(n){ct(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const r={};i&131072&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Oe(e.$$.fragment,n),t=!0)},o(n){ke(e.$$.fragment,n),t=!1},d(n){ut(e,n)}}}function sw(s){let e;const t=s[15].default,n=ki(t,s,s[17],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&131072)&&Vi(n,t,i,i[17],e?Gi(t,i[17],r,null):Hi(i[17]),null)},i(i){e||(Oe(n,i),e=!0)},o(i){ke(n,i),e=!1},d(i){n&&n.d(i)}}}function rw(s){let e,t,n,i,r=s[2]&&Kd(s);return{c(){e=we("canvas"),r&&r.c(),this.h()},l(a){e=Ee(a,"CANVAS",{class:!0});var o=ze(e);r&&r.l(o),o.forEach(de),this.h()},h(){fe(e,"class","svelte-o3oskp")},m(a,o){yt(a,e,o),r&&r.m(e,null),s[16](e),t=!0,n||(i=ff(s[4].call(null,e)),n=!0)},p(a,[o]){a[2]?r?(r.p(a,o),o&4&&Oe(r,1)):(r=Kd(a),r.c(),Oe(r,1),r.m(e,null)):r&&(Ui(),ke(r,1,1,()=>{r=null}),Oi())},i(a){t||(Oe(r),t=!0)},o(a){ke(r),t=!1},d(a){a&&de(e),r&&r.d(),s[16](null),n=!1,i()}}}function aw(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{colorManagementEnabled:a=!0}=e,{colorSpace:o="srgb"}=e,{dpr:l=Jh?window.devicePixelRatio:1}=e,{renderMode:c="on-demand"}=e,{rendererParameters:h=void 0}=e,{shadows:u=ul}=e,{size:d=void 0}=e,{toneMapping:f=ch}=e,{useLegacyLights:m=!(nw>=155)}=e,{autoRender:_=!0}=e,g,p=Un(!1);vi(s,p,M=>t(2,n=M));const y=Un(d),{parentSize:x,parentSizeAction:v}=WS(),A=GS({colorManagementEnabled:a,colorSpace:o,dpr:l,renderMode:c,parentSize:x,autoRender:_,shadows:u,toneMapping:f,useLegacyLights:m,userSize:y}),w=wm(),E=A;Hn([p,E.autoRender],([M,R])=>(M&&R?E.autoRenderTask.start():E.autoRenderTask.stop(),()=>{E.autoRenderTask.stop()})),ew();const{createRenderer:D}=iw(E);cl(()=>{D(g,h),E.renderer.setAnimationLoop(M=>{w.dispose(),E.scheduler.run(M),w.resetFrameInvalidation()}),p.set(!0)}),An(()=>{var M;w.dispose(!0),E.scheduler.dispose(),(M=E.renderer)==null||M.dispose()});function S(M){rh[M?"unshift":"push"](()=>{g=M,t(1,g)})}return s.$$set=M=>{"colorManagementEnabled"in M&&t(5,a=M.colorManagementEnabled),"colorSpace"in M&&t(6,o=M.colorSpace),"dpr"in M&&t(7,l=M.dpr),"renderMode"in M&&t(8,c=M.renderMode),"rendererParameters"in M&&t(9,h=M.rendererParameters),"shadows"in M&&t(10,u=M.shadows),"size"in M&&t(11,d=M.size),"toneMapping"in M&&t(12,f=M.toneMapping),"useLegacyLights"in M&&t(13,m=M.useLegacyLights),"autoRender"in M&&t(14,_=M.autoRender),"$$scope"in M&&t(17,r=M.$$scope)},s.$$.update=()=>{s.$$.dirty&2048&&y.set(d),s.$$.dirty&64&&E.colorSpace.set(o),s.$$.dirty&128&&E.dpr.set(l),s.$$.dirty&256&&E.renderMode.set(c),s.$$.dirty&16384&&E.autoRender.set(_),s.$$.dirty&1024&&E.shadows.set(u),s.$$.dirty&4096&&E.toneMapping.set(f)},[E,g,n,p,v,a,o,l,c,h,u,d,f,m,_,i,S,r]}class ow extends hn{constructor(e){super(),un(this,e,aw,rw,cn,{colorManagementEnabled:5,colorSpace:6,dpr:7,renderMode:8,rendererParameters:9,shadows:10,size:11,toneMapping:12,useLegacyLights:13,autoRender:14,ctx:0})}get ctx(){return this.$$.ctx[0]}}function lw(s){let e;const t=s[9].default,n=ki(t,s,s[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&256)&&Vi(n,t,i,i[8],e?Gi(t,i[8],r,null):Hi(i[8]),null)},i(i){e||(Oe(n,i),e=!0)},o(i){ke(n,i),e=!1},d(i){n&&n.d(i)}}}const Jd="threlte-disposable-object-context";function cw(s,e,t){let n,i,{$$slots:r={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=wm();let{object:h=void 0}=e,u=h,{dispose:d=void 0}=e;const f=xi(Jd);vi(s,f,g=>t(7,i=g));const m=Un(d??i??!0);vi(s,m,g=>t(6,n=g)),jn(Jd,m);let _=n?o(h):[];return l(_),An(()=>{c(_)}),s.$$set=g=>{"object"in g&&t(2,h=g.object),"dispose"in g&&t(3,d=g.dispose),"$$scope"in g&&t(8,a=g.$$scope)},s.$$.update=()=>{s.$$.dirty&136&&m.set(d??i??!0),s.$$.dirty&116&&h!==u&&(c(_),t(5,_=n?o(h):[]),l(_),t(4,u=h))},[f,m,h,d,u,_,n,i,a,r]}class hw extends hn{constructor(e){super(),un(this,e,cw,lw,cn,{object:2,dispose:3})}}const uw=/^\s*class\s+/,dw=s=>typeof s!="function"?!1:uw.test(s.toString()),fw=s=>Array.isArray(s),jd=(s,e)=>dw(s)?fw(e)?new s(...e):new s:s,pw=s=>"isObject3D"in s,Qd=s=>"dispose"in s,Em=(s,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)s=s[t[i]];return{target:s,key:n}}else return{target:s,key:e}},Fc=Symbol("initialValueBeforeAttach"),mw=()=>{const{invalidate:s}=gr();let e=!1,t=Fc,n,i,r;const a=(l,c,h)=>{if(o(),!h){const u=l;((u==null?void 0:u.isMaterial)||!1)&&(h="material"),((u==null?void 0:u.isBufferGeometry)||(u==null?void 0:u.isGeometry)||!1)&&(h="geometry")}if(h){if(typeof h=="function")n=h(c,l);else{const{target:u,key:d}=Em(c,h);t=u[d],u[d]=l,i=u,r=d}e=!0,s()}},o=()=>{e&&(n?(n(),n=void 0):i&&r&&t!==Fc&&(i[r]=t,t=Fc,i=void 0,r=void 0),e=!1,s())};return An(()=>{o()}),{update:a}},gw=s=>s&&s.isCamera,Tm=s=>s&&s.isOrthographicCamera,Am=s=>s&&s.isPerspectiveCamera,_w=s=>Am(s)||Tm(s),xw=()=>{const{invalidate:s,size:e,camera:t}=gr();let n,i;An(()=>{i==null||i()});const r=l=>{n&&(Tm(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()):Am(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()))};return{update:(l,c)=>{if(i==null||i(),c||!_w(l)){n=void 0;return}n=l,i=e.subscribe(r)},makeDefaultCamera:(l,c)=>{!gw(l)||!c||(t.set(l),s())}}},Cm=()=>{const s=ah(),e=(n,i)=>{const r=s.$$.callbacks[n];r&&r.forEach(a=>{a(i)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!s.$$.callbacks[n],enumerable:!0}),e},vw=()=>{const s=Cm(),e=[];let t,n=!1;const i=()=>{e.forEach(o=>o()),e.length=0,s("create",{ref:t,cleanup:o=>{e.push(o)}})},r=a=>{t=a,n&&i()};return cl(()=>{i(),n=!0}),An(()=>{e.forEach(a=>a())}),{updateRef:r}},ef=s=>!!(s!=null&&s.addEventListener),yw=()=>{const s=Cm(),e=ah(),t=l=>{l!=null&&l.type&&s(l.type,l)},n=(l,c)=>{ef(l)&&c.forEach(h=>{l.removeEventListener(h,t)})},i=(l,c)=>{ef(l)&&c.forEach(h=>{l.addEventListener(h,t)})},r=Un(),a=Un([]);return Hn([r,a],([l,c])=>(i(l,c),()=>n(l,c))),cl(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:l=>{r.set(l)}}},Mw=s=>{const t=xi("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(c=>c(s)).filter(Boolean),i=n.flatMap(c=>c.pluginProps??[]);let r=[];return An(()=>{r.forEach(c=>c())}),{updateRef:c=>{r.forEach(h=>h()),r=[],n.forEach(h=>{var d;const u=(d=h.onRefChange)==null?void 0:d.call(h,c);u&&r.push(u)})},updateProps:c=>{n.forEach(h=>{var u;(u=h.onPropsChange)==null||u.call(h,c)})},updateRestProps:c=>{n.forEach(h=>{var u;(u=h.onRestPropsChange)==null||u.call(h,c)})},pluginsProps:i}},bw=new Set(["$$scope","$$slots","type","args","attach","instance"]),Sw=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),ww=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,tf=(s,e,t)=>{var n,i,r;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=s[e])==null?void 0:n.setScalar)=="function"&&!((i=s[e])!=null&&i.isColor)?(a,o,l)=>{a[o].setScalar(l)}:typeof((r=s[e])==null?void 0:r.set)=="function"?Array.isArray(t)?(a,o,l)=>{a[o].set(...l)}:(a,o,l)=>{a[o].set(l)}:(a,o,l)=>{a[o]=l}},Ew=()=>{const{invalidate:s}=gr(),e=new Map,t=new Map,n=(r,a,o,l)=>{if(ww(o)){const u=e.get(a);if(u&&u.instance===r&&u.value===o)return;e.set(a,{instance:r,value:o})}const{key:c,target:h}=Em(r,a);if(o!=null){const u=t.get(a);if(u)u(h,c,o);else{const d=tf(h,c,o);t.set(a,d),d(h,c,o)}}else tf(h,c,o)(h,c,o);l.manualCamera||Sw.has(c)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProps:(r,a,o)=>{var l;for(const c in a)!bw.has(c)&&!((l=o.pluginsProps)!=null&&l.includes(c))&&n(r,c,a[c],o),s()}}},Tw=s=>({ref:s&2}),nf=s=>({ref:s[1]}),Aw=s=>({ref:s&2}),sf=s=>({ref:s[1]});function rf(s){let e,t;return e=new hw({props:{object:s[1],dispose:s[0]}}),{c(){lt(e.$$.fragment)},l(n){ct(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&1&&(r.dispose=n[0]),e.$set(r)},i(n){t||(Oe(e.$$.fragment,n),t=!0)},o(n){ke(e.$$.fragment,n),t=!1},d(n){ut(e,n)}}}function Cw(s){let e;const t=s[10].default,n=ki(t,s,s[11],nf);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&Vi(n,t,i,i[11],e?Gi(t,i[11],r,Tw):Hi(i[11]),nf)},i(i){e||(Oe(n,i),e=!0)},o(i){ke(n,i),e=!1},d(i){n&&n.d(i)}}}function Rw(s){let e,t;return e=new Sm({props:{object:s[1],$$slots:{default:[Pw]},$$scope:{ctx:s}}}),{c(){lt(e.$$.fragment)},l(n){ct(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&2050&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Oe(e.$$.fragment,n),t=!0)},o(n){ke(e.$$.fragment,n),t=!1},d(n){ut(e,n)}}}function Pw(s){let e;const t=s[10].default,n=ki(t,s,s[11],sf);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&Vi(n,t,i,i[11],e?Gi(t,i[11],r,Aw):Hi(i[11]),sf)},i(i){e||(Oe(n,i),e=!0)},o(i){ke(n,i),e=!1},d(i){n&&n.d(i)}}}function Iw(s){let e=Qd(s[1]),t,n,i,r,a,o,l=e&&rf(s);const c=[Rw,Cw],h=[];function u(d,f){return f&2&&(n=null),n==null&&(n=!!pw(d[1])),n?0:1}return i=u(s,-1),r=h[i]=c[i](s),{c(){l&&l.c(),t=Qe(),r.c(),a=So()},l(d){l&&l.l(d),t=et(d),r.l(d),a=So()},m(d,f){l&&l.m(d,f),yt(d,t,f),h[i].m(d,f),yt(d,a,f),o=!0},p(d,[f]){f&2&&(e=Qd(d[1])),e?l?(l.p(d,f),f&2&&Oe(l,1)):(l=rf(d),l.c(),Oe(l,1),l.m(t.parentNode,t)):l&&(Ui(),ke(l,1,1,()=>{l=null}),Oi());let m=i;i=u(d,f),i===m?h[i].p(d,f):(Ui(),ke(h[m],1,1,()=>{h[m]=null}),Oi(),r=h[i],r?r.p(d,f):(r=h[i]=c[i](d),r.c()),Oe(r,1),r.m(a.parentNode,a))},i(d){o||(Oe(l),Oe(r),o=!0)},o(d){ke(l),ke(r),o=!1},d(d){d&&(de(t),de(a)),l&&l.d(d),h[i].d(d)}}}function Dw(s,e,t){const n=["is","args","attach","manual","makeDefault","dispose","ref"];let i=ar(e,n),r,{$$slots:a={},$$scope:o}=e,{is:l}=e,{args:c=void 0}=e,{attach:h=void 0}=e,{manual:u=void 0}=e,{makeDefault:d=void 0}=e,{dispose:f=void 0}=e;const m=Qh();vi(s,m,R=>t(9,r=R));const _=vw();let g=jd(l,c);_.updateRef(g);let p=!1;const y=()=>{if(!p){p=!0;return}t(1,g=jd(l,c)),_.updateRef(g)};let{ref:x=g}=e;const v=YS(g),A=Mw({ref:g,props:e}),w=(A==null?void 0:A.pluginsProps)??[],E=Ew(),D=xw(),S=mw(),M=yw();return s.$$set=R=>{t(23,e=Fi(Fi({},e),Vr(R))),t(22,i=ar(e,n)),"is"in R&&t(4,l=R.is),"args"in R&&t(5,c=R.args),"attach"in R&&t(6,h=R.attach),"manual"in R&&t(7,u=R.manual),"makeDefault"in R&&t(8,d=R.makeDefault),"dispose"in R&&t(0,f=R.dispose),"ref"in R&&t(3,x=R.ref),"$$scope"in R&&t(11,o=R.$$scope)},s.$$.update=()=>{s.$$.dirty&48&&y(),s.$$.dirty&2&&t(3,x=g),s.$$.dirty&2&&v.set(g),E.updateProps(g,i,{manualCamera:u,pluginsProps:w}),s.$$.dirty&130&&D.update(g,u),s.$$.dirty&258&&D.makeDefaultCamera(g,d),s.$$.dirty&578&&S.update(g,r,h),s.$$.dirty&2&&M.updateRef(g),s.$$.dirty&2&&(A==null||A.updateRef(g)),A==null||A.updateProps(e),A==null||A.updateRestProps(i)},e=Vr(e),[f,g,m,x,l,c,h,u,d,r,a,o]}let Rm=class extends hn{constructor(e){super(),un(this,e,Dw,Iw,cn,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}};const Lw={},Nw=(s,e)=>{const t=Lw[e]||NS[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...s,props:{...s.props,is:t}}},Uw=s=>new Proxy(class{},{construct(e,[t]){const n=t;return new Rm(Nw(n,s))}}),Ln=new Proxy(class{},{construct(s,[e]){const t=e;return new Rm(t)},get(s,e){return Uw(e)}});function Ow(s,e,t){if(!Jh)return{task:void 0,start:()=>{},stop:()=>{},started:Jm(!1)};let n,i,r;Di.isKey(s)?(n=s,i=e,r=t):(n=Symbol("useTask"),i=s,r=e);const a=gr();let o=a.mainStage;if(r){if(r.stage)if(Di.isValue(r.stage))o=r.stage;else{const f=a.scheduler.getStage(r.stage);if(!f)throw new Error(`No stage found with key ${r.stage.toString()}`);o=f}else if(r.after)if(Array.isArray(r.after))for(let f=0;f<r.after.length;f++){const m=r.after[f];if(Di.isValue(m)){o=m.stage;break}}else Di.isValue(r.after)&&(o=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let f=0;f<r.before.length;f++){const m=r.before[f];if(Di.isValue(m)){o=m.stage;break}}else Di.isValue(r.before)&&(o=r.before.stage)}const{autoInvalidations:l}=xi("threlte-internal-context"),c=Un(!1),h=o.createTask(n,i,r),u=()=>{c.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&l.add(i),h.start()},d=()=>{c.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&l.delete(i),h.stop()};return(r==null?void 0:r.autoStart)??!0?u():d(),An(()=>{o&&o.removeTask(n)}),{task:h,start:u,stop:d,started:{subscribe:c.subscribe}}}function Fw(s,e,t){const n=xi("threlte-user-context");if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(i=>(s in i||(i[s]=e),i)),n.current[s]):oh(n,i=>i[s])}const Bw=()=>{const s=ah(),e=Un(void 0);return Hn(e,t=>{t&&Object.entries(s.$$.callbacks).forEach(n=>{const[i,r]=n;i in t.$$.callbacks&&Array.isArray(t.$$.callbacks[i])?t.$$.callbacks[i].push(...r):t.$$.callbacks[i]=r})}),e};new P;new P;new P;const zw=()=>Fw("threlte-controls",{orbitControls:Un(void 0),trackballControls:Un(void 0)}),af={type:"change"},eu={type:"start"},Pm={type:"end"},_o=new Rs,of=new ui,kw=Math.cos(70*cp.DEG2RAD),Bt=new P,mn=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bc=1e-6;let Vw=class extends pm{constructor(e,t=null){super(e,t),this.state=St.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_s.ROTATE,MIDDLE:_s.DOLLY,RIGHT:_s.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new jt,this._lastTargetPosition=new P,this._quat=new jt().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jc,this._sphericalDelta=new jc,this._scale=1,this._panOffset=new P,this._rotateStart=new j,this._rotateEnd=new j,this._rotateDelta=new j,this._panStart=new j,this._panEnd=new j,this._panDelta=new j,this._dollyStart=new j,this._dollyEnd=new j,this._dollyDelta=new j,this._dollyDirection=new P,this._mouse=new j,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gw.bind(this),this._onPointerDown=Hw.bind(this),this._onPointerUp=Ww.bind(this),this._onContextMenu=Jw.bind(this),this._onMouseWheel=$w.bind(this),this._onKeyDown=qw.bind(this),this._onTouchStart=Zw.bind(this),this._onTouchMove=Kw.bind(this),this._onMouseDown=Xw.bind(this),this._onMouseMove=Yw.bind(this),this._interceptControlDown=jw.bind(this),this._interceptControlUp=Qw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(af),this.update(),this.state=St.NONE}update(e=null){const t=this.object.position;Bt.copy(t).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=mn:n>Math.PI&&(n-=mn),i<-Math.PI?i+=mn:i>Math.PI&&(i-=mn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Bt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_o.origin.copy(this.object.position),_o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_o.direction))<kw?this.object.lookAt(this.target):(of.setFromNormalAndCoplanarPoint(this.object.up,this.target),_o.intersectPlane(of,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Bc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bc||this._lastTargetPosition.distanceToSquared(this.target)>Bc?(this.dispatchEvent(af),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?mn/60*this.autoRotateSpeed*e:mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Bt.setFromMatrixColumn(t,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,t){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(t,1):(Bt.setFromMatrixColumn(t,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Bt.copy(i).sub(this.target);let r=Bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(mn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new j,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Hw(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Gw(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Ww(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pm),this.state=St.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Xw(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=St.DOLLY;break;case _s.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=St.ROTATE}break;case _s.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(eu)}function Yw(s){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function $w(s){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(s.preventDefault(),this.dispatchEvent(eu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Pm))}function qw(s){this.enabled!==!1&&this._handleKeyDown(s)}function Zw(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ds.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=St.TOUCH_ROTATE;break;case ds.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case ds.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=St.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(eu)}function Kw(s){switch(this._trackPointer(s),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=St.NONE}}function Jw(s){this.enabled!==!1&&s.preventDefault()}function jw(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qw(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const eE=s=>({ref:s&1}),lf=s=>({ref:s[0]});function tE(s){let e;const t=s[6].default,n=ki(t,s,s[8],lf);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&257)&&Vi(n,t,i,i[8],e?Gi(t,i[8],r,eE):Hi(i[8]),lf)},i(i){e||(Oe(n,i),e=!0)},o(i){ke(n,i),e=!1},d(i){n&&n.d(i)}}}function nE(s){let e,t;const n=[{is:s[0]},s[5]];let i={$$slots:{default:[tE,({ref:r})=>({0:r}),({ref:r})=>r?1:0]},$$scope:{ctx:s}};for(let r=0;r<n.length;r+=1)i=Fi(i,n[r]);return e=new Ln({props:i}),s[7](e),e.$on("change",s[3]),{c(){lt(e.$$.fragment)},l(r){ct(e.$$.fragment,r)},m(r,a){ht(e,r,a),t=!0},p(r,[a]){const o=a&33?pf(n,[a&1&&{is:r[0]},a&32&&qm(r[5])]):{};a&257&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){t||(Oe(e.$$.fragment,r),t=!0)},o(r){ke(e.$$.fragment,r),t=!1},d(r){s[7](null),ut(e,r)}}}function iE(s,e,t){const n=["ref"];let i=ar(e,n),r,a,{$$slots:o={},$$scope:l}=e;const c=Qh();vi(s,c,x=>t(9,r=x));const h=x=>x.isCamera,{renderer:u,invalidate:d}=gr();if(!h(r))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const f=new Vw(r,u.domElement),{start:m,stop:_}=Ow(()=>f.update(),{autoStart:!1,autoInvalidate:!1}),g=Bw();vi(s,g,x=>t(1,a=x));const{orbitControls:p}=zw();p.set(f),An(()=>p.set(void 0));function y(x){rh[x?"unshift":"push"](()=>{a=x,g.set(a)})}return s.$$set=x=>{e=Fi(Fi({},e),Vr(x)),t(5,i=ar(e,n)),"$$scope"in x&&t(8,l=x.$$scope)},s.$$.update=()=>{i.autoRotate||i.enableDamping?m():_()},[f,a,c,d,g,i,o,y,l]}class sE extends hn{constructor(e){super(),un(this,e,iE,nE,cn,{ref:0})}get ref(){return this.$$.ctx[0]}}new $e;new $e;new Ut;`${Ye.logdepthbuf_pars_vertex}${Ye.fog_pars_vertex}${Ye.logdepthbuf_vertex}${Ye.fog_vertex}`;`${Ye.tonemapping_fragment}${Ye.colorspace_fragment}`;`${Ye.tonemapping_fragment}${Ye.colorspace_fragment}`;const rE=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,aE=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,oE=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,lE=oE,cE=`
	${rE}
	${aE}
`;`${lE}${cE}${Ye.tonemapping_fragment}${Ye.colorspace_fragment}`;for(let s=0;s<256;s++)(s<16?"0":"")+s.toString(16);new ba(-1,1,1,-1,0,1);class hE extends nt{constructor(){super(),this.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ne([0,2,0,0,2,0],2))}}new hE;var Im={exports:{}};Im.exports=Xl;Im.exports.default=Xl;function Xl(s,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:s.length,r=Dm(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,l,c,h,u,d,f;if(n&&(r=mE(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(var m=t;m<i;m+=t)u=s[m],d=s[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return aa(r,a,t,o,l,f,0),a}function Dm(s,e,t,n,i){var r,a;if(i===sh(s,e,t,n)>0)for(r=e;r<t;r+=n)a=cf(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=cf(r,s[r],s[r+1],a);return a&&Yl(a,a.next)&&(la(a),a=a.next),a}function Cs(s,e){if(!s)return s;e||(e=s);var t=s,n;do if(n=!1,!t.steiner&&(Yl(t,t.next)||Ct(t.prev,t,t.next)===0)){if(la(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function aa(s,e,t,n,i,r,a){if(s){!a&&r&&yE(s,n,i,r);for(var o=s,l,c;s.prev!==s.next;){if(l=s.prev,c=s.next,r?dE(s,n,i,r):uE(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),la(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=fE(Cs(s),e,t),aa(s,e,t,n,i,r,2)):a===2&&pE(s,e,t,n,i,r):aa(Cs(s),e,t,n,i,r,1);break}}}}function uE(s){var e=s.prev,t=s,n=s.next;if(Ct(e,t,n)>=0)return!1;for(var i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,m=n.next;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&sr(i,o,r,l,a,c,m.x,m.y)&&Ct(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function dE(s,e,t,n){var i=s.prev,r=s,a=s.next;if(Ct(i,r,a)>=0)return!1;for(var o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=nh(f,m,e,t,n),y=nh(_,g,e,t,n),x=s.prevZ,v=s.nextZ;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&sr(o,h,l,u,c,d,x.x,x.y)&&Ct(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&sr(o,h,l,u,c,d,v.x,v.y)&&Ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&sr(o,h,l,u,c,d,x.x,x.y)&&Ct(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&sr(o,h,l,u,c,d,v.x,v.y)&&Ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function fE(s,e,t){var n=s;do{var i=n.prev,r=n.next.next;!Yl(i,r)&&Lm(i,n,n.next,r)&&oa(i,r)&&oa(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),la(n),la(n.next),n=s=r),n=n.next}while(n!==s);return Cs(n)}function pE(s,e,t,n,i,r){var a=s;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&SE(a,o)){var l=Nm(a,o);a=Cs(a,a.next),l=Cs(l,l.next),aa(a,e,t,n,i,r,0),aa(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function mE(s,e,t,n){var i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Dm(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(bE(c));for(i.sort(gE),r=0;r<i.length;r++)t=_E(i[r],t);return t}function gE(s,e){return s.x-e.x}function _E(s,e){var t=xE(s,e);if(!t)return e;var n=Nm(t,s);return Cs(n,n.next),Cs(t,t.next)}function xE(s,e){var t=e,n=s.x,i=s.y,r=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var o=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,h=a.y,u=1/0,d;t=a;do n>=t.x&&t.x>=c&&n!==t.x&&sr(i<h?n:r,i,c,h,i<h?r:n,i,t.x,t.y)&&(d=Math.abs(i-t.y)/(n-t.x),oa(t,s)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&vE(a,t)))&&(a=t,u=d)),t=t.next;while(t!==l);return a}function vE(s,e){return Ct(s.prev,s,e.prev)<0&&Ct(e.next,s,s.next)<0}function yE(s,e,t,n){var i=s;do i.z===0&&(i.z=nh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ME(i)}function ME(s){var e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function nh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function bE(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function sr(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function SE(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!wE(s,e)&&(oa(s,e)&&oa(e,s)&&EE(s,e)&&(Ct(s.prev,s,e.prev)||Ct(s,e.prev,e))||Yl(s,e)&&Ct(s.prev,s,s.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Yl(s,e){return s.x===e.x&&s.y===e.y}function Lm(s,e,t,n){var i=vo(Ct(s,e,t)),r=vo(Ct(s,e,n)),a=vo(Ct(t,n,s)),o=vo(Ct(t,n,e));return!!(i!==r&&a!==o||i===0&&xo(s,t,e)||r===0&&xo(s,n,e)||a===0&&xo(t,s,n)||o===0&&xo(t,e,n))}function xo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function vo(s){return s>0?1:s<0?-1:0}function wE(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Lm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function oa(s,e){return Ct(s.prev,s,s.next)<0?Ct(s,e,s.next)>=0&&Ct(s,s.prev,e)>=0:Ct(s,e,s.prev)<0||Ct(s,s.next,e)<0}function EE(s,e){var t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Nm(s,e){var t=new ih(s.i,s.x,s.y),n=new ih(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function cf(s,e,t,n){var i=new ih(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function la(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ih(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Xl.deviation=function(s,e,t,n){var i=e&&e.length,r=i?e[0]*t:s.length,a=Math.abs(sh(s,0,r,t));if(i)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,h=o<l-1?e[o+1]*t:s.length;a-=Math.abs(sh(s,c,h,t))}var u=0;for(o=0;o<n.length;o+=3){var d=n[o]*t,f=n[o+1]*t,m=n[o+2]*t;u+=Math.abs((s[d]-s[m])*(s[f+1]-s[d+1])-(s[d]-s[f])*(s[m+1]-s[d+1]))}return a===0&&u===0?0:Math.abs((u-a)/a)};function sh(s,e,t,n){for(var i=0,r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}Xl.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var a=0;a<e;a++)t.vertices.push(s[i][r][a]);i>0&&(n+=s[i-1].length,t.holes.push(n))}return t};new j;new j;var hf;(s=>{function e(i){let r=i.slice();return r.sort(s.POINT_COMPARATOR),s.makeHullPresorted(r)}s.makeHull=e;function t(i){if(i.length<=1)return i.slice();let r=[];for(let o=0;o<i.length;o++){const l=i[o];for(;r.length>=2;){const c=r[r.length-1],h=r[r.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let o=i.length-1;o>=0;o--){const l=i[o];for(;a.length>=2;){const c=a[a.length-1],h=a[a.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}s.makeHullPresorted=t;function n(i,r){return i.x<r.x?-1:i.x>r.x?1:i.y<r.y?-1:i.y>r.y?1:0}s.POINT_COMPARATOR=n})(hf||(hf={}));function uf(s,e,t){const n=s.slice();return n[5]=e[t],n[7]=t,n}function TE(s){let e,t,n;function i(a){s[2](a)}let r={enableZoom:!1};return s[0]!==void 0&&(r.ref=s[0]),e=new sE({props:r}),rh.push(()=>$m(e,"ref",i)),{c(){lt(e.$$.fragment)},l(a){ct(e.$$.fragment,a)},m(a,o){ht(e,a,o),n=!0},p(a,o){const l={};!t&&o&1&&(t=!0,l.ref=a[0],Ym(()=>t=!1)),e.$set(l)},i(a){n||(Oe(e.$$.fragment,a),n=!0)},o(a){ke(e.$$.fragment,a),n=!1},d(a){ut(e,a)}}}function AE(s){let e,t,n,i;return e=new Ln.IcosahedronGeometry({props:{args:[10,3-s[7]]}}),n=new Ln.MeshStandardMaterial({props:{color:s[5],wireframe:!0}}),{c(){lt(e.$$.fragment),t=Qe(),lt(n.$$.fragment)},l(r){ct(e.$$.fragment,r),t=et(r),ct(n.$$.fragment,r)},m(r,a){ht(e,r,a),yt(r,t,a),ht(n,r,a),i=!0},p:rt,i(r){i||(Oe(e.$$.fragment,r),Oe(n.$$.fragment,r),i=!0)},o(r){ke(e.$$.fragment,r),ke(n.$$.fragment,r),i=!1},d(r){r&&de(t),ut(e,r),ut(n,r)}}}function CE(s){let e,t,n,i;return e=new Ln.IcosahedronGeometry({props:{args:[10,3-s[7]]}}),n=new Ln.MeshStandardMaterial({props:{color:s[5],transparent:!0,opacity:.3}}),{c(){lt(e.$$.fragment),t=Qe(),lt(n.$$.fragment)},l(r){ct(e.$$.fragment,r),t=et(r),ct(n.$$.fragment,r)},m(r,a){ht(e,r,a),yt(r,t,a),ht(n,r,a),i=!0},p:rt,i(r){i||(Oe(e.$$.fragment,r),Oe(n.$$.fragment,r),i=!0)},o(r){ke(e.$$.fragment,r),ke(n.$$.fragment,r),i=!1},d(r){r&&de(t),ut(e,r),ut(n,r)}}}function RE(s){let e,t,n,i,r;return e=new Ln.Mesh({props:{$$slots:{default:[AE]},$$scope:{ctx:s}}}),n=new Ln.Mesh({props:{$$slots:{default:[CE]},$$scope:{ctx:s}}}),{c(){lt(e.$$.fragment),t=Qe(),lt(n.$$.fragment),i=Qe()},l(a){ct(e.$$.fragment,a),t=et(a),ct(n.$$.fragment,a),i=et(a)},m(a,o){ht(e,a,o),yt(a,t,o),ht(n,a,o),yt(a,i,o),r=!0},p(a,o){const l={};o&256&&(l.$$scope={dirty:o,ctx:a}),e.$set(l);const c={};o&256&&(c.$$scope={dirty:o,ctx:a}),n.$set(c)},i(a){r||(Oe(e.$$.fragment,a),Oe(n.$$.fragment,a),r=!0)},o(a){ke(e.$$.fragment,a),ke(n.$$.fragment,a),r=!1},d(a){a&&(de(t),de(i)),ut(e,a),ut(n,a)}}}function df(s){let e,t;function n(...i){return s[3](s[4],s[7],...i)}return e=new Ln.Group({props:{$$slots:{default:[RE]},$$scope:{ctx:s}}}),e.$on("create",n),{c(){lt(e.$$.fragment)},l(i){ct(e.$$.fragment,i)},m(i,r){ht(e,i,r),t=!0},p(i,r){s=i;const a={};r&256&&(a.$$scope={dirty:r,ctx:s}),e.$set(a)},i(i){t||(Oe(e.$$.fragment,i),t=!0)},o(i){ke(e.$$.fragment,i),t=!1},d(i){ut(e,i)}}}function PE(s){let e,t,n=Ii(["red","green","blue"]),i=[];for(let a=0;a<3;a+=1)i[a]=df(uf(s,n,a));const r=a=>ke(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<3;a+=1)i[a].c();e=So()},l(a){for(let o=0;o<3;o+=1)i[o].l(a);e=So()},m(a,o){for(let l=0;l<3;l+=1)i[l]&&i[l].m(a,o);yt(a,e,o),t=!0},p(a,o){if(o&16){n=Ii(["red","green","blue"]);let l;for(l=0;l<3;l+=1){const c=uf(a,n,l);i[l]?(i[l].p(c,o),Oe(i[l],1)):(i[l]=df(c),i[l].c(),Oe(i[l],1),i[l].m(e.parentNode,e))}for(Ui(),l=3;l<3;l+=1)r(l);Oi()}},i(a){if(!t){for(let o=0;o<3;o+=1)Oe(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<3;o+=1)ke(i[o]);t=!1},d(a){a&&de(e),yo(i,a)}}}function IE(s){let e,t,n,i,r,a,o,l;return e=new Ln.PerspectiveCamera({props:{makeDefault:!0,position:[0,0,25],"lookAt.y":0,$$slots:{default:[TE]},$$scope:{ctx:s}}}),n=new Ln.DirectionalLight({props:{position:[3,10,10]}}),r=new Ln.HemisphereLight({props:{intensity:.2}}),o=new Ln.LOD({props:{$$slots:{default:[PE,({ref:c})=>({4:c}),({ref:c})=>c?16:0]},$$scope:{ctx:s}}}),{c(){lt(e.$$.fragment),t=Qe(),lt(n.$$.fragment),i=Qe(),lt(r.$$.fragment),a=Qe(),lt(o.$$.fragment)},l(c){ct(e.$$.fragment,c),t=et(c),ct(n.$$.fragment,c),i=et(c),ct(r.$$.fragment,c),a=et(c),ct(o.$$.fragment,c)},m(c,h){ht(e,c,h),yt(c,t,h),ht(n,c,h),yt(c,i,h),ht(r,c,h),yt(c,a,h),ht(o,c,h),l=!0},p(c,[h]){const u={};h&257&&(u.$$scope={dirty:h,ctx:c}),e.$set(u);const d={};h&272&&(d.$$scope={dirty:h,ctx:c}),o.$set(d)},i(c){l||(Oe(e.$$.fragment,c),Oe(n.$$.fragment,c),Oe(r.$$.fragment,c),Oe(o.$$.fragment,c),l=!0)},o(c){ke(e.$$.fragment,c),ke(n.$$.fragment,c),ke(r.$$.fragment,c),ke(o.$$.fragment,c),l=!1},d(c){c&&(de(t),de(i),de(a)),ut(e,c),ut(n,c),ut(r,c),ut(o,c)}}}function DE(s,e,t){let n;const i=()=>n.reset();function r(o){n=o,t(0,n)}return[n,i,r,(o,l,{ref:c})=>{o.addLevel(c,l*75)}]}class LE extends hn{constructor(e){super(),un(this,e,DE,IE,cn,{reset:1})}get reset(){return this.$$.ctx[1]}}function NE(s){let e,t;return e=new LE({}),{c(){lt(e.$$.fragment)},l(n){ct(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},i(n){t||(Oe(e.$$.fragment,n),t=!0)},o(n){ke(e.$$.fragment,n),t=!1},d(n){ut(e,n)}}}function UE(s){let e,t,n="NUEVA CONSULTA",i,r,a;return r=new Ni({props:{icon:"fa6-solid:arrow-right-long"}}),{c(){e=we("a"),t=we("span"),t.textContent=n,i=Qe(),lt(r.$$.fragment),this.h()},l(o){e=Ee(o,"A",{href:!0,class:!0});var l=ze(e);t=Ee(l,"SPAN",{"data-svelte-h":!0}),In(t)!=="svelte-1cd1a2q"&&(t.textContent=n),i=et(l),ct(r.$$.fragment,l),l.forEach(de),this.h()},h(){fe(e,"href",ca+"/"+ha+"/expedientes"),fe(e,"class","btn variant-filled-primary animate-wiggle animate-fill-backwards")},m(o,l){yt(o,e,l),ne(e,t),ne(e,i),ht(r,e,null),a=!0},i(o){a||(Oe(r.$$.fragment,o),a=!0)},o(o){ke(r.$$.fragment,o),a=!1},d(o){o&&de(e),ut(r)}}}function OE(s){return{c:rt,l:rt,m:rt,i:rt,o:rt,d:rt}}function FE(s){let e,t,n="CATALOGOS",i,r,a;return r=new Ni({props:{icon:"fa6-solid:arrow-right-long"}}),{c(){e=we("a"),t=we("span"),t.textContent=n,i=Qe(),lt(r.$$.fragment),this.h()},l(o){e=Ee(o,"A",{href:!0,class:!0});var l=ze(e);t=Ee(l,"SPAN",{"data-svelte-h":!0}),In(t)!=="svelte-1w3naa9"&&(t.textContent=n),i=et(l),ct(r.$$.fragment,l),l.forEach(de),this.h()},h(){fe(e,"href",ca+"/"+ha+"/catalogo-tsaak"),fe(e,"class","btn variant-filled-primary animate-wiggle animate-fill-backwards")},m(o,l){yt(o,e,l),ne(e,t),ne(e,i),ht(r,e,null),a=!0},i(o){a||(Oe(r.$$.fragment,o),a=!0)},o(o){ke(r.$$.fragment,o),a=!1},d(o){o&&de(e),ut(r)}}}function BE(s){return{c:rt,l:rt,m:rt,i:rt,o:rt,d:rt}}function zE(s){let e,t,n="REGISTROS",i,r,a;return r=new Ni({props:{icon:"fa6-solid:arrow-right-long"}}),{c(){e=we("a"),t=we("span"),t.textContent=n,i=Qe(),lt(r.$$.fragment),this.h()},l(o){e=Ee(o,"A",{href:!0,class:!0});var l=ze(e);t=Ee(l,"SPAN",{"data-svelte-h":!0}),In(t)!=="svelte-zrrqlc"&&(t.textContent=n),i=et(l),ct(r.$$.fragment,l),l.forEach(de),this.h()},h(){fe(e,"href",ca+"/"+ha+"/registros"),fe(e,"class","btn variant-filled-primary animate-wiggle animate-fill-backwards")},m(o,l){yt(o,e,l),ne(e,t),ne(e,i),ht(r,e,null),a=!0},i(o){a||(Oe(r.$$.fragment,o),a=!0)},o(o){ke(r.$$.fragment,o),a=!1},d(o){o&&de(e),ut(r)}}}function kE(s){return{c:rt,l:rt,m:rt,i:rt,o:rt,d:rt}}function VE(s){let e,t="Modificar Perfil";return{c(){e=we("a"),e.textContent=t,this.h()},l(n){e=Ee(n,"A",{href:!0,class:!0,"data-svelte-h":!0}),In(e)!=="svelte-ac0pau"&&(e.textContent=t),this.h()},h(){fe(e,"href",ca+"/"+ha+"/datos-generales"),fe(e,"class","btn variant-soft-primary animate-jump-in animate-delay-300 animate-once")},m(n,i){yt(n,e,i)},d(n){n&&de(e)}}}function HE(s){return{c:rt,l:rt,m:rt,d:rt}}function GE(s){let e,t,n,i,r,a,o,l,c="Expediente Clínico Electrónico.",h,u,d="Permite registrar mediante un formulario, la información médica personal y expedientes de las consultas de los pacientes.",f,m,_,g,p,y,x,v,A,w,E,D,S,M,R;a=new ow({props:{$$slots:{default:[NE]},$$scope:{ctx:s}}});const W=[OE,UE],V=[];function U(O,J){return O[0].view===O[1].views[0]||O[0].view===O[1].views[1]||O[0].view===O[1].views[3]||O[0].view===O[1].views[4]?0:1}_=U(s),g=V[_]=W[_](s);const B=[BE,FE],L=[];function G(O,J){return O[0].view===O[1].views[0]||O[0].view===O[1].views[1]||O[0].view===O[1].views[2]||O[0].view===O[1].views[3]?0:1}y=G(s),x=L[y]=B[y](s);const N=[kE,zE],$=[];function K(O,J){return O[0].view===O[1].views[0]||O[0].view===O[1].views[1]||O[0].view===O[1].views[2]?0:1}A=K(s),w=$[A]=N[A](s);function ae(O,J){return O[0].view===O[1].views[0]?HE:VE}let xe=ae(s),Pe=xe(s);return M=new Tg({}),{c(){e=we("div"),t=we("div"),n=we("div"),i=we("div"),r=we("div"),lt(a.$$.fragment),o=Qe(),l=we("h1"),l.textContent=c,h=Qe(),u=we("p"),u.textContent=d,f=Qe(),m=we("div"),g.c(),p=Qe(),x.c(),v=Qe(),w.c(),E=Qe(),Pe.c(),D=Qe(),S=we("div"),lt(M.$$.fragment),this.h()},l(O){e=Ee(O,"DIV",{class:!0});var J=ze(e);t=Ee(J,"DIV",{class:!0});var me=ze(t);n=Ee(me,"DIV",{class:!0});var ie=ze(n);i=Ee(ie,"DIV",{class:!0});var ve=ze(i);r=Ee(ve,"DIV",{class:!0});var De=ze(r);ct(a.$$.fragment,De),De.forEach(de),ve.forEach(de),o=et(ie),l=Ee(ie,"H1",{class:!0,"data-svelte-h":!0}),In(l)!=="svelte-gjh10g"&&(l.textContent=c),h=et(ie),u=Ee(ie,"P",{class:!0,"data-svelte-h":!0}),In(u)!=="svelte-1bav8qz"&&(u.textContent=d),ie.forEach(de),f=et(me),m=Ee(me,"DIV",{class:!0});var ge=ze(m);g.l(ge),p=et(ge),x.l(ge),v=et(ge),w.l(ge),E=et(ge),Pe.l(ge),ge.forEach(de),me.forEach(de),D=et(J),S=Ee(J,"DIV",{class:!0});var Ve=ze(S);ct(M.$$.fragment,Ve),Ve.forEach(de),J.forEach(de),this.h()},h(){fe(r,"class","size-32"),fe(i,"class","flex items-start mb-4"),fe(l,"class","h1 !text-5xl md:!text-6xl max-w-[600px]"),fe(u,"class","!text-xl max0-w-[475px]"),fe(n,"class","animate-fade-up"),fe(m,"class","flex gap-4"),fe(t,"class","flex flex-col items-center xl:items-start text-center xl:text-left space-y-4"),fe(S,"class","hidden md:inline-block w-full max-w-[650px] mx-auto mt-20"),fe(e,"class","grid grid-cols-1 2xl:grid-cols-2 gap-4 md:gap-10 items-center")},m(O,J){yt(O,e,J),ne(e,t),ne(t,n),ne(n,i),ne(i,r),ht(a,r,null),ne(n,o),ne(n,l),ne(n,h),ne(n,u),ne(t,f),ne(t,m),V[_].m(m,null),ne(m,p),L[y].m(m,null),ne(m,v),$[A].m(m,null),ne(m,E),Pe.m(m,null),ne(e,D),ne(e,S),ht(M,S,null),R=!0},p(O,[J]){const me={};J&16&&(me.$$scope={dirty:J,ctx:O}),a.$set(me);let ie=_;_=U(O),_!==ie&&(Ui(),ke(V[ie],1,1,()=>{V[ie]=null}),Oi(),g=V[_],g||(g=V[_]=W[_](O),g.c()),Oe(g,1),g.m(m,p));let ve=y;y=G(O),y!==ve&&(Ui(),ke(L[ve],1,1,()=>{L[ve]=null}),Oi(),x=L[y],x||(x=L[y]=B[y](O),x.c()),Oe(x,1),x.m(m,v));let De=A;A=K(O),A!==De&&(Ui(),ke($[De],1,1,()=>{$[De]=null}),Oi(),w=$[A],w||(w=$[A]=N[A](O),w.c()),Oe(w,1),w.m(m,E)),xe!==(xe=ae(O))&&(Pe.d(1),Pe=xe(O),Pe&&(Pe.c(),Pe.m(m,null)))},i(O){R||(Oe(a.$$.fragment,O),Oe(g),Oe(x),Oe(w),Oe(M.$$.fragment,O),R=!0)},o(O){ke(a.$$.fragment,O),ke(g),ke(x),ke(w),ke(M.$$.fragment,O),R=!1},d(O){O&&de(e),ut(a),V[_].d(),L[y].d(),$[A].d(),Pe.d(),ut(M)}}}function WE(s,e,t){let n,i;vi(s,Zm,o=>t(2,n=o)),vi(s,Km,o=>t(3,i=o));let r,a;return s.$$.update=()=>{s.$$.dirty&8&&t(0,r=i),s.$$.dirty&4&&t(1,a=n)},[r,a,n,i]}class XE extends hn{constructor(e){super(),un(this,e,WE,GE,cn,{})}}function YE(s){let e,t,n,i,r,a,o,l="›",c,h,u,d,f,m;return r=new Ni({props:{icon:"fa6-solid:house",class:"text-xl"}}),f=new XE({}),{c(){e=we("div"),t=we("ol"),n=we("li"),i=we("a"),lt(r.$$.fragment),a=Qe(),o=we("li"),o.textContent=l,c=Qe(),h=we("div"),u=we("header"),d=we("div"),lt(f.$$.fragment),this.h()},l(_){e=Ee(_,"DIV",{class:!0});var g=ze(e);t=Ee(g,"OL",{class:!0});var p=ze(t);n=Ee(p,"LI",{class:!0});var y=ze(n);i=Ee(y,"A",{class:!0,href:!0});var x=ze(i);ct(r.$$.fragment,x),x.forEach(de),y.forEach(de),a=et(p),o=Ee(p,"LI",{class:!0,"aria-hidden":!0,"data-svelte-h":!0}),In(o)!=="svelte-i818qf"&&(o.textContent=l),p.forEach(de),g.forEach(de),c=et(_),h=Ee(_,"DIV",{class:!0});var v=ze(h);u=Ee(v,"HEADER",{id:!0,class:!0});var A=ze(u);d=Ee(A,"DIV",{class:!0});var w=ze(d);ct(f.$$.fragment,w),w.forEach(de),A.forEach(de),v.forEach(de),this.h()},h(){fe(i,"class","anchor"),fe(i,"href",ca+"/"+ha+"/"),fe(n,"class","crumb"),fe(o,"class","crumb-separator"),fe(o,"aria-hidden","true"),fe(t,"class","breadcrumb"),fe(e,"class","flex ml-4 mt-1.5"),fe(d,"class","section-container"),fe(u,"id","hero"),fe(u,"class","bg-transparent hero-gradient"),fe(h,"class","z-0 container mx-auto flex flex-col justify-center items-center mb-72")},m(_,g){yt(_,e,g),ne(e,t),ne(t,n),ne(n,i),ht(r,i,null),ne(t,a),ne(t,o),yt(_,c,g),yt(_,h,g),ne(h,u),ne(u,d),ht(f,d,null),m=!0},p:rt,i(_){m||(Oe(r.$$.fragment,_),Oe(f.$$.fragment,_),m=!0)},o(_){ke(r.$$.fragment,_),ke(f.$$.fragment,_),m=!1},d(_){_&&(de(e),de(c),de(h)),ut(r),ut(f)}}}class r1 extends hn{constructor(e){super(),un(this,e,null,YE,cn,{})}}export{r1 as component};
