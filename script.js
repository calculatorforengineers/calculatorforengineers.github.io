// Code by Saleh Ibne Omar


function calC(c) {

    // form theke panel e jao then value bosao function calC ja value pabe ta 
    // sei value + koro jno protita value add hoi
    form.panel.value = form.panel.value + c;


}


function CE() {

    // clear korar jonne function
    // form theke panel e jao giye value bosao faka
    form.panel.value = "";
}
function myFunction() {
    var x = document.getElementById("frm1");
    var fname = "";
    var mail = "";
    mail = x.elements[0].value;
    fname = x.elements[1].value;
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = mail;
  cell2.innerHTML =fname;
  
}
function matmul() {
    var x = document.getElementById("frm2");
    var matA = "";
    var matB = "";
    var rowsA = 3;
    var columnsA = 3;
    var rowsB = 3;
    var columnsB = 3;
    matA = x.elements[0].value;
    matB = x.elements[1].value;
    dimA = x.elements[2].value;
    dimB = x.elements[3].value;
    var a1 = dimA.split(" ");
    var b1 = dimB.split(" ");
    rowsA = parseInt(a1[1]);
    columnsA = parseInt(a1[0]);
    rowsB = parseInt(b1[1]);
    columnsB = parseInt(b1[0]);
    var a = matA.split(" ");
    var b = matB.split(" ");
    var arr = [];
    var arr1 = [];
    for (var i = 0; i < columnsA; i++) {
        arr.push([0]);
        for (var j = 0; j < rowsA; j++) {
            arr[i][j] = parseFloat(a[i*columnsA + j]);
        }
    }    
    for (var i = 0; i < columnsB; i++) {
        arr1.push([0]);
        for (var j = 0; j < rowsB; j++) {
            arr1[i][j] = parseFloat(b[i*columnsB + j]);
        }
    }
    var res = [];
     for (var i = 0; i < columnsA; i++) 
    { 
        res.push([0]);
        for (var j = 0; j < rowsB; j++) 
        { 
            res[i][j] = 0; 
            for (var k = 0; k < rowsA ; k++) 
                res[i][j] += arr[i][k]*arr1[k][j]; 
        } 
    } 
    document.getElementById("demo").innerHTML = res + " of dimension " + rowsA + " " + columnsB;
}






















