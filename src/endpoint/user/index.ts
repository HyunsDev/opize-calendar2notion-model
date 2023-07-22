import { Endpoint } from 'endpoint-client';
import {
    CalendarDto,
    GoogleCalendarDto,
    PaymentLogDto,
    UserDto,
} from '../../dto';

// POST /user
export type PostUserParameter = {
    token: string;
    redirectUrl: string;
};
export type PostUserResponse = {
    token: string;
};
export const postUser: Endpoint<PostUserParameter, PostUserResponse> = {
    method: 'POST',
    path: () => `/users`,
    bodyParams: ['token', 'redirectUrl'],
};

// GET /user/:userId
export type GetUserParameter = {
    userId: 'me' | number;
};
export type GetUserResponse = UserDto & {
    calendars: CalendarDto[];
    googleCalendars: GoogleCalendarDto[];
    paymentLogs: PaymentLogDto[];
};
export const getUser: Endpoint<GetUserParameter, GetUserResponse> = {
    method: 'GET',
    path: (e) => `/users/${e.userId}`,
    pathParams: ['userId'],
};

// PATCH /user/:userId
export type PatchUserParameter = {
    userId?: 'me' | number;
    name?: string;
    imageUrl?: string;
    isConnected?: boolean;
    userTimeZone?: string;
    isWork?: boolean;
};
export type PatchUserResponse = {};
export const patchUser: Endpoint<PatchUserParameter, PatchUserResponse> = {
    method: 'PATCH',
    path: (e) => `/users/${e.userId}`,
    bodyParams: ['imageUrl', 'isConnected', 'name', 'userTimeZone', 'isWork'],
    pathParams: ['userId'],
    queryParams: [],
};

// DELETE /user/:userId
export type DeleteUserParameter = {
    userId?: 'me' | number;
};
export type DeleteUserResponse = {
    success: false;
    message: string;
};
export const deleteUser: Endpoint<DeleteUserParameter, DeleteUserResponse> = {
    method: 'DELETE',
    path: (e) => `/users/${e.userId}`,
    bodyParams: [],
    pathParams: ['userId'],
    queryParams: [],
};

// POST /user/:userId/reset
export type PostUserResetParameter = {
    userId?: 'me' | number;
};
export type PostUserResetResponse =
    | {
          success: true;
      }
    | {
          success: false;
          message: string;
      };
export const postUserReset: Endpoint<
    PostUserResetParameter,
    PostUserResetResponse
> = {
    method: 'POST',
    path: (e) => `/users/${e.userId}/reset`,
    bodyParams: [],
    pathParams: ['userId'],
    queryParams: [],
};
