// $(".card-box").click(function(){
//     alert("hello")
//     console.log(this.innerHtml);
// })
$("#health").on({
    'click': function(){
        $('#content-img').attr('src','images/about_1.jpg');
        $('.content-text').html("Yolo")
    }
})
$("#blood").on({
    'click': function(){
        $('#content-img').attr('src','images/bg-101.png');
        $('.content-text').html("Hello World")
    }
})