import React from 'react'
import useTime from '../hooks/use-time'

function TimeCard() {

    const time = useTime();

    return (
        <div>
            {time}
        </div>
    )
}

export default TimeCard
