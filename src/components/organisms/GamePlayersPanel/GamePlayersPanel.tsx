import React from 'react';
import TableConstructor from '../TableConstructor/TableConstructor';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {Player} from '../../../types/player';
import UserBadge from '../../molecules/UserBadge/UserBadge';

const GamePlayersPanel = () => {
  const players = useSelector<RootState>
  (state => state.game.currentGame?.players) as Player[];

  const invitePeople = () => {

  }

  return (
    <TableConstructor<Player>
      name='Players'
      button={{
        children: 'Invite people',
        onClick: () => invitePeople()
      }}
      settings={[
        {
          name: 'Name',
          render: (option) => (
            <UserBadge
              userId={option.userId}
              username={option.username}
              size='medium'
            />
          )
        }
      ]}
      options={players}
    />
  );
};

export default GamePlayersPanel;