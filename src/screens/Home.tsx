import React, {FC} from 'react';
import styled from 'styled-components/native';
import { colors } from '../config/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootParamList } from '../navigation/RootNavigation';
import { Text } from 'react-native';
import CardSection from '../components/Cards/CardSection';

import logo1 from '../assets/cards/mc.png'
import logo2 from '../assets/cards/visa_white.png'

import potrait1 from '../assets/portraits/1.jpg'
import potrait2 from '../assets/portraits/2.jpg'
import potrait3 from '../assets/portraits/3.jpg'
import TransactionSection from '../components/Transactions/TransactionSection';
import SendMoneySection from '../components/SendMoney/SendMoneySection';


export type Props = NativeStackScreenProps<RootParamList, "Home">;

const HomeContainer = styled.View`
    background-color : ${colors.graylight};
    flex: 1;
    width: 100%;
`;

const data = [
    {
        id: 1,
        accountNo: "123456789",
        balance: 10000,
        alias: "Work Related",
        logo: logo1,
    },
    {
        id: 2,
        accountNo: "987654321",
        balance: 200000,
        alias: "Personal Work",
        logo: logo2,
    },
    {
        id: 3,
        accountNo: "987654587",
        balance: 300000,
        alias: "School Fees",
        logo: logo2,
    },
];

const transactions = [
    {
        id: 1,
        amount: "-$ 15000",
        date: "12/12/2020",
        title: "Travel",
        subtitle: "Garuda Indonesia",
        art: {
            background: colors.accent,
            icon: "airplane",
        },
    },
    {
        id: 2,
        amount: "-$ 400",
        date: "12/12/2020",
        title: "Taxi",
        subtitle: "Blue Bird",
        art: {
            background: colors.tertiary,
            icon: "car",
        },
    },
    {
        id: 3,
        amount: "-$ 1000",
        date: "12/12/2020",
        title: "Shopping",
        subtitle: "Shopee",
        art: {
            background: colors.primary,
            icon: "cart",
        },
    },
];

const sendMoney = [
    {
        id: 1,
        amount: "$ 1000",
        name: "John Doe",
        background: colors.tertiary,
        image: potrait1,
    },
    {
        id: 2,
        amount: "$ 2000",
        name: "Alex Doe",
        background: colors.accent,
        image: potrait2,
    },
    {
        id: 3,
        amount: "$ 3000",
        name: "Steve Doe",
        background: colors.primary,
        image: potrait3,
    },
];


const Home: FC<Props> = ({ navigation }) => {
    return (
        <HomeContainer>
           <CardSection data={data} />
           <TransactionSection data={transactions} />
           <SendMoneySection data={sendMoney} />
        </HomeContainer>
    )
}

export default Home;