import React from 'react';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import Badge from '../../atoms/Badge/Badge';
import {
  playerFullRoleNameTable,
  playerFullStatusNameTable,
  playerRoleColorsTable,
  playerStatusColorsTable
} from '../../../utils/player';
import styles from './PlayerStatePanel.module.scss';
import Tooltip from '../../atoms/Tooltip/Tooltip';
import InviteUserToGame from '../InviteUserToGame/InviteUserToGame';
import {CurrentGame, GamePeriods, GameResponse} from '../../../types/game';
import Button from '../../atoms/Button/Button';
import {FetchResult, useMutation} from '@apollo/client';
import {READY_TO_PLAY} from '../../../graphql/game';
import {updateCurrentGameData} from '../../../utils/game';

const PlayerStatePanel = () => {
  const {player: currentPlayer, game, players} = useSelector<RootState>
  (state => state.game.currentGame) as CurrentGame;
  const [readyToPlay] = useMutation(READY_TO_PLAY);

  const maxUsersToInvite: number = game.numberOfPlayers - players.length;

  const ready = async () => {
    const readyToPlayResponse: FetchResult<{ readyToPlay: GameResponse }> = await readyToPlay({
      variables: {
        readyToPlayInput: {
          gameId: game.id,
          playerId: currentPlayer.id
        }
      },
    });

    if (readyToPlayResponse.data?.readyToPlay) {
      updateCurrentGameData(readyToPlayResponse.data?.readyToPlay);
    }
  }

  return (
    <EssentialBlock className={styles.playerState}>
      <div className={styles.playerStatuses}>
        <Tooltip text='Your role'>
          <Badge
            text={playerFullRoleNameTable[currentPlayer.role]}
            color={playerRoleColorsTable[currentPlayer.role]}
          />
        </Tooltip>
        <Tooltip text='Your curent status'>
          <Badge
            text={playerFullStatusNameTable[currentPlayer.status]}
            color={playerStatusColorsTable[currentPlayer.status]}
            type='full-colored'
          />
        </Tooltip>
      </div>
      {maxUsersToInvite > 0 && <InviteUserToGame maxUsersToInvite={maxUsersToInvite}/>}
      {(Number(game.numberOfPlayers) === players.length && game.currentPeriod === GamePeriods.START) && (
        <Button styled='secondary' onClick={ready}>
          Ready to play
        </Button>
      )}
    </EssentialBlock>
  );
};

export default PlayerStatePanel;