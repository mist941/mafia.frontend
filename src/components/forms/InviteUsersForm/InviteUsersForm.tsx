import React, {FC, useMemo, useState} from 'react';
import SearchDropDown from '../../molecules/SearchDropDown/SearchDropDown';
import Button from '../../atoms/Button/Button';
import {useQuery} from '@apollo/client';
import {SEARCH_USERS} from '../../../graphql/user';
import Typography from '../../atoms/Typography/Typography';
import {User} from '../../../types/user';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Error from '../../atoms/Error/Error';
import {DropDownOptionType} from '../../atoms/DropDownOption/DropDownOption';
import {Id} from '../../../types/common';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {ReactComponent as UserIcon} from '../../../assets/icons/user.svg';
import styles from './InviteUsersForm.module.scss';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import UserAvatar from '../../atoms/UserAvatar/UserAvatar';

type FormValues = {
  users: DropDownOptionType[];
}

type InviteUsersFormProps = {
  close: () => void;
  maxUsersToInvite: number;
}

const InviteUsersForm: FC<InviteUsersFormProps> = ({close, maxUsersToInvite}) => {
  const currentUser = useSelector<RootState>(state => state.user.currentUser) as User;
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
    onSubmit: async () => {

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

  const selectOption = (option: DropDownOptionType) => {
    setFieldValue('users', [...values.users, option]);
  }

  const filterOption = (option: DropDownOptionType) => {
    const userIds: Id[] = values.users.map(user => user.id);
    return !userIds.includes(option.id) && option.id !== currentUser.id;
  }

  return (
    <form className='formContainer' onSubmit={handleSubmit}>
      <Typography.Heading4>
        Invite Users
      </Typography.Heading4>
      <SearchDropDown
        search={updateSearchTerm}
        onSelect={selectOption}
        options={foundUsers}
        filterOption={filterOption}
        placeholder='Start typing to find a user'
        icon={<UserIcon className={styles.userIcon}/>}
      />
      <div className={styles.users}>
        {values.users.map(user => (
          <EssentialBlock
            key={user.id}
            padding='5px'
            className={styles.singleUser}
          >
            <UserAvatar userId={user.id}/>
            {user.name}
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