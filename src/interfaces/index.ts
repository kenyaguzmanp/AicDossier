export type ThumbnailDetail = {
    id: string;
    width: number;
    height: number;
    alt_text: string;
    low_quality_image: string;
}

export type Artist = {
    artist_id: string;
    artist_title: string;
    artist_display: string;
}

export type ArtworkStyle = {
    style_id: string;
    style_title: string;
}

export type Artwork =  {
    id: string;
    title: string;
    image_id: string;
    thumbnail:ThumbnailDetail;
    artist: Artist;
    has_not_been_viewed_much?: boolean;
    gallery_id?: string;
    place_of_origin?: string;
    term_titles?: string[];
    artworkStyle?: ArtworkStyle;
}

export type ApiConfigForArtworksEndpoint = {
    iiif_url: string,
    website_url: string,
}

export type RetrieveArtworksApiResponse = {
    data: Artwork[],
    config: ApiConfigForArtworksEndpoint,
}