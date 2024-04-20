import React, {FC, useState} from 'react';
import Button from '../../atoms/Button/Button';
import ModalWindow from '../../molecules/ModalWindow/ModalWindow';
import InviteUsersForm from '../../forms/InviteUsersForm/InviteUsersForm';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {CurrentGame} from '../../../types/game';
import {Id} from '../../../types/common';
import {Player} from '../../../types/player';

type InviteUserToGameProps = {
  maxUsersToInvite: number;
}

const InviteUserToGame: FC<InviteUserToGameProps> = ({maxUsersToInvite}) => {
  const {game, players} = useSelector<RootState>
  (state => state.game.currentGame) as CurrentGame;
  const [isOpenInvitePopUp, setOpenInvitePopUp] = useState<boolean>(false);

  const alreadyAddedUserIds: Id[] = players.map((player: Player) => player.userId);

  const toggleInvitePopup = () => {
    setOpenInvitePopUp(prevState => !prevState);
  }

  return (
    <>
      <Button styled='secondary' onClick={toggleInvitePopup}>
        Invite users
      </Button>
      {isOpenInvitePopUp && (
        <ModalWindow close={toggleInvitePopup}>
          <InviteUsersForm
            close={toggleInvitePopup}
            alreadyAddedUserIds={alreadyAddedUserIds}
            maxUsersToInvite={maxUsersToInvite}
            game={game}
          />
        </ModalWindow>
      )}
    </>
  );
};

export default InviteUserToGame;