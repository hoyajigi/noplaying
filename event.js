$(window).mousedown(function(e){
	  		    socket.emit('my other event', { my: '1' });
	  		    soundBackground.currentTime=0;
	  		    soundBackground.play();
	  		    soundBackground.currentTime=0;
	  		    isAnimate1=1;
	  });
	  $(window).mouseup(function(e){
	  		    socket.emit('my other event', { my: '0' });
	  		    soundBackground.pause();
	  		    isAnimate1=0;
	  });
	  document.addEventListener('touchstart', function(event) {
 	    socket.emit('my other event', { my: '1' });
// 	    soundBackground.currentTime=0;
 	    soundBackground.play();
 //	    soundBackground.currentTime=0;
 	    isAnimate1=1;
	}, false);
	document.addEventListener('touchend', function(event) {
 	    socket.emit('my other event', { my: '0' });
 	    soundBackground.pause();
		isAnimate1=0;
}, false);
	$(window).unbind("touchstart");
/*
$(document).bind("touchstart",function(e){
     });*/
     
