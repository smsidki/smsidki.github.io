(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{5:function(e,t){},6:function(e,t){},7:function(e,t){},8:function(e,t){},"CeB/":function(e,t,a){e.exports=a.p+"static/resume.37939e56.pdf"},NtTS:function(e,t,a){"use strict";a.r(t);a("14J3");var n=a("BMrR"),o=(a("+L6B"),a("2/Rp")),s=(a("jCWc"),a("kPKH")),c=(a("DjyN"),a("NUBc")),r=a("q1tI"),i=a.n(r),l=a("UsKZ"),d=a("LLXN"),p=a("kOG8"),g=a.n(p),m=a("CeB/"),u=a.n(m),f=(a("wJH0"),a("T2oS"),a("W9HT")),h=()=>i.a.createElement("div",{style:{height:"100%",display:"grid"}},i.a.createElement(f["a"],{size:"large",style:{margin:"auto"}})),E=h;l["pdfjs"].GlobalWorkerOptions.workerSrc=`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${l["pdfjs"].version}/pdf.worker.js`;class _ extends i.a.Component{constructor(){super(...arguments),this.state={page:1,totalPages:1},this.onDocLoaded=(e=>{var t=e.numPages;this.setState({totalPages:t})}),this.changePage=(e=>{this.setState({page:e})})}render(){return i.a.createElement("div",{className:g.a["content-n-padding-v"]},i.a.createElement(n["a"],{type:"flex",justify:"center"},i.a.createElement(s["a"],{style:{margin:"0 10px"}},i.a.createElement(c["a"],{simple:!0,onChange:this.changePage,total:10*this.state.totalPages})),i.a.createElement(s["a"],{style:{margin:"0 10px"}},i.a.createElement("a",{href:u.a,download:!0},i.a.createElement(o["a"],{type:"primary",size:"small",icon:"download"},Object(d["formatMessage"])({id:"download.pdf"}))))),i.a.createElement("br",null),i.a.createElement(n["a"],{type:"flex",justify:"center"},i.a.createElement(l["Document"],{file:u.a,loading:i.a.createElement(E,null),externalLinkTarget:"_blank",onLoadSuccess:this.onDocLoaded},i.a.createElement(l["Page"],{pageNumber:this.state.page}))))}}t["default"]=_},kOG8:function(e,t,a){e.exports={content:"content___2l5ui","content-n-padding-v":"content-n-padding-v___JQHaI","content-n-padding-top":"content-n-padding-top___34Gti","content-background":"content-background___1J84u"}}}]);