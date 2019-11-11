function show_name_even_form(){
	x=document.getElementsByTagName("form");
	document.write("Names of even forms: <br>")
	for (var i =1;i<x.length;i=i+2) {
		document.write(x[i].name +"<br>");
	}	
}
function name_current_form(k) {
	var x = document.getElementById("btn" + k).parentNode.name;
    document.getElementById("btn" + k).innerHTML = x;
}
function id_current_form(k) {
	var x = document.getElementById("btn" + k).parentNode.id;
    document.getElementById("btn_id" + k).innerHTML = x;
}
function numberElement(k){
	var x = document.getElementById("id_form" + k).elements.length;
	document.write("numberElements of form :"+x);
}
function dynamic_table() {
    x = document.getElementById("link").getElementsByTagName("a");

    var dict = new Object();
    for (i = 0; i < x.length; i++) {
        if (x[i].innerHTML in dict) {
            dict[x[i].innerHTML] += 1;
        } else {
            dict[x[i].innerHTML] = 1;
        }
    }
    var table = document.createElement("table");
    table.setAttribute("border", "1");
    var tRow = document.createElement("tr");

    var tData = document.createElement("td");
    tData.textContent = "Text";
    tRow.appendChild(tData);
    var tData = document.createElement("td");
    tData.textContent = "Times";
    tRow.appendChild(tData);
    var tData = document.createElement("td");
    tData.textContent = "link";
    tRow.appendChild(tData);
    table.appendChild(tRow);
    for (index in dict) {
        var tRow = document.createElement("tr");

        var tData = document.createElement("td");
        tData.textContent = index;
        tRow.appendChild(tData);
        var tData = document.createElement("td");
        tData.textContent = dict[index];
        tRow.appendChild(tData);
        var tData = document.createElement("td");
        for (i = 0; i < x.length; i++) {
            if (x[i].innerHTML == index) {
                content = x[i].href;
                break;
            }
        }
        tData.textContent = content;
        tRow.appendChild(tData);
        table.appendChild(tRow);
    }
    document.body.appendChild(table);
}
function creatTable(row,col){
	var tbl=document.createElement("table");
	tbl.setAttribute("border", "1");
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
	// tbl.style.display="none";
	// document.getElementsByTagName("table").style.display="none";
}