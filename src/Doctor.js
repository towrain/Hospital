var  Doctor = function (ID,  lastName, firstName, officeNumber, Fees) {
        //this.allMyPatients = [];
        'use strict';
        this.id = ID;
        this.lastName = lastName;
        this.firstName = firstName;
        this.officeNumber = officeNumber;
        this.Fees = Fees;
    };

Doctor.prototype.toString = function () {
    'use strict';
    return this.id + " - " + this.lastName + ", "  + this.firstName + ".";
};


/*Doctor.prototype.addPatient() = function () {
        //Lokk
     var newPatient = new Patient( ID, lastName, firstName, feeOwing, doctorId );
     this.allMyPatients.push( newPatient );

};*/

// right ??
/*Doctor.prototype.displayBillablePatients = function () {
    var thePatient;
    var out = "";
    for ( thePatient of this.allMyPatients ) {  
        out += thePatient.toString() + '\n';
    }
    return out;  
};*/