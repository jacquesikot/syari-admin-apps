import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MeasureNavParamList } from '../types';
import AddMeasurementScreen from '../screens/AddMeasurementScreen';
import SelectCustomer from '../screens/SelectCustomer';
import Shirt from '../screens/Shirt';
import Trouser from '../screens/Trouser';
import Instructions from '../screens/Instructions';

const MeasureStack = createStackNavigator<MeasureNavParamList>();

function MeasureNavigator(): JSX.Element {
  return (
    <MeasureStack.Navigator headerMode="none">
      <MeasureStack.Screen
        name="AddMeasurementScreen"
        component={AddMeasurementScreen}
      />
      <MeasureStack.Screen name="SelectCustomer" component={SelectCustomer} />
      <MeasureStack.Screen name="Shirt" component={Shirt} />
      <MeasureStack.Screen name="Trouser" component={Trouser} />
      <MeasureStack.Screen name="Instructions" component={Instructions} />
    </MeasureStack.Navigator>
  );
}

export default MeasureNavigator;
