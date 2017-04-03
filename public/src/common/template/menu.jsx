import React from 'react';

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Dashboard' icon='dashboard'/>
        <MenuTree path='#' label='Gerenciar' icon='pencil-square-o'>
            <MenuItem path='#servicos' label='Serviços' icon='th'/>
            <MenuItem path='#contasBancarias' label='Contas Bancárias' icon='money'/>
            <MenuItem path='#receitas' label='Receitas' icon='hand-o-right'/>
            <MenuItem path='#despesas' label='Despesas' icon='hand-o-left'/>
            <MenuItem path='#relatorios' label='Relatórios' icon='line-chart'/>
            <MenuItem path='#contasPagar' label='Contas a Pagar' icon='credit-card'/>
            <MenuItem path='#contasReceber' label='Contas a Receber' icon='credit-card-alt'/>
            <MenuItem path='#livroCaixa' label='Livro Caixa' icon='book'/>
        </MenuTree>
    </ul>
)