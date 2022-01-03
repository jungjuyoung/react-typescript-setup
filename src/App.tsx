import './styles.css';
import IMAGE from './bg.png';
import LOGO from './logo.svg';
import { ClickCounter } from './ClickCounter';

export const App = () => {
  const name = "juyoung";
  return (
    <>
      <h1>Hello React Typescript Webpack Starter Template -{process.env.name}</h1>
      <img src={IMAGE} alt="background" width="300" height="auto" />
      <img src={LOGO} alt="background" width="300" height="auto" />
      <ClickCounter />
    </>
  );
};
