describe("Question Nine", function() {
    describe("Therpy.set function", function() {
        var therpy = new Therpy();
        it("should allow changing of the name property", function() {
            expect(typeof therpy.set).toBe('function');
            therpy.set("killing");
            expect(therpy.name).toBe('killing');
        });
    });
});