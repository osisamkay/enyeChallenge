import React,{Fragment,useState} from 'react';
import { Form, Input, Button, Card, DatePicker, Table, Divider, Tag } from 'antd';

const Home = () => {
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[Birthday,setBirthday]=useState("");
    const[age,setAge]=useState("");
    const[hobby,setHobby]=useState("");
    const[tableData,setTableData]=useState([])


// ............handle form submit...............
    const handleSubmit=()=>{
        const info={                //collects table data from form
            firstName:firstName,
            lastName:lastName,
            birthday:Birthday,
            age:age,
            hobby:hobby
        }
        
        setTableData([...tableData, info]) //appends information to table
        setFirstName("");
        setLastName("");
        setBirthday("");
        setAge("");
        setHobby("");
        
    }
// ............form layout...............
    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    }
    const buttonItemLayout = {
        wrapperCol: { span: 14, offset: 4 },
    }

   
// ............date format...............
    const dateFormat = 'DD/MM/YYYY';

// ............Table head titles...............
    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
           
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Birthday',
            dataIndex: 'birthday',
            key: 'birthday',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Hobby',
            dataIndex: 'hobby',
            key: 'hobby',
        },
    ]
    return (
        <Fragment >
            <Card title="User Form" style={{ maxWidth: 500, width: "100%", margin: "auto" }}>
                <Form layout="horizontal">
                    <Form.Item label="First Name" {...formItemLayout}>
                        <Input placeholder="input first name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                    </Form.Item>
                    <Form.Item label="Last Name" {...formItemLayout}>
                        <Input placeholder="input last name" value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
                    </Form.Item>
                    <Form.Item label="Birthday" {...formItemLayout}>
                        <DatePicker format={dateFormat} onChange={(date,dateString) => { setBirthday(dateString)}}  />
                    </Form.Item>
                    <Form.Item label="Age" {...formItemLayout}>
                        <Input placeholder="input age" value={age} onChange={(e) => { setAge(e.target.value) }} />
                    </Form.Item>
                    <Form.Item label="Hobby" {...formItemLayout}>
                        <Input placeholder="input hobby" value={hobby} onChange={(e) => { setHobby(e.target.value) }} />
                    </Form.Item>
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
