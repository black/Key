let data = {
    service: "facebook",
    url: "www.facebook.com",
    username: "chintucandy",
    password: "2nkas99000mkkl!",
    emailid: "chintu@gmail.com"
}
axios.post('http://localhost:1020/storePassword', data)
    .then(res => {
        console.log("res ", res);
    }).catch(res => {
        console.log("fail ", res);
    }).finally(res => {
        console.log("done ", res);
    });