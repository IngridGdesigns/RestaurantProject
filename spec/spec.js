//Testing restaurant.js file
describe("Restaurant", function() {
    var Restaurant = require("../restaurant.js");
    //   var Restaurant = require("../static/js/js.js");
    var testRestaurant;
  
    beforeEach(function() {
      testRestaurant = new Restaurant();
    });
  
    describe("addCategory", function() {
      it("adds a restaurant", function() {
        expect(testRestaurant.categories.size).toEqual(0);
        testRestaurant.addCategory("a", "b", "", "");
        expect(testRestaurant.categories.size).toEqual(1);
      });
      it("sets the name of the restaurant", function() {
        testRestaurant.addCategory("Vietnamese");
        expect(testRestaurant.addCategory[0]).toEqual(
          "Vietnamese"
        );
      });
    }); 
    
    //describe("updateRating", function() {
     // it("updates the rating", function(){
       // expect(testRestaurant.updateRating).toEqual();
        //testRestaurant.updateRating();
  });
    //});

  //}); 

  /*
  //Testing restaurant.js file

//Test if Hulk was deleted??

describe("Restaurant", function() {
    var Restaurant = require("../restaurant.js");
    //   var Restaurant = require("../static/js/js.js");
    var testRestaurant;
  
    beforeEach(function() {
      testRestaurant = new Restaurant();
    });
  
    describe("addCategory", function() {
      it("adds a restaurant", function() {
        expect(testRestaurant.categories.size).toEqual(2);
        testRestaurant.addCategory("a", "b", "", "");
        expect(testRestaurant.addCategory.size).toEqual(2);
      });
      it("sets the name of the restaurant", function() {
        testRestaurant.addCategory("a", "b", "", "");
        expect(testRestaurant.addCategory[0]).toEqual(
          "Vietnamese"
        );
      });
    }); 
    */