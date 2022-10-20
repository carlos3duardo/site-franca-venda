import Header from '../components/Layout/Header';
import Destaques from '../components/Home/Destaques';
import QuemSomos from '../components/Home/QuemSomos';
import NossosProdutos from '../components/Home/NossosProdutos';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      {/* <Destaques /> */}
      {/* <QuemSomos /> */}
      <NossosProdutos />
    </>
  );
}
