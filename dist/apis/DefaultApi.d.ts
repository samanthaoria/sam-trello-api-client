import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
export declare class DefaultApiRequestFactory extends BaseAPIRequestFactory {
    appControllerGetHello(_options?: Configuration): Promise<RequestContext>;
}
export declare class DefaultApiResponseProcessor {
    appControllerGetHello(response: ResponseContext): Promise<void>;
}
