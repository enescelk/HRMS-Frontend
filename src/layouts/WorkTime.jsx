import React, { useEffect, useState } from 'react'
import WorkTimeService from '../services/WorkTimeService';
import { Select } from 'semantic-ui-react';

export default function WorkTime() {

    const [workTime, setWorkTime] = useState([])

    useEffect(() => {
        let workTimeService = new WorkTimeService();
        workTimeService.getAllWorkTime().then(result => setWorkTime(result.data.data));
    }, [])

    const options = workTime.map(data => ({ key: data.id, value: data.workTime, text: data.workTime }));


    return (
        <div style={{ marginTop: 50 }}>
            <Select placeholder="Is zamani Seçiniz" options={options} />
        </div>
    )
}
