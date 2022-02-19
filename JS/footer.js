
window.addEventListener("load", function() {
		const content = document.getElementById("pageContent");
		const footer = document.getElementById("footerHere");

	
				footer.innerHTML =
			'<div id="footing">'+
			'<blockquote cite="https://www.brainyquote.com/quotes/oleksandr_usyk_975671?src=t_ukrainian" />'+
			'<p class="quote"> <br> <strong>I am Ukrainian and fighting like a Ukrainian.</strong></p>'+
			'<p class="quote"><em><a href="https://www.brainyquote.com/quotes/oleksandr_usyk_975671?src=t_ukrainian" target="_blank">'+
			'-Oleksandr Usyk </a></em></p>'+
			'<p class="ending"> &copy Benjamin Fedorak, Powered by Ukraine in GitHub </p>'+
			'</div>';
			console.log("footer loaded");	

				//document.getElementsByTagName('header')[0].appendChild(script);
	
	
		//getting heights of footer and window
		
		const frame = document.getElementById("wholePage");
		const html = document.documentElement;
		//console.log(document.scrollHeight);
		//const height = frame.offsetHeight + html.offsetHeight;
	
		let docheight = html.scrollHeight;
		console.log("window height " + window.innerHeight);
		console.log("document height " + frame.style.height);
	
		let frameHeight = $('#wholePage').height();
		console.log("content height " + (content.offsetHeight - 38));
	
	
		let bottomOffset = content.bottom - 38;
		console.log("combined height " + bottomOffset);  
							  
		let heightDifference = window.innerHeight - html.clientHeight;
		console.log("difference " + heightDifference + " htmlClientHeight " + html.clientHeight);
	
	
		//choosing what to display based on difference of footer and window height
		if(heightDifference != 0){
				footer.style.position = "absolute";
				footer.style.bottom = "0";
		} 
	
});
