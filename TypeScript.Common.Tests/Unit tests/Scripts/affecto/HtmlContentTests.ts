"use strict";

describe("HTML content", () =>
{
    describe("with new line characters replaced with br elements", () =>
    {
        it("Null text is used as it is",() =>
        {
            expect(Affecto.HtmlContent.replaceNewLines(null)).toBe(null);
        });
        it("Text with no new line characters is used as it is", () =>
        {
            expect(Affecto.HtmlContent.replaceNewLines("apua")).toBe("apua");
        });
        it("All new lines are replaced with br elements",() =>
        {
            expect(Affecto.HtmlContent.replaceNewLines("row 1\nrow 2\r\nrow3")).toBe("row 1<br/>row 2<br/>row3");
        });
    });

    describe("escaped",() =>
    {
        it("Text with nothing to escape is used as it is", () =>
        {
            expect(Affecto.HtmlContent.escape("apua")).toBe("apua");
        });

        it("Empty text is used as it is", () =>
        {
            expect(Affecto.HtmlContent.escape("")).toBe("");
        });

        it("Undefined is used as undefined", () =>
        {
            expect(Affecto.HtmlContent.escape(null)).toBe(null);
        });

        it("Angle brackets start is escaped", () =>
        {
            expect(Affecto.HtmlContent.escape("<apua")).toBe("&lt;apua");
        });

        it("Angle brackets end is escaped", () =>
        {
            expect(Affecto.HtmlContent.escape("apua>")).toBe("apua&gt;");
        });

        it("Ambersand is escaped", () =>
        {
            expect(Affecto.HtmlContent.escape("&apua")).toBe("&amp;apua");
        });
    });

    describe("wrapped and sorted", () =>
    {
        it("Empty list wraps to an empty string", () =>
        {
            expect(Affecto.HtmlContent.wrapSorted(new Array<string>())).toBe("");
        });

        it("Null list wraps to an empty string", () =>
        {
            expect(Affecto.HtmlContent.wrapSorted(null)).toBe("");
        });

        it("List items are separated with a HTML new line", () =>
        {
            expect(Affecto.HtmlContent.wrapSorted(new Array<string>("first line", "second line"))).toBe("first line<br/>second line");
        });

        it("List items are alphabetically sorted", () =>
        {
            expect(Affecto.HtmlContent.wrapSorted(new Array<string>("second line", "first line"))).toBe("first line<br/>second line");
        });

        it("One item list has no HTML new line", () =>
        {
            expect(Affecto.HtmlContent.wrapSorted(new Array<string>("only line"))).toBe("only line");
        });

        it("Undefined list items are not included in content", () =>
        {
            expect(Affecto.HtmlContent.wrapSorted(new Array<string>("first line", null, "second line"))).toBe("first line<br/>second line");
        });

        it("Empty string list items are not included in content", () =>
        {
            expect(Affecto.HtmlContent.wrapSorted(new Array<string>("first line", "", "second line"))).toBe("first line<br/>second line");
        });
    });
});