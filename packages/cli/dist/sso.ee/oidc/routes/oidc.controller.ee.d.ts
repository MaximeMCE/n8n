import { OidcConfigDto } from '@n8n/api-types';
import { Request, Response } from 'express';
import { AuthService } from '../../../auth/auth.service';
import { AuthenticatedRequest } from '../../../requests';
import { UrlService } from '../../../services/url.service';
import { OidcService } from '../oidc.service.ee';
export declare class OidcController {
    private readonly oidcService;
    private readonly authService;
    private readonly urlService;
    constructor(oidcService: OidcService, authService: AuthService, urlService: UrlService);
    retrieveConfiguration(_req: AuthenticatedRequest): Promise<Pick<OidcConfigDto, "loginEnabled" | "clientId" | "clientSecret"> & {
        discoveryEndpoint: URL;
    }>;
    saveConfiguration(_req: AuthenticatedRequest, _res: Response, payload: OidcConfigDto): Promise<OidcConfigDto>;
    redirectToAuthProvider(_req: Request, res: Response): Promise<void>;
    callbackHandler(req: Request, res: Response): Promise<void>;
}
