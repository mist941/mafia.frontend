import React from 'react';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import Button from '../../atoms/Button/Button';

const SignUpForm = () => {
  return (
    <form>
      <EssentialBlock padding='25px'>
        <Button type='submit'>
          Create account
        </Button>
      </EssentialBlock>
    </form>
  );
};

export default SignUpForm;