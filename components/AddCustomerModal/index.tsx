import React, { FC, useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as yup from 'yup';
import Toast from 'react-native-toast-message';

import theme, { Box, Text } from '../Themed';
import TextInput from '../TextInput';
import Button from '../Button';
import customerApi from '../../firebase/customer';

const styles = StyleSheet.create({
  container: {},
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  modal: {
    backgroundColor: theme.colors.light,
    width: '80%',
    height: '65%',
    position: 'absolute',
    borderRadius: 40,
    alignItems: 'center',
    bottom: 160,
    paddingTop: 40,
  },
  cancel: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.textDark,
    position: 'absolute',
    left: 20,
    top: 20,
  },
});

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  refetch: () => void;
}

const addCustomerSchema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().email(),
  phone: yup.string().required(),
});

interface FormProps {
  name: string;
  email?: string;
  phone: string;
}

const AddCustomerModal: FC<Props> = ({ visible, setVisible, refetch }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (values: FormProps) => {
    try {
      setLoading(true);

      await customerApi.addCustomer(values);

      refetch();

      setLoading(false);

      setVisible(false);

      Toast.show({
        type: 'success',
        visibilityTime: 2000,
        autoHide: true,
        text1: 'Customer Add Success',
        text2: 'Customer has been added succesfully',
      });
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: 'error',
        visibilityTime: 2000,
        autoHide: true,
        text1: 'Customer Add Error',
        text2: error.message,
      });
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}
    >
      <Box style={styles.modalContainer}>
        <Box style={styles.modal}>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={styles.cancel}
          >
            <Icon name="x" color={theme.colors.error} size={24} />
          </TouchableOpacity>

          <Text variant="h1" color="textDark" mb="l">
            Add Customer
          </Text>

          <Formik
            initialValues={{ name: '', email: '', phone: '' }}
            validationSchema={addCustomerSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <>
                <TextInput
                  label="Full name"
                  placeholder="Enter full name"
                  width={250}
                  touched={touched.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  error={errors.name}
                />

                <TextInput
                  label="Phone Number"
                  placeholder="Enter phone"
                  width={250}
                  touched={touched.phone}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  error={errors.phone}
                />

                <TextInput
                  label="Email"
                  placeholder="Enter email (optional)"
                  width={250}
                  touched={touched.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={errors.email}
                />

                <Box mt="l">
                  <Button
                    type="primary"
                    label="Confirm"
                    width={250}
                    onPress={handleSubmit}
                    loading={loading}
                  />
                </Box>
              </>
            )}
          </Formik>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddCustomerModal;
