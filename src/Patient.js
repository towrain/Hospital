var Patient = function (ID, lastName, firstName, feeOwing, doctorId) {
        'use strict';
        this.id = ID;
        this.lastName = lastName;
        this.firstName = firstName;
        this.feeOwing = feeOwing;
        this.doctorId = doctorId;
    };

Patient.prototype.getPaidStatus = function () {
    //return this.FeesOwing  = 0; ??
    'use strict';
    /*if (this.feeOwing !== 0) {
        return true;
    }
    else return false;*/
    return this.FeesOwing !== 0;
};

// look
/*Patient.prototype.displayBillablePatients = function () {
    return this.doctorId + " - " + this.name;  
};*/

Patient.prototype.toString = function () {
    'use strict';
    return this.lastName + " " + this.firstName;
};