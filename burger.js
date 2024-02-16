// Fetch the JSON file
fetch('/burger.json')
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // Handle the data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error fetching the JSON file:', error);
  });



// https://dummyjson.com/products
//https://forkify-api.herokuapp.com/api/search?q=pizza





























