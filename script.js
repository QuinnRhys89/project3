$(function () {
    
    // Array of Tarot Cards
    const fortuneArray =[
        {
        url:"assets/fortune.jpg",
        class:"endresult"
        },
        {
        url:"assets/red-card.jpg",
        class:"endresult"
        }
    ]

    // Dialogue on load
    function displayDialogue(){
        $(".dialogue").append("<p class='initial-dialogue'>Pick a card...</p>");
        $('.dialogue').slideUp(300).delay(1000).fadeIn(400);
        $('.shuffle').hide();
        $('.initial-dialogue').delay(3000).fadeOut()
    }

    // function secondaryDialogue(){
    //     $('.dialogue').append("<p class='second-dialogue'>Any Card...</p>");
    //     $('.second-dialogue').slideUp(300).delay(1000).fadeIn(400);
    // }

    displayDialogue();
    // secondaryDialogue();


// When the page loads, loop through that array and append each card to the container _shuffle method
  
    $('.card-stack').click(function () {
        if ($(this).hasClass('tabbed')){
            displayFortune();
        } else{
            $('.card-stack').removeClass('tabbed');
            $(this).addClass('tabbed');
        }
    });

    function displayFortune(){
        // declare a variable = random number based on the length of the array
        const fortuneResult = Math.floor(Math.random()*fortuneArray.length);
        const finalImage = fortuneArray[fortuneResult];  
        console.log(fortuneArray[fortuneResult], "HERE IS THE RESULT");
        $('.fortune-container').show().append(`<div class="endresult"><img src="${finalImage.url}"></div>`);
      
        console.log(fortuneResult);
        // bracket notation to get the random fortune photo using random variable
        // show fortune div
        // get random fortune photo from array
        // append to fortune div
    }



    // When the button is clicked, use the _.shuffle method to shuffle the cards array and then redisplay them on the page
    $('.layout').click(function () {
        $(".card-stack").each(function (e) {
            // JS method to time out a function/event
            setTimeout(function () {
                // Add class of cardstack ani and each index (e)
                $(".card-stack").eq(e).attr("class", "card-stack ani" + e);
            }, e * 150)
            $('.shuffle').delay(3000).fadeIn(400);
            $('.layout').delay(3000).fadeOut(400);
        });
        // Show shuffle button and hide layout button
    });

    $('.shuffle').click(function () {
        $(".card-stack").each(function (e) {
            // JS method to time out a function/event
            setTimeout(function () {
                // Add class of cardstack ani and each index (e)
                if ($('.card-stack').eq(e).hasClass("ani" + e)){
                    $('.card-stack').eq(e).removeClass("ani" + e).addClass("aniTwo" + e);
                    console.log("We are removing the class");
                } else{
                $(".card-stack").eq(e).attr("class", "card-stack ani" + e); 
                }  
            }, e * 150)

            console.log(e);
        });
    });
});
// end of document ready