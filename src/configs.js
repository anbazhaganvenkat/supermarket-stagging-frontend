const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const appApi = path => `${REACT_APP_API_URL}/${path}`;

// API call routes
export const endpoints = version => ({
  expertAvailabilityUpdate: appApi("v1/users/capacityJournals"),
  expertRequest: appApi("v1/experts/request"),
  expertRequestList: appApi("v1/experts/request"),
  userCapacityList: appApi("v1/users/capacity"),
  userLogin: appApi("v1/user/login"),
  customerAPI: appApi("v1/customer"),
  expertAPI: appApi("v1/expert"),
  expertSignUp: appApi("v1/expert"),
  expertSignUpUpdate: appApi("v1/expert"),
  expertSignUpAvatarUpdate: appApi("v1/expert/updateAvatar"),
  tagAPI: appApi("v1/tag"),
  tagTypeAPI: appApi("v1/tagType"),
  projectAPI: appApi("v1/project"),
  userAPI: appApi("v1/user"),
  settingAPI: appApi("v1/setting"),
  projectCategoryAPI: appApi("v1/projectCategory"),
  playbookAPI: appApi("v1/playbook"),
  playbookTagAPI: appApi("v1/playbook/tags/list"),
  collectionAPI: appApi("v1/collection"),
  customerUserAPI: appApi("v1/customerUser"),
  paymentAPI: appApi("v1/payment"),
  invoiceAPI: appApi("v1/invoice"),
  discussionAPI: appApi("v1/discussion"),
  collectionPlaybookAPI: appApi("v1/collectionPlaybook"),
  landingPageAPI: appApi("v1/landingPage"),
  landingPageBlocksAPI: appApi("v1/landingPageBlocks"),
  expertProfileTagAPI: appApi("v1/expertProfileTag"),
  publicAPI: appApi("v1/public"),
  stripeAPI: appApi("v1/stripe"),
  orderAPI: appApi("v1/order"),
  publicProjectCategoryAPI: appApi("v1/public/projectCategories/list")
});

export const REACT_APP_URL = process.env.REACT_APP_URL;

export const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const DEFAULT_API_KEY = process.env.REACT_APP_DEFAULT_API_KEY;

export const STRIPE_API_KEY = process.env.STRIPE_PROVIDER_API_KEY;
