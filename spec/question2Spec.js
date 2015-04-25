describe("Question Two", function() {
    describe("add Doctors", function() {
		var hospital;
		beforeEach(function(){
		hospital = new Hospital();
			hospital.addDoctor( '11' , 'Xu' , 'Jian' , 'N400' , 50 );
			hospital.addDoctor( '13' , 'John' , 'Emily' , 'W7' , 25 );
			hospital.addDoctor( '12' , 'Kumar' , 'Santosh' , 'A22' , 40 );	
		});
		
        it("should have added 3 Doctors", function() {
        expect(hospital.allMyDoctor.length).toBe(3);
        }); 
		

        it("should have correctly set details for Doctor", function() {
          var Doctor;
          Doctor = hospital.allMyDoctor[0];
		  expect(Doctor.id).toBe('11');
          expect(Doctor.officeNumber).toBe('N400');
          expect(Doctor.Fees).toBe(50);

          Doctor = hospital.allMyDoctor[1];
          expect(Doctor.id).toBe('13');
          expect(Doctor.officeNumber).toBe('W7');
          expect(Doctor.Fees).toBe(25);
          
          Doctor = hospital.allMyDoctor[2];
          expect(Doctor.id).toBe('12');
          expect(Doctor.officeNumber).toBe('A22');
          expect(Doctor.Fees).toBe(40);
        });
		
    });
	});