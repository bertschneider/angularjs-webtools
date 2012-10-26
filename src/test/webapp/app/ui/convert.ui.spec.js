'use strict';

describe('welcomePage', function () {

    beforeEach(function () {
        browser().navigateTo('/index.html');
    });

    it('should welcome the visitor', function () {
        expect(element('#headline').text()).toBe('Welcome traveler...');
    });

    it('should show the possible converter', function () {
        expect(repeater('.function').count()).toEqual(2);
        expect(repeater('.function').row(0)).toEqual(['MD5']);
        expect(repeater('.function').column('algorithm')).toEqual(['MD5', 'SHA1']);
    });

    it('should forward to selected converter', function () {
        element('#MD5').click();
        expect(browser().location().url()).toEqual("/converter/MD5");
        expect(element('#converter').text()).toEqual('MD5 Converter');
    });

    it('should enter a text and have it converted into md5', function () {
        element('#MD5').click();
        input('userText').enter('darkShadows');
        expect(element('#output').text()).toEqual('857ce4c416b0d5299055a0f6075b4f7f');
    });
});