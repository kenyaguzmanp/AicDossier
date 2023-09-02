import {debounce, noop} from 'lodash';

import { CallWrappedServiceParams, WrappedFunctionWithLoadingServiceParams } from './interfaces';
import { DEBOUNCE_PROPS_DEFAULT, DEBOUNCE_TIMER_MIN } from '../static/constants/ServicesConstants';

// TODO: Type errors
export const callWrappedService = ({
    service,
    serviceParams,
    onPreRequest = noop,
    onSuccess = noop,
    onError = noop,
}: CallWrappedServiceParams) => {
    onPreRequest();
    return service(serviceParams)
        .then(onSuccess, onError)
        .catch((error: any) => {
            return onError(error);
        });
};

// TODO: Type errors
export const callWrappedServiceWithLoading = ({
    service,
    serviceParams,
    onPreRequest = noop,
    setLoadingState = noop,
    onSuccess = noop,
    onError = noop,
}: WrappedFunctionWithLoadingServiceParams) => {
    setLoadingState(true);
    return callWrappedService({
        service,
        serviceParams,
        onPreRequest,
        onSuccess: (response) => {
            setLoadingState(false);
            return onSuccess(response);
        },
        onError: (error) => {
            setLoadingState(false);
            return onError(error);
        },
    });
};

export const callWrappedServiceDebounced = debounce(
    async ({
        service,
        serviceParams,
        onPreRequest,
        onSuccess,
        onError,
        setLoadingState,
    }: WrappedFunctionWithLoadingServiceParams) => {
        return await callWrappedServiceWithLoading({
            service,
            serviceParams,
            setLoadingState,
            onPreRequest,
            onSuccess,
            onError,
        });
    },
    DEBOUNCE_TIMER_MIN,
    DEBOUNCE_PROPS_DEFAULT
);
