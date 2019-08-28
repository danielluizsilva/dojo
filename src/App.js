import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PessoaList from './components/PessoaList';
import FirebaseService from './services/FirebaseService';

class App extends Component {

  state={
    pessoa:{nome:'', idade:'', telefone:''},
    lista:[]
  };

  constructor(props){
    super(props);
    this.setField = this.setField.bind(this);
  }

  componentDidMount() {
    this.syncDatabase();
  }

  syncDatabase(){

    FirebaseService.getDataList('pessoa', (dataReceived) =>{

      const result = {...this.state};
      result.lista = dataReceived;

      this.setState(result);
    });
  }

  setField(event){

    let {pessoa} = this.state;
    pessoa[event.target.name] = event.target.value;

    this.setState({
      pessoa:pessoa,
      lista: [...this.state.lista]
    });
  }

  saveValue(pessoa){

    // this.setState({
    //   pessoa:{nome:'', idade:'', telefone:''},
    //   lista: [...this.state.lista, pessoa]
    // });

    FirebaseService.pushData('pessoa', pessoa);
    this.syncDatabase();
  }

  render(){

    const {pessoa} = this.state;

    return (
      <div className="App">
        Pessoa
        <form name="pessoaForm" onSubmit={(e)=> {e.preventDefault();this.saveValue(pessoa)} }>
            <input type="text" name="nome" onChange={this.setField} value={pessoa.nome}/><br/>
            <input type="text" name="idade" onChange={this.setField} value={pessoa.idade}/><br/>
            <input type="text" name="telefone" onChange={this.setField} value={pessoa.telefone}/><br/>
            <input type="submit" value="Cadastrar" onChange={this.setField} onClick={(e)=> {e.preventDefault();this.saveValue(pessoa)} } />
        </form>
        <PessoaList lista={this.state.lista}/>
      </div>
    );  
  }
  
}

export default App;
