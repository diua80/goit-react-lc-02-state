import { nanoid } from 'nanoid';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { StyledForm, StyledError } from './QuizForm.styled';

const SignupSchema = Yup.object().shape({
        topic: Yup.string().min(1, 'Too Short!').max(50, 'Too Long!').required('Required'),
        level: Yup.string().oneOf(['beginner', 'intermediate', 'advanced']).required('Required'),
        time: Yup.number().min(10, 'Not enough time!').positive('Must be > 0').required('Required'),
        question: Yup.number().min(3, 'Min three!').max(50, 'Too Long!').required('Required'),
});
 
export const QuizForm = ({onAdd}) => {
    return <Formik
      initialValues={{
        topic: '',
        level: 'beginner',
        time: 0,
        question: 0,
      }}
        validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        console.log(values);
          onAdd({...values, id:nanoid()});
          actions.resetForm();
      }}
    >
      <StyledForm>
            <label>
                Topic
                <Field name="topic" placeholder="Quiz topic..." />
                <StyledError component="div" name="topic"/>
            </label>

            <label>
                Level
                <Field as="select" name="level">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </Field>
                <StyledError component="div" name="level"/>
            </label>

            <label>
                Time
                <Field name="time" type="number" placeholder="Quiz time..." />
                <StyledError component="div" name="time"/>
            </label>

            <label>
                Questions
                <Field name="question" type="number" placeholder="number of questions..." />
                <StyledError component="div" name="question"/>
            </label>

        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>;
}