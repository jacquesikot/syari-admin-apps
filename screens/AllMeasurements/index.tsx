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
import { WorkStationNavParamList } from '../../types';
import ListItem from '../../components/ListItem';
import TextInput from '../../components/TextInput';
import BookIcon from '../../svg/BookIcon';
import measurementApi from '../../firebase/measurements';

const measureData = [
  {
    id: 1,
    name: 'Gbenga Daniels',
    date: '12 March 2021',
    complete: true,
  },
  {
    id: 2,
    name: 'Junior Gamage',
    date: '17 March 2021',
    complete: true,
  },
  {
    id: 3,
    name: 'Vanessa Eshiet',
    date: '22 April 2021',
    complete: false,
  },
  {
    id: 4,
    name: 'Joakim Ikot',
    date: '15 March 2021',
    complete: true,
  },
  {
    id: 5,
    name: 'Tony Elumelu',
    date: '30 August 2021',
    complete: false,
  },
];

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

const AllMeasurements = ({
  navigation,
}: StackScreenProps<
  WorkStationNavParamList,
  'AllMeasurements'
>): JSX.Element => {
  const { colors } = useTheme();

  const { data, isLoading, refetch } = useQuery('measurements', () =>
    measurementApi.getAllmeasurements(),
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
      'Delete Measurement',
      'Are you sure you want to delete this measurement?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => {
            measurementApi.deleteMeasurement(id);
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
          variant="h2"
          style={{
            color: colors.text,
            width: 183,
            textAlign: 'center',
          }}
        >
          All Measurements
        </Text>
      </Box>

      <TextInput
        label=""
        placeholder="Search measurement"
        onChangeText={t => handleSearch(t)}
      />

      <Box style={{ height: hp(75), paddingBottom: 50 }}>
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
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>
                  navigation.navigate('MeasurementDetails', {
                    measurement: item,
                  })
                }
                style={{ marginVertical: 10 }}
              >
                <ListItem
                  title={item.name}
                  subTitle={item.created_at.substring(0, 10)}
                  iconWidth={48}
                  icon={<BookIcon color={colors.background} />}
                  trash={() => handleDelete(item.id)}
                  complete="none"
                />
              </TouchableOpacity>
            )}
          />
        )}
      </Box>
    </SafeAreaView>
  );
};

export default AllMeasurements;
