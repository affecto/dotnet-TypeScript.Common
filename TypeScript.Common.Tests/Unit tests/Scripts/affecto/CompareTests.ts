"use strict";

describe("Compare",() =>
{
    describe("case-insensitive equality of texts",() =>
    {
        it("Same texts are equal",() =>
        {
            expect(Affecto.Compare.caseInsensitiveEquals("apua", "apua")).toBeTruthy();
        });

        it("Same texts with characters in different cases are equal",() =>
        {
            expect(Affecto.Compare.caseInsensitiveEquals("apua", "Apua")).toBeTruthy();
        });

        it("Empty texts are equal",() =>
        {
            expect(Affecto.Compare.caseInsensitiveEquals("", "")).toBeTruthy();
        });

        it("Null texts are equal",() =>
        {
            expect(Affecto.Compare.caseInsensitiveEquals(null, null)).toBeTruthy();
        });

        it("Different texts are inequal",() =>
        {
            expect(Affecto.Compare.caseInsensitiveEquals("apua", "Apuva!")).toBeFalsy();
        });

        it("Text and an empty text are inequal",() =>
        {
            expect(Affecto.Compare.caseInsensitiveEquals("apua", "")).toBeFalsy();
        });

        it("Text and null are inequal",() =>
        {
            expect(Affecto.Compare.caseInsensitiveEquals("apua", null)).toBeFalsy();
        });

        it("Empty text and null are inequal",() =>
        {
            expect(Affecto.Compare.caseInsensitiveEquals(null, "")).toBeFalsy();
        });
    });

    describe("order of numbers",() =>
    {
        it("Same numbers are equal",() =>
        {
            expect(Affecto.Compare.numbers(100, 100)).toBe(0);
        });

        it("First number is before the second one",() =>
        {
            expect(Affecto.Compare.numbers(45, 46)).toBeLessThan(0);
        });

        it("Second number is before the first one",() =>
        {
            expect(Affecto.Compare.numbers(-2, -3)).toBeGreaterThan(0);
        });

        it("First number is before the second one when first number is undefined",() =>
        {
            expect(Affecto.Compare.numbers(null, -100)).toBeLessThan(0);
        });

        it("Second number is before the first one when the second one is undefined",() =>
        {
            expect(Affecto.Compare.numbers(-96, null)).toBeGreaterThan(0);
        });

        it("Both numbers are equal when they are undefined",() =>
        {
            expect(Affecto.Compare.numbers(null, null)).toBe(0);
        });
    });

    describe("alphabetical order of texts",() =>
    {
        it("Same texts are equal",() =>
        {
            expect(Affecto.Compare.strings("apua", "apua")).toBe(0);
        });

        it("Same texts are equal regardless of character case",() =>
        {
            expect(Affecto.Compare.strings("apua", "Apua")).toBe(0);
        });

        it("First text is before the second one",() =>
        {
            expect(Affecto.Compare.strings("apua", "pua")).toBeLessThan(0);
        });

        it("Second text is before the first one",() =>
        {
            expect(Affecto.Compare.strings("pua", "apua")).toBeGreaterThan(0);
        });

        it("First text is before the second one when first text is undefined",() =>
        {
            expect(Affecto.Compare.strings(null, "pua")).toBeLessThan(0);
        });

        it("Second text is before the first one when second text is undefined",() =>
        {
            expect(Affecto.Compare.strings("apua", null)).toBeGreaterThan(0);
        });

        it("Both texts are equal when they are undefined",() =>
        {
            expect(Affecto.Compare.strings(null, null)).toBe(0);
        });

        it("Numbers are before letters",() =>
        {
            expect(Affecto.Compare.strings("2", "apua")).toBeLessThan(0);
        });

        it("Special characters are before letters",() =>
        {
            expect(Affecto.Compare.strings("#", "apua")).toBeLessThan(0);
        });

        it("Empty strings are before letters",() =>
        {
            expect(Affecto.Compare.strings("", "apua")).toBeLessThan(0);
        });
    });
});