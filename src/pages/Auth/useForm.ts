import { useState, useEffect, useCallback } from 'react';

interface Field {
  value: string;
  error: string;
}

export interface StateSchema {
  [key: string]: Field;
}

export interface ValidationStateSchema {
  [key: string]: {
    required: boolean;
    validator: {
      regEx: RegExp;
      error: string;
    };
  };
}

export type Callback = (state: StateSchema) => void | Promise<void>;

function useForm(
  stateSchema: StateSchema,
  validationSchema: ValidationStateSchema,
  callback: Callback,
): {
  /* eslint-disable */
  state: StateSchema;
  disable: boolean;
  handleOnChange: any;
  handleOnBlur: any;
  handleOnSubmit: any;
} {
  /* eslint-enable */
  const [state, setState] = useState(stateSchema);
  const [disable, setDisable] = useState(true);
  const [isDirty, setIsDirty] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  // Disable button in initial render.
  // useEffect(() => {
  //   setDisable(true);
  // }, []);

  // For every changed in our state this will be fired
  // To be able to disable the button
  useEffect(() => {
    if (isDirty && isTouched) {
      setDisable(validateState()); // eslint-disable-line @typescript-eslint/no-use-before-define
    }
  }, [state, isDirty]);

  // Used to disable submit button if there's an error in state
  // or the required field in state has no value.
  // Wrapped in useCallback to cached the function to avoid intensive memory leaked
  // in every re-render in component
  const validateState = useCallback(() => {
    const hasErrorInState = Object.keys(validationSchema).some((key) => {
      const isInputFieldRequired = validationSchema[key].required;
      const stateValue = state[key].value; // state value
      const stateError = state[key].error; // state error

      return (isInputFieldRequired && !stateValue) || stateError;
    });

    return hasErrorInState;
  }, [state, validationSchema]);

  // Used to handle every changes in every input
  const handleOnChange = useCallback(
    (event, firstTouch) => {
      if (event.target.value.length) {
        setIsDirty(true);
      }

      //   const name = event.target.name;
      //   const value = event.target.value;
      const { name, value } = event.target;
      let error = '';
      if (isTouched || firstTouch) {
        if (validationSchema[name].required) {
          if (!value) {
            error = 'This is required field.';
          }
        }

        if (
          validationSchema[name].validator !== null &&
          typeof validationSchema[name].validator === 'object'
        ) {
          if (value && !validationSchema[name].validator.regEx.test(value)) {
            error = validationSchema[name].validator.error;
          }
        }
      }

      setState((prevState: StateSchema) => ({
        ...prevState,
        [name]: { value, error },
      }));
    },
    [validationSchema],
  );

  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault();

      // Make sure that validateState returns false
      // Before calling the submit callback function
      if (!validateState()) {
        callback(state);
      }
    },
    [state],
  );

  const handleOnBlur = useCallback(
    (event) => {
      setIsTouched(true);
      handleOnChange(event, true);
    },
    [isTouched],
  );

  return { state, disable, handleOnChange, handleOnBlur, handleOnSubmit };
}

export default useForm;
