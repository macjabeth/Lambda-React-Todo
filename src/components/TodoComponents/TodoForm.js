import React from 'react';
import * as PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TodoFormSchema = Yup.object().shape({
  task: Yup.string().min(2).max(50).required()
});

class TodoForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ task: '' }}
        validationSchema={TodoFormSchema}
        onSubmit={(values, { resetForm }) => {
          this.props.addTodo({
            id: Date.now(),
            task: values.task,
            completed: false
          });
          resetForm();
        }}
      >
        {() => (
          <Form className='todo-form'>
            <Field type='text' name='task' placeholder='I need to...' />
            <ErrorMessage name='task' render={msg => (
              <p className='warning'>{msg}</p>
            )} />
          </Form>
        )}
      </Formik>
    )
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;