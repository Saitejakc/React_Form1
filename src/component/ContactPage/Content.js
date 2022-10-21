import React, { useState } from "react";

import "../ContactPage/Content.css";

function Content() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [update, setUpdate] = useState(false);
  const [active, setActive] = useState(null);
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      phone,
    };

    if (update) {
      // update User
      let copyUser = users;
      Object.assign(copyUser[active], user);
      setUsers([...copyUser]);
      setUpdate(false);
      setActive(null);
    } else {
      // add user
      setUsers([...users, user]);
    }

    setName("");
    setEmail("");
    setPhone("");
  };

  const onUpdateHandler = (index) => {
    const user = users[index];
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setActive(index);
    setUpdate(true);
  };

  const onDelete = (user) => {
    if (window.confirm("Are you sure?")) {
      let copyUser = users.filter((item) => item !== user);
      setUsers([...copyUser]);
    }
  };

  return (
    <main>
      <div id="container">
        <div className="form_address">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <h3 className="txt">Get in touch!</h3>
              <br />

              <div className="inputs">
                <div className="hover">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <span id="error"></span>
                </div>

                <div className="email_phone">
                  <div className="hover e_pe">
                    <input
                      type="email"
                      placeholder="Your E-Mail"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span id="emailerror"></span>
                  </div>

                  <div className="hover e_pn">
                    <input
                      type="phone"
                      placeholder="Mobile"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <span id="numerror"></span>
                  </div>
                </div>

                <div className="hover">
                  <input
                    type="text"
                    name="fsubj"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <br />

                <div className="hover">
                  <textarea
                    name="textarea"
                    id="area"
                    cols="30"
                    rows="15"
                    placeholder="Message"
                  ></textarea>
                  <span id="msgerror"></span>
                </div>

                <div>
                  <button id="button">{update ? "Update" : "Submit"} </button>
                </div>
              </div>
            </form>
          </div>
          <div id="table">
            <h2>DETAILS</h2>
            <table id="display">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>PhoneNo</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  return (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        <button
                          id="btn-update"
                          onClick={() => onUpdateHandler(index)}
                        >
                          Update
                        </button>

                        <button id="btn-delete" onClick={() => onDelete(user)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
