import { apiGet } from ".";
import { RetrieveArtworksApiResponse } from "../interfaces";
import { selectedArtwork, setArtworks } from "../store/slices/artworksSlice";
import { store } from "../store/store";
import endpoints from "./endpoints";
import { callWrappedServiceDebounced } from "./enhancedServices";
import { RetrieveArtworksEndpointParams } from "./interfaces";

const retrieveArtworks = (serviceParams: RetrieveArtworksEndpointParams) =>
  apiGet({
    endpoint: endpoints.retrieveArtworks(serviceParams),
  });

const retrieveArtworkDetail = ({ artworkId }: { artworkId: string }) =>
  apiGet({
    endpoint: endpoints.retrieveArtworkDetail({ artworkId }),
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
        onPreRequest,
        onSuccess: (data) => {
            dispatch(selectedArtwork(data.data));
        },
        onError: (error) => {
            console.log("🚀 ~ file: services.ts:65 ~ error:", error)
        },
        setLoadingState,
    });
};