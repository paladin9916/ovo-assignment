import { FC } from 'react'
import { TCard } from '../model'

interface ICard {
  data: TCard
}

const Card: FC<ICard> = ({ data }) => {
  const { name, summary, image } = data

  return (
    <div data-testid='card' className='card '>
      <div className='card-image' style={{ backgroundImage: `url(${image?.original || 'none.jpg'})` }}></div>
      <h4 className='card-title'>{name}</h4>
			<div className='card-summary' dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  )
}

export default Card
