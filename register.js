if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service_worker.js').then(function (registration) {
        console.log('成功');
    }).catch(function (err) {
        console.log('失敗');
    });
}

function onlinecheck() {
    if (window.navigator.onLine) {
        console.log("online");
        alert('オンライン');
    } else {
        console.log("offline");
        alert('オフライン');
    }
}