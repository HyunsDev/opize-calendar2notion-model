import { Endpoint } from 'endpoint-client';

// GET /migrate/v1/check
export type MigrateV1CheckUser = {
    id: number;
    email: string;
    imageUrl: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    status: string;
    userPlan: string;
    notionDatabaseId: string;
    calendars: {
        id: number;
        googleCalendarId: string;
        googleCalendarName: string;
        accessRole: string;
    }[];
};

export type getMigrateV1CheckParameter = {
    userId: number | 'me';
};
export type getMigrateV1CheckResponse =
    | {
          canMigrate: false;
          reason: string;
      }
    | {
          canMigrate: true;
          user: MigrateV1CheckUser;
      };
export const getMigrateV1Check: Endpoint<
    getMigrateV1CheckParameter,
    getMigrateV1CheckResponse
> = {
    method: 'GET',
    path: () => '/migrations/v1/check',
    bodyParams: [],
    pathParams: [],
    queryParams: ['userId'],
};

// POST /migrate/v1/account-migrate
export type postMigrateV1AccountMigrateParameter = {
    userId: number | 'me';
};
export type postMigrateV1AccountMigrateResponse =
    | {
          success: true;
          canCalendarMigration: boolean;
          userPlan: string;
          paymentLogLength: number;
      }
    | {
          success: false;
          reason: 'ALREADY_MIGRATED';
      };
export const postMigrateV1AccountMigrate: Endpoint<
    postMigrateV1AccountMigrateParameter,
    postMigrateV1AccountMigrateResponse
> = {
    method: 'POST',
    path: () => '/migrations/v1/account-migrate',
    bodyParams: [],
    pathParams: [],
    queryParams: ['userId'],
};

// POST /migrate/v1/calendar-migrate
export type postMigrateV1CalendarMigrateParameter = {
    userId: number | 'me';
};
export type postMigrateV1CalendarMigrateResponse =
    | {
          success: true;
      }
    | {
          success: false;
          reason: 'ALREADY_MIGRATED';
      };
export const postMigrateV1CalendarMigrate: Endpoint<
    postMigrateV1CalendarMigrateParameter,
    postMigrateV1CalendarMigrateResponse
> = {
    method: 'POST',
    path: () => '/migrations/v1/calendar-migrate',
    bodyParams: [],
    pathParams: [],
    queryParams: ['userId'],
};
