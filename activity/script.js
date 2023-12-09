// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevents the default form submission behavior
  
    // Extract form data using FormData
    const formData = new FormData(event.target);
  
    // Loop through the form data and log each field's name and value
    for (const [name, value] of formData) {
      console.log(name, value);
    }
  
    // Reset the form after submission
    document.getElementById("myForm").reset();
  }
  
  // Attach a submit event listener to the form
  document.getElementById("myForm").addEventListener("submit", submitForm);

  function testResults(){
      let main = document.getElementById('main');
      let teacher = document.getElementById('teacher');

      main.classList.toggle('active');
      teacher.classList.toggle('disactive');

      const fullname = document.getElementById("fullname").value;
      const studentID = document.getElementById("studentID").value;
      const email = document.getElementById("email").value;
      const startDate = document.getElementById("startDate").value;
      const endDate = document.getElementById("endDate").value;
      const workTitle = document.getElementById("workTitle").value;
      const activityType = document.getElementById("activityType").value;

      if(activityType == 'Activity'){

        document.getElementById("img_1").innerHTML = "<img src='../img/chertam_test.jpg'>";
        document.getElementById("img_2").innerHTML = "<img src='../img/chertam_test.jpg'>";

      }

      document.getElementById("FnameLname").innerHTML = "<p>" + fullname + "</p>";
      document.getElementById("studen_id").innerHTML = "<p>" + studentID + "</p>";
      document.getElementById("S-email").innerHTML = "<p>" + email + "</p>";
      document.getElementById("date").innerHTML = "<p>" + startDate + "</p>";
      document.getElementById("dateEnd").innerHTML = "<p>" + endDate + "</p>";
      document.getElementById("workActTitle").innerHTML = "<p>" + workTitle + "</p>";
      document.getElementById("typeWork").innerHTML = "<p>" + activityType + "</p>";
      document.getElementById("sub_text_1").innerHTML = "<p>" + activityType + "</p>";
      document.getElementById("sub_text_2").innerHTML = "<p>" + activityType + "</p>";
      

  }
  