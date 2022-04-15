// import { BASE_API_URL } from '../constants/index';
const axios = require('axios');
const BASE_API_URL = require('../constants/index');

module.exports.LoginService = {

  /* Login User Service */

  login: (email, password) => {
    try {
      return new Promise((resp, rej) => {
        const data = JSON.stringify({
          email,
          password,
        });

        const config = {
          method: 'post',
          url: `${BASE_API_URL}/api/user/login`,
          headers: {
            'Content-Type': 'application/json',
          },
          data,
        };

        axios(config)
          .then((response) => {
            if (response) {
              resp(response);
            } else {
              rej(response);
            }
          })
          .catch((error) => {
            rej(error.response.data);
          });
      });
    } catch (error) {
      return error;
    }
  },

  /* signup User Service */

  signup: (info) => {
    try {
      return new Promise((resp, rej) => {
        const data = JSON.stringify({
          FirstName: info.firstName,
          LastName: info.lastName,
          CompanyName: info.companyName,
          CountryCode: info.countryCode,
          MobileNumber: info.mobileNumber,
          Password: info.password,
          Email: info.email,
          Role: info.role,
          Business: info.business,
          DateOfBirth: info.dataOfBirth,
          IdType: info.idType,
          IdNumber: info.idNumber,
          CompanyRegisterNumber: info.companyRegisterNumber,
          TaxId: info.taxId,
          DeviceToken: info.deviceToken,
          DeviceType: info.deviceType,
          IdentityImage: info.identityImage,
          HeadshotImage: info.headshotImage,

        });

        const config = {
          method: 'post',
          url: `${BASE_API_URL}/api/user/signup`,
          headers: {
            'Content-Type': 'application/json',
          },
          data,
        };

        axios(config)
          .then((response) => {
            if (response) {
              resp(response);
            } else {
              rej(response);
            }
          })
          .catch((error) => {
            rej(error.response.data);
          });
      });
    } catch (error) {
      return error;
    }
  },

  /* checkemailexist Service */

  checkemailexist: (email) => {
    try {
      return new Promise((resp, rej) => {
        const data = JSON.stringify({
          email,

        });

        const config = {
          method: 'post',
          url: `${BASE_API_URL}/api/user/checkemailexist`,
          headers: {
            'Content-Type': 'application/json',
          },
          data,
        };

        axios(config)
          .then((response) => {
            if (response) {
              resp(response);
            } else {
              rej(response);
            }
          })
          .catch((error) => {
            rej(error.response.data);
          });
      });
    } catch (error) {
      return error;
    }
  },

  /* Login User Service */

  sendforgototp: (mobileNumber) => {
    try {
      return new Promise((resp, rej) => {
        const data = JSON.stringify({
          mobileNumber,
        });

        const config = {
          method: 'post',
          url: `${BASE_API_URL}/api/user/sendforgototp`,
          headers: {
            'Content-Type': 'application/json',
          },
          data,
        };

        axios(config)
          .then((response) => {
            if (response) {
              resp(response);
            } else {
              rej(response);
            }
          })
          .catch((error) => {
            rej(error.response.data);
          });
      });
    } catch (error) {
      return error;
    }
  },
};
