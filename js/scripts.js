jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Countdown
    // -------------------------------------------------------------
    (function () {

        $("#back-countdiown").countdown({
            date: "07 july 2021 00:00:00",
            format: "on"
        });
    
    }()); 


}); // JQuery endDate


$(document).on('click', '.m-menu .dropdown-menu', function(e) {
  e.stopPropagation()
})

window.onload = () => {

    let quoteId = Math.floor(Math.random() * quoteArray.length);
    document.getElementById("quote-words").innerHTML = quoteArray[quoteId];

}  
