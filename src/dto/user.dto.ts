export type UserStatus =
    | 'FIRST'
    | 'GOOGLE_SET'
    | 'NOTION_API_SET'
    | 'NOTION_SET'
    | 'FINISHED';

export type UserPlan = 'FREE' | 'PRO' | 'SPONSOR';

export type UserNotionProps = {
    title: string;
    calendar: string;
    date: string;
    delete: string;
    link?: string;
    description?: string;
    location?: string;
    last_edited_by?: string;
};

export class UserDto {
    id: number;
    name: string;
    email: string;
    imageUrl: string;
    opizeId: number;
    googleEmail: string;
    notionDatabaseId: string;
    lastCalendarSync: Date;
    lastSyncStatus: string;
    status: UserStatus;
    isConnected: boolean;
    userPlan: UserPlan;
    userTimeZone: string;
    notionProps: UserNotionProps;
    isWork: boolean;
    workStartedAt: Date;
    isAdmin: boolean;
    isPlanUnlimited: boolean;
    lastPaymentTime: string;
    nextPaymentTime: string;
    syncYear: number;
    createdAt: string;
}
