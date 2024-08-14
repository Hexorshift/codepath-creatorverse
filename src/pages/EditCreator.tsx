import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import Layout from '../components/Layout';
import ICreator from '../ICreator';

const EditCreator = () => {
  const [creator, setCreator] = useState<ICreator | null>(null);
  const [name, setName] = useState<string>('');
  const [url, setURL] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imageURL, setImageURL] = useState<string>('');
  const { id } = useParams();

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select().eq('id', id);

      if (data && data.length > 0) {
        const creator = data[0] as ICreator;
        setCreator(creator);
        setName(creator.name);
        setURL(creator.url);
        setDescription(creator.description);
        setImageURL(creator.imageURL);
      }
    };

    fetchCreator();
    return () => {
      fetchCreator();
    };
  }, []);

  return (
    <Layout>
      <h2>Editing {creator?.name}</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const { data } = await supabase
            .from('creators')
            .update({ name, url, description, imageURL })
            .eq('id', creator?.id)
            .select();

          if (data) {
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
              value={name}
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
              value={url}
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
              value={description}
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
              value={imageURL}
              onChange={({ target: { value } }) => setImageURL(value)}
            />
          </label>
        </fieldset>
        <input type="submit" />
      </form>
      <button
        onClick={async (e) => {
          e.preventDefault();
          await supabase.from('creators').delete().eq('id', creator?.id);
          window.location.href = '/';
        }}
      >
        Delete
      </button>
    </Layout>
  );
};

export default EditCreator;
