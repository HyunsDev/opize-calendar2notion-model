import { UserPlan } from './user.dto';

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
}
