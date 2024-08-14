import { Link } from 'react-router-dom';
import ContentCreator from '../components/ContentCreator';
import ICreator from '../ICreator';
import Layout from '../components/Layout';

const ShowCreators = ({ creators }: { creators: ICreator[] }) => {
  return (
    <Layout>
      <Link to="/add">
        <button style={{ marginBottom: '20px' }}>Add a creator</button>
      </Link>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {creators.map((creator) => {
          return <ContentCreator key={creator.id} creator={creator} />;
        })}
      </div>
    </Layout>
  );
};

export default ShowCreators;
