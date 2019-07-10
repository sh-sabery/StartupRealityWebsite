import React from 'react';
import Sponsors from './Sponsors';

import './style.scss';

function SponsorsSection(){
  return (
    <section className="sponsors-section">
      <div className="sponsors-section__content layout">
        <Sponsors
          title="حامیان"
          sponsors={
            [
              {
                id: 0,
                image: 'shahrdari.png',
                title: 'شهرداری کرج',
                link: '#',
              },
              {
                id: 1,
                image: 'yektanet.png',
                title: 'یکتانت',
                link: 'http://yektanet.com/',
              },
              {
                id: 3,
                image: 'arvan.png',
                title: 'ابرآروان',
                link: 'http://arvancloud.com/'
              },
              {
                id: 4,
                image: 'khanestartup.png',
                title: 'خانه استارت‌آپ',
                link: 'http://Khanestartup.ir/',
              },
              {
                id: 5,
                image: 'snapp.png',
                title: 'اسنپ',
                link: 'http://snapp.ir/',
              },
              {
                id: 5,
                image: 'zitel.png',
                title: 'زیتل',
                link: 'http://zi-tel.com/',
              },
              {
                id: 6,
                image: 'najva.png',
                title: 'نجوا',
                link: 'http://najva.com/',
              },
              {
                id: 7,
                image: 'dpi.png',
                title: 'داده پردازی ایران',
                link: 'http://dpi.ir/',
              },
              {
                id: 8,
                image: 'tapsell.png',
                title: 'تپسل',
                link: 'http://tapsell.ir/',
              },
            ]
          }
        />
        <Sponsors
          title="حامیان رسانه‌ای"
          sponsors={
            [
              {
                image: 'techrasa.png',
                title: 'تکراسا',
                link: 'http://Techrasa.com/',
              },
              {
                image: 'shanbe.png',
                title: 'شنبه',
                link: 'https://shanbemag.com/',
              },
              {
                image: 'zoomit.png',
                title: 'زومیت',
                link: 'https://zoomit.ir/',
              },
              {
                image: 'gholipour.png',
                title: 'محمد قلی‌پور',
                link: 'https://www.instagram.com/gholipourmohamad/',
              },
            ]
          }
        />
      </div>
    </section>
  );
}

export default SponsorsSection;