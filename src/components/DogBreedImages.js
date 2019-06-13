import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class  DogBreedImages extends Component {
  
    renderDogBreedImages (images) {
      return <li key={images}>
                 <Link to={ `/dog-images/${images}` }>{images}</Link>
            </li>
    }
      render () {
        const {images} = this.props
       return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>
      
      { !images && 'Loading...' } 
      
      { 
        images && images
        .map(url => <img src={ url } alt="Dog" />) }
     
      
    </div>
  )
}
}