import React from 'react';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';

const SignUpForm = () => {
  return (
    <form>
      <EssentialBlock padding='25px'>
        <Button type='submit'>
          Create account
        </Button>
        <Typography.Paragraph>Or</Typography.Paragraph>
      </EssentialBlock>
    </form>
  );
};

export default SignUpForm;