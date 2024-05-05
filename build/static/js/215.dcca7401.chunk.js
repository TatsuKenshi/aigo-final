"use strict";(self.webpackChunkaigo_restaurant=self.webpackChunkaigo_restaurant||[]).push([[215],{2020:function(e,t){t.Z=function(){return{changeTitle:function(e){var t=e.language,a=e.srTitle,s=e.enTitle;return document.title="Aigo Eat | ".concat("en"===t?s:a)}}}},7215:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var s=a(1413),n=a(4165),l=a(5861),r=a(9439),i=a(2791),c=a(2020),x=a(8732),m=a(7725),d=a(1087),o=a(7689),u=a(28),h=a(2966),p=a(184),f=function(e){var t=e._id,a=e.img,s=e.name,n=e.price,l=e.descEng,r=e.descSrb,i=(0,o.bx)().setItem,c=x.Z.language;return(0,p.jsxs)("article",{className:"hover:shadow-lg p-1",children:[(0,p.jsx)("div",{className:"w-full max-h-[60vw] sm:max-h-[400px] md:max-h-[300px] lg:max-h-[400px]",children:(0,p.jsx)(u.Z,{src:a,placeholder:h,children:function(e,t){return(0,p.jsx)("img",{src:e,alt:s,className:"image".concat(t?" loading":" loaded"," w-full rounded-t-md h-[60vw] sm:h-[50vw] md:h-[30vw] lg:max-h-[400px]")})}})}),(0,p.jsxs)("div",{className:"my-2 text-lg font-extrabold",children:[(0,p.jsx)("span",{className:"text-[#a62817] capitalize",children:s}),(0,p.jsxs)("span",{className:"text-[#d75b3f] float-right",children:[n," rsd"]})]}),(0,p.jsx)("div",{children:(0,p.jsxs)("p",{className:"text-xl text-slate-800 tracking-wide mb-4 text-justify",children:["en"===c?l.substring(0,250):r.substring(0,250),"..."]})}),(0,p.jsx)(d.rU,{to:"/menuitem/".concat(t),children:(0,p.jsx)("button",{type:"button",className:"w-full py-3 bg-[#a62817] rounded-md text-white mt-2",onClick:function(){return i(t)},children:"en"===c?"More info":"Vi\u0161e informacija"})})]})},g=function(e){var t=e.img,a=e.name,s=e.price,n=e.descEng,l=e.descSrb,r=x.Z.language;return(0,p.jsxs)("article",{className:"flex justify-between flex-wrap py-4 hover:shadow-lg",children:[(0,p.jsx)("div",{className:"w-full md:w-4/12 max-h-[60vw] sm:max-h-[400px] md:max-h-[200px]",children:(0,p.jsx)(u.Z,{src:t,placeholder:h,children:function(e,t){return(0,p.jsx)("img",{src:e,alt:a,className:"image".concat(t?" loading":" loaded"," w-full h-[60vw] sm:h-[400px] md:h-[200px]")})}})}),(0,p.jsxs)("div",{className:"my-4 md:w-8/12 md:my-0 md:pl-4 md:max-h-[200px] relative",children:[(0,p.jsx)("p",{className:"text-[#a62817] capitalize text-lg font-extrabold",children:a}),(0,p.jsx)("p",{className:"text-lg text-slate-800 mb-4 text-justify",children:"en"===r?n:l}),(0,p.jsxs)("p",{className:"text-[#d75b3f] text-lg font-bold float-right md:float-left md:bottom-0 absolute",children:[s," rsd"]})]})]})},j=a(1243),v=(0,m.hr)()((function(e){var t=e.t,a=(0,i.useState)([]),m=(0,r.Z)(a,2),d=m[0],o=m[1],u=(0,i.useState)([]),h=(0,r.Z)(u,2),v=h[0],b=h[1],w=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.Z.get("https://aigo-final-backend.onrender.com/aigo/shortmenuitems");case 3:t=e.sent,a=t.data.shortmenuitems,o(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.Z.get("https://aigo-final-backend.onrender.com/aigo/sides");case 3:t=e.sent,a=t.data.sides,b(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Z=(0,c.Z)().changeTitle,y=x.Z.language;return(0,i.useEffect)((function(){Z({language:y,enTitle:"Menu",srTitle:"Meni"}),w(),N()}),[y,Z]),(0,p.jsxs)("section",{className:"px-8",children:[(0,p.jsxs)("div",{className:"text-center my-8 max-w-[1200px] mx-auto",children:[(0,p.jsx)("h1",{className:"text-[#9e1918] text-3xl font-extrabold",children:t("MeniGlavnaJelaNaslov")}),(0,p.jsx)("div",{className:"h-1 w-48 bg-[#a62817] mx-auto mt-1"}),(0,p.jsx)("p",{className:"mt-4 text-justify",children:t("MeniGlavnaJelaText")}),(0,p.jsx)("p",{className:"mt-4 text-justify",children:t("MeniGlavnaJelaText2")})]}),(0,p.jsx)("div",{className:"grid gap-4 lg:gap-8 max-w-[1200px] md:grid-cols-2 mx-auto",children:d.map((function(e){return(0,p.jsx)(f,(0,s.Z)({},e),e._id)}))}),(0,p.jsxs)("div",{className:"text-center mt-16 mb-4 max-w-[1200px] mx-auto",children:[(0,p.jsx)("h1",{className:"text-[#9e1918] text-3xl font-extrabold",children:t("MeniPriloziNaslov")}),(0,p.jsx)("div",{className:"h-1 w-48 bg-[#a62817] mx-auto mt-1"}),(0,p.jsx)("p",{className:"mt-4 text-justify",children:t("MeniPriloziText")}),(0,p.jsx)("p",{className:"mt-4 text-justify",children:t("MeniPriloziText2")})]}),(0,p.jsx)("div",{className:"max-w-[1200px] mx-auto mb-8",children:v.map((function(e){return(0,p.jsx)(g,(0,s.Z)({},e),e._id)}))})]})}))},2966:function(e,t,a){e.exports=a.p+"static/media/loading-small.349254ad916cb777d52c.jpeg"}}]);
//# sourceMappingURL=215.dcca7401.chunk.js.map