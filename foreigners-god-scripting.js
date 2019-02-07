var fgjq = $.noConflict();

	fgjq(".fg_lyrics").click(function(){
	fgjq(this).next().removeClass('fg_close_post');
	fgjq(this).next().addClass('fg_open_post');
    return false;
});

fgjq(".fg_exit").click(function(){
	fgjq(this).parent().removeClass('fg_open_post');
	fgjq(this).parent().addClass('fg_close_post');
    return false;
});