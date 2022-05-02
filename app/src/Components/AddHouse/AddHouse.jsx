import { useState } from "react";

export const AddHouse = () => {
  const [newData, setNewData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:8080/Rentalhouse", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(
        newData
        //   {
        //   name: newData.name,
        //   ownerName: newData.ownerName,
        //   address: newData.address,
        //   areaCode: newData.areaCode,
        //   rent: newData.rent,
        //   image: newData.image,
        //   preferredTenants: newData.preferredTenant,
        //   id: newData.length + 1,
        // }
      ),
    });
  };

  const handleChange = (e) => {
    const inputValue = e.target.className;
    if (e.target.type == "checkbox") {
      setNewData({ ...newData, preferredTenants: e.target.className });
    } else {
      setNewData({ ...newData, [inputValue]: e.target.value });
    }
  };
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          className="name"
          // value={""}
          required
          onChange={handleChange}
        />
        <br />
        <label>ownerName</label>
        <input
          // value={""}
          type="text"
          className="ownerName"
          required
          onChange={handleChange}
        />
        <br />
        <label>address</label>
        <input
          // value={""}
          type="text"
          className="address"
          required
          onChange={handleChange}
        />
        <br />
        <label>areaCode</label>
        <input
          // value={""}
          type="text"
          className="areaCode"
          required
          onChange={handleChange}
        />
        <br />
        <label>rent</label>
        <input
          // value={""}
          type="text"
          className="rent"
          required
          onChange={handleChange}
        />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input
          // checked={""}
          type="checkbox"
          className="bachelor"
          onChange={handleChange}
        />
        <br />
        <label>married</label>
        <input
          //  checked={""}
          type="checkbox"
          className="married"
          onChange={handleChange}
        />
        <br />
        <label>image</label>
        <input
          // value={""}
          type="text"
          className="image"
          required
          onChange={handleChange}
        />
        <br />
        <input className="submitBtn" type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};
