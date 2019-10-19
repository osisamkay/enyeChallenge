import React,{Fragment} from 'react';
import { Form,  Button, Card, DatePicker, Table} from 'antd';
import FormComponent from '../Components/FormComponent';
import { FormItemLayout, buttonItemLayout} from "../Components/Formlayout"
import useResult from '../hooks/useResult';
import {columns} from "../Components/TableComponent"

const Home = () => {
    const [handleSubmit, firstName, lastName, Birthday, age, hobby, tableData, setFirstName, setLastName, setBirthday, setAge, setHobby]=useResult()

// ............date format...............
    const dateFormat = 'DD/MM/YYYY';


    return (
        <Fragment >
            <Card title="User Form" style={{ maxWidth: 500, width: "100%", margin: "auto" }}>
                <Form layout="horizontal">
                    <FormComponent label="First Name" placeholder="input first name" value={firstName} handleValue={(e)=>{setFirstName(e.target.value)}}/>
                    <FormComponent label="Last Name" placeholder="input last name" value={lastName} handleValue={(e)=>{setLastName(e.target.value)}}/>
                    <Form.Item label="Birthday" {...FormItemLayout}>
                        <DatePicker format={dateFormat}  onChange={(date, dateString) => { setBirthday(dateString) }} />
                    </Form.Item>
                    <FormComponent label="Age" placeholder="input Age" value={age} handleValue={(e)=>{setAge(e.target.value)}}/>
                    <FormComponent label="Hobby" placeholder="input Hobby" value={hobby} handleValue={(e)=>{setHobby(e.target.value)}}/>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary" onClick={handleSubmit}>Submit</Button>
                    </Form.Item> 
                </Form>
            </Card>
            <div style={{maxWidth:"1200px",margin:"auto",marginTop:"30px"}}>
            <Table columns={columns} dataSource={tableData} />
            </div>
        </Fragment>
    );
}

export default Home;
