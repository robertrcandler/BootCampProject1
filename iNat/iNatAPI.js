//iNaturalist Callback url:
//https://robertrcandler.github.io/BootCampProject1/
var array1;
//iNaturalist Application id:
//7a79bd6c05c212de5ceb30a169c542786e4bc33fba28ed1806d16dbd2c41302a

//iNaturalist secret:
//372a7e227c5db4f8c7dc7ec7ddca074bd6394813ce3bc92158c9b11470f4dfcd

//iNatural edit my api page:
//https://www.inaturalist.org/oauth/applications/439


//import other js files
var importjava = document.createElement('script');
importjava.src = 'rangeCalculator.js';
document.head.appendChild(importjava);
var importjava = document.createElement('script');
importjava.src = 'catchoice.js';
document.head.appendChild(importjava);

iNatAPI();
var mapURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAAIl0HJ72nad-p73bmpSeso6VFDkhgXbY";
        
        function iNatAPI() {
            //put way to call submit button location or what ever
            //make function to create lattitude/longitude box out of location name
            //link species name from html to species id here

            //required variables
            var request;
            var examplequeryURL = 'https://api.inaturalist.org/v1/observations?taxon_name=bear&captive=false&verifiable=true&lat=29.4704&lng=-103.9578&radius=5&order=desc&order_by=created_at';
            var siteurl = 'https://api.inaturalist.org/v1/observations?';
            var mappable = 'mappable=true'; //can put on map, keep true
            var order = '&order=desc&order_by=created_at'; //order that results are listed
            var queryURL = siteurl + mappable + order;
            
            //range calculator
            function iNatRange() {
                //one place, don't know what radius of zone is? but fairly decent sized
                var lat = '&lat=29.211183'; //lattitude
                var lng = '&lng=-103.236002'; //longitude
                //sample box
                var boxarea = '&nelat=29.3&nelng=-103.2&place_id=any&swlat=29.24&swlng=-103.4';
                //all of texas
                var texas = '&place_id=18';
                //location search
                var coord = "";//using box area as example, create box creater using google api
                switch (coord) {
                    case boxarea:
                        queryURL=queryURL+boxarea;
                        break;
                    case "":
                        queryURL=queryURL+texas;
                        break;
                }
            }
            iNatRange();

            //cat search adder
            function iNatCat() {
                //there are no recorded panther/jaguar sightings in texas
                var mammal = '&iconic_taxon_name=mammalia'; //this works, searches all mammals
                var mountainLion = '&taxon_id=42006'; //includes, puma, couger, mountain lion
                //there are no recorded panther/jaguar sightings in texas
                var ocelot = '&taxon_id=41997';//includes margay
                var Jaguarundi = '&taxon_id=197783';
                var bobcat = '&taxon_id=41976';
                var kitty = '&taxon_id=118552';//domestic cat
                var bear = '&taxon_id=41638';//american black bear
                var coyote = '&taxon_id=42051';
                //search or button functionality
                var searchAnimal = "Mountain Lion";//using ocelot as example/link to doc later
                switch (searchAnimal) {
                    case ""://all cats
                        queryURL = queryURL + mountainLion + ocelot + Jaguarundi + bobcat + kitty;
                        break;
                    case "Ocelot":
                    case "Margay":
                        queryURL = queryURL + ocelot;
                        break;
                    case "Mountain Lion":
                    case "Puma":
                    case "Couger":
                        queryURL = queryURL + mountainLion;
                        break;
                    case "Jaguarundi":
                        queryURL = queryURL + Jaguarundi;
                        break;
                    case "Bobcat":
                        queryURL = queryURL +bobcat;
                        break;
                    case "Cat":
                        queryURL = queryURL + kitty;
                        break;
                    default:
                        alert("Something went wrong!");
                }
            }
            iNatCat();
            
            console.log(queryURL);
            
            request = new XMLHttpRequest();
    
            request.open('GET', queryURL, true);
            request.onload = function () {
    
                var data = JSON.parse(this.response);
                if (request.status >= 200 && request.status < 400) {
                    console.log(data);
                    array1 = JSON.stringify(data.results[0].place_guess);
                    
                    //add to image
                    for (var I=0; i < 20; i++) {
                        var prelocation = JSON.stringify(data.results[i].place_guess);
                        var location = prelocation.replace(" ","+");
                        mapsURL += "&q=" + location;
                    }
                    top.document.getElementById('maps').setAttribute("src",mapsURL);
                    //end add image

                } else {
                    console.log("something went wrong");
                }console.log(array1);
                
            }
            
            request.send();
        }
   
        
        
        console.log(array1);




// //outside
// var mapURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAAIl0HJ72nad-p73bmpSeso6VFDkhgXbY";
// //inside
// for (var I=0; i < data.results.length; i++) {
// var location = JSON.stringify(data.results[i].place_guess);
// mapsURL += "&q=" + location;
// }
// top.document.getElementById('maps').setAttribute("src",mapsURL);