import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
padding: 10px;
display: flex;
flex-direction: column;
gap: 10px;
`;
export const StyledError = styled(ErrorMessage)`
color: red;
`;