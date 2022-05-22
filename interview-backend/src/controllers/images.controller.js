const catchAsync = require('../utils/catchAsync');
const fetchWrapper = require("../utils/fetch-wrapper")
const config = require("../config/app")



const getImages = catchAsync(async (req, res) => {

    const apiUrls = Object.values(config.EXTERNAL_APIS)
    const promises = apiUrls.map(url => fetchWrapper.fetcher(url, "GET"))
    const [photos, images] = await Promise.all(promises);
    const imagesAndPhotos = photos[0].concat(images[0])
    const allImages = imagesAndPhotos.map((img,idx) => {
        const { id, albumId, title, url, path } = img;
        const imageUrl = url || path;
        return { id:id+idx, albumId, title, imageUrl }
    })
    res.send(allImages);

});

module.exports = {
    getImages
};