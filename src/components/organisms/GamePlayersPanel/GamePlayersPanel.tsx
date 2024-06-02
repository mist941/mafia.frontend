import React from 'react';
import TableConstructor from '../TableConstructor/TableConstructor';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {Player} from '../../../types/player';
import UserBadge from '../../molecules/UserBadge/UserBadge';
import {playerFullStatusNameTable, playerStatusColorsTable} from '../../../utils/player';
import Badge from '../../atoms/Badge/Badge';
import {CurrentGame, GamePeriods} from '../../../types/game';
import Typography from '../../atoms/Typography/Typography';
import styles from './GamePlayersPanel.module.scss';
import {selectCurrentGame} from '../../../store/game/game.selector';

const GamePlayersPanel = () => {
  const {players, player: currentPlayer, game} =
    useSelector<RootState>(selectCurrentGame) as CurrentGame;

  const sortedPlayers = players.slice().sort((a: Player, b: Player) => {
    if (b.id === currentPlayer.id) return 1;
    if (a.id === currentPlayer.id) return -1;
    return 0;
  });

  const getReadyStatus = (player: Player) => {
    if (
      game.currentPeriod !== GamePeriods.START ||
      Number(game.numberOfPlayers) !== players.length
    ) return;
    return (
      <Typography.Paragraph size='xs' color={player.ready ? 'success' : 'error'}>
        {player.ready ? 'Ready' : 'Not ready'}
      </Typography.Paragraph>
    );
  }

  return (
    <TableConstructor<Player>
      settings={[
        {
          name: 'Name',
          render: (player) => (
            <div className={styles.playerInfo}>
              <UserBadge
                userId={player.userId}
                username={player.username}
                size='medium'
              />
              {getReadyStatus(player)}
            </div>
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