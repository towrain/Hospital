describe("Question Eight", function() {
    describe("Region", function() {
        var region = new Region();
        it("should have an id property", function() {
           expect(region.hasOwnProperty('id')).toBeTruthy();
        });

        it("should have a name property", function() {
            expect(region.hasOwnProperty('name')).toBeTruthy();
        });
    });
});