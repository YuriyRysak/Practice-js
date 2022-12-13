const API_KEY = '1d289197590b4695af2157c664a54f22';
const PageSize = 8;

let currentPage = 1;
let totalPages = undefined;

const searchBtnRef = document.getElementById('searchControl');
const searchField = document.getElementById('searchNameField');
const articlesContainer = document.getElementById('articles');
const paginationContainer = document.getElementById('pagination');

searchBtnRef.addEventListener('click', e => {
     getNewsAxios({
        query: searchField.value

    })
});
paginationContainer.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.className !== "page-link") return

})

// function getNews ({query}) {
//     const urlAPI = `https://newsapi.org/v2/everything?q=${query}&from=2022-12-06&to=2022-12-06&sortBy=popularity&apiKey=${API_KEY}`;

//     fetch(urlAPI).then(res => {
//         if(!res.ok) {
//             throw new Error(res.message)
//         }
//         return res.json()
//     })
//     .then(({articles}) => {
//         render (articles)         
//     })
// }
function calculatePagination(totalResults) {
    totalPages = Math.ceil(totalResults / PageSize)
    renderPagination()

}
function renderPagination() {
    // <li class="page-item"><a class="page-link" href="#">1</a></li>
   let restPages = totalPages;
    // console.log(totalPages)

}


function getNewsAxios ({query}) {
    const urlAPI = `https://newsapi.org/v2/everything?q=${query}&from=2022-12-01&apiKey=${API_KEY}&pageSize=${PageSize}&page=${currentPage}`;

    axios.get(urlAPI)
       .then(res => res.data)
       .then(({articles, totalResults}) => {
        render(articles)
        calculatePagination(totalResults)
       })
       .catch(error => console.log(error))
}

    function render (articles) {
        articlesContainer.innerHTML = '';

    //     articles.forEach(({title, description, url, urlToImage}) => {
    //        const articleEl = `<article class="news">
    //     <h2>${title}</h2>
    //     <div>${description}</div>
    //     <img src="${urlToImage}" alt="${title}">
    //     <a href="${url}">more</a>
    //   </article>`;
    //   articlesContainer.insertAdjacentHTML('beforeend', articleEl)
    //     });


       const articlesElements = articles.map(({title, description, url, urlToImage}) => {
           return `<article class="news">
         <h2>${title}</h2>
         <div>${description}</div>
         <img src="${urlToImage}" alt="${title}">
         <a href="${url}">more</a>
       </article>`;
       
         });
         articlesContainer.insertAdjacentHTML('beforeend', articlesElements.join(''));
        
    }