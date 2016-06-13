"use strict";

module Affecto
{
    export class DateConverter
    {
        public static toDateTime(dateTimeWithoutTimeZone: string): Date
        {
            var dateTimeSeparator: string = "T";
            var dateSeparator: string = "-";
            var timeSeparator: string = ":";

            if (dateTimeWithoutTimeZone == null
                || dateTimeWithoutTimeZone.indexOf(dateTimeSeparator) === -1
                || dateTimeWithoutTimeZone.indexOf(dateSeparator) === -1
                || dateTimeWithoutTimeZone.indexOf(timeSeparator) === -1)
            {
                return null;
            }

            var dateAndTime: Array<string> = dateTimeWithoutTimeZone.split(dateTimeSeparator);
            var dateParts: Array<string> = dateAndTime[0].split(dateSeparator);
            var timeParts: Array<string> = dateAndTime[1].split(timeSeparator);

            if (!(NumberValidator.containsOnlyNumbers(dateParts) && NumberValidator.containsOnlyNumbers(timeParts)))
            {
                return null;
            }

            return new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]), parseInt(timeParts[0]), parseInt(timeParts[1]),
                parseInt(timeParts[2]));
        }

        public static toDate(finnishDate: string): Date
        {
            try
            {
                if (!DateValidator.isFinnishDate(finnishDate))
                {
                    return null;
                }
                var dateParts: Array<string> = finnishDate.split(".");
                return new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
            }
            catch (e)
            {
                return new Date(Date.parse(finnishDate));
            }
        }

        /**
         * Returns string in format yyyy-MM-dd (for example 2016-06-10)
         */
        public static toISO8601Date(date: Date | string): string
        {
            return this.doConversion(date, (dateObject: Date) =>
            {
                return this.getISO8601Date(dateObject);
            });
        }

        /**
         * Returns string in format yyyy-MM-ddThh:mm:ss without timezone (for example 2016-06-10T06:40:37)
         */
        public static toISO8601DateTime(date: Date | string): string
        {
            return this.doConversion(date, (dateObject: Date) =>
            {
                return this.getISO8601DateTime(dateObject);
            });
        }

        public static toFinnishDate(date: Date | string): string
        {
            return this.doConversion(date, (dateObject: Date) =>
            {
                return this.getFinnishDate(dateObject);
            });
        }

        public static toFinnishDateTime(dateTime: Date | string): string
        {
            return this.doConversion(dateTime, (dateObject: Date) =>
            {
                return this.getFinnishDate(dateObject) + " " + this.getTime(dateObject);
            });
        }

        private static doConversion(input: any, conversionFunction: (date: Date) => string): string
        {
            if (input == null || input === "")
            {
                return null;
            }

            var date: Date;
            if (input instanceof Date)
            {
                date = new Date(Date.UTC(input.getFullYear(), input.getMonth(), input.getDate(),
                    input.getHours(), input.getMinutes(), input.getSeconds(), input.getMilliseconds()));
            }
            else if (typeof input === "string")
            {
                date = new Date(input as string);
            }
            else
            {
                return null;
            }

            if (!isNaN(date.getDate()))
            {
                return conversionFunction(date);
            }

            return null;
        }

        private static getISO8601Date(date: Date): string
        {
            return date.getUTCFullYear() + "-" + this.leftPadWithZero(this.getMonth(date)) + "-" + this.leftPadWithZero(date.getUTCDate());
        }

        private static getISO8601DateTime(date: Date): string
        {
            return this.getISO8601Date(date) + "T" + this.getTime(date);
        }

        private static getFinnishDate(date: Date): string
        {
            return date.getUTCDate() + "." + this.getMonth(date) + "." + date.getUTCFullYear();
        }

        private static getMonth(date: Date): number
        {
            return date.getUTCMonth() + 1;
        }

        private static getTime(date: Date): string
        {
            return this.leftPadWithZero(date.getUTCHours()) + ":" + this.leftPadWithZero(date.getUTCMinutes()) + ":" + this.leftPadWithZero(date.getUTCSeconds());
        }

        private static leftPadWithZero(value: number): string
        {
            if (value < 10)
            {
                return "0" + value;
            }
            return value.toString();
        }
    }
}