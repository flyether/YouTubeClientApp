export type ErrorFromServer = {
  code: number;
  message: string;
  errors: [];
};

export const setErrorMassage = (errResp: ErrorFromServer): string => {
  let errorMessage = 'ошибка';
  if (errResp.message) {
    errorMessage = errResp.message;
  }
  return errorMessage;
};
