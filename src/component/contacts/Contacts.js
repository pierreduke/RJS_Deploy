import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment> {/* thẻ này giảm dung lượng hơn thẻ div truyền thống*/}
            <h1 className="display-4 mb-2">
              <span className="text-danger">Contact</span> List
            </h1>
              {contacts.map((contact) => (
                <Contact
                  contact={contact} // name = {contact.name} ...
                  key={contact.id}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
