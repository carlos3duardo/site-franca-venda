/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-unresolved */

import { chakra } from '@chakra-ui/react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Autoplay, Pagination, Navigation } from 'swiper';

import BannerPlataforma from './BannerPlataforma';
import BannerPlanoDeNegocio from './BannerPlanoDeNegocio';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './styles.module.scss';
import BannerEmbaixador from './BannerEmbaixador';

function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <chakra.div
      className={styles.swiperButtonPrev}
      onClick={() => swiper.slidePrev()}
    >
      <BsChevronLeft />
    </chakra.div>
  );
}

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <chakra.div
      className={styles.swiperButtonNext}
      onClick={() => swiper.slideNext()}
    >
      <BsChevronRight />
    </chakra.div>
  );
}

export default function Destaques(): JSX.Element {
  const destaques = [BannerPlataforma, BannerPlanoDeNegocio, BannerEmbaixador];

  return (
    <chakra.div>
      <Swiper
        className={styles.swiper}
        navigation={{
          prevEl: `${styles.swiperButtonPrev}`,
          nextEl: `${styles.swiperButtonNext}`,
        }}
        modules={destaques.length > 1 ? [Autoplay, Pagination, Navigation] : []}
        pagination={{
          clickable: true,
          bulletClass: `${styles.swiperPaginationBullet}`,
          bulletActiveClass: `${styles.swiperPaginationBulletActive}`,
        }}
        loop={destaques.length > 1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {destaques.length <= 1 || (
          <>
            <SlidePrevButton />
            <SlideNextButton />
          </>
        )}

        {destaques.map((banner, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            {banner}
          </SwiperSlide>
        ))}
      </Swiper>
    </chakra.div>
  );
}
