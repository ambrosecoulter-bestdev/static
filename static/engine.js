!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CssSelectorGenerator=e():t.CssSelectorGenerator=e()}(self,(function(){return(()=>{var t={426:(t,e,n)=>{var r=n(529);function o(t,e,n){Array.isArray(t)?t.push(e):t[n]=e}t.exports=function(t){var e,n,i,u=[];if(Array.isArray(t))n=[],e=t.length-1;else{if("object"!=typeof t||null===t)throw new TypeError("Expecting an Array or an Object, but `"+(null===t?"null":typeof t)+"` provided.");n={},i=Object.keys(t),e=i.length-1}return function n(c,s){var l,a,f,d;for(a=i?i[s]:s,Array.isArray(t[a])||(void 0===t[a]?t[a]=[]:t[a]=[t[a]]),l=0;l<t[a].length;l++)o((d=c,f=Array.isArray(d)?[].concat(d):r(d)),t[a][l],a),s>=e?u.push(f):n(f,s+1)}(n,0),u}},529:t=>{t.exports=function(){for(var t={},n=0;n<arguments.length;n++){var r=arguments[n];for(var o in r)e.call(r,o)&&(t[o]=r[o])}return t};var e=Object.prototype.hasOwnProperty}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{default:()=>U,getCssSelector:()=>H});var t,e,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function i(t){return null!=t&&"object"===(void 0===t?"undefined":o(t))&&1===t.nodeType&&"object"===o(t.style)&&"object"===o(t.ownerDocument)}function u(t="unknown problem",...e){console.warn(`CssSelectorGenerator: ${t}`,...e)}!function(t){t.NONE="none",t.DESCENDANT="descendant",t.CHILD="child"}(t||(t={})),function(t){t.id="id",t.class="class",t.tag="tag",t.attribute="attribute",t.nthchild="nthchild",t.nthoftype="nthoftype"}(e||(e={}));const c={selectors:[e.id,e.class,e.tag,e.attribute],includeTag:!1,whitelist:[],blacklist:[],combineWithinSelector:!0,combineBetweenSelectors:!0,root:null,maxCombinations:Number.POSITIVE_INFINITY,maxCandidates:Number.POSITIVE_INFINITY};function s(t){return t instanceof RegExp}function l(t){return"string"==typeof t||s(t)}function a(t){return Array.isArray(t)?t.filter(l):[]}function f(t){const e=[Node.DOCUMENT_NODE,Node.DOCUMENT_FRAGMENT_NODE,Node.ELEMENT_NODE];return function(t){return t instanceof Node}(t)&&e.includes(t.nodeType)}function d(t,e){if(f(t))return t.contains(e)||u("element root mismatch","Provided root does not contain the element. This will most likely result in producing a fallback selector using element's real root node. If you plan to use the selector using provided root (e.g. `root.querySelector`), it will nto work as intended."),t;const n=e.getRootNode({composed:!1});return f(n)?(n!==document&&u("shadow root inferred","You did not provide a root and the element is a child of Shadow DOM. This will produce a selector using ShadowRoot as a root. If you plan to use the selector using document as a root (e.g. `document.querySelector`), it will not work as intended."),n):e.ownerDocument.querySelector(":root")}function p(t){return"number"==typeof t?t:Number.POSITIVE_INFINITY}function m(t=[]){const[e=[],...n]=t;return 0===n.length?e:n.reduce(((t,e)=>t.filter((t=>e.includes(t)))),e)}function y(t){return[].concat(...t)}function h(t){const e=t.map((t=>s(t)?t:new RegExp("^"+t.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".+")+"$")));return t=>e.some((e=>e.test(t)))}function g(t,e,n){const r=Array.from(d(n,t[0]).querySelectorAll(e));return r.length===t.length&&t.every((t=>r.includes(t)))}function b(t,e){return e=null!=e?e:t[0].ownerDocument.querySelector(":root"),m(t.map((t=>function(t,e){const n=[];let r=t;for(;i(r)&&r!==e;)n.push(r),r=r.parentElement;return n}(t,e))))}function S(t){const e=t.parentNode;if(e){const n=Array.from(e.childNodes).filter(i).indexOf(t);if(n>-1)return[`:nth-child(${n+1})`]}return[]}function N(t){return m(t.map(S))}const v=(t.NONE,t.NONE,t.DESCENDANT,t.DESCENDANT,t.CHILD,t.CHILD,new RegExp(["^$","\\s","^\\d"].join("|"))),w=new RegExp(["^$","^\\d"].join("|")),E=[e.nthoftype,e.tag,e.id,e.class,e.attribute,e.nthchild];function x(t){return[":root",...b([t]).map((t=>N([t])[0])).reverse()].join(" > ")}var A=n(426),C=n.n(A);const O=h(["class","id","ng-*"]);function T({nodeName:t}){return`[${t}]`}function j({nodeName:t,nodeValue:e}){return`[${t}='${V(e)}']`}function I({nodeName:t}){return!O(t)}function D(t){const e=Array.from(t.attributes).filter(I);return[...e.map(T),...e.map(j)]}function $(t){return(t.getAttribute("class")||"").trim().split(/\s+/).filter((t=>!w.test(t))).map((t=>`.${V(t)}`))}function _(t){return[V(t.tagName.toLowerCase())]}function k(t){const e=[...new Set(y(t.map(_)))];return 0===e.length||e.length>1?[]:[e[0]]}function R(t){const e=k([t])[0],n=t.parentElement;if(n){const r=Array.from(n.children).filter((t=>t.tagName.toLowerCase()===e)).indexOf(t);if(r>-1)return[`${e}:nth-of-type(${r+1})`]}return[]}function P(t=[],{maxResults:e=Number.POSITIVE_INFINITY}={}){const n=[];let r=0,o=L(1);for(;o.length<=t.length&&r<e;)r+=1,n.push(o.map((e=>t[e]))),o=M(o,t.length-1);return n}function M(t=[],e=0){const n=t.length;if(0===n)return[];const r=[...t];r[n-1]+=1;for(let t=n-1;t>=0;t--)if(r[t]>e){if(0===t)return L(n+1);r[t-1]++,r[t]=r[t-1]+1}return r[n-1]>e?L(n+1):r}function L(t=1){return Array.from(Array(t).keys())}const q=":".charCodeAt(0).toString(16).toUpperCase(),F=/[ !"#$%&'()\[\]{|}<>*+,./;=?@^`~\\]/;function V(t=""){var e,n;return null!==(n=null===(e=null===CSS||void 0===CSS?void 0:CSS.escape)||void 0===e?void 0:e.call(CSS,t))&&void 0!==n?n:function(t=""){return t.split("").map((t=>":"===t?`\\${q} `:F.test(t)?`\\${t}`:escape(t).replace(/%/g,"\\"))).join("")}(t)}const Y={tag:k,id:function(t){return 0===t.length||t.length>1?[]:function(t){const e=t.getAttribute("id")||"",n=`#${V(e)}`,r=t.getRootNode({composed:!1});return!v.test(e)&&g([t],n,r)?[n]:[]}(t[0])},class:function(t){return m(t.map($))},attribute:function(t){return m(t.map(D))},nthchild:N,nthoftype:function(t){return m(t.map(R))}};function B(t){return t.includes(e.tag)||t.includes(e.nthoftype)?[...t]:[...t,e.tag]}function G(t={}){const n=[...E];return t[e.tag]&&t[e.nthoftype]&&n.splice(n.indexOf(e.tag),1),n.map((e=>{return(r=t)[n=e]?r[n].join(""):"";var n,r})).join("")}function W(t,e,n="",r){const o=function(t,e){return""===e?t:function(t,e){return[...t.map((t=>e+" "+t)),...t.map((t=>e+" > "+t))]}(t,e)}(function(t,e,n){const r=y(function(t,e){return function(t){const{selectors:e,combineBetweenSelectors:n,includeTag:r,maxCandidates:o}=t,i=n?P(e,{maxResults:o}):e.map((t=>[t]));return r?i.map(B):i}(e).map((e=>function(t,e){const n={};return t.forEach((t=>{const r=e[t];r.length>0&&(n[t]=r)})),C()(n).map(G)}(e,t))).filter((t=>t.length>0))}(function(t,e){const{blacklist:n,whitelist:r,combineWithinSelector:o,maxCombinations:i}=e,u=h(n),c=h(r);return function(t){const{selectors:e,includeTag:n}=t,r=[].concat(e);return n&&!r.includes("tag")&&r.push("tag"),r}(e).reduce(((e,n)=>{const r=function(t=[],e){return t.sort(((t,n)=>{const r=e(t),o=e(n);return r&&!o?-1:!r&&o?1:0}))}(function(t=[],e,n){return t.filter((t=>n(t)||!e(t)))}(function(t,e){var n;return(null!==(n=Y[e])&&void 0!==n?n:()=>[])(t)}(t,n),u,c),c);return e[n]=o?P(r,{maxResults:i}):r.map((t=>[t])),e}),{})}(t,n),n));return[...new Set(r)]}(t,r.root,r),n);for(const e of o)if(g(t,e,r.root))return e;return null}function H(t,n={}){const r=function(t){const e=(Array.isArray(t)?t:[t]).filter(i);return[...new Set(e)]}(t),o=function(t,n={}){const r=Object.assign(Object.assign({},c),n);return{selectors:(o=r.selectors,Array.isArray(o)?o.filter((t=>{return n=e,r=t,Object.values(n).includes(r);var n,r})):[]),whitelist:a(r.whitelist),blacklist:a(r.blacklist),root:d(r.root,t),combineWithinSelector:!!r.combineWithinSelector,combineBetweenSelectors:!!r.combineBetweenSelectors,includeTag:!!r.includeTag,maxCombinations:p(r.maxCombinations),maxCandidates:p(r.maxCandidates)};var o}(r[0],n);let u="",s=o.root;function l(){return function(t,e,n="",r){if(0===t.length)return null;const o=[t.length>1?t:[],...b(t,e).map((t=>[t]))];for(const t of o){const e=W(t,0,n,r);if(e)return{foundElements:t,selector:e}}return null}(r,s,u,o)}let f=l();for(;f;){const{foundElements:t,selector:e}=f;if(g(r,e,o.root))return e;s=t[0],u=e,f=l()}return r.length>1?r.map((t=>H(t,o))).join(", "):function(t){return t.map(x).join(", ")}(r)}const U=H})(),r})()}));






//
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var translationreceived = false;
var translateditems = [];
var updatedtranslations = [];
var projectid = apikey;
var urlpath = window.location.pathname;



//INITIAL CONFIGURATION
//INCLUDE PARAMETERS "?initialiseconfiguration=yes&baselang=<SITESBASELANGUAGE>"
var url = "https://autotranslaterapp.bubbleapps.io/api/1.1/wf/initialconfiguration";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Show hide translate menu
function translatemenu(){
    if (document.querySelector("#translatemenu").style.display == 'none'){
        document.querySelector("#translatemenu").style.display = 'flex';
        document.querySelector("#translationselector").style.borderRadius = '5px';
    }
    else {
        document.querySelector("#translatemenu").style.display = 'none';
        document.querySelector("#translationselector").style.borderRadius = '50px';
    }
}

document.addEventListener("DOMContentLoaded", function(){
    
    var styletag = '<style>a#langoptionsselector:hover{background: #00000073!important;}a#langoptionsselector{transition: all 0.12s ease 0s, top 0s ease 0s, left 0s ease 0s, bottom 0s ease 0s, right 0s ease 0s; -webkit-transition: all 0.12s ease 0s, top 0s ease 0s, left 0s ease 0s, bottom 0s ease 0s, right 0s ease 0s; -moz-transition: all 0.12s ease 0s, top 0s ease 0s, left 0s ease 0s, bottom 0s ease 0s, right 0s ease 0s; -o-transition: all 0.12s ease 0s, top 0s ease 0s, left 0s ease 0s, bottom 0s ease 0s, right 0s ease 0s;} div#translatemenu {transition: all 0.12s ease 0s, top 0s ease 0s, left 0s ease 0s, bottom 0s ease 0s, right 0s ease 0s; -webkit-transition: all 0.12s ease 0s, top 0s ease 0s, left 0s ease 0s, bottom 0s ease 0s, right 0s ease 0s; -moz-transition: all 0.12s ease 0s, top 0s ease 0s, left 0s ease 0s, bottom 0s ease 0s, right 0s ease 0s; -o-transition: all 0.12s ease 0s, top 0s ease 0s, left 0s ease 0s, bottom 0s ease 0s, right 0s ease 0s;} div#translationselector{cursor: pointer;transition: all 0.12s ease 0s, top 0s ease 0s, left 0s ease 0s, bottom 0s ease 0s, right 0s ease 0s; -webkit-transition: all 0.12s ease 0s, top 0s ease 0s, left 0s ease 0s, bottom 0s ease 0s, right 0s ease 0s; -moz-transition: all 0.12s ease 0s, top 0s ease 0s, left 0s ease 0s, bottom 0s ease 0s, right 0s ease 0s; -o-transition: all 0.12s ease 0s, top 0s ease 0s, left 0s ease 0s, bottom 0s ease 0s, right 0s ease 0s;}</style>';
    document.querySelector('head').innerHTML += styletag;
    var xhr = new XMLHttpRequest();
    var availlangs = [];
    var availlangsurl = "https://autotranslaterapp.bubbleapps.io/api/1.1/wf/getavailablelang";
    var langsdata = JSON.stringify({projectuid: projectid, url: urlpath});
    console.log(urlpath);
    xhr.open("POST", availlangsurl);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(langsdata);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            availlangs = JSON.parse(xhr.responseText);
            console.log(availlangs);
            $("<div id=\"translationselector\" onclick=\"translatemenu()\" style=\"position: fixed; bottom: 20px; "+availlangs[0].btnposition+": 30px; padding: 10px 20px; z-index: 999999999; background: "+availlangs[0].btncolor+"; border-radius: 50px; color: white; font-size: 13px; min-width: 120px; display: flex; align-items: center; justify-content: center; flex-direction: column-reverse;\">"+availlangs[0].btntext+"<div id=\"translatemenu\" style=\"display: none;flex-direction: column; align-content: center; align-items: center; bottom: 50px; right: 33px; border-radius: 3px; margin-bottom: 10px;\"></div><div/>").appendTo("body");    
            availlangs.forEach((element) => {
                var el = '<a id="langoptionsselector" style="padding: 5px 10px; background: #0000003b; margin-bottom: 3px; border-radius: 10px; width: 100%; color: white; text-decoration: none!important; display: flex; flex-direction: row; align-content: center; justify-content: center;" href="?lang='+element.lang+'">'+element.lang+'</a>';
                document.querySelector("#translatemenu").innerHTML += el;
                var link = document.createElement('link');
                link.href = window.location+'?lang='+element.lang;
                link.rel = 'alternate';
                link.hreflang = element.langcode; // no need for HTML5
                document.getElementsByTagName('head')[0].appendChild(link);
            });
        }
    };
    
});


var doms = [];
if (window.location.search.indexOf('initialiseconfiguration=yes') > -1) {
    //CREATE CONFIGURING POPUP
    
    document.addEventListener("DOMContentLoaded", function(){
        $('<div style="position: fixed; height: 100vh; width: 100vw; background: #000000c4; z-index: 999999999999999999; top: 0; left: 0;display: flex; align-content: center; justify-content: center; align-items: center;"><div style="border-radius: 10px; position: relative; width: 40%; height: auto; background: #fff; display: flex; flex-direction: column; align-content: center; justify-content: center; align-items: center; overflow: hidden; padding-bottom: 40px;"><img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"></img><p>Configuring your site...</p></div></div>').appendTo("body");
        setTimeout(function(){

         
            document.body.querySelectorAll('*').forEach(function(node) {
        
                if (node.innerText != '' && node.tagName != 'SCRIPT' && node.tagName != 'STYLE' && node.id != "#translationselector" && node.id != "#translatemenu" && node.id != "#langoptionsselector"){
                    const element = node;
                    const selector = CssSelectorGenerator.getCssSelector(element, {selectors: ['tag', 'id', 'class']});
                    
                    var elem = node;
                    var elem = document.querySelector(selector);
                    elem = elem.cloneNode(true);
                    for (var i=elem.childNodes.length-1; i>=0; i--) {
                        if (elem.childNodes[i].tagName) elem.removeChild(elem.childNodes[i]);
                    }
                    var innerText = elem['innerText' in elem ? 'innerText' : 'textContent'];
                    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (innerText.trim() != '' && !regEmail.test(innerText)){
                        doms.push({"id": selector , "innertext": node.innerHTML});
                    }
                }
                
                
            });
            var xhr = new XMLHttpRequest();
                xhr.open("POST", url);
                var onedata = JSON.stringify({projectuid: projectid, translateto: urlParams.get('translate'),language: urlParams.get('baselang'), pageurl: urlpath ,pagetext: doms});
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(onedata);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        window.close();
                    }
                }
                

        },5000);//End Timeout Function
        
    });
} else {
    console.log('Normal run');
}



var retreivetranslation = "https://autotranslaterapp.bubbleapps.io/api/1.1/wf/gettranslation";
if (window.location.search.indexOf('lang=') > -1) {
    
    var xhr = new XMLHttpRequest();
    var data = JSON.stringify({projectuid: projectid, language: urlParams.get('lang'), page: urlpath});
    xhr.open("POST", retreivetranslation);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            
        
           translateditems = JSON.parse(xhr.responseText);
           translationreceived == true
           translateditems.forEach((element) => {
               // Search for element by stored ID
               if(document.querySelector(element.id)){
                   if(document.querySelector(element.id).id != "#langoptionsselector" && document.querySelector(element.id).id != "#translationselector" && document.querySelector(element.id).id != "#translatemenu"){
                    updatedtranslations.push({"id": document.querySelector(element.id) , "innertext": element.translation});
                   }
                
               }
               // If element search fails, fallback to looping through all DOMS and matching selector to stored ID
               else{

                document.body.querySelectorAll('*').forEach(function(node) {
                    if(node.innerHTML == element.original){
                        if(node.id != "#translationselector" && node.id != "#translatemenu" && node.id != "#langoptionsselector"){
                            updatedtranslations.push({"id": node , "innertext": element.translation});
                        }
                        
                    }
                });

               }
            });
            updatedtranslations.forEach((element) => {
                if(element.id != "#translationselector" && element.id != "#translatemenu" && element.id != "#langoptionsselector"){
                element.id.innerHTML = element.innertext.replaceAll(/&amp;nbsp;/g,"");
                }
            });
        }
    };
}

document.addEventListener('click', function (event) {
    if (window.location.search.indexOf('lang=') > -1) {
    
        var xhr = new XMLHttpRequest();
        var data = JSON.stringify({projectuid: projectid, language: urlParams.get('lang'), page: urlpath});
        xhr.open("POST", retreivetranslation);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                
            
               translateditems = JSON.parse(xhr.responseText);
               translationreceived == true
               translateditems.forEach((element) => {
                   // Search for element by stored ID
                   if(document.querySelector(element.id)){
                       if(document.querySelector(element.id).id != "#langoptionsselector" && document.querySelector(element.id).id != "#translationselector" && document.querySelector(element.id).id != "#translatemenu"){
                        updatedtranslations.push({"id": document.querySelector(element.id) , "innertext": element.translation});
                       }
                    
                   }
                   // If element search fails, fallback to looping through all DOMS and matching selector to stored ID
                   else{
    
                    document.body.querySelectorAll('*').forEach(function(node) {
                        if(node.innerHTML == element.original){
                            if(node.id != "#translationselector" && node.id != "#translatemenu" && node.id != "#langoptionsselector"){
                                updatedtranslations.push({"id": node , "innertext": element.translation});
                            }
                            
                        }
                    });
    
                   }
                });
                updatedtranslations.forEach((element) => {
                    if(element.id != "#translationselector" && element.id != "#translatemenu" && element.id != "#langoptionsselector"){
                    element.id.innerHTML = element.innertext.replaceAll(/&amp;nbsp;/g,"");
                    }
                });
            }
        };
    }
});



if (window.location.search.indexOf('manualselect=') > -1 && window.location.search.indexOf('lang=') > -1 && window.location.search.indexOf('baselang=') > -1) {
    document.addEventListener('click', function (event) {
        if(event.shiftKey){
            if (confirm('Create new translation for this element?')) {
                // Save it!
                const element = event.target;
                const selector = CssSelectorGenerator.getCssSelector(element, {selectors: ['tag', 'id', 'class']});
                manelement = [];
                manelement.push({"id": selector , "innertext": event.target.innerHTML});
                var xhr = new XMLHttpRequest();
                xhr.open("POST", url);
                var onedata = JSON.stringify({projectuid: projectid, translateto: urlParams.get('lang'),language: urlParams.get('baselang'), pageurl: urlpath ,pagetext: manelement});
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(onedata);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        alert('Manual translation created.');
                    }
                }
              } else {
                // Do nothing!
                console.log('Thing was not saved to the database.');
              }
        }
        updateinnerhtml();

  });
}

function updateinnerhtml(){
    var xhr = new XMLHttpRequest();
        var data = JSON.stringify({projectuid: projectid, language: urlParams.get('lang'), page: urlpath});
        xhr.open("POST", retreivetranslation);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                
            
               translateditems = JSON.parse(xhr.responseText);
               translationreceived == true
               translateditems.forEach((element) => {
                   // Search for element by stored ID
                   if(document.querySelector(element.id)){
                       if(document.querySelector(element.id).id != "#langoptionsselector" && document.querySelector(element.id).id != "#translationselector" && document.querySelector(element.id).id != "#translatemenu"){
                        updatedtranslations.push({"id": document.querySelector(element.id) , "innertext": element.translation});
                       }
                    
                   }
                   // If element search fails, fallback to looping through all DOMS and matching selector to stored ID
                   else{
    
                    document.body.querySelectorAll('*').forEach(function(node) {
                        if(node.innerHTML == element.original){
                            if(node.id != "#translationselector" && node.id != "#translatemenu" && node.id != "#langoptionsselector"){
                                updatedtranslations.push({"id": node , "innertext": element.translation});
                            }
                            
                        }
                    });
    
                   }
                });
                updatedtranslations.forEach((element) => {
                    if(element.id != "#translationselector" && element.id != "#translatemenu" && element.id != "#langoptionsselector"){
                    element.id.innerHTML = element.innertext.replaceAll(/&amp;nbsp;/g,"");
                    }
                });
            }
        };
}