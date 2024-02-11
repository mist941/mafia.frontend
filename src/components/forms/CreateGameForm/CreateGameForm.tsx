import React, {FC} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Typography from '../../atoms/Typography/Typography';
import InputField from '../../molecules/InputField/InputField';
import CheckboxField from '../../molecules/CheckboxField/CheckboxField';
import {handleFormikErrors} from '../../../utils/common';
import Button from '../../atoms/Button/Button';
import {FetchResult, useMutation} from '@apollo/client';
import {CREATE_GAME} from '../../../graphql/mutations';
import {CreateGameRequest, CreateGameResponse} from '../../../types/game';
import {useDispatch} from 'react-redux';
import {updateCurrentGame} from '../../../store/game';

type CreateRoomFormProps = {
  close: () => void;
}

const MIN_NUMBER_OF_PLAYERS = 5;
const MAX_NUMBER_OF_PLAYERS = 19;

const CreateGameForm: FC<CreateRoomFormProps> = ({close}) => {
  const dispatch = useDispatch();
  const [createGame] = useMutation(CREATE_GAME);

  const formik = useFormik({
    initialValues: {
      gameName: '',
      numberOfPlayers: MIN_NUMBER_OF_PLAYERS,
      private: false
    },
    validationSchema: Yup.object({
      gameName: Yup.string().required('Game name is required'),
      numberOfPlayers: Yup.number()
        .required('Number of players is required')
        .min(MIN_NUMBER_OF_PLAYERS, 'Minimum 5 players')
        .max(MAX_NUMBER_OF_PLAYERS, 'Maximum 19 players'),
    }),
    onSubmit: async (values: CreateGameRequest) => {
      const createGameResponse: FetchResult<{ createGame: CreateGameResponse }> = await createGame({
        variables: {createGameInput: values},
      });

      if (createGameResponse.data?.createGame) {
        dispatch(updateCurrentGame(createGameResponse.data?.createGame));
        localStorage.setItem('currentGame', JSON.stringify(createGameResponse.data?.createGame));
        close();
      }
    },
  });

  const {handleSubmit, values, handleChange, errors, touched} = formik;

  return (
    <form className='formContainer' onSubmit={handleSubmit}>
      <Typography.Heading4>
        Create new game
      </Typography.Heading4>
      <div className='fieldsWrap'>
        <InputField
          label='Game name'
          id='gameName'
          name='gameName'
          placeholder='Enter name'
          value={values.gameName}
          onChange={handleChange}
          error={handleFormikErrors(touched, errors, 'gameName')}
        />
        <InputField
          label='Number of players'
          id='numberOfPlayers'
          name='numberOfPlayers'
          type='number'
          placeholder='Enter number of players'
          value={values.numberOfPlayers}
          onChange={handleChange}
          error={handleFormikErrors(touched, errors, 'numberOfPlayers')}
        />
        <CheckboxField
          label='Private'
          id='private'
          name='private'
          checked={values.private}
          onChange={handleChange}
        />
      </div>
      <div className='formButtonsContainer'>
        <Button onClick={close} styled='secondary'>
          Cancel
        </Button>
        <Button type='submit'>
          Create game
        </Button>
      </div>
    </form>
  );
};

export default CreateGameForm;