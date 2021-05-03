import React from 'react';

class validateForm extends React.Component {
  render() {
    return (
      <>
      {alert(`{this.props.data.Name} foi cadastrado com sucesso`)}
  <p>{this.props.data.Name}</p>
        <p>{this.props.data.Email}</p>
        <p>{this.props.data.CPF}</p>
        <p>{this.props.data.Addres}</p>
        <p>{this.props.data.City}</p>
        <p>{this.props.data.Staste}</p>
        <p>{this.props.data.Type}</p>
        <p>{this.props.data.ResumoDoCurriculo}</p>
        <p>{this.props.data.Cargo}</p>
        <p>{this.props.data.DescricaoDoCargo}</p>
        </>
  )
  }
}

export default validateForm;
