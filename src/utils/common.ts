import {FormikErrors, FormikTouched} from 'formik';
import {ArbitraryObject} from '../types/common';

export const handleFormikErrors = (
  touched: FormikTouched<ArbitraryObject<boolean>>,
  errors: FormikErrors<ArbitraryObject<string>>,
  key: string
): string => {
  if (!touched[key]) return '';
  return errors[key] ?? '';
}