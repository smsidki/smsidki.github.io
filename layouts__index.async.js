(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{aArQ:function(e,a,t){"use strict";t.r(a);var s=t("q1tI"),n=t.n(s),c=t("eGcZ"),l=t.n(c),r=(t("14J3"),t("BMrR")),o=(t("jCWc"),t("kPKH")),i=(t("lUTK"),t("BvKs")),m=(t("Pwec"),t("CtXQ")),u=t("LvDl"),d=t.n(u),k=t("mOP9"),p=t("n/3K"),h=t.n(p),y=t("LLXN");class g extends n.a.Component{constructor(e){super(e),this.locales=[{key:"en-US",messageId:"locale.en"},{key:"id-ID",messageId:"locale.id"}],this.menus=[{key:"about",icon:"user",messageId:"about.me"},{key:"experience",icon:"rise",messageId:"work.experience"},{key:"projects",icon:"code",messageId:"projects"},{key:"skills",icon:"radar-chart",messageId:"skills"},{key:"education",icon:"read",messageId:"education"},{key:"resume",icon:"book",messageId:"resume"}],this.buildMenu=(()=>n.a.createElement(i["a"],{mode:"horizontal",onClick:this.onMenuClick,selectedKeys:[this.state.currentMenu]},this.menus.map(e=>n.a.createElement(i["a"].Item,{key:e.key},n.a.createElement(k["a"],{to:`/${e.key}`},n.a.createElement(m["a"],{type:e.icon}),Object(y["formatMessage"])({id:e.messageId})))),n.a.createElement(i["a"].SubMenu,{key:"locale",title:n.a.createElement(n.a.Fragment,null,n.a.createElement(m["a"],{type:"global"}),Object(y["formatMessage"])({id:"locale.change"}))},this.locales.map(e=>n.a.createElement(i["a"].Item,{key:e.key},n.a.createElement(m["a"],{type:e.key===Object(y["getLocale"])()?"check":"n/a"}),Object(y["formatMessage"])({id:e.messageId})))))),this.onMenuClick=(e=>{d.a.map(this.locales,"key").includes(e.key)?Object(y["setLocale"])(e.key):this.setState({currentMenu:e.key})});var a=e.location;this.state={currentMenu:"/"===a.pathname?"about":d.a.replace(a.pathname,"/","")}}render(){var e=this.props.windowWidth,a=e<=870;return n.a.createElement("div",null,n.a.createElement(r["a"],{type:"flex",justify:a?"start":"center"},a?n.a.createElement(o["a"],{span:24},this.buildMenu()):this.buildMenu()),this.props.children)}}var b=h()(g);a["default"]=(e=>n.a.createElement("div",{className:l.a.global},n.a.createElement(b,e,e.children)))},eGcZ:function(e,a,t){e.exports={global:"global___U9qQ0"}}}]);