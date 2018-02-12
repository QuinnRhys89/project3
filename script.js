$(function () {

    // Smooth Scroll
    $('a').smoothScroll({
        offset: 0
    }, 2000);
    
    // Array of Tarot Cards
    const fortuneArray =[
        {
        url:"assets/the-fool-card.png",
        class:"endresult"
        },
        {
        url:"assets/the-magician-card.png",
        class:"endresult"
        },
        {
        url: "assets/the-death-card.png",
        class: "endresult"
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

    // displayDialogue();
    // secondaryDialogue();


// When the page loads, loop through that array and append each card to the container _shuffle method
  
    $('.card-stack').click(function () {
        if ($(this).hasClass('tabbed')){
            displayFortune();
        } else{
            $('.card-stack').removeClass('tabbed');
            $(this).toggleClass('tabbed');   
        }
    });

    function displayFortune(){
        // declare a variable = random number based on the length of the array
        const fortuneResult = Math.floor(Math.random()*fortuneArray.length);
        const finalImage = fortuneArray[fortuneResult]; 
        $('.hidden-view').show();
        $('html, body').animate({scrollTop: $('#reveal').offset().top}, 1000);
        $('.fortune-container').empty().show().append(`<div class="endresult"><img src="${finalImage.url}"></div><div class="description">"Here is your fortune"</div>`);  
        console.log(fortuneResult);
    }

    // function pageSlide(){
    //     $().click(function (event) {
    //         page.animate({
    //             scrollTop: 0,
    //         }, 1000);
    //     });
    // }

    $('.layout').click(function () {
        $(".card-stack").each(function (e) {
            // JS method to time out a function/event
            setTimeout(function () {
                // Add class of cardstack ani and each index (e)
                $(".card-stack").eq(e).attr("class", "card-stack ani" + e);
                $('.layout').fadeOut(2500);
            }, e * 150)

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