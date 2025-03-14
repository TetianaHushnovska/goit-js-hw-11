import{a as d,S as g,i as n}from"./assets/vendor-BlV6sHEg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();d.defaults.baseURL="https://pixabay.com/api/";function h(a,r={}){const o={key:"49159303-69e39ecdcc21e97a7866413fa",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,...r};return d.get("",{params:o}).then(s=>s.data).catch(s=>{throw s})}function y(a){const{webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:i,downloads:m}=a;return`<li class="gallery-item">
          <a href="${o}">
            <img src="${r}" alt="${s}" />
          </a>
          <div class="img-info">
            <div>
              <p class="info-name">Likes</p>
              <p class="info-data">${e}</p>
            </div>
            <div>
              <p class="info-name">Views</p>
              <p class="info-data">${t}</p>
            </div>
            <div>
              <p class="info-name">Comments</p>
              <p class="info-data">${i}</p>
            </div>
            <div>
              <p class="info-name">Downloads</p>
              <p class="info-data">${m}</p>
            </div>
          </div>
        </li>`}function v(a,r,o){r.innerHTML=a.map(y).join(""),o&&typeof o.refresh=="function"&&o.refresh()}const L=document.querySelector(".search-form"),u=document.querySelector(".js-input"),c=document.querySelector(".gallery"),p=document.querySelector(".loader");let l=new g(".gallery a",{captions:!0,captionsData:"alt",captionType:"attr",captionDelay:250,animationSpeed:350,captionPosition:"bottom"});l.on("show.simplelightbox",function(){});l.on("error.simplelightbox",function(a){console.log(a)});function w(){p.classList.remove("visually-hidden")}function f(){p.classList.add("visually-hidden")}const b={message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"},q={message:"Enter your search request!",messageColor:"#000",backgroundColor:"#f5c386",position:"topRight"};L.addEventListener("submit",a=>{a.preventDefault();const r=u.value.trim();if(r===""){c.innerHTML="",f(),n.warning(q);return}c.innerHTML="",w(),h(r).then(o=>{const s=o.hits;s.length===0?n.error(b):v(s,c,l)}).catch(o=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"}),console.log("Error request:",o)}).finally(()=>{f(),u.value=""})});
//# sourceMappingURL=index.js.map
