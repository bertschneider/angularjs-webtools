describe("converterService", function () {

    var converterService;

    beforeEach(function () {
        module("Converter");
        inject(function (_converterService_) {
            converterService = _converterService_;
        });
    });

        it("should convert a string into MD5'", function () {
        expect(converterService.convert("MD5", "darkShadows")).toEqual("857ce4c416b0d5299055a0f6075b4f7f");
        });

        it("should convert empty strings to MD5", function(){
            expect(converterService.convert("MD5", "")).toEqual("");
        });
    
        it("should return empty string if we try to encode it to 'Donald Duck'", function() {
          expect(converterService.convert("Donald Duck", "foo")).toEqual("");     
        });


});