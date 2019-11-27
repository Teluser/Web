document.write("Hello");
document.write("<h1>Привет Мир!</h1>");
document.write("количество анкоров в документе: "+document.anchors.length+"<br>");
// document.write("ID first link: "+document.anchors[0].innerHTML+"<br>");
document.write("Number of forms:"+document.getElementsByTagName("form").length+"<br>");
document.write("Name first form:"+document.getElementsByTagName("form")[0].name+"<br>");
document.write("Number of images:"+document.getElementsByTagName("img").length+"<br>");
document.write("ID first image:"+document.getElementsByTagName("img")[0].id+"<br>");
document.write("количество ссылок в документе: "+document.getElementsByTagName("a").length+"<br>");
document.write("ID first link: "+document.getElementsByTagName("a")[0].id+"<br>");
document.write("full URL: "+document.URL+"<br>");
document.write("Title: "+document.title+"<br>");
document.write("URL документа, который загрузил текущий документ: "+document.location.href+"<br>");
// Object button
function disableBtn1(){
	document.getElementById("btn1").disabled = true;
}
document.write("Name button: "+document.getElementById("btn1").name+"<br>");
document.write("Type button: "+document.getElementById("btn1").type+"<br>");
document.write("Text button: "+document.getElementById("btn1").innerHTML+"<br>");
document.write(" id формы, которой принадлежит кнопка: "+document.getElementById("btn1").parentNode.id+"<br>");
// Object form
function txtElementForm_1(){
	var elementArr=document.getElementById("id_form1").children;
	document.write("Number children of form: "+elementArr.length+"<br>");
	document.write("Content of elements in the first form:<br>");
	for (i = 0 ;i < elementArr.length;i++){
		document.write((i+1)+"."+elementArr[i].innerHTML+"<br>");
	}
}
function actionValueForms(){
	var arrForms=document.getElementsByTagName("form");

	document.write("action of forms:<br>");
	for (i = 0 ;i < arrForms.length;i++){
		document.write((i+1)+"."+arrForms[i].action+"<br>");
	}
	document.write("method of forms:<br>");
	for (i = 0 ;i < arrForms.length;i++){
		document.write((i+1)+"."+arrForms[i].method+"<br>");
	}
	document.write("name of forms:<br>");
	for (i = 0 ;i < arrForms.length;i++){
		document.write("form "+(i+1)+": "+arrForms[i].name+"<br>");
	}
	document.write("form1 enctype: "+arrForms[0].enctype+"<br>");
}
function removeForm_1(){
	var f =document.getElementById("id_form1").remove();
	f.parentNode.remove(f);
}

// obj img
function altImg(){
	var img=document.getElementById("id_pic1");
	document.write("Показать альтернативный текст для изображения: "+img.alt+"<br>");
	img.style.border="2px solid green";
	img.style.width="100px";
	img.style.height="100px";
	document.write("название изображения: "+img.name+"<br>");
	img.src="#changed";
}
// Object event
document.getElementById("btn1").onmousedown=function(e){
	if(e.which==1){ alert("right mouse");}
	if(e.which==2){ alert("middle mouse");}
	if(e.which==3){ alert("left mouse");}
}
document.addEventListener('keydown', function(event) {
	var e=event.keyCode;
	alert(e);
})
document.addEventListener('click', function(event) {
	var x=event.pageX;
	var y=event.pageY;
	var x1=event.clientX;
	var y1=event.clientY;
	alert('Координаты курсора относительно всего документа: (' + x + '; ' + y + ')');
	alert('координаты курсора относительно экрана: (' + x1 + '; ' + y1 + ')');
})
//obj table
function withTable(){
	var tbl=document.getElementsByTagName("table")[0];
	tbl.style.border="2px solid black";
	tbl.cellPadding=10;
	tbl.cellSpacing=10;
	document.write("рамку таблицы: "+tbl.style.border.bold()+"<br>");
	var cap=document.createElement("caption");
	cap.innerHTML="MY TABLE";
	tbl.appendChild(cap);
}
