"use strict";

describe("Date validation", () =>
{
    describe("for different object types", () =>
    {
        it("Null is not a date", () =>
        {
            expect(Affecto.DateValidator.isDateType(null)).toBeFalsy();
        });

        it("Text is not a date", () =>
        {
            expect(Affecto.DateValidator.isDateType("text")).toBeFalsy();
        });

        it("Number is not a date", () =>
        {
            expect(Affecto.DateValidator.isDateType(4)).toBeFalsy();
        });

        it("Boolean is not a date", () =>
        {
            expect(Affecto.DateValidator.isDateType(false)).toBeFalsy();
        });

        it("Date is a date", () =>
        {
            expect(Affecto.DateValidator.isDateType(new Date(2014, 1, 1, 1, 13, 43, 124))).toBeTruthy();
        });
    });

    describe("for Finnish dates", () =>
    {
        it("Null is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate(null)).toBeFalsy();
        });

        it("Text is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate("no date")).toBeFalsy();
        });

        it("Number is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate(23)).toBeFalsy();
        });

        it("Boolean is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate(true)).toBeFalsy();
        });

        it("Date string in US format is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate("12/21/2014")).toBeFalsy();
        });

        it("Date string in Finnish format but non-numeric date is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate("ad.12.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but non-numeric month is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate("4.r.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but non-numeric year is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate("3.12.yyyy")).toBeFalsy();
        });

        it("Date string in Finnish format but too large date is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate("32.12.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but too large month is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate("30.13.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but with negative month is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate("30.-4.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but with negative day is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate("-30.4.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but with zero month is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate("30.0.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but with zero day is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate("0.4.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but with too many parts is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate("1.1.4.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but with too few parts is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate("1.1.")).toBeFalsy();
        });

        it("Date string in Finnish format but with short year is invalid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate("1.1.12")).toBeFalsy();
        });

        it("Date string in Finnish format is valid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate("21.12.2014")).toBeTruthy();
        });

        it("Date is valid", () =>
        {
            expect(Affecto.DateValidator.isFinnishDate(new Date)).toBeTruthy();
        });
    });

    describe("for SQL server compatible Finnish dates", () =>
    {
        it("Null is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate(null)).toBeFalsy();
        });

        it("Text is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("no date")).toBeFalsy();
        });

        it("Number is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate(23)).toBeFalsy();
        });

        it("Boolean is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate(true)).toBeFalsy();
        });

        it("Date string in US format is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("12/21/2014")).toBeFalsy();
        });

        it("Date string in Finnish format but non-numeric date is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("ad.12.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but non-numeric month is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("4.r.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but non-numeric year is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("3.12.yyyy")).toBeFalsy();
        });

        it("Date string in Finnish format but too large date is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("32.12.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but too large month is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("30.13.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but with negative month is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("30.-4.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but with negative day is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("-30.4.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but with zero month is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("30.0.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but with zero day is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("0.4.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but with too many parts is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("1.1.4.2014")).toBeFalsy();
        });

        it("Date string in Finnish format but with too few parts is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("1.1.")).toBeFalsy();
        });

        it("Date string in Finnish format but with short year is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("1.1.12")).toBeFalsy();
        });

        it("Date string in Finnish format is valid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("21.12.2014")).toBeTruthy();
        });

        it("Too old date string in Finnish format is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate("21.12.203")).toBeFalsy();
        });

        it("Date is valid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate(new Date(2014, 1, 1))).toBeTruthy();
        });

        it("Too old date is invalid", () =>
        {
            expect(Affecto.DateValidator.isSqlServerCompatibleFinnishDate(new Date(214, 1, 1))).toBeFalsy();
        });
    });
});