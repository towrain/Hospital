describe("Question Six", function() {
    describe("Patient.getPaidStatus function", function() {
        var patient = new Patient(); 
            it("should return a boolean", function () {
            expect(typeof patient.getPaidStatus()).toBe('boolean');
        });
        
        it("should return true if the FeesOwing a patient is 0, and false otherwise.", function () {
            var patient = new Patient(400, 'Koirala', 'Kimi', 25, 12);
            expect(patient.getPaidStatus()).toBe(true);
            
			patient = new Patient( 300, 'Chen', 'Liang', 40, 12);
            expect(patient.getPaidStatus()).toBe(true);
			
			patient = new Patient( 100, 'Knightly', 'Jude', 30, 11);
            expect(patient.getPaidStatus()).toBe(true);
        });
    });
 });