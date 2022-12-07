const searchBtnRef = document.getElementById('searchControl');
const searchField = document.getElementById('searchNameField');

searchBtnRef.addEventListener('click', e => {
    const query = searchField.value
    console.log(query)
})