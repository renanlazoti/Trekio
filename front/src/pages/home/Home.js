import { Header } from '../../components/header/Header';
import { Main } from '../../components/main/Main';
import { About } from '../../components/about/About';

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
