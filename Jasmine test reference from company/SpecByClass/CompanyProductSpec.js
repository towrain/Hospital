describe("Company with Products", function() {
  var company;

  beforeEach(function() {
    company = new Company();
  });

  it("should have an allMyProducts property", function() {
    expect(company.hasOwnProperty('allMyProducts')).toBeTruthy();
  });

  describe("the allMyProducts property", function () {
	it("should reference an array", function() {
	  expect(Array.isArray(company.allMyProducts)).toBeTruthy();
	});
  });
  
   it("should have a getProductsToOrder function", function() {
    expect(typeof company.getProductsToOrder).toBe('function');
  });
  
  it("should have an addProduct function", function() {
    expect(typeof company.addProduct).toBe('function');
  });
    
  describe("adding FOUR Products", function() {/*
	ID		Name	Price	QuantityOnHand	MinimumQuantity
	NU		Nut		11.95	100				200
	SC		Screw	15.75	150				100
	WA		Washer	12.50	80				50
	BO		Bolt	20.00	50				100
     */
	
    /*var company;
    beforeEach(function() {
      company = new Company();
	  company.addProduct( 'NU' , 'Nut' , 11.95 , 200 , 100 );
	  company.addProduct( 'SC' , 'Screw' , 15.75 , 100 , 150 );
	  company.addProduct( 'WA' , 'Washer' , 12.50 , 50 , 80 );
      company.addProduct( 'BO' , 'Bolt' , 20.00 , 100 , 50 );	
    });
	*/
    it("should have 4 Products", function() {
      expect(company.allMyProducts.length).toBe(4);
    });
	
	it("should report details of products to order", function() {
      expect(company.getProductsToOrder()).toBe('NU - Nut\nBO - Bolt\n');
    });
	  
	it("means that all products should have price set correctly", function() {
	  var product;
	  product = company.allMyProducts[0];
	  expect(product.price).toBe(11.95);
	  product = company.allMyProducts[1];
	  expect(product.price).toBe(15.75);
	  product = company.allMyProducts[2];
	  expect(product.price).toBe(12.50);
	  product = company.allMyProducts[3];
	  expect(product.price).toBe(20.00);
    });  

  }); 

});
