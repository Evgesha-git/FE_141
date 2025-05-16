import { Box, Button, styled, TextField, Typography } from '@mui/material'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ru } from 'date-fns/locale'
import { ruRU } from '@mui/x-date-pickers/locales'
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers'
import { format } from 'date-fns'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Обязательное поле'),
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
  lasnName: Yup.string(),
  login: Yup.string().required('Обязательное поле'),
  birtDay: Yup.string().required('Обязательное поле')
})

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      lastName: '',
      login: '',
      birtDay: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  })

  const { values, errors, handleChange, setFieldValue, handleSubmit, handleReset, touched, dirty } = formik

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Box
        component={'form'}
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          gap: '5px',
          flexDirection: 'column'
        }}
      >
        <TextField
          name='name'
          onChange={handleChange}
          error={touched.name && errors.name}
          value={values.name}
          placeholder='Имя'
          helperText={errors.name}
        />
        <TextField
          label='email'
          name='email'
          onChange={handleChange}
          error={touched.email && errors.email}
          value={values.email}
          placeholder='Email'
          helperText={errors.email}
        />
        <TextField
          name='lastName'
          onChange={handleChange}
          error={touched.lastName && errors.lastName}
          value={values.lastName}
          placeholder='Отчество'
        />
        <TextField
          name='login'
          onChange={handleChange}
          error={touched.login && errors.login}
          value={values.login}
          placeholder='login'
        />
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          adapterLocale={ru}
          localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
        >
          <DateTimePicker
            name='birtDay'
            value={values.birtDay ? new Date(values.birtDay) : null}
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock
            }}
            onChange={(value) => setFieldValue('birtDay', format(value, "yyyy-MM-dd'T'HH:mm:ss"))}
            maxDateTime={new Date()}
            slotProps={{
              textField: {
                error: touched.birtDay && errors.birtDay,
                helperText: errors.birtDay
              }
            }}
          />
        </LocalizationProvider>
        <Box sx={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
          <Button
            disabled={!dirty}
            type='submit'
            variant='outlined'
            color='success'
          >Отправить</Button>
          <Button onClick={handleReset} variant='outlined' color='secondary'>Сбросить</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default App
