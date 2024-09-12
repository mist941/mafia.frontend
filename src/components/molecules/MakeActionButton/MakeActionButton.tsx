import React, {FC} from 'react';
import Button, {ButtonProps} from '../../atoms/Button/Button';
import {ActionTypes} from '../../../types/action';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../store/store';
import {setAction} from '../../../store/game/game.reducer';
import {Id} from '../../../types/common';

type MakeActionButtonProps = {
  actionType: ActionTypes;
  targetPlayerId: Id;
} & ButtonProps;

const MakeActionButton: FC<MakeActionButtonProps> = ({actionType, targetPlayerId, ...rest}) => {
  const dispatch: AppDispatch = useDispatch();
  const makeAction = () => {
    dispatch(setAction({
      actionType,
      targetPlayerId
    }));
  }
  return <Button onClick={makeAction} {...rest}/>;
};

export default MakeActionButton;