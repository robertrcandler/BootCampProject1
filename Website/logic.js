$.ajax({
    url: queryURL,
    method: "GET",
    // if the get request works, i run a function that logs the data i was aiming for
    success: function(data) {
        console.log('success', data);
        $.each(data, function(i, item) {
            var GEODATA = JSON.stringify(data.ADDDATAHERE);
            // 2 arguments passed above are i which is index, and the actual item
          $searchHistory.append('<div>city ' + data.name + ', ADDDATAHERE ' + ADDDATAHERE + ' </div');
        });
    }
    // .then(function (response) { 
        
  
    //     //this goes into the response you got from the server and pulls specific information-
    //     //-so that you don't have to comb through hella lines of an object to look at them. storing the image url into a variable
    //       var CATDATA = response.image;
      
    //       //this looks like a place for you to take your response from the server and place it. creating new html element to store this image
    //       var searchResult = $("<div>");
      
    //       //this is going to be the url of the cat image you wanted from the server, and-
    //       //-underneath it you will see an alt tag for accessibility
    //       searchResult.attr("src", CATDATA);
      
    //       //this is a jquery method to take the cat image  you got from the server you reached-
    //       //-and put it at the top of your area where you are placing these in your doc
    //       $("#catDisplay").prepend(searchResult);
          
    //     })
  });

  