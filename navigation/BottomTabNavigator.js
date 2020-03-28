import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import FlashcardsScreen from '../screens/FlashcardsScreen';
import TopicsScreen from '../screens/TopicsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Flashcards';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Flashcards"
        component={FlashcardsScreen}
        options={{
          title: 'Flashcards',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-albums"/>,
        }}
      />
      <BottomTab.Screen
        name="Topics"
        component={TopicsScreen}
        options={{
          title: 'Topics',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  return 'Aquirit';

  /*switch (routeName) {
    case 'Flashcards':
      return 'How to get started';
    case 'Topics':
      return 'Topics to learn more';
  }*/
}
