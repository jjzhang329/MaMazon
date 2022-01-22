import React from 'react';

export default class SessionForm extends React.Component {
  constructor(props){
      super(props)
      this.state = {email:"", password:""}
  }
  handleInput(key){
      return(e)=>this.setState({[key]: e.currentTarget.value})
  }

  render(){
      const {formType, action} = this.props
      return(
          <div className='sessionform-container'>
              <p>{formType}</p>
              <form onSubmit={()=>action(this.state)}>
                <label>Email:
                  <input type="text" value={this.state.email}
                  onChange={this.handleInput('email')}/>
                </label>
                  <label>Password:
                      <input type="password" value={this.state.password}
                          onChange={this.handleInput('password')} />
                  </label>
                <button>{formType}</button>
              </form>
          </div>
      )
  }
}
