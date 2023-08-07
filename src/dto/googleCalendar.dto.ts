export class GoogleCalendarDto {
    id: string;
    summary: string;
    primary: boolean;
    accessRole: 'none' | 'freeBusyReader' | 'reader' | 'writer' | 'owner';
    backgroundColor: string;
    foregroundColor: string;

    constructor(calendar: GoogleCalendarDto) {
        this.id = calendar.id;
        this.summary = calendar.summary;
        this.primary = calendar.primary;
        this.accessRole = calendar.accessRole;
        this.backgroundColor = calendar.backgroundColor;
        this.foregroundColor = calendar.foregroundColor;
    }
}
