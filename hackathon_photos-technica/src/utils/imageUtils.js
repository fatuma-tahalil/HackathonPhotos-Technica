import iconImage from '../assets/icon.png'

/* Edits the image URL hosted on imgur to be accessible in this local host repo */
export function editImageUrl(imageURL) {
    if (!imageURL) return iconImage;
    
    console.log(imageURL.replace('imgur.com/' , 'i.imgur.com/') + '.png');
    return imageURL.replace('imgur.com/' , 'i.imgur.com/') + '.png';
}