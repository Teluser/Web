$(document).ready(function(){

			//Style p and a 
			$("p,a").css("color","red");
			$(".center").css("textAlign","center");
			$(".center").css("fontWeight","bold");
			$("#1,.center").css("fontSize","20px");
			$("*").css("disable","true");
			// up right arrow each link
			$("a").each(function(){
				$(this).prepend("&nearr;");
			})
			// open link in new tab
			$("a").attr("target","_blank");
			//change href
			$("a").each(function(){
				$(this).attr("href",$(this).attr("href").replace("http","https"));
			})
			//disable element form
			$("form input").each(function(){
				$(this).prop("disabled",true);
			})	
			//delete change 1 and 2
			$(".topRight").click(function(){
				$("a").each(function(){
					var str=$(this).text();
					$(this).text(str.slice(1));
					$(this).removeAttr("target");
				})
				
			})
		})