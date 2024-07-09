import React from 'react'

const Card1 = ({ Pokemon, loading, infopokemon }) => {
  console.log(Pokemon);
  return (
    <>
      {
        loading ? <h1>Loading...</h1> :
          Pokemon.map((item) => {
            return (
              <>
                <div className='card' key={item.id} onClick={() => infopokemon(item)}>
                  <h2 >{item.id}</h2>
                  <img src={item.sprites.front_default} alt="" />
                  <h2 className='leftcharmando'>{item.name}</h2>

                </div>
              </>
            )

          })
      }

    </>
  )
}

export default Card1