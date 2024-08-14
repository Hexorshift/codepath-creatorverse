import { Link } from 'react-router-dom';
import ICreator from '../ICreator';

const ContentCreator = ({ creator }: { creator: ICreator }) => {
  return (
    <article style={{ marginRight: '20px', width: '380px', height: '300px', overflowY: 'auto', overflowX: 'hidden' }}>
      <img src={creator.imageURL} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={`/view/${creator.id}`}>
          <h5>{creator.name}</h5>
        </Link>
        <Link to={`/edit/${creator.id}`}>
          <h5>Edit</h5>
        </Link>
      </div>
      <p>{creator.description}</p>
    </article>
  );
};

export default ContentCreator;
