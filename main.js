let query = document.querySelector('.query');
let searchBtn = document.querySelector('.searchBtn');
let searchBtn2 = document.querySelector('.searchBtn2');
searchBtn.onclick = function(){
    let url = 'https://www.google.com/search?q=' + query.value;
    window.open(url,'_self');
}
searchBtn2.onclick = function(){
    let url2 = 'https://www.bing.com/search?q=' + query.value;
    window.open(url2,'_self');
}
