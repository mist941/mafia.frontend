import React from 'react';
import TableConstructor from '../TableConstructor/TableConstructor';
import {useSelector} from 'react-redux';
import {Player} from '../../../types/player';
import UserBadge from '../../molecules/UserBadge/UserBadge';
import {
  isAllowedToHill,
  isAllowedToKill,
  playerFullStatusNameTable,
  playerStatusColorsTable
} from '../../../utils/player';
import Badge from '../../atoms/Badge/Badge';
import {CurrentGame, GamePeriods} from '../../../types/game';
import Typography from '../../atoms/Typography/Typography';
import styles from './GamePlayersPanel.module.scss';
import {selectCurrentAction, selectCurrentGame} from '../../../store/game/game.selector';
import MakeActionButton from '../../molecules/MakeActionButton/MakeActionButton';
import {ActionTypes} from '../../../types/action';


const GamePlayersPanel = () => {
  const {players, player: currentPlayer, game} = useSelector(selectCurrentGame) as CurrentGame;
  const currentAction = useSelector(selectCurrentAction);

  const sortedPlayers = players.slice().sort((a: Player, b: Player) => {
    if (b.id === currentPlayer.id) return 1;
    if (a.id === currentPlayer.id) return -1;
    return 0;
  });

  const getReadyStatus = (player: Player) => {
    if (
      game.currentPeriod !== GamePeriods.START ||
      Number(game.numberOfPlayers) !== players.length
    ) {
      return;
    }
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
      rowExpansion={(player: Player) => {
        if (currentAction?.targetPlayerId === player.id) return;
        if (isAllowedToKill(game, currentPlayer, player)) {
          return (
            <MakeActionButton
              actionType={ActionTypes.KILL}
              targetPlayerId={player.id}
              styled='danger'
              size='xs'
            >
              Kill
            </MakeActionButton>
          );
        }
        if (isAllowedToHill(game, currentPlayer)) {
          return (
            <MakeActionButton
              actionType={ActionTypes.HILL}
              targetPlayerId={player.id}
              styled='danger'
              size='xs'
            >
              Hill
            </MakeActionButton>
          );
        }
      }}
      rowDecoration={(player: Player) => {
        if (currentAction?.targetPlayerId === player.id) {
          return {
            border: '1px solid var(--bg-st-red)'
          }
        }
      }}
      options={sortedPlayers}
      disabledRow={(player) => {
        return player.id === currentPlayer.id;
      }}
    />
  );
};

export default GamePlayersPanel;