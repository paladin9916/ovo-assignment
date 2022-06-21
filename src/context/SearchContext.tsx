import { createContext, FC, useCallback, useContext, useEffect, useState } from 'react'
import { TCard, TCardResponse } from '../model'

interface SearchContextProps {
  allData: Array<TCard>
  cards: Array<TCard>
  queryString: string
  seeMore: () => void
  onChangeQueryString: (query: string) => void
  children?: React.ReactNode
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export const useSearchContextValues = () => {
  const [queryString, setQueryString] = useState<string>('')
  const [data, setData] = useState<Array<TCard>>([])
  const [cards, setCards] = useState<Array<TCard>>([])

  const getDataByQuery = useCallback(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${queryString}`).then((result) => {
      result
        .json()
        .then((rlt) => {
          setData(rlt.map((d: TCardResponse) => d.show))
        })
        .catch((err) => {
          console.log(err)
        })
    })
  }, [queryString])

  const onChangeQueryString = useCallback((query: string) => {
    setQueryString(query)
  }, [])

  useEffect(() => {
    getDataByQuery()
  }, [getDataByQuery])

  useEffect(() => {
    if (data) {
      setCards(data.slice(0, 3))
    }
  }, [data])

  const handleSeeMore = useCallback(() => {
    setCards((cards: Array<TCard>) => {
      if (data.length > cards.length) {
        return data.slice(0, cards.length + 3)
      }

      return cards
    })
  }, [data])

  return {
    allData: data,
    cards,
    queryString,
    seeMore: handleSeeMore,
    onChangeQueryString,
  }
}

export const useSearchContext = () => {
  const searchContext = useContext(SearchContext)

  if (!searchContext) {
    throw new Error('useSearchContext must be used within SearchContext')
  }

  return searchContext
}

const SearchDataProvider: FC<SearchContextProps> = ({ children, ...props }) => {
  return <SearchContext.Provider value={props}>{children}</SearchContext.Provider>
}

export default SearchDataProvider
