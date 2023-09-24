export type ErrorLogFrom =
    | 'GOOGLE CALENDAR'
    | 'NOTION'
    | 'SYNCBOT'
    | 'COMPLEX'
    | 'UNKNOWN';
export type ErrorLogLevel = 'NOTICE' | 'WARN' | 'ERROR' | 'CRIT' | 'EMERGENCY';
export type ErrorLogFinishWork = 'STOP' | 'RETRY';

export class ErrorLogDto {
    id: number;
    code: string;
    from: 'GOOGLE CALENDAR' | 'NOTION' | 'SYNCBOT' | 'COMPLEX' | 'UNKNOWN';
    description: string;
    detail?: string;
    stack?: string;
    level: 'NOTICE' | 'WARN' | 'ERROR' | 'CRIT' | 'EMERGENCY';
    archive: boolean;
    finishWork: 'STOP' | 'RETRY';
    userId: number;
    createdAt: Date;
}
