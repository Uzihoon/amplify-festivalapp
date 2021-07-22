const aws = require('aws-sdk');

exports.handler = async (event, context, callback) => {
  const cognitorProvider = new aws.CognitoIdentityServiceProvider({
    apiVersion: '2016-04-18'
  });

  const adminEmail = ['uzihoon.dev@gmail.com'];
  const isAdmin = adminEmail.indexOf(event.request.userAttributes.email) !== -1;
  const groupParams = {
    UserPoolId: event.userPoolId
  };
  const userParams = {
    UserPoolId: event.userPoolId,
    Username: event.userName
  };

  if (isAdmin) {
    groupParams.GroupName = 'Admin';
    userParams.GroupName = 'Admin';

    try {
      await cognitorProvider.getGroup(groupParams).promise();
    } catch (error) {
      await cognitorProvider.createGroup(groupParams).promise();
    }

    try {
      await cognitorProvider.adminAddUserToGroup(userParams).promise();
      callback(null, event);
    } catch (e) {
      callback(e);
    }
  } else {
    callback(null, event);
  }
};
