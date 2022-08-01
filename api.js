function getMeDogImage(){

    $.ajax({
        url : "https://dog.ceo/api/breeds/image/random",
        method : "GET",
        success : function(data){{
            
            var imageUrl = data.message;
            $("#dogImage").attr("src", imageUrl);

       }} 
    });

}

$("#button").click(getMeDogImage);