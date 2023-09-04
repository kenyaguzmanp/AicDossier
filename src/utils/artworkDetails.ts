const BASE_URL_FOR_IMAGES = 'https://www.artic.edu/iiif/2';
const THUMBMNAIL_IMAGE_SIZE = 200;
const DEFAULT_IMAGE_FORMAT = 'full';
const DEFAULT_IMAGE_EXTENSION = 'jpg';
const FULL_IMAGE_SIZE = 843;

export const buildArtworkImageUrl = ({ baseURL = BASE_URL_FOR_IMAGES, imageId, size = THUMBMNAIL_IMAGE_SIZE, format = DEFAULT_IMAGE_FORMAT, extension =  DEFAULT_IMAGE_EXTENSION}) => `${baseURL}/${imageId}/${format}/${size},/0/default.${extension}`;

export const getThumbnailImageUrl = (imageId) => buildArtworkImageUrl({ imageId });

export const getFullImageUrl = (imageId) => buildArtworkImageUrl({ imageId, size: FULL_IMAGE_SIZE });