export interface Calendar {
    subject: string;
    start: { dateTime: string, timeZone: string };
    end: { dateTime: string, timeZone: string };
}
