import { apiGet } from ".";
import { RetrieveArtworksApiResponse } from "../interfaces";
import { setArtworks } from "../store/slices/artworksSlice";
import { store } from "../store/store";
import endpoints from "./endpoints";
import { callWrappedServiceDebounced } from "./enhancedServices";

const retrieveArtworks = () =>
  apiGet({
    endpoint: endpoints.retrieveArtworks({}),
  });


const retrieveArtworkImage = ({ iiifUrl, imageId, size, format, extension }) =>
  apiGet({
    baseUrl: iiifUrl,
    endpoint: endpoints.retrieveArtworkImage({ iiifUrl, imageId, size, format, extension }),
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
        service: () => retrieveArtworks(),
        serviceParams,
        onPreRequest,
        onSuccess: (data: RetrieveArtworksApiResponse) => {
            dispatch(setArtworks(data));
        },
        onError: (error) => {
            console.log("🚀 ~ file: services.ts:25 ~ error:", error)
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
    return callWrappedServiceDebounced({
        service: () => retrieveArtworkImage(serviceParams),
        serviceParams,
        onPreRequest,
        onSuccess: (data) => {
            console.log("🚀 ~ file: services.ts:22 ~ data:", data)
        },
        onError: (error) => {
            console.log("🚀 ~ file: services.ts:25 ~ error:", error)
        },
        setLoadingState,
    });
};