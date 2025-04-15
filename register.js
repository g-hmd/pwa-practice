if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service_worker.js').then(function(registration) {
		console.log('ServiceWorker registration successful with scope: ', registration.scope);
	}).catch(function(err) {
		console.log('ServiceWorker registration failed: ', err);
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

function screenSize() {
    alert("画面の高さ"&screen.height);
    alert("画面の幅"&screen.width);
}

function exit(){
    window.close()
}