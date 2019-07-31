// // const photoChecker = (results) => {
// //   if (results.records[0].images.length) {
// //     return photosCleaner(results)
// //   }
// // }

// // const photosCleaner = (photos) => {
// //   const images = [];
// //   photos.records.map(photo => {
// //     let finalPhoto = {};
// //     if (photo.images.length) {
//       finalPhoto = {
//         id: photo.objectid,
//         image: photo.baseimageurl,
//         artist: photo.people ? photo.people[0].name : "Unknown",
//         title: photo.title,
//         century: photo.century,
//         dated: photo.dated,
//         culture: photo.culture,
//         technique: photo.technique,
//         }
//       }
// //       return images.push(finalPhoto)
// //     });
// //     return images 
// //   };

// export const fetchPhotos = async (pageNumber) => {
//   const url = `https://api.harvardartmuseums.org/object?apikey=${process.env.HARVARD_MUSEUM_API_KEY}&classification=Photographs&hasimage=1&page=${pageNumber}`;
//   try {
//     const results =  await fetch (url);

//     return photosCleaner(results);
//   }
//   catch(error) {
//     console.log(error)
//   }
// };
