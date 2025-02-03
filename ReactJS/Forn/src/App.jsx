import React, { useState } from "react";

function FormApp() {
  const [formData, setFormData] = useState({ name: "", email: "", contact: "" }); // Form state
  const [dataList, setDataList] = useState([]); // List of submitted data
  const [editingIndex, setEditingIndex] = useState(null); // Index of the item being edited

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name === "" || formData.email === "" || formData.contact === "") {
      alert("Please fill out all fields");
      return;
    }

    if (editingIndex !== null) {
      // Update the item
      const updatedList = [...dataList];
      updatedList[editingIndex] = formData;
      setDataList(updatedList);
      setEditingIndex(null); // Reset editing index
    } else {
      // Add a new item
      setDataList([...dataList, formData]);
    }

    // Clear the form
    setFormData({ name: "", email: "", contact: "" });
  };

  // Handle edit
  const handleEdit = (index) => {
    setFormData(dataList[index]); // Populate the form with selected data
    setEditingIndex(index); // Set editing index
  };

  // Handle delete
  const handleDelete = (index) => {
    const updatedList = dataList.filter((_, i) => i !== index);
    setDataList(updatedList);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>React Form with CRUD Operations</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            style={{ padding: "8px", width: "100%" }}
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
  );
}

export default FormApp;
