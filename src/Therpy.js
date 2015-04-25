var  Therpy = function (name, cost) {
    'use strict';
    this.name = name;
    this.cost = cost;
};

Therpy.prototype.set = function (newName) {
    'use strict';
    this.name = newName;
};