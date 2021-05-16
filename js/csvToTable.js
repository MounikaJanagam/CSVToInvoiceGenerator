var table = '<table id="myTable">';
function Upload() {
    var fileUpload = document.getElementById("fileUpload");
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
                //var table = document.createElement("table");
                var rows = e.target.result.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    if (i === 0) {
                        table += '<thead>';
                        table += '<tr>';
                    } else {
                        table += '<tr>';
                    }
                    var cells = rows[i].split(",");
                    if (cells.length > 1) {
                       // var row = table.insertRow(-1);
                        for (var j = 0; j < cells.length; j++) {
                            if(i === 0){
                                table += '<th>';
                                table += cells[j];
                                table += '</th>';
                            } else {
                                table += '<td>';
                                table += cells[j];
                                table += '</td>';
                            }
                        }
                        if (i === 0) {
                            table += '</tr>';
                            table += '</thead>';
                            table += '<tbody>';
                        } else {
                            table += '</tr>';
                        }
                    }
                }
                table += '</tbody>';
                table += '</table>';
                document.body.innerHTML += table;
               /* var dvCSV = document.getElementById("dvCSV");
                dvCSV.innerHTML = "";
                dvCSV.appendChild(table);*/
            }
            reader.readAsText(fileUpload.files[0]);
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid CSV file.");
    }
}   