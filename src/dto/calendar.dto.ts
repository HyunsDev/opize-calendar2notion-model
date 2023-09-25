import { CalendarAccessRole, CalendarEntity, CalendarStatus } from '../entity';

export class CalendarDto {
    id: number;
    googleCalendarId: string;
    googleCalendarName: string;
    status: CalendarStatus;
    accessRole: CalendarAccessRole;
    notionPropertyId?: string;
    userId: number;
    createdAt: Date;

    static from(calendar: CalendarEntity) {
        const calendarDto = new CalendarDto();
        calendarDto.id = calendar.id;
        calendarDto.googleCalendarId = calendar.googleCalendarId;
        calendarDto.googleCalendarName = calendar.googleCalendarName;
        calendarDto.status = calendar.status;
        calendarDto.accessRole = calendar.accessRole;
        calendarDto.notionPropertyId = calendar.notionPropertyId;
        calendarDto.userId = calendar.userId;
        calendarDto.createdAt = calendar.createdAt;

        return calendarDto;
    }
}
