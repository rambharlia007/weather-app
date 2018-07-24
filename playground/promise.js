var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hey. It worked");
    }, 3000)
})

somePromise.then((result) => {
    console.log(result);
}, (errorMessage) => {
    console.log(errorMessage);
})