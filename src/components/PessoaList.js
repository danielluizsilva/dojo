import React, {Component} from 'react';

class PessoaList extends Component{
	
	getRows(lista){

		return lista.map(pessoa=>{
			return (<PessoaRow key={pessoa.nome} pessoa={pessoa}/>)
		});
	}

	render(){

		const {lista} = this.props;

		return (
			<table>
				<tbody>
					{this.getRows(lista)}
				</tbody>
			</table>
		);
	}
}

class PessoaRow extends Component{

	render(){

		const {pessoa} = this.props;

		return (
		<tr>
			<td>{pessoa.nome}</td>
			<td>{pessoa.idade}</td>
		</tr>
		)
	}
}
export default PessoaList;