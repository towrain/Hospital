describe("Question Four and Question Five", function() {
    describe("write hospital.addPatient function to add FIVE Patients", function() {
		var hospital;
		beforeEach(function(){
		hospital = new Hospital();
			hospital.addPatient( 200, 'Fisher', 'Shelley', 0, 11 );
			hospital.addPatient( 400, 'Koirala', 'Kimi', 25, 12 );
			hospital.addPatient( 300, 'Chen', 'Liang', 40, 12);
			hospital.addPatient( 500, 'Ahmed', 'Riyaz', 0, 13);
			hospital.addPatient( 100, 'Knightly', 'Jude', 30, 11);	
			});
			
        it("should have 5 Patients", function() {
            expect(hospital.allMyPatients.length).toBe(5);
        });
          
       it("should correctly set Patient details", function() {
            var patient;
            patient = hospital.allMyPatients[0];
            expect(patient.id).toBe(200);
            expect(patient.lastName).toBe('Fisher');
			expect(patient.firstName).toBe('Shelley');
            expect(patient.feeOwing).toBe(0);
            expect(patient.doctorId).toBe(11);
            
            patient = hospital.allMyPatients[1];
            expect(patient.id).toBe(400);
            expect(patient.lastName).toBe('Koirala');
			expect(patient.firstName).toBe('Kimi');
            expect(patient.feeOwing).toBe(25);
            expect(patient.doctorId).toBe(12);
            
            patient = hospital.allMyPatients[2];
            expect(patient.id).toBe(300);
            expect(patient.lastName).toBe('Chen');
			expect(patient.firstName).toBe('Liang');
            expect(patient.feeOwing).toBe(40);
            expect(patient.doctorId).toBe(12);
            
            patient = hospital.allMyPatients[3];
            expect(patient.id).toBe(500);
            expect(patient.lastName).toBe('Ahmed');
			expect(patient.firstName).toBe('Riyaz');
            expect(patient.feeOwing).toBe(0);
            expect(patient.doctorId).toBe(13);
			
			
			patient = hospital.allMyPatients[4];
           expect(patient.id).toBe(100);
            expect(patient.lastName).toBe('Knightly');
			expect(patient.firstName).toBe('Jude');
            expect(patient.feeOwing).toBe(30);
            expect(patient.doctorId).toBe(11);

			
        }); 
    }); 
});