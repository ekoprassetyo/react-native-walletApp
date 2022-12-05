import React, {FC} from 'react';
import {StockObjInfo} from '../../../types/stock';
import {
  Container,
  StyledTouchable,
  ViewTextContainer,
  TextLabel,
  TextStyled,
} from './styles';
import {ScrollView, View} from 'react-native';

const StockInfoTable: FC<StockObjInfo> = ({latestData, stockObjectInfo}) => {
  return (
    <Container>
      <ScrollView
        horizontal={true}
        decelerationRate={0}
        contentContainerStyle={{
          height: 100,
          width: 500,
          flexGrow: 1,
        }}>
        <StyledTouchable activeOpacity={1}>
          <View style={{marginLeft: 40, marginTop: 10}}>
            <ViewTextContainer>
              <TextLabel>Open</TextLabel>
              <TextStyled>{latestData.open}</TextStyled>
            </ViewTextContainer>
            <ViewTextContainer>
              <TextLabel>High</TextLabel>
              <TextStyled>{latestData.high}</TextStyled>
            </ViewTextContainer>
            <ViewTextContainer>
              <TextLabel>Low</TextLabel>
              <TextStyled>{latestData.low}</TextStyled>
            </ViewTextContainer>
          </View>
          <View style={{marginTop: 10}}>
            <ViewTextContainer>
              <TextLabel>Vol</TextLabel>
              <TextStyled>{latestData.volume}</TextStyled>
            </ViewTextContainer>
            <ViewTextContainer>
              <TextLabel>P/E</TextLabel>
              <TextStyled>{latestData.companyOverview['PERatio']}</TextStyled>
            </ViewTextContainer>
            <ViewTextContainer>
              <TextLabel style={{paddingRight: 10}}>Mkt Cap.</TextLabel>
              <TextStyled>
                {Math.floor(
                  latestData.companyOverview['MarketCapitalization'] /
                    1000000000,
                )}
                B
              </TextStyled>
            </ViewTextContainer>
          </View>
          <View style={{marginTop: 10}}>
            <ViewTextContainer>
              <TextLabel>52W H</TextLabel>
              <TextStyled>
                {latestData.companyOverview['52WeekHigh']}
              </TextStyled>
            </ViewTextContainer>
            <ViewTextContainer>
              <TextLabel>52W L</TextLabel>
              <TextStyled>{latestData.companyOverview['52WeekLow']}</TextStyled>
            </ViewTextContainer>
            <ViewTextContainer>
              <TextLabel style={{paddingRight: 10}}>200DMA</TextLabel>
              <TextStyled>
                {Math.floor(latestData.companyOverview['200DayMovingAverage'])}
              </TextStyled>
            </ViewTextContainer>
          </View>
        </StyledTouchable>
      </ScrollView>
    </Container>
  );
};

export default StockInfoTable;
