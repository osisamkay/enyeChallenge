import React,{useState,useEffect} from 'react'



export default ()=>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [Birthday, setBirthday] = useState("");
    const [age, setAge] = useState("");
    const [hobby, setHobby] = useState("");
    const [tableData, setTableData] = useState([]);

    //.......................handle Submit............................
    const handleSubmit = () => {
        const info = {                //collects table data from form
            firstName: firstName,
            lastName: lastName,
            birthday: Birthday,
            age: age,
            hobby: hobby
        }

        const data = [...tableData, info]
        setTableData(data) //appends information to table
        setFirstName("");
        setLastName("");
        setBirthday("");
        setAge("");
        setHobby("");

    }

// useEffect(() => {
//     handleSubmit()
// }, []);

    return [handleSubmit,firstName,lastName,Birthday,age,hobby,tableData,setFirstName,setLastName,setBirthday,setAge,setHobby];
}