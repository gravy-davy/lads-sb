import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import burns from '../screens/BurnsScreen';
import home from '../screens/HomeScreen';

const screens = {
    Home: {
        screen: home
    },
    Burns: {
        screen: burns
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
