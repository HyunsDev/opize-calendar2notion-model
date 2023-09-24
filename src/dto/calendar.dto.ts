export type CalendarStatus = 'DISCONNECTED' | 'PENDING' | 'CONNECTED';

export type CalendarAccessRole =
    | 'none'
    | 'freeBusyReader'
    | 'reader'
    | 'writer'
    | 'owner';
export class CalendarDto {
    id: number;
    googleCalendarId: string;
    googleCalendarName: string;
    status: CalendarStatus;
    accessRole: CalendarAccessRole;
    notionPropertyId?: string;
    userId: number;
    createdAt: Date;
}
