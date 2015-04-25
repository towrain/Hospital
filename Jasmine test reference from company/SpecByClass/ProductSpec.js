describe("Product", function() {

   var product = new Product();

   it("should have an id property", function() {
    expect(product.hasOwnProperty('id')).toBeTruthy();
  });
  
  it("should have a name property", function() {
    expect(product.hasOwnProperty('name')).toBeTruthy();
  });
 
  it("should have a minimumQuantity property", function() {
    expect(product.hasOwnProperty('minimumQuantity')).toBeTruthy();
  });
  
  it("should have a quantityOnHand property", function() {
    expect(product.hasOwnProperty('quantityOnHand')).toBeTruthy();
  });
  
  it("should have a toString function", function() {
    expect(typeof product.toString).toBe('function');
  });
  
  describe("toString function", function () {
	  it("should return a string", function() {
		expect(typeof product.toString()).toBe('string');
	  });
	  it("should take 0 parameters", function() {
		expect(product.toString.length).toBe(0);
	  });
  });

  it("should have a moreNeeded function", function() {
    expect(typeof product.moreNeeded).toBe('function');
  });
});