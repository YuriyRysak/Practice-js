const e=document.getElementById("searchControl"),t=document.getElementById("searchNameField"),n=document.getElementById("articles");document.getElementById("pagination");e.addEventListener("click",(e=>{!function({query:e}){const t=`https://newsapi.org/v2/everything?q=${e}&from=2022-12-01&apiKey=1d289197590b4695af2157c664a54f22&pageSize=8&page=1`;axios.get(t).then((e=>e.data)).then((({articles:e,totalResults:t})=>{!function(e){n.innerHTML="";const t=e.map((({title:e,description:t,url:n,urlToImage:a})=>`<article class="news">\n         <h2>${e}</h2>\n         <div>${t}</div>\n         <img src="${a}" alt="${e}">\n         <a href="${n}">more</a>\n       </article>`));n.insertAdjacentHTML("beforeend",t.join(""))}(e),function(e){totalPages=Math.ceil(e/8),console.log(totalPages)}(t)})).catch((e=>console.log(e)))}({query:t.value})}));
//# sourceMappingURL=pagination.f4980b6d.js.map