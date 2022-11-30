import React, {FC} from 'react';
import Navigation from './src/navigation'
import { ThemeProvider, useTheme } from 'styled-components';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from './src/config/colors';


const App: FC = () => {
  return (
      <Navigation />
  )
};

export default App;
