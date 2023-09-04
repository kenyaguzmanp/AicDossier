import { apiGet } from ".";
import { RetrieveArtworksApiResponse } from "../interfaces";
import { selectedArtwork, setArtworks, setHasErrorArtworkDetail, setIsLoadingArtworkDetail } from "../store/slices/artworksSlice";
import { store } from "../store/store";
import endpoints from "./endpoints";
import { callWrappedServiceDebounced } from "./enhancedServices";
import { RetrieveArtworksEndpointParams } from "./interfaces";

const retrieveArtworks = (serviceParams: RetrieveArtworksEndpointParams) =>
  apiGet({
    endpoint: endpoints.retrieveArtworks(serviceParams),
    fakeService: serviceParams?.fakeService
  });

const retrieveArtworkDetail = ({ artworkId, fakeService = false }: { artworkId: string, fakeService?: boolean }) =>
  apiGet({
    endpoint: endpoints.retrieveArtworkDetail({ artworkId }),
    fakeService,
  });

export const enhancedFetchArtworks = ({
    serviceParams,
    onPreRequest,
    onSuccess,
    onError,
    setLoadingState,
}) => {
    const dispatch = store.dispatch;

    return callWrappedServiceDebounced({
        service: () => retrieveArtworks(serviceParams),
        serviceParams,
        onPreRequest,
        onSuccess: (data: RetrieveArtworksApiResponse) => {
            dispatch(setArtworks(data));
            if(onSuccess) {
                onSuccess();
            }
        },
        onError: (error) => {
            console.log("🚀 ~ file: services.ts:42 ~ error:", error)
        },
        setLoadingState,
    });
};

export const enhancedFetchArtworkDetail = ({
    serviceParams,
    onPreRequest,
    onSuccess,
    onError,
    setLoadingState,
}) => {
    const dispatch = store.dispatch;
    return callWrappedServiceDebounced({
        service: () => retrieveArtworkDetail(serviceParams),
        serviceParams,
        onPreRequest: () => {
            dispatch(setIsLoadingArtworkDetail(true))
        },
        onSuccess: (data) => {
            dispatch(selectedArtwork(data.data));
        },
        onError: (error) => {
            console.log("🚀 ~ file: services.ts:65 ~ error:", error)
            dispatch(setHasErrorArtworkDetail(true))
        },
        setLoadingState,
    });
};