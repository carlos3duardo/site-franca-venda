import Header from '../components/Layout/Header';
import Destaques from '../components/Home/Destaques';
import QuemSomos from '../components/Home/QuemSomos';
import NossosProdutos from '../components/Home/NossosProdutos';
import EscritorioVirtual from '../components/Home/EscritorioVirtual';
import Valores from '../components/Home/Valores';
import KitBasico from '../components/Home/KitBasico';
import Contato from '../components/Layout/Contato';
import Footer from '../components/Layout/Footer';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Destaques />
      <QuemSomos />
      <NossosProdutos />
      <EscritorioVirtual />
      <Valores />
      <KitBasico />
      <Contato />
      <Footer />
    </>
  );
}
