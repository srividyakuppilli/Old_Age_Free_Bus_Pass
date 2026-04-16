function generatePass() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let location = document.getElementById("location").value;
  let aadhaar = document.getElementById("aadhaar").value;

  if (!name || !age || !location || !aadhaar) {
    alert("Please fill all fields");
    return;
  }

  // Age check
  if (age < 60) {
    alert("Free bus pass is only for senior citizens (60+)");
    return;
  }

  // Confirmation prompt
  let confirmPass = confirm("Do you want to generate bus pass?");
  if (!confirmPass) return;

  let passId = "PASS" + Math.floor(Math.random() * 100000);

  document.getElementById("pass").style.display = "block";
  document.getElementById("pass").innerHTML = `
        <h2>🚌 Bus Pass</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Age:</b> ${age}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Pass ID:</b> ${passId}</p>
        <p><b>Status:</b> Approved ✅</p>
        <p><b>Seat Priority:</b> Yes</p>
        <p><b>Allowance:</b> Free Travel</p>
    `;

  // Save data
  let data = { name, age, location, passId };
  localStorage.setItem("busPass", JSON.stringify(data));
}

function clearForm() {
  document.querySelectorAll("input").forEach((i) => (i.value = ""));
  document.getElementById("pass").style.display = "none";
}
