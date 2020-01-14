import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import NotesList from './list.js'
import New from './new.js'
import ShowNote from './show.js'
import Edit from './edit.js'
import '../../App.css'
export default class NotesHome extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <br/>
                <div className="box">
                <div align="center">
                <Link className="btn btn-primary center" to='/new' >Create note</Link> &nbsp;
                <Link className="btn btn-primary center" to='/notes'>List notes</Link>
                </div>
              
                <Route path='/notes' component={NotesList}  exact={true}/>
                <Route path='/new' component={New} exact={true}  exact={true}/>
                <Route path='/edit/:id' component={Edit}  exact={true}/>
                <Route path='/categories' component={Edit}  exact={true}/>
                <Route path='/new/:id' component={New}  exact={true}/>
                <Route path='/shownote/:id' component={ShowNote}/>
                </div>
                </div>
            </div>
          </div>
            </BrowserRouter>
        )
    }
}