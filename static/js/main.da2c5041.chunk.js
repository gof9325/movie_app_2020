(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},58:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),s=a.n(i),o=a(8),c=a(7);var m=function(){return r.a.createElement("span",null,"About this page")},l=a(15),u=a.n(l),p=a(29),v=a(10),d=a(11),y=a(12),E=a(13),g=a(30),h=a.n(g),f=a(3),b=a.n(f);a(58);function _(e){var t=e.id,a=e.year,n=e.title,i=e.summary,s=e.poster,c=e.genres;return r.a.createElement(o.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:i,poster:s,genres:c}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},c.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},i.slice(0,140),"..."))))}_.propType={id:b.a.number.isRequired,year:b.a.number.isRequired,title:b.a.string.isRequired,summary:b.a.string.isRequired,poster:b.a.string.isRequired,genres:b.a.arrayOf(b.a.string).isRequired};var N=_,j=(a(62),function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoding:!0,movies:[]},e.getMovies=Object(p.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoding:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoding,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component)),O=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component);var k=function(){return r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))};var q=function(){return r.a.createElement(o.a,null,r.a.createElement(k,null),r.a.createElement(c.a,{path:"/",exact:!0,component:j}),r.a.createElement(c.a,{path:"/about",component:m}),r.a.createElement(c.a,{path:"/movie/:id",component:O}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.da2c5041.chunk.js.map