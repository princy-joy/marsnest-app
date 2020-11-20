const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: " marsnest-data",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://fliueu15ug.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_IREf88KUw",
    APP_CLIENT_ID: "1pf4osf7iun0eg2g9js3qoq8c8",
    IDENTITY_POOL_ID: "us-east-1:f75806fe-c53b-4ca6-9222-0ebdf1b048bd",
  },
};

export default config;