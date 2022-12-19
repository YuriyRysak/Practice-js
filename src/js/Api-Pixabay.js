import axios from 'axios';
// const API_KEY = '32051710-2614f6ab005cb570915111ece';
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     feach(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });

// function getNews (query) {
//     const urlAPI = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');;

//     return axios.get(urlAPI)
//        .then(res => res.data)
//        .then(data => console.log(data))
       
//     //    .then(({articles, totalResults}) => {
//     //     return {articles, totalResults}
//     //    })
//        .catch(error => console.log(error))
// }
const BASE_URL = 'https://pixabay.com/api/'; 
const KEY = '32051710-2614f6ab005cb570915111ece';


const page = 1;
const perPage = 40;
    
async function fetchImg(query, page, perPage) {
    try {
        const response = await axios.get(
        `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
        );
        console.log(response.data)
        return response;
        
    }
    catch (error) {
        console.log(error);
    }
}