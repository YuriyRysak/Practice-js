var o="https://pixabay.com/api/?key=32051710-2614f6ab005cb570915111ece&q="+encodeURIComponent("red roses");$.getJSON(o,(function(o){parseInt(o.totalHits)>0?$.each(o.hits,(function(o,e){console.log(e.pageURL)})):console.log("No hits")}));
//# sourceMappingURL=Api-Pixabay.bb34f937.js.map
