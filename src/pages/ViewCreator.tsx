import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../client';
import ICreator from '../ICreator';
import Layout from '../components/Layout';

const ViewCreator = () => {
  const [creator, setCreator] = useState<ICreator | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select().eq('id', id);

      if (data && data.length > 0) {
        setCreator(data[0]);
      }
    };

    fetchCreator();
    return () => {
      fetchCreator();
    };
  }, []);

  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: '800px' }}>
          <h2>Viewing {creator?.name}</h2>
          <div>
            <Link to={`/edit/${id}`}>
              <button style={{ marginRight: '10px' }}>Edit</button>
            </Link>
            <button
              onClick={async (e) => {
                e.preventDefault();
                await supabase.from('creators').delete().eq('id', creator?.id);
                window.location.href = '/';
              }}
            >
              Delete
            </button>
          </div>
          <a href={creator?.url} target="_blank">
            Creator Link
          </a>
          <p>{creator?.description}</p>
        </div>
        <img src={creator?.imageURL} style={{ objectFit: 'contain' }} alt="Creator Image" />
      </div>
    </Layout>
  );
};

export default ViewCreator;
