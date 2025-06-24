import convict from 'convict';
declare const config: convict.Config<{
    executions: {
        mode: string;
        concurrency: {
            productionLimit: number;
            evaluationLimit: number;
        };
        timeout: number;
        maxTimeout: number;
        saveDataOnError: string;
        saveDataOnSuccess: string;
        saveExecutionProgress: boolean;
        saveDataManualExecutions: boolean;
        queueRecovery: {
            interval: number;
            batchSize: number;
        };
    };
    ssl_key: string;
    ssl_cert: string;
    editorBaseUrl: string;
    userManagement: {
        jwtSecret: string;
        jwtSessionDurationHours: number;
        jwtRefreshTimeoutHours: number;
        isInstanceOwnerSetUp: boolean;
        authenticationMethod: string;
    };
    externalFrontendHooksUrls: string;
    sso: {
        justInTimeProvisioning: boolean;
        redirectLoginToSso: boolean;
        saml: {
            loginEnabled: boolean;
            loginLabel: string;
        };
        oidc: {
            loginEnabled: boolean;
        };
        ldap: {
            loginEnabled: boolean;
            loginLabel: string;
        };
    };
    redis: {
        prefix: string;
    };
    endpoints: {
        rest: string;
    };
    ai: {
        enabled: boolean;
    };
}>;
export default config;
export type Config = typeof config;
