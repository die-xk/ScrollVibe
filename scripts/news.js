function store(){ //stores items in the localStorage
    var brand = document.getElementById('newsTitle').value;
    var price = document.getElementById('newsText').value;
    var key = document.getElementById('key').value; //gets the key from the user

    const news = {
        title: brand,
        text: price,
    }

    window.localStorage.setItem(key,JSON.stringify(news));  
    //converting object to string
}

function displayNews(){
    const a = document.getElementById("newsTitle").value;
    document.body.innerHTML = "<h1>Today's date is " + a + "</h1>"
}
window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("newsForm").onsubmit = store
    document.getElementById("test").onclick = displayNews
}