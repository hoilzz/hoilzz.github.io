(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return s});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(171),u=n(167),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(u.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=l;var s="1097489062"},154:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return f}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(153),u=n.n(c);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var l=n(157),s=n.n(l);n.d(e,"PageRenderer",function(){return s.a});var d=n(32);n.d(e,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(t){return r.a.createElement(f.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(t,e,n){"use strict";var a={ALL:"All"},r={LIGHT:"light",DARK:"dark"};n.d(e,"c",function(){return"Home"}),n.d(e,"a",function(){return a}),n.d(e,"d",function(){return r}),n.d(e,"b",function(){return"en"})},157:function(t,e,n){var a;t.exports=(a=n(160))&&a.default||a},158:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var a=n(172),r=n.n(a),o=n(173),i=n.n(o);i.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",textDecoration:"none",color:"#0687f0"},"a.gatsby-resp-image-link":{boxShadow:"none",textDecoration:"none"},"a:hover":{textDecoration:"none"},h1:{fontWeight:800,lineHeight:1.2,fontFamily:"Catamaran"},h2:{fontWeight:700,lineHeight:1.2,marginTop:"56px",marginBottom:"20px",fontFamily:"Catamaran"},ul:{marginBottom:"6px"},li:{marginBottom:"2px"}}};var c=new r.a(i.a);var u=c.rhythm;c.scale},159:function(t,e,n){"use strict";n.d(e,"e",function(){return a}),n.d(e,"d",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"g",function(){return u}),n.d(e,"f",function(){return l}),n.d(e,"c",function(){return s});var a=function(t){return document.querySelectorAll(t)},r=function(t){return document.querySelector(t)},o=function(t,e){return t.classList.add(e)},i=function(){return r("body")},c=function(t){return o(i(),t)},u=function(t){return function(t,e){return t.classList.remove(e)}(i(),t)},l=function(t){return function(t,e){return t.classList.contains(e)}(i(),t)},s=function(){return document.documentElement.offsetHeight}},160:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(52),u=n(2),l=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},161:function(t,e,n){},162:function(t,e,n){},163:function(t,e,n){},164:function(t,e,n){},165:function(t,e,n){},166:function(t,e,n){},167:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var a=n(168),r=n(0),o=n.n(r),i=n(4),c=n.n(i),u=n(182),l=n.n(u),s=n(154);function d(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,c=t.title;return o.a.createElement(s.StaticQuery,{query:f,render:function(t){var a=e||t.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired};var f="1025518380"},168:function(t){t.exports={data:{site:{siteMetadata:{title:"hoilzz",description:"hzz",author:"hoilzz"}}}}},171:function(t,e,n){"use strict";var a=n(0),r=n.n(a),o=n(154),i=(n(161),n(162),function(t){var e=t.title,n=t.location,a=t.rootPath,i=n.pathname===a;return r.a.createElement("div",{className:"top"},!i&&r.a.createElement(o.Link,{to:"/",className:"link"},e))}),c=(n(163),function(t){var e=t.title,n=t.location,a=t.rootPath;return n.pathname===a&&r.a.createElement("h1",{className:"home-header"},r.a.createElement(o.Link,{to:"/",className:"link"},e))}),u=n(181),l=n.n(u),s=n(159),d=n(156);n(164);var f=function(){var t=Object(a.useState)(!1),e=t[0],n=t[1],o=function(t){var e=function(t){return t?d.d.DARK:d.d.LIGHT}(t);n(t),function(t){switch(t){case d.d.LIGHT:s.b(d.d.LIGHT),s.g(d.d.DARK);break;case d.d.DARK:s.b(d.d.DARK),s.g(d.d.LIGHT)}}(e)};return Object(a.useEffect)(function(){var t=s.f(d.d.DARK);o(t)},[]),r.a.createElement("div",{className:"switch-container"},r.a.createElement("label",{htmlFor:"normal-switch"},r.a.createElement(l.a,{onChange:o,checked:e,id:"normal-switch",height:24,width:48,checkedIcon:r.a.createElement("div",{className:"icon checkedIcon"},"D"),uncheckedIcon:r.a.createElement("div",{className:"icon uncheckedIcon"},"L"),offColor:"#d9dfe2",offHandleColor:"#fff",onColor:"#999",onHandleColor:"#282c35"})))},m=(n(165),function(){return r.a.createElement("footer",{className:"footer"},"©",r.a.createElement("a",{href:"https://github.com/JaeYeopHan"},"Jbee"),", Built with"," ",r.a.createElement("a",{href:"https://github.com/JaeYeopHan/gatsby-starter-bee"},"Gatsby-starter-bee"))}),h=n(158);n(166);n.d(e,"a",function(){return p});var p=function(t){var e=t.location,n=t.title,a=t.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{title:n,location:e,rootPath:"/"}),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(h.a)(24),padding:Object(h.a)(1.5)+" "+Object(h.a)(.75)}},r.a.createElement(f,null),r.a.createElement(c,{title:n,location:e,rootPath:"/"}),a,r.a.createElement(m,null)))}}}]);
//# sourceMappingURL=component---src-pages-404-js-87e7fbab9f090247021f.js.map