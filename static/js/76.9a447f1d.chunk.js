"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{443:function(e,r,t){t.d(r,{Hg:function(){return o},IQ:function(){return l},Jh:function(){return p},oW:function(){return d},s_:function(){return u}});var n=t(861),a=t(757),c=t.n(a),i=t(759),s="ddd78f0e80e0d30735adfd081ca2dc47";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("trending/movie/day?api_key=".concat(s));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(r,"?api_key=").concat(s));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(r,"/credits?api_key=").concat(s));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie cast:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(r,"/reviews?api_key=").concat(s));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("search/movie?api_key=".concat(s,"&query=").concat(r));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching movies by keyword:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},76:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(439),a=t(791),c=t(689),i=t(87),s=t(443),o="MovieDetails_link__coFQG",u="MovieDetails_backBtn__aoic9",l="MovieDetails_wrapper__eugUr",p="MovieDetails_details__NEBVF",d="MovieDetails_additional__LCjDA",v=t(184),h=function(){var e,r,t,h=(0,a.useState)(null),f=(0,n.Z)(h,2),m=f[0],x=f[1],_=(0,c.UO)().movieId,w=(0,c.TH)(),g=(0,a.useRef)(null!==(e=null===(r=w.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");if((0,a.useEffect)((function(){(0,s.s_)(_).then(x)}),[_]),m)return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:l,children:[(0,v.jsxs)("div",{children:[(0,v.jsx)(i.rU,{to:g.current,className:o,children:(0,v.jsx)("button",{className:u,children:"\u2190 Go back"})}),(0,v.jsx)("img",{src:m.poster_path?"https://www.themoviedb.org/t/p/w500/".concat(m.poster_path):"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:"".concat(m.title)})]}),(0,v.jsxs)("div",{className:p,children:[(0,v.jsxs)("h2",{children:[m.title," (",m.release_date.slice(0,4),")"]}),(0,v.jsxs)("p",{children:["User score: ",(t=m.vote_average,new Intl.NumberFormat("default",{style:"percent",minimumFractionDigits:0,maximumFractionDigits:0}).format(t/10))]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:m.overview}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:m.genres.map((function(e){return e.name})).join(" / ")})]})]}),(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("h2",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,v.jsx)(a.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(c.j3,{})})]})}}}]);
//# sourceMappingURL=76.9a447f1d.chunk.js.map