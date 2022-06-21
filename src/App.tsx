import { Route, Routes } from 'react-router-dom'
import SearchDataProvider, { useSearchContextValues } from './context/SearchContext'
import SearchPanel from './pages/SearchPanel'

function App() {
  const contextValues = useSearchContextValues()

  return (
    <SearchDataProvider {...contextValues}>
      <Routes>
        <Route path='/' element={<SearchPanel />} />
      </Routes>
    </SearchDataProvider>
  )
}

export default App
