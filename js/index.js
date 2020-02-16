// $(".card-box").click(function(){
//     alert("hello")
//     console.log(this.innerHtml);
// })
$("#health").on({
    'click': function(){
        $('#content-img').attr('src','images/about_1.jpg');
        $('.content-text').html("Yolo");
        $('#health').addClass("clicked");
        setTimeout(function(){
            $('#health').removeClass("clicked"); 
        },100)
    }
})
$("#blood").on({
    'click': function(){
        $('#content-img').attr('src','images/bg-101.png');
        $('.content-text').html("Hello World");
        $('#blood').addClass("clicked");
        setTimeout(function(){
            $('#blood').removeClass("clicked"); 
        },100)
    }
})