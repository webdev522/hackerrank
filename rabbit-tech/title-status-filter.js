import React, { useState } from "react";
import "./index.css";

function NotesApp() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [list, setList] = useState([]);

  // 0 all
  // 1 active
  // 2 completed
  const [tab, setTab] = useState(0);

  const handleChangeTab = (tab) => {
    setTab(tab);
  };

  const handleUpdateTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleUpdateStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleAddRecord = (e) => {
    e.preventDefault();

    let temp = [...list, { title, status }];
    let temp1 = [];

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].status === "active") {
        temp1.push(temp[i]);
      }
    }

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].status === "completed") {
        temp1.push(temp[i]);
      }
    }

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].status !== "active" && temp[i].status !== "completed") {
        temp1.push(temp[i]);
      }
    }

    setList([...temp1]);
    setTitle("");
    setStatus("");
  };

  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <input
          data-testid="input-note-name"
          type="text"
          className="large mx-8"
          placeholder="Note Title"
          onChange={handleUpdateTitle}
          value={title}
        />
        <input
          data-testid="input-note-status"
          type="text"
          className="large mx-8"
          placeholder="Note Status"
          onChange={handleUpdateStatus}
          value={status}
        />
        <button
          className=""
          data-testid="submit-button"
          onClick={handleAddRecord}
        >
          Add Note
        </button>
      </section>

      <div className="mt-50">
        <ul className="tabs">
          <li
            className="tab-item slide-up-fade-in"
            data-testid="allButton"
            onClick={() => handleChangeTab(0)}
          >
            All
          </li>
          <li
            className="tab-item slide-up-fade-in"
            data-testid="activeButton"
            onClick={() => handleChangeTab(1)}
          >
            Active
          </li>
          <li
            className="tab-item slide-up-fade-in"
            data-testid="completedButton"
            onClick={() => handleChangeTab(2)}
          >
            Completed
          </li>
        </ul>
      </div>
      <div className="card w-40 pt-30 pb-8">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody data-testid="noteList">
            {list
              .filter((item) =>
                tab === 1
                  ? item.status === "active"
                  : tab === 2
                  ? item.status === "completed"
                  : true
              )
              .map((item, i) => (
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotesApp;
