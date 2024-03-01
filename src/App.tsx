import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./ui/PageNotFound";
import NowPlayingMovies from "./features/movies/NowPlayingMovies";
import PopularMovies from "./features/movies/PopularMovies";
import UpcomingMovies from "./features/movies/UpcomingMovies";
import TopRatedMovies from "./features/movies/TopRatedMovies";
import AiringTodayTVShows from "./features/tv-shows/AiringTodayTVShows";
import PopularTVShows from "./features/tv-shows/PopularTVShows";
import OnTVShows from "./features/tv-shows/OnTVShows";
import TopRatedTVShows from "./features/tv-shows/TopRatedTVShows";
import People from "./pages/People";
import MovieDetail from "./features/movies/MovieDetail";
import TVShowDetail from "./features/tv-shows/TVShowDetail";
import PeopleDetail from "./features/people/PeopleDetail";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "movies/now-playing",
        element: <NowPlayingMovies />,
      },
      {
        path: "movies/popular",
        element: <PopularMovies />,
      },
      {
        path: "movies/upcoming",
        element: <UpcomingMovies />,
      },
      {
        path: "movies/top-rated",
        element: <TopRatedMovies />,
      },
      {
        path: "tv-shows/airing-today",
        element: <AiringTodayTVShows />,
      },
      {
        path: "tv-shows/popular",
        element: <PopularTVShows />,
      },
      {
        path: "tv-shows/on-tv",
        element: <OnTVShows />,
      },
      {
        path: "tv-shows/top-rated",
        element: <TopRatedTVShows />,
      },
      {
        path: "people",
        element: <People />,
      },
      {
        path: "people/:peopleId",
        element: <PeopleDetail />,
      },
      {
        path: "movie/:movieId",
        element: <MovieDetail />,
      },
      {
        path: "tv-shows/:tvshowId",
        element: <TVShowDetail />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
            zIndex: "10000",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
