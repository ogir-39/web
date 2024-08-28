window.onload = function() {
    $('.subMenuP').hide();
    $('.menuPhone').on('click',function(){
        console.log(1);
        $('.subMenuP').show();
        $('.subMenuP>li:first-child>i').on('click',function(){
            $('.subMenuP').hide();
        })
    })
}