describe("Question Three", function() {
    describe("hospital.allMyDoctor function", function() {
        var hospital;
        beforeEach(function() {
            hospital = new Hospital();	
        });
        
        it("should return a string", function() {
            expect(typeof hospital.displayDoctor()).toBe('string');
        }); 
        
        it("should return different data as Doctors are added", function () {
            expect(hospital.displayDoctor()).toBe('');
            hospital.addDoctor( '11' , 'Xu' , 'Jian', 'N400' , 50 );
			
            expect(hospital.displayDoctor()).toBe('11 - Xu, Jian.\n');
            hospital.addDoctor( '12' , 'Kumar' , 'Santosh', 'A22' , 40);
			
            expect(hospital.displayDoctor()).toBe('11 - Xu, Jian.\n12 - Kumar, Santosh.\n');
            hospital.addDoctor( '13' , 'John' , 'Emily' , 'W7' , 25 );
			
            expect(hospital.displayDoctor()).toBe('11 - Xu, Jian.\n12 - Kumar, Santosh.\n13 - John, Emily.\n');
           
        });

    });
  
});