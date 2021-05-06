import Header from '../components/Header/Header';
import Skills from '../components/Skills/Skills';
import Social from '../components/Social/Social';

const Home = (props) => {
  return (
    <div>
      <Header {...props} />
      <div id='Container'>
        <div id='Main'>
          <header className='header'>
            <h1>Marcelo Glacial</h1>
          </header>
          <Skills {...props} />
          <Social {...props} />
        </div>
      </div>
    </div>
  );
};
export default Home;
