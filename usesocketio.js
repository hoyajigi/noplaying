	var socket = io.connect('http://localhost');
	  socket.emit('join room', 'room1' );

	  
	  socket.on('news', function (data) {
	    console.log(data);
//	    alert(data["hello"]);
		if(data["hello"]=="null1"){
			isAnimate2=1;
		}
		else if(data["hello"]=="null0"){
			isAnimate2=0;
		}
		else if(data["hello"]=="there1"){
			context.fillRect(500,100,300,300);
		}
		else if(data["hello"]=="there0"){
			context.clearRect(500,100,300,300);

		}
	  });
	  
	socket.on('message', function (data) {
        add_message(data);
    });

	socket.on('joined', function (data) {
        add_message(data);
    });
    function add_message(m) {
        $("#chatlog").append(m);
        $("#chatlog").append("<BR>");
    }

    function sendmsg()
    {
        var r = $("#msgbox").val();
        socket.emit('message', r );
//        add_message(r);
        $("#msgbox").val('');
    }  