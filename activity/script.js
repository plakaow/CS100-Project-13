// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevents the default form submission behavior
  
    // Extract form data using FormData
    const formData = new FormData(event.target);
  
    // Loop through the form data and log each field's name and value
    for (const [name, value] of formData) {
      console.log(name, value);
    }
    testResults();
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
      const AcademicYear = document.getElementById("AcademicYear").value;
      const Semester = document.getElementById("Semester").value;

      switch(activityType){
        case 'Course':
          document.getElementById("img_3").innerHTML = "<img src='../img/course_1.jpg'>";
          document.getElementById("img_4").innerHTML = "<img src='../img/course_2.jpg'>";
          document.getElementById("img_5").innerHTML = "<img src='../img/course_3.jpg'>";
          break;
        case 'Activity':
          document.getElementById("img_3").innerHTML = "<img src='../img/activity_1.png'>";
          document.getElementById("img_4").innerHTML = "<img src='../img/activity_2.png'>";
          document.getElementById("img_5").innerHTML = "<img src='../img/activity_3.png'>";
          break;
        case 'Work':
          document.getElementById("img_3").innerHTML = "<img src='../img/work_1.png'>";
          document.getElementById("img_4").innerHTML = "<img src='../img/work_2.jpg'>";
          document.getElementById("img_5").innerHTML = "<img src='../img/work_3.jpg'>";
          break;
        case 'Research':
          document.getElementById("img_3").innerHTML = "<img src='../img/research_1.jpg'>";
          document.getElementById("img_4").innerHTML = "<img src='../img/research_2.jpg'>";
          document.getElementById("img_5").innerHTML = "<img src='../img/research_3.jpg'>";
          break;
        case 'Sports':
          document.getElementById("img_3").innerHTML = "<img src='../img/sport_1.jpg'>";
          document.getElementById("img_4").innerHTML = "<img src='../img/sport_2.jpg'>";
          document.getElementById("img_5").innerHTML = "<img src='../img/sport_3.jpg'>";
          break;
        case 'Competition':
          document.getElementById("img_3").innerHTML = "<img src='../img/Competition_1.jpg'>";
          document.getElementById("img_4").innerHTML = "<img src='../img/Competition_2.jpg'>";
          document.getElementById("img_5").innerHTML = "<img src='../img/Competition_3.jpg'>";
          break;
        case 'Computer Science':
          document.getElementById("img_3").innerHTML = "<img src='../img/comsci_1.jpg'>";
          document.getElementById("img_4").innerHTML = "<img src='../img/comsci_2.jpg'>";
          document.getElementById("img_5").innerHTML = "<img src='../img/comsci_3.jpg'>";
          break;
      }

      document.getElementById("FnameLname").innerHTML = "<p>" + fullname + "</p>";
      document.getElementById("studen_id").innerHTML = "<p>" + studentID + "</p>";
      document.getElementById("S-email").innerHTML = "<p>" + email + "</p>";
      document.getElementById("date").innerHTML = "<p>" + startDate + "</p>";
      document.getElementById("dateEnd").innerHTML = "<p>" + endDate + "</p>";
      document.getElementById("workActTitle").innerHTML = "<p>" + workTitle + "</p>";
      document.getElementById("academicYear").innerHTML = AcademicYear;
      document.getElementById("semester").innerHTML = Semester;
      document.getElementById("typeWork").innerHTML = "<p>" + activityType + "</p>";
      document.getElementById("sub_text_1").innerHTML = "<p>" + activityType + "</p>";
      document.getElementById("sub_text_2").innerHTML = "<p>" + activityType + "</p>";
      

  }
  