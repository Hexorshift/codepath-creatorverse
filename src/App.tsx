import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { supabase } from './client';
import EditCreator from './pages/EditCreator';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import ShowCreators from './pages/ShowCreators';
import ICreator from './ICreator';

function App() {
  const [creators, setCreators] = useState<ICreator[] | []>([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from('creators').select();

      if (data) setCreators(data);
    };

    fetchCreators();
    return () => {
      fetchCreators();
    };
  }, []);

  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <ShowCreators creators={creators} />
        },
        {
          path: '/edit/:id',
          element: <EditCreator />
        },
        {
          path: '/view/:id',
          element: <ViewCreator />
        },
        {
          path: '/add',
          element: <AddCreator />
        }
      ])}
    />
  );
}

export default App;
