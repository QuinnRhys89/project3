// my App Object
const myApp = {};

// Array of Tarot Cards
myApp.fortuneArray =[
    {
    url:"assets/the-fool-card.png",
    class:"endresult",
    title: "Internet Explorer - The Fool",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse veritatis quisquam repellat quas molestiae officia deserunt aspernatur dignissimos? Labore deserunt asperiores aspernatur perferendis, odit delectus cupiditate quos, eius cum consequuntur enim facere neque nobis nam corporis officia tempora repudiandae libero ut, voluptate repellat? Numquam placeat labore, eaque architecto beatae dolore, reprehenderit at doloremque minus veniam, possimus explicabo distinctio aliquam in.",
    },
    {
    url:"assets/the-magician-card.png",
    class:"endresult",
    title: "Siri - The Magician",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse veritatis quisquam repellat quas molestiae officia deserunt aspernatur dignissimos? Labore deserunt asperiores aspernatur perferendis, odit delectus cupiditate quos, eius cum consequuntur enim facere neque nobis nam corporis officia tempora repudiandae libero ut, voluptate repellat? Numquam placeat labore, eaque architecto beatae dolore, reprehenderit at doloremque minus veniam, possimus explicabo distinctio aliquam in.",
    },
    {
    url: "assets/the-death-card.png",
    class: "endresult",
    title: "Broken Machines - Death",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse veritatis quisquam repellat quas molestiae officia deserunt aspernatur dignissimos? Labore deserunt asperiores aspernatur perferendis, odit delectus cupiditate quos, eius cum consequuntur enim facere neque nobis nam corporis officia tempora repudiandae libero ut, voluptate repellat? Numquam placeat labore, eaque architecto beatae dolore, reprehenderit at doloremque minus veniam, possimus explicabo distinctio aliquam in.",
    },
    {
    url: "assets/the-devil-card.png",
    class: "endresult",
    title: "Javascript - The Devil",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse veritatis quisquam repellat quas molestiae officia deserunt aspernatur dignissimos? Labore deserunt asperiores aspernatur perferendis, odit delectus cupiditate quos, eius cum consequuntur enim facere neque nobis nam corporis officia tempora repudiandae libero ut, voluptate repellat? Numquam placeat labore, eaque architecto beatae dolore, reprehenderit at doloremque minus veniam, possimus explicabo distinctio aliquam in.",
    },
    {
    url: "assets/wheel-of-fortune.png",
    class: "endresult",
    title: "Bitcoin - Wheel of Fortune",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse veritatis quisquam repellat quas molestiae officia deserunt aspernatur dignissimos? Labore deserunt asperiores aspernatur perferendis, odit delectus cupiditate quos, eius cum consequuntur enim facere neque nobis nam corporis officia tempora repudiandae libero ut, voluptate repellat? Numquam placeat labore, eaque architecto beatae dolore, reprehenderit at doloremque minus veniam, possimus explicabo distinctio aliquam in.",
    },
    {
    url: "assets/the-lovers-card.png",
    class: "endresult",
    title: "Tinder - The Lovers",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse veritatis quisquam repellat quas molestiae officia deserunt aspernatur dignissimos? Labore deserunt asperiores aspernatur perferendis, odit delectus cupiditate quos, eius cum consequuntur enim facere neque nobis nam corporis officia tempora repudiandae libero ut, voluptate repellat? Numquam placeat labore, eaque architecto beatae dolore, reprehenderit at doloremque minus veniam, possimus explicabo distinctio aliquam in.",
    }
]

// Smooth Scroll
$('a').smoothScroll({
    offset: 0
});


// Dialogue on load
myApp.displayDialogue = function(){
    $(".dialogue").append("<p class='initial-dialogue'>Pick a card...</p>");
    $('.dialogue').slideUp(300).delay(1000).fadeIn(400);
    $('.initial-dialogue').delay(3000).fadeOut()
}

// function secondaryDialogue(){
    //     $('.dialogue').append("<p class='second-dialogue'>Any Card...</p>");
    //     $('.second-dialogue').slideUp(300).delay(1000).fadeIn(400);
    // }
    
    // displayDialogue();
    // secondaryDialogue();
    
    
    //Lay Out Cards Function
myApp.cardLayout = function(){
    $('card-stack').removeClass('highlight');
    $('.layout').click(function () {
        $(".card-stack").each(function (e) {
            // JS method to time out a function/event
            setTimeout(function () {
                // Add class of cardstack ani and each index (e)
                $(".card-stack").eq(e).attr("class", "card-stack ani" + e);
                $('.layout').fadeOut(2500);
            }, e * 150)
        });
    });
}


// Shuffle Cards Functions
myApp.cardShuffle = function(){
    $('.shuffle').click(function () {
        $('.card-stack').removeClass('highlight');
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
        });
    });
}

// Card Selection Function 
myApp.cardSelection = function (){
    $('.card-stack').click(function () {
        if ($(this).hasClass('highlight')){
            myApp.displayFortune();
           
        } else{
            $('.card-stack').removeClass('highlight');
            $(this).toggleClass('highlight');   
        }
    });
}

// Display Fortune Function (Append Result to Page)
myApp.displayFortune = function (){
    // declare a variable = random number based on the length of the array
    const fortuneResult = Math.floor(Math.random() * myApp.fortuneArray.length);
    const finalImage = myApp.fortuneArray[fortuneResult]; 
    $('.fortune-container').empty().show().append(
        `<div class="endresult"><img src="${finalImage.url}"></div>
        <div class="details"><h2 class="header">${finalImage.title}</h2><p class="description">${finalImage.text}</p></div>
       `);
    $('.hidden-view').show();  
    $('html, body').animate({scrollTop: $('#reveal').offset().top}, 1000);
    // $('a').click(function () {
    //     $('.hidden-view').hide();
    // });
}

// Initialization Function
myApp.init = function (){
    myApp.displayDialogue();
    myApp.cardLayout();
    myApp.cardShuffle ();
    myApp.cardSelection();
    
}


// Document Ready
$(function () {
    myApp.init();
});
    