!function(){var e="1d289197590b4695af2157c664a54f22",n=document.getElementById("searchControl"),t=document.getElementById("searchNameField"),c=document.getElementById("articles");n.addEventListener("click",(function(n){t.value;!function(n){var t=n.query,r="https://newsapi.org/v2/everything?q=".concat(t,"&from=2022-12-06&to=2022-12-06&sortBy=popularity&apiKey=").concat(e);fetch(r).then((function(e){if(!e.ok)throw new Error(e.message);return e.json()})).then((function(e){!function(e){c.innerHTML="";var n=e.map((function(e){var n=e.title,t=e.description,c=e.url,r=e.urlToImage;return'<article class="news">\n         <h2>'.concat(n,"</h2>\n         <div>").concat(t,'</div>\n         <img src="').concat(r,'" alt="').concat(n,'">\n         <a href="').concat(c,'">more</a>\n       </article>')}));c.insertAdjacentHTML("beforeend",n.join(""))}(e.articles)}))}({query:t.value})}))}();
//# sourceMappingURL=fetch-api.8d741ec9.js.map