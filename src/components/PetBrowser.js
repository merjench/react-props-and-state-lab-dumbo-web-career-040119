import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    // debugger
    return <div className="ui cards">
      {this.props.pets.map((pet) =>{
        return <Pet pet={pet}
          onAdoptPet={this.props.onAdoptPet}
          isAdopted={pet.isAdopted}/>
      })}
      </div>
  }
}

export default PetBrowser
