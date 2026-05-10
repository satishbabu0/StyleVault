document.addEventListener("DOMContentLoaded", () => {
  let food1s = document.getElementById("food1");
  let food2s = document.getElementById("food2");
  let food3s = document.getElementById("food3");

  let foods = document.querySelector(".right"); 

  
  foods.style.backgroundImage = "url('biryani.png.png')";
  foods.style.backgroundSize = "cover"; 
  foods.style.backgroundPosition = "center"; 

  food1s.addEventListener("click", () => {
      foods.style.backgroundImage = "url('biryani.png.png')";
      foods.style.backgroundSize = "cover"; 
      foods.style.backgroundPosition = "center"; 
  });

  food2s.addEventListener("click", () => {
      foods.style.backgroundImage = "url('cury_with_bread.png')";
      foods.style.backgroundSize = "contain"; 
      foods.style.backgroundPosition = "center"; 
  });

  food3s.addEventListener("click", () => {
      foods.style.backgroundImage = "url('idli.png')";
      foods.style.backgroundSize = "contain"; 
      foods.style.backgroundPosition = "center"; 
  });

  document.getElementById("feedbackForm").addEventListener("submit", function (e) {
      e.preventDefault(); 
      alert("Thank you for your feedback!"); 
      window.location.reload(); 
  });
});