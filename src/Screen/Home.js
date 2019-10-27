import React,{Fragment} from 'react';
import { Form,  Button, Card, DatePicker, Table} from 'antd';
import FormComponent from '../Components/FormComponent';
import { FormItemLayout, buttonItemLayout} from "../Components/Formlayout"
import {useSelector,useDispatch} from "react-redux"
import { columns } from '../Components/TableComponent';
import moment from "moment"
const uuid = require('uuid/v5');



const Home = () => {
    const { firstName, lastName, age, hobby, birthday,list,saved} = useSelector(state => state)
    const dispatch = useDispatch()

    

    if (!list) {
       return null
    }

const id = uuid(`${firstName} ${lastName}`, uuid.DNS)
   
   //... ......submit payload.............
    const info = {id, firstName,lastName,birthday,age,hobby}
    
    return (
        <Fragment >
            <Card title="User Form" style={{ maxWidth: 500, width: "100%" ,margin: "10px auto" }}>
                <Form layout="horizontal">
                    <FormComponent label="First Name" placeholder="input first name" value={firstName}  handleValue={(e)=>dispatch({type:"firstName",payload:e.target.value})}/>
                    <FormComponent label="Last Name" placeholder="input last name" value={lastName} handleValue={(e) => dispatch({ type: "lastName", payload: e.target.value })}/>
                    <Form.Item label="Birthday" {...FormItemLayout}>
                        <DatePicker  format='DD/MM/YYYY' placeholder='DD/MM/YYYY' onChange={(date, dateString) => dispatch({ type: "birthday", payload: dateString })} />
                    </Form.Item>
                    <FormComponent label="Age" placeholder="input Age" value={age} handleValue={(e) => dispatch({ type: "age", payload: e.target.value })}/>
                    <FormComponent label="Hobby" placeholder="input Hobby" value={hobby} handleValue={(e) => dispatch({ type: "hobby", payload: e.target.value })}/>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary" htmlType="submit" onClick={()=>dispatch({type:"submit", payload:info})}>Submit</Button>
                        
                    </Form.Item> 
                </Form>
            </Card>
            <div style={{maxWidth:"1200px",margin:"auto"}}>
            <Table columns={columns} dataSource={list} />
            </div>
        </Fragment>
    );
}

export default Home;
