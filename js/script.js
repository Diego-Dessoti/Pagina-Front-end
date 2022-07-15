$(document).ready(function(){
    $("#hsMenu").click(function(){
        $('ul').slideToggle();
    })
    
})

$('a').on('click', function(event){
    if (this.has !==''){
        event.preventDefault();

        var hash = this.hash

        $('html, body').animate({
            scrollTop : $(hash).offset().top
        }, 800,function(){
            window.location.hash = hash;
        })
    }
})