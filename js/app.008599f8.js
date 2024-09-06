(function(t){function e(e){for(var s,o,l=e[0],r=e[1],c=e[2],u=0,p=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var r=a[l];0!==n[r]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"0442":function(t,e,a){},"0b29":function(t,e,a){},"1a3b":function(t,e,a){},"1c05":function(t,e,a){t.exports=a.p+"img/mee.2aba03c3.svg"},"1c13":function(t,e,a){"use strict";var s=a("0b29"),n=a.n(s);n.a},"24a9":function(t,e,a){},"29b5":function(t,e,a){},"2a9a":function(t,e,a){"use strict";var s=a("1a3b"),n=a.n(s);n.a},"334f":function(t,e,a){"use strict";var s=a("e6bc"),n=a.n(s);n.a},3903:function(t,e,a){},"446a":function(t,e,a){},"49e0":function(t,e,a){},"4eb6":function(t,e,a){"use strict";var s=a("446a"),n=a.n(s);n.a},"4fa4":function(t,e,a){"use strict";var s=a("3903"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"text-dark":!t.nightMode,"text-light":t.nightMode},attrs:{id:"app"}},[a("div",{staticClass:"parent"},[a("Navbar",{attrs:{nightMode:t.nightMode},on:{nightMode:t.switchMode}}),a("Home",{attrs:{nightMode:t.nightMode}})],1)])},i=[],o=(a("96cf"),a("1da1")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top p-st",class:{"bg-light":!t.nightMode,"navbar-blur":t.navbarConfig.blur,"bg-dark2":t.nightMode}},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[a("Logo",{attrs:{nightMode:t.nightMode}})],1),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item ml-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.switchMode(e)}}},[a("i",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.nightMode?"Light Mode":"Night Mode",expression:"nightMode ? 'Light Mode' : 'Night Mode'",modifiers:{bottom:!0}}],class:{"fas fa-moon":t.nightMode,"far fa-moon":!t.nightMode}})])])])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticStyle:{color:"gray","font-size":"23px"}},[a("i",{staticClass:"fas fa-bars"})])])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo-div"},[a("span",{staticClass:"logo-title-name",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v(t._s(t.name))]),a("span",{staticClass:"logo-title-dot pblue"},[t._v(t._s(t.dot))])])},d=[],u={name:"Srikar Talluri",logo_name:"srikar",flat_picture:a("1c05"),config:{use_cookies:!0,navbar:{blur:!1}},description:"Hi everyone, I'm Srikar. I am an undergrad at UC Berkeley studying Computer Science and Applied Math. I love learning anything about databases, machine learning, and neat algorithms. Currently, I am in my final year taking numerical analysis, deep neural nets, computer vision and complex analysis. <br><br> Professionally, I’ve worked for Talroo as a machine learning engineer, where I designed complex ml models to understand, classify, and match job descriptions with related skills. I’ve also worked at Vogue magazine at the World Trade Center, as a data platform engineer, where I built out robust enterprise-level data pipelines and highly-scalable micro services. <br><br> Outside of school and work, I enjoy playing pickleball and exploring new spots. I like making friends so please reach out if you'd like to hang out! :)",links:{linkedin:"https://www.linkedin.com/in/srikartalluri/",github:"https://github.com/srikartalluri",resume:"https://github.com/hrishikeshpaul/portfolio-template/blob/master/src/assets/pdfs/Resume.pdf",email:"mailto:srikartalluri@berkeley.edu"}},p=u,m={name:"Logo",props:{nightMode:{type:Boolean}},data:function(){return{name:p.logo_name,dot:"."}}},h=m,g=(a("e8e7"),a("2877")),f=Object(g["a"])(h,c,d,!1,null,"8d13128e",null),b=f.exports,v={name:"Navbar",props:{nightMode:{type:Boolean}},data:function(){return{navbarConfig:p.config.navbar,localNightMode:this.nightMode}},components:{Logo:b},methods:{switchMode:function(){this.localNightMode=!this.localNightMode,this.$emit("nightMode",this.localNightMode)}}},C=v,y=(a("334f"),Object(g["a"])(C,l,r,!1,null,"d5390532",null)),_=y.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-5 p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[a("div",{staticClass:"container",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center"},[a("img",{attrs:{src:t.picture}})]),a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5"},[a("span",{staticClass:"home-title",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("hello there!")]),a("div",[a("p",{domProps:{innerHTML:t._s(t.description)}})]),a("div",{staticClass:"text-center pb-4"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"LinkedIn",expression:"'LinkedIn'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2 ",on:{click:function(e){return t.open("linkedin")}}},[a("i",{staticClass:"fab fa-linkedin"})]),a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"GitHub",expression:"'GitHub'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("github")}}},[a("i",{staticClass:"fab fa-github"})]),a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"Resume",expression:"'Resume'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("resume")}}},[a("i",{staticClass:"fas fa-file-text"})]),a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"Email",expression:"'Email'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("email")}}},[a("i",{staticClass:"fa fa-envelope"})])])])])])])},M=[],w=(a("a4d3"),a("e01a"),a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"wave"},[t._v("👋🏽npm ")])}),x=[],S={name:"Wave"},j=S,O=(a("ddb3"),Object(g["a"])(j,w,x,!1,null,"df85ed74",null)),E=O.exports,B={name:"Home",components:{Wave:E},props:{nightMode:{type:Boolean}},data:function(){return{picture:p.flat_picture,description:p.description,name:p.name,linkedin:p.links.linkedin,github:p.links.github,angellist:p.links.angellist,resume:p.links.resume,email:p.links.email}},methods:{open:function(t){switch(t){case"linkedin":window.open(this.linkedin,"_blank");break;case"github":window.open(this.github,"_blank");break;case"resume":window.open("/resume.pdf","_blank");break;case"email":window.open(this.email,"_blank");break}}}},$=B,I=(a("1c13"),Object(g["a"])($,k,M,!1,null,"a002484e",null)),T=I.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"container"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("about me.")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[a("Timeline",{attrs:{data:t.education,nightMode:t.nightMode}})],1),a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[a("Timeline",{attrs:{data:t.experience,nightMode:t.nightMode}})],1)])])])},P=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mx-3 mt-3 mb-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 col-bg-12 col-md-12 col-sm-12"},[a("p",{staticClass:"title1",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"1000"}},[t._v(" "+t._s(t.data.title)+" ")]),t._l(t.data.data,(function(e,s){return a("ul",{key:e.name,staticClass:"timeline m-0 pt-1",style:{"transition-delay":s/4.2+"s"},attrs:{"data-aos":"fade-up","data-offset":"10","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"500"}},[a("li",{staticClass:"m-0 pb-2"},[a("div",[a("div",{staticClass:"px-2 title2"},[t._v(t._s(e.name)+", "+t._s(e.place))]),a("div",{staticClass:"px-2 title3"},[t._v(" "+t._s(e.degree||e.position)+" "+t._s(e.gpa?"("+e.gpa+")":"")+" ")]),a("div",{staticClass:"px-2 date"},[t._v(t._s(e.date))]),a("div",{staticClass:"px-2 pb-2 pt-2",staticStyle:{"text-align":"justify"}},[t._v(" "+t._s(e.description)+" ")]),t._l(e.skills,(function(e){return a("span",{key:e,staticClass:"mx-2 badge p-2 mb-2",class:{"bg-dark2":t.nightMode}},[t._v(t._s(e))])})),a("p",{staticClass:"m-2"})],2)])])}))],2)])])])},L=[],H={name:"Timeline",props:{data:{type:Object},nightMode:{type:Boolean}}},R=H,V=(a("c1d5"),Object(g["a"])(R,N,L,!1,null,"4a40a4bc",null)),A=V.exports,G={name:"About",components:{Timeline:A},props:{nightMode:{type:Boolean}},data:function(){return{education:{title:"education",data:p.education},experience:{title:"experiences",data:p.experience}}}},F=G,z=(a("81ba"),Object(g["a"])(F,D,P,!1,null,"29a18dad",null)),J=z.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[a("div",{staticClass:"container py-4"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("skills.")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("br"),a("div",{staticClass:"row"},t._l(t.skills,(function(e,s){return a("div",{key:e.title,staticClass:"col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4",style:{"transition-delay":s/4.2+"s"},attrs:{"data-aos":"fade-up","data-aos-offset":"10","data-aos-delay":"30","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[a("div",{staticClass:"bg-div"},[a("i",{class:e.icon})]),a("div",{staticClass:"title2 pt-2"},[t._v(t._s(e.title))]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("span",{staticClass:"title3"},[t._v(t._s(e.info.join(", ")))])])})),0)])])},W=[],Q={name:"Skills",props:{nightMode:{type:Boolean}},data:function(){return{skills:p.skills}}},Z=Q,K=(a("b996"),Object(g["a"])(Z,U,W,!1,null,"c92579c2",null)),Y=K.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"container"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("portfolio.")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("vue-tabs",{attrs:{activeTextColor:t.nightMode?"#dfdfdf":"#535A5E"}},[a("v-tab",{attrs:{title:"development"}},[a("br"),a("div",{staticClass:"row"},t._l(t.portfolio_info,(function(e,s){return a("div",{key:e.name,staticClass:"col-xl-4 col-bg-4 col-md-6 col-sm-12"},[a("Card",{style:{"transition-delay":s%3/4.2+"s"},attrs:{portfolio:e,"data-aos":"fade-up",nightMode:t.nightMode,"data-aos-offset":"100","data-aos-delay":"10","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"},on:{show:t.showModalFn}})],1)})),0),"show less"!==t.showBtn?a("div",{staticClass:"text-center py-3"},[a("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.showMore(e)}}},[t._v(t._s(t.showBtn))])]):t._e()]),a("v-tab",{attrs:{title:"design"}},[a("div",{staticClass:"row"},t._l(t.desgin_info,(function(e,s){return a("div",{key:s,staticClass:"col-xl-6 col-bg-6 col-md-12 col-sm-12",class:{"mt-4":!0},staticStyle:{position:"relative"}},[a("vueper-slides",{staticStyle:{position:"aboslute"},attrs:{"dragging-distance":50,"fixed-height":"300px",bullets:!1,"slide-content-outside":"bottom"},on:{click:function(a){return a.preventDefault(),t.showDesignModalFn(e)}}},t._l(e.pictures,(function(t,e){return a("vueper-slide",{key:e,attrs:{image:t.img}})})),1),a("div",{staticClass:"mt-2",staticStyle:{width:"100%",display:"flex","justify-content":"space-between"}},[a("div",[a("div",{staticClass:"title2",staticStyle:{"font-weight":"500"}},[t._v(t._s(e.title))]),t._l(e.technologies,(function(e){return a("span",{key:e,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(e))])})),t._v(" • "),a("span",{staticClass:"date ml-1"},[t._v(t._s(e.date))])],2),a("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline",staticStyle:{height:"31px","margin-top":"5px"},on:{click:function(a){return a.preventDefault(),t.showDesignModalFn(e)}}},[t._v(" read more ")])])],1)})),0),a("br")])],1)],1),a("transition",{attrs:{name:"modal"}},[t.showModal?a("Modal",{attrs:{showModal:t.showModal,portfolio:t.modal_info,nightMode:t.nightMode},on:{close:t.closeModal}}):t._e()],1),a("transition",{attrs:{name:"modal"}},[t.showDesignModal?a("DesignModal",{attrs:{showModal:t.showDesignModal,portfolio:t.design_modal_info,nightMode:t.nightMode},on:{close:t.closeModal}}):t._e()],1)],1)},X=[],tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-3 mx-3"},[a("div",{staticClass:"card smcard",class:{"pcard-dark":t.nightMode,pcard:!t.nightMode,"bg-dark3":t.nightMode}},[a("div",{staticStyle:{height:"180px"}},[a("img",{staticClass:"card-img-top",attrs:{src:t.portfolio.pictures[0].img,alt:"Card image cap"}})]),a("div",{staticClass:"card-body pborder-top"},[a("h5",{staticClass:"title2"},[t._v(t._s(t.portfolio.name))]),a("div",[a("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(e){return a("span",{key:e,staticClass:"badge mr-2 mb-2 ",class:{"bg-dark4":t.nightMode}},[t._v(t._s(e))])})),0),a("p",{staticClass:"title3 m-0 pb-2 pheight pt-1",domProps:{innerHTML:t._s(t.portfolio.description.length>100?t.portfolio.description.substring(0,105)+"...":t.portfolio.description)}})]),a("div",{staticClass:"text-center mt-2"},[a("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.showModal(e)}}},[t._v(" read more ")]),t.portfolio.visit?a("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline ml-4",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.open(t.portfolio.visit)}}},[t._v(" visit website ")]):t._e()])])])])},et=[],at={name:"Card",props:{portfolio:{type:Object},nightMode:{type:Boolean}},methods:{open:function(t){window.open(t,"_blank")},showModal:function(){this.$emit("show",this.portfolio)}}},st=at,nt=(a("4fa4"),Object(g["a"])(st,tt,et,!1,null,"51d0aace",null)),it=nt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container",class:{"bg-light":!t.nightMode,"bg-dark":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"title1 px-4 pt-3"},[a("span",[a("a",{class:{"text-light":t.nightMode},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.open(t.portfolio.visit)}}},[t._v(t._s(t.portfolio.name))])]),a("a",{staticClass:"pull-right",staticStyle:{"font-size":"18px"},on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fas fa-times"})]),a("hr",{staticClass:"my-1",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}})]),a("div",{staticClass:"modal-body my-0 pb-0 px-4 pt-0"},[a("div",{staticClass:"mb-2 date",class:{"text-light":t.nightMode,pbgray:t.nightMode}},[a("span",[t._v(t._s(t.portfolio.date)+" • "+t._s(t.portfolio.category))])]),a("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(e){return a("span",{key:e,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(e))])})),0),a("div",{staticStyle:{"text-align":"justify"}},[a("span",{domProps:{innerHTML:t._s(t.portfolio.description)}})]),a("hr"),a("div",[a("Gallery",{attrs:{images:t.portfolio.pictures}})],1)]),a("div",{staticClass:"text-center pb-3"},[a("hr",{staticClass:"mt-1 mb-3",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}}),a("button",{staticClass:"btn w-25 mr-3",on:{click:function(e){return t.open(t.portfolio.github)}}},[t._v(" github ")]),a("button",{staticClass:"btn w-25",on:{click:function(e){return t.$emit("close")}}},[t._v("close")])])])])])])},lt=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"carousel slide",staticStyle:{height:"200px"},attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[a("div",{staticClass:"carousel-inner"},t._l(t.images,(function(t){return a("div",{key:t,staticClass:"carousel-item active"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://picsum.photos/id/237/200/300",alt:"Second slide"}})])})),0),t._m(0),t._m(1)])])},ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Next")])])}],dt={name:"Carousel",props:{images:{type:Array},name:{type:String}},mounted:function(){}},ut=dt,pt=Object(g["a"])(ut,rt,ct,!1,null,"2682f26c",null),mt=pt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{overflow:"auto"}},[a("div",{staticClass:"prow"},t._l(t.images,(function(e,s){return a("div",{key:e.title,staticClass:"pcolumn",class:{flex:t.design?"100%":"50%","-ms-flex":t.design?"100%":"50%","max-width":t.design?"100%":"50%"}},[a("img",{staticClass:"g-img",staticStyle:{width:"100%"},attrs:{src:e.img,id:"gi"+s},on:{click:function(e){return t.showImg(s)}}}),a("div",{staticClass:"mt-1"},[a("p",{staticStyle:{"font-weight":"500"}},[t._v(t._s(e.title))])])])})),0),t._m(0)])},gt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal",attrs:{id:"myModal"}},[a("span",{staticClass:"close"},[t._v("×")]),a("img",{staticClass:"modal-content",attrs:{id:"modalImg"}}),a("div",{attrs:{id:"caption"}})])}],ft={name:"Gallery",props:{images:{type:Array},design:{type:Boolean}},data:function(){return{modal:null}},methods:{showImg:function(t){var e=document.getElementById("myModal"),a=document.getElementById("gi".concat(t)),s=document.getElementById("modalImg");e.style.display="block",s.src=a.src;var n=document.getElementsByClassName("close")[0];n.onclick=function(){s.classList.add("closeModal"),e.classList.add("modalClose"),setTimeout((function(){e.style.display="none",s.classList.remove("closeModal"),e.classList.remove("modalClose")}),200)}}}},bt=ft,vt=(a("9061"),Object(g["a"])(bt,ht,gt,!1,null,"0382ed62",null)),Ct=vt.exports,yt={name:"Modal",components:{Carousel:mt,Gallery:Ct},props:{showModal:{type:Boolean},portfolio:{type:Object},nightMode:{type:Boolean}},created:function(){document.getElementsByTagName("body")[0].classList.add("modal-open")},methods:{open:function(t){window.open(t,"_blank")}}},_t=yt,kt=(a("5cce"),Object(g["a"])(_t,ot,lt,!1,null,"4d03d100",null)),Mt=kt.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container",class:{"bg-light":!t.nightMode,"bg-dark":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"title1 px-4 pt-3"},[a("span",{class:{"text-light":t.nightMode}},[t._v(t._s(t.portfolio.name))]),a("a",{staticClass:"pull-right",staticStyle:{"font-size":"18px"},on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fas fa-times"})]),a("hr",{staticClass:"my-1",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}})]),a("div",{staticClass:"modal-body my-0 pb-0 px-4 pt-0"},[a("div",{staticClass:"mb-2 date",class:{"text-light":t.nightMode,pbgray:t.nightMode}},[a("span",[t._v(t._s(t.portfolio.date)+" • "+t._s(t.portfolio.category))])]),a("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(e){return a("span",{key:e,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(e))])})),0),a("div",{staticStyle:{"text-align":"justify"}},[a("span",{domProps:{innerHTML:t._s(t.portfolio.description)}})]),a("hr"),a("div",[a("Gallery",{attrs:{images:t.portfolio.pictures,design:!0}})],1)]),a("div",{staticClass:"text-center pb-3"},[a("hr",{staticClass:"mt-1 mb-3",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}}),a("button",{staticClass:"btn w-25",on:{click:function(e){return t.$emit("close")}}},[t._v("close")])])])])])])},xt=[],St={name:"Modal",components:{Carousel:mt,Gallery:Ct},props:{showModal:{type:Boolean},portfolio:{type:Object},nightMode:{type:Boolean}},created:function(){document.getElementsByTagName("body")[0].classList.add("modal-open")},methods:{open:function(t){window.open(t,"_blank")}}},jt=St,Ot=(a("dcb6"),Object(g["a"])(jt,wt,xt,!1,null,"86a88fb6",null)),Et=Ot.exports,Bt=a("4d48"),$t=(a("4bf4"),a("b1b5")),It=(a("2ec8"),{name:"Portfolio",components:{Card:it,Modal:Mt,VueTabs:Bt["VueTabs"],VTab:Bt["VTab"],VueperSlides:$t["VueperSlides"],VueperSlide:$t["VueperSlide"],DesignModal:Et},props:{nightMode:{type:Boolean}},data:function(){return{all_info:p.portfolio,desgin_info:p.portfolio_design,portfolio_info:[],showModal:!1,showDesignModal:!1,modal_info:{},design_modal_info:{},number:3,showBtn:"show more",shower:0,data:['<div class="example-slide">Slide 1</div>','<div class="example-slide">Slide 2</div>','<div class="example-slide">Slide 3</div>']}},created:function(){for(var t=0;t<this.number;t++)this.portfolio_info.push(this.all_info[t])},watch:{number:function(){this.portfolio_info=[];for(var t=0;t<this.number;t++)this.portfolio_info.push(this.all_info[t])}},methods:{next:function(){this.$refs.flickity.next()},previous:function(){this.$refs.flickity.previous()},closeModal:function(){this.showModal=!1,this.showDesignModal=!1,document.getElementsByTagName("body")[0].classList.remove("modal-open")},showModalFn:function(t){this.modal_info=t,this.showModal=!0},showDesignModalFn:function(t){this.design_modal_info=t,this.showDesignModal=!0},showMore:function(){if(this.number!=this.all_info.length&&(this.number+=3,window.scrollBy({top:document.getElementsByClassName("smcard")[0].clientHeight,behavior:"smooth"}),this.number>this.all_info.length&&(this.number=this.all_info.length)),this.number==this.all_info.length&&0==this.shower)this.shower=1,this.showBtn="show less";else if(this.number==this.all_info.length&&1==this.shower){var t=document.getElementById("portfolio").offsetTop;window.scrollTo({top:t+5,behavior:"smooth"}),this.shower=0,this.number=3,this.showBtn="show more"}}}}),Tt=It,Dt=(a("c79e"),Object(g["a"])(Tt,q,X,!1,null,"44d95f8c",null)),Pt=Dt.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[a("div",{staticClass:"container py-4"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("recommendations.")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("div",{staticClass:"row"},t._l(t.data,(function(e){return a("div",{key:e.author,staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 py-3 px-5"},[a("div",{staticClass:"title2",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true"}},[a("span",[t._v('"'+t._s(e.title)+'"')])]),a("div",{staticClass:"title3 float-right py-2 pl-5",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true"}},[a("span",[t._v(" – "+t._s(e.author)+", "+t._s(e.position)+", "+t._s(e.company)+", "+t._s(e.location))])])])})),0)])])},Lt=[],Ht={name:"Recommendation",props:{nightMode:{type:Boolean}},data:function(){return{data:p.recommendations}}},Rt=Ht,Vt=(a("2a9a"),Object(g["a"])(Rt,Nt,Lt,!1,null,"67f5a76d",null)),At=Vt.exports,Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"container"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("contact.")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("br"),a("div",{staticClass:"text-center"},[a("div",{staticClass:"mb-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.2s"},attrs:{type:"text",name:"user_name",placeholder:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"my-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.4s"},attrs:{type:"email",name:"user_email",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"my-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.6s"},attrs:{name:"message",placeholder:"message",rows:"4"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),a("button",{staticClass:"mt-1 btn mb-3",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000","data-aos-offset":"50"},on:{click:function(e){return e.preventDefault(),t.sendEmail(e)}}},[t._v(" Send ")])]),a("Snackbar",{attrs:{showSnackbar:t.showSnackbar,snackbarMessage:t.snackbarMessage,snackbarColor:t.snackbarColor},on:{close:t.closeSnackbar}})],1)])},Ft=[],zt={emailjs:{serviceID:"gmail",templateID:"template_zHretJ0d",userID:"user_8g0rh3d6Qj1QZBEU8USls"}},Jt=zt,Ut=a("0f91"),Wt=a.n(Ut),Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:{show:t.showSnackbar},style:{"background-color":t.snackbarColor},attrs:{id:"snackbar"}},[t._v(" "+t._s(t.snackbarMessage)+" ")])])},Zt=[],Kt={name:"Snackbar",props:{showSnackbar:{type:Boolean},snackbarMessage:{type:String},snackbarColor:{type:String}},watch:{showSnackbar:function(t){var e=this;t&&setTimeout((function(){e.$emit("close",!1)}),1900)}}},Yt=Kt,qt=(a("fdf8"),Object(g["a"])(Yt,Qt,Zt,!1,null,"13e93b43",null)),Xt=qt.exports,te={name:"Contact",components:{Snackbar:Xt},props:{nightMode:{type:Boolean}},data:function(){return{email:"",name:"",text:"",showSnackbar:!1,snackbarMessage:"",snackbarColor:""}},methods:{closeSnackbar:function(t){var e=this;t||setTimeout((function(){e.showSnackbar=t}),1e3)},sendEmail:function(){var t=this;if(this.email&&this.name&&this.text){var e={user_email:this.email,from_name:this.name,message_html:this.text,to_name:"Hrishikesh Paul"};Wt.a.send(Jt.emailjs.serviceID,Jt.emailjs.templateID,e,Jt.emailjs.userID).then((function(e){t.showSnackbar=!0,t.snackbarMessage="Thanks! Message recieved.",t.snackbarColor="#1aa260",t.email="",t.text="",t.name=""}),(function(e){t.showSnackbar=!0,t.snackbarMessage="Oops! Something went wrong.",t.snackbarColor="rgb(212, 149, 97)"}))}else this.showSnackbar=!0,this.snackbarMessage="Please all the fields",this.snackbarColor="rgb(212, 149, 97)"}}},ee=te,ae=(a("4eb6"),Object(g["a"])(ee,Gt,Ft,!1,null,"da68a02a",null)),se=ae.exports,ne=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-secondary"},[a("div",{staticClass:"container py-3"},[a("div",{staticClass:"row pt-1 align-items-center"},[t._m(0),a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-outline-secondary mx-2 ",on:{click:function(e){return t.open("linkedin")}}},[a("i",{staticClass:"fab fa-linkedin"})]),a("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("github")}}},[a("i",{staticClass:"fab fa-github"})]),a("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("angellist")}}},[a("i",{staticClass:"fab fa-angellist"})]),a("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("resume")}}},[a("i",{staticClass:"fa fa-file"})])])])])])])},ie=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow",staticStyle:{color:"white"}},[a("span",[t._v("© 2020 Copyright: Hrishikesh Paul")])])}],oe={name:"Footer",data:function(){return{linkedin:p.links.linkedin,github:p.links.github,angellist:p.links.angellist,resume:p.links.resume}},methods:{open:function(t){switch(t){case"linkedin":window.open(this.linkedin,"_blank");break;case"github":window.open(this.github,"_blank");break;case"angellist":window.open(this.angellist,"_blank");break;case"resume":window.open(this.resume,"_blank");break}}}},le=oe,re=(a("f893"),Object(g["a"])(le,ne,ie,!1,null,"6305e430",null)),ce=re.exports,de=a("bc7b"),ue=(a("aedf"),a("1494")),pe={apiKey:"AIzaSyDd_MnCtb_4edgHeM-9PPPMjJrRt6VE_jM",authDomain:"clicker-bf254.firebaseapp.com",projectId:"clicker-bf254",storageBucket:"clicker-bf254.appspot.com",messagingSenderId:"994580996870",appId:"1:994580996870:web:8dd3f341a33193ed1c7487",measurementId:"G-LZ69VBHLYS"},me=Object(de["a"])(pe),he=Object(ue["d"])(me),ge=(Object(ue["a"])(he,"clicks"),{name:"App",components:{Navbar:_,Home:T,About:J,Skills:Y,Portfolio:Pt,Recommendation:At,Contact:se,Footer:ce},data:function(){return{nightMode:!1,config:p.config,clickCount:0}},created:function(){this.config.use_cookies&&(this.nightMode="true"===this.$cookie.get("nightMode"))},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getClickCount();case 2:return e.next=4,t.incrementClickCount();case 4:return e.next=6,t.saveClickCount();case 6:case"end":return e.stop()}}),e)})))()},methods:{switchMode:function(t){this.config.use_cookies&&this.$cookie.set("nightMode",t),this.nightMode=t},incrementClickCount:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.clickCount+=1;case 1:case"end":return e.stop()}}),e)})))()},saveClickCount:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(ue["b"])(he,"clicks","clickCounter"),e.next=3,Object(ue["e"])(a,{numClicks:t.clickCount});case 3:case"end":return e.stop()}}),e)})))()},getClickCount:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(ue["b"])(he,"clicks","clickCounter"),e.next=3,Object(ue["c"])(a);case 3:s=e.sent,s.exists()&&(t.clickCount=s.data().numClicks);case 5:case"end":return e.stop()}}),e)})))()}}}),fe=ge,be=(a("034f"),Object(g["a"])(fe,n,i,!1,null,null,null)),ve=be.exports,Ce=a("f5af"),ye=a.n(Ce),_e=(a("e829"),a("b3b5")),ke=a("f13c"),Me=a.n(ke),we=a("8c4f"),xe=a("e37d"),Se=a("00e7");s["a"].use(xe["a"]),s["a"].use(we["a"]),s["a"].use(Me.a),s["a"].use(Se),s["a"].use(_e["a"]),s["a"].config.productionTip=!1;var je=[{path:"/"}],Oe=new we["a"]({mode:"history",routes:je});new s["a"]({created:function(){ye.a.init()},router:Oe,render:function(t){return t(ve)}}).$mount("#app")},"5cce":function(t,e,a){"use strict";var s=a("8e85"),n=a.n(s);n.a},"6e96":function(t,e,a){},"77f9":function(t,e,a){},"81ba":function(t,e,a){"use strict";var s=a("e2a3"),n=a.n(s);n.a},"85ec":function(t,e,a){},"8e85":function(t,e,a){},9061:function(t,e,a){"use strict";var s=a("aedb"),n=a.n(s);n.a},9181:function(t,e,a){},aedb:function(t,e,a){},b996:function(t,e,a){"use strict";var s=a("dc42"),n=a.n(s);n.a},c1d5:function(t,e,a){"use strict";var s=a("29b5"),n=a.n(s);n.a},c79e:function(t,e,a){"use strict";var s=a("9181"),n=a.n(s);n.a},dc42:function(t,e,a){},dcb6:function(t,e,a){"use strict";var s=a("49e0"),n=a.n(s);n.a},ddb3:function(t,e,a){"use strict";var s=a("0442"),n=a.n(s);n.a},e2a3:function(t,e,a){},e6bc:function(t,e,a){},e8e7:function(t,e,a){"use strict";var s=a("6e96"),n=a.n(s);n.a},f893:function(t,e,a){"use strict";var s=a("24a9"),n=a.n(s);n.a},fdf8:function(t,e,a){"use strict";var s=a("77f9"),n=a.n(s);n.a}});
//# sourceMappingURL=app.008599f8.js.map