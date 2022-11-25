import React, {FC} from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import { ThemeProvider, useTheme } from 'styled-components';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from './src/config/colors';


const App: FC = () => {
  return (
      <RootNavigation />
  )
};

export default App;
