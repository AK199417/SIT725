$(document).ready(function() {
  //Show form button 
  $("#showFormBtn").click(() => {
    $("#formContainer").fadeIn(300);
    $(this).fadeOut(200); 
  });
  
  //Form submission - proper handling
  $("#formSubmit").click((e) => {
    e.preventDefault(); //Crucial for form handling
    
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
    
    //Reset and hide form
    $("#applicationForm")[0].reset();
    $("#formContainer").fadeOut(300);
    $("#showFormBtn").fadeIn(200);
  });
  
  //Card data
  const cardList = [
      {
          title: "Samsung Galaxy S24",
          image: "images/samsung.jpg",
          link: "About Samsung Galaxy S24",
          description: "Discover the power of the Samsung Galaxy S24 with amazing features."
      },
      {
          title: "Apple iPhone 15",
          image: "images/iphone.jpg",
          link: "About iPhone 15",
          description: "Explore the latest iPhone 15, the ultimate smartphone experience."
      },
      {
          title: "OnePlus 12",
          image: "images/one.jpeg",
          link: "About OnePlus 12",
          description: "Unveil the power of OnePlus 12 with cutting-edge features."
      }
  ];

  //Function to add cards to the card section
  const addCards = (items) => {
      items.forEach(item => {
          let itemToAppend = 
          `<div class="col s4 center-align">
              <div class="card medium">
                  <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="${item.image}">
                  </div>
                  <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
                      <p><a href="#">${item.link}</a></p>
                  </div>
                  <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                      <p class="card-text">${item.description}</p>
                  </div>
              </div>
          </div>`;

          //Append card to the 
          $("#card-section").append(itemToAppend);
      });
  }

  //Call addcards to display the cards
  addCards(cardList);
});
