/* Edits the image URL hosted on imgur to be accessible in this local host repo */
export function editImageUrl(imageURL) {
    if (imageURL.contains("imgur")) {
        return imageURL.replace('imgur.com/' , 'i.imgur.com/') + '.png';
    }
    else {
        return imageUrl;
    }
}