import React, { useEffect, useState } from 'react'
import Card1 from './Card1'
import Pokemon from './Pokemon'
import axios from 'axios'

const Main1 = () => {
  const [PokeyData, setPokeyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nexturl, setNexturl] = useState();
  const [prevurl, setPrevurl] = useState();
  const [PokeyDex, setPokeyDex] = useState();

  const pokefun = async () => {
    setLoading(true)
    const res = await axios.get(url);
    //console.log(res.data.results);
    setNexturl(res.data.next);
    setPrevurl(res.data.previous);
    await getPokemon(res.data.results);
    setLoading(false)
    //console.log(PokeyData)

  }
  
  const getPokemon = async (results) => {
    const pokemonData = await Promise.all(
      results.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      })
    );
    setPokeyData(pokemonData);
  };
  useEffect(() => {
    pokefun();
  }, [url])

  return (
    <div className='container'>
      <div className='left-container'>
        <Card1 Pokemon={PokeyData} loading={loading} infopokemon={poke => setPokeyDex(poke)} />


        <div className='butt-next'>

          {prevurl && <button className='previous' onClick={() => {
            setUrl(prevurl)
          }}>Previous</button>}
          {nexturl && <button className='next' onClick={() => {
            setUrl(nexturl)
          }}>Next</button>}
        </div>

      </div>
      <div className='right-container'>
        < Pokemon data={PokeyDex} />
      </div>
    </div>
  )
}

export default Main1