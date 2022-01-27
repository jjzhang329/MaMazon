import React from 'react';
import { Link } from 'react-router-dom';
import  logo from '../../../app/assets/images/MAMAZON.png'

export default class SessionForm extends React.Component {
  constructor(props){
      super(props)
      this.state = {email:"", password:"", name:'', errors:[]}
      this.handleDemo = this.handleDemo.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInput(key){
      return(e)=>this.setState({[key]: e.currentTarget.value})
      
  }
 
  handleDemo(e){
    e.preventDefault()
    const {formType, loginDemo} = this.props;
    let demo = 'Demoplshireme@company.compassword'
    let count = formType === 'Sign-Up' ? 0 : 4
    let that = this;
    let key
      let fake = setInterval(()=>{
        if(count < 4){
          key = 'name'
        }else if(count >= 4 && count < 25){
          key = 'email'
        }else if(count >= 25 && count < 33){
          key = 'password'
        }
        that.setState({[key]: that.state[key] + demo[count]})
        count++
        if(count === 33){
          clearInterval(fake)
          loginDemo(this.state)
        }

      }, 100)
   
  }

  handleSubmit(){
     this.props.action(this.state).fail(() => { 
        
      this.setState({errors: this.props.errors})}) 
  }


  render(){
      const {formType, action, errors} = this.props
      const nameinput = (formType === 'Sign-Up' ? (
      <div className='signup'>
        <h5>Name:</h5>
          <input type="text" value={this.state.name}
            onChange={this.handleInput('name')} />
        
      </div>
      ): "")
    const buttontext = (formType === 'Sign-Up' ?  "Click here to Sign-In" : "Creat an account") 
    const alterFormText = (formType === 'Sign-Up' ? "Already have an account?" : "New to MaMazon?")
    const path = (formType === 'Sign-Up' ? "/login" : "/signup")
    const error = this.state.errors.length ? this.state.errors.map((error,idx)=>{
      return <p className='error' key={idx}>{error} !</p>
    }) : null
      return(
          <div className='session-container'>
            <Link to='/'>
              <img className="session-logo" src={window.mamazonURL}/>
            </Link>
            
            <div className='session-form'>
              <h1 className='form-title'>{formType}</h1>
              <form onSubmit={this.handleSubmit}> 
                {nameinput}
                <h5>Email:</h5>
                <input type="text" value={this.state.email}
                onChange={this.handleInput('email')}/>
                
               <h5>Password:</h5>
                <input type="password" value={this.state.password}
                onChange={this.handleInput('password')} />
                {error}
                <button className='session-button'>{formType}</button>
                <button className='demo'onClick={this.handleDemo}>Demo User</button>
              </form>
              <div className='divider'>
                <div className='alter'></div>
                  <p className='altermessage'>{alterFormText}</p>
                <div className='alter'></div>
              </div>
              <Link to={path}>
                <button className='alternate-form-button'>{buttontext}</button>
              </Link>
              
            </div>
             
          </div>
      )
  }
}
