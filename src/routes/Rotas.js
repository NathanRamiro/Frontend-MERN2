import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Alunos from '../pages/Alunos'
import Add from '../pages/Add'
import Edit from '../pages/Edit'
import Delete from '../pages/Delete'

export default function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/alunos' component={Alunos} />
                <Route exact path='/add' component={Add} />
                <Route exact path='/edit' component={Edit} />
                <Route exact path='/delete' component={Delete} />
            </Switch>
        </HashRouter>
    )
}