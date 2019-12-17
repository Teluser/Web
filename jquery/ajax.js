$(document).ready(function() {
    $('#btn1').on('click', function(e){
      e.preventDefault();
      var url = 'https://inxaoc.github.io/example/ajax-1.html';
      $.ajax({
        url: url,
        type: 'GET',
        success: function(response) {
          $("#response").append(response);
        }
      })
    })
    $('#btn2').on('click',function(e){
      e.preventDefault();
      var url='https://inxaoc.github.io/example/ajax.json';
      $.getJSON(url,function(data){
        console.log(data);
        var a=data["glossary"]["title"]
        // console.log(a);
        // $('#response').append(a +"<br>");
        var json=JSON.stringify(data);
        
        
        $('#response').html(jsonToList(json));
         // $('#response').html(JSON.stringify(text));
      })
      })
    $('#btn3').on('click',function(e){
      location.reload(true);
    })
  })
function jsonToList(json){
  var text="";
        for (var i = 0; i < json.length; i++) {
          if (json[i] == '{' || json[i] == '[') {
            text += "<ul><li>";
          } else if (json[i] == '}' || json[i] == ']') {
            text += "</ul></ul>";
          } else if (json[i] == ',') {
            text += "</li><li>";
          } else if (json[i] == '"') {
            if (json[i-1] == '{') {
              text += "<li>";
            } else if (json[i+1] == '}') {
              text += "</li>";
            }
          } else text +=json[i];

        }
  return text;
}