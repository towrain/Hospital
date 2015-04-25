describe("Company with SalesPeople TODO", function() {
  var company;

  beforeEach(function() {
    company = new Company();
  });
 
 it("should have an allMySalesPeople property", function() {
    expect(company.hasOwnProperty('allMySalesPeople')).toBeTruthy();
  });
  
  describe("the allMySalesPeople property", function () {
	  it("should reference an array", function() {
		expect(Array.isArray(company.allMySalesPeople)).toBeTruthy();
	  });
  });

  it("should have an addSalesPerson function", function() {
    expect(typeof company.addSalesPerson).toBe('function');
  });
  
  describe("adding FOUR SalesPeople - TODO in the SPEC", function() {
	/*
	ID	Name				Salary	Commenced 
	14	Jim Peters			39,000	1998
	11	Helen Brash			47,000	1999
	12	Don Clarke	37,000	2003
	13	Winston Anderton	42,000	2002
     */
	
      var company;
      beforeEach(function() {
        company = new Company();
		company.addSalesPerson( '14' , 'Jim' , 'Peters' , 39000 , 1998 );
		company.addSalesPerson( '11' , 'Helen' , 'Brash' , 47000 , 1999 );
		company.addSalesPerson( '12' , 'Don' , 'Clarke' , 37000 , 2003 );
		company.addSalesPerson( '13' , 'Winston' , 'Anderton' , 42000 , 2002 );
      });

      it("should have 4 salesPeple", function() {
        expect(company.allMySalesPeople.length).toBe(4);
      });  

	  it("should correctly set details for all sales people", function() {
		  var salesPerson;
		  salesPerson = company.allMySalesPeople[0];
		  expect(salesPerson.salary).toBe(39000);
		  expect(salesPerson.yearCommenced).toBe(1998);
		  salesPerson = company.allMySalesPeople[1];
		  expect(salesPerson.salary).toBe(47000);
		  expect(salesPerson.yearCommenced).toBe(1999);
		  salesPerson = company.allMySalesPeople[2];
		  expect(salesPerson.salary).toBe(37000);
		  expect(salesPerson.yearCommenced).toBe(2003);
		  salesPerson = company.allMySalesPeople[3];
		  expect(salesPerson.salary).toBe(42000);
		  expect(salesPerson.yearCommenced).toBe(2002);
    });  
  });    

  describe("getAllSalesPeople function", function() {
    var company;
    beforeEach(function() {
      company = new Company();
    });
	it("should return different data as sales people are added", function () {
      expect(company.getAllSalesPeople()).toBe('');
	  company.addSalesPerson( '14' , 'Jim' , 'Peters' , 39000 , 1998 );
      expect(company.getAllSalesPeople()).toBe('14 - Peters, Jim.\n');
	  company.addSalesPerson( '11' , 'Helen' , 'Brash' , 47000 , 1999 );
      expect(company.getAllSalesPeople()).toBe('14 - Peters, Jim.\n11 - Brash, Helen.\n');
	  company.addSalesPerson( '12' , 'Don' , 'Clarke' , 37000 , 2003 );
      expect(company.getAllSalesPeople()).toBe('14 - Peters, Jim.\n11 - Brash, Helen.\n12 - Clarke, Don.\n');
	  company.addSalesPerson( '13' , 'Winston' , 'Anderton' , 42000 , 2002 );
      expect(company.getAllSalesPeople()).toBe('14 - Peters, Jim.\n11 - Brash, Helen.\n12 - Clarke, Don.\n13 - Anderton, Winston.\n');
    });

  }); 
  
});
