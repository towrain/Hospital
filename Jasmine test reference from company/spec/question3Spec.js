describe("Question Three", function() {
    describe("company.getAllSalesPeople function", function() {
        var company;
        beforeEach(function() {
            company = new Company();	
        });
        
        it("should return a string", function() {
            expect(typeof company.getAllSalesPeople()).toBe('string');
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