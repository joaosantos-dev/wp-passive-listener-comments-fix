jQuery(window).on("load", function() {
    //When a reply link is clicked, check if reply-script is loaded. If not, load it and emulate the click
    jQuery('.comment-reply-link').click(function(){ 
        if(!(isScriptLoaded("/wp-includes/js/comment-reply.min.js"))){
            var script = document.createElement('script');
            script.src = "/wp-includes/js/comment-reply.min.js"; 
        script.onload = emRepClick(jQuery(this).attr('data-commentid'));        
            document.head.appendChild(script);
        } 
    });
});

//Function checks if a given script is already loaded
function isScriptLoaded(src){
    return document.querySelector('script[src="' + src + '"]') ? true : false;
}
 
//Function waits 50 ms before it emulates a click on the relevant reply link now that the reply script is loaded
function emRepClick(comId) {
sleep(50).then(() => {
document.querySelectorAll('[data-commentid="'+comId+'"]')[0].dispatchEvent(new Event('click'));
});
}
//Function does nothing, for a given amount of time
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}