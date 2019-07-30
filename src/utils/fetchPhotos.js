const photoChecker = (results) => {
  return results.records[0].images.length
}

const photosCleaner = (photos) => {

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
