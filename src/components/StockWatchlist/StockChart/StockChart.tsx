import React, {useEffect, useState} from 'react';
import {Circle} from 'react-native-svg';
import * as dateFns from 'date-fns';
import * as scale from 'd3-scale';
import {colors} from '../../../config/colors';
import {AreaChart, LineChart, Grid, XAxis} from 'react-native-svg-charts';
import {data} from '../../../DummyData';

const StockChart = ({data}: any) => {
  const [stockData, setStockData] = useState<any[]>([]);

  useEffect(() => {
    const stockDataArr: any[] = [];
    for (let [key, value] of Object.entries(data)) {
      //@ts-ignore
      let newPrice = Math.floor(parseInt(value['close']), 2);

      const newObj = {
        date: dateFns.format(new Date(key), 'MMM-dd'),
        price: newPrice,
      };

      newObj.price && stockDataArr.unshift(newObj);
    }
    setStockData(stockDataArr.slice(70, 100));
  }, [data]);

  const Decorator = ({x, y, stockData}: any) => {
    //@ts-ignore
    return stockData.map((value, index) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value.price)}
        r={4}
        stroke={colors.tertiary}
        fill={colors.tertiary}
      />
    ));
  };

  return (
    <AreaChart
      style={{height: 200}}
      data={stockData}
      svg={{fill: 'rgba(134, 65, 244, 0.2'}}
      contentInset={{top: 20, bottom: 30}}>
      <LineChart
        style={{height: 200, width: 330}}
        data={stockData}
        svg={{stroke: colors.tertiary}}
        contentInset={{top: 10, bottom: 10}}
        xScale={scale.scaleTime}
        yAccessor={({item}) => item.price}>
        <Grid
          svg={{
            stroke: colors.graydark,
          }}
        />
      </LineChart>
      <XAxis
        data={stockData}
        svg={{
          fill: 'white',
          fontSize: 7,
          fontWeight: 'bold',
          rotation: 0,
          originY: 30,
          y: 5,
        }}
        numberOfTicks={5}
        style={{marginHorizontal: -15, height: 50}}
        contentInset={{left: 10, right: 25}}
        formatLabel={(value, index) => {
          if (index % 2 != 0) {
            return stockData[index].date;
          } else {
            return '';
          }
        }}
      />
    </AreaChart>
  );
};

export default StockChart;
