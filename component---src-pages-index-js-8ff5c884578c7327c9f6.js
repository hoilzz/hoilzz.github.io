(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{152:function(e,t,n){"use strict";n.r(t);var r,a=n(238),o=n.n(a),i=n(0),c=n.n(i),u=n(171),s=n(183),l=n(167),f=function(e){var t=e.title,n=e.category,r=e.selectCategory;return c.a.createElement("li",{className:"item",role:"tab","aria-selected":n===t?"true":"false"},c.a.createElement("div",{onClick:function(){return r(t)}},t))},d=n(158),m=(n(281),function(e){var t=e.categories,n=e.category,r=e.selectCategory;return c.a.createElement("ul",{className:"category-container",role:"tablist",id:"category",style:{margin:"0 -"+Object(d.a)(.75)}},c.a.createElement(f,{title:"All",category:n,selectCategory:r}),t.map(function(e,t){return c.a.createElement(f,{key:t,title:e,category:n,selectCategory:r})}))}),h=n(154),g=(n(35),n(74),n(159)),p="#___gatsby",v="observed",y="visible",w="20px",b=.8;function E(e){return e.filter(function(e){return e.isIntersecting}).forEach(function(e){var t=e.target;return g.a(t,y)})}function A(){return g.e("."+v).forEach(function(e){return r.observe(e)})}function k(){if(!r)throw Error("Not found IntersectionObserver instance");return Promise.resolve(r.disconnect())}n(282);var C=function(e){var t=e.node;return c.a.createElement(h.Link,{className:"thumbnail "+v,to:t.fields.slug},c.a.createElement("div",{key:t.fields.slug},c.a.createElement("h3",null,t.frontmatter.title||t.fields.slug),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})))},L=n(156),x=function(e){var t=e.posts,n=e.countOfInitialPost,r=e.count,a=e.category;return Object(i.useMemo)(function(){return t.filter(function(e){var t=e.node;return a===L.a.ALL||t.frontmatter.category===a}).slice(0,r*n)}).map(function(e,t){var n=e.node;return c.a.createElement(C,{node:n,key:"item_"+t})})},N=n(189),S=n(203),D=n.n(S);function H(e){return!e||e==={}}function I(e,t){if(!H(e)){var n=e.getItem(t);if(n)return JSON.parse(n)}}function Q(e,t,n){if(!H(e))return e.setItem(t,JSON.stringify(n))}var z="undefined"!=typeof window?window:{},O=z.localStorage,P=z.sessionStorage,j=D()(Q,P),B=D()(I,P),q=(D()(Q,O),D()(I,O),"__felog_session_storage_key__");n.d(t,"pageQuery",function(){return G});t.default=function(e){var t,n=e.data,a=e.location,f=(t=1,B(q+"/count")||t),d=function(e){return B(q+"/category")||e}(L.a.ALL),h=Object(i.useState)(f),v=h[0],y=h[1],C=Object(i.useRef)(v),S=Object(i.useState)(d),D=S[0],H=S[1],I=n.site.siteMetadata,Q=I.configs.countOfInitialPost,z=n.allMarkdownRemark.edges,O=o()(z.map(function(e){return e.node.frontmatter.category}));Object(i.useEffect)(function(){return window.addEventListener("scroll",P,{passive:!1}),r=new IntersectionObserver(E,{root:g.d(p),rootMargin:w,threshold:b}),A(),N.c(),function(){window.removeEventListener("scroll",P,{passive:!1}),k().then(function(){return r=null}),N.a()}},[]),Object(i.useEffect)(function(){C.current=v,k().then(A),j(q+"/count",v),function(e){j(q+"/category",e)}(D)});var P=function(){var e=window.scrollY+window.innerHeight,t=function(){return function(e){return g.c()-e}(e)<80};return function(e,t){var n=t.dismissCondition,r=void 0===n?function(){return!1}:n,a=t.triggerCondition,o=void 0===a?function(){return!0}:a;if(!e)throw Error("Invalid required arguments");var i=!1;return function(){if(!i)return i=!0,requestAnimationFrame(function(){if(!r())return o()?(i=!1,e()):void 0;i=!1})}()}(function(){return y(function(e){return e+1})},{dismissCondition:function(){return!t()},triggerCondition:function(){return t()&&z.length>C.current*Q}})};return c.a.createElement(u.a,{location:a,title:I.title},c.a.createElement(l.a,{title:L.c,keywords:I.keywords}),c.a.createElement(s.a,null),c.a.createElement(m,{categories:O,category:D,selectCategory:function(e){H(e),N.b(360)}}),c.a.createElement(x,{posts:z,countOfInitialPost:Q,count:v,category:D}))};var G="596428459"},154:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(153),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(157),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var f=n(32);n.d(t,"parsePath",function(){return f.a});var d=a.a.createContext({}),m=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,n){"use strict";var r={ALL:"All"},a={LIGHT:"light",DARK:"dark"};n.d(t,"c",function(){return"Home"}),n.d(t,"a",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"b",function(){return"en"})},157:function(e,t,n){var r;e.exports=(r=n(160))&&r.default||r},158:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(172),a=n.n(r),o=n(173),i=n.n(o);i.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",textDecoration:"none",color:"#0687f0"},"a.gatsby-resp-image-link":{boxShadow:"none",textDecoration:"none"},"a:hover":{textDecoration:"none"},h1:{fontWeight:800,lineHeight:1.2,fontFamily:"Catamaran"},h2:{fontWeight:700,lineHeight:1.2,marginTop:"56px",marginBottom:"20px",fontFamily:"Catamaran"},ul:{marginBottom:"6px"},li:{marginBottom:"2px"}}};var c=new a.a(i.a);var u=c.rhythm;c.scale},159:function(e,t,n){"use strict";n.d(t,"e",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"g",function(){return u}),n.d(t,"f",function(){return s}),n.d(t,"c",function(){return l});var r=function(e){return document.querySelectorAll(e)},a=function(e){return document.querySelector(e)},o=function(e,t){return e.classList.add(t)},i=function(){return a("body")},c=function(e){return o(i(),e)},u=function(e){return function(e,t){return e.classList.remove(t)}(i(),e)},s=function(e){return function(e,t){return e.classList.contains(t)}(i(),e)},l=function(){return document.documentElement.offsetHeight}},160:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(52),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(168),a=n(0),o=n.n(a),i=n(4),c=n.n(i),u=n(182),s=n.n(u),l=n(154);function f(e){var t=e.description,n=e.lang,a=e.meta,i=e.keywords,c=e.title;return o.a.createElement(l.StaticQuery,{query:d,render:function(e){var r=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:c},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:r}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})},data:r})}f.defaultProps={lang:"en",meta:[],keywords:[]},f.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired};var d="1025518380"},168:function(e){e.exports={data:{site:{siteMetadata:{title:"hoilzz",description:"hzz",author:"hoilzz"}}}}},171:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(154),i=(n(161),function(){return a.a.createElement("a",{href:"https://github.com/JaeYeopHan/felog",className:"github","aria-label":"GitHub"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},a.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))}),c=(n(162),function(e){var t=e.title,n=e.location,r=e.rootPath,c=n.pathname===r;return a.a.createElement("div",{className:"top"},!c&&a.a.createElement(o.Link,{to:"/",className:"link"},t),a.a.createElement(i,null))}),u=(n(163),function(e){var t=e.title,n=e.location,r=e.rootPath;return n.pathname===r&&a.a.createElement("h1",{className:"home-header"},a.a.createElement(o.Link,{to:"/",className:"link"},t))}),s=n(181),l=n.n(s),f=n(159),d=n(156);n(164);var m=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],o=function(e){var t=function(e){return e?d.d.DARK:d.d.LIGHT}(e);n(e),function(e){switch(e){case d.d.LIGHT:f.b(d.d.LIGHT),f.g(d.d.DARK);break;case d.d.DARK:f.b(d.d.DARK),f.g(d.d.LIGHT)}}(t)};return Object(r.useEffect)(function(){var e=f.f(d.d.DARK);o(e)},[]),a.a.createElement("div",{className:"switch-container"},a.a.createElement("label",{htmlFor:"normal-switch"},a.a.createElement(l.a,{onChange:o,checked:t,id:"normal-switch",height:24,width:48,checkedIcon:a.a.createElement("div",{className:"icon checkedIcon"},"D"),uncheckedIcon:a.a.createElement("div",{className:"icon uncheckedIcon"},"L"),offColor:"#d9dfe2",offHandleColor:"#fff",onColor:"#999",onHandleColor:"#282c35"})))},h=(n(165),function(){return a.a.createElement("footer",{className:"footer"},"©",a.a.createElement("a",{href:"https://github.com/JaeYeopHan"},"Jbee"),", Built with"," ",a.a.createElement("a",{href:"https://github.com/JaeYeopHan/gatsby-starter-bee"},"Gatsby-starter-bee"))}),g=n(158);n(166);n.d(t,"a",function(){return p});var p=function(e){var t=e.location,n=e.title,r=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(c,{title:n,location:t,rootPath:"/"}),a.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(g.a)(24),padding:Object(g.a)(1.5)+" "+Object(g.a)(.75)}},a.a.createElement(m,null),a.a.createElement(u,{title:n,location:t,rootPath:"/"}),r,a.a.createElement(h,null)))}},183:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n(184);var r=n(186),a=n(0),o=n.n(a),i=n(154),c=n(187),u=n.n(c),s=(n(188),function(){return o.a.createElement(i.StaticQuery,{query:l,render:function(e){var t=e.site.siteMetadata,n=t.author,r=t.social,a=t.introduction;return o.a.createElement("div",{className:"bio"},o.a.createElement("div",{className:"author"},o.a.createElement("div",{className:"author-description"},o.a.createElement(u.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:n,style:{borderRadius:"100%"}}),o.a.createElement("div",{className:"author-name"},o.a.createElement("span",{className:"author-name-prefix"},"Written by"),o.a.createElement(i.Link,{to:"/about",className:"author-name-content"},o.a.createElement("span",null,"@",n)),o.a.createElement("div",{className:"author-introduction"},a),o.a.createElement("p",{className:"author-socials"},r.github&&o.a.createElement("a",{href:"https://github.com/"+r.github},"GitHub"),r.medium&&o.a.createElement("a",{href:"https://medium.com/"+r.medium},"Medium"),r.twitter&&o.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"Twitter"),r.facebook&&o.a.createElement("a",{href:"https://www.facebook.com/"+r.facebook},"Facebook"))))))},data:r})}),l="1177532027"},186:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAADRUlEQVQ4y2P4DwP/wADIePP+45qdh6snLEis7I0r7y7tmr1ww+5Hz19B1PwFq4EABgj19+9fIPn+05fGKUsUneOZNT0YlJwYVF0YVF2BDCZ1N3GbiKymyQ+evgQr/ofQDNF54fpdw8AsoFI2HW9uQ39+k0AB0yB+kyA+40AeowB2PR8GZWdZ++gtB07C9TNAdJ6/flfSNpJB3Y3PJJDLwA+omVXHi0HRkUHFmVXXm8fIHyjIZxLAou3JoeuzbvdRiJUgm999/KznnwHSaRwAVARUyqjhrumVUj9pcWrdBAXnOCYND6BxYKkAoKGiFiGXbz2AOru6fz7QtRA7eQz9mbU8df0yHr94DQmhj5+/xpZ2MWp6AHWC7DcOZFBx8c9uAGl++fa9jH0Um643xGyQnKJj5+xVQLnvP3/++QPy1PW7j4Ce59D35Tb0A6oBImAQHDt/jWHJpr0Mam68YFPhmjtmrQTq+f3nDyTybj98KmgWzKHng7BAyQnk3sKOmSA3GwdCNPMCJZSdJy3eANEMCdUrtx8APQW3Geh+Bg1316QKhrCCVgY1V7jNvMYBwBDObpwC1APUCtQPZCzfegAYhJAwh8eFhmcKQ3BeM7KzgRLAeFZwin326i08CQRkNwBTC5oaVfdEhvT6iQzKCGcDncSh58sgaxdf3v363ccv3763z1wB9BeLthePoT9MjT+TpodVZCHDlKWbgJ7kNYaayqThLmoVXtQxc8+xc91zVwODfcOeY+2zVqp5JDNrukPCjA8cLhkNkxjA0RDICQoMkGPqJi16+fYDJOn+/v3n1+/fEPbXbz9mrdwGDHOgSl5QgLmt330UlEgiitqBXgKmDaf4Mlg++QdEkGwG9DaQCfE8yDZVV6AXTIJzfv3+A9J8+dZ9MatwBjm79lkrgFy4bcgAklpW7zgEtINRw2PL/hOIjLEYmFSUnDfuOYZf8/0nz4FxVtk3D5JyGeD5a/qKLX0L1v4BmwWS+/8PqAGI/iHlfqDNtRMXYhQGYBWHzlzum792/4mLbz58+odkLTBvnLx0Y/KSjZv2HQfbiaoZrv/Tl6/bD52esXLr9OVbgLE4demm6cs3z1ixZd2uIy9ev4O4Fq4FAHqJtYQ/JS6YAAAAAElFTkSuQmCC",width:72,height:72,src:"/static/035ce7483ee8f639767376dfc414c0e6/43715/profile.png",srcSet:"/static/035ce7483ee8f639767376dfc414c0e6/43715/profile.png 1x,\n/static/035ce7483ee8f639767376dfc414c0e6/8c1b8/profile.png 1.5x,\n/static/035ce7483ee8f639767376dfc414c0e6/4c15e/profile.png 2x"}}},site:{siteMetadata:{author:"hoilzz",introduction:"hzz",social:{twitter:"hoilzz",github:"hoilzz",medium:"",facebook:""}}}}}},188:function(e,t,n){},189:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var r,a=n(190),o=n.n(a);function i(){return r=new o.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function c(){if(!r)throw Error("Not founded SmoothScroll instance");return r.destroy(),r=null}function u(e){if(!r)throw Error("Not founded SmoothScroll instance");return r.animateScroll(e),r}},281:function(e,t,n){},282:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-8ff5c884578c7327c9f6.js.map