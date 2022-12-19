// import axios from 'axios';
const KEY = '32051710-2614f6ab005cb570915111ece';

const formEl = document.getElementById("search-form");
const inputEl = document.querySelector(".search-input");

formEl.addEventListener("submit", e => {
    e.preventDefault();
    const query = inputEl.value;
    console.log(query);
});

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }
//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();

// }

function getImages ({query}) {
   

    const urlAPI = `https://pixabay.com/api/?key=${KEY}&q=${query}&image_type=photo`;

    fetch(urlAPI).then(res => {
        if(res.status !== 200) {
            throw new Error(res.message)
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
    })


}


// const BASE_URL = 'https://pixabay.com/api/'; 

// const page = 1;
// const perPage = 40;
    
// async function fetchImg(query, page, perPage) {
//     try {
//         const response = await axios.get(
//         `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
//         );
//         console.log(response.data)
//         return response;
        
//     }
//     catch (error) {
//         console.log(error);
//     }
// }