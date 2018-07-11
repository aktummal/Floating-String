var float;
document.getElementById("moveRight").addEventListener('click', function () {
    clearInterval(float);
    float = setInterval(function () {
      document.getElementById("item2").value += document.getElementById("item1").value.charAt(0);
        document.getElementById("item1").value = document.getElementById("item1").value.substr(1);
        if(document.getElementById("item1").value.length == 0){
                      clearInterval(float);
        }

    }, 1000)
});

document.getElementById("moveLeft").addEventListener('click', function () {
    clearInterval(float);
    float = setInterval(function () {
        document.getElementById("item1").value = document.getElementById("item2").value.charAt(document.getElementById("item2").value.length-1) + document.getElementById("item1").value;


        document.getElementById("item2").value = document.getElementById("item2").value.substr(0,document.getElementById("item2").value.length-1);
        if(document.getElementById("item2").value.length == 0){
            clearInterval(float);
       }    }, 1000)
});

document.getElementById("pause").addEventListener('click', function () {
    clearInterval(float);
     
});

