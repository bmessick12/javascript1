var up = document.getElementById('GFG_UP'); 
        var down = document.getElementById('GFG_DOWN'); 
          
        function Fun() {
            var img = document.createElement('img');
            img.src = 'basic.gif';
             document.getElementById('body').appendChild(img) .width = "500";
        } 

        var today = new Date();

        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        document.getElementById("p1").innerHTML = time;