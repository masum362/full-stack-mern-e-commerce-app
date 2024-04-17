import axios from "axios";

const commonFileApi = async (image) => {
  const response = await axios.post(
    `https://api.imgbb.com/1/upload?expiration=63072000&key=${
      import.meta.env.VITE_IMGBB_API_KEY
    }`,
    image
  );
  try {
    return response.data.data.url;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

const commonPostApi = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/register`,
    data,
    { withCreadentials: true }
  );

  try {
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const commonGetApi = async (url) => {
  const response = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/${url}`,
    { withCreadentials: true }
  );

  try {
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const commonPutApi = async (url, data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/${url}`,
    data,
    { withCreadentials: true }
  );

  try {
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { commonFileApi, commonPostApi, commonGetApi, commonPutApi };
