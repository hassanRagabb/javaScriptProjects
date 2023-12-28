let rows=prompt("Enter Number of rows");
let cols=prompt("Enter Number of columns");

if(rows==""||rows==null)rows=5;
if(cols==""||cols==null)cols=5;


createtable(rows,cols);
function createtable(rows,cols)
{
    let output="<table border=1 width='500'cellpadding='5'>";

    for(let row=1;row<=rows;row++)
    {
        output +="<tr>";
        for(let col=1;col<=cols;col++)
        {
            output += "<td>"+row*col+"</td>";   
        }
        output+="</tr>";
        col=1;
    }
    output+="</table>";
    document.write(output);




}
