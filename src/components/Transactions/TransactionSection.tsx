import React, {FC} from 'react';
import styled from 'styled-components/native';
import RegularText from '../Texts/RegularText';
import {colors} from '../../config/colors';
import SmallText from '../Texts/SmallText';
import {TransactionSectionProps} from './types';
import TransactionItem from './TransactionItem';

const TransactionSectionBackground = styled.View`
  width: 100%;
  padding-horizontal: 25px;
  flex: 2;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const TransactionList = styled.FlatList`
  width: 100%;
`;

const TransactionSection: FC<TransactionSectionProps> = ({data}) => {
  return (
    <TransactionSectionBackground>
      <TransactionRow>
        <RegularText textStyle={{fontSize: 20, color: colors.secondary}}>
          Transactions
        </RegularText>
        <SmallText textStyle={{color: colors.secondary, fontSize: 16}}> Recent </SmallText>
      </TransactionRow>
      <TransactionList
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 25}}
        keyExtractor={({id}: any) => id.toString()}
        renderItem={({item}: any) => <TransactionItem {...item} />}
      />
    </TransactionSectionBackground>
  );
};

export default TransactionSection;
