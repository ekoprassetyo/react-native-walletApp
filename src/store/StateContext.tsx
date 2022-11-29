import React, {createContext, useState} from 'react';
import {ReactNode} from 'react';

export const StateContext = createContext({
    initial: 0,
    value: 0,
    tooltipVisible: false,
    handleStartWith: (number: number) => {},
    handleValue: (number: number) => {},
    handleTooltip: (state: boolean) => {},
  })
  
  function StateContextProvider({children}: {children: ReactNode}) {
    const [startWith, setStartWith] = useState(0)
    const [changed, setChanged] = useState(0)
    const [tooltip, setTooltip] = useState(false)
  
    function handleStartWith(number: number) {
      setStartWith(number)
    }
  
    function handleValue(number: number) {
      setChanged(number)
    }
  
    function handleTooltip(state: boolean) {
      setTooltip(state)
    }
  
    const value = {
      initial: startWith,
      value: changed,
      tooltipVisible: tooltip,
      handleStartWith: handleStartWith,
      handleValue: handleValue,
      handleTooltip: handleTooltip,
    }
  
    return <StateContext.Provider value={value}>{children}</StateContext.Provider>
  }
  
  export default StateContextProvider