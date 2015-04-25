describe("Question Seven ????", function() {
    describe("Hospital.displayBillablePatients function", function() {
        var hospital;
        beforeEach(function() {
            hospital = new Hospital();	
        });
		
        it("should return a string", function() {
            expect(typeof hospital.displayBillablePatients()).toBe('string');
        }); 	
 
        it("should correctly report name of Patient to order", function () {
            expect(hospital.displayBillablePatients()).toBe('');
            hospital.addPatient(100, 'Knightly', 'Jude', 30, 11 );
			
            expect(hospital.displayBillablePatients()).toBe('Knightly Jude\n');
            hospital.addPatient( 300, 'Chen', 'Liang', 40, 12 );
			
            expect(hospital.displayBillablePatients()).toBe('Knightly Jude\nChen Liang\n');
            hospital.addPatient( 400, 'Koirala', 'Kimi', 25, 12 );
			
            expect(hospital.displayBillablePatients()).toBe('Knightly Jude\nChen Liang\nKoirala Kimi\n');
            
        });
    }); 
});  