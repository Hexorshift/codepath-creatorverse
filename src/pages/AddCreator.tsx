import { useState } from 'react';
import { supabase } from '../client';
import Layout from '../components/Layout';

const AddCreator = () => {
  const [name, setName] = useState<string>('');
  const [url, setURL] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imageURL, setImageURL] = useState<string>('');

  return (
    <Layout>
      <h2>Add a creator</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const { data } = await supabase.from('creators').insert({ name, url, description, imageURL }).select();

          if (data) {
            console.log(data[0]);
            window.location.href = `/view/${data[0].id}`;
          }
        }}
      >
        <fieldset>
          <label>
            Name
            <input
              name="name"
              type="text"
              placeholder="Enter creator's name"
              onChange={({ target: { value } }) => setName(value)}
              required
            />
          </label>
          <label>
            URL
            <input
              name="URL"
              type="url"
              placeholder="Enter creator's URL"
              onChange={({ target: { value } }) => setURL(value)}
              required
            />
          </label>
          <label>
            Description
            <input
              name="description"
              type="text"
              placeholder="Enter creator's description"
              onChange={({ target: { value } }) => setDescription(value)}
              required
            />
          </label>
          <label>
            Image URL
            <input
              name="imageURL"
              type="url"
              placeholder="Enter creator's image URL"
              onChange={({ target: { value } }) => setImageURL(value)}
            />
          </label>
        </fieldset>
        <input type="submit" />
      </form>
    </Layout>
  );
};

export default AddCreator;
