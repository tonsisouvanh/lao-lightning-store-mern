export const extractImageId = (imageUrl) => {
  if (imageUrl) {
    const urlParts = imageUrl.split("/");
    const filenameWithExtension =
      urlParts[urlParts.length - 3] +
      "/" +
      urlParts[urlParts.length - 2] +
      "/" +
      urlParts[urlParts.length - 1];
    return filenameWithExtension.replace(/\.[^/.]+$/, "");
  }
  return "";
};
