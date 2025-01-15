export interface Drama {
  shareId: number;
  messageIds: number[];
  title: string;
  type: "Anime" | "Movie" | "Drama" | "Series" | "Manga" | "Other";
  detail: string;
  posterUrl: string;
  shortUrl: string;
  director: string;
  screenwriter: string;
  aired: string;
  duration: string;
  totalEpisodes: number;
  tags: string;
  screenshots: string[];
  quality: string[];
  relatedContent: string[];
  genres: string[];
  rating: number;
  year: number;
  status: "Ongoing" | "Completed" | "Upcoming";
  trailerUrl: string;
  languages: string[];
  subtitles: string[];
}
