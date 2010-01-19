(function(){
    var url = document.URL;
    var replaced = url.replace(/\/all\/welcome.html/, '/');
    if (url != replaced) {
	location.href = replaced;
    }
})();
