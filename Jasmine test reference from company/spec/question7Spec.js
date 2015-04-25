describe("Question Seven", function() {
    describe("company.getProductsToOrder function", function() {
        var company;
        beforeEach(function() {
            company = new Company();	
        });
        it("should return a string", function() {
            expect(typeof company.getProductsToOrder()).toBe('string');
        }); 	
 
        it("should correctly report details of products to order", function () {
            expect(company.getAllSalesPeople()).toBe('');
            company.addProduct( 'NU' , 'Nut' , 11.95 , 200 , 100 );
            expect(company.getProductsToOrder()).toBe('NU - Nut\n');
            company.addProduct( 'SC' , 'Screw' , 15.75 , 100 , 150 );
            expect(company.getProductsToOrder()).toBe('NU - Nut\n');
            company.addProduct( 'WA' , 'Washer' , 12.50 , 50 , 80 );
            expect(company.getProductsToOrder()).toBe('NU - Nut\n');
            company.addProduct( 'BO' , 'Bolt' , 20.00 , 100 , 50 );
            expect(company.getProductsToOrder()).toBe('NU - Nut\nBO - Bolt\n');
        });
    }); 
});  