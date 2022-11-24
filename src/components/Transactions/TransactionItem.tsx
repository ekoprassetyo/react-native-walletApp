import React, {FC} from 'react';
import {TransactionProps} from './types';
import styled from 'styled-components/native';
import {View} from 'react-native';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import {colors} from '../../config/colors';
import Transaction from './Transaction';

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const LeftView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  flex: 2;
`;

const RightView = styled.View`
  flex: 1;
`;

const TransactionItem: FC<TransactionProps> = ({
  amount,
  art,
  date,
  subtitle,
  title,
}) => {
  return (
    <TransactionRow>
      <LeftView>
        <Transaction background={art.background} icon={art.icon} />
        <View style={{marginLeft: 10}}>
          <RegularText
            textStyle={{
              color: colors.secondary,
              textAlign: 'left',
              marginBottom: 4,
            }}>
            {title}
          </RegularText>
          <SmallText textStyle={{color: colors.graydark, textAlign: 'left'}}>
            {subtitle}
          </SmallText>
        </View>
      </LeftView>
      <RightView>
        <RegularText
          textStyle={{
            color: colors.secondary,
            textAlign: 'right',
            marginBottom: 4,
          }}>
          {amount}
        </RegularText>
        <SmallText textStyle={{color: colors.graydark, textAlign: "right"}}>{date}</SmallText>
      </RightView>
    </TransactionRow>
  );
};

export default TransactionItem;
