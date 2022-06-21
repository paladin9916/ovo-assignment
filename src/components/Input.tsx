import { FC, HTMLProps } from 'react';
import { ReactComponent as IconSearch } from '../assets/icons/search.svg';

const Input: FC<HTMLProps<HTMLInputElement>> = ({ ...props }) => {
  return (
    <div className='input-wrapper'>
      <div className='icon'>
        <IconSearch style={{ fill: 'rgb(75, 85, 99)' }} />
      </div>
      <input data-testid='input' className='input' {...props} />
    </div>
  )
}

export default Input;