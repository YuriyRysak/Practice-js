
const promise = new Promise((resolve, reject) => {
    const canFulfill = Math.random() > 0.5;
  setTimeout(() => {
    if (canFulfill) {
        resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
        
    }
    reject('Promis failed (rejected)!');
}, 1000);
});

// promise.then(
//     result => {
//     console.log(`✅ ${result}`);
// },
// error => {
//     console.log(`❌ ${error}`);
// },);

// promise.then(onFulfilled, onRejected);

function onFulfilled(result) {
    console.log(`✅ ${result}`);
   
}
function onRejected(error) {
    console.log(`❌ ${error}`);
}



// цепочка промисов
promise.then(result => {
    console.log(result);
//   return 5;
}).then(x => {
    console.log(x);
});
