import React from 'react';
import InputName from './inputName';
import states from './states';
// import validateForm from './validateForm';

const housingType = ['house', 'apartment'];
let mouseEnters = 0

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      Name: '',
      Email: '',
      Cpf: '',
      Addres: '',
      City: '',
      State: '',
      Type: '',
      ResumoDoCurriculo: '',
      Cargo: '',
      DescricaoDoCargo: '',

      errorName: '',
      errorEmail: '',
      errorCpf: '',
      errorAddres: '',
      errorCity: '',
      errorEstate: '',
      errorType: '',
      errorResumoDoCurriculo: '',
      errorCargo: '',
      errorDescricaoDoCargo: '',

    }

    this.handleForms = this.handleForms.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleForms(event) {
    const { name, value } = event.target;
    if (name === 'Name' && value.length <= 51) {
      this.setState({
        [name]: value.toUpperCase(),
        errorName: value.length > 50 ? "Numero máximo de caracteres: 50" : ''
      })
    }
    if (name === 'Email' && value.length <= 51) {
      this.setState({
        [name]: value,
        errorEmail: value.length > 50 ? "Numero máximo de caracteres: 50" : ''
      })
    }

    if (name === 'Cpf' && value.length <= 12) {
      this.setState({
        // consultado método em https://pt.stackoverflow.com/questions/218989/formatar-sequencia-num%C3%A9rica-em-formato-Cpf-com-separadores-usando-javascript
        [name]: value.replace(/[^\d]/g, "")/* .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") */,
        errorCpf: value.length > 11 ? "Numero máximo de caracteres: 11" : ''
      })
    }
    if (name === 'Addres' && value.length <= 201) {
      this.setState({
        [name]: value,
        errorAddres: value.length > 200 ? "Numero máximo de caracteres: 200" : ''
      })
    }
    if (name === 'City' && value.length <= 29) {
      const verification = (value.length > 28) ? "Numero máximo de caracteres: 28" : '';
      this.setState({
        [name]: value,
        errorCity: verification
      })
    }
    if (name === 'State') {
      this.setState({ [name]: value })
    }
    if (name === 'Type') {
      this.setState({ [name]: value })
    }
    if (name === 'Type') {
      this.setState({ [name]: value })
    }
    if (name === 'ResumoDoCurriculo' && value.length <= 1001) {
      const verification = (value.length > 1000) ? "Numero máximo de caracteres: 1000" : '';
      this.setState({
        [name]: value,
        errorResumoDoCurriculo: verification
      })
    }
    if (name === 'Cargo' && value.length <= 41) {
      const verification = (value.length > 40) ? "Numero máximo de caracteres: 40" : '';
      this.setState({
        [name]: value,
        errorResumoDoCurriculo: verification
      })
    }
    if (name === 'DescricaoDoCargo' && value.length <= 501) {
      const verification = (value.length > 500) ? "Numero máximo de caracteres: 500" : '';
      this.setState({
        [name]: value,
        errorDescricaoDoCargo: verification
      })
    }
  }

  validateForm(event) {
    event.preventDefault();
    alert(`${this.state.Name} foi cadastrado com sucesso`)
    return (
      <>
        <p>{this.state.Name}</p>
        <p>{this.state.Email}</p>
        <p>{this.state.Cpf}</p>
        <p>{this.state.Addres}</p>
        <p>{this.state.City}</p>
        <p>{this.state.Staste}</p>
        <p>{this.state.Type}</p>
        <p>{this.state.ResumoDoCurriculo}</p>
        <p>{this.state.Cargo}</p>
        <p>{this.state.DescricaoDoCargo}</p>
      </>
    )
  }

  render() {
    return (
      <>
        <form onSubmit={this.validateForm}>
          <fieldset>
            <InputName
              handleForms={this.handleForms}
              value={this.state.Name}
              errorName={this.state.errorName}
            />
            <div>
              <label>Email: </label>
              <input
                type="email"
                value={this.state.Email}
                onChange={this.handleForms}
                name='Email'
                required
              />
              <div>
                <span>{this.state.errorEmail}</span>
              </div>
            </div>
            <div>
              <label>Cpf: </label>
              <input
                type="text"
                value={this.state.Cpf}
                onChange={this.handleForms}
                name='Cpf'
                required
              />
              <div>
                <span>{this.state.errorCpf}</span>
              </div>
            </div>
            <div>
              <label>Addres: </label>
              <input
                type="text"
                value={this.state.Addres}
                onChange={this.handleForms}
                name='Addres'
                required
              />
              <div>
                <span>{this.state.errorAddres}</span>
              </div>
            </div>
            <div>
              <label>City: </label>
              <input
                type="text"
                value={this.state.City}
                onChange={this.handleForms}
                name='City'
                required
                // consultado em https://www.linhadecomando.com/javascript/javascript-eventos-onblur-e-onfocus
                onBlur={() => ((/([0-9])/).test(this.state.City))
                  ? this.setState({ City: '' })
                  : this.state.City}
              />
              <div>
                <span>{this.state.errorCity}</span>
              </div>
            </div>
            <div>
              <label>State: </label>
              <select
                type="select"
                value={this.state.State}
                onChange={this.handleForms}
                name='State'
              >{Object.values(states).map((state, index) =>
                <option key={index}>
                  {state}
                </option>)}</select>
            </div>

            {housingType.map((home, index) => {
              return (
                <div key={index}>
                  <label htmlFor={home}>{home}:
                  <input
                      type="radio"
                      id={home}
                      value={home}
                      onChange={this.handleForms}
                      name='Type'
                    />
                  </label>
                </div>
              )
            })}
            <div>
              <span>{this.state.errorType}</span>
            </div>

          </fieldset>

          <fieldset>
            <div>
              <label>Resumo do currículo: </label>
              <textarea
                type="text"
                value={this.state.ResumoDoCurriculo}
                onChange={this.handleForms}
                name='ResumoDoCurriculo'
                required
              />
              <span>{this.state.errorResumoDoCurriculo}</span>
            </div>
            <div>
              <label>Cargo: </label>
              <textarea
                type="text"
                value={this.state.Cargo}
                onChange={this.handleForms}
                name='Cargo'
                onMouseEnter={() => {
                  if (mouseEnters < 1) {
                    mouseEnters += 1
                    alert('Preencha com cuidado esta informação.')
                  }
                }
                }
                required
              />
              <span>{this.state.errorCargo}</span>
            </div>
            <div>
              <label>Descrição do Cargo: </label>
              <textarea
                type="text"
                value={this.state.DescricaoDoCargo}
                onChange={this.handleForms}
                name='DescricaoDoCargo'
                required
              />
              <span>{this.state.errorDescricaoDoCargo}</span>
            </div>
          </fieldset>

          <button type="submit" onSubmit={this.validateForm}>Submit</button>
        </form>
        <div id="validate">
        </div>
      </>
    )
  }
}

export default Form;

// if (value.length > 50 && name === 'Email') {
    //   this.setState({ errorName: "Numero máximo de caracteres: 50" })
    //   return;
    // }
    // this.setState({ [name]: value })

    // (value.length > 11 && name === 'Cpf')
    // ?
    // this.setState({ errorName: "Numero máximo de caracteres: 11" })
    // :
    // this.setState({ [name]: value })

    // (value.length > 200 && name === 'Addres')
    // ?
    // this.setState({ errorName: "Numero máximo de caracteres: 200" })
    // :
    // this.setState({ [name]: value })

    // (value.length > 28 && name === 'City')
    // ?
    // this.setState({ errorName: "Numero máximo de caracteres: 28" })
    // :
    // this.setState({ [name]: value })

    // (value.length > 40 && name === 'State')
    // ?
    // this.setState({ errorName: "Numero máximo de caracteres: 40" })
    // :
    // this.setState({ [name]: value })