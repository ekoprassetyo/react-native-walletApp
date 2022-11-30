import React, {FC} from 'react';
import styled from 'styled-components/native';
import {colors} from '../../../config/colors';
import {RootParamList} from '../../../navigation/StackNavigation';
import CardSection from '../../../components/Cards/CardSection';

import TransactionSection from '../../../components/Transactions/TransactionSection';
import SendMoneySection from '../../../components/SendMoney/SendMoneySection';
import {data, sendMoney, transactions} from '../../../DummyData';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

// export type Props = BottomTabScreenProps<RootParamList, "Home">;


const HomeContainer = styled.View`
  background-color: ${colors.graylight};
  flex: 1;
  width: 100%;
`;

const Home: FC = () => {
  return (
    <HomeContainer>
      <CardSection data={data} />
      <TransactionSection data={transactions} />
      <SendMoneySection data={sendMoney} />
    </HomeContainer>
  );
};

export default Home;
