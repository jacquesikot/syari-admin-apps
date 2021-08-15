import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useQuery } from 'react-query';
import Toast from 'react-native-toast-message';

import { Box, Text } from '../../components/Themed';
import Layout from '../../constants/Layout';
import ArrowLeft from '../../svg/ArrowLeft';
import ProfileIcon from '../../svg/ProfileIcon';
import { MeasureNavParamList } from '../../types';
import ListItem from '../../components/ListItem';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import PlusIcon from '../../svg/PlusIcon';
import AddCustomerModal from '../../components/AddCustomerModal';
import customersApi from '../../firebase/customer';

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
  plus: {
    position: 'absolute',
    right: '1%',
  },
});

const SelectCustomer = ({
  navigation,
}: StackScreenProps<MeasureNavParamList, 'SelectCustomer'>): JSX.Element => {
  const { data, isLoading, refetch } = useQuery('customers', () =>
    customersApi.getAllCustomers(),
  );

  const [search, setSearch] = useState<any[]>([]);

  useEffect(() => {
    setSearch(data as any[]);
  }, [data]);

  const handleSearch = (e: any) => {
    const arr: any = [];

    // eslint-disable-next-line array-callback-return
    data?.map(d => {
      if (d.name.toLowerCase().includes(e.toString().toLowerCase().trim()))
        arr.push(d);
    });

    setSearch(arr);
  };

  const { colors } = useTheme();

  const [selected, setSelected] = useState<any>({});

  const [show, setShow] = useState<boolean>(false);

  const handleNext = () => {
    if (!selected.name)
      return Toast.show({
        type: 'error',
        visibilityTime: 4000,
        autoHide: true,
        text1: 'Measurement',
        text2: 'Please select customer first',
      });

    return navigation.navigate('Shirt', {
      name: selected.name,
      email: selected.email,
      phone: selected.phone,
    });
  };

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
            variant="h2"
            style={{
              color: colors.text,
              width: 183,
              textAlign: 'center',
            }}
          >
            Select Customer
          </Text>

          <TouchableOpacity onPress={() => setShow(true)} style={styles.plus}>
            <PlusIcon color={colors.text} />
          </TouchableOpacity>
        </Box>

        <TextInput
          label=""
          placeholder="Search customer"
          onSubmitEditing={handleSearch}
          onChangeText={t => handleSearch(t)}
        />

        <Box style={{ height: hp(50) }}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={search}
              // eslint-disable-next-line prettier/prettier
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <Box
                  style={{
                    height: hp(40),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text variant="h1">No Customers set</Text>
                </Box>
              )}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{ marginVertical: 5 }}
                  activeOpacity={1}
                  onPress={() => setSelected(item)}
                >
                  <ListItem
                    title={item.name}
                    subTitle={item.phone}
                    iconWidth={48}
                    icon={<ProfileIcon color={colors.background} />}
                    selected={selected.id === item.id}
                    complete="none"
                  />
                </TouchableOpacity>
              )}
            />
          )}
        </Box>

        <Box style={{ marginTop: hp(6.2) }}>
          <Button type="primary" label="Next" arrow onPress={handleNext} />
        </Box>
      </TouchableOpacity>

      <AddCustomerModal visible={show} setVisible={setShow} refetch={refetch} />
    </SafeAreaView>
  );
};

export default SelectCustomer;
