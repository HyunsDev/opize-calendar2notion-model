import { UserEntity, UserNotionProps, UserPlan, UserStatus } from '../entity';

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

    constructor(user: UserEntity) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.imageUrl = user.imageUrl;
        this.opizeId = user.opizeId;
        this.googleEmail = user.googleEmail;
        this.notionDatabaseId = user.notionDatabaseId;
        this.lastCalendarSync = user.lastCalendarSync;
        this.lastSyncStatus = user.lastSyncStatus;
        this.status = user.status;
        this.isConnected = user.isConnected;
        this.userPlan = user.userPlan;
        this.userTimeZone = user.userTimeZone;
        this.notionProps = user.parsedNotionProps;
        this.isWork = user.isWork;
        this.workStartedAt = user.workStartedAt;
        this.isAdmin = user.isAdmin;
        this.isPlanUnlimited = user.isPlanUnlimited;
        this.lastPaymentTime = user.lastPaymentTime?.toISOString();
        this.nextPaymentTime = user.nextPaymentTime?.toISOString();
        this.syncYear = user.syncYear;
        this.createdAt = user.createdAt.toISOString();
    }
}
