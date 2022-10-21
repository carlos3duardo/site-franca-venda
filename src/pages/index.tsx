import Header from '../components/Layout/Header';
import Destaques from '../components/Home/Destaques';
import QuemSomos from '../components/Home/QuemSomos';
import NossosProdutos from '../components/Home/NossosProdutos';
import EscritoriVirtual from '../components/Home/EscritorioVirtual';
import Valores from '../components/Home/Valores';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Destaques />
      <QuemSomos />
      <NossosProdutos />
      <EscritoriVirtual />
      <Valores />
    </>
  );
}
