import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  panData = {} as any;
  gstData = {} as any;
  gstNumber!: String;
  userData = {} as any;

  mobileVerifyRequestId!: String;

  extraMobileVerifyAgain = false;
  gstVerifyAgain = false;
  panVerifyAgain = false;
  aadhharVerifyAgain = false;

  constructor(private _http: HttpClient) {}

  authToken!: String;
  aadhar!: any | String;
  mobileNo!: String;

  whatsappOTP(mobileNumber: Number, otp: Number) {
    let phone = mobileNumber.toString();
    return this._http
      .post(
        'https://api.interakt.ai/v1/public/message/',
        {
          countryCode: '91',
          phoneNumber: phone,
          callbackData: 'Hello',
          type: 'Template',
          template: {
            name: 'partner_otp_message',
            languageCode: 'en',
            headerValues: [],
            bodyValues: [otp],
            buttonValues: {
              1: [],
            },
          },
        },
        {
          headers: {
            Authorization:
              'Basic cDdTTUEyeFdBYmR0NWV1SjRWWmcxUF80YkUwUEJ2WWc2N1FiNUU5c2RNbzo=',

            //other header fields
          },
        }
      )
      .pipe(
        map(
          (Response) => {
            return Response;
          },
          catchError((err, caught) => {
            throw err;
          })
        )
      );
  }

  addMobile(mobile: String) {
    let mob = Number(mobile);
    return this._http
      .post(environment.apiUrl + '/dvc/addMobile', {
        mobileNumber: mob,
        mobileVerification: false,
        panVerification: false,
        gstVerification: false,
        aadharVerification: false,
        dlVerification: false,
        extraMobileVerification: false,
      })
      .pipe(
        map(
          (Response) => {
            return Response;
          },
          catchError((err, caught) => {
            throw err;
          })
        )
      );
  }

  addPanDetails(mobile: String, pan: String) {
    return this._http
      .post(environment.apiUrl + '/dvc/addPanDetails', {
        mobileNumber: mobile,
        pannumber: pan,
      })
      .pipe(
        map(
          (Response) => {
            return Response;
          },
          catchError((err, caught) => {
            throw err;
          })
        )
      );
  }
  addGstDetails(mobile: String, pan: String) {
    return this._http
      .post(environment.apiUrl + '/dvc/addGstDetails', {
        mobileNumber: mobile,
        gstnummber: pan,
      })
      .pipe(
        map(
          (Response) => {
            return Response;
          },
          catchError((err, caught) => {
            throw err;
          })
        )
      );
  }

  encryptAadhar(aadhar: String) {
    return this._http
      .get(environment.apiUrl + '/dvc/generateEncryptAadhar?aadhar=' + aadhar)
      .pipe(
        map(
          (Response) => {
            return Response;
          },
          catchError((err, caught) => {
            throw err;
          })
        )
      );
  }

  generateAddharToken() {
    return this._http.post(environment.apiUrl + '/dvc/aadharToken', {}).pipe(
      map(
        (Response) => {
          return Response;
        },
        catchError((err, caught) => {
          throw err;
        })
      )
    );
  }

  sendAadharOTP(aadhar: String, auth: String) {
    return this._http
      .post(environment.apiUrl + '/dvc/sendAddharOTP', {
        aadharnumber: aadhar,
        auth: auth,
      })
      .pipe(
        map(
          (Response) => {
            return Response;
          },
          catchError((err, caught) => {
            throw err;
          })
        )
      );
  }

  verifyAadharOTP(
    auth: String,
    mobileNumber: String,
    aadhar: String,
    transId: String,
    otp: String
  ) {
    return this._http
      .post(environment.apiUrl + '/dvc/verifyAadharOTP', {
        aadharnumber: aadhar,
        auth: auth,
        otp: otp,
        transId: transId,
        mobileNumber: mobileNumber,
      })
      .pipe(
        map(
          (Response) => {
            return Response;
          },
          catchError((err, caught) => {
            throw err;
          })
        )
      );
  }

  getSingleUser(mobile: String) {
    return this._http
      .get(environment.apiUrl + 'dvc/getSingleUser?mobileNumber=' + mobile)
      .pipe(
        map(
          (Response) => {
            return Response;
          },
          catchError((err, caught) => {
            throw err;
          })
        )
      );
  }

  saveDLData(dl: String, dob: String, mobile: String) {
    return this._http
      .post(environment.apiUrl + 'dvc/verifyDL', {
        dl_number: dl,
        dob: dob,
        mobileNumber: mobile,
      })
      .pipe(
        map(
          (Response) => {
            return Response;
          },
          catchError((err, caught) => {
            throw err;
          })
        )
      );
  }

  verifyMobileWithoutOTP(mobile: String) {
    return this._http
      .post(environment.apiUrl + '/dvc/verifyMobileWithoutOTP', {
        mobile: mobile,
      })
      .pipe(
        map(
          (Response) => {
            return Response;
          },
          catchError((err, caught) => {
            throw err;
          })
        )
      );
  }

  getAllUsers() {
    return this._http.get(environment.apiUrl + 'getAllAdminUser').pipe(
      map(
        (Response) => {
          return Response;
        },
        catchError((err, caught) => {
          throw err;
        })
      )
    );
  }

  generateQR(req: String) {
    return this._http
      .post(environment.apiUrl + '/dvc/qrGenerator', {
        id: req,
      })
      .pipe(
        map(
          (Response) => {
            return Response;
          },
          catchError((err, caught) => {
            throw err;
          })
        )
      );
  }

  sendMobileOTP(mobile: String) {
    return this._http
      .post(environment.apiUrl + '/dvc/sendMobileOTP', {
        mobile: mobile,
      })
      .pipe(
        map(
          (Response) => {
            return Response;
          },
          catchError((err, caught) => {
            throw err;
          })
        )
      );
  }

  verifyMobileOTP(otp: String, requestId: String) {
    return this._http
      .post(environment.apiUrl + '/dvc/verifyMobileOTP', {
        otp: otp,
        requestId: requestId,
      })
      .pipe(
        map(
          (Response) => {
            return Response;
          },
          catchError((err, caught) => {
            throw err;
          })
        )
      );
  }

  getMobileData(requestId: String, mobileNo : String) {
    return this._http
      .post(environment.apiUrl + '/dvc/getMobileData', {
        requestId: requestId,
        mobile: mobileNo
      })
      .pipe(
        map(
          (Response) => {
            return Response;
          },
          catchError((err, caught) => {
            throw err;
          })
        )
      );
  }
}
