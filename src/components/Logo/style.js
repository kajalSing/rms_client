import styled, {css} from 'styled-components';

export const StyledLogo = styled.div`
    a {text-decoration:none}
    b {font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    letter-spacing: -1px;
    background-image: linear-gradient( to right, #3c4edd 0%, #b35ecd 50%, #f47a61 100% );
    ${props =>
        props.size=="md"
            ? css`
            font-size: 32px;
            `
            :
            props.size=="sm"
            ? css`
            font-size: 16px;
            `
            :
            props.size=="lg"
            ? css`
            font-size: 40px;
            `
            : css `
            font-size: 12px;
            `
            }
    }

 `