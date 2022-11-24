import React, {FC, useRef} from 'react';
import styled from 'styled-components/native';
import {colors} from '../../config/colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import SendMoneyItem from './SendMoneyItem';
import {SendMoneySectionProps} from './types';
import BottomSheet from 'reanimated-bottom-sheet';

const SendMoneySectionBackground = styled.View`
  max-width: 100%;
  padding-top: 10px;
  background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 25px;
  margin-bottom: 5px;
`;

const SendMoneyList = styled.FlatList`
    width: 100%;
    flex: auto;
    min-height 80%;
    padding-horizontal: 25px;
`;

const TextButton = styled.TouchableOpacity``;

const SendMoneySection: FC<SendMoneySectionProps> = ({data}) => {
  const sheetRef = useRef<BottomSheet>(null);
  const renderContent = () => {
    return (
      <SendMoneySectionBackground>
        <SendMoneyRow>
          <RegularText textStyle={{color: colors.secondary, fontSize: 20}}>
            Send money to
          </RegularText>
          <TextButton>
            <SmallText textStyle={{color: colors.tertiary, fontWeight: 'bold'}}>
              +Add
            </SmallText>
          </TextButton>
        </SendMoneyRow>
        <SendMoneyList
          data={data}
          contentContainerStyle={{alignItems: 'flex-start'}}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={({id}: any) => id.toString()}
          renderItem={({item}: any) => <SendMoneyItem {...item} />}
        />
      </SendMoneySectionBackground>
    );
  };

  return (
    <BottomSheet
    ref={sheetRef}
    snapPoints={[190, 190, 0]}
    borderRadius={25}
    initialSnap={1}
    enabledContentTapInteraction={false}
    renderContent={renderContent}
    />
  )
};

export default SendMoneySection;
