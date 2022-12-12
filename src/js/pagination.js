const API_KEY = '1d289197590b4695af2157c664a54f22';
const PageSize = 8;

let currentPage = 1;
let totalPages = undefined;

const searchBtnRef = document.getElementById('searchControl');
const loadMoreBtnRef = document.getElementById('loadMore');
const searchField = document.getElementById('searchNameField');
const articlesContainer = document.getElementById('articles');
const paginationContainer = document.getElementById('pagination');

searchBtnRef.addEventListener('click', e => {
     getNews(searchField.value).then(({articles, totalResults}) => {
        calculatePagination(totalResults);
        const elements = createArticlesElements(articles);
        const pageElements = createPagesElements();

        render(paginationContainer, pageElements);
        render(articlesContainer, elements);
     });

    
});

paginationContainer.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.className !== "page-link") return

    currentPage = e.target.dataset.page;

    getNews(searchField.value).then(({articles, totalResults}) => {
        calculatePagination(totalResults)

        const elements = createArticlesElements(articles);
        const pageElements = createPagesElements();

        render(paginationContainer, pageElements);
        render(articlesContainer, elements);

    });
})

loadMoreBtnRef.addEventListener('click', e => {
    if (currentPage > totalPages) return

    currentPage = Number(currentPage) + 1;

    getNews(searchField.value).then(({articles}) => {
      const elements = createArticlesElements(articles);
      articlesContainer.insertAdjacentHTML('beforeend', elements);
    });
})

function getNews (query) {
    const urlAPI = `https://newsapi.org/v2/everything?q=${query}&from=2022-12-01&apiKey=${API_KEY}&pageSize=${PageSize}&page=${currentPage}`;

    return axios.get(urlAPI)
       .then(res => res.data)
       .then(({articles, totalResults}) => {
        return {articles, totalResults}
       })
       .catch(error => console.log(error))
}

function createArticlesElements (articles) {
    return articles.map(({title, description, url, urlToImage}) => {
      return `<article class="news">
      <h2>${title}</h2>
      <div>${description}</div>
      <img src="${urlToImage}" alt="${title}" loading="lazy">
      <a href="${url}" class="news-link" target="_blank">more</a>
    </article>`;
    }).join('');
  }

// function calculatePagination(totalResults) {
//     totalPages = Math.ceil(totalResults / PageSize)
//     renderPagination()

// }

/**
 * createPagesElements
 * @returns {string} Рядок з елементами кнопок пагінації
 */
function createPagesElements () {
    let pagesElements = '';
    
    for (let i = 1; i <= totalPages; i += 1 ) {
      pagesElements += `<li class="page-item"><a class="page-link" href="#" data-page=${i}>${i}</a></li>`
    }
  
    return pagesElements
  }
  
  /**
   * calculatePagination. Підраховує кількість сторінок
   * @param {Number} totalResults 
   */
  function calculatePagination(totalResults) {
    totalPages = Math.floor((totalResults > 100 ? 100 : totalResults) / PageSize)
  }
  
  /**
   * Очищає контейнер і вставляє туди новий контент
   * @param {HTMLElement} container 
   * @param {String} content 
   */
  function render (container, content) {
    container.innerHTML = '';
    container.insertAdjacentHTML('beforeend', content)
  }


