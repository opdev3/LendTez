/*! For license information please see index.js.LICENSE.txt */
var LT;(()=>{var e={833:function(e,t){!function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function n(e){for(var n,o=1;o<arguments.length;o++)n=null==arguments[o]?{}:arguments[o],o%2?t(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){var e;return null!==(e=c)&&void 0!==e?e:document}var r={duration:2e3,position:"top-right",closeOnClick:!0,opacity:1,single:!1,offsetTop:0,offsetBottom:0,offsetLeft:0,offsetRight:0,extraClasses:""},d=n({},r),m={},c=null,u=function(e,t,n,o,a){return"top-left"===e?"left:".concat(o,";top:").concat(t,";text-align:left;align-items:flex-start;"):"top-right"===e?"right:".concat(a,";top:").concat(t,";text-align:right;align-items:flex-end;"):"top-center"===e?"top:".concat(t,";left:0;right:0;text-align:center;align-items:center;"):"bottom-left"===e?"left:".concat(o,";bottom:").concat(n,";text-align:left;align-items:flex-start;"):"bottom-right"===e?"right:".concat(a,";bottom:").concat(n,";text-align:right;align-items:flex-end;"):"bottom-center"===e?"bottom:".concat(n,";left:0;right:0;text-align:center;align-items:center;"):"center"===e?"top:0;left:0;right:0;bottom:0;flex-flow:column;justify-content:center;align-items:center;":void 0},g=function(){function e(t){var n=this;o(this,e),this.element=l().createElement("div"),this.opacity=t.opacity,this.type=t.type,this.animate=t.animate,this.dismissible=t.dismissible,this.closeOnClick=t.closeOnClick,this.message=t.message,this.duration=t.duration,this.pauseOnHover=t.pauseOnHover,this.offsetTop=t.offsetTop,this.offsetBottom=t.offsetBottom,this.offsetLeft=t.offsetLeft,this.offsetRight=t.offsetRight,this.extraClasses=t.extraClasses;var a="width:auto;pointer-events:auto;display:inline-flex;white-space:pre-wrap;opacity:".concat(this.opacity,";"),i=["notification",this.extraClasses];if(this.type&&i.push(this.type),this.animate&&this.animate.in){var s="animate__".concat(this.animate.in),r=this.animate.speed?"animate__".concat(this.animate.speed):"animate__faster";i.push("animate__animated ".concat(s," ").concat(r)),this.onAnimationEnd((function(){return n.element.classList.remove(s)}))}if(this.element.className=i.join(" "),this.dismissible){var d=l().createElement("button");d.className="delete",d.addEventListener("click",(function(){n.destroy()})),this.element.insertAdjacentElement("afterbegin",d)}else a+="padding: 1.25rem 1.5rem";this.closeOnClick&&this.element.addEventListener("click",(function(){n.destroy()})),this.element.setAttribute("style",a),"string"==typeof this.message?this.element.insertAdjacentHTML("beforeend",this.message):this.element.appendChild(this.message);var m=new p((function(){n.destroy()}),this.duration);this.pauseOnHover&&(this.element.addEventListener("mouseover",(function(){m.pause()})),this.element.addEventListener("mouseout",(function(){m.resume()})))}return i(e,[{key:"destroy",value:function(){var e=this;this.animate&&this.animate.out?(this.element.classList.add("animate__".concat(this.animate.out)),this.onAnimationEnd((function(){e.removeParent(e.element.parentNode),e.element.remove(),delete m.position}))):(this.removeParent(this.element.parentNode),this.element.remove(),delete m.position)}},{key:"removeParent",value:function(e){e&&1>=e.children.length&&e.remove()}},{key:"onAnimationEnd",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(){},t={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(var n in t)if(void 0!==this.element.style[n]){this.element.addEventListener(t[n],(function(){return e()}));break}}}]),e}(),p=function(){function e(t,n){o(this,e),this.timer,this.start,this.remaining=n,this.callback=t,this.resume()}return i(e,[{key:"pause",value:function(){"undefined"==typeof document||(window.clearTimeout(this.timer),this.remaining-=new Date-this.start)}},{key:"resume",value:function(){"undefined"==typeof document||(this.start=new Date,window.clearTimeout(this.timer),this.timer=window.setTimeout(this.callback,this.remaining))}}]),e}();e.resetDefaults=function(){d=n({},r)},e.setDefaults=function(e){d=n(n({},r),e)},e.setDoc=function(e){for(var t in m)m[t].remove();m={},c=e},e.toast=function(e){if(!e.message)throw new Error("message is required");var t=n(n({},d),e),o=new g(t),a=function(e,t,n,o,a,i){if(m.position)return m.position;var s=l().createElement("div");return s.setAttribute("style","width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;"+u(t,n,o,a,i)),e.appendChild(s),m.position=s,s}(t.appendTo||l().body,t.position||d.position,t.offsetTop||d.offsetTop,t.offsetBottom||d.offsetBottom,t.offsetLeft||d.offsetLeft,t.offsetRight||d.offsetRight);if(t.single)for(var i=a.lastElementChild;i;)a.removeChild(i),i=a.lastElementChild;a.appendChild(o.element)},Object.defineProperty(e,"__esModule",{value:!0})}(t)}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";n.r(o);var e=n(833);const t="KT1WGws1TV9QAG8uGuhCB4jw6en9E8FU8CN9",a="https://api.ghostnet.tzkt.io/v1/contracts/"+t,i=new beacon.DAppClient({name:"LendTez"});function s(e,t){let n=String(e),o=Number(t),a=n.indexOf(".");return a<0?n+"0".repeat(o):n.substring(0,a)+(n.length-a-1>=o?n.substring(a+1,a+1+o):n.substring(a+1)+"0".repeat(o-(n.length-a-1)))}let l="",r=new Map;async function d(e,t){let n=e?"&value.borrower."+(t?"eq":"ne")+"="+e:"";try{let e=await fetch(a+"/bigmaps/loans/keys?active=true&select=key,value"+n);if(e.ok){let t=await e.json();return console.log("INFO getLoans(): loans.size="+t.length+", loans="+JSON.stringify(t)),t}console.log("ERROR getLoans(): can't get loans")}catch(e){console.log("ERRROR getLoans(): "+JSON.stringify(e))}}const m="/lendtez/img/tokens/",c={message:"Connect your wallet",type:"is-danger"},u={message:"The address is copied",type:"is-info"};function g(){let e=event.currentTarget.querySelector(".fas");event.currentTarget.parentElement.querySelector(".is-collapsible").classList.toggle("is-active"),e.classList.toggle("fa-angle-down"),e.classList.toggle("fa-angle-up")}async function p(e){await async function(e){let t=await i.getActiveAccount();if(t)l=t.address,console.log("INFO connect(): old userAddress="+l);else if(!e){let e=await i.requestPermissions({network:{type:"ghostnet"}});console.log("INFO connect(): got permissions=",e),l=e.address,console.log("INFO connect(): new userAddress="+l)}}(e),l&&(document.getElementById("divConnect").classList.add("is-hidden"),document.getElementById("aAddress").innerHTML=A(l),document.getElementById("divDisconnect").classList.remove("is-hidden"),document.getElementById("btnNewMyLoan").removeAttribute("disabled"))}function y(t){if(t){let n=t.innerHTML;n&&n.length>10&&(N(n),e.toast(u))}else l&&(N(l),e.toast(u))}async function f(){let e=document.getElementById("mdButton");e.classList.add("is-loading");let n=e.getAttribute("data-id");console.log("INFO doDeal(): id="+n);let o=r.get("dataTable");if(n&&o){let e=o.get(n);if(e){let o=await async function(e,n,o,a){let s=r.get("tokens").get(o);if(!s)return null;try{let o=[],r=0;l===n&&("0"===s.type?r=a:"1"===s.type?o.push({kind:beacon.TezosOperationType.TRANSACTION,amount:0,destination:s.address,parameters:{entrypoint:"approve",value:JSON.parse('{ "prim": "Pair", "args": [ { "string": "'+t+'" }, { "int": "'+a+'"    } ] }')}}):"2"===s.type&&o.push({kind:beacon.TezosOperationType.TRANSACTION,amount:0,destination:s.address,parameters:{entrypoint:"update_operators",value:JSON.parse('[ { "prim": "Left", "args": [ { "prim": "Pair", "args": [ { "string": "'+l+'" }, { "prim": "Pair", "args": [ { "string": "'+t+'" }, { "int": "'+s.token_id+'" } ] } ] } ] } ]')}})),o.push({kind:beacon.TezosOperationType.TRANSACTION,amount:r,destination:t,parameters:{entrypoint:"close_deal",value:JSON.parse('{ "int": "'+e+'" }')}});let d=await i.requestOperation({operationDetails:o});if(console.log("INFO closeDeal(): result="+JSON.stringify(d)),d.transactionHash)return d.transactionHash}catch(e){console.log("ERRROR closeDeal(): "+JSON.stringify(e))}}(n,e.borrower,e.loan_token_id,Number(e.loan_amount)+Number(e.reward));o&&(O(o),document.getElementById("mydeal"+n).remove())}else console.log("ERROR doDeal(): there is no deal value for id="+n)}else console.log("ERROR doDeal(): there is no deal id or data");document.getElementById("modalDeal").classList.remove("is-active"),e.classList.remove("is-loading")}function h(e){let t=r.get("tokens");if("loan"===e){let e=document.getElementById("mmlLoanToken").value;e&&e>=0?(document.getElementById("mmlLoanTokenImage").setAttribute("src",m+t.get(e).name+".png"),document.getElementById("mmlRewardTokenImage").setAttribute("src",m+t.get(e).name+".png"),"XTZ"===t.get(e).name?document.getElementById("mmlLoanTokenAddress").innerHTML="&nbsp;":document.getElementById("mmlLoanTokenAddress").innerHTML=t.get(e).address):(document.getElementById("mmlLoanTokenImage").setAttribute("src",""),document.getElementById("mmlRewardTokenImage").setAttribute("src",""),document.getElementById("mmlLoanTokenAddress").innerHTML="&nbsp;")}else if("deposit"===e){let e=document.getElementById("mmlDepositToken").value;e&&e>=0?(document.getElementById("mmlDepositTokenImage").setAttribute("src",m+t.get(e).name+".png"),"XTZ"===t.get(e).name?document.getElementById("mmlDepositTokenAddress").innerHTML="&nbsp;":document.getElementById("mmlDepositTokenAddress").innerHTML=t.get(e).address):(document.getElementById("mmlDepositTokenImage").setAttribute("src",""),document.getElementById("mmlDepositTokenAddress").innerHTML="&nbsp;")}}function b(){let e=document.getElementById("mmlLoanAmount").value,t=document.getElementById("mmlRewardAmount").value,n=document.getElementById("mmlTime").value;isNaN(e)||isNaN(parseFloat(e))||isNaN(t)||isNaN(parseFloat(t))||isNaN(n)||isNaN(parseFloat(n))?document.getElementById("mmlAPR").innerHTML="-":document.getElementById("mmlAPR").innerHTML=(100*t*365/n/e).toFixed(2)}async function v(){B(),w(),document.getElementById("contentLoans").classList.remove("is-hidden");let e=document.getElementById("tblLoans");e.innerHTML="";let t=new Map;r.set("dataTable",t);let n=await d(l,!1);if(n.length>0){let o,a,i,s,d,c=r.get("tokens"),u="";for(let e=0;e<n.length;e++)o=n[e].key,a=n[e].value,a.borrower!==l&&(i=c.get(a.loan_token_id),s=c.get(a.deposit_token_id),d=Math.ceil(a.time/86400),t.set(o,a),u+='<tr id="loan'+o+'" data-id="'+o+'" class="is-clickable"><td><figure class="image is-24x24 mr-1 is-pulled-left"><img src="'+m+i.name+'.png"></figure><span class="has-text-weight-semibold">'+i.name+"</span></td><td>"+R(a.loan_amount,i)+"</td><td>"+R(a.reward,i)+"</td><td>"+d+(1===d?" day":" days")+'</td><td><figure class="image is-24x24 mr-1 is-pulled-left"><img src="'+m+s.name+'.png"></figure><span class="has-text-weight-semibold">'+s.name+"</span>&nbsp;"+R(a.deposit_amount,s)+"</td></tr>");e.innerHTML=u}}async function E(t){if(!l)return void e.toast(c);let n=event.target.closest("tr");if(!n)return void console.log("ERROR showLoan(): there is no TR element");let o=n.getAttribute("data-id");if(console.log("INFO showLoan(): id="+o),console.log("INFO showLoan(): action="+t),"cancelLoan"!==t&&"makeDeal"!==t)return void console.log("ERROR showLoan(): invalid action");let a=r.get("dataTable");if(o&&a){let e=a.get(o);if(e){let n=r.get("tokens").get(e.loan_token_id),a=r.get("tokens").get(e.deposit_token_id),i=Math.ceil(e.time/86400);document.getElementById("mlLoanTokenImg").setAttribute("src",m+n.name+".png"),document.getElementById("mlLoanTokenName").innerHTML=n.name,document.getElementById("mlLoanAmount").innerHTML=I(e.loan_amount,n),document.getElementById("mlRewardTokenImg").setAttribute("src",m+n.name+".png"),document.getElementById("mlRewardTokenName").innerHTML=n.name,document.getElementById("mlRewardAmount").innerHTML=I(e.reward,n),document.getElementById("mlTime").innerHTML=i+"&nbsp;"+(1===i?"day":"days"),document.getElementById("mlValidity").innerHTML=k(e.validity),document.getElementById("mlDepositTokenImg").setAttribute("src",m+a.name+".png"),document.getElementById("mlDepositTokenName").innerHTML=a.name,document.getElementById("mlDepositAmount").innerHTML=I(e.deposit_amount,a);let s=document.getElementById("mlTitle"),d=document.getElementById("mlButton");d.setAttribute("data-id",o),d.removeEventListener("click",L),d.removeEventListener("click",T),d.classList.remove("is-loading"),d.removeAttribute("disabled"),"cancelLoan"===t?(s.innerHTML="My loan request",d.innerHTML="Cancel request",d.addEventListener("click",L)):"makeDeal"===t&&(s.innerHTML="Loan request",d.innerHTML="Lend",l===e.borrower?d.setAttribute("disabled",""):d.addEventListener("click",T)),document.getElementById("modalLoan").classList.add("is-active")}else console.log("ERROR showLoan(): there is no loan value for id="+o)}else console.log("ERROR showLoan(): there is no loan id or data for action="+t)}async function L(){let e=document.getElementById("mlButton"),n=e.getAttribute("data-id");if(console.log("INFO doCancelLoan(): id="+n),n){e.classList.add("is-loading");let o=await async function(e){try{let n=await i.requestOperation({operationDetails:[{kind:beacon.TezosOperationType.TRANSACTION,amount:0,destination:t,parameters:{entrypoint:"cancel_loan",value:JSON.parse('{ "int": "'+e+'" }')}}]});if(console.log("INFO cancelLoan(): result="+JSON.stringify(n)),n.transactionHash)return n.transactionHash}catch(e){console.log("ERRROR cancelLoan(): "+JSON.stringify(e))}}(n);o&&(O(o),document.getElementById("myloan"+n).remove())}else console.log("ERROR doCancelLoan(): there is no loan id");document.getElementById("modalLoan").classList.remove("is-active"),e.classList.remove("is-loading")}async function T(){if(!l)return void e.toast(c);let n=document.getElementById("mlButton");n.classList.add("is-loading");let o=n.getAttribute("data-id");console.log("INFO doMakeDeal(): id="+o);let a=r.get("dataTable");if(o&&a){let e=a.get(o);if(e){let n=await async function(e,n,o){let a=r.get("tokens").get(n);if(!a)return null;try{let n=[],s=0;"0"===a.type?s=o:"1"===a.type?n.push({kind:beacon.TezosOperationType.TRANSACTION,amount:0,destination:a.address,parameters:{entrypoint:"approve",value:JSON.parse('{ "prim": "Pair", "args": [ { "string": "'+t+'" }, { "int": "'+o+'"    } ] }')}}):"2"===a.type&&n.push({kind:beacon.TezosOperationType.TRANSACTION,amount:0,destination:a.address,parameters:{entrypoint:"update_operators",value:JSON.parse('[ { "prim": "Left", "args": [ { "prim": "Pair", "args": [ { "string": "'+l+'" }, { "prim": "Pair", "args": [ { "string": "'+t+'" }, { "int": "'+a.token_id+'" } ] } ] } ] } ]')}}),n.push({kind:beacon.TezosOperationType.TRANSACTION,amount:s,destination:t,parameters:{entrypoint:"make_deal",value:JSON.parse('{ "int": "'+e+'" }')}});let r=await i.requestOperation({operationDetails:n});if(console.log("INFO makeDeal(): result="+JSON.stringify(r)),r.transactionHash)return r.transactionHash}catch(e){console.log("ERRROR makeDeal(): "+JSON.stringify(e))}}(o,e.loan_token_id,e.loan_amount);n&&(O(n),document.getElementById("loan"+o).remove())}else console.log("ERROR doMakeDeal(): there is no loan value for id="+o)}else console.log("ERROR doMakeDeal(): there is no loan id or data");document.getElementById("modalLoan").classList.remove("is-active"),n.classList.remove("is-loading")}function k(e){return e?new Date(Date.parse(e)).toLocaleString():"&infin;"}function I(e,t){return t?e/10**t.decimals:e}function R(e,t){return t?Math.round(e/10**(t.decimals-4))/1e4:e}function O(t){e.toast({message:"Your request is processing with ID <a href='https://ghostnet.tzkt.io/"+t+"' target='_blank'>"+A(t)+"</a>",duration:7e3,type:"is-info"})}function B(){document.getElementById("btnBurger").classList.remove("is-active"),document.getElementById("navbarMenu").classList.remove("is-active")}function w(){document.getElementById("contentMyDeals").classList.add("is-hidden"),document.getElementById("contentMyLoans").classList.add("is-hidden"),document.getElementById("contentLoans").classList.add("is-hidden"),document.getElementById("contentInfo").classList.add("is-hidden")}function A(e){return e&&e.length>14?e.substring(0,7)+"..."+e.substring(e.length-4):e}function N(e){if(navigator.clipboard)navigator.clipboard.writeText(e).then((function(){}),(function(e){console.log("ERROR copyToClipboard(): "+e)}));else{var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(e){console.log("ERROR copyToClipboard(): "+e)}document.body.removeChild(t)}}e.setDefaults({duration:5e3,position:"bottom-left",dismissible:!0,animate:{in:"zoomIn",out:"zoomOut"}}),document.addEventListener("DOMContentLoaded",(async function(){await async function(){try{let e=await fetch(a+"/storage?path=time");if(e.ok){let t=await e.json();console.log("INFO loadStorageData(): time="+JSON.stringify(t)),r.set("time",t)}else console.log("ERROR loadStorageData(): can't get time")}catch(e){console.log("ERRROR loadStorageData(): "+JSON.stringify(e))}try{let e=await fetch(a+"/bigmaps/tokens/keys?active=true&select=key,value");if(e.ok){let t=await e.json();console.log("INFO loadStorageData(): tokens="+JSON.stringify(t));let n=new Map;if(t&&t.length>0)for(let e=0;e<t.length;e++)n.set(t[e].key,t[e].value);r.set("tokens",n)}else console.log("ERROR loadStorageData(): can't get tokens")}catch(e){console.log("ERRROR loadStorageData(): "+e)}}();let e=r.get("tokens"),t='<option value="" selected="">[select token]</option>';if(e)for(let n of e.keys())e.get(n).active&&(t+='<option value="'+n+'">'+e.get(n).name+"</option>");document.getElementById("mmlLoanToken").innerHTML=t,document.getElementById("mmlDepositToken").innerHTML=t,v(),p(!0)})),document.getElementById("btnMyDeals").addEventListener("click",(()=>async function(){B(),w();let t=document.getElementById("tblMyDeals");t.innerHTML="",document.getElementById("contentMyDeals").classList.remove("is-hidden");let n=new Map;if(r.set("dataTable",n),!l)return void e.toast(c);let o=await async function(){try{let e=await fetch(a+"/bigmaps/deals/keys?active=true&select=key,value");if(e.ok){let t=await e.json();return console.log("INFO getDeals(): deals="+JSON.stringify(t)),t}console.log("ERROR getDeals(): can't get deals")}catch(e){console.log("ERRROR getDeals(): "+JSON.stringify(e))}}();if(o.length>0){let e,a,i,s,d,c,u,g,p=r.get("tokens"),y="";for(let t=0;t<o.length;t++)i=o[t].key,s=o[t].value,e=p.get(s.loan_token_id),a=p.get(s.deposit_token_id),d=s.borrower===l,c=s.creditor===l,u=Math.ceil((Date.parse(s.exp)-Date.now())/864e5),g=d||c&&u<=0,(d||c)&&(n.set(i,s),y+='<tr id="mydeal'+i+'" data-id="'+i+'" class="is-clickable'+(u<0?" has-background-danger-light":"")+'"><td class="is-clickable"><span class="icon"><i class="fas fa-hand-holding-dollar"'+(c?' style="transform: rotate(180deg)':"")+'"></i></span></td><td><figure class="image is-24x24 mr-1 is-pulled-left"><img src="'+m+e.name+'.png"></figure><span class="has-text-weight-semibold">'+e.name+"</span></td><td>"+R(s.loan_amount,e)+"</td><td>"+R(s.reward,e)+"</td><td>"+u+(1===u?" day":" days")+'</td><td><figure class="image is-24x24 mr-1 is-pulled-left"><img src="'+m+a.name+'.png"></figure><span class="has-text-weight-semibold">'+a.name+"</span>&nbsp;"+R(s.deposit_amount,a)+"</td></tr>");t.innerHTML=y}}())),document.getElementById("btnMyLoans").addEventListener("click",(()=>async function(){B(),w();let t=document.getElementById("tblMyLoans");t.innerHTML="",document.getElementById("contentMyLoans").classList.remove("is-hidden");let n=new Map;if(r.set("dataTable",n),!l)return void e.toast(c);let o=await d(l,!0);if(o.length>0){let e,a,i,s,l,d=r.get("tokens"),c="";for(let t=0;t<o.length;t++)e=o[t].key,a=o[t].value,i=d.get(a.loan_token_id),s=d.get(a.deposit_token_id),l=Math.ceil(a.time/86400),n.set(e,a),c+='<tr id="myloan'+e+'" data-id="'+e+'" class="is-clickable"><td><figure class="image is-24x24 mr-1 is-pulled-left"><img src="'+m+i.name+'.png"></figure><span class="has-text-weight-semibold">'+i.name+"</span></td><td>"+R(a.loan_amount,i)+"</td><td>"+R(a.reward,i)+"</td><td>"+l+(1===l?" day":" days")+'</td><td><figure class="image is-24x24 mr-1 is-pulled-left"><img src="'+m+s.name+'.png"></figure><span class="has-text-weight-semibold">'+s.name+"</span>&nbsp;"+R(a.deposit_amount,s)+"</td><td>"+k(a.validity)+"</td></tr>";t.innerHTML=c}}())),document.getElementById("btnLoans").addEventListener("click",(()=>v())),document.getElementById("btnInfo").addEventListener("click",(()=>(B(),w(),void document.getElementById("contentInfo").classList.remove("is-hidden")))),document.getElementById("btnConnect").addEventListener("click",(()=>p(!1))),document.getElementById("btnCopyAddress").addEventListener("click",(()=>y())),document.getElementById("btnDisconnect").addEventListener("click",(()=>async function(){await async function(){await i.removeAllAccounts(),l=""}(),l||(document.getElementById("divDisconnect").classList.add("is-hidden"),document.getElementById("aAddress").innerHTML="",document.getElementById("divConnect").classList.remove("is-hidden"),document.getElementById("btnNewMyLoan").setAttribute("disabled",""),v())}())),document.getElementById("tblMyDeals").addEventListener("click",(()=>async function(){let e=event.target.closest("tr");if(!e)return void console.log("ERROR showDeal(): there is no TR element");let t=e.getAttribute("data-id");console.log("INFO showDeal(): id="+t);let n=r.get("dataTable");if(t&&n){let e=n.get(t);if(e){let n=r.get("tokens").get(e.loan_token_id),o=r.get("tokens").get(e.deposit_token_id),a=e.borrower===l,i=(Date.parse(e.exp)-Date.now())/864e5;document.getElementById("mdLoanTokenImg").setAttribute("src",m+n.name+".png"),document.getElementById("mdLoanTokenName").innerHTML=n.name,document.getElementById("mdLoanAmount").innerHTML=I(e.loan_amount,n),document.getElementById("mdRewardTokenImg").setAttribute("src",m+n.name+".png"),document.getElementById("mdRewardTokenName").innerHTML=n.name,document.getElementById("mdRewardAmount").innerHTML=I(e.reward,n);let s=document.getElementById("mdTime");s.innerHTML=Math.ceil(i)+"&nbsp;"+(1===Math.abs(Math.ceil(i))?"day":"days"),i<0?s.classList.add("has-text-danger"):s.classList.remove("has-text-danger"),document.getElementById("mdDepositTokenImg").setAttribute("src",m+o.name+".png"),document.getElementById("mdDepositTokenName").innerHTML=o.name,document.getElementById("mdDepositAmount").innerHTML=I(e.deposit_amount,o);let d=document.getElementById("mdTitle"),c=document.getElementById("mdButton");c.setAttribute("data-id",t),c.removeEventListener("click",f),c.classList.remove("is-loading"),c.removeAttribute("disabled"),a?(document.getElementById("mdSumTokenImg").setAttribute("src",m+n.name+".png"),document.getElementById("mdSumTokenName").innerHTML=n.name,document.getElementById("mdSumAmount").innerHTML=I(Number(e.loan_amount)+Number(e.reward),n),d.innerHTML="Repay",c.innerHTML="Repay",c.addEventListener("click",f)):(document.getElementById("mdSumTokenImg").setAttribute("src",m+o.name+".png"),document.getElementById("mdSumTokenName").innerHTML=o.name,document.getElementById("mdSumAmount").innerHTML=I(Number(e.deposit_amount),o),d.innerHTML="Withdrawal",c.innerHTML="Take it",i<=0?c.addEventListener("click",f):c.setAttribute("disabled","")),document.getElementById("modalDeal").classList.add("is-active")}else console.log("ERROR showDeal(): there is no deal value for id="+t)}else console.log("ERROR showDeal(): there is no deal id or data")}())),document.getElementById("tblMyLoans").addEventListener("click",(()=>E("cancelLoan"))),document.getElementById("tblLoans").addEventListener("click",(()=>E("makeDeal"))),document.getElementById("btnNewMyLoan").addEventListener("click",(()=>async function(){l?document.getElementById("modalMyLoan").classList.add("is-active"):e.toast(c)}())),document.getElementById("mmlLoanToken").addEventListener("change",(()=>h("loan"))),document.getElementById("mmlDepositToken").addEventListener("change",(()=>h("deposit"))),document.querySelectorAll(".js-calc-apr").forEach((function(e){e.onchange=b})),document.getElementById("mmlLoanTokenAddress").addEventListener("click",(()=>y(event.currentTarget))),document.getElementById("mmlDepositTokenAddress").addEventListener("click",(()=>y(event.currentTarget))),document.getElementById("mmlButton").addEventListener("click",(()=>async function(){let n=document.getElementById("mmlButton");n.classList.add("is-loading");let o=document.getElementById("mmlLoanToken").value,a=document.getElementById("mmlLoanAmount").value,d=document.getElementById("mmlRewardAmount").value,m=document.getElementById("mmlTime").value,c=document.getElementById("mmlDepositToken").value,u=document.getElementById("mmlDepositAmount").value,g=document.getElementById("mmlValidity").value;console.log("---\n"),console.log("loanTokenId="+o),console.log("loanAmount="+a),console.log("rewardAmount="+d),console.log("time="+m),console.log("depositTokenId="+c),console.log("depositAmount="+u),console.log("validity="+g),console.log("---\n");let p=r.get("tokens"),y=!1;p.get(o)||(console.log("ERROR doAddLoan(): loan token has to be selected"),e.toast({message:"Select <b>loan asset</b>",type:"is-danger"}),y=!0),a&&a>0||(console.log("ERROR doAddLoan(): loan amount has to be a number in (0, inf)"),e.toast({message:"Enter <b>loan amount</b> in (0, inf)",type:"is-danger"}),y=!0),d&&d>=0||(console.log("ERROR doAddLoan(): reward amount has to be a number in [0, inf)"),e.toast({message:"Enter <b>reward amount</b> in [0, inf)",type:"is-danger"}),y=!0);let f=86400;if(m=Math.floor(m*f),m&&m>=r.get("time").min&&m<=r.get("time").max||(console.log("ERROR doAddLoan(): time has to be in ["+r.get("time").min/f+", "+r.get("time").max/f+"] days"),e.toast({message:"Loan term has to be in ["+r.get("time").min/f+", "+r.get("time").max/f+"] days",type:"is-danger"}),y=!0),p.get(c)||(console.log("ERROR doAddLoan(): deposit token has to be selected"),e.toast({message:"Select <b>collateral asset</b>",type:"is-danger"}),y=!0),o&&o===c&&(console.log("ERROR doAddLoan(): loan and deposit tokens have to be different"),e.toast({message:"<b>Loan</b> and <b>collateral assets</b> have to be different",type:"is-danger"}),y=!0),u&&u>=0||(console.log("ERROR doAddLoan(): deposit amount has to be a number in [0, inf)"),e.toast({message:"Enter <b>collateral amount</b> in [0, inf)",type:"is-danger"}),y=!0),g&&Math.floor(new Date(g).getTime()/6e4)<=Math.floor(Date.now()/6e4)&&(console.log("ERROR doAddLoan(): validity has to be later than the current moment"),e.toast({message:"<b>Validity</b> has to be later than the current moment",type:"is-danger"}),y=!0),!y){let e=await async function(e,n,o,a,d,m,c){let u=r.get("tokens").get(e),g=r.get("tokens").get(d);if(n=s(n,u.decimals),o=s(o,u.decimals),m=s(m,g.decimals),a>=r.get("time").min&&a<=r.get("time").max){if(c){if(Math.floor(new Date(c).getTime()/6e4)<=Math.floor(Date.now()/6e4))return;c='"Some", "args": [ { "string": "'+new Date(c).toJSON()+'" } ]'}else c='"None"';try{let s=[],r=0;"0"===g.type?r=m:"1"===g.type?s.push({kind:beacon.TezosOperationType.TRANSACTION,amount:0,destination:g.address,parameters:{entrypoint:"approve",value:JSON.parse('{ "prim": "Pair", "args": [ { "string": "'+t+'" }, { "int": "'+m+'"    } ] }')}}):"2"===g.type&&s.push({kind:beacon.TezosOperationType.TRANSACTION,amount:0,destination:g.address,parameters:{entrypoint:"update_operators",value:JSON.parse('[ { "prim": "Left", "args": [ { "prim": "Pair", "args": [ { "string": "'+l+'" }, { "prim": "Pair", "args": [ { "string": "'+t+'" }, { "int": "'+g.token_id+'" } ] } ] } ] } ]')}}),s.push({kind:beacon.TezosOperationType.TRANSACTION,amount:r,destination:t,parameters:{entrypoint:"add_loan",value:JSON.parse('{ "prim": "Pair", "args": [ { "prim": "Pair", "args": [ { "int": "'+m+'" }, { "prim": "Pair", "args": [ { "int": "'+d+'" }, { "int": "'+n+'" } ] } ] }, { "prim": "Pair", "args": [ { "prim": "Pair", "args": [ { "int": "'+e+'" }, { "int": "'+o+'" } ] }, { "prim": "Pair", "args": [ { "int": "'+a+'" }, { "prim": '+c+" } ] } ] } ] }")}});let u=await i.requestOperation({operationDetails:s});if(console.log("INFO addLoan(): result="+JSON.stringify(u)),u.transactionHash)return u.transactionHash}catch(e){console.log("ERRROR addLoan(): "+e)}}}(o,a,d,m,c,u,g);e&&(O(e),document.getElementById("modalMyLoan").classList.remove("is-active"))}n.classList.remove("is-loading")}())),document.querySelectorAll(".js-faq-item").forEach((function(e){e.onclick=g}))})(),LT=o})();