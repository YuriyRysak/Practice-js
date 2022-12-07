import 'modern-normalize';
// https://api.github.com/users/username

function fetchUser(username) {
return fetch(`http://api.github.com/users/${username}`).then(response =>
 response.json()
 ); 
}

fetchUser("luxplanjay").then(user => {
    console.log(user);
});

const searchBox = document.querySelector('#search-box');

searchBox.addEventListener('input', event => {
    // event.preventDefault();
    console.log(searchBox.elements.value)

})