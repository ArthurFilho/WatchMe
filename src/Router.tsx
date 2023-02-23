import { Routes, Route } from 'react-router-dom'
import { MovieSelected } from './components/MovieSelected'
import { SearchMovies } from './SearchMovies'

export function Router() {
    return (
      <Routes>
        <Route >
          <Route path="/" element={<SearchMovies />} />
          <Route path="/moviesInfo" element={<MovieSelected />} />
        </Route>
      </Routes>
    )
  }