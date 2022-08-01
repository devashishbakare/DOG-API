//callBack function
function getMeDogImage(){

    //adding url and from response we render image on img tag
    $.get("https://dog.ceo/api/breeds/image/random", function(data){
        var imageUrl = data.message;
        $("#dogImage").attr("src", imageUrl);
    });

}
//Added click event on button
$("#button").click(getMeDogImage);