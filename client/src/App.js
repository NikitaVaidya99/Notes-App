import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Link, Route, Switch} from 'react-router-dom'
import _ from 'lodash'
import Login from './components/users/login.js'
import Register from './components/users/register.js'
import {connect} from 'react-redux'
import NotesHome from './components/notes/notesHome.js'

import NewNote from './components/notes/new.js'
import ShowNote from './components/notes/show.js'

import {Navbar,NavbarBrand, Nav, NavItem,NavLink} from 'reactstrap'

import ListCategory from './components/category/list.js'
import ShowCategory from './components/category/show.js'
import FormCategory from './components/category/form.js'
import NewCategory from './components/category/new.js'
import EditCategory from './components/category/edit.js'

import Logout from './components/users/logout'

function App(props) {
  return (
    <BrowserRouter>
    <div >
    
{
  (_.isEmpty(props.user))?
  
<Navbar className="box" light expand="md">
      <NavbarBrand className="text-white">Notes App</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link className="nav-link text-white" to="/">Home</Link>
        </NavItem>
        <NavItem>
    <NavLink className="text-white" href="/login">Login</NavLink>
  </NavItem>
  <NavItem>
    <NavLink className="text-white" href="/register">Register</NavLink>
  </NavItem>
</Nav>
</Navbar>

:
<Navbar className="box" light expand="md">
<NavbarBrand className="text-white">Notes App</NavbarBrand>
 <Nav className="ml-auto" navbar>
  <NavItem>
    <NavLink className="text-white" href="/noteshome">Notes</NavLink>
  </NavItem>
  <NavItem>
    <NavLink className="text-white" href="/list">Category</NavLink>
  </NavItem>
  <NavItem>
    <NavLink className="text-white" href="/logout">Logout</NavLink>
  </NavItem>
</Nav> 
</Navbar>
}
    
<Switch>

        <Route path='/login' component={Login} exact={true}/>
        <Route path='/register' component={Register} exact={true}/>
        {/* <Route path="/" component={Home} /> */}
        <Route path='/noteshome' component={NotesHome} exact={true}/>
        <Route path='/list' component={ListCategory}  exact={true}/>

        <Route path='/notes/new' component={NewNote} exact={true}/>
        <Route path='/categories' component={NewCategory} exact={true}/>
        <Route path='/categories/new' component={FormCategory} exact={true}/>
        <Route path='/categories/edit/:id' component={EditCategory}/>
        <Route path='/categories/:id' component={ShowCategory}/>

        <Route path='/logout' component={Logout}/>
        
</Switch>

    </div>
    </BrowserRouter>
  )
}

const mapStateToProps=(state)=>{
 return  {user:state.user
}}
export default connect(mapStateToProps)(App)