"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{1687:function(t,n,r){r.d(n,{Hx:function(){return v},Tg:function(){return s},Y5:function(){return p},bI:function(){return o},xc:function(){return f}});var e=r(5861),a=r(7757),c=r.n(a),i=r(3263);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="51152509db377696be1781d05c6af581",s=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("trending/movie/day?api_key=".concat(u,"&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("search/movie?api_key=".concat(u,"&query=").concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(n,"?api_key=").concat(u));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(n,"/credits?api_key=").concat(u));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(n,"/reviews?api_key=").concat(u,"S&page=1"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},4321:function(t,n,r){r.d(n,{a:function(){return c}});var e=r(8402),a=r(184),c=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.Rf,{color:"#4fa94d",width:"100",visible:!0,ariaLabel:"falling-lines-loading"})})}},5130:function(t,n,r){r.d(n,{O:function(){return u}});var e=r(7689),a=r(1087),c=r(9457),i=r(184);var u=function(t){var n=t.movies,r=t.text,u=(0,e.TH)();return(0,i.jsxs)(i.Fragment,{children:[r&&(0,i.jsx)("h1",{children:r}),(0,i.jsx)(c.x,{as:"ul",p:4,children:n.map((function(t){var n,r=t.id,e=t.original_title,c=t.poster_path,s=t.name;return(0,i.jsx)("li",{children:(0,i.jsxs)(a.rU,{to:"/movies/".concat(r),state:{from:u},children:[(0,i.jsx)("img",{src:(n=c,n?"https://image.tmdb.org/t/p/w300/".concat(n):"https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg"),alt:"poster"}),(0,i.jsx)("h2",{children:null!==e&&void 0!==e?e:s})]})},r)}))})]})}},5415:function(t,n,r){r.r(n);var e=r(5861),a=r(9439),c=r(7757),i=r.n(c),u=r(8174),s=(r(5462),r(2791)),o=r(1687),p=r(5130),f=r(4321),v=r(184);n.default=function(){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),r=n[0],c=n[1],d=(0,s.useState)(!1),l=(0,a.Z)(d,2),h=l[0],m=l[1];return(0,s.useEffect)((function(){function t(){return(t=(0,e.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,o.Tg)();case 4:n=t.sent,c(n.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),u.Am.error("something went wrong");case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{children:"Trending Movies"}),h&&(0,v.jsx)(f.a,{}),r&&(0,v.jsx)(p.O,{movies:r})]})}},5462:function(){}}]);
//# sourceMappingURL=415.787fdc0b.chunk.js.map