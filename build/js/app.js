function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}function navegacionFija(){const e=document.querySelector(".header"),n=document.querySelector(".sobre-festival");window.addEventListener("scroll",(function(){n.getBoundingClientRect().top<0?e.classList.add("fijo"):e.classList.remove("fijo")}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const n=e.target.attributes.href.value;document.querySelector(n).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("picture");t.innerHTML=`\n       <source\n       srcset="./build/img/thumb/${n}.avif"\n       type="image/avif"\n     />\n     <source\n       srcset="./build/img/thumb/${n}.webp"\n       type="image/webp"\n     />\n     <img\n       loading="lazy"\n       width="200"\n       height="300"\n       src="./build/img/thumb/${n}.jpg"\n       alt="Imagen galeria"\n     />\n       `,t.onclick=function(){mostrarImagen(n)},e.appendChild(t)}}function mostrarImagen(e){const n=document.createElement("picture");n.innerHTML=`\n       <source\n       srcset="./build/img/grande/${e}.avif"\n       type="image/avif"\n     />\n     <source\n       srcset="./build/img/grande/${e}.webp"\n       type="image/webp"\n     />\n     <img\n       loading="lazy"\n       width="200"\n       height="300"\n       src="./build/img/grande/${e}.jpg"\n       alt="Imagen galeria"\n     />\n       `;const t=document.createElement("DIV");t.appendChild(n),t.classList.add("overlay"),t.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()};const i=document.createElement("P");i.textContent="X",i.classList.add("btn-cerrar"),i.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()},t.appendChild(i);const a=document.querySelector("body");a.appendChild(t),a.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map
