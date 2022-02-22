import { Landing } from './pages'
import { Register } from './pages'
import {
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
  AddJob,
} from './pages/dashboard'
import { Error } from './pages'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
