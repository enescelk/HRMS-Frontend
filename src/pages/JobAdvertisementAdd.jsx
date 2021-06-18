import React, { useEffect, useState } from 'react'
import { Card,Form, Button} from 'semantic-ui-react';
import CitieService from '../services/CitieService';
import JobPositionService from '../services/JobPositionService';
import WorkTypeService from '../services/WorkTypeService';
import WorkTimeService from '../services/WorkTimeService';
import JobAdvertisementService from '../services/JobAdvertisementService';
import { useFormik } from 'formik';
import * as Yup from "yup";

export default function JobAdvertisementAdd() {

    let jobAdvertisementService = new JobAdvertisementService();

    const [cities, setCities] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);
    const [workTypes, setWorkTypes] = useState([]);
    const [workTimes, setWorkTimes] = useState([]);

    useEffect(() => {
        let cityService = new CitieService();
        cityService.getAllCities().then((result) => setCities(result.data.data));

        let jobPositionService = new JobPositionService();
        jobPositionService.getAllJobPosition().then((result) => setJobPositions(result.data));

        let workTypeService = new WorkTypeService();
        workTypeService.getAllWorkType().then((result) => setWorkTypes(result.data.data));
           
        let workTimesService = new WorkTimeService();
        workTimesService.getAllWorkTime().then((result) => setWorkTimes(result.data.data));
    }, []);

    const {

        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
        onBlur,
        setFieldValue,
        dirty,
        isSubmitting,
    } = useFormik({
        initialValues: {
            jobPositionId: "",
            numberOfOpenPosition: "",
            cityId: "",
            minSalary: "",
            maxSalary: "",
            workTypeId: "",
            workTimeId: "",
            applicationDeadline: "",
            jobDescription: "",
        },
        validationSchema: Yup.object({
            jobPositionId: Yup.number().required("Lutfen bir pozisyon seciniz !"),
            cityId: Yup.number().required("Lutfen bir sehir seciniz !"),
            numberOfOpenPosition: Yup.number().required("Lutfen acik pozisyon sayisi giriniz !"),
            minSalary: Yup.number().required("Lutfen minimum maas belirleyiniz !"),
            maxSalary: Yup.number().required("Lutfen maximum maas belirleyiniz !"),
            workTypeId: Yup.number().required("Lutfen calisma turunu seciniz !"),
            workTimeId: Yup.number().required("Lutfen calisma zamani seciniz !"),
            applicationDeadline: Yup.date().required("Lutfen son basvuru tarihini belirleyiniz !"),
            jobDescription: Yup.string().required("Lutfen aciklama giriniz !"),
        }),
        onSubmit: (values) => {
            values.employerId = 5;
            console.log(values);
            jobAdvertisementService.add(values).then((result) => console.log(result.data.data));        
        
        }
    });

    return (
        <div>
            <Card fluid>
                <Card.Content header="İŞ İLANI YAYINLAMA"></Card.Content>
                <Card.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input>
                            <select
                            id="jobPositionId"
                            error={
                                errors.jobPositionId &&
                                touched.jobPositionId &&
                                errors.jobPositionId
                            }
                            >
                              <option value="Pozisyon Seciniz"></option>
                              {
                              jobPositions.map((data)=> {
                                  return <option value="" key={data.id}>{data.positionName}</option>
                              })
                            
                              }
                           </select>
                            </Form.Input>
                            {/* <Form.Select 
                            id="jobPositionId"
                            name="jobPositionId"
                            options={jobPositionOptions}
                            value={values.jobPositionId}
                            onChange={formik.handleChange}
                            label="Pozisyon"
                            placeholder="Pozisyon Seciniz"
                            error={
                                errors.jobPositionId &&
                                touched.jobPositionId &&
                                errors.jobPositionId
                            }
                            ></Form.Select> */}
                            
                            <Form.Input>
                            <select
                            id="cityId" 
                            value={values.cityId}
                            onChange={handleChange}
                            label="Sehir"
                            placeholder="Sehir Seciniz"
                            error={
                                errors.cityId &&
                                touched.cityId &&
                                errors.cityId
                            }
                            >
                                {
                                    cities.map((data) =>{
                                        return <option value="" key={data.id}>{data.cityName}</option>
                                    })
                                }
                            </select>
                            </Form.Input>

                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                            id="numberOfOpenPosition"
                            type="number"
                            value={values.numberOfOpenPosition}
                            onChange={handleChange}
                            label="Acik Pozisyon Sayisi"
                            placeholder="Acik Pozisyon Sayisi"
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
                            value={values.minSalary}
                            onChange={handleChange}
                            label="Minimum Maas"
                            placeholder="Minimum Maas"
                            error={
                                errors.minSalary && touched.minSalary && errors.minSalary
                            }
                            ></Form.Input>
                             <Form.Input
                            id="maxSalary"
                            type="number"
                            value={values.maxSalary}
                            onChange={handleChange}
                            label="Maximum Maas"
                            placeholder="Maximum Maas"
                            error={
                                errors.maxSalary && touched.maxSalary && errors.maxSalary
                            }
                            ></Form.Input>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input>
                            <select
                            id="workTypeId"
                            value={values.workTypeId}
                            onChange={handleChange}
                            label="Calisma Turu"
                            select
                            placeholder="Calisma Turu Seciniz"
                            error={
                                errors.workTypeId && touched.workTypeId && errors.workTypeId
                            }
                            >
                                {
                                    workTypes.map((data) =>{
                                        return <option value="" key={data.id}>{data.workType}</option>
                                    })
                                }
                            </select>
                            </Form.Input>
                            <Form.Input>
                            <select
                            id="workTimeId"
                            value={values.workTimeId}
                            onChange={handleChange}
                            label="Calisma Zamani"
                            select
                            placeholder="Calisma Zamani Seciniz"
                            error={
                                errors.workTimeId && touched.workTimeId && errors.workTimeId
                              }
                            >
                                {
                                    workTimes.map((data) =>{
                                        return <option value="" key={data.id}>{data.workTime}</option>
                                    })
                                }
                            </select>
                            </Form.Input>
                            
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                            id="applicationDeadline"
                            type="date"
                            onChange={handleChange}
                            value={values.applicationDeadline}
                            label="Son Basvuru Tarihi"
                            error={errors.applicationDeadline && touched.applicationDeadline && errors.applicationDeadline}  
                            ></Form.Input>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.TextArea
                            id="jobDescription"
                            type="text"
                            onChange={handleChange}
                            value={values.jobDescription}
                            label="Aciklama"
                            placeholder="Aciklama Yaziniz..."
                            error={
                                errors.jobDescription &&
                                touched.jobDescription &&
                                errors.jobDescription
                            }
                            ></Form.TextArea>
                        </Form.Group>
                        <Button type="submit" primary>
                            YAYINLA
                        </Button>
                    </Form>
                </Card.Content>
            </Card>
        </div>
    )
}
