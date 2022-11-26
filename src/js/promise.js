//  PROMISE
// const promise = new Promise((resolve, reject) => {
//     const canFulfill = Math.random() > 0.5;
//   setTimeout(() => {
//     if (canFulfill) {
//         resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
        
//     }
//     reject('Promis failed (rejected)!');
// }, 1000);
// });

// promise.then(
//     result => {
//     console.log(`✅ ${result}`);
// },
// error => {
//     console.log(`❌ ${error}`);
// },);

// promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//     console.log(`✅ ${result}`);
   
// }
// function onRejected(error) {
//     console.log(`❌ ${error}`);
// }



// цепочки промисов
// promise
// .then(onFulfilled)
// .then(x => {
//         console.log(x);

        

//         return 10;
//     })
//     .then(y => {console.log(y);
//     })
// .catch(error => console.log(error))
// .finally(() => console.log('Я буду виполнен в любом лучае'));

                                     // ПРОМОСИФИКАЦИЯ:
// const makeOrder = dish => {
//     const DELAY = 1000;

//     const promise = new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;
//         setTimeout(() => {
//             if (passed) {
//                 resolve(`✅Вот ваше блюдо: ${dish}`);
//             }
//             reject('❌Извините закончились продукты(');
//         }, DELAY);
//     });
//     return promise;
//    };
// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);
// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
// } 
// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// }

/* ПРОМИСИФИКАЦИЯ "синхронних" функций
    - Promise.resolve()
    - Promise.reject()
*/


// const makeOrder = (dish) => {
//     return Promise.resolve(`✅Вот ваше блюдо: ${dish}`);        
   
//    };
// makeOrder('пирожок').then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
// } 
// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// }

/*Покемони с https://pokeapi.co/*/

// const fetchPokemonById = id => {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// };        

// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//     console.log('onFetchSuccess -> onFetchSuccess');
//     console.log(pokemon);
// }
// function onFetchError(error) {
//     console.log('onFetchError -> onFetchError');
//     console.log('Это в блоке catch');
//     console.log(error);
// }


// Пример: промисе


// const makePromise = () => {
//     return new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;
//         setTimeout(() => {
//             if(passed) {
//                 resolve('✅Это -RESOLVE-'); 
//             }
//             reject('❌Не работает reject');
//         }, 2000);
//      });
        
// };

// makePromise()
// .then(result => console.log(result))
// .catch(error => console.log(error));