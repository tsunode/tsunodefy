import { useState } from 'react';
import { Form } from './styles';

export const SearchForm = ({onSubmit}) => {
  const [inputSearch, setInputSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputSearch);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Buscar...'
        onChange={(event) => setInputSearch(event.target.value)} 
      />
      <button type="submit">Buscar</button>
    </Form>
  );
};