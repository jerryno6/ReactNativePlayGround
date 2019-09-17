import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './features/welcome/Home';
import Settings from './features/welcome/Settings';

const MainNavigator = createStackNavigator({
  Home : {screen: Home},
  Settings : {screen: Settings},
});

const App = createAppContainer(MainNavigator);

export default App;