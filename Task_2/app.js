function creatTable(){
	var row=document.form1.rows.value;
	var col=document.form1.col.value;
	var tbl=document.createElement("table");
	tbl.setAttribute("border", "1");
	tbl.setAttribute("id", "TableId");
	var td;
	var tr;
	for(var i=0;i<row;i++){
		tr=document.createElement("tr");
		for(var j=0;j<col;j++){
			td=document.createElement("td");
			tr.appendChild(td);
		}
		tbl.appendChild(tr);
	}
	document.body.appendChild(tbl);
	document.getElementById("form1").style.display="none";
	for(var i=0;i<row;i++){
		for(var j=0;j<col;j++){
			//create textarea
			var txt=document.createElement("input");
			txt.setAttribute("type","textarea");
			txt.setAttribute("id","txt"+String(i)+String(j));
			tbl.rows[i].cells[j].appendChild(txt);
			//create br
			var br=document.createElement("br");
			tbl.rows[i].cells[j].appendChild(br);
			//create button
			var btn=document.createElement("input");
			btn.setAttribute("type","button");
			btn.setAttribute("value","Save");
			btn.setAttribute("onclick","getTxt("+i+","+j+")");
			// alert(btn.onclick);
			tbl.rows[i].cells[j].appendChild(btn);	
		}
	}
	//Show block func
	for(var i=0;i<document.getElementsByTagName("div").length;i++){
		document.getElementsByTagName("div")[i].style.display="block";
	}
}
function getTxt(i,j){
	var tbl=document.getElementById("TableId");
	var txt_id="txt"+String(i)+String(j);
	var txt=document.getElementById(txt_id).value;
	tbl.rows[i].cells[j].innerHTML=txt;
}
function changeTable(){
	var width= document.getElementById("width").value;
	var tbl=document.getElementById("TableId");
	tbl.style.width=width+"px";
	var e=document.getElementsByTagName("select")[0];
	var type= e.options[e.selectedIndex].value;
	tbl.style.border=type;
}
function addTitle(){
	var title=document.getElementById("title_tbl").value;
	var tbl=document.getElementById("TableId").createCaption();
	tbl.innerHTML=title.toUpperCase();
}
function deleteRow(){
	var row=document.getElementById("row_tbl").value;
	var tbl=document.getElementById("TableId");
	if(row>tbl.getElementsByTagName("tr").length){
		alert("Invalid row");
	}
	else{
	tbl.deleteRow(row-1);
	}
}
function changeCell(){
	var tbl=document.getElementById("TableId");
	var n_row=tbl.getElementsByTagName("tr").length;
	var n_col=tbl.getElementsByTagName("tr")[0].getElementsByTagName("tr").length;
	//random cell
	var i=Math.floor(Math.random() * n_row);
	var j=Math.floor(Math.random() * n_col);
	// //random hex color
	var randomColor ="#"+ Math.floor(Math.random()*16777215).toString(16);
	var randomSize =Math.floor((Math.random() *10)+ 15);
	var cell=tbl.rows[i].cells[j];
	cell.style.backgroundColor=randomColor;
	cell.style.fontSize=randomSize+"px";
}
function deleteTable(){
	var tbl=document.getElementById("TableId");
	var n_row=tbl.getElementsByTagName("tr").length;
	for(var i=0;i<n_row;i++){
		tbl.deleteRow(0);
	}
	//Hide block function
	for(var i=0;i<document.getElementsByTagName("div").length;i++){
		document.getElementsByTagName("div")[i].style.display="none";
	}
	//Show form create table
	document.getElementById("form1").style.display="block";
}