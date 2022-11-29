import React, {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import {RenderItemProps, StockObjInfo} from '../../../types/stock';
import {colors} from '../../../config/colors';
import {
  Chart,
  VerticalAxis,
  Area,
  Line,
  Tooltip,
  HorizontalAxis,
} from 'react-native-responsive-linechart';

interface ResponsiveStockChartProps {
  StockObjInfo: StockObjInfo;
  setTimePeriod: any;
  min: any;
  max: any;
  timePeriod: string;
  dateMap: any;
  stockData: any;
}

interface MapObj {
  [i: string]: string;
}

interface timeToDaysMap {
  [index: string]: number;
}

const timeToDaysMap: timeToDaysMap = {
  ['1D']: 1,
  ['1W']: 5,
  ['1M']: 21,
  ['3M']: 63,
  ['6M']: 126,
  ['1Y']: 252,
  ['2Y']: 504,
};

const ResponsiveStockChart: FC<ResponsiveStockChartProps> = ({
  StockObjInfo,
  dateMap,
  max,
  min,
  setTimePeriod,
  stockData,
  timePeriod,
}) => {
  const renderItem = ({item}: RenderItemProps) => {
    const onTextPress = () => {
      setTimePeriod(item);
    };

    return (
      <View
        style={{
          backgroundColor:
            item === timePeriod ? colors.graydark : colors.codGrey,
          height: 30,
          width: 50,
          justifyContent: 'center',
          display: 'flex',
          alignContent: 'center',
          borderRadius: 5,
          paddingLeft: 12,
          marginLeft: 5,
        }}>
        <Text
          style={{color: colors.white, fontWeight: 'bold', paddingEnd: 20}}
          onPress={onTextPress}>
          {item}
        </Text>
      </View>
    );
  };

  return (
    <>
      {stockData.length > 0 && (
        <>
          <FlatList
            horizontal
            data={['1D', '1W', '1M', '3M', '6M', '1Y', '2Y']}
            renderItem={renderItem}
            keyExtractor={item => item}
            style={{flexGrow: 0}}
          />
          <Chart
            style={{height: 250, width: '100%', alignContent: 'center'}}
            data={stockData}
            padding={{left: 40, right: 20, top: 20, bottom: 20}}
            xDomain={{
              min: Math.max(
                stockData.length - timeToDaysMap[timePeriod] - 1,
                1,
              ),
              max: stockData.length,
            }}
            yDomain={{
              min: Math.floor(parseFloat(min) - 2),
              max: Math.ceil(parseFloat(max) + 2),
            }}></Chart>
        </>
      )}
    </>
  );
};

export default ResponsiveStockChart;
