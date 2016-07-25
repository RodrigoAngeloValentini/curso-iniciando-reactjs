
var Page = React.createClass({
  displayName: "Page",

  getInitialState: function () {
    return {
      data: [{ id: "1", name: "Maria", email: "maria@mail.com", subject: "R", messenger: "My messenger" }, { id: "2", name: "Pedro", email: "pedro@mail.com", subject: "A", messenger: "My messenger" }]
    };
  },
  handleContactSubmit: function (contact) {
    console.log(contact);
    var newContacts = this.state.data.concat([contact]);
    this.setState({ data: newContacts });
  },
  render: function () {
    return React.createElement(
      "myElement",
      null,
      React.createElement(Nav, { title: "Test Props", linkUrl: "index.html" }),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          Title,
          null,
          "My component title!"
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(Form, { onContactSubmit: this.handleContactSubmit, idNumber: this.state.data.lenght + 1 })
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(List, { data: this.state.data })
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));