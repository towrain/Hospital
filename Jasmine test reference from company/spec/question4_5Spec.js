describe("Question Four and Question Five", function() {
    describe("write company.addProduct function to add four products", function() {
		var company;
		beforeEach(
			function(){
			company = new Company();
			company.addProduct( 'NU' , 'Nut' , 11.95 , 200 , 100 );
			company.addProduct( 'SC' , 'Screw' , 15.75 , 100 , 150 );
			company.addProduct( 'WA' , 'Washer' , 12.50 , 50 , 80 );
			company.addProduct( 'BO' , 'Bolt' , 20.00 , 100 , 50 );	
			});
			
        it("should have 4 Products", function() {
            expect(company.allMyProducts.length).toBe(4);
        });
          
        it("should correctly set product details", function() {
            var product;
            product = company.allMyProducts[0];
            expect(product.id).toBe('NU');
            expect(product.name).toBe('Nut');
            expect(product.price).toBe(11.95);
            expect(product.minimumQuantity).toBe(200);
            expect(product.quantityOnHand).toBe(100);
            
            product = company.allMyProducts[1];
            expect(product.id).toBe('SC');
            expect(product.name).toBe('Screw');
            expect(product.price).toBe(15.75);
            expect(product.minimumQuantity).toBe(100);
            expect(product.quantityOnHand).toBe(150);
            
            product = company.allMyProducts[2];
            expect(product.id).toBe('WA');
            expect(product.name).toBe('Washer');
            expect(product.price).toBe(12.50);
            expect(product.minimumQuantity).toBe(50);
            expect(product.quantityOnHand).toBe(80);
            
            product = company.allMyProducts[3];
            expect(product.id).toBe('BO');
            expect(product.name).toBe('Bolt');
            expect(product.price).toBe(20.00);
            expect(product.minimumQuantity).toBe(100);
            expect(product.quantityOnHand).toBe(50);
        });  
    }); 
});