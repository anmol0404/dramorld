// lib/apiService.ts
import axios from "axios";

const BASE_URL = "/api/bot";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const handleResponse = (response: any) => response.data;

const handleError = (error: any) => {
  console.error("API error:", error);
  throw error;
};

export const fetchMovies = async () => {
  try {
    const response = await api.get(`${BASE_URL}/movies`);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

// export const saveHindiDrama = async (hindiDramaData: any) => {
//   try {
//     const response = await api.post(
//       `${BASE_URL}/hindi-drama/saveHindiDrama`,
//       hindiDramaData
//     );
//     return handleResponse(response);
//   } catch (error) {
//     handleError(error);
//   }
// };

// export const getHindiMessages = async (shareId: number) => {
//   try {
//     const response = await api.get(
//       `${BASE_URL}/hindi-drama/getHindiMessages?shareId=${shareId}`
//     );
//     return handleResponse(response);
//   } catch (error) {
//     handleError(error);
//   }
// };

// export const searchHindiDrama = async (criteria: any) => {
//   try {
//     const response = await api.post(
//       `${BASE_URL}/hindi-drama/searchHindiDrama`,
//       criteria
//     );
//     return handleResponse(response);
//   } catch (error) {
//     handleError(error);
//   }
// };
export const searchAIO = async (criteria: any) => {
  try {
    const response = await api.post(`${BASE_URL}/aio/search`, criteria);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const getAIOByShareId = async (shareId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/aio/${shareId}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
};
export const getAIO = async (
  page: number,
  pageSize: number,
  type: string,
  genre: string
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/aio?page=${page}&pageSize=${pageSize}&type=${type}&genre=${genre}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
};

export const saveOngoing = async (ongoingData: any) => {
  try {
    const response = await api.post(`${BASE_URL}/ongoing/save`, ongoingData);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const searchOngoing = async (criteria: any) => {
  try {
    const response = await api.post(`${BASE_URL}/ongoing/search`, criteria);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const saveUser = async (user: any) => {
  try {
    const response = await api.post(`${BASE_URL}/users/saveUser`, user);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const countUsers = async () => {
  try {
    const response = await api.get(`${BASE_URL}/users/countUsers`);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const getAllUserIds = async () => {
  try {
    const response = await api.get(`${BASE_URL}/users/getUserIds`);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const isUserExist = async (userId: string) => {
  try {
    const response = await api.get(
      `${BASE_URL}/users/isUserExist?userId=${userId}`
    );
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

const apiService = {
  fetchMovies,
  // saveHindiDrama,
  // getHindiMessages,
  // searchHindiDrama,
  saveOngoing,
  searchOngoing,
  saveUser,
  countUsers,
  getAllUserIds,
  isUserExist,
};

export default apiService;
