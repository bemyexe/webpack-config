import {SharedButton} from '@/components/shared/button/button';

interface Props {
  className?: string;
}

const ShopPage = ({className}: Props) => {
  return (
    <h1 className={className}>
      ShopPage
      <SharedButton />
    </h1>
  );
};

export default ShopPage;
