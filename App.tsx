import About from './pages/About';
import Game from './pages/Game';
import { useState } from 'react';
import { View } from 'react-native';
import Layout, { E_Page } from './components/Layout';

export default function App() {
  const [page, setPage] = useState(E_Page.Game)
  return (
    <Layout currentPage={page} setCurrentPage={setPage}>
      {page === E_Page.Game ?
        <>
          <View>
            <Game />
          </View>
        </>
        :
        <>
          <View>
            <About />
          </View>
        </>
      }
    </Layout >
  );
}
