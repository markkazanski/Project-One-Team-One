function getTitle(searchQuery) {
    if (!searchQuery) 
        return Promise.reject("pass in something"); 

    const requestURL = `http://api.walmartlabs.com/v1/search?query=${searchQuery}&format=json&apiKey=rqwj3h4qjprfdnuzvsn3cz4m`; 

    // ===============CORS CODE=========================================
    jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });
    // =================================================================        

    return $.ajax({
        url: requestURL,
        method: "GET"
    }).done((response) => {
        return  {
            title: response.items[0].name,
            rating: response.items[0].customerRating,
            description: response.items[0].longDescription,
            imageURL: response.items[0].largeImage
        }

        console.log(response);
    });
}