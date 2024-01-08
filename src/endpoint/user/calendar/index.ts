import { Endpoint } from 'endpoint-client';

// POST /user/:userId/calendar
export type PostUserCalendarParameter = {
    userId: 'me' | number;
    googleCalendarId: string;
};
export type PostUserCalendarResponse = {};
export const postUserCalendar: Endpoint<
    PostUserCalendarParameter,
    PostUserCalendarResponse
> = {
    method: 'POST',
    path: (e) => `/users/${e.userId}/calendar`,
    bodyParams: ['googleCalendarId'],
    pathParams: ['userId'],
    queryParams: [],
};

// DELETE /user/:userId/calendar
export type DeleteUserCalendarParameter = {
    userId: 'me' | number;
    calendarId: string;
};
export type DeleteUserCalendarResponse = {
    code?: 'user_is_work';
};
export const deleteUserCalendar: Endpoint<
    DeleteUserCalendarParameter,
    DeleteUserCalendarResponse
> = {
    method: 'DELETE',
    path: (e) => `/users/${e.userId}/calendar/${e.calendarId}`,
    bodyParams: [],
    pathParams: ['userId', 'calendarId'],
    queryParams: [],
};

// POST /user/:userId/calendar/:calendarId/rename
export type PostUserCalendarRenameParameter = {
    userId: 'me' | number;
    calendarId: string;
};
export type PostUserCalendarRenameResponse = {
    code: 'already_same_name' | 'calendar_name_changed';
};
export const postUserCalendarRename: Endpoint<
    PostUserCalendarRenameParameter,
    PostUserCalendarRenameResponse
> = {
    method: 'POST',
    path: (e) => `/users/${e.userId}/calendar/${e.calendarId}/rename`,
    bodyParams: [],
    pathParams: ['userId', 'calendarId'],
    queryParams: [],
};
