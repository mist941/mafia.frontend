import React, {FC, useMemo, useState} from 'react';
import SearchDropDown from '../../molecules/SearchDropDown/SearchDropDown';
import Button from '../../atoms/Button/Button';
import {useMutation, useQuery} from '@apollo/client';
import {SEARCH_USERS} from '../../../graphql/user';
import Typography from '../../atoms/Typography/Typography';
import {User} from '../../../types/user';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Error from '../../atoms/Error/Error';
import {DropDownOptionType} from '../../atoms/DropDownOption/DropDownOption';
import {Id} from '../../../types/common';
import {ReactComponent as UserIcon} from '../../../assets/icons/user.svg';
import styles from './InviteUsersForm.module.scss';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import UserAvatar from '../../atoms/UserAvatar/UserAvatar';
import {INVITE_PLAYERS} from '../../../graphql/game';
import {Game} from '../../../types/game';

type FormValues = {
  users: DropDownOptionType[];
}

type InviteUsersFormProps = {
  close: () => void;
  maxUsersToInvite: number;
  game: Game;
  alreadyAddedUserIds: Id[];
}

const InviteUsersForm: FC<InviteUsersFormProps> = (
  {
    close,
    alreadyAddedUserIds,
    maxUsersToInvite,
    game
  }
) => {
  const [invitePlayers] = useMutation(INVITE_PLAYERS);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const {data} = useQuery<{ searchUsers: User }>(SEARCH_USERS, {
    variables: {
      searchUsersInput: {
        query: searchTerm ?? ''
      }
    }
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      users: [],
    },
    validationSchema: Yup.object({
      users: Yup.array().max(maxUsersToInvite, `You cannot add more than ${maxUsersToInvite} players`)
    }),
    onSubmit: ({users}) => {
      const userIds = users.map(user => user.id);
      const invitePlayerValues = {userIds, gameName: game.name, gameId: game.id};
      invitePlayers({
        variables: {invitePlayersInput: invitePlayerValues},
      });

      close();
    },
  });

  const foundUsers = useMemo<DropDownOptionType[]>(() => {
    const users = (data?.searchUsers ?? []) as User[];
    return users.map(user => ({id: user.id, name: user.username}));
  }, [data?.searchUsers]);

  const {handleSubmit, values, setFieldValue, errors} = formik;

  const updateSearchTerm = (query: string) => {
    setSearchTerm(query);
  }

  const selectUser = (option: DropDownOptionType) => {
    setFieldValue('users', [...values.users, option]);
  }

  const removeUser = (id: Id) => {
    setFieldValue('users', values.users.filter(user => user.id !== id));
  }

  const filterUser = (option: DropDownOptionType) => {
    const userIds: Id[] = values.users.map(user => user.id).concat(alreadyAddedUserIds);
    return !userIds.includes(option.id);
  }

  return (
    <form className='formContainer' onSubmit={handleSubmit}>
      <Typography.Heading4>
        Invite Users
      </Typography.Heading4>
      <SearchDropDown
        search={updateSearchTerm}
        onSelect={selectUser}
        options={foundUsers}
        filterOption={filterUser}
        placeholder='Start typing to find a user'
        icon={<UserIcon className={styles.userIcon}/>}
      />
      <div className={styles.users}>
        {values.users.map(user => (
          <EssentialBlock
            key={user.id}
            padding='6px 12px'
            className={styles.singleUser}
          >
            <div className={styles.leftSide}>
              <UserAvatar userId={user.id}/>
              <Typography.Paragraph size='m'>
                {user.name}
              </Typography.Paragraph>
            </div>
            <Button
              styled='secondary-transparent'
              onClick={() => removeUser(user.id)}
            >
              Remove
            </Button>
          </EssentialBlock>
        ))}
      </div>
      {errors.users && <Error error={errors.users as string}/>}
      <div className='formButtonsContainer'>
        <Button styled='secondary' onClick={close}>Cancel</Button>
        <Button type='submit'>Invite</Button>
      </div>
    </form>
  );
};

export default InviteUsersForm;