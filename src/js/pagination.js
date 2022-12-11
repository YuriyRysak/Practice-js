const API_KEY = '1d289197590b4695af2157c664a54f22';

const searchBtnRef = document.getElementById('searchControl');
const searchField = document.getElementById('searchNameField');
const articlesContainer = document.getElementById('articles');

searchBtnRef.addEventListener('click', e => {
     getNewsAxios({
        query: searchField.value

    })
});


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

function getNewsAxios ({query}) {
    const urlAPI = `https://newsapi.org/v2/everything?q=${query}&from=2022-12-06&to=2022-12-06&sortBy=popularity&apiKey=${API_KEY}`;

    axios.get(urlAPI)
       .then(res => res.data)
       .then(({articles}) => render(articles))
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