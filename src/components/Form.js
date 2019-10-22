import React from 'react'
import logo from './ecm_logo.png'



class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = { matchMsg: '' };
  }

  changeValue(value, name){
    this.setState({[name]: value}, function() {
      this.setState({matchMsg: ''});
      this.setState({msgClass: 'danger'});
      if (this.state.password !== undefined && this.state.password !== ''){
        if (this.state.confirm !== undefined && this.state.confirm !== ''){
            if (this.state.password === this.state.confirm){
              this.setState({matchMsg: 'Ok!'})
              this.setState({msgClass: 'success'});
            }else{
              this.setState({matchMsg: 'Le password non coincidono...'})
            }
        }
      }
    })
  }


  onSubmit(event){
    event.preventDefault();
    if(this.validateState.bind(this)){
      if(this.validatePasswordMatch.bind(this)){
        console.log("parte la chiamata all'api")
      }
    }
  }

  validateState() {
    const state = this.state;
    Object.keys(state).forEach(function (key) {
      if(state[key] === undefined || state[key] === ''){
        return false;
      }
    });
    return true;
  }

  validatePasswordMatch() {
    if (this.state.password !== undefined && this.state.password !== ''){
      if (this.state.confirm !== undefined && this.state.confirm !== ''){
        if(this.state.password === this.state.confirm){
          return true;
        }
      }
    }
    return false;
  }

  render() {
    return (
      <div className="page-section">
        <img className="logo" alt="ECM" src={logo} />
        <br/>
        <div className="col-lg-6 mx-auto my-auto">
          <form onSubmit={this.onSubmit.bind(this)}>
           
            {(this.props.fields).map(obj => {
              if(obj.input === 'select'){
                return (
                  <div className="control-group">
                    <div className="form-group controls mb-0 pb-2">
                      <label></label>
                      <Select 
                              name={obj.name} 
                              placeholder={obj.placeholder} 
                              options={obj.option} 
                              onChangeValue={this.changeValue.bind(this)}
                      >
                      </Select>
                    </div>
                  </div>
                )
              }else{
                let matchMsg = ' ';
                if(obj.name === 'confirm'){
                  matchMsg = this.state.matchMsg;
                }
                return ( 
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label></label>
                      <Input 
                              name={obj.name} 
                              placeholder={obj.placeholder} 
                              type={obj.type} 
                              onChangeValue={this.changeValue.bind(this)}
                              matchMsg={matchMsg}
                              msgClass={this.state.msgClass}
                      >
                      </Input>
                    </div>
                  </div>
                )
              }
            })} 
            <br/>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-xl">{this.props.btn}</button> 
              <a href="#" className="btn btn-xl">Oppure effettua il login...</a>         
            </div>
          </form>
        </div>
      </div>
      
      );
    }
}

class Input extends React.Component {

  changeValue(event){
    this.props.onChangeValue(event.target.value, event.target.name);
  }

  render() {
    const msgClass = 'help-block text-' + this.props.msgClass;
    const value = this.props.value;
    return (
      <div>
        <input className="form-control" 
              name={this.props.name} 
              type={this.props.type} 
              placeholder={this.props.placeholder}
              value={value} 
              required="required" 
              onChange={this.changeValue.bind(this)} 
        />
        <p className={msgClass}>{this.props.matchMsg}</p>
      </div>
      
    )
  }
}

class Select extends React.Component {
  
  changeValue(event){
    this.props.onChangeValue(event.target.value, event.target.name);
  }

  render() {
    
    return (
      <div>
        <select className="form-control"
              name={this.props.name} 
              placeholder={this.props.placeholder}
              required="required"
              onChange={this.changeValue.bind(this)} 
        >
                
        {(this.props.options).map( option => {
          return <option 
                          name={option.toLowerCase()}
                          value={option}
                  >
                    {option}
                  </option>
        })}
        
        </select>
        <br/>
      </div>
      
    )
  }
}

export default Form;