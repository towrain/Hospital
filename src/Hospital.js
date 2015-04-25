var  Hospital = function () {
    'use strict';
    this.allMyDoctor = [];
    this.allMyPatients = [];
};

Hospital.prototype.addDoctor = function (ID, firstName, lastName, officeNumber, Fees) {
    "use strict";
    var newDoctor = new Doctor(ID, firstName, lastName, officeNumber, Fees);
    this.allMyDoctor.push(newDoctor);
};


// may be can leave

Hospital.prototype.displayDoctor = function () {
    "use strict";
    var out = '', theDoctor;
    for (theDoctor of this.allMyDoctor) {
         out += theDoctor.toString() + '\n';
    }
    return out;
};



// could be ??
Hospital.prototype.addPatient = function (ID, lastName, firstName, feeOwing, doctorId) {
     //Lokk
    'use strict';
    var newPatient = new Patient(ID, lastName, firstName, feeOwing, doctorId);
    this.allMyPatients.push(newPatient);

};

//Q7
Hospital.prototype.displayBillablePatients = function () {
    "use strict";
    var out = '', thePatient;
    for (thePatient of this.allMyPatients) {
        if (thePatient.getPaidStatus()) {
            out += thePatient.toString() + '\n';
        }
    }
    return out;
};

/* not useful ??
Hospital.prototype.getProductsToOrder = function () {
   "use strict";
   var out = '', aProduct;
    for ( aProduct of this.allMyProducts ) {  
        if (aProduct.moreNeeded()) {
            out += aProduct.toString() + '\n';
        }
    }
    return out;
};
*/
