describe("Question Six", function() {
    describe("product.moreNeeded function", function() {
        var product = new Product(); 
            it("should return a boolean", function () {
            expect(typeof product.moreNeeded()).toBe('boolean');
        });
        
        it("should return true if the quantity on hand for a product is less than its minimum quantity, and false otherwise.", function () {
            var product = new Product('NU' , 'Nut' , 11.95 , 200 , 100 );
            expect(product.moreNeeded()).toBe(true);
            product = new Product('SC' , 'Screw' , 15.75 , 100 , 150 );
            expect(product.moreNeeded()).toBe(false);
        });
    });
 });