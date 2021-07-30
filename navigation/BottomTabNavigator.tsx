import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import AddMeasurementScreen from '../screens/AddMeasurementScreen';
import WorkstationScreen from '../screens/WorkstationScreen';
import {
  BottomTabParamList,
  HomeNavParamList,
  WorkStationNavParamList,
  AddMeasurementNavParamList,
} from '../types';
import HomeIcon from '../svg/HomeIcon';
import PlusIcon from '../svg/PlusIcon';
import ProfileIcon from '../svg/ProfileIcon';

const HomeStack = createStackNavigator<HomeNavParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const AddMeasurementStack = createStackNavigator<AddMeasurementNavParamList>();

function AddMeasurementNavigator() {
  return (
    <AddMeasurementStack.Navigator headerMode="none">
      <AddMeasurementStack.Screen
        name="AddMeasurementScreen"
        component={AddMeasurementScreen}
      />
    </AddMeasurementStack.Navigator>
  );
}

const WorkstationStack = createStackNavigator<WorkStationNavParamList>();

function WorkStationNavigator() {
  return (
    <WorkstationStack.Navigator headerMode="none">
      <WorkstationStack.Screen
        name="WorkStationScreen"
        component={WorkstationScreen}
      />
    </WorkstationStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      <BottomTab.Screen
        name="AddMeasurement"
        component={AddMeasurementNavigator}
        options={{
          tabBarIcon: ({ color }) => <PlusIcon color={color} />,
        }}
      />

      <BottomTab.Screen
        name="WorkStation"
        component={WorkStationNavigator}
        options={{
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
