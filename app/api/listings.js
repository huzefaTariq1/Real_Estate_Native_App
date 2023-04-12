import client from "./client";

const endpoint = "api/property/filter/type?search=sale";

const userEndPoint = "/api/property/user";

const getListings = () => client.get(endpoint);

const getUserListing = () => client.get(userEndPoint);

const addlisting = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("catagery", listing.selected);
  data.append("realStateType", listing.valuere);
  data.append("title", listing.title);
  data.append("description", listing.description);
  data.append("bedroom", listing.bedroom);
  //data.append('washroom', listing.washroom);
  data.append("carparking", listing.carParking);
  data.append("washroom", listing.washroom);
  data.append("kitchen", listing.kitchen);
  data.append("floorArea", listing.floorArea);
  data.append("tapAvailable", listing.tap);
  data.append("aircondition", listing.airCondition);
  data.append("quarterAvailble", listing.quarterAvailable);
  data.append("price", listing.price);
  data.append("fullAddress", listing.fullAddress);
  data.append("houseno", listing.houseNum);
  data.append("streetno", listing.streetName);

  data.append("pictures", {
    uri: listing.cover,
    type: "image/jepg",
    name: "listingcover.jpg",
  });

  data.append("pictures", {
    uri: listing.images,
    type: "image/jpeg",
    name: "listingimage.jpg",
  });
  data.append("pictures", {
    uri: listing.images1,
    type: "image/jepg",
    name: "listingimage1.jpg",
  });
  data.append("pictures", {
    uri: listing.images2,
    type: "image/jepg",
    name: "listingimage2.jpg",
  });
  data.append("pictures", {
    uri: listing.images3,
    type: "image/jepg",
    name: "listingimage3.jpg",
  });
  data.append("pictures", {
    uri: listing.images4,
    type: "image/jepg",
    name: "listingimage4.jpg",
  });
  data.append("pictures", {
    uri: listing.images5,
    type: "image/jepg",
    name: "listingimage5.jpg",
  });
  data.append("pictures", {
    uri: listing.doc,
    type: "image/jepg",
    name: "listingdoc.jpg",
  });
  data.append("pictures", {
    uri: listing.videos,
    type: "image/jepg",
    name: "listingvideos.jpg",
  });


  return client.post("/api/property", data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

const addUser = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("type", listing.type);
  data.append("firstname", listing.name);
  data.append("lastname", listing.name2);
  data.append("phone", listing.phone);
  data.append("email", listing.email);
  //data.append('washroom', listing.washroom);
  data.append("password", listing.password);

  if (listing.img1) {
    data.append("img", {
      uri: listing.img1,
      type: "image/jepg",
      name: "listingimg1.jpg",
    });
  }

  return client.post("/api/user", data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  addlisting,
  getUserListing,
  addUser,
};
