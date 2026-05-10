const foods = [
    {
        name: "Idli Sambhar",
        price: "Rs.80",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/12/poha-idli-recipe-280x280.jpg",
        cuisine: "South Indian"
    },
    {
        name: "Masala Dosa",
        price: "Rs.100",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/masala-dosa-recipe-1-280x280.jpg",
        cuisine: "South Indian"
    },
    {
        name: "Upma",
        price: "Rs.50",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/upma-recipe-1-280x280.jpg",
        cuisine: "South Indian"
    },
    {
        name: "Bharli Vangi",
        price: "Rs.120",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2022/12/bharli-vangi-recipe-280x280.jpg",
        cuisine: "Maharashtrian"
    },
    {
        name: "Jowar Roti",
        price: "Rs.40",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/04/jowar-roti-recipe-280x280.jpg",
        cuisine: "Maharashtrian"
    },
    {
        name: "Pav Bhaji",
        price: "Rs.80",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/pav-bhaji-1-280x280.jpg",
        cuisine: "Maharashtrian"
    },{
        name: "Rasam",
        price: "Rs.180",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/02/rasam-recipe-1-280x280.jpg",
        cuisine: "South Indian"
    },{
        name: "Mango Rice",
        price: "Rs.75",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/04/raw-mango-rice-recipe-280x280.jpg",
        cuisine: "South Indian"
    },{
        name: "Matar Paneer",
        price: "Rs.125",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/06/matar-paneer-dhaba-style-recipe-280x280.jpg",
        cuisine: "Punjabi"
    },{
        name: "Pot Dal Makhani",
        price: "Rs.75",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/instant-pot-dal-makhani-280x280.jpg",
        cuisine: "Punjabi"
    },{
        name: "Dahi Bhalla",
        price: "Rs.55",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/11/dahi-bhalla-recipe-280x280.jpg",
        cuisine: "Punjabi"
    },{
        name: "Aloo Kofta",
        price: "Rs.75",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/08/aloo-kofta-gravy-recipe-280x280.jpg",
        cuisine: "Punjabi"
    },{
        name: "Peas PulaoL",
        price: "Rs.95",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/01/peas-pulao-recipe-280x280.jpg",
        cuisine: "Punjabi"
    },{
        name: "Lassi",
        price: "Rs.45",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/lassi-recipe-1-280x280.jpg",
        cuisine: "Punjabi"
    },{
        name: "Sabudana Vada",
        price: "Rs.35",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/sabudana-vada-recipe-3-280x280.jpg",
        cuisine: "Maharashtrian"
    },{
        name: "Chakli",
        price: "Rs.60",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/10/chakli-3-280x280.jpg",
        cuisine: "Maharashtrian"
    },{
        name: "Rice Puri",
        price: "Rs.55",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/07/rice-pooris-recipe-280x280.jpg",
        cuisine: "Maharashtrian"
    }
    
];

// Function to generate food items based on the selected cuisine
function displayFoodItems(cuisine = 'All') {
    const foodList = document.getElementById('food-list');
    foodList.innerHTML = ''; // Clear previous items

    const filteredFoods = (cuisine === 'All') ? foods : foods.filter(food => food.cuisine === cuisine);

    filteredFoods.forEach(food => {
        // Create a food item box
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');

        // Add image
        const foodImage = document.createElement('img');
        foodImage.src = food.image;

        // Add info section
        const foodInfo = document.createElement('div');
        foodInfo.classList.add('info');

        // Add name
        const foodName = document.createElement('h2');
        foodName.textContent = food.name;

        // Add price
        const foodPrice = document.createElement('p');
        foodPrice.classList.add('price');
        foodPrice.textContent = food.price;

        // Append everything together
        foodInfo.appendChild(foodName);
        foodInfo.appendChild(foodPrice);
        foodItem.appendChild(foodImage);
        foodItem.appendChild(foodInfo);
        foodList.appendChild(foodItem);
    });
}

// Event listener for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const selectedCuisine = event.target.getAttribute('data-cuisine');
        displayFoodItems(selectedCuisine);
    });
});

// Call the function to display all food items on page load
displayFoodItems();
