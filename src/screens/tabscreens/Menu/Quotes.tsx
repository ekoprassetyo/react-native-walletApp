import React, {FC} from 'react';
import styled from 'styled-components/native';
import {colors} from '../../../config/colors';
import { Text, View } from 'react-native';
import {
  Area,
  Chart,
  HorizontalAxis,
  Line,
  VerticalAxis,
} from 'react-native-responsive-linechart';
import { AreaChart, Grid, XAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';
import * as shape from 'd3-shape'
import * as dateFns from 'date-fns';

const QuotesContainer = styled.ScrollView`
  flex: 1;
  background-color: ${colors.graylight};
`;

const Quotes: FC = () => {
  const data = [
    {
        value: 50,
        date: dateFns.setHours(new Date(2022, 0, 0), 6),
    },
    {
        value: 10,
        date: dateFns.setHours(new Date(2022, 0, 0), 9),
    },
    {
        value: 150,
        date: dateFns.setHours(new Date(2022, 0, 0), 15),
    },
    {
        value: 10,
        date: dateFns.setHours(new Date(2022, 0, 0), 18),
    },
    {
        value: 100,
        date: dateFns.setHours(new Date(2022, 0, 0), 21),
    },
    {
        value: 20,
        date: dateFns.setHours(new Date(2022, 0, 0), 24),
    },
]

return (
    <View style={{ height: 200, padding: 20 }}>
        <AreaChart
            style={{ flex: 1 }}
            data={ data }
            yAccessor={ ({ item }) => item.value }
            //@ts-ignore
            xAccessor={ ({ item }) => item.date }
            xScale={ scale.scaleTime }
            contentInset={{ top: 10, bottom: 10 }}
            svg={{ fill: 'rgba(134, 134, 244, 0.5)' }}
            curve={ shape.curveLinear }
        >
            <Grid/>
        </AreaChart>
        <XAxis
            data={ data }
            svg={{
                fill: 'black',
                fontSize: 8,
                fontWeight: 'bold',
                rotation: 20,
                originY: 30,
                y: 5,
            }}
            xAccessor={ ({ item }) => item.date }
            scale={ scale.scaleTime }
            numberOfTicks={ 6 }
            style={{ marginHorizontal: -15, height: 20 }}
            contentInset={{ left: 10, right: 25 }}
            formatLabel={ (value) => dateFns.format(value, 'MM/dd') }
        />
    </View>
)
};

export default Quotes;
