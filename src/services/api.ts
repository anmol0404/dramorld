import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch all movies
export const fetchMovies = async () => {
  const response = await api.get("/api/movies");
  return response.data;
};

// Fetch a single movie by ID
export const fetchMovieById = async (id: string) => {
  const response = await api.get(`/api/movies/${id}`);
  return response.data;
};

// Add a new movie
export const addMovie = async (movieData: any) => {
  const response = await api.post("/api/movies", movieData);
  return response.data;
};

// Update an existing movie
export const updateMovie = async (id: string, movieData: any) => {
  const response = await api.put(`/api/movies/${id}`, movieData);
  return response.data;
};

// Delete a movie
export const deleteMovie = async (id: string) => {
  const response = await api.delete(`/api/movies/${id}`);
  return response.data;
};

// Drama API Calls

// Fetch all dramas
export const fetchDramas = async () => {
  const response = await api.get("/api/dramas");
  return response.data;
};

// Fetch a single drama by ID
export const fetchDramaByShareId = async (id: string) => {
  const response = await api.get(`/api/dramas/${id}`);
  return response.data;
};

// Add a new drama
export const addDrama = async (dramaData: any) => {
  const response = await api.post("/api/dramas", dramaData);
  return response.data;
};

// Update an existing drama
export const updateDrama = async (id: string, dramaData: any) => {
  const response = await api.put(`/api/dramas/${id}`, dramaData);
  return response.data;
};

// Delete a drama
export const deleteDrama = async (id: string) => {
  const response = await api.delete(`/api/dramas/${id}`);
  return response.data;
};
