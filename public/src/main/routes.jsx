import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Servicos from '../servicos/servicos'
import ContasBancarias from '../contasBancarias/contasBancarias'
import ContasPagar from '../contasPagar/contasPagar'
import ContasReceber from '../contasReceber/contasReceber'
import LivroCaixa from '../livroCaixa/livroCaixa'
import Despesas from '../despesas/despesas'
import Receitas from '../receitas/receitas'
import Relatorios from '../relatorios/relatorios'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/servicos' component={Servicos}/>
        <Route path='/contasBancarias' component={ContasBancarias}/>
        <Route path='/contasPagar' component={ContasPagar}/>
        <Route path='/contasReceber' component={ContasReceber}/>
        <Route path='/despesas' component={Despesas}/>
        <Route path='/receitas' component={Receitas}/>
        <Route path='/livroCaixa' component={LivroCaixa}/>
        <Route path='/relatorios' component={Relatorios}/>        
        <Redirect from='*' to='/' />
    </Router>
)