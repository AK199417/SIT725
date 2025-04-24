$(document).ready(function () {
    $("#showFormBtn").click(() => {
      $("#formContainer").fadeIn(300);
      $("#showFormBtn").fadeOut(200);
    });
  
    $("#formSubmit").click((e) => {
      e.preventDefault();
  
      const formData = {
        first_name: $('#first_name').val(),
        last_name: $('#last_name').val(),
        email: $('#email').val()
      };
  
      if (!formData.first_name || !formData.last_name || !formData.email) {
        alert("Please fill all required fields");
        return;
      }
  
      console.log("Form submitted:", formData);
      alert("Thank you for your submission!");
  
      $("#applicationForm")[0].reset();
      $("#formContainer").fadeOut(300);
      $("#showFormBtn").fadeIn(200);
    });
  });
  