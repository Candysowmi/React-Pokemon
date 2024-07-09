import React from 'react'

const Pokemon = ({ data }) => {
  console.log(data);
  return (
    <>
      {
        (!data) ? "" : (
          <>
            <div id='pokemon'>
              <h1>{data.name}</h1> <hr />
              <div className='nameimg'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="" /></div>
              <div className='abilities'>
                {
                  data.abilities.map(poke => {
                    return (
                      <>

                        <h2 className='name'>{poke.ability.name}</h2>

                      </>
                    )
                  }
                  )}
              </div>

              <div className='base-state'>
                {
                  data.stats.map(poke => {
                    return (
                      <>
                        <h3>{poke.stat.name}:{poke.base_stat}</h3>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </>
        )
      }


    </>

  )
}

export default Pokemon