import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor() {
    super();

    // this.nextDog = this.nextDog.bind(this);
    // this.thisDog = this.thisDog.bind(this);

    this.state = {
      img: '',
      status: 'failed',
      loop: true,
    };
  }

  componentDidMount() {
      if (this.state.loop) {
      setInterval( async () => {
      const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
      const requestObject = await requestReturn.json();
      this.setState( {
        img: '' 
      }, () => setTimeout(() => {
        this.setState({ img: requestObject.message }) 
      }, 1500)
      
    )}, 6000)
      } 

  }


  // async fetchDogs() {
    // const requestJeaders = { headers: { Accept: 'application/json' } };
    /* requestJeaders */
   
    
  // }

  // nextDog() {
    
  // }

  // thisDog(){
  // }

  render() {
    const { img } = this.state;
    const loadingelement = <span>Aguarde um pouquinho até o proximo cachorrinho chegar...</span>;
    return (
      <div className="main">
      <div>
        <h1>Lindos cachorrinhos</h1>
      </div>
        <div>
        {/* <button type="button" onClick={ this.thisDog }>Quero Este!</button>
        <button type="button" onClick={ this.nextDog }>Ver o Próximo!</button> */}
      </div>
      <div className="dogsImage">
       {img ? <img src={ img } alt="imagem de um cachorro" /> : loadingelement }
       </div>
      </div>
    );
  }
}

export default Header;
