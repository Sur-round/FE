import Home1 from '../../components/Home/Home1';
import Home2 from '../../components/Home/Home2';
import Home3 from '../../components/Home/Home3';

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  return (
    <>
      <Home1 />
      <Home2 />
      <Home3 />
    </>
  );
};

export default HomePage;
