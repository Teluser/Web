$(document).ready(function() {
    $('#btn1').on('click', function(e){
      e.preventDefault();
      var url = 'https://bobleman.github.io/ajax-1.html';
      $.ajax({
        url: url,
        type: 'GET',
        success: function(response) {
            console.log(response);
          $("#response").append(response);
        }
      })
    })
    $('#btn2').on('click',function(e){
      e.preventDefault();
      var url='https://bobleman.github.io/ajax-2.html';
      $.getJSON(url,function(data){
        console.log(data);
        var a=data["glossary"]["title"]
        // console.log(a);
        // $('#response').append(a +"<br>");
        var json=JSON.stringify(data);
        
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
         $('#response').html(JSON.stringify(text));
      })
      })
    $('#btn3').on('click',function(e){
      $('#response').load('https://bobleman.github.io/ajax-1.html');
    })
  })