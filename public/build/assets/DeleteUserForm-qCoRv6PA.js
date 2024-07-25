import{r as s,G as m,b as Ze,j as h,W as Je}from"./app-CB9xQ4iK.js";import{T as Qe,I as et}from"./TextInput-7ltBLnLv.js";import{I as tt}from"./InputLabel-DpeKLGy6.js";import{s as re,W as x,H as $,o as y,y as L,n as N,a as oe,u as V,b as q,t as le,T as nt,l as ae,p as rt,f as xe,M as pe,c as $e,i as B,m as ot,d as lt,X as Te,I as Y}from"./transition-C83-EL9U.js";function K(e){return re.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let at=s.createContext(void 0);function it(){return s.useContext(at)}let ut="span";var G=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(G||{});function st(e,t){var n;let{features:r=1,...o}=e,a={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return $({ourProps:a,theirProps:o,slot:{},defaultTag:ut,name:"Hidden"})}let Q=x(st),ie=s.createContext(null);ie.displayName="DescriptionContext";function Fe(){let e=s.useContext(ie);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Fe),t}return e}function ct(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=y(a=>(t(i=>[...i,a]),()=>t(i=>{let u=i.slice(),l=u.indexOf(a);return l!==-1&&u.splice(l,1),u}))),o=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props,value:n.value}),[r,n.slot,n.name,n.props,n.value]);return m.createElement(ie.Provider,{value:o},n.children)},[t])]}let dt="p";function ft(e,t){let n=s.useId(),r=it(),{id:o=`headlessui-description-${n}`,...a}=e,i=Fe(),u=L(t);N(()=>i.register(o),[o,i.register]);let l=r||!1,d=s.useMemo(()=>({...i.slot,disabled:l}),[i.slot,l]),c={ref:u,...i.props,id:o};return $({ourProps:c,theirProps:a,slot:d,defaultTag:dt,name:i.name||"Description"})}let mt=x(ft),pt=Object.assign(mt,{});var Pe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Pe||{});let ht=s.createContext(()=>{});function vt({value:e,children:t}){return m.createElement(ht.Provider,{value:e},t)}let gt=class extends Map{constructor(t){super(),this.factory=t}get(t){let n=super.get(t);return n===void 0&&(n=this.factory(t),this.set(t,n)),n}};function Le(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...a){let i=t[o].call(n,...a);i&&(n=i,r.forEach(u=>u()))}}}function Se(e){return s.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}let wt=new gt(()=>Le(()=>[],{ADD(e){return this.includes(e)?this:[...this,e]},REMOVE(e){let t=this.indexOf(e);if(t===-1)return this;let n=this.slice();return n.splice(t,1),n}}));function k(e,t){let n=wt.get(t),r=s.useId(),o=Se(n);if(N(()=>{if(e)return n.dispatch("ADD",r),()=>n.dispatch("REMOVE",r)},[n,e]),!e)return!1;let a=o.indexOf(r),i=o.length;return a===-1&&(a=i,i+=1),a===i-1}let ee=new Map,U=new Map;function he(e){var t;let n=(t=U.get(e))!=null?t:0;return U.set(e,n+1),n!==0?()=>ve(e):(ee.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>ve(e))}function ve(e){var t;let n=(t=U.get(e))!=null?t:1;if(n===1?U.delete(e):U.set(e,n-1),n!==1)return;let r=ee.get(e);r&&(r["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,ee.delete(e))}function Et(e,{allowed:t,disallowed:n}={}){let r=k(e,"inert-others");N(()=>{var o,a;if(!r)return;let i=oe();for(let l of(o=n==null?void 0:n())!=null?o:[])l&&i.add(he(l));let u=(a=t==null?void 0:t())!=null?a:[];for(let l of u){if(!l)continue;let d=K(l);if(!d)continue;let c=l.parentElement;for(;c&&c!==d.body;){for(let v of c.children)u.some(p=>v.contains(p))||i.add(he(v));c=c.parentElement}}return i.dispose},[r,t,n])}let X=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),yt=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var T=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(T||{}),te=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(te||{}),bt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(bt||{});function xt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(X)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function $t(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(yt)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var De=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(De||{});function Tt(e,t=0){var n;return e===((n=K(e))==null?void 0:n.body)?!1:V(t,{0(){return e.matches(X)},1(){let r=e;for(;r!==null;){if(r.matches(X))return!0;r=r.parentElement}return!1}})}var Ft=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Ft||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function F(e){e==null||e.focus({preventScroll:!0})}let Pt=["textarea","input"].join(",");function Lt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Pt))!=null?n:!1}function St(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),a=t(r);if(o===null||a===null)return 0;let i=o.compareDocumentPosition(a);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function W(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?St(e):e:t&64?$t(e):xt(e);o.length>0&&i.length>1&&(i=i.filter(f=>!o.some(w=>w!=null&&"current"in w?(w==null?void 0:w.current)===f:w===f))),r=r??a.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,v=i.length,p;do{if(c>=v||c+v<=0)return 0;let f=l+c;if(t&16)f=(f+v)%v;else{if(f<0)return 3;if(f>=v)return 1}p=i[f],p==null||p.focus(d),c+=u}while(p!==a.activeElement);return t&6&&Lt(p)&&p.select(),2}function Me(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Dt(){return/Android/gi.test(window.navigator.userAgent)}function Mt(){return Me()||Dt()}function j(e,t,n,r){let o=q(n);s.useEffect(()=>{if(!e)return;function a(i){o.current(i)}return document.addEventListener(t,a,r),()=>document.removeEventListener(t,a,r)},[e,t,r])}function Ne(e,t,n,r){let o=q(n);s.useEffect(()=>{if(!e)return;function a(i){o.current(i)}return window.addEventListener(t,a,r),()=>window.removeEventListener(t,a,r)},[e,t,r])}const ge=30;function Nt(e,t,n){let r=k(e,"outside-click"),o=q(n),a=s.useCallback(function(l,d){if(l.defaultPrevented)return;let c=d(l);if(c===null||!c.getRootNode().contains(c)||!c.isConnected)return;let v=function p(f){return typeof f=="function"?p(f()):Array.isArray(f)||f instanceof Set?f:[f]}(t);for(let p of v){if(p===null)continue;let f=p instanceof HTMLElement?p:p.current;if(f!=null&&f.contains(c)||l.composed&&l.composedPath().includes(f))return}return!Tt(c,De.Loose)&&c.tabIndex!==-1&&l.preventDefault(),o.current(l,c)},[o]),i=s.useRef(null);j(r,"pointerdown",l=>{var d,c;i.current=((c=(d=l.composedPath)==null?void 0:d.call(l))==null?void 0:c[0])||l.target},!0),j(r,"mousedown",l=>{var d,c;i.current=((c=(d=l.composedPath)==null?void 0:d.call(l))==null?void 0:c[0])||l.target},!0),j(r,"click",l=>{Mt()||i.current&&(a(l,()=>i.current),i.current=null)},!0);let u=s.useRef({x:0,y:0});j(r,"touchstart",l=>{u.current.x=l.touches[0].clientX,u.current.y=l.touches[0].clientY},!0),j(r,"touchend",l=>{let d={x:l.changedTouches[0].clientX,y:l.changedTouches[0].clientY};if(!(Math.abs(d.x-u.current.x)>=ge||Math.abs(d.y-u.current.y)>=ge))return a(l,()=>l.target instanceof HTMLElement?l.target:null)},!0),Ne(r,"blur",l=>a(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function _(...e){return s.useMemo(()=>K(...e),[...e])}function Ce(e,t,n,r){let o=q(n);s.useEffect(()=>{e=e??window;function a(i){o.current(i)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function Ct(){let e;return{before({doc:t}){var n;let r=t.documentElement,o=(n=t.defaultView)!=null?n:window;e=Math.max(0,o.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,o=Math.max(0,r.clientWidth-r.offsetWidth),a=Math.max(0,e-o);n.style(r,"paddingRight",`${a}px`)}}}function At(){return Me()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(a=>a()).some(a=>a.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let u=oe();u.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>u.dispose()))}let a=(o=window.scrollY)!=null?o:window.pageYOffset,i=null;t.addEventListener(e,"click",u=>{if(u.target instanceof HTMLElement)try{let l=u.target.closest("a");if(!l)return;let{hash:d}=new URL(l.href),c=e.querySelector(d);c&&!r(c)&&(i=c)}catch{}},!0),t.addEventListener(e,"touchstart",u=>{if(u.target instanceof HTMLElement)if(r(u.target)){let l=u.target;for(;l.parentElement&&r(l.parentElement);)l=l.parentElement;t.style(l,"overscrollBehavior","contain")}else t.style(u.target,"touchAction","none")}),t.addEventListener(e,"touchmove",u=>{if(u.target instanceof HTMLElement){if(u.target.tagName==="INPUT")return;if(r(u.target)){let l=u.target;for(;l.parentElement&&l.dataset.headlessuiPortal!==""&&!(l.scrollHeight>l.clientHeight||l.scrollWidth>l.clientWidth);)l=l.parentElement;l.dataset.headlessuiPortal===""&&u.preventDefault()}else u.preventDefault()}},{passive:!1}),t.add(()=>{var u;let l=(u=window.scrollY)!=null?u:window.pageYOffset;a!==l&&window.scrollTo(0,a),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function kt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Ot(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let M=Le(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:oe(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Ot(n)},o=[At(),Ct(),kt()];o.forEach(({before:a})=>a==null?void 0:a(r)),o.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});M.subscribe(()=>{let e=M.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&M.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&M.dispatch("TEARDOWN",n)}});function It(e,t,n=()=>({containers:[]})){let r=Se(M),o=t?r.get(t):void 0,a=o?o.count>0:!1;return N(()=>{if(!(!t||!e))return M.dispatch("PUSH",t,n),()=>M.dispatch("POP",t,n)},[e,t]),a}function Rt(e,t,n=()=>[document.body]){let r=k(e,"scroll-lock");It(r,t,o=>{var a;return{containers:[...(a=o.containers)!=null?a:[],n]}})}function ue(e,t){let n=s.useRef([]),r=y(e);s.useEffect(()=>{let o=[...n.current];for(let[a,i]of t.entries())if(n.current[a]!==i){let u=r(t,o);return n.current=t,u}},[r,...t])}function jt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let P=[];jt(()=>{function e(t){if(!(t.target instanceof HTMLElement)||t.target===document.body||P[0]===t.target)return;let n=t.target;n=n.closest(X),P.unshift(n??t.target),P=P.filter(r=>r!=null&&r.isConnected),P.splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Ae(e){let t=y(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,le(()=>{n.current&&t()})}),[t])}let ke=s.createContext(!1);function Ht(){return s.useContext(ke)}function we(e){return m.createElement(ke.Provider,{value:e.force},e.children)}function Ut(e){let t=Ht(),n=s.useContext(Ie),r=_(e),[o,a]=s.useState(()=>{var i;if(!t&&n!==null)return(i=n.current)!=null?i:null;if(re.isServer)return null;let u=r==null?void 0:r.getElementById("headlessui-portal-root");if(u)return u;if(r===null)return null;let l=r.createElement("div");return l.setAttribute("id","headlessui-portal-root"),r.body.appendChild(l)});return s.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),s.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),o}let Oe=s.Fragment,Wt=x(function(e,t){let n=e,r=s.useRef(null),o=L(nt(c=>{r.current=c}),t),a=_(r),i=Ut(r),[u]=s.useState(()=>{var c;return re.isServer?null:(c=a==null?void 0:a.createElement("div"))!=null?c:null}),l=s.useContext(ne),d=ae();return N(()=>{!i||!u||i.contains(u)||(u.setAttribute("data-headlessui-portal",""),i.appendChild(u))},[i,u]),N(()=>{if(u&&l)return l.register(u)},[l,u]),Ae(()=>{var c;!i||!u||(u instanceof Node&&i.contains(u)&&i.removeChild(u),i.childNodes.length<=0&&((c=i.parentElement)==null||c.removeChild(i)))}),d?!i||!u?null:Ze.createPortal($({ourProps:{ref:o},theirProps:n,slot:{},defaultTag:Oe,name:"Portal"}),u):null});function _t(e,t){let n=L(t),{enabled:r=!0,...o}=e;return r?m.createElement(Wt,{...o,ref:n}):$({ourProps:{ref:n},theirProps:o,slot:{},defaultTag:Oe,name:"Portal"})}let Bt=s.Fragment,Ie=s.createContext(null);function Vt(e,t){let{target:n,...r}=e,o={ref:L(t)};return m.createElement(Ie.Provider,{value:n},$({ourProps:o,theirProps:r,defaultTag:Bt,name:"Popover.Group"}))}let ne=s.createContext(null);function Yt(){let e=s.useContext(ne),t=s.useRef([]),n=y(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=y(a=>{let i=t.current.indexOf(a);i!==-1&&t.current.splice(i,1),e&&e.unregister(a)}),o=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:a}){return m.createElement(ne.Provider,{value:o},a)},[o])]}let Gt=x(_t),Re=x(Vt),Xt=Object.assign(Gt,{Group:Re});function qt(e,t=typeof document<"u"?document.defaultView:null,n){let r=k(e,"escape");Ce(t,"keydown",o=>{r&&(o.defaultPrevented||o.key===Pe.Escape&&n(o))})}function Kt(){var e;let[t]=s.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=s.useState((e=t==null?void 0:t.matches)!=null?e:!1);return N(()=>{if(!t)return;function o(a){r(a.matches)}return t.addEventListener("change",o),()=>t.removeEventListener("change",o)},[t]),n}function zt({defaultContainers:e=[],portals:t,mainTreeNode:n}={}){let r=_(n),o=y(()=>{var a,i;let u=[];for(let l of e)l!==null&&(l instanceof HTMLElement?u.push(l):"current"in l&&l.current instanceof HTMLElement&&u.push(l.current));if(t!=null&&t.current)for(let l of t.current)u.push(l);for(let l of(a=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?a:[])l!==document.body&&l!==document.head&&l instanceof HTMLElement&&l.id!=="headlessui-portal-root"&&(n&&(l.contains(n)||l.contains((i=n==null?void 0:n.getRootNode())==null?void 0:i.host))||u.some(d=>l.contains(d))||u.push(l));return u});return{resolveContainers:o,contains:y(a=>o().some(i=>i.contains(a)))}}let je=s.createContext(null);function Ee({children:e,node:t}){let[n,r]=s.useState(null),o=He(t??n);return m.createElement(je.Provider,{value:o},e,o===null&&m.createElement(Q,{features:G.Hidden,ref:a=>{var i,u;if(a){for(let l of(u=(i=K(a))==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?u:[])if(l!==document.body&&l!==document.head&&l instanceof HTMLElement&&l!=null&&l.contains(a)){r(l);break}}}}))}function He(e=null){var t;return(t=s.useContext(je))!=null?t:e}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function Zt(){let e=s.useRef(0);return Ne(!0,"keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Ue(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Jt="div";var D=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(D||{});function Qt(e,t){let n=s.useRef(null),r=L(n,t),{initialFocus:o,initialFocusFallback:a,containers:i,features:u=15,...l}=e;ae()||(u=0);let d=_(n);rn(u,{ownerDocument:d});let c=on(u,{ownerDocument:d,container:n,initialFocus:o,initialFocusFallback:a});ln(u,{ownerDocument:d,container:n,containers:i,previousActiveElement:c});let v=Zt(),p=y(g=>{let b=n.current;b&&(S=>S())(()=>{V(v.current,{[H.Forwards]:()=>{W(b,T.First,{skipElements:[g.relatedTarget,a]})},[H.Backwards]:()=>{W(b,T.Last,{skipElements:[g.relatedTarget,a]})}})})}),f=k(!!(u&2),"focus-trap#tab-lock"),w=rt(),O=s.useRef(!1),I={ref:r,onKeyDown(g){g.key=="Tab"&&(O.current=!0,w.requestAnimationFrame(()=>{O.current=!1}))},onBlur(g){if(!(u&4))return;let b=Ue(i);n.current instanceof HTMLElement&&b.add(n.current);let S=g.relatedTarget;S instanceof HTMLElement&&S.dataset.headlessuiFocusGuard!=="true"&&(We(b,S)||(O.current?W(n.current,V(v.current,{[H.Forwards]:()=>T.Next,[H.Backwards]:()=>T.Previous})|T.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&F(g.target)))}};return m.createElement(m.Fragment,null,f&&m.createElement(Q,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:G.Focusable}),$({ourProps:I,theirProps:l,defaultTag:Jt,name:"FocusTrap"}),f&&m.createElement(Q,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:G.Focusable}))}let en=x(Qt),tn=Object.assign(en,{features:D});function nn(e=!0){let t=s.useRef(P.slice());return ue(([n],[r])=>{r===!0&&n===!1&&le(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=P.slice())},[e,P,t]),y(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function rn(e,{ownerDocument:t}){let n=!!(e&8),r=nn(n);ue(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&F(r())},[n]),Ae(()=>{n&&F(r())})}function on(e,{ownerDocument:t,container:n,initialFocus:r,initialFocusFallback:o}){let a=s.useRef(null),i=k(!!(e&1),"focus-trap#initial-focus"),u=xe();return ue(()=>{if(e===0)return;if(!i){o!=null&&o.current&&F(o.current);return}let l=n.current;l&&le(()=>{if(!u.current)return;let d=t==null?void 0:t.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===d){a.current=d;return}}else if(l.contains(d)){a.current=d;return}if(r!=null&&r.current)F(r.current);else{if(e&16){if(W(l,T.First|T.AutoFocus)!==te.Error)return}else if(W(l,T.First)!==te.Error)return;if(o!=null&&o.current&&(F(o.current),(t==null?void 0:t.activeElement)===o.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}a.current=t==null?void 0:t.activeElement})},[o,i,e]),a}function ln(e,{ownerDocument:t,container:n,containers:r,previousActiveElement:o}){let a=xe(),i=!!(e&4);Ce(t==null?void 0:t.defaultView,"focus",u=>{if(!i||!a.current)return;let l=Ue(r);n.current instanceof HTMLElement&&l.add(n.current);let d=o.current;if(!d)return;let c=u.target;c&&c instanceof HTMLElement?We(l,c)?(o.current=c,F(c)):(u.preventDefault(),u.stopPropagation(),F(d)):F(o.current)},!0)}function We(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var an=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(an||{}),un=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(un||{});let sn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},se=s.createContext(null);se.displayName="DialogContext";function z(e){let t=s.useContext(se);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,z),n}return t}function cn(e,t){return V(t.type,sn,e,t)}let ye=x(function(e,t){let n=s.useId(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:a,initialFocus:i,role:u="dialog",autoFocus:l=!0,__demoMode:d=!1,unmount:c=!1,...v}=e,p=s.useRef(!1);u=function(){return u==="dialog"||u==="alertdialog"?u:(p.current||(p.current=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let f=$e();o===void 0&&f!==null&&(o=(f&B.Open)===B.Open);let w=s.useRef(null),O=L(w,t),I=_(w),g=o?0:1,[b,S]=s.useReducer(cn,{titleId:null,descriptionId:null,panelRef:s.createRef()}),C=y(()=>a(!1)),ce=y(E=>S({type:0,id:E})),A=ae()?g===0:!1,[Be,Ve]=Yt(),Ye={get current(){var E;return(E=b.panelRef.current)!=null?E:w.current}},Z=He(),{resolveContainers:J}=zt({mainTreeNode:Z,portals:Be,defaultContainers:[Ye]}),de=f!==null?(f&B.Closing)===B.Closing:!1;Et(d||de?!1:A,{allowed:y(()=>{var E,me;return[(me=(E=w.current)==null?void 0:E.closest("[data-headlessui-portal]"))!=null?me:null]}),disallowed:y(()=>{var E;return[(E=Z==null?void 0:Z.closest("body > *:not(#headlessui-portal-root)"))!=null?E:null]})}),Nt(A,J,E=>{E.preventDefault(),C()}),qt(A,I==null?void 0:I.defaultView,E=>{E.preventDefault(),E.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),C()}),Rt(d||de?!1:A,I,J),ot(A,w,C);let[Ge,Xe]=ct(),qe=s.useMemo(()=>[{dialogState:g,close:C,setTitleId:ce,unmount:c},b],[g,b,C,ce,c]),fe=s.useMemo(()=>({open:g===0}),[g]),Ke={ref:O,id:r,role:u,tabIndex:-1,"aria-modal":d?void 0:g===0?!0:void 0,"aria-labelledby":b.titleId,"aria-describedby":Ge,unmount:c},ze=!Kt(),R=D.None;return A&&!d&&(R|=D.RestoreFocus,R|=D.TabLock,l&&(R|=D.AutoFocus),ze&&(R|=D.InitialFocus)),m.createElement(lt,null,m.createElement(we,{force:!0},m.createElement(Xt,null,m.createElement(se.Provider,{value:qe},m.createElement(Re,{target:w},m.createElement(we,{force:!1},m.createElement(Xe,{slot:fe},m.createElement(Ve,null,m.createElement(tn,{initialFocus:i,initialFocusFallback:w,containers:J,features:R},m.createElement(vt,{value:C},$({ourProps:Ke,theirProps:v,slot:fe,defaultTag:dn,features:fn,visible:g===0,name:"Dialog"})))))))))))}),dn="div",fn=pe.RenderStrategy|pe.Static;function mn(e,t){let{transition:n=!1,open:r,...o}=e,a=$e(),i=e.hasOwnProperty("open")||a!==null,u=e.hasOwnProperty("onClose");if(!i&&!u)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!i)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!u)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!a&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(r!==void 0||n)&&!o.static?m.createElement(Ee,null,m.createElement(Te,{show:r,transition:n,unmount:o.unmount},m.createElement(ye,{ref:t,...o}))):m.createElement(Ee,null,m.createElement(ye,{ref:t,open:r,...o}))}let pn="div";function hn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-panel-${n}`,transition:o=!1,...a}=e,[{dialogState:i,unmount:u},l]=z("Dialog.Panel"),d=L(t,l.panelRef),c=s.useMemo(()=>({open:i===0}),[i]),v=y(f=>{f.stopPropagation()}),p={ref:d,id:r,onClick:v};return m.createElement(o?Y:s.Fragment,{...o?{unmount:u}:{}},$({ourProps:p,theirProps:a,slot:c,defaultTag:pn,name:"Dialog.Panel"}))}let vn="div";function gn(e,t){let{transition:n=!1,...r}=e,[{dialogState:o,unmount:a}]=z("Dialog.Backdrop"),i=s.useMemo(()=>({open:o===0}),[o]),u={ref:t,"aria-hidden":!0};return m.createElement(n?Y:s.Fragment,{...n?{unmount:a}:{}},$({ourProps:u,theirProps:r,slot:i,defaultTag:vn,name:"Dialog.Backdrop"}))}let wn="h2";function En(e,t){let n=s.useId(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:a,setTitleId:i}]=z("Dialog.Title"),u=L(t);s.useEffect(()=>(i(r),()=>i(null)),[r,i]);let l=s.useMemo(()=>({open:a===0}),[a]);return $({ourProps:{ref:u,id:r},theirProps:o,slot:l,defaultTag:wn,name:"Dialog.Title"})}let yn=x(mn),_e=x(hn);x(gn);let bn=x(En),xn=Object.assign(yn,{Panel:_e,Title:bn,Description:pt});function be({className:e="",disabled:t,children:n,...r}){return h.jsx("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function $n({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const a=()=>{r&&o()},i={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return h.jsx(Te,{show:t,leave:"duration-200",children:h.jsxs(xn,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[h.jsx(Y,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:h.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),h.jsx(Y,{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:h.jsx(_e,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${i}`,children:e})})]})})}function Tn({type:e="button",className:t="",disabled:n,children:r,...o}){return h.jsx("button",{...o,type:e,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Mn({className:e=""}){const[t,n]=s.useState(!1),r=s.useRef(),{data:o,setData:a,delete:i,processing:u,reset:l,errors:d}=Je({password:""}),c=()=>{n(!0)},v=f=>{f.preventDefault(),i(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>p(),onError:()=>r.current.focus(),onFinish:()=>l()})},p=()=>{n(!1),l()};return h.jsxs("section",{className:`space-y-6 ${e}`,children:[h.jsxs("header",{children:[h.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),h.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),h.jsx(be,{onClick:c,children:"Delete Account"}),h.jsx($n,{show:t,onClose:p,children:h.jsxs("form",{onSubmit:v,className:"p-6",children:[h.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),h.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),h.jsxs("div",{className:"mt-6",children:[h.jsx(tt,{htmlFor:"password",value:"Password",className:"sr-only"}),h.jsx(Qe,{id:"password",type:"password",name:"password",ref:r,value:o.password,onChange:f=>a("password",f.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),h.jsx(et,{message:d.password,className:"mt-2"})]}),h.jsxs("div",{className:"mt-6 flex justify-end",children:[h.jsx(Tn,{onClick:p,children:"Cancel"}),h.jsx(be,{className:"ms-3",disabled:u,children:"Delete Account"})]})]})})]})}export{Mn as default};
