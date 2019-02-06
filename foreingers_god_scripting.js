$(".fg_lyrics").click(function(){
	$(this).next().toggleClass('fg_open_post');
    return false;
});

$(".fg_exit").click(function(){
	$(this).parent().removeClass('fg_open_post');
	$(this).parent().toggleClass('fg_close_post');
    return false;
});