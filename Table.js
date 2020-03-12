var employeePromise = d3.json("employee.json");

employeePromise.then(
function(employee){
    console.log("Worked",employee);
    displayTable(employee)},

function(err){console.log("failed",err)}
)



var displayTable = function (employee)
{
  //make container
    var rows= d3.select("#employees")
    .selectAll("tr")
    .data(employee)
    .enter()
    .append("tr")
    
    //make children
    
    rows.append("td")
        .append("img")
        .attr("src", function(employee){return employee.photo})
    rows.append("td")
    .text(function(employee){return employee.firstName})
     rows.append("td")
    .text(function(employee){return employee.lastName})
    rows.append("td")
    .text(function(employee){return employee.title})
    rows.append("td")
    .text(function(employee){return employee.unit})
    rows.append("td")
    .text(function(employee){return employee.email})
    rows.append("td")
    .text(function(employee){return employee.bio})
    rows.append("td")
    .text(function(employee){return employee.phone})
}