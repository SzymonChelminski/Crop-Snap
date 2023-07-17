import { CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'eu-north-1_DZwptmUje',
    ClientId: '79gr83tnv54c5bgv1h0e4qm5t3'
}

export default new CognitoUserPool(poolData);