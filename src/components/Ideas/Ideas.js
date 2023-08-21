import './Ideas.css';
import Card from '../Card/Card';

function Ideas({ name }) {
  // const { name } = props

  return(
    <div className='ideas-container'>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Ideas;