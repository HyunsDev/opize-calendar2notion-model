import { ErrorLogEntity } from '../entity';

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

    static fromEntity(entity: ErrorLogEntity): ErrorLogDto {
        const dto = new ErrorLogDto();
        dto.id = entity.id;
        dto.code = entity.code;
        dto.from = entity.from;
        dto.description = entity.description;
        dto.detail = entity.detail;
        dto.stack = entity.stack;
        dto.level = entity.level;
        dto.archive = entity.archive;
        dto.finishWork = entity.finishWork;
        dto.userId = entity.userId;
        dto.createdAt = entity.createdAt;

        return dto;
    }
}
