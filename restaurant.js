// https://repl.it/@judytuna/DemoRestaurantRecommender
class Category { //puts restaurants by category
    constructor(name){
      this.name = name;
      this.restaurants = [];
    }
    addRestaurant(restaurantId){ //restaurantId old code
      this.restaurants.push(restaurantId);
    } //makes sure it deletes restaurant from the category
   // deleteRestaurant(restaurantId){ //test deleting restaurant
      //this.restaurants.pop(restaurantId);//put restaurantname instead - miercoles notes
    //}
  }
  
  class Restaurant {
    constructor(name, id) {
      this.name = name;
      this.categories = new Set(); //empty set stores categories, ex. Vietnamese for evergreen restaurant
      this.id = id; //id number would be 0 for evergreen restaurant
      this.averageRating = 5; //lyft system look up - everyone starts at 5 stars
      this.sumOfRatings = 5; //you have to subtract 1, 
      this.numOfRatings = 0; //0 because it has not been rated yet
    }
    addCategory(name){
      this.categories.add(name);//add is a built in set method
    }
    updateRating(rating){
      this.averageRating = (this.averageRating + rating) / this.numOfRatings;
    }
  }
  
  // // Constructor class for User objects 
  class User {
      constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.ratings = {};      
      }
      //get username(){ // Old code for George & Pablo
        //console.log(this.firstName);
        //onsole.log(this.lastName);
      //}
      addRating(restaurantId, ratings){
        this.ratings[restaurantId] = ratings; //setting ratings for restaurant "evergreen" and the rest.
      }
    }
  
  class RestaurantRecommender { //look at food = new RestaurantRecommender
      constructor() {
      // All main properties should go here.
      this.categories = { };
      this.restaurants = [];
      this.users = [];
      }
  }
  
  
  
  let food = new RestaurantRecommender();
  
  //Creation of User 1//////////////////////////////////////////////
  let ingrid = new User("Ingrid", "Cookiemonster", food.users.length);
  
  //this pushes ingrid to users - Output: 1
  food.users.push(ingrid); 
  
  //Shows Ingrid Cookiemonster, with id 0, no ratings yet
  console.log(food.users[0]);
  //ingrid.getId(); - does not work anymore
  
  //Creation of User 2/////////////////////////////////////////////
  let shalini = new User("Shalini", "Pyapali", food.users.length);
  
  //this pushes shalini to users - Output: 2
  food.users.push(shalini);
  
  //Shows Shalini Pyapali, with id 1, no ratings yet
  console.log(food.users[1]);
  
  //Creation of User 3 ////////////////////////////////////////
  let isabelle = new User("Isabelle", "Yiu", food.users.length);
  
  //this pushes isabelle to users - Output: 3
  food.users.push(isabelle);
  
  //Shows Isabelle Yiu, with id 1, no ratings yet
  console.log(food.users[2]);
  
  //Creation of User 4 ////////////////////////////////////////
  let hulk = new User("Hulk", "Incredible", food.users.length);
  
  //this pushes isabelle to users - Output: 3
  food.users.push(hulk);
  
  //Shows Isabelle Yiu, with id 1, no ratings yet
  console.log(food.users[3]);
  
  delete food.users[3];// goodbye hulk - he was deleted
  
  /////////////////////////////////////////////////////////////////////
  
  //Adds first Restaurant Evergreen
  let evergreen = new Restaurant("Evergreen", food.restaurants.length);
  
  //- this exists in add restaurant //Outputs as 1. this pushes evergreen to 
  food.restaurants.push(evergreen); 
  //console.log(food.restaurants); //Outputs Evergreen, id: 0, averageRatings: 5, sumOfRatings: 5, numOfRatings: 0
  
  // Creates Vietnamese food category
  let vietnamese = new Category("Vietnamese");
  evergreen.addCategory("Vietnamese");
  //console.log(vietnamese.restaurants);
  
  // to see the categories of evergreen, 
  console.log(evergreen.categories);// outputs Vietnamese
  
  //Creates Soup category
  let soup = new Category("Soup");
  evergreen.addCategory("Soup");
  //console.log(evergreen.categories); //Outputs Vietnamese, Soup
  
  vietnamese.addRestaurant(evergreen.id);//output name of the restaurant
  //console.log(vietnamese.restaurants);
  //////////////////////////////////////////////////////////////////
  
  //Adds second restaurant La Taza
  let lataza = new Restaurant("La Taza", food.restaurants.length);
  
  //- this exists in add restaurant //Outputs as 2. this pushes universalBakery to restaurant
  food.restaurants.push(lataza); 
  //console.log(food.restaurants); //Outputs Evergreen & lataza, id: 1, averageRatings: 5, sumOfRatings: 5, numOfRatings: 0
  
  // Creates Cafe food category
  let cafe = new Category("Cafe");
  //Add Cafe category to La taza
  lataza.addCategory("Cafe");
  
  //Creates Breakfast category in La Taza
  let breakfast = new Category("Breakfast");
  lataza.addCategory("Breakfast");
  //console.log(evergreen.categories); //Outputs Vietnamese, Soup
  
  cafe.addRestaurant(lataza.id);//output name of the restaurant
  //console.log(cafe.restaurants);
  
  console.log(food.restaurants);
  
  
  ////////////////////////////////////////////////////////////////////
  //Ratings
  
  ingrid.addRating(evergreen.id, 3 );
  
  evergreen.updateRating(3);//updates restaurant rating
  console.log(ingrid.ratings);
  console.log(food.restaurants);
  console.log(food.users);
  
  shalini.addRating(evergreen.id, 2);
  
  evergreen.updateRating(2);
  console.log(shalini.ratings);
  console.log(food.restaurants);
  console.log(food.users);
  //food.filter("Vietnamese"); //this returns evergreen
  
  
  
  isabelle.addRating(evergreen.id, 4);
  
  evergreen.updateRating(4);
  console.log(isabelle.ratings);
  console.log(food.restaurants);
  console.log(food.users);
  //evergreen.getrating(); //average rating of restaurant
  
  //console.log(food.users);
  /////////////////////////////////////////////////

/*
  //creation of User objects
  let george = new User("George", "Lopez");
  let alexandria = new User("Alexandria", "Ocasio");
  let pablo = new User("Pablo", "Neruda");
  
  //display testing my Users with short story
  console.log(`${george.firstName} & ${alexandria.firstName} are friends and want some bomb Pho, but ${pablo.firstName} wants ceviche for lunch.`);
      addRestaurant() {
      // Adds a new Restaurant to the System
      }
  
      addUser() {
      // Adds a new User to the System
      }
  
      addCategory() {
      // Adds a new Category to the System
      }
  
      addRating(){
      // Adds a user rating for a restaurant
      }
  
      addRestauranttoCategory(){
      // Adds Restaurant to Category
      // Adds Category to Restaurant
      }
  
  
     deleteUser() {
      // Deletes a User from the system
        //delete User.username;
      // Deletes User ratings for a restaurant.
      
      }
  /*
      deleteRestaurant() {
      // make sure to also delete a restaurant from the categories.
      }
  
      deleteCategory() {
      // make sure to delete categories from a restaurant that had them.
      }
  
      filter(){
      }
  }*/

module.exports = Restaurant;

  
  