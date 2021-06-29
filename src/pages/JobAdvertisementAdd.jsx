import React, { useState, useEffect } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import { Icon, Button, Grid, Card } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';
import KodlamaIoSelect from '../utilities/customFormControls/KodlamaIoSelect';
import KodlamaIoTextArea from '../utilities/customFormControls/KodlamaIoTextArea';
import WorkTimeService from '../services/WorkTimeService'
import WorkTypeService from '../services/WorkTypeService'
import CitieService from '../services/CitieService'
import JobPositionService from '../services/JobPositionService'
import JobAdvertisementService from '../services/JobAdvertisementService';
import './style.css';
import { toast } from 'react-toastify';

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
        maxSalary: 0,
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

    return (
        <Card fluid>
            <Card.Content><Card.Header color='teal' content="İs İlani Ekleme Formu" /><hr />
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        values.employerId = 6;
                        jobAdvertisementService.add(values)
                        toast.success("HRMS Personeli'nin onayindan ilaniniz yayina alinacaktir sonra yayina alinacaktir")
                    }}
                >
                    <Form className="ui form">
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
                        <Button className="btnAdd" color="blue" type="submit" basic style={{ marginTop: 20, width: "100%" }}> YAYINLA<Icon style={{ paddingLeft: 10 }} name="paper plane"></Icon></Button>
                    </Form>

                </Formik>
            </Card.Content>
        </Card >
    )
}