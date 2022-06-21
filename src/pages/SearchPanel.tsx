import { ChangeEvent, FC, useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Input from '../components/Input'
import { useSearchContext } from '../context/SearchContext'

const SearchPanel: FC = () => {
  const [query, setQuery] = useState<string>('')
  const { onChangeQueryString, allData, cards, seeMore } = useSearchContext()

  return (
    <div className='container mx-auto' data-testid='search-panel'>
      <div className='flex items-center max-w-4xl mx-auto mt-8'>
        <Input
          value={query}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
        />
        <Button variant='fill' onClick={() => onChangeQueryString(query)}>
          Search
        </Button>
      </div>
      <div className='grid grid-cols-3 gap-4 mt-12'>
        {cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
      <div className='text-center mt-8'>
        <h4 className='absolute'>{allData.length} results</h4>
        <Button variant='outline' onClick={() => seeMore()} disabled={allData.length === cards.length}>
          See More
        </Button>
      </div>
    </div>
  )
}

export default SearchPanel
