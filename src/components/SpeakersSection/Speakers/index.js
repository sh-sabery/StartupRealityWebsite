import React from 'react';

import Speaker from './Speaker';

import './style.scss';

class Speakers extends React.PureComponent{
  state = {
    speakers: [
      {
        id: 1,
        image: 'parsa.jpg',
        name: 'پارسا جانباز',
        desc: 'مدیر اجرایی علی‌بابا',
        linkedin: 'https://www.linkedin.com/in/parsa-janbaz-bb42b99b/',
      },
      {
        id: 4,
        image: 'bahar.jpg',
        name: 'بهار یارمحمد',
        desc: 'معاون سرمایه‌گذاری فیروزه',
        linkedin: 'https://www.linkedin.com/in/bahar-yarmohammad-691a1853/',
      },
      {
        id: 5,
        image: 'farhad.jpg',
        name: 'فرهاد فاطمی',
        desc: 'هم‌بنیان‌گذار و مدیر فنی ابرآروان',
        linkedin: 'https://www.linkedin.com/in/farhad-fatemi-2632a233/',
      },
      {
        id: 6,
        image: 'pouria.jpg',
        name: 'پوریا کاویانی',
        desc: 'معاون ارشد مهندسی کافه بازار و دیوار',
        linkedin: 'https://www.linkedin.com/in/pooria-kaviani-20b99792/',
      },
      {
        id: 13,
        image: 'milad.jpg',
        name: 'میلاد نوری',
        desc: 'مدیرعامل پونز',
        linkedin: 'https://www.linkedin.com/in/miladnouri/',
      },
      {
        id: 7,
        image: 'aysan.jpg',
        name: 'آیسان سبایی',
        desc: 'مدیر بازاریابی آچاره',
        linkedin: 'https://www.linkedin.com/in/aysansabaei/',
      },
      {
        id: 8,
        image: 'shervin.jpg',
        name: 'شروین مشایخ',
        desc: 'مدیر محصول بازارافزایی بانک آینده',
        linkedin: 'https://www.linkedin.com/in/shervinmashayekh/',
      },
      {
        id: 9,
        image: 'sina.jpg',
        name: 'سینا مومنی',
        desc: 'مدیر بازاریابی سازمانی یکتانت',
        linkedin: 'https://www.linkedin.com/in/sina-momeni-35078b146/',
      },
      {
        id: 10,
        image: 'ehsan.jpg',
        name: 'احسان کریم‌خانی',
        desc: 'قائم مقام مدیرعامل سرمایه‌گذاری آوند',
        linkedin: 'https://www.linkedin.com/in/ehsan-karimkhani/',
      },
      {
        id: 11,
        image: 'iman.jpg',
        name: 'ایمان عقیلیان',
        desc: 'عضو هیئت مدیره اسمارتاپ',
        linkedin: 'https://www.linkedin.com/in/iman-aghilian-a934167/',
      },
      {
        id: 12,
        image: 'farzad.jpg',
        name: 'فرزاد شفیعی',
        desc: 'معاون ارشد مهندسی ریحون',
        linkedin: 'https://www.linkedin.com/in/fshafiee/',
      },
      {
        id: 12,
        image: 'navid.jpg',
        name: 'نوید ایران بهار',
        desc: 'کارشناس توسعه بازار ایران کیش',
        linkedin: 'https://www.linkedin.com/in/navidiranbahar/',
      },
    ]
  }

  getSpeakers(){
    const reactSpeakers = [];
    const { speakers } = this.state;

    speakers.forEach(({ id, image, name, desc, linkedin }) =>{
      reactSpeakers.push(
        <Speaker
          className="speakers__speaker"
          key={id}
          image={image}
          name={name}
          desc={desc}
          linkedin={linkedin}
        />
      );
    })

    return reactSpeakers;
  }

  render(){
    return (
      <div className="speakers">
        { this.getSpeakers() }
      </div>
    );
  }
}

export default Speakers;