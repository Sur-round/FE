import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import FooterImg from '../public/svg/footer.png';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <img src={FooterImg} alt='Footer' style={{ width: '100%' }} />
      </footer>
    </>
  );
};

export default RootLayout;
