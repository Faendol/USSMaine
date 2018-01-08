var json;
//$.getJSON("data.json", function (data) { json = data; initialize(); });

window.onload = function () {



    console.log("We Good");
    var tablebody = document.getElementById("tableblody");
    for (var i = 0; i < data.length; i++) {
        var parentthing = document.createElement("tr");
        tablebody.appendChild(parentthing);
        
        var child2 = document.createElement("td");
        child2.innerText = data[i];
        
        parentthing.appendChild(child2);
    }

}