import { Title } from '../../components/Title/Title';
import './HomePage.css';

const Home = () => {
  return (
    <section className="home__container">
      <img
        className="absolute-img__1"
        src="./assets/img/home-1.png"
        alt="Rick and Morty playing"
      />
      <img
        className="absolute-img__2"
        src="./assets/img/home-2.png"
        alt="Rick and Morty middle finger"
      />
      <img
        className="absolute-img__3"
        src="./assets/img/home-3.png"
        alt="Rick as a pickle"
      />
      <img
        className="absolute-img__4"
        src="./assets/img/home-4.png"
        alt="Screaming sun"
      />
      <img
        className="absolute-img__5"
        src="./assets/img/home-5.png"
        alt="Flying Ruben"
      />
      <img
        className="absolute-img__6"
        src="./assets/img/home-6.png"
        alt="Mr Meeseeks"
      />
      <img
        className="absolute-img__7"
        src="./assets/img/home-7.png"
        alt="Snuffles"
      />
      <Title text="Rick and Morty Universe" />
      <p className="home-container__text" role={'paragraph'}>
        Rick and Morty is an American adult animated science-fiction sitcom
        created by <span>Justin Roiland</span> and <span>Dan Harmon</span> for
        Cartoon Network's nighttime programming block <span>Adult Swim</span>.
        The series follows the misadventures of cynical mad scientist{' '}
        <span>Rick Sanchez</span> and his good-hearted but fretful grandson{' '}
        <span>Morty Smith</span>, who split their time between domestic life and
        interdimensional adventures that take place across an infinite number of
        realities, often travelling to other planets and dimensions through
        portals and on Rick's flying saucer. The general concept of Rick and
        Morty relies on two conflicting scenarios: domestic family drama, and an
        alcoholic grandfather dragging his grandson into hijinks.
      </p>
    </section>
  );
};

export default Home;
