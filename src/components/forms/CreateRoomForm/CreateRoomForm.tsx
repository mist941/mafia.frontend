import React, {FC} from 'react';
import {FormDefaultProps} from '../../../types/common';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Typography from '../../atoms/Typography/Typography';
import InputField from '../../molecules/InputField/InputField';
import {handleFormikErrors} from '../../../utils/common';
import Button from '../../atoms/Button/Button';
import {CreateGameRoomRequestI} from '../../../types/gameroom';

type CreateRoomFormProps = {
  cancel: () => void;
} & FormDefaultProps<CreateGameRoomRequestI>;

const CreateRoomForm: FC<CreateRoomFormProps> = ({send, cancel}) => {
  const formik = useFormik({
    initialValues: {
      gameName: '',
      numberOfPlayers: 6,
    },
    validationSchema: Yup.object({
      gameName: Yup.string().required('Game name is required'),
      numberOfPlayers: Yup.number()
        .required('Number of players is required')
        .min(5, 'Minimum 5 players')
        .max(19, 'Maximum 19 players'),
    }),
    onSubmit: (values) => {
      send(values);
    },
  });

  const {handleSubmit, values, handleChange, errors, touched} = formik;

  const closeForm = () => {
    cancel();
  }

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
      </div>
      <div className='formButtonsContainer'>
        <Button onClick={closeForm} styled='secondary'>
          Cancel
        </Button>
        <Button type='submit'>
          Create game
        </Button>
      </div>
    </form>
  );
};

export default CreateRoomForm;