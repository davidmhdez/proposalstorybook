import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    font-size: ${props => (props.MD ? '20px' : '16px')};
`;

const InputWrapper = styled.input`
    width: 100%;
    padding: 20px;
    border: 2px solid blue;
`;

function Input({text, placeholder, disabled, ...rest}){
    return(
        <Container {...rest}>
            <label>{text}</label>
            <InputWrapper placeholder={placeholder} disabled={disabled}/>
        </Container>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    MD: PropTypes.bool,
}

Input.defaultProps = {
    label: 'test input',
    placeholder: 'set your placeholder',
    disabled: false,
}

export default Input;