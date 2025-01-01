"use strict";(self.webpackChunkbrownnshine=self.webpackChunkbrownnshine||[]).push([[725],{106:(e,t,n)=>{n.r(t),n.d(t,{MediaLightBox:()=>ln,default:()=>ln});var r=n(651),l=n(43),o=n(950);const i="carousel",c="controller",a="portal",s="toolbar",u="captions",d="fullscreen",f="thumbnails",h="loading",m="error",p="complete",v="placeholder",g=e=>"active-slide-".concat(e),E=g(h),b=g("playing"),y=g(p),x="fullsize",w="flex_center",C="no_scroll_padding",_="prev",I="next",M="swipe",N="close",P="onPointerDown",L="onPointerMove",k="onPointerUp",O="onPointerLeave",S="onPointerCancel",R="onKeyDown",F="onKeyUp",T="onWheel",D="Escape",H="ArrowLeft",A="ArrowRight",W="icon",B="contain",X="cover",z="Unknown action type",V={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[N]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:B,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullDown:!1,closeOnBackdropClick:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function U(e,t){return{name:e,component:t}}function G(e,t){return{module:e,children:t}}function Y(e,t,n){return e.module.name===t?n(e):e.children?[G(e.module,e.children.flatMap((e=>{var r;return null!==(r=Y(e,t,n))&&void 0!==r?r:[]})))]:[e]}function q(e,t,n){return e.flatMap((e=>{var r;return null!==(r=Y(e,t,n))&&void 0!==r?r:[]}))}const j=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return[...t].filter((e=>!!e)).join(" ")},K="yarl__",J=e=>"".concat(K).concat(e),Q=e=>"--".concat(K).concat(e),Z=(e,t)=>"".concat(e).concat(t?"_".concat(t):""),$=e=>t=>Z(e,t),ee=(e,t)=>e&&e[t]?e[t]:t,te=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return()=>{t.forEach((e=>{e()}))}},ne=(e,t,n)=>()=>{const r=l.useContext(n);if(!r)throw new Error("".concat(e," must be used within a ").concat(t,".Provider"));return r},re=()=>typeof window<"u";const le=e=>void 0===e.type||"image"===e.type,oe=(e,t)=>e.imageFit===X||e.imageFit!==B&&t===X;function ie(e){if("number"==typeof e)return{pixel:e};if("string"==typeof e){const t=parseInt(e,10);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function ce(e,t){const n=ie(t),r=void 0!==n.percent?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}const ae=(e,t)=>t>0?(e%t+t)%t:0,se=e=>e.length>0,ue=(e,t)=>se(e)?((e,t)=>e[ae(t,e.length)])(e,t):void 0;function de(e,t,n){if(!n)return e;const{buttons:r,...o}=e,i=r.findIndex((e=>e===t)),c=l.isValidElement(n)?l.cloneElement(n,{key:t},null):n;if(i>=0){const e=[...r];return e.splice(i,1,c),{buttons:e,...o}}return{buttons:[c,...r],...o}}function fe(){const e=e=>{e.stopPropagation()};return{onPointerDown:e,onKeyDown:e,onWheel:e}}const he=l.createContext(null),me=ne("useEvents","EventsContext",he);function pe(e){let{children:t}=e;const[n]=l.useState({});l.useEffect((()=>()=>{Object.keys(n).forEach((e=>delete n[e]))}),[n]);const r=l.useMemo((()=>{const e=(e,t)=>{var r;null===(r=n[e])||void 0===r||r.splice(0,n[e].length,...n[e].filter((e=>e!==t)))};return{publish:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];let[l,o]=t;var i;null===(i=n[l])||void 0===i||i.forEach((e=>e(o)))},subscribe:(t,r)=>(n[t]||(n[t]=[]),n[t].push(r),()=>e(t,r)),unsubscribe:e}}),[n]);return l.createElement(he.Provider,{value:r},t)}const ve=l.createContext(null),ge=ne("useLightboxProps","LightboxPropsContext",ve);function Ee(e){let{children:t,...n}=e;return l.createElement(ve.Provider,{value:n},t)}const be=l.createContext(null),ye=ne("useLightboxState","LightboxStateContext",be),xe=l.createContext(null),we=ne("useLightboxDispatch","LightboxDispatchContext",xe);function Ce(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(null==t?void 0:t.increment)||0,l=e.globalIndex+r,o=ae(l,n.length);return{slides:n,currentIndex:o,globalIndex:l,currentSlide:ue(n,o),animation:r||t.duration?{increment:r,duration:t.duration,easing:t.easing}:void 0}}case"update":return{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:ue(t.slides,t.index)};default:throw new Error(z)}}function _e(e){let{slides:t,index:n,children:r}=e;const[o,i]=l.useReducer(Ce,{slides:t,currentIndex:n,globalIndex:n,currentSlide:ue(t,n)});l.useEffect((()=>{i({type:"update",slides:t,index:n})}),[t,n]);const c=l.useMemo((()=>({...o,state:o,dispatch:i})),[o,i]);return l.createElement(xe.Provider,{value:i},l.createElement(be.Provider,{value:c},r))}const Ie=l.createContext(null),Me=ne("useTimeouts","TimeoutsContext",Ie);function Ne(e){let{children:t}=e;const[n]=l.useState([]);l.useEffect((()=>()=>{n.forEach((e=>window.clearTimeout(e))),n.splice(0,n.length)}),[n]);const r=l.useMemo((()=>{const e=e=>{n.splice(0,n.length,...n.filter((t=>t!==e)))};return{setTimeout:(t,r)=>{const l=window.setTimeout((()=>{e(l),t()}),r);return n.push(l),l},clearTimeout:t=>{void 0!==t&&(e(t),window.clearTimeout(t))}}}),[n]);return l.createElement(Ie.Provider,{value:r},t)}const Pe=l.forwardRef((function(e,t){let{label:n,className:r,icon:o,renderIcon:i,onClick:c,style:a,...s}=e;const{styles:u,labels:d}=ge();return l.createElement("button",{ref:t,type:"button","aria-label":ee(d,n),className:j(J("button"),r),onClick:c,style:{...a,...u.button},...s},i?i():l.createElement(o,{className:J(W),style:u.icon}))}));function Le(e,t){const n=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...e},t);return n.displayName=e,n}function ke(e,t){return Le(e,l.createElement("g",{fill:"currentColor"},l.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const Oe=ke("Close",l.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),Se=ke("Previous",l.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),Re=ke("Next",l.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),Fe=ke("Loading",l.createElement(l.Fragment,null,Array.from({length:8}).map(((e,t,n)=>l.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:"rotate(".concat(360/n.length*t,", 12, 12)")}))))),Te=ke("Error",l.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),De=re()?l.useLayoutEffect:l.useEffect;function He(){const[e,t]=l.useState(!1);return l.useEffect((()=>{var e,n;const r=null===(e=window.matchMedia)||void 0===e?void 0:e.call(window,"(prefers-reduced-motion: reduce)");t(null==r?void 0:r.matches);const l=e=>t(e.matches);return null===(n=null==r?void 0:r.addEventListener)||void 0===n||n.call(r,"change",l),()=>{var e;return null===(e=null==r?void 0:r.removeEventListener)||void 0===e?void 0:e.call(r,"change",l)}}),[]),e}function Ae(e,t){const n=l.useRef(),r=l.useRef(),o=He();return De((()=>{var l,i,c;if(e.current&&void 0!==n.current&&!o){const{keyframes:o,duration:s,easing:u,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),function(e){let t=0,n=0,r=0;const l=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(l){const e=l[1].split(",").map((e=>Number.parseInt(e,10)));6===e.length?(t=e[4],n=e[5]):16===e.length&&(t=e[12],n=e[13],r=e[14])}return{x:t,y:n,z:r}}(e.current))||{};if(o&&s){null===(l=r.current)||void 0===l||l.cancel(),r.current=void 0;try{r.current=null===(c=(i=e.current).animate)||void 0===c?void 0:c.call(i,o,{duration:s,easing:u})}catch(a){console.error(a)}r.current&&(r.current.onfinish=()=>{r.current=void 0,null==d||d()})}}n.current=void 0})),{prepareAnimation:e=>{n.current=e},isAnimationPlaying:()=>{var e;return"running"===(null===(e=r.current)||void 0===e?void 0:e.playState)}}}function We(){const e=l.useRef(null),t=l.useRef(),[n,r]=l.useState();return{setContainerRef:l.useCallback((n=>{e.current=n,t.current&&(t.current.disconnect(),t.current=void 0);const l=()=>{if(n){const e=window.getComputedStyle(n),t=e=>parseFloat(e)||0;r({width:Math.round(n.clientWidth-t(e.paddingLeft)-t(e.paddingRight)),height:Math.round(n.clientHeight-t(e.paddingTop)-t(e.paddingBottom))})}else r(void 0)};l(),n&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(l),t.current.observe(n))}),[]),containerRef:e,containerRect:n}}function Be(){const e=l.useRef(),{setTimeout:t,clearTimeout:n}=Me();return l.useCallback(((r,l)=>{n(e.current),e.current=t(r,l>0?l:0)}),[t,n])}function Xe(e){const t=l.useRef(e);return De((()=>{t.current=e})),l.useCallback((function(){for(var e,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return null===(e=t.current)||void 0===e?void 0:e.call(t,...r)}),[])}function ze(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function Ve(e,t){return l.useMemo((()=>null==e&&null==t?null:n=>{ze(e,n),ze(t,n)}),[e,t])}function Ue(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=l.useRef();De((()=>{t&&n.current&&(n.current=!1,e())}),[t,e]);return{onFocus:l.useCallback((()=>{n.current=!0}),[]),onBlur:l.useCallback((()=>{n.current=!1}),[])}}function Ge(){const[e,t]=l.useState(!1);return De((()=>{t("rtl"===window.getComputedStyle(window.document.documentElement).direction)}),[]),e}function Ye(e,t){const n=l.useRef(0),r=Be(),o=Xe((function(){for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];n.current=Date.now(),e(r)}));return l.useCallback((function(){for(var e=arguments.length,l=new Array(e),i=0;i<e;i++)l[i]=arguments[i];r((()=>{o(l)}),t-(Date.now()-n.current))}),[t,o,r])}const qe=$("slide"),je=$("slide_image");function Ke(e){let{slide:t,offset:n,render:r,rect:o,imageFit:i,imageProps:c,onClick:a,onLoad:s,style:u}=e;var d,f,E,b,y,x,w;const[C,_]=l.useState(h),{publish:I}=me(),{setTimeout:M}=Me(),N=l.useRef(null);l.useEffect((()=>{0===n&&I(g(C))}),[n,C,I]);const P=Xe((e=>{("decode"in e?e.decode():Promise.resolve()).catch((()=>{})).then((()=>{e.parentNode&&(_(p),M((()=>{null==s||s(e)}),0))}))})),L=l.useCallback((e=>{N.current=e,null!=e&&e.complete&&P(e)}),[P]),k=l.useCallback((e=>{P(e.currentTarget)}),[P]),O=l.useCallback((()=>{_(m)}),[]),S=oe(t,i),R=(e,t)=>Number.isFinite(e)?e:t,F=R(Math.max(...(null!==(f=null===(d=t.srcSet)||void 0===d?void 0:d.map((e=>e.width)))&&void 0!==f?f:[]).concat(t.width?[t.width]:[]).filter(Boolean)),(null===(E=N.current)||void 0===E?void 0:E.naturalWidth)||0),T=R(Math.max(...(null!==(y=null===(b=t.srcSet)||void 0===b?void 0:b.map((e=>e.height)))&&void 0!==y?y:[]).concat(t.height?[t.height]:[]).filter(Boolean)),(null===(x=N.current)||void 0===x?void 0:x.naturalHeight)||0),D=F&&T?{maxWidth:"min(".concat(F,"px, 100%)"),maxHeight:"min(".concat(T,"px, 100%)")}:{maxWidth:"100%",maxHeight:"100%"},H=null===(w=t.srcSet)||void 0===w?void 0:w.sort(((e,t)=>e.width-t.width)).map((e=>"".concat(e.src," ").concat(e.width,"w"))).join(", "),A=H&&o&&re()?"".concat(Math.round(Math.min(o&&!S&&t.width&&t.height?o.height/t.height*t.width:Number.MAX_VALUE,o.width)),"px"):void 0,{style:B,className:X,...z}=c||{};return l.createElement(l.Fragment,null,l.createElement("img",{ref:L,onLoad:k,onError:O,onClick:a,draggable:!1,className:j(J(je()),S&&J(je("cover")),C!==p&&J(je("loading")),X),style:{...D,...u,...B},...z,alt:t.alt,sizes:A,srcSet:H,src:t.src}),C!==p&&l.createElement("div",{className:J(qe(v))},C===h&&(null!=r&&r.iconLoading?r.iconLoading():l.createElement(Fe,{className:j(J(W),J(qe(h)))})),C===m&&(null!=r&&r.iconError?r.iconError():l.createElement(Te,{className:j(J(W),J(qe(m)))}))))}var Je,Qe,Ze;(Qe=Je||(Je={}))[Qe.NONE=0]="NONE",Qe[Qe.SWIPE=1]="SWIPE",Qe[Qe.PULL_DOWN=2]="PULL_DOWN",Qe[Qe.ANIMATION=3]="ANIMATION",function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL_DOWN=2]="PULL_DOWN"}(Ze||(Ze={}));const $e=30;function et(e,t,n,r,o,i,c,a,s,u,d,f,h){const m=l.useRef(0),p=l.useRef([]),v=l.useRef(),g=l.useRef(0),E=l.useRef(Ze.NONE),b=l.useCallback((e=>{v.current===e.pointerId&&(v.current=void 0,E.current=Ze.NONE);const t=p.current;t.splice(0,t.length,...t.filter((t=>t.pointerId!==e.pointerId)))}),[]),y=l.useCallback((e=>{b(e),e.persist(),p.current.push(e)}),[b]),x=Xe((e=>{y(e)})),w=Xe((e=>{if(p.current.find((t=>t.pointerId===e.pointerId))&&v.current===e.pointerId){const e=Date.now()-g.current,t=m.current;E.current===Ze.SWIPE?Math.abs(t)>.3*n||Math.abs(t)>5&&e<r?c(t,e):a(t):E.current===Ze.PULL_DOWN&&(t>2*$e?f(t,e):h(t)),m.current=0,E.current=Ze.NONE}b(e)}));!function(e,t,n,r,o){l.useEffect((()=>o?()=>{}:te(e(P,t),e(L,n),e(k,r),e(O,r),e(S,r))),[e,t,n,r,o])}(e,x,Xe((e=>{const n=p.current.find((t=>t.pointerId===e.pointerId));if(n){const r=v.current===e.pointerId;if(0===e.buttons)return void(r&&0!==m.current?w(e):b(n));const l=e.clientX-n.clientX,c=e.clientY-n.clientY;if(void 0===v.current){const n=t=>{y(e),v.current=e.pointerId,g.current=Date.now(),E.current=t};Math.abs(l)>Math.abs(c)&&Math.abs(l)>$e&&t(l)?(n(Ze.SWIPE),o()):s&&Math.abs(c)>Math.abs(l)&&c>$e&&(n(Ze.PULL_DOWN),u())}else r&&(E.current===Ze.SWIPE?(m.current=l,i(l)):E.current===Ze.PULL_DOWN&&(m.current=c,d(c)))}})),w)}const tt="wheel";function nt(e){(Math.abs(e.deltaX)>Math.abs(e.deltaY)||e.ctrlKey)&&e.preventDefault()}const rt=$("container"),lt=l.createContext(null),ot=ne("useController","ControllerContext",lt);const it=U(c,(function(e){let{children:t,...n}=e;var r;const{carousel:o,animation:i,controller:c,on:a,styles:s,render:u}=n,[d,f]=l.useState(),h=ye(),m=we(),[p,v]=l.useState(Je.NONE),g=l.useRef(0),E=l.useRef(0),b=l.useRef(1),{registerSensors:y,subscribeSensors:x}=function(){const[e]=l.useState({}),t=l.useCallback(((t,n)=>{var r;null===(r=e[t])||void 0===r||r.forEach((e=>{n.isPropagationStopped()||e(n)}))}),[e]);return{registerSensors:l.useMemo((()=>({onPointerDown:e=>t(P,e),onPointerMove:e=>t(L,e),onPointerUp:e=>t(k,e),onPointerLeave:e=>t(O,e),onPointerCancel:e=>t(S,e),onKeyDown:e=>t(R,e),onKeyUp:e=>t(F,e),onWheel:e=>t(T,e)})),[t]),subscribeSensors:l.useCallback(((t,n)=>(e[t]||(e[t]=[]),e[t].unshift(n),()=>{const r=e[t];r&&r.splice(0,r.length,...r.filter((e=>e!==n)))})),[e])}}(),{subscribe:C,publish:D}=me(),H=Be(),A=Be(),W=Be(),{containerRef:B,setContainerRef:X,containerRect:z}=We(),V=Ve(function(){const e=l.useRef(null);return l.useCallback((t=>{var n;t?t.addEventListener(tt,nt,{passive:!1}):null===(n=e.current)||void 0===n||n.removeEventListener(tt,nt),e.current=t}),[])}(),X),U=l.useRef(null),G=Ve(U,void 0),Y=Ge(),q=e=>(Y?-1:1)*("number"==typeof e?e:1),K=Xe((()=>{var e;return null===(e=B.current)||void 0===e?void 0:e.focus()})),Z=Xe((()=>n)),$=Xe((()=>h)),ee=l.useCallback((e=>D(_,e)),[D]),ne=l.useCallback((e=>D(I,e)),[D]),re=l.useCallback((()=>D(N)),[D]),le=e=>!(o.finite&&(q(e)>0&&0===h.currentIndex||q(e)<0&&h.currentIndex===h.slides.length-1)),oe=e=>{var t;g.current=e,null===(t=B.current)||void 0===t||t.style.setProperty(Q("swipe_offset"),"".concat(Math.round(e),"px"))},{closeOnPullDown:ae}=c,se=e=>{var t,n;E.current=e,b.current=Math.min(Math.max(function(e){const t=10**(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0);return Math.round((e+Number.EPSILON)*t)/t}(1-e/60*.5,2),.5),1),null===(t=B.current)||void 0===t||t.style.setProperty(Q("pull_down_offset"),"".concat(Math.round(e),"px")),null===(n=B.current)||void 0===n||n.style.setProperty(Q("pull_down_opacity"),"".concat(b.current))},{prepareAnimation:ue}=Ae(U,((e,t,n)=>{if(U.current&&z)return{keyframes:[{transform:"translate(0, ".concat(e.rect.y-t.y+n.y,"px)"),opacity:e.opacity},{transform:"translate(0, 0)",opacity:1}],duration:e.duration,easing:i.easing.fade}})),de=(e,t)=>{if(ae){se(e);let n=0;U.current&&(n=i.fade*(t?2:1),ue({rect:U.current.getBoundingClientRect(),opacity:b.current,duration:n})),W((()=>{se(0),v(Je.NONE)}),n),v(Je.ANIMATION),t||re()}},{prepareAnimation:fe,isAnimationPlaying:he}=Ae(U,((e,t,n)=>{var r;if(U.current&&z&&null!==(r=h.animation)&&void 0!==r&&r.duration){const r=ie(o.spacing),l=(r.percent?r.percent*z.width/100:r.pixel)||0;return{keyframes:[{transform:"translate(".concat(q(h.globalIndex-e.index)*(z.width+l)+e.rect.x-t.x+n.x,"px, 0)")},{transform:"translate(0, 0)"}],duration:h.animation.duration,easing:h.animation.easing}}})),pe=Xe((e=>{var t,n;const r=e.offset||0,l=r?i.swipe:null!==(t=i.navigation)&&void 0!==t?t:i.swipe,o=r||he()?i.easing.swipe:i.easing.navigation;let{direction:c}=e;const a=null!==(n=e.count)&&void 0!==n?n:1;let s=Je.ANIMATION,u=l*a;if(!c){const t=null==z?void 0:z.width,n=e.duration||0,o=t?l/t*Math.abs(r):l;0!==a?(n<o?u=u/o*Math.max(n,o/5):t&&(u=l/t*(t-Math.abs(r))),c=q(r)>0?_:I):u=l/2}let d=0;c===_?le(q(1))?d=-a:(s=Je.NONE,u=l):c===I&&(le(q(-1))?d=a:(s=Je.NONE,u=l)),u=Math.round(u),A((()=>{oe(0),v(Je.NONE)}),u),U.current&&fe({rect:U.current.getBoundingClientRect(),index:h.globalIndex}),v(s),D(M,{type:"swipe",increment:d,duration:u,easing:o})}));l.useEffect((()=>{var e,t;null!==(e=h.animation)&&void 0!==e&&e.increment&&null!==(t=h.animation)&&void 0!==t&&t.duration&&H((()=>m({type:"swipe",increment:0})),h.animation.duration)}),[h.animation,m,H]);const ve=[x,le,(null==z?void 0:z.width)||0,i.swipe,()=>v(Je.SWIPE),e=>oe(e),(e,t)=>pe({offset:e,duration:t,count:1}),e=>pe({offset:e,count:0})],ge=[()=>{ae&&v(Je.PULL_DOWN)},e=>se(e),e=>de(e),e=>de(e,!0)];et(...ve,ae,...ge),function(e,t,n,r,o,i,c,a,s){const u=l.useRef(0),d=l.useRef(0),f=l.useRef(),h=l.useRef(),m=l.useRef(0),p=l.useRef(0),{setTimeout:v,clearTimeout:g}=Me(),E=l.useCallback((()=>{f.current&&(g(f.current),f.current=void 0)}),[g]),b=l.useCallback((()=>{h.current&&(g(h.current),h.current=void 0)}),[g]),y=Xe((()=>{e!==Je.SWIPE&&(u.current=0,p.current=0,E(),b())}));l.useEffect(y,[e,y]);const x=Xe((e=>{h.current=void 0,u.current===e&&s(u.current)})),w=Xe((t=>{if(!t.ctrlKey&&!(Math.abs(t.deltaY)>Math.abs(t.deltaX)))if(e===Je.NONE){if(Math.abs(t.deltaX)<=1.2*Math.abs(m.current))return void(m.current=t.deltaX);if(!n(-t.deltaX))return;if(d.current+=t.deltaX,E(),Math.abs(d.current)>30)d.current=0,m.current=0,p.current=Date.now(),i();else{const e=d.current;f.current=v((()=>{f.current=void 0,e===d.current&&(d.current=0)}),o)}}else if(e===Je.SWIPE){let e=u.current-t.deltaX;if(e=Math.min(Math.abs(e),r)*Math.sign(e),u.current=e,c(e),b(),Math.abs(e)>.2*r)return m.current=t.deltaX,void a(e,Date.now()-p.current);h.current=v((()=>x(e)),2*o)}else m.current=t.deltaX}));l.useEffect((()=>t(T,w)),[t,w])}(p,...ve);const Ee=Xe((()=>{var e;c.focus&&(null===(e=B.current)||void 0===e||e.focus())}));l.useEffect(Ee,[Ee]);const be=Xe((()=>{var e;null===(e=a.view)||void 0===e||e.call(a,{index:h.currentIndex})}));l.useEffect(be,[h.globalIndex,be]),l.useEffect((()=>te(C(_,(e=>pe({direction:_,...e}))),C(I,(e=>pe({direction:I,...e}))),C(M,(e=>m(e))))),[C,pe,m]);const xe=l.useMemo((()=>({prev:ee,next:ne,close:re,focus:K,slideRect:z?ce(z,o.padding):{width:0,height:0},containerRect:z||{width:0,height:0},subscribeSensors:x,containerRef:B,setCarouselRef:G,toolbarWidth:d,setToolbarWidth:f})),[ee,ne,re,K,x,z,B,G,d,f,o.padding]);return l.useImperativeHandle(c.ref,(()=>({prev:ee,next:ne,close:re,focus:K,getLightboxProps:Z,getLightboxState:$})),[ee,ne,re,K,Z,$]),l.createElement("div",{ref:V,className:j(J(rt()),J(w)),style:{...p===Je.SWIPE?{[Q("swipe_offset")]:"".concat(Math.round(g.current),"px")}:null,...p===Je.PULL_DOWN?{[Q("pull_down_offset")]:"".concat(Math.round(E.current),"px"),[Q("pull_down_opacity")]:"".concat(b.current)}:null,..."none"!==c.touchAction?{[Q("controller_touch_action")]:c.touchAction}:null,...s.container},...c.aria?{role:"presentation","aria-live":"polite"}:null,tabIndex:-1,...y},z&&l.createElement(lt.Provider,{value:xe},t,null===(r=u.controls)||void 0===r?void 0:r.call(u)))}));function ct(e){return Z(i,e)}function at(e){return Z("slide",e)}function st(e){let{slide:t,offset:n}=e;const r=l.useRef(null),{currentIndex:o}=ye(),{slideRect:i,close:c}=ot(),{render:a,carousel:{imageFit:s,imageProps:u},on:{click:d},controller:{closeOnBackdropClick:f},styles:{slide:h}}=ge();return l.createElement("div",{ref:r,className:j(J(at()),0===n&&J(at("current")),J(w)),onClick:e=>{const t=r.current,n=e.target instanceof HTMLElement?e.target:void 0;f&&n&&t&&(n===t||Array.from(t.children).find((e=>e===n))&&n.classList.contains(J(x)))&&c()},style:h},(()=>{var e,r,c,f;let h=null===(e=a.slide)||void 0===e?void 0:e.call(a,{slide:t,offset:n,rect:i});return!h&&le(t)&&(h=l.createElement(Ke,{slide:t,offset:n,render:a,rect:i,imageFit:s,imageProps:u,onClick:0===n?()=>null==d?void 0:d({index:o}):void 0})),h?l.createElement(l.Fragment,null,null===(r=a.slideHeader)||void 0===r?void 0:r.call(a,{slide:t}),(null!==(c=a.slideContainer)&&void 0!==c?c:e=>{let{children:t}=e;return t})({slide:t,children:h}),null===(f=a.slideFooter)||void 0===f?void 0:f.call(a,{slide:t})):null})())}function ut(){const e=ge().styles.slide;return l.createElement("div",{className:J("slide"),style:e})}const dt=U(i,(function(e){let{carousel:t}=e;const{slides:n,currentIndex:r,globalIndex:o}=ye(),{setCarouselRef:i}=ot(),c=ie(t.spacing),a=ie(t.padding),s=[],u=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}(t,n,1);if(se(n)){for(let e=r-u;e<r;e+=1){const i=o+e-r;s.push(!t.finite||e>=0?l.createElement(st,{key:i,slide:n[(e+u*n.length)%n.length],offset:e-r}):l.createElement(ut,{key:i}))}s.push(l.createElement(st,{key:o,slide:n[r],offset:0}));for(let e=r+1;e<=r+u;e+=1){const i=o+e-r;s.push(!t.finite||e<=n.length-1?l.createElement(st,{key:i,slide:n[e%n.length],offset:e-r}):l.createElement(ut,{key:i}))}}return l.createElement("div",{ref:i,className:j(J(ct()),s.length>0&&J(ct("with_slides"))),style:{["".concat(Q(ct("slides_count")))]:s.length,["".concat(Q(ct("spacing_px")))]:c.pixel||0,["".concat(Q(ct("spacing_percent")))]:c.percent||0,["".concat(Q(ct("padding_px")))]:a.pixel||0,["".concat(Q(ct("padding_percent")))]:a.percent||0}},s)}));function ft(){const{carousel:e}=ge(),{slides:t,currentIndex:n}=ye();return{prevDisabled:0===t.length||e.finite&&0===n,nextDisabled:0===t.length||e.finite&&n===t.length-1}}function ht(e){let{label:t,icon:n,renderIcon:r,action:o,onClick:i,disabled:c,style:a}=e;return l.createElement(Pe,{label:t,icon:n,renderIcon:r,className:J("navigation_".concat(o)),disabled:c,onClick:i,style:a,...Ue(ot().focus,c)})}const mt=U("navigation",(function(e){let{render:{buttonPrev:t,buttonNext:n,iconPrev:r,iconNext:o},styles:i}=e;const{prev:c,next:a,subscribeSensors:s}=ot(),{prevDisabled:u,nextDisabled:d}=ft();return function(e){var t;const n=Ge(),{publish:r}=me(),{animation:o}=ge(),{prevDisabled:i,nextDisabled:c}=ft(),a=(null!==(t=o.navigation)&&void 0!==t?t:o.swipe)/2,s=Ye((()=>r(_)),a),u=Ye((()=>r(I)),a),d=Xe((e=>{switch(e.key){case D:r(N);break;case H:(n?c:i)||(n?u:s)();break;case A:(n?i:c)||(n?s:u)()}}));l.useEffect((()=>e(R,d)),[e,d])}(s),l.createElement(l.Fragment,null,t?t():l.createElement(ht,{label:"Previous",action:_,icon:Se,renderIcon:r,style:i.navigationPrev,disabled:u,onClick:c}),n?n():l.createElement(ht,{label:"Next",action:I,icon:Re,renderIcon:o,style:i.navigationNext,disabled:d,onClick:a}))})),pt=J("no_scroll"),vt=J(C);function gt(e){return"style"in e}function Et(e,t,n){const r=window.getComputedStyle(e),l=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,i=e.style.getPropertyValue(l);return e.style.setProperty(l,"".concat((parseInt(o,10)||0)+t,"px")),()=>{i?e.style.setProperty(l,i):e.style.removeProperty(l)}}const bt=U("no-scroll",(function(e){let{noScroll:{disabled:t},children:n}=e;const r=Ge();return De((()=>{if(t)return()=>{};const e=[],{body:n,documentElement:l}=document,o=Math.round(window.innerWidth-l.clientWidth);if(o>0){e.push(Et(n,o,r));const t=n.getElementsByTagName("*");for(let n=0;n<t.length;n+=1){const l=t[n];gt(l)&&"fixed"===window.getComputedStyle(l).getPropertyValue("position")&&!l.classList.contains(vt)&&e.push(Et(l,o,r))}}return n.classList.add(pt),()=>{n.classList.remove(pt),e.forEach((e=>e()))}}),[r,t]),l.createElement(l.Fragment,null,n)}));function yt(e){return Z(a,e)}function xt(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}const wt=U(a,(function(e){let{children:t,animation:n,styles:r,className:i,on:c,portal:a,close:s}=e;const[u,d]=l.useState(!1),[f,h]=l.useState(!1),m=l.useRef([]),{setTimeout:p}=Me(),{subscribe:v}=me(),g=He()?0:n.fade;l.useEffect((()=>(d(!0),()=>{d(!1),h(!1)})),[]);const E=Xe((()=>{var e;h(!1),null===(e=c.exiting)||void 0===e||e.call(c),p((()=>{var e;null===(e=c.exited)||void 0===e||e.call(c),s()}),g)}));l.useEffect((()=>v(N,E)),[v,E]);const b=Xe((e=>{var t,n,r;e.scrollTop,h(!0),null===(t=c.entering)||void 0===t||t.call(c);const l=null!==(r=null===(n=e.parentNode)||void 0===n?void 0:n.children)&&void 0!==r?r:[];for(let o=0;o<l.length;o+=1){const t=l[o];-1===["TEMPLATE","SCRIPT","STYLE"].indexOf(t.tagName)&&t!==e&&(m.current.push(xt(t,"inert","true")),m.current.push(xt(t,"aria-hidden","true")))}p((()=>{var e;null===(e=c.entered)||void 0===e||e.call(c)}),g)})),y=Xe((()=>{m.current.forEach((e=>e())),m.current=[]})),x=l.useCallback((e=>{e?b(e):y()}),[b,y]);return u?(0,o.createPortal)(l.createElement("div",{ref:x,className:j(i,J("root"),J(yt()),J(C),f&&J(yt("open"))),role:"presentation","aria-live":"polite",style:{...n.fade!==V.animation.fade?{[Q("fade_animation_duration")]:"".concat(g,"ms")}:null,...n.easing.fade!==V.animation.easing.fade?{[Q("fade_animation_timing_function")]:n.easing.fade}:null,...r.root}},t),a.root||document.body):null}));const Ct=U("root",(function(e){let{children:t}=e;return l.createElement(l.Fragment,null,t)}));function _t(e){return Z(s,e)}const It=U(s,(function(e){let{toolbar:{buttons:t},render:{buttonClose:n,iconClose:r},styles:o}=e;const{close:i,setToolbarWidth:c}=ot(),{setContainerRef:a,containerRect:s}=We();return De((()=>{c(null==s?void 0:s.width)}),[c,null==s?void 0:s.width]),l.createElement("div",{ref:a,style:o.toolbar,className:J(_t()),...fe()},null==t?void 0:t.map((e=>e===N?n?n():l.createElement(Pe,{key:N,label:"Close",icon:Oe,renderIcon:r,onClick:i}):e)))}));function Mt(e,t){var n;return l.createElement(e.module.component,{key:e.module.name,...t},null===(n=e.children)||void 0===n?void 0:n.map((e=>Mt(e,t))))}function Nt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{easing:n,...r}=e,{easing:l,...o}=t;return{easing:{...n,...l},...r,...o}}function Pt(e){let{carousel:t,animation:n,render:r,toolbar:o,controller:i,noScroll:a,on:s,plugins:u,slides:d,index:f,...h}=e;const{animation:m,carousel:p,render:v,toolbar:g,controller:E,noScroll:b,on:y,slides:x,index:w,plugins:C,..._}=V,{config:I,augmentation:M}=function(e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=e;const r=e=>{const t=[...n];for(;t.length>0;){const n=t.pop();if((null==n?void 0:n.module.name)===e)return!0;null!=n&&n.children&&t.push(...n.children)}return!1},l=(e,t)=>{n=""!==e?q(n,e,(e=>[G(t,[e])])):[G(t,n)]},o=(e,t)=>{n=q(n,e,(e=>[G(e.module,[G(t,e.children)])]))},i=(e,t,r)=>{n=q(n,e,(e=>{var n;return[G(e.module,[...r?[G(t)]:[],...null!==(n=e.children)&&void 0!==n?n:[],...r?[]:[G(t)]])]}))},a=(e,t,r)=>{n=q(n,e,(e=>[...r?[G(t)]:[],e,...r?[]:[G(t)]]))},s=e=>{o(c,e)},u=(e,t)=>{n=q(n,e,(e=>[G(t,e.children)]))},d=e=>{n=q(n,e,(e=>e.children))},f=e=>{t.push(e)};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((e=>{e({contains:r,addParent:l,append:o,addChild:i,addSibling:a,addModule:s,replace:u,remove:d,augment:f})})),{config:n,augmentation:e=>t.reduce(((e,t)=>t(e)),e)}}([G(wt,[G(bt,[G(it,[G(dt),G(It),G(mt)])])])],u||C),N=M({animation:Nt(m,n),carousel:{...p,...t},render:{...v,...r},toolbar:{...g,...o},controller:{...E,...i},noScroll:{...b,...a},on:{...y,...s},..._,...h});return N.open?l.createElement(Ee,{...N},l.createElement(_e,{slides:d||x,index:f||w},l.createElement(Ne,null,l.createElement(pe,null,Mt(G(Ct,I),N))))):null}var Lt=(e=>(e.LIGHT_BOX_OPEN="LIGHT_BOX_OPEN",e.LIGHT_BOX_CLOSE="LIGHT_BOX_CLOSE",e.LIGHT_BOX_OPEN_BY_MEDIA_INDEX="LIGHT_BOX_OPEN_BY_MEDIA_INDEX",e.LIGHT_BOX_MOVE_PHOTO_BY_INDEX="LIGHT_BOX_MOVE_PHOTO_BY_INDEX",e))(Lt||{});const kt={mediaIndex:0,isOpen:!1},Ot=(e,t)=>{switch(t.type){case Lt.LIGHT_BOX_OPEN:return{...e,isOpen:!0};case Lt.LIGHT_BOX_CLOSE:return{...e,isOpen:!1};case Lt.LIGHT_BOX_OPEN_BY_MEDIA_INDEX:case Lt.LIGHT_BOX_MOVE_PHOTO_BY_INDEX:return{isOpen:!0,mediaIndex:t.payload};default:return e}},St=e=>J("slide_".concat(e)),Rt={descriptionTextAlign:"start",descriptionMaxLines:3,showToggle:!1},Ft=e=>({...Rt,...e});const Tt=l.createContext(null),Dt=ne("useCaptions","CaptionsContext",Tt);function Ht(e){let{captions:t,children:n}=e;const{ref:r}=Ft(t),[o,i]=l.useState(!0),c=l.useMemo((()=>({visible:o,show:()=>i(!0),hide:()=>i(!1)})),[o]);return l.useImperativeHandle(r,(()=>c),[c]),l.createElement(Tt.Provider,{value:c},n)}function At(e){let{title:t}=e;const{toolbarWidth:n}=ot(),{styles:r}=ge(),{visible:o}=Dt();return o?l.createElement("div",{style:r.captionsTitleContainer,className:j(St("captions_container"),St("title_container"))},l.createElement("div",{className:St("title"),style:{...n?{[Q("toolbar_width")]:"".concat(n,"px")}:null,...r.captionsTitle}},t)):null}function Wt(e){let{description:t}=e;const{descriptionTextAlign:n,descriptionMaxLines:r}=function(){const{captions:e}=ge();return Ft(e)}(),{styles:o}=ge(),{visible:i}=Dt();return i?l.createElement("div",{style:o.captionsDescriptionContainer,className:j(St("captions_container"),St("description_container"))},l.createElement("div",{className:St("description"),style:{...n!==Rt.descriptionTextAlign||r!==Rt.descriptionMaxLines?{[Q("slide_description_text_align")]:n,[Q("slide_description_max_lines")]:r}:null,...o.captionsDescription}},"string"==typeof t?t.split("\n").flatMap(((e,t)=>[...t>0?[l.createElement("br",{key:t})]:[],e])):t)):null}const Bt=()=>l.createElement(l.Fragment,null,l.createElement("path",{strokeWidth:2,stroke:"currentColor",strokeLinejoin:"round",fill:"none",d:"M3 5l18 0l0 14l-18 0l0-14z"}),l.createElement("path",{d:"M7 15h3c.55 0 1-.45 1-1v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm7 0h3c.55 0 1-.45 1-1v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z"})),Xt=ke("CaptionsVisible",Bt()),zt=function(e,t){return Le(e,l.createElement(l.Fragment,null,l.createElement("defs",null,l.createElement("mask",{id:"strike"},l.createElement("path",{d:"M0 0h24v24H0z",fill:"white"}),l.createElement("path",{d:"M0 0L24 24",stroke:"black",strokeWidth:4}))),l.createElement("path",{d:"M0.70707 2.121320L21.878680 23.292883",stroke:"currentColor",strokeWidth:2}),l.createElement("g",{fill:"currentColor",mask:"url(#strike)"},l.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t)))}("CaptionsVisible",Bt());function Vt(){const{visible:e,show:t,hide:n}=Dt(),{render:r}=ge();return r.buttonCaptions?l.createElement(l.Fragment,null,r.buttonCaptions({visible:e,show:t,hide:n})):l.createElement(Pe,{label:e?"Hide captions":"Show captions",icon:e?Xt:zt,renderIcon:e?r.iconCaptionsVisible:r.iconCaptionsHidden,onClick:e?n:t})}function Ut(e){let{augment:t,addModule:n}=e;t((e=>{let{captions:t,render:{slideFooter:n,...r},toolbar:o,...i}=e;const c=Ft(t);return{render:{slideFooter:e=>{let{slide:t}=e;return l.createElement(l.Fragment,null,null==n?void 0:n({slide:t}),t.title&&l.createElement(At,{title:t.title}),t.description&&l.createElement(Wt,{description:t.description}))},...r},toolbar:de(o,u,c.showToggle?l.createElement(Vt,null):null),captions:c,...i}})),n(U(u,Ht))}const Gt={auto:!1,ref:null},Yt=e=>({...Gt,...e}),qt=l.createContext(null),jt=ne("useFullscreen","FullscreenContext",qt);function Kt(e){let{fullscreen:t,children:n}=e;const{auto:r,ref:o}=Yt(t),i=l.useRef(null),[c,a]=l.useState(!1),[s,u]=l.useState();De((()=>{var e,t,n,r;u(!(null!==(r=null!==(n=null!==(t=null!==(e=document.fullscreenEnabled)&&void 0!==e?e:document.webkitFullscreenEnabled)&&void 0!==t?t:document.mozFullScreenEnabled)&&void 0!==n?n:document.msFullscreenEnabled)&&void 0!==r&&r))}),[]);const f=l.useCallback((()=>{var e,t,n;return null!==(n=null!==(t=null!==(e=document.fullscreenElement)&&void 0!==e?e:document.webkitFullscreenElement)&&void 0!==t?t:document.mozFullScreenElement)&&void 0!==n?n:document.msFullscreenElement}),[]),h=l.useCallback((()=>{const e=i.current;if(e)try{e.requestFullscreen?e.requestFullscreen().catch((()=>{})):e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen()}catch{}}),[]),m=l.useCallback((()=>{if(f())try{document.exitFullscreen?document.exitFullscreen().catch((()=>{})):document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}catch{}}),[f]),p=l.useCallback((()=>{f()===i.current?a(!0):a(!1)}),[f]);l.useEffect((()=>{const e=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"];return e.forEach((e=>{document.addEventListener(e,p)})),()=>{e.forEach((e=>{document.removeEventListener(e,p)}))}}),[p]);const v=Xe((()=>{var e;return null===(e=r?h:null)||void 0===e?void 0:e()}));l.useEffect((()=>(v(),()=>m())),[v,m]);const g=l.useMemo((()=>({fullscreen:c,disabled:s,enter:h,exit:m})),[c,s,h,m]);return l.useImperativeHandle(o,(()=>g),[g]),l.createElement("div",{ref:i,className:j(J(d),J(x))},l.createElement(qt.Provider,{value:g},n))}const Jt=ke("EnterFullscreen",l.createElement("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"})),Qt=ke("ExitFullscreen",l.createElement("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"}));function Zt(){var e;const{fullscreen:t,disabled:n,enter:r,exit:o}=jt(),{render:i}=ge();return n?null:i.buttonFullscreen?l.createElement(l.Fragment,null,null===(e=i.buttonFullscreen)||void 0===e?void 0:e.call(i,{fullscreen:t,disabled:n,enter:r,exit:o})):l.createElement(Pe,{disabled:n,label:t?"Exit Fullscreen":"Enter Fullscreen",icon:t?Qt:Jt,renderIcon:t?i.iconExitFullscreen:i.iconEnterFullscreen,onClick:t?o:r})}function $t(e){let{augment:t,contains:n,addParent:r}=e;t((e=>{let{fullscreen:t,toolbar:n,...r}=e;return{toolbar:de(n,d,l.createElement(Zt,null)),fullscreen:Yt(t),...r}})),r(n(f)?f:c,U(d,Kt))}const en={controls:!0,playsInline:!0},tn=e=>({...en,...e});function nn(e){let{slide:t,offset:n}=e;const r=function(){const{video:e}=ge();return tn(e)}(),{publish:o}=me(),{setContainerRef:i,containerRect:c}=We(),a=l.useRef(null);l.useEffect((()=>{0!==n&&a.current&&!a.current.paused&&a.current.pause()}),[n]),l.useEffect((()=>{0===n&&a.current&&(t.autoPlay||r.autoPlay)&&(o(E),a.current.play().catch((()=>{})))}),[n,r.autoPlay,t.autoPlay,o]);const s=Xe((e=>{0===n&&(r.autoPlay||t.autoPlay)&&e.paused&&e.play().catch((()=>{}))})),u=l.useCallback((e=>{a.current=e,e&&s(e)}),[s]),{width:d,height:f,poster:h,sources:m}=t,p=e=>!1===t[e]?null:!0===t[e]?{[e]:!0}:!1===r[e]?null:!0===r[e]?{[e]:!0}:null,v=e=>r[e]||t[e]?{[e]:t[e]||r[e]}:null;return l.createElement(l.Fragment,null,m&&l.createElement("div",{ref:i,style:{width:"100%",height:"100%",...d?{maxWidth:"".concat(d,"px")}:null},className:j(J("video_container"),J(w))},c&&l.createElement("video",{ref:u,poster:h,...(()=>{const e={style:{maxWidth:"100%",maxHeight:"100%"}};if(d&&f&&c){const t=d/f>c.width/c.height,n=t?c.width:Math.round(c.height/f*d),r=t?Math.round(c.width/d*f):c.height;e.width=n,e.height=r,e.style.width=n,e.style.height=r}return e})(),...p("controls"),...p("playsInline"),...p("loop"),...p("muted"),...p("playsInline"),...p("disablePictureInPicture"),...p("disableRemotePlayback"),...v("controlsList"),...v("crossOrigin"),...v("preload"),onPlay:()=>{o(b)},onEnded:()=>{o(y)}},m.map(((e,t)=>{let{src:n,type:r}=e;return l.createElement("source",{key:t,src:n,type:r})})))))}function rn(e){let{augment:t}=e;t((e=>{let{render:{slide:t,...n},video:r,...o}=e;return{render:{slide:e=>{let{slide:n,offset:r,rect:o}=e;var i;return function(e){return"video"===e.type}(n)?l.createElement(nn,{key:null===(i=n.sources)||void 0===i?void 0:i.map((e=>e.src)).join(" "),slide:n,offset:r}):null==t?void 0:t({slide:n,offset:r,rect:o})},...n},video:tn(r),...o}}))}const ln=(0,l.forwardRef)(((e,t)=>{const[n,o]=(0,l.useReducer)(Ot,kt),{numOfMediaPerRow:i,mediaLightbox:c,lightBoxAdditionalProps:a}=e;(0,l.useImperativeHandle)(t,(()=>({openMediaByIndex(e,t){o({type:Lt.LIGHT_BOX_OPEN_BY_MEDIA_INDEX,payload:0===e?t:t+e*i})}})),[i]);const{mediaIndex:s,isOpen:u}=n,d=(null==a?void 0:a.plugins)||[];return u?r.j.jsx(Pt,{close:()=>o({type:Lt.LIGHT_BOX_CLOSE}),open:u,slides:c,index:s,plugins:[Ut,$t,rn,...d],...a}):null}));ln.displayName="MediaLightBox"}}]);
//# sourceMappingURL=725.db906730.chunk.js.map