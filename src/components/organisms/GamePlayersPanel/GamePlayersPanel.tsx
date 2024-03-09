import React from 'react';
import TableConstructor from '../TableConstructor/TableConstructor';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {Player} from '../../../types/player';
import UserBadge from '../../molecules/UserBadge/UserBadge';
import {playerFullStatusNameTable, playerStatusColorsTable} from '../../../utils/player';
import Badge from '../../atoms/Badge/Badge';
import {CurrentGame} from '../../../types/game';

const GamePlayersPanel = () => {
  const {players, player: currentPlayer} =
    useSelector<RootState>(state => state.game.currentGame) as CurrentGame;

  const sortedPlayers = players.slice().sort((a: Player, b: Player) => {
    if (b.id === currentPlayer.id) return 1;
    if (a.id === currentPlayer.id) return -1;
    return 0;
  });

  return (
    <TableConstructor<Player>
      settings={[
        {
          name: 'Name',
          render: (player) => (
            <UserBadge
              userId={player.userId}
              username={player.username}
              size='medium'
            />
          )
        },
        {
          name: 'Status',
          render: (player) => (
            <Badge
              text={playerFullStatusNameTable[player.status]}
              color={playerStatusColorsTable[player.status]}
              size='s'
              type='full-colored'
            />
          )
        }
      ]}
      options={sortedPlayers}
      disabledRow={(player) => {
        return player.id === currentPlayer.id;
      }}
    />
  );
};

export default GamePlayersPanel;