import React, { useState, useEffect } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import { Icon, Button, FormGroup, Grid, Card } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';
import KodlamaIoSelect from '../utilities/customFormControls/KodlamaIoSelect';
import KodlamaIoTextArea from '../utilities/customFormControls/KodlamaIoTextArea';
import WorkTimeService from '../services/WorkTimeService'
import WorkTypeService from '../services/WorkTypeService'
import CitieService from '../services/CitieService'
import JobPositionService from '../services/JobPositionService'
import JobAdvertisementService from '../services/JobAdvertisementService';
import '../style/JobAdvertisementAdd_btnAdd/btnAdd.css';

export default function JobAdvertisementAdd() {

    let jobAdvertisementService = new JobAdvertisementService();

    const [workTimes, setWorkTime] = useState([])
    const [workTypes, setWorkType] = useState([])
    const [cities, setCity] = useState([])
    const [jobPositions, setJobPosition] = useState([])

    useEffect(() => {
        let workTimeService = new WorkTimeService();
        workTimeService.getAllWorkTime().then(result => setWorkTime(result.data.data))

        let workTypeService = new WorkTypeService();
        workTypeService.getAllWorkType().then(result => setWorkType(result.data.data))

        let cityService = new CitieService();
        cityService.getAllCities().then(result => setCity(result.data.data))

        let jobPositionService = new JobPositionService();
        jobPositionService.getAllJobPosition().then(result => setJobPosition(result.data))

    }, [])

    const initialValues = {
        jobDescription: "",
        maxSalary: "",
        minSalary: 1,
        applicationDeadline: "",
        numberOfOpenPosition: 1,
        workTimeId: "",
        workTypeId: "",
        cityId: "",
        jobPositionId: "",
    }

    const schema = Yup.object({
        jobDescription: Yup.string().required("Aciklama alani zorunludur"),
        maxSalary: Yup.number().required("Maximum maas alani zorunludur"),
        minSalary: Yup.number().required("Minimum maas alani zorunludur"),
        workTimeId: Yup.number().required("Lutfen calismaa zamani belirtiniz"),
        workTypeId: Yup.number().required("Lutfen calisma turu belirleyiniz"),
        cityId: Yup.number().required("Lutfen sehir seciniz"),
        numberOfOpenPosition: Yup.number().min(1).required("Lutfen acik pozisyon sayisi belirtiniz")
    })

    function handleJobAdvertisementValue(values) {
        return {
            "active": false,
            "applicationDeadline": values.applicationDeadline,
            "city": {
                "cityName": "string",
                "id": values.cityId
            },
            "creationDate": "2021-06-26T14:38:52.942Z",
            "employer": {
                "companyName": "string",
                "email": "string",
                "id": 0,
                "password": "string",
                "phoneNumber": "string",
                "webSites": "string"
            },
            "id": 0,
            "jobDescription": values.jobDescription,
            "jobPositions": {
                "id": values.jobPositionId,
                "positionName": "string"
            },
            "maxSalary": values.maxSalary,
            "minSalary": values.minSalary,
            "numberOfOpenPosition": values.numberOfOpenPosition,
            "workTime": {
                "id": values.workTimeId,
                "workTime": "string"
            },
            "workType": {
                "id": values.workTypeId,
                "workType": "string"
            }
        }
    }

    return (
        <Card fluid>
            <Card.Content><Card.Header color='teal' content="Is Ilani Ekleme Formu" /><hr />
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        values.employerId = 6;
                        console.log(values)
                    }}
                >
                    <Form className="ui form" style={{ marginTop: 100 }}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <KodlamaIoSelect as="select" name="cityId">
                                        <option value="" disabled hidden>
                                            Sehir Seciniz
                                        </option>
                                        {cities.map((city) => (
                                            <option key={city.id} value={city.id}>
                                                {city.cityName}
                                            </option>
                                        ))}
                                    </KodlamaIoSelect>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <KodlamaIoSelect as="select" name="jobPositionId">
                                        <option value="" disabled hidden>
                                            Is pozisyonu seciniz
                                        </option>
                                        {jobPositions.map((jobPosition) => (
                                            <option key={jobPosition.id} value={jobPosition.id}>
                                                {jobPosition.positionName}
                                            </option>
                                        ))}
                                    </KodlamaIoSelect>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <KodlamaIoTextInput name="maxSalary" placeholder="Maximum maas"></KodlamaIoTextInput>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <KodlamaIoTextInput name="minSalary" placeholder="Minimum maas"></KodlamaIoTextInput>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <KodlamaIoTextInput name="numberOfOpenPosition" placeholder=" Number of open states"></KodlamaIoTextInput>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <KodlamaIoSelect as="select" name="workTimeId">
                                        <option value="" disabled hidden>
                                            Calisma zamani seciniz
                                        </option>
                                        {workTimes.map((workTime) => (
                                            <option key={workTime.id} value={workTime.id}>
                                                {workTime.workTime}
                                            </option>
                                        ))}
                                    </KodlamaIoSelect>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <KodlamaIoSelect as="select" name="workTypeId">
                                        <option value="" disabled hidden>
                                            Calisma yeri seciniz
                                        </option>
                                        {workTypes.map((workType) => (
                                            <option key={workType.id} value={workType.id}>
                                                {workType.workType}
                                            </option>
                                        ))}
                                    </KodlamaIoSelect>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <KodlamaIoTextInput name="applicationDeadline" placeholder="Son basvuru tarihi" type='date'></KodlamaIoTextInput>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <KodlamaIoTextArea name="jobDescription" placeholder="Aciklama" style={{ minHeight: 100 }}></KodlamaIoTextArea>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Button className="btnAdd" color="blue" type="submit" basic style={{ marginTop: 20, width: 800 }}> YAYINLA<Icon style={{ paddingLeft: 10 }} name="paper plane"></Icon></Button>
                    </Form>

                </Formik>
            </Card.Content>
        </Card >
    )
}