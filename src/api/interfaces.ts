import noop from 'lodash';

export type DispatchType<A> = (value: A) => void;
export type SetStateActionType<S> = S | ((prevState: S) => S);
export type DispatchActionType<S> = DispatchType<SetStateActionType<S>>;
export type Nullable<T> = T | null;

export interface CallWrappedServiceParams {
    service: (params: any) => void | typeof noop;
    serviceParams: any; // TODO: Map the params
    onPreRequest: () => void | typeof noop;
    onSuccess: (response?: any) => void | typeof noop; // TODO: Map the responses;
    onError: (response?: any) => void | typeof noop; // TODO: Map the responses
}

export interface WrappedFunctionWithLoadingServiceParams {
    service: (params: any) => Promise<any> | typeof noop; // TODO: Check
    serviceParams: any; // TODO: Map the params
    setLoadingState: ((param?: boolean) => void) | typeof noop;
    onPreRequest: () => void | typeof noop;
    onSuccess: ((response?: any) => () => void) | typeof noop | ((response: any) => void); // TODO: Map the responses
    onError: (response?: any) => void | typeof noop; // TODO: Map the responses
}

export type RetrieveArtworksEndpointParams = {
    page?: number;
    limit?: number;
    fakeService?: boolean;
}

export type RetrieveArtworkImageEndpointParams = { 
    iiifUrl: string,
    imageId: string,
    size?: number,
    format?: string,
    extension?: string, 
};

export type RetrieveArtworkDetailEndpointParams = {
    artworkId: string;
}
