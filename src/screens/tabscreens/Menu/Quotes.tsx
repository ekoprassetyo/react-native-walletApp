import React, {FC} from 'react';
import styled from 'styled-components/native';
import {colors} from '../../../config/colors';
import {Text} from 'react-native';
import {
  Area,
  Chart,
  HorizontalAxis,
  Line,
  VerticalAxis,
} from 'react-native-responsive-linechart';

const QuotesContainer = styled.ScrollView`
  flex: 1;
  background-color: ${colors.graylight};
`;

const Quotes: FC = () => {
  return (
    <QuotesContainer>
      <Chart
        style={{height: 200, width: 400}}
        data={[
          {x: -2, y: 3},
          {x: -1, y: 6},
          {x: 0, y: 9},
          {x: 1, y: 12},
          {x: 2, y: 14},
          {x: 3, y: 16},
          {x: 4, y: 1},
          {x: 5, y: 8},
          {x: 6, y: 12},
          {x: 7, y: 14},
          {x: 8, y: 12},
          {x: 9, y: 13.5},
          {x: 10, y: 22},
        ]}
        padding={{left: 40, bottom: 20, right: 20, top: 20}}
        xDomain={{min: -2, max: 10}}
        yDomain={{min: 0, max: 20}}
        >
          
        <VerticalAxis
          tickCount={11}
          theme={{labels: {formatter: v => v.toFixed(2)}}}
        />
        <HorizontalAxis tickCount={5} />
        <Area
          theme={{
            gradient: {
              from: {color: '#ffa502'},
              to: {color: '#ffa502', opacity: 0.4},
            },
          }}
        />
        <Line
          theme={{
            stroke: {color: '#ffa502', width: 5},
            scatter: {default: {width: 4, height: 4, rx: 2}},
          }}
        />
      </Chart>
    </QuotesContainer>
  );
};

export default Quotes;
