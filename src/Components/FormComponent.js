import React,{Fragment} from 'react';
import { Form, Input } from 'antd';
import { FormItemLayout} from "../Components/Formlayout"
// ............form layout...............




const FormComponent = ({ handleValue, label, placeholder,value}) => {
    return (
        <Fragment>
          <Form.Item label={label} {...FormItemLayout}>
             <Input placeholder={placeholder} value={value} onChange={handleValue} />
         </Form.Item>
        </Fragment>
    );
}

export default FormComponent;
