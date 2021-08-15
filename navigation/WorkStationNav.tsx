import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { WorkStationNavParamList } from '../types';
import WorkStationScreen from '../screens/WorkstationScreen';
import AllCustomers from '../screens/AllCustomers';
import AllJobs from '../screens/AllJobs';
import AllMeasurements from '../screens/AllMeasurements';
import MeasurementDetails from '../screens/MeasurementDetails';

const WorkStation = createStackNavigator<WorkStationNavParamList>();

function WorkStationNav(): JSX.Element {
  return (
    <WorkStation.Navigator headerMode="none">
      <WorkStation.Screen
        name="WorkStationScreen"
        component={WorkStationScreen}
      />
      <WorkStation.Screen
        name="MeasurementDetails"
        component={MeasurementDetails}
      />
      <WorkStation.Screen name="AllCustomers" component={AllCustomers} />
      <WorkStation.Screen name="AllJobs" component={AllJobs} />
      <WorkStation.Screen name="AllMeasurements" component={AllMeasurements} />
    </WorkStation.Navigator>
  );
}

export default WorkStationNav;
