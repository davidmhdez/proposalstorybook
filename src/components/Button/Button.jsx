import React from 'react';
import styled from 'styled-components';
import PropTypes  from 'prop-types';

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    success: PropTypes.bool,
}

const ButtonWrapper = styled.button`
    padding: 20px;
    background-color: ${props => (props.success ? 'green' : 'gray')};
    color: white;
    border: ${props => (props.border ? '5px inset brown' : 'none')};
`;

function Button({children, onClick, ...rest}) {
    return (  
        <ButtonWrapper {...rest} onClick={onClick}>{children}</ButtonWrapper>
    );
}

Button.defaultProps = {
    text: 'default text',
}
 
export default Button;