import { Measurement } from '../types';
import firebaseinit from './index';

const db = firebaseinit();

const addMeasurement = async (measurement: Measurement): Promise<void> => {
  await db.collection('measurement').add({
    ...measurement,
    created_at: new Date().toISOString(),
  });
};

const getAllmeasurements = async (): Promise<any[]> => {
  const data: any[] = [];
  const querySnapshot = await db.collection('measurement').get();
  querySnapshot.forEach(doc => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

const deleteMeasurement = async (id: string): Promise<void> => {
  db.collection('measurement').doc(id).delete();
};

export default {
  addMeasurement,
  getAllmeasurements,
  deleteMeasurement,
};
