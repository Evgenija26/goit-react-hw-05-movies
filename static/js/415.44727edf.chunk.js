"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{1687:function(n,t,r){r.d(t,{Hx:function(){return v},Tg:function(){return s},Y5:function(){return p},bI:function(){return o},xc:function(){return f}});var e=r(5861),a=r(7757),c=r.n(a),i=r(3263);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="51152509db377696be1781d05c6af581",s=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(u,"&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(u));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&page=1"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4321:function(n,t,r){r.d(t,{a:function(){return c}});var e=r(8402),a=r(184),c=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.Rf,{color:"#4fa94d",width:"100",visible:!0,ariaLabel:"falling-lines-loading"})})}},5130:function(n,t,r){r.d(t,{O:function(){return u}});var e=r(7689),a=r(1087),c=r(9457),i=r(184);var u=function(n){var t=n.movies,r=n.text,u=(0,e.TH)();return(0,i.jsxs)(i.Fragment,{children:[r&&(0,i.jsx)("h1",{children:r}),(0,i.jsx)(c.x,{as:"ul",p:4,children:t.map((function(n){var t,r=n.id,e=n.original_title,c=n.poster_path,s=n.name;return(0,i.jsx)("li",{children:(0,i.jsxs)(a.rU,{to:"/movies/".concat(r),state:{from:u},children:[(0,i.jsx)("img",{src:(t=c,t?"https://image.tmdb.org/t/p/w300/".concat(t):"https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg"),alt:"poster"}),(0,i.jsx)("h2",{children:null!==e&&void 0!==e?e:s})]})},r)}))})]})}},5415:function(n,t,r){r.r(t);var e=r(5861),a=r(9439),c=r(7757),i=r.n(c),u=r(8174),s=(r(5462),r(2791)),o=r(1687),p=r(5130),f=r(4321),v=r(184);t.default=function(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),r=t[0],c=t[1],d=(0,s.useState)(!1),l=(0,a.Z)(d,2),h=l[0],m=l[1];return(0,s.useEffect)((function(){function n(){return(n=(0,e.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,(0,o.Tg)();case 4:t=n.sent,c(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),u.Am.error("something went wrong");case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{children:"Trending Movies"}),h&&(0,v.jsx)(f.a,{}),r&&(0,v.jsx)(p.O,{movies:r})]})}},5462:function(){}}]);
//# sourceMappingURL=415.44727edf.chunk.js.map