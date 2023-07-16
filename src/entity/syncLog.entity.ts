import {
    Column,
    Entity,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('sync_log')
export class SyncLogEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'mediumtext' })
    detail: string;

    @Column()
    status: 'SUCCESS' | 'FAIL' | 'WORKING' | 'CANCELED';

    @Column({ type: 'int', nullable: true })
    workingTime: number;

    @Column({ type: 'boolean', default: false })
    archive: boolean;

    @ManyToOne(() => UserEntity)
    user: UserEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    static create(data: {
        detail: string;
        workingTime: number;
        archive?: boolean;
        user: UserEntity;
    }) {
        const syncLog = new SyncLogEntity();
        syncLog.detail = data.detail;
        syncLog.workingTime = data.workingTime;
        syncLog.archive = data.archive;
        syncLog.user = data.user;

        return syncLog;
    }
}
