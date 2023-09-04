const BASE_URL_FOR_IMAGES = 'https://www.artic.edu/iiif/2';

export const buildArtworkImageUrl = ({ baseURL = BASE_URL_FOR_IMAGES, imageId, size = 200, format = 'full', extension = 'jpg' }) => `${baseURL}/${imageId}/${format}/${size},/0/default.${extension}`;

export const getThumbnailImageUrl = (imageId) => buildArtworkImageUrl({ imageId });

export const getFullImageUrl = (imageId) => buildArtworkImageUrl({ imageId, size: 800 });