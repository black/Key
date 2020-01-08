axios.post('http://localhost:1020/storePassword')
    .then(res => {
        console.log("res ", res);
    }).catch(res => {
        console.log("fail ", res);
    }).finally(res => {
        console.log("done ", res);
    });

    console.log("Test");