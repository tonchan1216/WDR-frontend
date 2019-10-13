!function(e){function t(t){for(var n,o,i=t[0],c=t[1],s=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(p&&p(t);d.length;)d.shift()();return l.push.apply(l,s||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={0:0},l=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=c;l.push([24,2]),a()}({24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),o=a(4),i=a(2);const c=i.a.h2`
  margin: 0;
  padding: 20px 0;
  text-align: center;
  background-color: ${e=>"active"===e.status?"#ffffd9":"white"};
`,s=i.a.button`
  border: none;
  background-color: inherit;
  text-align: center;
  width: 100%;
  height: 120%;
  :hover { text-decoration: none; }
`;var p=e=>{const{page:t,name:a,togglePage:n,bar:l}=e,o=t===l?"active":"inactive";return r.a.createElement(c,{className:`top-bar__item top-bar__item_${o} col-sm-6`,status:o},r.a.createElement(s,{type:"button",className:`top-bar__link top-bar__link_${l}`,onClick:()=>n(l)},a))};const u=i.a.h1`
  font-size: 3em;
  text-align: center;
  margin: 0;
  padding: 30px 0;
  color: #00539f;
  animation: fadeInTitle 3s ease-in;
`;var d=({page:e,togglePage:t})=>r.a.createElement("header",{className:"header"},r.a.createElement(u,{className:"header__title"},"Frontend Developer Roadmap スタンプラリー"),r.a.createElement("nav",{className:"top-bar row"},r.a.createElement(p,{page:e,bar:"front",name:"フロントエンド",togglePage:t}),r.a.createElement(p,{page:e,bar:"back",name:"バックエンド",togglePage:t})));const m=i.a.aside`
  padding: 10px 30px;
  margin: 0% 10px;
`;var g=e=>{const{news:t,inputText:a}=e,{addSkill:n,changeText:l}=e;return r.a.createElement(m,{className:"side-bar col-md-3 row"},r.a.createElement("section",{className:"news col-md-12 col-sm-6"},r.a.createElement("h3",{className:"news__title"},"Weather News"),r.a.createElement("p",{className:"news__contents"},t)),r.a.createElement("section",{className:"add-skill col-md-12 col-sm-6"},r.a.createElement("h3",{className:"add-skill__title"},"Add Skill"),r.a.createElement("p",{className:"add-skill__form"},r.a.createElement("label",{htmlFor:"skill_textbox"},"Type:",r.a.createElement("input",{id:"skill_textbox",className:"add-skill__textbox",type:"text",name:"title",value:a,onChange:e=>l(e.target.value)})),r.a.createElement("label",{htmlFor:"skill_button"},"Click:",r.a.createElement("input",{id:"skill_button",className:"add-skill__button",type:"button",value:"Add",onClick:()=>n()})))))};const b=i.a.article`
  padding: 10px;
  background: #d9ffff;
  flex-direction: column;
  justify-content: space-around;
  :nth-child(even) {
    background: #00cccc;
  }
`,f=i.a.h3`
  text-align: center;
`,h=i.a.h3`
  text-align: center;
  a {
    color: #c20000;
  }
`;var k=({name:e})=>r.a.createElement(b,{className:"skill__item col-lg-3 col-md-4 col-sm-6"},r.a.createElement(f,{className:"skill__name"},e),r.a.createElement(h,{className:"skill__stamp"},r.a.createElement("a",{href:"https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started"},"STAMP")));var y=({skill:e,page:t})=>{const a=e[t];return r.a.createElement("section",{className:"skill col-md-9 row"},a.map(e=>r.a.createElement(k,{key:`item-${e}`,name:e})))};var x=({skill:e,page:t,news:a,inputText:n,addSkill:l,changeText:o})=>r.a.createElement("section",{className:"main row"},r.a.createElement(y,{skill:e,page:t}),r.a.createElement(g,{addSkill:l,changeText:o,news:a,inputText:n}));const v=i.a.footer`
  background-color: #ffffd9;
  margin-right: -15px;
  margin-left: -15px;
`,w=i.a.p`
  text-align: center;
  padding: 20px;
`;var _,E=()=>r.a.createElement(v,{className:"footer"},r.a.createElement(w,{className:"footer__patent"},"(c) 2019 tonchan1216"));var S,T,N,P,O,j,z,C,M,A,J=Object(o.b)("store")(_=Object(o.c)(_=class extends r.a.Component{constructor(e){super(e),this.fetchJson=this.fetchJson.bind(this)}async componentDidMount(){const{store:e}=this.props,t=await this.fetchJson();e.updateNews(t)}async fetchJson(){return fetch("assets/tenki.json").then(e=>e.text()).then(e=>{const t=JSON.parse(e).forecasts[0];return`${t.date}：${t.telop}`})}render(){const{store:e}=this.props;return r.a.createElement("div",{className:"container"},r.a.createElement(d,{togglePage:e.togglePage,page:e.page}),r.a.createElement(x,{skill:e.skill,page:e.page,news:e.news,inputText:e.inputText,addSkill:e.addSkill,changeText:e.changeText}),r.a.createElement(E,null))}})||_)||_,D=a(1);function $(e,t,a,n){a&&Object.defineProperty(e,t,{enumerable:a.enumerable,configurable:a.configurable,writable:a.writable,value:a.initializer?a.initializer.call(n):void 0})}function F(e,t,a,n,r){var l={};return Object.keys(n).forEach((function(e){l[e]=n[e]})),l.enumerable=!!l.enumerable,l.configurable=!!l.configurable,("value"in l||l.initializer)&&(l.writable=!0),l=a.slice().reverse().reduce((function(a,n){return n(e,t,a)||a}),l),r&&void 0!==l.initializer&&(l.value=l.initializer?l.initializer.call(r):void 0,l.initializer=void 0),void 0===l.initializer&&(Object.defineProperty(e,t,l),l=null),l}const L=new(S=D.l.shallow,T=D.d.bound,N=D.d.bound,P=D.d.bound,O=D.d.bound,z=F((j=class{constructor(){$(this,"news",z,this),$(this,"inputText",C,this),$(this,"page",M,this),$(this,"skill",A,this)}changeText(e){this.inputText=e}updateNews(e){this.news=e}addSkill(){""!==this.inputText&&(this.skill[this.page]=this.skill[this.page].concat(this.inputText),this.inputText="")}togglePage(e){this.page=e}}).prototype,"news",[D.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),C=F(j.prototype,"inputText",[D.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),M=F(j.prototype,"page",[D.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"front"}}),A=F(j.prototype,"skill",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{front:["HTML","CSS","Basic of JavaScript","Package Managers","CSS Pre-proccessors","CSS Frameworks","CSS Architecture","Build Tootls","Pick a Framework","CSS in JS","Testing your Apps","Progressive Web Apps","Type Checkers","Server Side Rendering","Static Site Generators","Desktop Applications","Mobile Applications","Web Assembly"],back:[]}}}),F(j.prototype,"changeText",[T],Object.getOwnPropertyDescriptor(j.prototype,"changeText"),j.prototype),F(j.prototype,"updateNews",[N],Object.getOwnPropertyDescriptor(j.prototype,"updateNews"),j.prototype),F(j.prototype,"addSkill",[P],Object.getOwnPropertyDescriptor(j.prototype,"addSkill"),j.prototype),F(j.prototype,"togglePage",[O],Object.getOwnPropertyDescriptor(j.prototype,"togglePage"),j.prototype),j),B=document.getElementById("root");Object(l.render)(r.a.createElement(o.a,{store:L},r.a.createElement(J,null)),B)}});