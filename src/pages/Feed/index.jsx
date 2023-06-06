import { useEffect, useState } from 'react'

import { SearchForm } from '../../components/SearchForm';
import { AudioCard } from '../../components/AudioCard'

import { api } from '../../services/api';

import { Header, Main } from './styles';

export const Feed = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [musics, setMusics] = useState([]);
  const [search, setSearch] = useState('');

  // const filteredMusics = musics.filter(music => music.name.toUpperCase().includes(search.toUpperCase()))

  useEffect(() => {
    const getMusics = async () => {
      try {
        const response = await api.get('tracks', {
          params: {
            q: search
          }
        })
        setMusics(response.data)
      } catch (error) {
        console.error(error)
      }

    }

    getMusics();
  }, [search]);

  const handlePlayMusic = (audio) => {
    currentAudio?.pause();
    audio.play()
    setCurrentAudio(audio)
  }

  return (
    <>
      <Header>
        <SearchForm onSubmit={(inputSearch) => setSearch(inputSearch)} />
      </Header>
      <Main>
        {
          musics.map((music) => 
            <AudioCard 
              key={music.id} 
              src={music.music} 
              title={music.name}
              image={music.cover}
              handlePlayMusic={handlePlayMusic}  
            />
          )
        }
      </Main>
    </>
  );
};