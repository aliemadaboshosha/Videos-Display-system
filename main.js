window.addEventListener("load", function () {
	myvideo = document.getElementById("myvideo");
	buttonSection = document.getElementById("controlswrapper");
	myvideo.addEventListener("click", playpausefun);
	myvideo.addEventListener("dblclick", fullscreen);

	for (let i = 1; i < 11; i++) {
		btn = document.createElement("button");
		btn.innerHTML = "videos" + i;
		btn.addEventListener("click", function (e) {
			myvideo.src =i + ".mp4";
		});
		buttonSection.appendChild(btn);
	}
	playbtn=this.document.getElementById("playpausebtn");
}); //end of load

function playpausefun() {
	if (myvideo.paused) myvideo.play();
	else myvideo.pause();
}

function fullscreen() {
	myvideo.requestFullscreen();
}
function changevolume(e){
	myvideo.volume=e.target.value;
}
function mutefun(){
	if(myvideo.muted){myvideo.muted=false;}
	else{myvideo.muted=true;}
}

function changevideosize(e){
	switch (e.value) {
		case "small":
			myvideo.width=myvideo.height=500
			
			break;
			case "medium":
				myvideo.width=600
				
				break;
					case "large":
				myvideo.width=myvideo.height=650 
				
				break;
					case "fullScreen":
				myvideo.requestFullscreen();
				
				break;
	
		
	}
}
function playpausefun(){
	if(myvideo.paused){myvideo.play();
	playbtn.value="pause"}
	else{myvideo.pause();
	playbtn.value="play";}
	
}
