import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ErrorPayload {
  field: string;
  error?: string;
  isError?: boolean;
}

export interface FormState {
  form: any;
  name: string;
  email: string;
  message: string;
  submitting: boolean;
  error: ErrorPayload | null;
}

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
  submitting: true,
  error: {
    field: "",
    error: "",
    isError: false,
  },
  form: undefined,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.submitting = action.payload;
    },

    setError: (
      state,
      action: PayloadAction<{
        field: string;
        error?: string;
        isError?: boolean;
      }>
    ) => {
      const { field, error, isError } = action.payload;
      console.log(field, error, isError);

      state.error = {
        ...state.error,
        [field]: { error, isError },
      } as ErrorPayload;
      // Use the non-null assertion operator to ensure that the `field` property is not `undefined`.
    },

    clearForm: () => initialState,
  },
});

export const {
  setName,
  setEmail,
  setMessage,
  setSubmitting,
  setError,
  clearForm,
} = formSlice.actions;

export default formSlice.reducer;
