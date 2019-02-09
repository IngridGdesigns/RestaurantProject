/////////Jquery code goes here -->
$(document).ready(function(){
    $("#hide").click (function(){ //hides button and text in the html
        $("p").hide();
    });
    $("#show").click (function(){//shows users in my restaurant recommendor - except hulk
        alert(`Here are the Restaurant recommender users: ${JSON.stringify(food.users)} and the following restaurants ${JSON.stringify(food.restaurants)} ` );
    
    });
});
/////////Jquery code ends -->
//${JSON.stringify(food.users)} and ${JSON.stringify(food.restaurants)}`