describe("Question One", function() {
    describe("Draw a class diagram", function() {
  
    });
    
      describe("Hospital with Doctor TODO", function() {
  var hospital;

  beforeEach(function() {
    hospital = new Hospital();
  });
 
 it("should have an allMyDoctor property", function() {
    expect(hospital.hasOwnProperty('allMyDoctor')).toBeTruthy();
  });
  
  describe("the allMyDoctor property", function () {
	  it("should reference an array", function() {
		expect(Array.isArray(hospital.allMyDoctor)).toBeTruthy();
	  });
  });

  it("should have an addDoctor function", function() {
    expect(typeof hospital.addDoctor).toBe('function');
  });
  

});

describe("Hospital with Doctor TODO", function() {
  var hospital;

  beforeEach(function() {
    hospital = new Hospital();
  });
 
 it("should have an allMyDoctor property", function() {
    expect(hospital.hasOwnProperty('allMyDoctor')).toBeTruthy();
  });
  
  describe("the allMyDoctor property", function () {
	  it("should reference an array", function() {
		expect(Array.isArray(hospital.allMyDoctor)).toBeTruthy();
	  });
  });

  it("should have an addDoctor function", function() {
    expect(typeof hospital.addDoctor).toBe('function');
  });
  

});



describe("Patient", function() {

   var patient = new Patient();

   it("should have an ID property", function() {
    expect(patient.hasOwnProperty('id')).toBeTruthy();
  });
  
  it("should have a lastName property", function() {
    expect(patient.hasOwnProperty('lastName')).toBeTruthy();
  });
 
  it("should have a firstName property", function() {
    expect(patient.hasOwnProperty('firstName')).toBeTruthy();
  });
  
  it("should have a feeOwing property", function() {
    expect(patient.hasOwnProperty('feeOwing')).toBeTruthy();
  });
  
    it("should have a doctorId property", function() {
    expect(patient.hasOwnProperty('doctorId')).toBeTruthy();
  });
  
  it("should have a toString function", function() {
    expect(typeof patient.toString).toBe('function');
  });
  
  describe("toString function", function () {
	  it("should return a string", function() {
		expect(typeof patient.toString()).toBe('string');
	  });
	  it("should take 0 parameters", function() {
		expect(patient.toString.length).toBe(0);
	  });
  });

  it("should have a getPaidStatus function", function() {
    expect(typeof patient.getPaidStatus).toBe('function');
  });
});



describe("Therpy", function() {
  var therpy = new Therpy();

   it("should have a name property", function() {
    expect(therpy.hasOwnProperty('name')).toBeTruthy();
  });
  
  it("should have a cost property", function() {
    expect(therpy.hasOwnProperty('cost')).toBeTruthy();
  });
 
   it("should have a set function", function() {
    expect(typeof therpy.set).toBe('function');
	/*therpy.set( "CHCH", "Christchurch");
	expect(therpy.id).toBe('CHCH');
	expect(therpy.name).toBe('Christchurch');*/
  });

});


describe("Doctor  PROVIDED - DO NOT BREAK", function() {
  var doctor = new Doctor();

   it("should have an ID property", function() {
    expect(doctor.hasOwnProperty('id')).toBeTruthy();
  });
  
  it("should have a firstName property", function() {
    expect(doctor.hasOwnProperty('firstName')).toBeTruthy();
  });
 
  it("should have a lastName property", function() {
    expect(doctor.hasOwnProperty('lastName')).toBeTruthy();
  });
  
  it("should have a officeNumber property", function() {
    expect(doctor.hasOwnProperty('officeNumber')).toBeTruthy();
  });
  
  it("should have a Fees property", function() {
    expect(doctor.hasOwnProperty('Fees')).toBeTruthy();
  });


  it("should have a toString function", function() {
    expect(typeof doctor.toString).toBe('function');
  });
  
  describe ("toString function", function () {
	  it("should return a string", function() {
		expect(typeof doctor.toString()).toBe('string');
	  });
	  it("should take 0 parameters", function() {
		expect(doctor.toString.length).toBe(0);
	  });
  });
  
});
});