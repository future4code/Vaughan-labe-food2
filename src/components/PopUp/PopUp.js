import React from 'react';
import useRequestData from '../../hooks/useRequestData';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { BASE_URL } from '../../constants/URL';

export default function PopUp() {
    const [data] = useRequestData({}, `${BASE_URL}/active-order`)

    console.log(data)

    return(
        <div>

        </div>
    )
}