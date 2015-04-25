describe("Question Nine", function() {
    describe("region.set function", function() {
        var region = new Region();
        it("should allow changing of the name property", function() {
            expect(typeof region.set).toBe('function');
            region.set("Christchurch");
            expect(region.name).toBe('Christchurch');
        });
    });
});