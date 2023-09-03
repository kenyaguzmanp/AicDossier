import { RetrieveArtworkDetailEndpointParams, RetrieveArtworkImageEndpointParams, RetrieveArtworksEndpointParams } from "./interfaces";

const ARTWORKS_LIST_ENDPOINT_FIELDS = 'id,title,image_id,thumbnail,artist_id,artist_title,artist_display,has_not_been_viewed_much,gallery_id,place_of_origin,term_titles,artworkStyle';

export default {
    retrieveArtworks: ({ page = 1, limit = 4 }: RetrieveArtworksEndpointParams) => `artworks?page=${page}&limit=${limit}&fields=${ARTWORKS_LIST_ENDPOINT_FIELDS}`,
    retrieveArtworkImage: ({ iiifUrl, imageId, size = 200, format = 'full', extension = 'jpg' }: RetrieveArtworkImageEndpointParams) => `/${imageId}/${format}/${size},/0/default.${extension}`,
    retrieveArtworkDetail: ({ artworkId }: RetrieveArtworkDetailEndpointParams) => `artworks/${artworkId}`,
}