import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Box, Text } from '../../components/Themed';
import Layout from '../../constants/Layout';
import ArrowLeft from '../../svg/ArrowLeft';
import ProfileIcon from '../../svg/ProfileIcon';
import { MeasureNavParamList } from '../../types';
import ListItem from '../../components/ListItem';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Layout.screenMargin,
  },
  topBar: {
    flexDirection: 'row',
    marginTop: Layout.screenMarginTop,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    position: 'absolute',
    right: '92%',
  },
});

const customerData = [
  {
    id: 1,
    name: 'Gbenga Daniels',
    contact: '+2349059032453',
  },
  {
    id: 2,
    name: 'Junior Gamage',
    contact: '+2349059032453',
  },
  {
    id: 3,
    name: 'Vanessa Eshiet',
    contact: '+2349059032453',
  },
  {
    id: 4,
    name: 'Joakim Ikot',
    contact: 'ji@gmail.com',
  },
  {
    id: 5,
    name: 'Tony Elumelu',
    contact: 'te@yahoo.com',
  },
];

const SelectCustomer = ({
  navigation,
}: StackScreenProps<MeasureNavParamList, 'SelectCustomer'>): JSX.Element => {
  const { colors } = useTheme();

  const [selected, setSelected] = useState<any>({});

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => Keyboard.dismiss()} activeOpacity={1}>
        <Box style={styles.topBar}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.arrow}
          >
            <ArrowLeft color={colors.text} />
          </TouchableOpacity>

          <Text
            variant="h1"
            style={{
              color: colors.text,
              width: 183,
              textAlign: 'center',
            }}
          >
            Select Customer
          </Text>
        </Box>

        <TextInput label="" placeholder="Search customer" />

        <Box style={{ height: hp(50) }}>
          <FlatList
            data={customerData}
            // eslint-disable-next-line prettier/prettier
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ marginVertical: 5 }}
                activeOpacity={1}
                onPress={() => setSelected(item)}
              >
                <ListItem
                  title={item.name}
                  subTitle={item.contact}
                  iconWidth={48}
                  icon={<ProfileIcon color={colors.background} />}
                  selected={selected.id === item.id}
                />
              </TouchableOpacity>
            )}
          />
        </Box>

        <Box style={{ marginTop: hp(6.2) }}>
          <Button
            type="primary"
            label="Next"
            arrow
            onPress={() => navigation.navigate('Shirt')}
          />
        </Box>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SelectCustomer;
