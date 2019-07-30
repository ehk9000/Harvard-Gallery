const photoChecker = (results) => {
  return results.records[0].images.length
}

const photosCleaner = (photos) => {
  const photo = photos[0];
  const finalPhoto = {
    id: photo.objectid,
    image: photo.baseimageurl,
    artist: photo.people ? photo.people[0].name : "Unknown",
    title: photo.title,
    century: photo.century,
    dated: photo.dated,
    culture: photo.culture,
    technique: photo.technique,
  }
  return finalPhoto
};

export const fetchPhotos = async (pageNum) => {
  const url = `https://api.harvardartmuseums.org/object?apikey=${process.env.HARVARD_MUSEUM_API_KEY}&classification=Photographs&hasimage=1&page=${pageNum}`
  try {
    const results =  await fetch (url);
    if (!photoChecker(results)) {
      fetchPhotos(pageNum + 1)
    } else {
      photosCleaner(results)
    }
  }
  catch(error) {
    console.log(error)
  }
};
