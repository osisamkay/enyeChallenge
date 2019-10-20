import React,{Fragment} from 'react';
import { Form,  Button, Card, DatePicker, Table} from 'antd';
import FormComponent from '../Components/FormComponent';
import { FormItemLayout, buttonItemLayout} from "../Components/Formlayout"
import {columns} from "../Components/TableComponent"
import {useSelector,useDispatch} from "react-redux"
import { rootReducer } from '../reducer/rootReducer';

const Home = () => {
    const { firstName, lastName, age, hobby, birthday,list} = useSelector(state => state)

    const dispatch = useDispatch()

   //... ......submit payload.............
    const info = {firstName,lastName,birthday,age,hobby}
    
    return (
        <Fragment >
            <Card title="User Form" style={{ maxWidth: 500, width: "100%" ,margin: "10px auto" }}>
                <Form layout="horizontal">
                    <FormComponent label="First Name" placeholder="input first name" value={firstName}  handleValue={(e)=>dispatch({type:"firstName",payload:e.target.value})}/>
                    <FormComponent label="Last Name" placeholder="input last name" value={lastName} handleValue={(e) => dispatch({ type: "lastName", payload: e.target.value })}/>
                    <Form.Item label="Birthday" {...FormItemLayout}>
                        <DatePicker format='DD/MM/YYYY' onChange={(date, dateString) => dispatch({ type: "birthday", payload: dateString })} />
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
