import React, {FC} from 'react';
import styled from 'styled-components/native';
import {colors} from '../config/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootParamList} from '../navigation/RootNavigation';

import CardSection from '../components/Cards/CardSection';
import TransactionSection from '../components/Transactions/TransactionSection';
import SendMoneySection from '../components/SendMoney/SendMoneySection';
import {data, sendMoney, transactions} from '../DummyData';

export type Props = NativeStackScreenProps<RootParamList, 'Home'>;

const HomeContainer = styled.View`
  background-color: ${colors.graylight};
  flex: 1;
  width: 100%;
`;

const Home: FC<Props> = ({navigation}) => {
  return (
    <HomeContainer>
      <CardSection data={data} />
      <TransactionSection data={transactions} />
      <SendMoneySection data={sendMoney} />
    </HomeContainer>
  );
};

export default Home;
