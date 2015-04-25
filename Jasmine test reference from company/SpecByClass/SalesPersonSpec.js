describe("SalesPerson  PROVIDED - DO NOT BREAK", function() {
  var salesPerson = new SalesPerson();

   it("should have an id property", function() {
    expect(salesPerson.hasOwnProperty('id')).toBeTruthy();
  });
  
  it("should have a firstName property", function() {
    expect(salesPerson.hasOwnProperty('firstName')).toBeTruthy();
  });
 
  it("should have a lastName property", function() {
    expect(salesPerson.hasOwnProperty('lastName')).toBeTruthy();
  });
  
  it("should have a salary property", function() {
    expect(salesPerson.hasOwnProperty('salary')).toBeTruthy();
  });
  
  it("should have a yearCommenced property", function() {
    expect(salesPerson.hasOwnProperty('yearCommenced')).toBeTruthy();
  });


  it("should have a toString function", function() {
    expect(typeof salesPerson.toString).toBe('function');
  });
  
  describe ("toString function", function () {
	  it("should return a string", function() {
		expect(typeof salesPerson.toString()).toBe('string');
	  });
	  it("should take 0 parameters", function() {
		expect(salesPerson.toString.length).toBe(0);
	  });
  });
  
});
