async function dataShow() {
  let mytable = `
    <table border="1px"  width="840px" align="center">
    <tr bgcolor=" #4b49ac">
    <th>id</th>
    <th>Employee No</th>
    <th>Employee Name</th>
    <th>Salary</th>
    <th>city</th>
    </tr>
    `;
  let url = "http://localhost:3000/employees";
  let myobj = await fetch(url); // it gives response
  console.log(myobj);

  let mydata = await myobj.json(); // it is used to convert response to json
  console.log(mydata);

  mydata.map((key) => {
    mytable += `
        <tr>
        <td>${key.id}</td>
        <td>${key.employeeno}</td>
        <td>${key.name}</td>
        <td>${key.salary}</td>
        <td>${key.city}</td>
        </tr>
        `;
  });

  mytable += `</table>`;
  document.getElementById("demo").innerHTML = mytable;
}
dataShow();
