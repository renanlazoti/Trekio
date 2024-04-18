import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { About } from '../../components/About';

export const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <div className="app__about">
        <About />
      </div>
    </div>
  );
};
