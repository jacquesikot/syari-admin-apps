export interface OnboardingData {
  id: number;
  imageLight: number;
  imageDark: number;
  topText: string;
  bottomText: string;
  width: number;
  height: number;
}

const data: OnboardingData[] = [
  {
    id: 1,
    imageLight: require('../../assets/images/onboarding-1-light.png'),
    imageDark: require('../../assets/images/onboarding-1-dark.png'),
    topText: 'Set Measurements',
    bottomText: 'Add Syari Bespoke measurments on the go',
    width: 375,
    height: 268,
  },
  {
    id: 2,
    imageLight: require('../../assets/images/onboarding-2-light.png'),
    imageDark: require('../../assets/images/onboarding-2-dark.png'),
    topText: 'Contact Support',
    bottomText: 'Keep the whole teams synced with the same data',
    width: 375,
    height: 268,
  },
  {
    id: 3,
    imageLight: require('../../assets/images/onboarding-3-light.png'),
    imageDark: require('../../assets/images/onboarding-3-dark.png'),
    topText: 'Customers',
    bottomText: 'Manage and know all your customers  ',
    width: 375,
    height: 268,
  },
];

export default data;
