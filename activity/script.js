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
          document.getElementById("text_1").innerHTML = "Course Evaluation ที่จะบอกว่าเก็บคะแนนนจากส่วนไหนบ้าง และทำโปรเจ็คเหล่านั้นในสัปดาห์ที่เท่าหไหร่";
          document.getElementById("text_2").innerHTML = "Bridge to CS@TU B.Sc. ที่จะบอกว่าจบจากคอร์สเหล่านี้ไปแล้วจะสามารถนำไปต่อเป็นคอร์สไหนได้บ้างจากแต่ละภาค";
          break;
        case 'Activity':
          document.getElementById("img_3").innerHTML = "<img src='../img/activity_1.png'>";
          document.getElementById("img_4").innerHTML = "<img src='../img/activity_2.png'>";
          document.getElementById("img_5").innerHTML = "<img src='../img/activity_3.png'>";
          document.getElementById("text_1").innerHTML = "กิจกรรมรับเพื่อนใหม่ธรรมศาสตร์ที่ได้มีการชวนคุณ พิธาลิ้มเจริญรัตณ์ มาเป็นแขกรับเชิญสุดพิเศษในงานนี้อีกด้วย";
          document.getElementById("text_2").innerHTML = "และในกิจกรรมรับเพื่อนใหม่นี้ยังมีการแสดงโชว์สุดพิเศษมากมายจากชมรมต่างๆภายในมหาวิทยาลัย";
          break;
        case 'Work':
          document.getElementById("img_3").innerHTML = "<img src='../img/work_1.png'>";
          document.getElementById("img_4").innerHTML = "<img src='../img/work_2.jpg'>";
          document.getElementById("img_5").innerHTML = "<img src='../img/work_3.jpg'>";
          document.getElementById("text_1").innerHTML = "งานสรุปความเข้าใจเกี่ยวกับ static web ที่ได้เรียนไปในครึ่งเทอมแรกและทำออกมาเป็น presentation";
          document.getElementById("text_2").innerHTML = "เป็นงานที่ทำให้ได้ทบทวนความรู้ของตัวเองในเรื่องการทำ static web ก่อนที่จะขึ้นเรื่อง dynamic web ที่เป็นเรื่องที่ใช้ความชำนาญมากกว่า";
          break;
        case 'Research':
          document.getElementById("img_3").innerHTML = "<img src='../img/research_1.jpg'>";
          document.getElementById("img_4").innerHTML = "<img src='../img/research_2.jpg'>";
          document.getElementById("img_5").innerHTML = "<img src='../img/research_3.jpg'>";
          document.getElementById("text_1").innerHTML = "Patiphan Phengpao เป็นแชเเนลบนยูทูปที่ดีมากๆสำหรับการหาความรู้นอกห้องเรียนเกี่ยวกับการทำเว็บไซต์ เพราะภายในแชเเนลนี้จะมีการสอนเทคนิคการทำเว็บที่เข้าใจง่ายเเละใช้งานได้จริง";
          document.getElementById("text_2").innerHTML = "BorntoDev เป็นแชแนลที่ตอบโจทย์สำหรับโปรแกรมเมอร์มือใหม่เพราะมีเนื้อหาที่คลอบคลุมและทำวิดิโอออกมาสนุกและเข้าใจง่าย";
          break;
        case 'Sports':
          document.getElementById("img_3").innerHTML = "<img src='../img/sport_1.jpg'>";
          document.getElementById("img_4").innerHTML = "<img src='../img/sport_2.jpg'>";
          document.getElementById("img_5").innerHTML = "<img src='../img/sport_3.jpg'>";
          document.getElementById("text_1").innerHTML = "TU Fleshy Game เป็นกิจกรรมที่ให้นักศึกษาปี1 เข้าร่วมเพื่อความสนุกและได้รู้จักกับเพื่อนใหม่ในรั้วมหาลัยธรรมศาสตร์";
          document.getElementById("text_2").innerHTML = "TU DOME FirstMeet เป็นกิจกรรมที่ TU DOME จัดขึ้นเพื่อให้น้องใหม่ที่จะเข้ามาในชมรมได้ทำความรู้จักหน้าคล่าตากับเพื่อนๆพี่ๆในชมรม";
          break;
        case 'Competition':
          document.getElementById("img_3").innerHTML = "<img src='../img/Competition_1.jpg'>";
          document.getElementById("img_4").innerHTML = "<img src='../img/Competition_2.jpg'>";
          document.getElementById("img_5").innerHTML = "<img src='../img/Competition_3.jpg'>";
          document.getElementById("text_1").innerHTML = "Hosting Dynamic web ขึ้น AWS ซึ่งได้เรียนมาจากในCS100 เเล้วนำมาทำเป็นโปรเจคต่อ";
          document.getElementById("text_2").innerHTML = "ซึ่งทำให้ได้ความรู้ความเข้าใจเกี่ยวกับ AWS เเละการทำงานกันเป็นทีมผ่าน git มากขึ้น";
          break;
        case 'Computer Science':
          document.getElementById("img_3").innerHTML = "<img src='../img/comsci_1.jpg'>";
          document.getElementById("img_4").innerHTML = "<img src='../img/comsci_2.jpg'>";
          document.getElementById("img_5").innerHTML = "<img src='../img/comsci_3.jpg'>";
          document.getElementById("text_1").innerHTML = "กิจกรรมรับน้องที่พี่ๆในสาขาวิทยาการคอมพิวเตอร์จัดให้ เพื่อให้เข้าในคอนเซ็บคร่าวของการคิดเเบบเป็นระบบในการเขียนโปรเเกรมผ่านการเล่นเกม";
          document.getElementById("text_2").innerHTML = "เเละกิจกรรมสันธนาการที่ทำให้ได้รู้จักเพื่อนๆพี่ๆในสาขามากขึ้นและยังเป็นกิจกรรมที่สนุกมากๆอีกด้วย";
          break;
      }

      document.getElementById("FnameLname").innerHTML = "<p>Hi," + fullname + "</p>";
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
  