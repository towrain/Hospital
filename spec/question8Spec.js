describe("Question Eight", function() {
    describe("Therpy", function() {
        var therpy = new Therpy();
        it("should have an name property", function() {
           expect(therpy.hasOwnProperty('name')).toBeTruthy();
        });

        it("should have a cost property", function() {
            expect(therpy.hasOwnProperty('cost')).toBeTruthy();
        });
    });
});