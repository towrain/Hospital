describe("Region", function() {
  var region = new Region();

   it("should have an id property", function() {
    expect(region.hasOwnProperty('id')).toBeTruthy();
  });
  
  it("should have a name property", function() {
    expect(region.hasOwnProperty('name')).toBeTruthy();
  });
 
   it("should have a set function", function() {
    expect(typeof region.set).toBe('function');
	region.set( "CHCH", "Christchurch");
	expect(region.id).toBe('CHCH');
	expect(region.name).toBe('Christchurch');
  });

});