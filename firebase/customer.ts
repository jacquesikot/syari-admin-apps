import { Customer } from '../types';
import firebaseinit from './index';

const db = firebaseinit();

const addCustomer = async (customer: Customer): Promise<void> => {
  await db.collection('customer').add(customer);
};

const getAllCustomers = async (): Promise<any[]> => {
  const data: any[] = [];
  const querySnapshot = await db.collection('customer').get();
  querySnapshot.forEach(doc => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

const deleteCustomer = async (id: string): Promise<void> => {
  db.collection('customer').doc(id).delete();
};

export default {
  addCustomer,
  getAllCustomers,
  deleteCustomer,
};
