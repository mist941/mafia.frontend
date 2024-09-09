import React from 'react';
import Button from '../../atoms/Button/Button';
import {ActionTypes} from '../../../types/action';
import {useMakePlayerAction} from '../../../hooks/useMakePlayerAction';

const SkipActionButton = () => {
  const skip = useMakePlayerAction(ActionTypes.SKIP);

  return (
    <Button styled='secondary' onClick={skip}>
      Skip
    </Button>
  );
};

export default SkipActionButton;