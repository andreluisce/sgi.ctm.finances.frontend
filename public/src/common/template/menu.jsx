import React from 'react';

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Dashboard' icon='dashboard'/>
        <MenuTree path='#' label='Gerenciar' icon='pencil-square-o'>
            <MenuItem path='#' label='Serviços' icon='th'/>
            <MenuItem path='#' label='Contas Bancárias' icon='money'/>
            <MenuItem path='#' label='Receitas' icon='hand-o-right'/>
            <MenuItem path='#' label='Despesas' icon='hand-o-left'/>
            <MenuItem path='#' label='Relatórios' icon='line-chart'/>
            <MenuItem path='#' label='Contas a Pagar' icon='credit-card'/>
            <MenuItem path='#' label='Contas a Receber' icon='credit-card-alt'/>
            <MenuItem path='#' label='Livro Caixa' icon='book'/>
        </MenuTree>
    </ul>
)