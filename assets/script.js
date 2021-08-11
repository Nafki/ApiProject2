function fetchData(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=ZerFLCMDlhadyh4bOINHkPYbNcCZJfV254ZpWcgp')
    .then(response => {
        const data = response.json();
        console.log(data)
        if(!response.ok){
            throw error('ERROR');
        }
        return data
    })
    .then(data =>{
    console.log(data);
    displayData(data)
    })
}
fetchData();

function displayData(apod){
    console.log(apod.date,apod.explanation)
    //document.getElementsByClassName("date")
    //document.getElementById("explanation").innerHTML = "<p>" + apod.explanation + "</p>"
    document.getElementById("explanation").innerText = apod.explanation 
    document.getElementById("nasaimage").src = apod.url
    document.getElementsByClassName("date")[0].innerText = apod.date
    document.getElementsByClassName("title")[0].innerText = apod.title
}