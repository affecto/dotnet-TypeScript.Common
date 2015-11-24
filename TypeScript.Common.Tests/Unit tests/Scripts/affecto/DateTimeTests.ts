"use strict";

describe("Date time", () =>
{
    describe("today", () =>
    {
        var now: Date;

        beforeEach(() =>
        {
            now = new Date();
        });

        it("Has date", () =>
        {
            expect(Affecto.DateTime.today.getDate()).toEqual(now.getDate());
        });

        it("Has month", () =>
        {
            expect(Affecto.DateTime.today.getMonth()).toEqual(now.getMonth());
        });

        it("Has year", () =>
        {
            expect(Affecto.DateTime.today.getFullYear()).toEqual(now.getFullYear());
        });

        it("Has no hours", () =>
        {
            expect(Affecto.DateTime.today.getHours()).toBe(0);
        });

        it("Has no minutes", () =>
        {
            expect(Affecto.DateTime.today.getMinutes()).toBe(0);
        });

        it("Has no seconds", () =>
        {
            expect(Affecto.DateTime.today.getSeconds()).toBe(0);
        });

        it("Has no milliseconds", () =>
        {
            expect(Affecto.DateTime.today.getMilliseconds()).toBe(0);
        });
    });
});