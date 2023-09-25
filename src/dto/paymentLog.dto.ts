import { PaymentLogEntity, UserPlan } from '../entity';

export class PaymentLogDto {
    id: number;
    plan: UserPlan;
    paymentKind: string;
    price: number;
    priceKind: string;
    paymentTime: string;
    months: string;
    expirationTime: string;
    memo: string;
    userId: number;
    createdAt: string;

    constructor(paymentLog: PaymentLogEntity) {
        this.id = paymentLog.id;
        this.plan = paymentLog.plan;
        this.paymentKind = paymentLog.paymentKind;
        this.price = paymentLog.price;
        this.priceKind = paymentLog.priceKind;
        this.paymentTime = paymentLog.paymentTime.toISOString();
        this.months = paymentLog.months;
        this.expirationTime = paymentLog.expirationTime.toISOString();
        this.memo = paymentLog.memo;
        this.userId = paymentLog.userId;
        this.createdAt = paymentLog.createdAt.toISOString();
    }
}
