import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;

    img {
        width: 126px;
        height: 65px;
        object-fit: contain;
    }

    form {
        width: 328px;

        div > div > div{
            height: 56px;
            margin-bottom: 16px;
        }
    }

    input {
        height: 56px;
        margin-bottom: 16px;
    }
`