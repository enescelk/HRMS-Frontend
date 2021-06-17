import React, { useState, useEffect } from 'react'
import { Card, Container, Button } from 'semantic-ui-react'
import { Formik,Form } from 'formik';
import CitieService from '../services/CitieService';
import JobPositionService from '../services/JobPositionService';
import JobAdvertisementService from '../services/JobAdvertisementService';
import WorkTimeService from '../services/WorkTimeService';
import WorkTypeService from '../services/WorkTypeService';
import { useFormik } from 'formik';
import * as Yup from "yup";

export default function JobAdvertisementAdd() {

    let jobAdvertisementService = new JobAdvertisementService();


    const [cities, setCities] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);
    const [workTimes, setWorkTimes] = useState([])
    const [workTypes, setWorkTypes] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService();
        jobPositionService.getAllJobPosition().then((result => setJobPositions(result.data)));

        let citieService = new CitieService();
        citieService.getAllCities().then((result => setCities(result.data.data)));

        let workTimeService = new WorkTimeService();
        workTimeService.getAllWorkTime().then(result => setWorkTimes(result.data.data));

        let workTypeService = new WorkTypeService();
        workTypeService.getAllWorkType().then(result => setWorkTypes(result.data.data));
    }, [])


    const jobPositionOptions = jobPositions.map((jobPosition) => ({
        key: jobPosition.id,
        text: jobPosition.positionName,
        value: jobPosition.id,
    }))

    const citieOptions = cities.map((citie) => ({
        key: citie.id,
        text: citie.cityName,
        value: citie.id,
    }));

    const workTimeOptions = workTimes.map((workTime) => ({
        key: workTime.id,
        text: workTime.workTime,
        value: workTime.id,
    }));

    const workTypeOptions = workTypes.map((workType) => ({
        key: workType.id,
        text: workType.workType,
        value: workType.id,
    }));


    // const {values,errors,touched,handleSubmit,handleReset,handleChange,handleBlur,onBlur,setFieldValue,dirty,isSubmitting} = useFormik({
    // });
        



    return ( <div>
        <Formik        
            initialValues= {{
            jobPositionId: "",
            cityId: "",
            numberOfOpenPosition: "",
            minSalary: "",
            maxSalary: "",
            workTypeId: "",
            workTimeId: "",
            applicationDeadline: "",
            jobDescription: "",
          }}
          validationSchema= {Yup.object({
              jobPositionId: Yup.number().required("Bir pozisyon seciniz !"),
              cityId: Yup.string().required("Bir sehir seciniz ! "),
              numberOfOpenPosition: Yup.number().required("Acik pozisyon sayisi giriniz !"),
              minSalary: Yup.number().required("Minimum maas giriniz !"),
              maxSalary: Yup.number().required("Maximum maas giriniz !"),
              workTypeId: Yup.string().required("Bir calisma turu seciniz !"),
              workTimeId: Yup.string().required("Bir calisma zamani seciniz !"),
              applicationDeadline: Yup.date().required("Bitis tarihini giriniz !"),
              jobDescription: Yup.string().required("Aciklama giriniz !"),
          })}
          onSubmit= {(values) => {
            values.employerId = 4;
            console.log(values);
            jobAdvertisementService
              .add(values)
              .then((result) => console.log(result.data.data));
          
        }}      
    >

                {({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        handleChange,
                        onBlur,
                        handleBlur,
                        setFieldValue,
                        isSubmitting,
                        dirty,
                    }) => (
    
                <Form onSubmit={handleSubmit}>
                <Container className="form">
            <Card fluid>
                <Card.Content header="İŞ İLANI YAYINLAMA"></Card.Content>
                <Card.Content></Card.Content>
                        <Form.Group widths="equal">
                            <Form.Select
                                id="jobPositionId"
                                options={jobPositionOptions}
                                label="Pozisyon"
                                placeholder="Pozisyon Seçiniz"
                                search
                                selection
                                onChange={(fieldName, data) =>
                                    setFieldValue("jobPositionId", data.value)
                                }
                                onBlur={onBlur}
                                value={values.jobPositionId}
                                error={
                                    errors.obPositionId &&
                                    touched.jobPositionId &&
                                    errors.jobPositionId
                                  }
                            ></Form.Select>
                            <Form.Select
                                id="cityId"
                                options={citieOptions}
                                label="Şehir"
                                placeholder="Şehir Seçiniz"
                                search
                                onChange={(fieldName, data) =>
                                    setFieldValue("cityId", data.value)
                                }
                                onBlur={onBlur}
                                value={values.cityId}
                                selection
                                error={
                                    errors.obPositionId &&
                                    touched.jobPositionId &&
                                    errors.jobPositionId
                                }
                            ></Form.Select>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                                id="numberOfOpenPosition"
                                type="number"
                                fluid
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.numberOfOpenPosition}
                                label="Açık Pozisyon Sayısı"
                                placeholder="Açık Pozisyon Sayısı"
                                error={
                                    errors.numberOfOpenPosition &&
                                    touched.numberOfOpenPosition &&
                                    errors.numberOfOpenPosition
                                }
                            ></Form.Input>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                                id="minSalary"
                                type="number"
                                fluid
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.minSalary}
                                label="Minimum Maaş Skalası"
                                placeholder="Minimum Maaş Skalası"
                                error={
                                    errors.minSalary && touched.minSalary && errors.minSalary
                                }
                            ></Form.Input>
                            <Form.Input
                                id="maxSalary"
                                type="number"
                                fluid
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.maxSalary}
                                label="Maksimum Maaş Skalası"
                                placeholder="Maksimum Maaş Skalası"
                                error={
                                    errors.maxSalary && touched.maxSalary && errors.maxSalary
                                }
                            ></Form.Input>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Select
                                id="workTypeId"
                                options={workTypeOptions}
                                label="Çalışma Türü"
                                onChange={(fieldName, data) =>
                                    setFieldValue("workTypeId", data.value)
                                }
                                onBlur={onBlur}
                                value={values.workTypeId}
                                placeholder="Çalışma Türü Seçiniz"
                                search
                                selection
                                error={
                                    errors.workTypeId && touched.workTypeId && errors.workTypeId
                                }
                            ></Form.Select>
                            <Form.Select
                                id="workTimeId"
                                options={workTimeOptions}
                                label="Çalışma Zamanı"
                                onChange={(fieldName, data) =>
                                    setFieldValue("workTimeId", data.value)
                                }
                                onBlur={onBlur}
                                value={values.workTimeId}
                                placeholder="Çalışma Zamanı Seçiniz"
                                search
                                selection
                                error={
                                    errors.workTimeId && touched.workTimeId && errors.workTimeId
                                  }
                            ></Form.Select>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                                id="applicationDeadline"
                                type="date"
                                fluid
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.deadline}
                                label="Son Başvuru Tarihi"
                                error={errors.applicationDeadline && touched.applicationDeadline && errors.applicationDeadline}
                            ></Form.Input>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.TextArea
                                id="jobDescription"
                                type="text"
                                fluid
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.jobDescription}
                                label="Açıklama"
                                placeholder="Açıklama Yazınız..."
                                error={
                                    errors.jobDescription &&
                                    touched.jobDescription &&
                                    errors.jobDescription
                                  }
                            ></Form.TextArea>
                        </Form.Group>
                        <button type="submit" disabled={!dirty || isSubmitting} type="submit">
                          Yayinla  
                        </button>
                        
                    </Card>
                </Container>
                    </Form>
                    )}
                    </Formik>
                    </div>
    );
            }