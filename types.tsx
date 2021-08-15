export type RootStackParamList = {
  Onboarding: undefined;
  Root: undefined;
  NotFound: undefined;
  Authentication: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  AddMeasurement: undefined;
  WorkStation: undefined;
};

export type HomeNavParamList = {
  HomeScreen: undefined;
};

export type WorkStationNavParamList = {
  WorkStationScreen: undefined;
  AllCustomers: undefined;
  AllJobs: undefined;
  AllMeasurements: undefined;
  MeasurementDetails: { measurement: Measurement };
};

export type AddMeasurementNavParamList = {
  AddMeasurementScreen: undefined;
};

export type AuthNavParamList = {
  LoginEmail: undefined;
  LoginPassword: { email: string };
  ForgotPassword: undefined;
};

export type MeasureNavParamList = {
  AddMeasurementScreen: undefined;
  SelectCustomer: undefined;
  Shirt: { name: string; email?: string; phone: string };
  Trouser: {
    name: string;
    email?: string;
    phone: string;
    neck?: string;
    shoulder?: string;
    sleeveLength?: string;
    sleeveLengthLong?: string;
    sleeveLengthShort?: string;
    sleeveLengthBriga?: string;
    armHole?: string;
    roundSleeve?: string;
    roundSleeveLong?: string;
    roundSleeveShort?: string;
    roundSleeveBriga?: string;
    cuffs?: string;
    chest?: string;
    tummy?: string;
    hip?: string;
    shirtLength?: string;
    shirtLengthLong?: string;
    shirtLengthShort?: string;
    shirtLengthBriga?: string;
  };
  Instructions: {
    name: string;
    email?: string;
    phone: string;
    neck?: string;
    shoulder?: string;
    sleeveLength?: string;
    sleeveLengthLong?: string;
    sleeveLengthShort?: string;
    sleeveLengthBriga?: string;
    armHole?: string;
    roundSleeve?: string;
    roundSleeveLong?: string;
    roundSleeveShort?: string;
    roundSleeveBriga?: string;
    cuffs?: string;
    chest?: string;
    tummy?: string;
    hip?: string;
    shirtLength?: string;
    shirtLengthLong?: string;
    shirtLengthShort?: string;
    shirtLengthBriga?: string;
    waist?: string;
    lap?: string;
    knee?: string;
    base?: string;
    length?: string;
  };
};

export interface Customer {
  name: string;
  email?: string;
  phonenumber?: string;
}

export interface Measurement {
  name: string;
  email?: string;
  phone: string;
  neck?: string;
  shoulder?: string;
  sleeveLength?: string;
  sleeveLengthLong?: string;
  sleeveLengthShort?: string;
  sleeveLengthBriga?: string;
  armHole?: string;
  roundSleeve?: string;
  roundSleeveLong?: string;
  roundSleeveShort?: string;
  roundSleeveBriga?: string;
  cuffs?: string;
  chest?: string;
  tummy?: string;
  hip?: string;
  shirtLength?: string;
  shirtLengthLong?: string;
  shirtLengthShort?: string;
  shirtLengthBriga?: string;
  waist?: string;
  lap?: string;
  knee?: string;
  base?: string;
  length?: string;
  waistStyle?: string;
  handStyle?: string;
  buttons?: string;
  notes?: string;
  createdAt?: string;
}
