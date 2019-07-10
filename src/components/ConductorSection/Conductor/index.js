import React from 'react';

import ConductorItem from './ConductorItem';

import './style.scss';
import ConductorSep from './ConductorSep';
import TimeIdentifier from './TimeIdentifier';

class Conductor extends React.PureComponent{

  state = {
    items: [
      {
        name: 'پذیرش',
        from: '۰۹:۰۰',
        to: '۱۰:۰۰',
      },
      {
        name: 'قرآن و سرود',
        from: '۱۰:۰۰',
        to: '۱۰:۱۵',
      },
      {
        name: 'معرفی',
        from: '۱۰:۱۵',
        to: '۱۰:۳۰',
        panelists: 'سخنران',
      },
      {
        name: 'سخنرانی',
        from: '۱۰:۳۰',
        to: '۱۰:۴۵',
        panelists: 'سخنران',
      },
      {
        name: 'نقش سرمایه در تیم بازاریابی ',
        from: '۱۰:۴۵',
        to: '۱۱:۰۵',
        panelists: 'آیسان سبایی'
      },
      {
        name: 'چالش های استارت‌آپ ها در شرایط فعلی',
        from: '۱۱:۰۵',
        to: '۱۱:۵۵',
        panelists: 'آرش برهمند | پارسا جانباز | میلاد نوری',
      },
      {
        name: 'چگونه استارت‌آپ خود را از بین ببریم؟',
        from: '۱۱:۵۵',
        to: '۱۲:۱۵',
        panelists: 'سینا مومنی',
      },
      {
        name: 'ناهار و نماز',
        from: '۱۲:۱۵',
        to: '۱۳:۴۵',
      },
      {
        name: 'سخنرانی',
        from: '۱۳:۴۵',
        to: '۱۴:۰۵',
        panelists: 'شروین مشایخ',
      },
      {
        name: 'چالش های تیم فنی در استارت‌آپ ها',
        from: '۱۴:۰۵',
        to: '۱۴:۵۵',
        panelists: 'علیرضا شیخ الملوکی | فرهاد فاطمی | پوریا کاویانی | فرزاد شفیعی',
      },
      {
        name: 'ریلیتی تاک',
        from: '۱۴:۵۵',
        to: '۱۵:۱۵',
        panelists: 'مهناز میلانی',
      },
      {
        name: 'چالش های روابط عمومی در استارت‌آپ ها',
        from: '۱۵:۱۵',
        to: '۱۵:۳۵',
        panelists: 'نوید ایران بهار',
      },
      {
        name: 'استراحت و شبکه سازی',
        from: '۱۵:۳۵',
        to: '۱۶:۲۰',
      },
      {
        name: 'چالش های سرمایه‌گذاری در استارت‌آپ ها',
        from: '۱۶:۲۰',
        to: '۱۷:۱۰',
        panelists: 'محمدرضا ازلی | بهار یارمحمد | ایمان عقیلیان | احسان کریم‌خانی',
      },
      {
        name: 'پذیرایی و شبکه سازی',
        from: '۱۷:۱۰',
        to: '۱۸:۳۰',
      },
    ]
  }

  getConductorItems(){
    const { items } = this.state;
    const reactItems = [
      <TimeIdentifier key="start" isStart={true}>
        ۹:۰۰
      </TimeIdentifier>,
      <ConductorSep key="sep" />
    ];
    items.forEach(({ name, from, to, panelists })=>{
      reactItems.push(
        <ConductorItem
          key={from}
          name={name}
          from={from}
          to={to}
          panelists={panelists}
        />
      );
      reactItems.push(
        <ConductorSep key={from+'sep'} />
      );
    });
    reactItems.push(
      <TimeIdentifier key="finish">
        ۱۸:۳۰
      </TimeIdentifier>
    );
    return reactItems;
  }

  render(){
    return (
      <div className="conductor">
        { this.getConductorItems() }
      </div>
    );
  }

}

export default Conductor;