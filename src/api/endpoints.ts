import { RetrieveArtworkDetailEndpointParams, RetrieveArtworkImageEndpointParams, RetrieveArtworksEndpointParams } from "./interfaces";

export default {
    retrieveArtworks: ({ page = 1, limit = 4 }: RetrieveArtworksEndpointParams) => `artworks?page=${page}&limit=${limit}`,
    retrieveArtworkImage: ({ iiifUrl, imageId, size = 200, format = 'full', extension = 'jpg' }: RetrieveArtworkImageEndpointParams) => `/${imageId}/${format}/${size},/0/default.${extension}`,
    retrieveArtworkDetail: ({ artworkId }: RetrieveArtworkDetailEndpointParams) => `artworks/${artworkId}`,
}