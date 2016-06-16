"use strict";

describe("Date conversion", () =>
{
    describe("to date time from string", () =>
    {
        it("Null is null", () =>
        {
            expect(Affecto.DateConverter.toDateTime(null)).toBeNull();
        });

        it("Unconvertable string is null", () =>
        {
            expect(Affecto.DateConverter.toDateTime("no date")).toBeNull();
        });

        it("String with only date is null", () =>
        {
            expect(Affecto.DateConverter.toDateTime("2013-02-27")).toBeNull();
        });

        it("String with only time is null", () =>
        {
            expect(Affecto.DateConverter.toDateTime("17:18:19")).toBeNull();
        });

        it("Date time string with Finnish date format is null", () =>
        {
            expect(Affecto.DateConverter.toDateTime("27.02.2013T17:18:19")).toBeNull();
        });

        it("Date time string in valid format but with time zone is null", () =>
        {
            expect(Affecto.DateConverter.toDateTime("2013-02-27T17:18:19Z")).toBeNull();
        });

        it("String with valid separators but with no numbers is null", () =>
        {
            expect(Affecto.DateConverter.toDateTime("-T:Z")).toBeNull();
        });

        it("Date time string in valid format but with non-numeric date part is null", () =>
        {
            expect(Affecto.DateConverter.toDateTime("2013-AB-27T17:18:19")).toBeNull();
        });

        it("Date time string in valid format but with non-numeric time part is null", () =>
        {
            expect(Affecto.DateConverter.toDateTime("2013-02-27TAB:18:19")).toBeNull();
        });

        it("Date time string in valid format is converted", () =>
        {
            expect(Affecto.DateConverter.toDateTime("2013-02-27T17:18:19")).toEqual(new Date(2013, 1, 27, 17, 18, 19));
        });
    });

    describe("to date from Finnish format string", () =>
    {
        it("Null is null", () =>
        {
            expect(Affecto.DateConverter.toDate(null)).toBeNull();
        });

        it("Unconvertable string is null", () =>
        {
            expect(Affecto.DateConverter.toDate("no date")).toBeNull();
        });

        it("String with not enough date parts is null", () =>
        {
            expect(Affecto.DateConverter.toDate("13.11")).toBeNull();
        });

        it("String with too many date parts is null", () =>
        {
            expect(Affecto.DateConverter.toDate("13.11.2015.2015")).toBeNull();
        });

        it("Unconvertable day parts", () =>
        {
            expect(Affecto.DateConverter.toDate("a.12.2014")).toBeNull();
        });

        it("Unconvertable month parts", () =>
        {
            expect(Affecto.DateConverter.toDate("5.f.2014")).toBeNull();
        });

        it("Unconvertable year parts", () =>
        {
            expect(Affecto.DateConverter.toDate("12.12.r5")).toBeNull();
        });

        it("Successful conversion", () =>
        {
            expect(Affecto.DateConverter.toDate("5.12.2014")).toEqual(new Date(2014, 11, 5));
        });
    });

    describe("to Finnish format string", () =>
    {
        it("Null date string is null date", () =>
        {
            expect(Affecto.DateConverter.toFinnishDate(null)).toBeNull();
        });

        it("Empty date string is null date", () =>
        {
            expect(Affecto.DateConverter.toFinnishDate("")).toBeNull();
        });

        it("Date and time are converted to date", () =>
        {
            expect(Affecto.DateConverter.toFinnishDate("2014-12-17T11:33:36.753")).toBe("17.12.2014");
        });

        it("Date alone is converted to date", () =>
        {
            expect(Affecto.DateConverter.toFinnishDate("2014-02-07")).toBe("7.2.2014");
        });

        it("Date object is converted to date", () =>
        {
            expect(Affecto.DateConverter.toFinnishDate(new Date(2014, 11, 17))).toBe("17.12.2014");
        });

        it("Unconvertable date is null date", () =>
        {
            expect(Affecto.DateConverter.toFinnishDate("no date")).toBeNull();
        });

        it("Null date string is null date time", () =>
        {
            expect(Affecto.DateConverter.toFinnishDateTime(null)).toBeNull();
        });

        it("Empty date string is null date time", () =>
        {
            expect(Affecto.DateConverter.toFinnishDateTime("")).toBeNull();
        });

        it("Date and time are converted to date time", () =>
        {
            expect(Affecto.DateConverter.toFinnishDateTime("2014-12-17T11:33:36.753")).toBe("17.12.2014 11:33:36");
        });

        it("Zeros are left padded to time when the numbers are single digit in date time conversion", () =>
        {
            expect(Affecto.DateConverter.toFinnishDateTime("2014-12-17T01:10:09.753")).toBe("17.12.2014 01:10:09");
        });

        it("Date alone is converted to date time with zero time", () =>
        {
            expect(Affecto.DateConverter.toFinnishDateTime("2014-02-07")).toBe("7.2.2014 00:00:00");
        });

        it("Date object is converted to date time", () =>
        {
            expect(Affecto.DateConverter.toFinnishDateTime(new Date(2014, 11, 17, 3, 10, 9))).toBe("17.12.2014 03:10:09");
        });

        it("Date object before midnight is converted to date time", () =>
        {
            expect(Affecto.DateConverter.toFinnishDateTime(new Date(2014, 11, 17, 23, 10, 9))).toBe("17.12.2014 23:10:09");
        });

        it("Unconvertable date is null date time", () =>
        {
            expect(Affecto.DateConverter.toFinnishDateTime("no date")).toBeNull();
        });
    });

    describe("to ISO8601 format date string", () =>
    {
        it("Null date string is null date", () =>
        {
            expect(Affecto.DateConverter.toISO8601Date(null)).toBeNull();
        });

        it("Empty date string is null date", () =>
        {
            expect(Affecto.DateConverter.toISO8601Date("")).toBeNull();
        });

        it("Date and time are converted to date", () =>
        {
            expect(Affecto.DateConverter.toISO8601Date("2014-12-17T11:33:36.753")).toBe("2014-12-17");
        });

        it("Date alone is converted to date", () =>
        {
            expect(Affecto.DateConverter.toISO8601Date("2014-12-27")).toBe("2014-12-27");
        });

        it("Date alone is converted to date with leading zeros", () =>
        {
            expect(Affecto.DateConverter.toISO8601Date("2014-02-07")).toBe("2014-02-07");
        });

        it("Date object is converted to date", () =>
        {
            expect(Affecto.DateConverter.toISO8601Date(new Date(2014, 11, 17))).toBe("2014-12-17");
        });

        it("Date object is converted to date with leading zeros", () =>
        {
            expect(Affecto.DateConverter.toISO8601Date(new Date(2014, 2, 9))).toBe("2014-03-09");
        });

        it("Date object with time before midnight is converted to date", () =>
        {
            expect(Affecto.DateConverter.toISO8601Date(new Date(2014, 11, 17, 23, 31, 1))).toBe("2014-12-17");
        });

        it("Date object with time after midnight is converted to date", () =>
        {
            expect(Affecto.DateConverter.toISO8601Date(new Date(2014, 11, 17, 0, 31, 1))).toBe("2014-12-17");
        });

        it("Unconvertable date is null date", () =>
        {
            expect(Affecto.DateConverter.toISO8601Date("no date")).toBeNull();
        });
    });

    describe("to ISO8601 format date and time string", () =>
    {
        it("Null date string is null date", () =>
        {
            expect(Affecto.DateConverter.toISO8601DateTime(null)).toBeNull();
        });

        it("Empty date string is null date", () =>
        {
            expect(Affecto.DateConverter.toISO8601DateTime("")).toBeNull();
        });

        it("Date and time are converted to date and time", () =>
        {
            expect(Affecto.DateConverter.toISO8601DateTime("2014-12-17T11:33:36.753Z")).toBe("2014-12-17T11:33:36");
        });

        it("Date alone is converted to date and time", () =>
        {
            expect(Affecto.DateConverter.toISO8601DateTime("2014-12-27")).toBe("2014-12-27T00:00:00");
        });

        it("Date alone is converted to date and time with leading zeros", () =>
        {
            expect(Affecto.DateConverter.toISO8601DateTime("2014-02-07")).toBe("2014-02-07T00:00:00");
        });

        it("Date object is converted to date and time", () =>
        {
            expect(Affecto.DateConverter.toISO8601DateTime(new Date(2014, 11, 17, 0, 0, 0))).toBe("2014-12-17T00:00:00");
        });

        it("Date object is converted to date and time with leading zeros", () =>
        {
            expect(Affecto.DateConverter.toISO8601DateTime(new Date(2014, 2, 9, 0, 0, 0))).toBe("2014-03-09T00:00:00");
        });

        it("Date object with time is converted to date and time", () =>
        {
            expect(Affecto.DateConverter.toISO8601DateTime(new Date(2014, 11, 17, 22, 13, 1))).toBe("2014-12-17T22:13:01");
        });

        it("Unconvertable date is null date", () =>
        {
            expect(Affecto.DateConverter.toISO8601DateTime("no date")).toBeNull();
        });
    });
});