var Nav = React.createClass({
  render:function(){
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <a href={this.props.linkUrl} className="navbar-brand">
              { this.props.title }
            </a>
          </div>
        </div>
      </nav>
    );
  }
});
var Title = React.createClass({

  render:function(){
    var TitleStyle = {
      color:"#777676",
      fontSize:"35px"
    }
    return (
      <div className="row">
        <h1 style={TitleStyle}>{ this.props.children }</h1>
      </div>
    );
  }
});

var Button = React.createClass({

  getInitialState:function(){
    return {
      click:false
    }
  },

  toggleClick: function(){
    this.setState({
      click:!this.state.click
    });
  },

  render: function(){
    var btnClass = this.state.click ? 'btn btn-success' : 'btn btn-default';
    var title = this.state.click ? this.props.textActive : this.props.title;
    return (
      <button onClick={ this.toggleClick } className={ btnClass }>{ title }</button>
    );
  }
})

var Form = React.createClass({
  getInitialState:function(){
    return {
      name:'',
      email:'',
      subject:'R',
      messenger:''
    }
  },

  handleNameChange:function(e){
    this.setState({
      name:e.target.value
    });
  },
  handleEmailChange:function(e){
    this.setState({
      email:e.target.value
    });
  },
  handleSubjectChange:function(e){
    this.setState({
      subject:e.target.value
    });
  },
  handleMessengerChange:function(e){
    this.setState({
      messenger:e.target.value
    });
  },

  handleSubmit:function(e){
    e.preventDefault();
    var name = this.state.name.trim();
    var email = this.state.email.trim();
    var subject = this.state.subject;
    var messenger = this.state.messenger.trim();
    if(!name || !email || !subject || !messenger){
      return;
    }
    this.props.onContactSubmit({
      id:this.props.idNumber,
      name:name,
      email:email,
      subject:subject,
      messenger:messenger
    });
  },

  render:function(){
    var InputStyle = {
      padding:"20px",
      fontSize:"16px",
      color:"#A7A5A5"
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" style={InputStyle} onChange={this.handleNameChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" className="form-control" id="email" placeholder="E-mail" style={InputStyle} onChange={this.handleEmailChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select className="form-control" id="subject" defaultValue={this.state.subject} onChange={this.handleSubjectChange}>
            <option value="A">Angular</option>
            <option value="J">JQuery</option>
            <option value="R">React</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="messenger"></label>
          <textarea className="form-control" id="messenger" rows="3" style={InputStyle} onChange={this.handleMessengerChange}></textarea>
        </div>
        <Button title="Send" textActive="Loading..."/>
      </form>
    );
  }
});

var Contact = React.createClass({
  render:function(){
    return (
      <tr>
        <th scope="row">{this.props.idNumber}</th>
        <td>{this.props.name}</td>
        <td>{this.props.email}</td>
        <td>{this.props.subject}</td>
        <td>{this.props.children}</td>
      </tr>
    );
  }
});

var List = React.createClass({
  render:function(){
    var contactNodes = this.props.data.map(function(contact){
      return (
        <Contact idNumber={contact.id} name={contact.name} email={contact.email} subject={contact.subject}>
        {contact.messenger}
      </Contact>
      );
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Messenger</th>
          </tr>
        </thead>
        <tbody>
          {contactNodes}
        </tbody>
      </table>
    );
  }
});
