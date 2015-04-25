describe("Question Two", function() {
    describe("add FOUR SalesPeople", function() {
		var company;
		beforeEach(function(){
		company = new Company();
			company.addSalesPerson( '14' , 'Jim' , 'Peters' , 39000 , 1998 );
			company.addSalesPerson( '11' , 'Helen' , 'Brash' , 47000 , 1999 );
			company.addSalesPerson( '12' , 'Don' , 'Clarke' , 37000 , 2003 );
			company.addSalesPerson( '13' , 'Winston' , 'Anderton' , 42000 , 2002 );
				
		});
		
        it("should have added 4 salesPeple", function() {
        expect(company.allMySalesPeople.length).toBe(4);
        });  

        it("should have correctly set details for sales people", function() {
          var salesPerson;
          salesPerson = company.allMySalesPeople[0];
		  expect(salesPerson.id).toBe('14');
          expect(salesPerson.salary).toBe(39000);
          expect(salesPerson.yearCommenced).toBe(1998);
		  
		  
		  
          salesPerson = company.allMySalesPeople[1];
           expect(salesPerson.id).toBe('11');
          expect(salesPerson.salary).toBe(47000);
          expect(salesPerson.yearCommenced).toBe(1999);
          
          salesPerson = company.allMySalesPeople[2];
          expect(salesPerson.id).toBe('12');
          expect(salesPerson.salary).toBe(37000);
          expect(salesPerson.yearCommenced).toBe(2003);
          
          salesPerson = company.allMySalesPeople[3]
          expect(salesPerson.id).toBe('13');
          expect(salesPerson.salary).toBe(42000);
          expect(salesPerson.yearCommenced).toBe(2002);
        });  
    });
});