"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[652],{1687:function(e,r,t){t.d(r,{Hx:function(){return l},Tg:function(){return s},Y5:function(){return p},bI:function(){return o},xc:function(){return f}});var n=t(5861),a=t(7757),c=t.n(a),u=t(3263);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="51152509db377696be1781d05c6af581",s=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(i,"&page=1"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r,"/credits?api_key=").concat(i));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r,"/reviews?api_key=").concat(i,"&page=1"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},4321:function(e,r,t){t.d(r,{a:function(){return c}});var n=t(8402),a=t(184),c=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.Rf,{color:"#4fa94d",width:"100",visible:!0,ariaLabel:"falling-lines-loading"})})}},5130:function(e,r,t){t.d(r,{O:function(){return i}});var n=t(7689),a=t(1087),c=t(9457),u=t(184);var i=function(e){var r=e.movies,t=e.text,i=(0,n.TH)();return(0,u.jsxs)(u.Fragment,{children:[t&&(0,u.jsx)("h1",{children:t}),(0,u.jsx)(c.x,{as:"ul",p:4,children:r.map((function(e){var r,t=e.id,n=e.original_title,c=e.poster_path,s=e.name;return(0,u.jsx)("li",{children:(0,u.jsxs)(a.rU,{to:"/movies/".concat(t),state:{from:i},children:[(0,u.jsx)("img",{src:(r=c,r?"https://image.tmdb.org/t/p/w300/".concat(r):"https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg"),alt:"poster"}),(0,u.jsx)("h2",{children:null!==n&&void 0!==n?n:s})]})},t)}))})]})}},2652:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(5861),a=t(9439),c=t(7757),u=t.n(c),i=t(2791),s=t(7692),o="SearchBar_SearchBar__MQiwu",p="SearchBar_SearchForm__J+i1a",f="SearchBar_SearchFormButton__J-w2N",l="SearchBar_SearchFormInput__4T9IM",h=t(184),v=function(e){var r=e.onSubmit,t=(0,i.useState)(""),n=(0,a.Z)(t,2),c=n[0],u=n[1];return(0,h.jsx)("div",{className:o,children:(0,h.jsxs)("form",{className:p,onSubmit:function(e){e.preventDefault(),r(c),e.target.reset()},children:[(0,h.jsx)("input",{className:l,type:"text",onChange:function(e){return u(e.currentTarget.value.toLowerCase())}}),(0,h.jsx)("button",{className:f,children:(0,h.jsx)(s.wTD,{})})]})})},d=t(8174),m=t(1687),x=t(5130),g=t(4321),_=t(1087),w=function(){var e,r=(0,i.useState)([]),t=(0,a.Z)(r,2),c=t[0],s=t[1],o=(0,i.useState)(!1),p=(0,a.Z)(o,2),f=p[0],l=p[1],w=(0,_.lr)(),b=(0,a.Z)(w,2),j=b[0],y=b[1],k=null!==(e=j.get("query"))&&void 0!==e?e:"";(0,i.useEffect)((function(){function e(){return(e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,(0,m.bI)(k);case 4:r=e.sent,s(r.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d.Am.error("Please input search query!");case 11:return e.prev=11,l(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}""!==k&&function(){e.apply(this,arguments)}()}),[k]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{value:k,onSubmit:function(e){y(""!==e?{query:e}:{}),""===e&&d.Am.info("Please input search query!")}}),f&&(0,h.jsx)(g.a,{}),c&&(0,h.jsx)(x.O,{movies:c})]})}}}]);
//# sourceMappingURL=652.2807d293.chunk.js.map