"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[845],{443:function(r,e,t){t.d(e,{Hg:function(){return s},IQ:function(){return p},Jh:function(){return f},oW:function(){return v},s_:function(){return i}});var n=t(861),c=t(757),a=t.n(c),u=t(759),o="ddd78f0e80e0d30735adfd081ca2dc47";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var r=(0,n.Z)(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("trending/movie/day?api_key=".concat(o));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"?api_key=").concat(o));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.abrupt("return",null);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(o));case 3:return t=r.sent,r.abrupt("return",t.data.cast);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie cast:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o));case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("search/movie?api_key=".concat(o,"&query=").concat(e));case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movies by keyword:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},845:function(r,e,t){t.r(e);var n=t(439),c=t(443),a=t(791),u=t(689),o=t(87),s=t(184);e.default=function(){var r=(0,a.useState)([]),e=(0,n.Z)(r,2),t=e[0],i=e[1],p=(0,u.TH)();return(0,a.useEffect)((function(){(0,c.Hg)().then(i)}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)("ul",{children:t.map((function(r){return(0,s.jsx)("li",{children:(0,s.jsx)(o.OL,{to:"/movies/".concat(r.id),state:{from:p},children:r.title})},r.id)}))})]})}}}]);
//# sourceMappingURL=845.ba88b6df.chunk.js.map