import { createStackNavigator } from "react-navigation-stack";
import Providers from "./Providers";
import { withNavigation } from "../methods";

export default createStackNavigator(
  {
    Providers: withNavigation(Providers)
  },
  {
    initialRouteName: "Providers"
  }
);