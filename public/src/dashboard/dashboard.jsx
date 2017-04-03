import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getSummary} from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

    
    componentWillMount() {
        this.props.getSummary()
    }
    
    render() {
        const {credit, debt} = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'/>
                <Content>
                    <Row>
                        <ValueBox
                            cols='12 4'
                            color='green'
                            icon='bank'
                            value={`${credit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 })}`}
                            text='Total de Créditos'/>
                        <ValueBox
                            cols='12 4'
                            color='red'
                            icon='credit-card'
                            value={`${debt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 })}`}
                            text='Total de Débitos'/>
                        <ValueBox
                            cols='12 4'
                            color='blue'
                            icon='money'
                            value={`${(credit - debt).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 })}`}
                            text='Valor Consolidado'/>
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
