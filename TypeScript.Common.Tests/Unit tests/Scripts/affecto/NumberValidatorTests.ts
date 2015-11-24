"use strict";

describe("Number validation", () =>
{
    describe("from an array of objects", () =>
    {
        var input: Array<any>;

        it("Null doesn't contain only numbers", () =>
        {
            expect(Affecto.NumberValidator.containsOnlyNumbers(input)).toBeFalsy();
        });

        it("Empty array doesn't contain only numbers", () =>
        {
            input = [];
            expect(Affecto.NumberValidator.containsOnlyNumbers(input)).toBeFalsy();
        });

        it("Empty string is not a number", () =>
        {
            input = [""];
            expect(Affecto.NumberValidator.containsOnlyNumbers(input)).toBeFalsy();
        });

        it("String is not a number", () =>
        {
            input = ["no number"];
            expect(Affecto.NumberValidator.containsOnlyNumbers(input)).toBeFalsy();
        });

        it("Partially numeric string is not a number", () =>
        {
            input = ["1A"];
            expect(Affecto.NumberValidator.containsOnlyNumbers(input)).toBeFalsy();
        });

        it("One non-numeric item means items doesn't contain only numbers", () =>
        {
            input = ["1", 4, "-6", "Jee!"];
            expect(Affecto.NumberValidator.containsOnlyNumbers(input)).toBeFalsy();
        });

        it("String containing a number is a number", () =>
        {
            input = ["23", "2", "2007"];
            expect(Affecto.NumberValidator.containsOnlyNumbers(input)).toBeTruthy();
        });

        it("Number is a number", () =>
        {
            input = [13, -1, 2060950];
            expect(Affecto.NumberValidator.containsOnlyNumbers(input)).toBeTruthy();
        });

        it("Zero is a number", () =>
        {
            input = [0, "0"];
            expect(Affecto.NumberValidator.containsOnlyNumbers(input)).toBeTruthy();
        });
    });
});