document.getElementById("btn1").addEventListener("click", insert);

async function insert() {
  try {
    let myemployeeno = document.getElementById("eno").value;
    let myname = document.getElementById("nm").value;
    let mycity = document.getElementById("city").value;
    let mysalary = document.getElementById("salary").value;

    let url = "http://localhost:3000/employees";

    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        employeeno: myemployeeno,
        name: myname,
        city: mycity,
        salary: mysalary,
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    });
    console.log(response);
    let data = await response.json();
    console.log(data);
    alert("Data succesfully added");
  } catch (error) {
    console.log("Error:", error);
    alert("error while adding data");
  }
}
