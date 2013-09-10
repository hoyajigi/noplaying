		/*Define Constance*/
		studentY=0.35;
		teacherY=0.2;
		student1X=0.05
		student2X=0.325;
		student3X=0.6;
		
		isAnimate1=0;
		isAnimate2=0;
		isAnimate3=0;
		teacherposition=0;
		
		$(document).ready(function(){
			
			//기본
			canvas=$("#myCanvas");
			context=canvas.get(0).getContext("2d");
//			context.rotate(Math.Pi/4);
			//전체화면
			width=$(window).get(0).innerWidth;
			height=$(window).get(0).innerHeight;
			$(window).resize(resizeCanvas);
			function resizeCanvas(){
				canvas.attr("width",width);
				canvas.attr("height",height);
			//	context.fillRect(0,0,canvas.width(),canvas.height());
			}
			resizeCanvas();
			soundBackground=$("#gameSoundBackground").get(0);
			soundBackground.addEventListener('ended', function(){
				this.currentTime = 0;
			}, false);
			/*Loading Images*/
			imageStudent11=new Image(),imageStudent12=new Image(),imageStudent13=new Image();
			imageStudent21=new Image(),imageStudent22=new Image(),imageStudent23=new Image();
			imageStudent31=new Image(),imageStudent32=new Image(),imageStudent33=new Image();
			imageTeacher0=new Image(),imageTeacher1=new Image(),imageTeacher2=new Image(),imageTeacher3=new Image(),imageTeacher4=new Image();
			background=new Image();
			
			imageStudent11.src="img/ssstudent1.png";
			imageStudent12.src="img/ssstudent2.png";
			imageStudent13.src="img/ssstudent3.png";
			
			imageStudent21.src="img/student1.png";
			imageStudent22.src="img/student2.png";
			imageStudent23.src="img/student3.png";
			
			imageStudent31.src="img/sstudent1.png";
			imageStudent32.src="img/sstudent2.png";
			imageStudent33.src="img/sstudent3.png";
			
			imageTeacher0.src="img/teacher0.png";
			imageTeacher1.src="img/teacher1.png";
			imageTeacher2.src="img/teacher2.png";
			imageTeacher3.src="img/teacher3.png";
			imageTeacher4.src="img/teacher4.png";
			
			background.src="img/background.png";
			$(background).load(function(){
				draw();
			});
			/*End of Loading Images*/
			
//			$('#target').submit(function() {mynickname=$("#myNickname").val();socket.emit('set nickname', mynickname);return false;});
$("#msgbox").keypress( function(event) {
         if (event.which == '13') {
            sendmsg();
            event.preventDefault();
        }
    });   
		});
		
		function randomtp()
		{
			var result = Math.floor(Math.random() * 3) -1;
//			alert(result);
			teacherposition+=result;
			if(teacherposition>4){
				teacherposition=4;
			}
			if(teacherposition<0){
				teacherposition=0;
			}
		}
		
		function draw()
		{
			drawTimeout=setTimeout(draw,200);
			context.drawImage(background,0,0,width,height);
			
			randomtp();
			
			if(teacherposition==0){
				context.drawImage(imageTeacher0,width*0.4,height*teacherY);
			}
			else if(teacherposition==1){
				context.drawImage(imageTeacher1,width*0.4,height*teacherY);
			}
			else if(teacherposition==2){
				context.drawImage(imageTeacher2,width*0.4,height*teacherY);
			}
			else if(teacherposition==3){
				context.drawImage(imageTeacher3,width*0.4,height*teacherY);
			}
			else if(teacherposition==4){
				context.drawImage(imageTeacher4,width*0.4,height*teacherY);
			}
			if(isAnimate1){
				if(isAnimate1==1){
					context.drawImage(imageStudent12,width*student1X,height*studentY);
					isAnimate1=2;
				}
				else{
					context.drawImage(imageStudent13,width*student1X,height*studentY);
					isAnimate1=1;
				}
			}
			else{
				context.drawImage(imageStudent11,width*student1X,height*studentY);
			}
			if(isAnimate2){
				if(isAnimate2==1){
					context.drawImage(imageStudent22,width*student2X,height*studentY);
					isAnimate2=2;
				}
				else{
					context.drawImage(imageStudent23,width*student2X,height*studentY);
					isAnimate2=1;
				}
			}
			else{
				context.drawImage(imageStudent21,width*student2X,height*studentY);
			}
			if(isAnimate3){
				if(isAnimate3==1){
					context.drawImage(imageStudent32,width*student3X,height*studentY);				
					isAnimate3=2;
				}
				else{
					context.drawImage(imageStudent33,width*student3X,height*studentY);
					isAnimate3=1;
				}
			}
			else{
				context.drawImage(imageStudent31,width*student3X,height*studentY);
			}
			if(teacherposition==4&&(isAnimate1||isAnimate2||isAnimate3)){
				//alert("딱걸");
				//clearTimeout(drawTimeout);
			}
		}