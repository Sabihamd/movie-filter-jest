import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "react-jss";
// import { createMemoryHistory } from "history";
import MoviePoster from "../../../pages/MoviePoster/MoviePoster";

afterEach(() => {
  cleanup();
});

test("should render MoviePoster Component", () => {
  //   const history = createMemoryHistory();
  const state = {
    data: {
      Title: "The Lion King",
      Year: "2019",
      Runtime: "118 min",
      Image:
        "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
      Poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBpgqTaRffQeR19ukAV87es0Glp57oBLYKw&usqp=CAU",
      Plot: "Disney's The Lion King is about a young lion named Simba, who is the crown prince of an African Savanna. When his father dies in an accident staged by his uncle, Simba is made to feel responsible for his father's death and must overcome his fear of taking responsibility as the rightful heir to the throne.",
    },
  };

  //   history.push("/", state);
  const theme = {
    backgroundColor: "#254D4A",
    color: "#254D4A",
  };

  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[{ state: { state } }]}>
        <MoviePoster />
      </MemoryRouter>
    </ThemeProvider>
  );
  const poster = screen.queryByTestId("movie-poster");
  expect(poster).toBeInTheDocument();
});
