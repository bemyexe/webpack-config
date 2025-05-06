import {useState} from 'react';

interface Props {
  className?: string;
}

export const SharedButton = ({className}: Props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>SharedButton</h1>
      <button className={className} onClick={handleClick}>
        Clicked {count} times
      </button>
    </div>
  );
};
