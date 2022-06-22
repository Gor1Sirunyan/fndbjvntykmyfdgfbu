/*
var form = document.forms.namedItem("myForm");

form.addEventListener('submit', function(ev){
    var myFile = document.getElementById('myFile').files[0];
    var oData = new FormData(form);
    var oReq = new XMLHttpRequest();
    oReq.open("POST","/uploadFile",true);
    oReq.onload = function(oEvent){
        if(oReq.status == 200) {
            console.log("success",oEvent);
        } else {
            console.log("fail",oEvent);
        }
    }
    oReq.send(oData);
    ev.preventDefault();
},false);


*/
