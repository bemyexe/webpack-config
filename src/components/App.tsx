import {useState} from 'react';
import styles from './App.module.scss';
import {Link, Outlet} from 'react-router';
import pngIcon from '@/assets/png-icon.png';
import square from '@/assets/square.jpg';
import Mark from '@/assets/mark.svg';

interface Props {
  className?: string;
}

export const App = ({className}: Props) => {
  const [count, setCount] = useState<number>(0);
  var a: number = 10;
  const handleClick = () => {
    setCount((prev) => prev + 1);
    a = 15;
    console.log(a);
  };

  return (
    <div className={className}>
      <h1>PLATFORM={ENV_PLATFORM}</h1>
      <div>
        <img src={pngIcon} width={150} height={150} />
        <img src={square} width={150} height={150} />
      </div>
      <div>
        <Mark color={'green'} width={100} height={100} />
      </div>
      <Link to={'about'}>about</Link>
      <br />
      <Link to={'shop'}>shop</Link>
      <h1 className={styles.header}>{count}</h1>
      <button className={styles.button} onClick={handleClick}>
        increment
      </button>
      <Outlet />
    </div>
  );
};
