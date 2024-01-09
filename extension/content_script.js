
// https://www.geeksforgeeks.org/django-static-file/?ref=lbp


function hideAds() {
    var ads = document.querySelectorAll('div[data-google-query-id]');
    
    let arry_ads = Array.from(ads);

    arry_ads.forEach((id)=>{
        var value_id = id.id;
        id.style.display = "none"
    })
}

// Run the function every second


setInterval(hideAds,1000)