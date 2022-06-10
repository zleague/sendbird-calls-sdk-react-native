import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import SBIcon from '../../shared/components/SBIcon';
import UserInfoHeader from '../../shared/components/UserInfoHeader';
import Palette from '../../shared/styles/palette';
import GroupCallDialScreen from '../screens/GroupCallDialScreen';
import GroupCallSettingStack from './GroupCallSettingStack';
import { GroupRoutes } from './routes';

const Tab = createBottomTabNavigator();

const GroupCallHomeTab = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, tabBarHideOnKeyboard: true }}>
      <Tab.Screen
        name={GroupRoutes.DIAL}
        component={GroupCallDialScreen}
        options={{
          header: UserInfoHeader,
          tabBarIcon: ({ focused }) => {
            return (
              <SBIcon
                icon={focused ? 'RoomsFilled' : 'Rooms'}
                color={focused ? Palette.background600 : Palette.background300}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={GroupRoutes.SETTING_STACK}
        component={GroupCallSettingStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <SBIcon
                icon={focused ? 'SettingsFilled' : 'Settings'}
                color={focused ? Palette.background600 : Palette.background300}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default GroupCallHomeTab;
