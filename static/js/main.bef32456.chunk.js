(window.webpackJsonpshoppingcart=window.webpackJsonpshoppingcart||[]).push([[0],{61:function(e,t,a){e.exports=a(75)},70:function(e,t,a){},71:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),c=a.n(r),l=a(22),o=a(33),s=a(23),m=a(47),d=a(48),u=a(54),p=a(12),f=a(108),h=a(111),g=a(112),E=a(77),b=a(107),y=a(50),C=a.n(y),v=a(51),w=a.n(v),W=a(114),N=a(110),k=a(109),S=a(115),H=a(113),A=a(106),D=a(5),P=a(49),x=a.n(P),O=Object(D.a)(function(e){return{badge:{top:"50%",right:-3,border:"2px solid ".concat((e.palette.type,e.palette.grey[200]))}}})(A.a);function j(e){return i.a.createElement(b.a,{"aria-label":"cart",onClick:e.Addclass},i.a.createElement(O,{badgeContent:e.itemsAdded,color:"primary"},i.a.createElement(x.a,null)))}var q=Object(f.a)(function(e){return{root:{flexGrow:1,position:"fixed",top:0,left:0,width:"100%",zIndex:100},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}});function I(e){var t=q(),a=i.a.useState(!0),n=Object(p.a)(a,2),r=n[0],c=n[1],l=i.a.useState(null),o=Object(p.a)(l,2),s=o[0],m=o[1],d=Boolean(s);function u(){m(null)}return i.a.createElement("div",{className:t.root},i.a.createElement(k.a,null,i.a.createElement(N.a,{control:i.a.createElement(W.a,{checked:r,onChange:function(e){c(e.target.checked)},"aria-label":"login switch"}),label:r?"Logout":"Login"})),i.a.createElement(h.a,{position:"static"},i.a.createElement(g.a,null,i.a.createElement(b.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},i.a.createElement(C.a,null)),i.a.createElement(E.a,{variant:"h6",className:t.title},"Photos"),r&&i.a.createElement("div",null,i.a.createElement(b.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},i.a.createElement(w.a,null)),i.a.createElement(j,{itemsAdded:e.itemsAdded,Addclass:e.Addclass}),i.a.createElement(H.a,{id:"menu-appbar",anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:u},i.a.createElement(S.a,{onClick:u},"Profile"),i.a.createElement(S.a,{onClick:u},"My account"))))))}a(70);function L(e){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"inner"},i.a.createElement("h1",null,"SHOP"),i.a.createElement("button",{onClick:e.handleclick},"Show Products")))}a(71);var F=a(35);function $(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"title"},i.a.createElement("h4",null," ",e.title," ")),i.a.createElement("div",{className:"image"},i.a.createElement(F.b,{to:"/".concat(e.title)},i.a.createElement("img",{src:e.image,width:"250",height:"200",alt:""}))),i.a.createElement("div",{className:"desc"},i.a.createElement("details",null,i.a.createElement("summary",null,"Product Description"),e.desc)),i.a.createElement("div",{className:"prices"},i.a.createElement("span",{className:"price"},"$",e.price),i.a.createElement("span",{className:"op"},"$",e.op)),i.a.createElement("div",{className:"btn"},i.a.createElement("button",{onClick:e.addtocart},"Add to Cart")," "))}var B=a(28);a(74);function M(e){var t=e.items.reduce(function(e,t){return e+=t.price*t.quantity},0),a=(t/100*2.8).toFixed(2);return i.a.createElement("div",{className:e.cartClass},i.a.createElement("h3",{style:{color:"white",textAlign:"center"}},"Shopping Cart ",i.a.createElement("span",{className:"closebtn",onClick:e.hideclass},"X")," "),i.a.createElement("div",{className:"Cart"},e.items.map(function(t,a){return i.a.createElement("div",{className:"product",key:a},i.a.createElement("div",{className:"IteminCart"},i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:t.image,width:"100",height:"100",alt:"img"})),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"title"},t.title),i.a.createElement("div",{className:"price"},"$",t.price*t.quantity,i.a.createElement("div",{className:"tax"},"tax :2.8%")))),i.a.createElement("div",{className:"quantity"},i.a.createElement("button",{onClick:function(){return e.minus(a)}},"-"),"  ",t.quantity,"  ",i.a.createElement("button",{onClick:function(){return e.plus(a)}},"+"),i.a.createElement("button",{style:{marginLeft:"5px"},onClick:function(){return e.itemremove(a)}},"DELETE")))}),i.a.createElement("div",{className:"total"},i.a.createElement("h3",null,"Tax: $",a),i.a.createElement("h1",null," Total  ------------ :  $",t+Number(a)," "))))}var T=a(24);var V=Object(B.b)(function(e){return{products:e.products}})(function(e){console.log(e);var t=e.match,a=e.products.find(function(e){return e.title===t.params.title});return console.log(a),i.a.createElement(i.a.Fragment,null,"      ",a?i.a.createElement("div",null,i.a.createElement("h1",{style:{color:"white"}},a.title),i.a.createElement("p",{style:{color:"white"}},a.desc),i.a.createElement("img",{src:a.image,alt:"img",width:"400"})):"")}),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={myCart:[],itemsAdded:0,cartClass:"pos hide"},a.handleclick=function(){console.log("helleleoe")},a.addtocart=function(e){var t=a.props.products[e];console.log(t),a.setState({myCart:[].concat(Object(l.a)(a.state.myCart),[t]),itemsAdded:a.state.itemsAdded+1,cartClass:"pos show"}),console.log(a.state)},a.itemremove=function(e){var t=a.state.myCart;t.splice(e,1),a.setState({myCart:t,itemsAdded:a.state.itemsAdded-1})},a.minusquantity=function(e){var t=a.state.myCart,n=t.splice(e,1);n[0].quantity--,t.splice(e,0,n[0]),a.setState({myCart:t})},a.plusquantity=function(e){var t=a.state.myCart,n=t.splice(e,1);n[0].quantity++,t.splice(e,0,n[0]),a.setState({myCart:t})},a.Addclass=function(){a.setState({cartClass:"pos show"})},a.hideclass=function(){a.setState({cartClass:"pos hide"})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.products;return i.a.createElement(F.a,null,i.a.createElement("div",{style:{backgroundColor:"black"}},i.a.createElement(I,{itemsAdded:this.state.itemsAdded,Addclass:this.Addclass}),i.a.createElement(L,{handleclick:this.handleclick}),i.a.createElement("h1",{style:{textAlign:"center",color:"white"}},"OUR PRODUCTS"),i.a.createElement(T.c,null,i.a.createElement(T.a,{exact:!0,path:"/",render:function(){return i.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},t.map(function(t,a){return i.a.createElement($,{key:a,title:t.title,image:t.image,desc:t.desc,price:t.price,op:t.op,addtocart:function(){return e.addtocart(a)}})}))}}),i.a.createElement(T.a,{path:"/:title",component:V})),i.a.createElement(M,{hideclass:this.hideclass,cartClass:this.state.cartClass,items:this.state.myCart,itemremove:this.itemremove,minus:this.minusquantity,plus:this.plusquantity})))}}]),t}(n.Component),R=Object(B.b)(function(e){return{products:e.products}})(_),G=a(36),z={products:[{title:"HD 720p Wireless Security Camera with 135 foot Night Vision",image:"https://www.lorextechnology.com/images/products/_2016/LW/LW3211/1200x800/wireless-720p-camera-LW3211-L3.png",desc:"Experience the alternative to wired cameras with the LW3211 wireless security camera from Lorex. ",quantity:1,price:90,op:"$120"},{title:"MOTOROLA Focus 73 Connect HD WiFi Home Security Camera",image:"https://brain-images-ssl.cdn.dixons.com/9/6/10075169/u_10075169.jpg",desc:"With the Motorola Focus 73 Connect HD WiFi Home Security Camera, you'll get the advantage of cloud-based home monitoring via your compatible smartphone, tablet or computer",quantity:1,price:199,op:"$230"},{title:"HD 1080P Wireless Mini Camera",image:"https://i5.walmartimages.com/asr/38cb6947-bc68-499d-b9fd-155c1bd15a01_1.80a67aa5736f7830eb865792a75a5520.jpeg?odnWidth=450&odnHeight=450&odnBg=ffffff",desc:"HD 1080P Wireless Mini Camera Infrared Night Vision Camera Car DV Digital Video Recorder",quantity:1,price:20,op:"$29"},{title:"TSV 720P HD Wifi Security Camera",image:"https://i5.walmartimages.com/asr/e200373d-b14e-49b9-b0ea-bc9525289106_1.428acfd8a83565e58586805c91ea0479.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",desc:"TSV 720P HD Wifi Security Camera Indoor Night Vision Wireless Pan&Tilt IP Camera Home Surveillance System, Phone App Control",quantity:1,price:50,op:"$60"},{title:"1080P HD Mini IP WIFI Camera",image:"https://i5.walmartimages.com/asr/f228f45d-b74f-40cd-a028-7b7fb3bcf415_1.97a6685d4eb5bb66bc08418a2e19a90b.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",desc:"1080P HD Mini IP WIFI Camera Wireless Home Security Night Vision Motion Detection with 32G TFcard",quantity:1,price:75,op:"$85"},{title:"Single Band Wifi Camera",image:"https://i5.walmartimages.com/asr/dc1a7632-8139-47f8-8e83-247cf7a129dc_1.57718f1008aed1b31f2106c0ef72e5ea.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",desc:"Momentum Cori HD 2 Pack Single Band Wifi Camera",quantity:1,price:90,op:"$120"},{title:"Zmodo 720P HD WiFi",image:"https://i5.walmartimages.com/asr/c7a27177-f0a0-47e4-9658-5319ea15ebb1_1.e87cacd82bd51f3ef1e00ce4595bd1c5.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",desc:"Zmodo 720P HD WiFi Wireless Smart Security Camera Two-Way Audio(2- Pack), Work with Google Assistant",quantity:1,price:70,op:"$80"},{title:"D-Link HD Wi-Fi Indoor Security Camera",image:"https://i5.walmartimages.com/asr/0537b19d-81d1-4bc1-80e9-fb2b487574df_2.2e0781b839ec4b38886571a83bb66bf2.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",desc:"D-Link HD Wi-Fi Indoor Security Camera, Motion Detection, Automatic Push Notifications, Night Vision, Cloud Recording (DCS-8010LH-WM)",quantity:1,price:59,op:"$79"}]};var J=Object(G.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return arguments.length>1&&arguments[1],e});c.a.render(i.a.createElement(B.a,{store:J},i.a.createElement(R,null)," "),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.bef32456.chunk.js.map