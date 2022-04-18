import React, {Component} from 'react'
class HeaderComponent extends Component {
    state = {  } 
    render() { 
        return (
           <header className='heading'>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div  className="navbar-nav navbar-collapse justify-content-center text-light h2" >
                   {this.props.name}
                </div>
            </nav>
            </header>
        )
        
    };
}
 
export default HeaderComponent;