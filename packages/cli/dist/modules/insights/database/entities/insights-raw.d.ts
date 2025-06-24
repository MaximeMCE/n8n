import { BaseEntity } from '@n8n/typeorm';
import { TypeToNumber } from './insights-shared';
export declare const dbType: "postgresdb" | "mysqldb" | "sqlite" | "mariadb";
export declare class InsightsRaw extends BaseEntity {
    constructor();
    id: number;
    metaId: number;
    private type_;
    get type(): keyof typeof TypeToNumber;
    set type(value: keyof typeof TypeToNumber);
    value: number;
    timestamp: Date;
}
