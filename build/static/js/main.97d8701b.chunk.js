(this["webpackJsonpuser-mgmt"]=this["webpackJsonpuser-mgmt"]||[]).push([[0],{147:function(e,t,a){e.exports=a(243)},243:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a.n(c),o=a(46),s=a(38),m=a(32),i=a.n(m),u=a(24),E=a(53),p=a.n(E),d=a(249),v=a(247),h=a(9),f=a(63),b=a(251),g=a(252),y=a(244);a(114),v.a.Meta;d.a.Panel;var j=v.a.Meta;var O=function(e){var t,a,c,r=e.user,o="https://jsonplaceholder.typicode.com/users/".concat(r.id),s=Object(n.useState)(!1),m=Object(u.a)(s,2),E=m[0],d=m[1],O=Object(n.useState)([]),x=Object(u.a)(O,2),k=x[0],w=x[1],S=Object(n.useState)(!0),C=Object(u.a)(S,2),H=C[0];function I(e){d(!1)}function N(e){d(!1)}return C[1],0===k.length&&console.log("still empty details",k),0!==k.length&&console.log(" details",k),l.a.createElement(v.a,{title:r.name,hoverable:!0,style:{width:240},cover:l.a.createElement("img",{alt:"example",src:"https://joeschmoe.io/api/v1/".concat(r.name)})},l.a.createElement("center",null,l.a.createElement("p",null,l.a.createElement(h.a,{type:"mail"})," ",r.email),l.a.createElement("p",null,l.a.createElement(h.a,{type:"phone"})," ",r.phone),l.a.createElement("p",null,l.a.createElement(h.a,{type:"bank"})," ",r.website),l.a.createElement(f.a,{type:"link",onClick:function(){i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(p.a.get(o).then((function(e){return w(e.data)})).catch((function(e){return console.log(e)})));case 2:case"end":return e.stop()}})),d(!0)},block:!0},l.a.createElement(h.a,{type:"info"}),"Details"),0===k.length?l.a.createElement(b.a,{visible:E,onOk:I,onCancel:N},l.a.createElement(v.a,{style:{width:300,marginTop:16}},l.a.createElement(g.a,{loading:H,avatar:!0,active:!0},l.a.createElement(j,{avatar:l.a.createElement(y.a,{src:"https://joeschmoe.io/api/v1/".concat(k.name)}),title:k.name})))):l.a.createElement(b.a,{visible:E,onOk:I,onCancel:N},l.a.createElement(v.a,{style:{width:300,marginTop:16}},l.a.createElement(j,{avatar:l.a.createElement(y.a,{src:"https://joeschmoe.io/api/v1/".concat(k.name)}),title:k.name}),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement(h.a,{type:"mail"})," ",null===k||void 0===k?void 0:k.email),l.a.createElement("p",null,l.a.createElement(h.a,{type:"user"})," ",null===k||void 0===k?void 0:k.username),l.a.createElement("p",null,l.a.createElement(h.a,{type:"phone"})," ",null===k||void 0===k?void 0:k.phone),l.a.createElement("p",null,l.a.createElement(h.a,{type:"idcard"})," ","".concat(null===k||void 0===k?void 0:null===(t=k.address)||void 0===t?void 0:t.street,", ").concat(null===k||void 0===k?void 0:null===(a=k.address)||void 0===a?void 0:a.suite,", ").concat(null===k||void 0===k?void 0:null===(c=k.address)||void 0===c?void 0:c.city)),l.a.createElement("p",null,l.a.createElement(h.a,{type:"bank"})," ",null===k||void 0===k?void 0:k.website)))))},x=a(245),k=a(253),w=a(55),S=a(27),C=a(248);v.a.Meta;var H=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(1),o=Object(u.a)(r,2),s=o[0],m=o[1],E=Object(n.useState)([]),d=Object(u.a)(E,2),v=d[0],h=d[1],f=Object(n.useState)(!1),b=Object(u.a)(f,2);return b[0],b[1],console.log("users",a),console.log("curr users",v),Object(n.useEffect)((function(){i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(p.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){return c(e.data)})).catch((function(e){return console.log(e)})));case 2:case"end":return e.stop()}}))}),[]),Object(n.useEffect)((function(){h(a.slice(0,3))}),[a]),0===a.length?l.a.createElement(x.a,{tip:"Loading..."},l.a.createElement(k.a,{message:"Loading Users",type:"info"})):l.a.createElement("div",{className:"gutter-example"},l.a.createElement("center",null,l.a.createElement("h1",null,"Welcome to user-app!")),l.a.createElement("br",null),l.a.createElement(w.a,{type:"flex",justify:"start",style:{display:"flex",flexDirection:"column"}},v.map((function(e){return l.a.createElement(S.a,{xs:{span:5,offset:1},lg:{span:6,offset:2}},l.a.createElement("div",{className:"gutter-box"},l.a.createElement(O,{user:e})))}))),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement(C.a,{current:s,onChange:function(e){console.log(e),m(e);var t=3*e,n=t-3;h(a.slice(n,t))},total:a.length/3*10})))},I=a(246),N=a(250),U=a(103),M=I.a.Header,A=I.a.Content,D=I.a.Footer;var J=function(){var e=[l.a.createElement(N.a.Item,{key:"home"},l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement(N.a.Item,null,l.a.createElement(o.b,{to:"/users"},"Users"))];return l.a.createElement(o.a,null,l.a.createElement(I.a,{className:"layout"},l.a.createElement(M,null,l.a.createElement("div",{className:"logo"}),l.a.createElement(U.a,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"}},l.a.createElement(U.a.Item,{key:"1"},l.a.createElement(o.b,{to:"/"}),"Home"),l.a.createElement(U.a.Item,{key:"2"},l.a.createElement(o.b,{to:"/users"}),"Users"))),l.a.createElement(A,{style:{padding:"0 50px"}},l.a.createElement(N.a,{style:{margin:"16px 0"}},e),l.a.createElement(s.a,{exact:!0,path:"/",render:function(){return l.a.createElement("div",null,l.a.createElement("center",null,"Home"))}}),l.a.createElement(s.a,{path:"/users",render:function(){return l.a.createElement(H,null)}})),l.a.createElement(D,{style:{textAlign:"center"}},"User App \xa92020 Created by g0ku007")))};r.a.render(l.a.createElement(J,null),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.97d8701b.chunk.js.map