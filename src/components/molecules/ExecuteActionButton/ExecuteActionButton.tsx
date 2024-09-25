import React from 'react';
import Button from '../../atoms/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {selectCurrentAction} from '../../../store/game/game.selector';
import {useMakePlayerAction} from '../../../hooks/useMakePlayerAction';
import {AppDispatch} from '../../../store/store';
import {clearAction} from '../../../store/game/game.reducer';

const ExecuteActionButton = () => {
  const dispatch:AppDispatch = useDispatch();
  const currentAction = useSelector(selectCurrentAction);
  const execute = useMakePlayerAction(currentAction?.actionType, currentAction?.targetPlayerId);

  const executeAction = async ()=>{
    await execute();
    dispatch(clearAction());
  }

  return (
    <Button onClick={executeAction} styled='primary'>
      Execute
    </Button>
  );
};

export default ExecuteActionButton;