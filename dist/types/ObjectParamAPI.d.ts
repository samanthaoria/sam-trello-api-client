import { Configuration } from '../configuration';
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export interface DefaultApiAppControllerGetHelloRequest {
}
export declare class ObjectDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    appControllerGetHello(param?: DefaultApiAppControllerGetHelloRequest, options?: Configuration): Promise<void>;
}
