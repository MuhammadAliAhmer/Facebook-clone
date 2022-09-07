$(document).ready(function(){
    $('.see-more').click(function(){
        $(this).hide();
        $('.overflow-btn').addClass('active');
        $('.see-less').addClass('active');
    })

       $('.see-less').click(function(){
        $('.see-more').show();
        $('.overflow-btn').removeClass('active');
        $('.see-less').removeClass('active');
    })
})


$(document).ready(function(){
    $('.see-more-post').click(function(){
        $(this).hide();
        $('.overflow-btn-post').addClass('active');
        $('.see-less-post').addClass('active');
    })

       $('.see-less-post').click(function(){
        $('.see-more-post').show();
        $('.overflow-btn-post').removeClass('active');
        $('.see-less-post').removeClass('active');
    })
})

