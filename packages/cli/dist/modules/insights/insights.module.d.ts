import type { ModuleInterface } from '@n8n/decorators';
import './insights.controller';
import { InsightsByPeriod } from './database/entities/insights-by-period';
import { InsightsMetadata } from './database/entities/insights-metadata';
import { InsightsRaw } from './database/entities/insights-raw';
export declare class InsightsModule implements ModuleInterface {
    init(): Promise<void>;
    entities(): (typeof InsightsMetadata | typeof InsightsRaw | typeof InsightsByPeriod)[];
    settings(): Promise<{
        summary: boolean;
        dashboard: boolean;
        dateRanges: {
            key: "day" | "week" | "2weeks" | "month" | "quarter" | "6months" | "year";
            licensed: boolean;
            granularity: "hour" | "day" | "week";
        }[];
    }>;
}
