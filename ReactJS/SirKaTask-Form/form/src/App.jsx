import React from 'react'
import { useState } from 'react'

const App = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    contact:""
  })
  const [dataList ,setDataList] =useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
    //Handle input change
    const handleChange =(e)=>{
      const {name,value}=e.target;
      setFormData({
        ...formData,[name]:value
      });
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      if(formData.name === '' || formData.email ==='' || formData.contact ===''){
        alert('Please fill out all fields');
        return;
      }
      if(editingIndex !== null){
        //update the item
        const updatedList = [...dataList];
        updatedList[editingIndex] = formData;
        setDataList(updatedList)
        setEditingIndex(null)
      }else{
        setDataList([...dataList,formData]);
      }
      setFormData({
        name:'',
        email:'',
        contact:'',
      })  
    }
    //Handle edit
    const handleEdit =(index)=>{
      setFormData(dataList[index])
      setEditingIndex(index)
    }

    //handle delete
    const handleDelete =(index)=>{
       const updatedList=dataList.filter((_,i)=> i!=index)
       setDataList(updatedList);
    }
  return (
    <div style={{
      maxWidth:'600px',
      margin:'auto',
      padding:'20px'
    }}> 
        <h1>React Form</h1>
        <form onSubmit={handleSubmit} style={{
          marginBottom:'20px'
        }}>
            <div style={{
              marginBottom:'20px'
            }}>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Name'
                style={{
                  padding:'8px',
                  width: "100%" ,
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            style={{ padding: "8px", width: "100%" }}
          />
        </div>
            <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact"
            style={{ padding: "8px", width: "100%" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {editingIndex !== null ? "Update" : "Submit"}
        </button>
        </form>
        {/* Data Table */}
      {dataList.length > 0 && (
        <table
          border="1"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.contact}</td>
                <td>
                  <button
                    onClick={() => handleEdit(index)}
                    style={{
                      marginRight: "5px",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{
                      padding: "5px 10px",
                      cursor: "pointer",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
export default App