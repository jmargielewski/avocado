export interface ErrorMsg {
  message: string;
}

function catchErrors(error: any, displayError: (errors: ErrorMsg[]) => void): void {
  let errors: ErrorMsg[] = [];

  if (error.response) {
    // the request was made and the server responsed with a
    // status code that is not in the range of 2XX
    // errorMsg = { message: error.response.data };

    // // For Cloudinary image uploads
    if (error.response.data.error) {
      if (error.response.data.error.length) {
        errors = error.response.data.error;
      } else {
        errors = [error.response.data.error];
      }
    }
  } else if (error.request) {
    // the request was made, but no response was received
    errors = [{ message: error.request }];
    console.error('Error request', errors);
  } else {
    // something else happened in making the request that
    // triggered an error
    errors = [{ message: error.message }];
    console.error('Error massage', errors);
  }

  displayError(errors);
}

export default catchErrors;
