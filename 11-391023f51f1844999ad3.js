(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{184:function(e,t,n){"use strict";n(185)("fixed",function(e){return function(){return e(this,"tt","","")}})},185:function(e,t,n){var r=n(11),i=n(16),a=n(17),o=/"/g,s=function(e,t,n,r){var i=String(a(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},187:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.default=void 0;var i,a=r(n(7)),o=r(n(51)),s=r(n(179)),u=r(n(180)),l=r(n(0)),c=r(n(4)),d=function(e){var t=(0,u.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=d(e),n=t.fluid?t.fluid.src:t.fixed.src;return f[n]||!1},h=[];var m=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+n+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+n+"/>":"",a=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",u=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+s+u+t+o+a+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=l.default.forwardRef(function(e,t){var n=e.style,r=e.onLoad,i=e.onError,a=(0,s.default)(e,["style","onLoad","onError"]);return l.default.createElement("img",(0,u.default)({},a,{onLoad:r,onError:i,ref:t,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var n;n=e.call(this,t)||this;var r=!0,i=!1,a=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var u=!(n.props.critical&&!n.props.fadeIn);return n.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:a,hasNoScript:u,seenBefore:s},n.imageRef=l.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),n=t.fluid?t.fluid.src:t.fixed.src,f[n]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,r=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.Tag,S=e.itemProp,w="boolean"==typeof b?"lightgray":b,E=(0,u.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),O=(0,u.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),L={title:t,alt:this.state.isVisible?"":n,style:E,className:p};if(h){var I=h;return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},l.default.createElement(v,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&l.default.createElement(y,(0,u.default)({src:I.base64},L)),I.tracedSVG&&l.default.createElement(y,(0,u.default)({src:I.tracedSVG},L)),w&&l.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&l.default.createElement("picture",null,I.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),l.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),l.default.createElement(y,{alt:n,title:t,src:I.src,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,u.default)({alt:n,title:t},I))}}))}if(m){var C=m,R=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},a);return"inherit"===a.display&&delete R.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},C.base64&&l.default.createElement(y,(0,u.default)({src:C.base64},L)),C.tracedSVG&&l.default.createElement(y,(0,u.default)({src:C.tracedSVG},L)),w&&l.default.createElement(v,{title:t,style:{backgroundColor:w,width:C.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:C.height}}),this.state.isVisible&&l.default.createElement("picture",null,C.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),l.default.createElement("source",{srcSet:C.srcSet,sizes:C.sizes}),l.default.createElement(y,{alt:n,title:t,width:C.width,height:C.height,src:C.src,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,u.default)({alt:n,title:t,width:C.width,height:C.height},C))}}))}return null},t}(l.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var w=b;t.default=w},190:function(e,t,n){(function(n){var r,i;i=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}}),e},r=function(t){return parseInt(e.getComputedStyle(t).height,10)},i=function(e){var t;try{t=decodeURIComponent(e)}catch(n){t=e}return t},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),r=n.length,i=-1,a="",o=n.charCodeAt(0);++i<r;){if(0===(t=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&t<=31||127==t||0===i&&t>=48&&t<=57||1===i&&t>=48&&t<=57&&45===o?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(i):"\\"+n.charAt(i)}var s;try{s=decodeURIComponent("#"+a)}catch(e){s="#"+a}return s},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},s=function(e){return e?r(e)+e.offsetTop:0},u=function(t,n,r,i){if(n.emitEvents&&"function"==typeof e.CustomEvent){var a=new CustomEvent(t,{bubbles:!0,detail:{anchor:r,toggle:i}});document.dispatchEvent(a)}};return function(r,l){var c,d,f,p,h,m,g={cancelScroll:function(e){cancelAnimationFrame(m),m=null,e||u("scrollCancel",c)},animateScroll:function(r,i,a){var l=n(c||t,a||{}),d="[object Number]"===Object.prototype.toString.call(r),h=d||!r.tagName?null:r;if(d||h){var y=e.pageYOffset;l.header&&!f&&(f=document.querySelector(l.header)),p||(p=s(f));var b,v,S,w=d?r:function(t,n,r,i){var a=0;if(t.offsetParent)do{a+=t.offsetTop,t=t.offsetParent}while(t);return a=Math.max(a-n-r,0),i&&(a=Math.min(a,o()-e.innerHeight)),a}(h,p,parseInt("function"==typeof l.offset?l.offset(r,i):l.offset,10),l.clip),E=w-y,O=o(),L=0,I=function(e,t){var n=t.speedAsDuration?t.speed:Math.abs(e/1e3*t.speed);return t.durationMax&&n>t.durationMax?t.durationMax:t.durationMin&&n<t.durationMin?t.durationMin:n}(E,l),C=function(t,n){var a=e.pageYOffset;if(t==n||a==n||(y<n&&e.innerHeight+a)>=O)return g.cancelScroll(!0),function(t,n,r){0===t&&document.body.focus(),r||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))}(r,n,d),u("scrollStop",l,r,i),b=null,m=null,!0},R=function(t){b||(b=t),v=(L+=t-b)/parseInt(I,10),S=y+E*function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t}(l,v=v>1?1:v),e.scrollTo(0,Math.floor(S)),C(S,w)||(m=e.requestAnimationFrame(R),b=t)};0===e.pageYOffset&&e.scrollTo(0,0),function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)}(r,d,l),u("scrollStart",l,r,i),g.cancelScroll(!0),e.requestAnimationFrame(R)}}},y=function(t){if(!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(d=t.target.closest(r))&&"a"===d.tagName.toLowerCase()&&!t.target.closest(c.ignore)&&d.hostname===e.location.hostname&&d.pathname===e.location.pathname&&/#/.test(d.href)){var n=a(i(d.hash)),o=c.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);(o=o||"#top"!==n?o:document.documentElement)&&(t.preventDefault(),g.animateScroll(o,d))}},b=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)&&history.state.anchor){var t=document.querySelector(a(i(history.state.anchor)));t&&g.animateScroll(t,null,{updateURL:!1})}},v=function(e){h||(h=setTimeout(function(){h=null,p=s(f)},66))};return g.destroy=function(){c&&(document.removeEventListener("click",y,!1),e.removeEventListener("resize",v,!1),e.removeEventListener("popstate",b,!1),g.cancelScroll(),c=null,d=null,f=null,p=null,h=null,m=null)},g.init=function(r){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";g.destroy(),c=n(t,r||{}),f=c.header?document.querySelector(c.header):null,p=s(f),document.addEventListener("click",y,!1),f&&e.addEventListener("resize",v,!1),c.updateURL&&c.popstate&&e.addEventListener("popstate",b,!1)},g.init(l),g}}(i)}.apply(t,[]))||(e.exports=r)}).call(this,n(73))},233:function(e,t,n){"use strict";e.exports=n(234)},234:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n(0)),o=s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],l=!1;function c(e,t){var n=t.onNewComment,r=t.language,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var a in i)e.page[a]=i[a];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),i(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return u.some(function(e){return e===n})?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))},{});return a.default.createElement("div",t,a.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!l){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),l=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){c(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){c(this,t)},this.addDisqusScript())}}]),t}();d.displayName="DisqusThread",d.propTypes={id:o.default.string,shortname:o.default.string.isRequired,identifier:o.default.string,title:o.default.string,url:o.default.string,category_id:o.default.string,onNewComment:o.default.func,language:o.default.string},d.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=d},235:function(e,t,n){var r=n(25),i=n(34);n(236)("keys",function(){return function(e){return i(r(e))}})},236:function(e,t,n){var r=n(11),i=n(18),a=n(16);e.exports=function(e,t){var n=(i.Object||{})[e]||Object[e],o={};o[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",o)}}}]);
//# sourceMappingURL=11-391023f51f1844999ad3.js.map