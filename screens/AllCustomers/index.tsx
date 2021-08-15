import React, { useState, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useQuery } from 'react-query';

import { Box, Text } from '../../components/Themed';
import Layout from '../../constants/Layout';
import ArrowLeft from '../../svg/ArrowLeft';
import ProfileIcon from '../../svg/ProfileIcon';
import { WorkStationNavParamList } from '../../types';
import ListItem from '../../components/ListItem';
import PlusIcon from '../../svg/PlusIcon';
import TextInput from '../../components/TextInput';
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

const AllCustomers = ({
  navigation,
}: StackScreenProps<
  WorkStationNavParamList,
  'AllMeasurements'
>): JSX.Element => {
  const { colors } = useTheme();

  const [show, setShow] = useState<boolean>(false);

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

  const handleDelete = (id: string) => {
    Alert.alert(
      'Delete Customer',
      'Are you sure you want to delete this customer?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => {
            customersApi.deleteCustomer(id);
            refetch();
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
          All Customers
        </Text>

        <TouchableOpacity onPress={() => setShow(true)} style={styles.plus}>
          <PlusIcon color={colors.text} />
        </TouchableOpacity>
      </Box>

      <TextInput
        label=""
        placeholder="Search customer"
        onChangeText={t => handleSearch(t)}
      />

      <Box style={{ height: hp(75) }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={search}
            // eslint-disable-next-line prettier/prettier
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            bounces
            renderItem={({ item }) => (
              <Box style={{ marginVertical: 10 }}>
                <ListItem
                  title={item.name}
                  subTitle={item.phone}
                  iconWidth={48}
                  icon={<ProfileIcon color={colors.background} />}
                  trash={() => handleDelete(item.id)}
                  complete="none"
                />
              </Box>
            )}
          />
        )}
      </Box>

      <AddCustomerModal visible={show} setVisible={setShow} refetch={refetch} />
    </SafeAreaView>
  );
};

export default AllCustomers;
