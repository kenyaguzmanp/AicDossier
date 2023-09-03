import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "../components/BottomTabs/BottomTabs";

export default () => {
  return (
    <>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </>
  )
}