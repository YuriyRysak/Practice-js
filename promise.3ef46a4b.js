new Promise(((e,o)=>{const l=Math.random()>.5;setTimeout((()=>{l&&e("Промис выполнился успешно, с результатом (исполнен, fulfilled)"),o("Promis failed (rejected)!")}),1e3)})).then((e=>{console.log(e)})).then((e=>{console.log(e)}));
//# sourceMappingURL=promise.3ef46a4b.js.map
