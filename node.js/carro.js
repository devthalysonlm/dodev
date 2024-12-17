class Carro{
    constructor(marca, modelo, categoria, ano, quilometragem, valor){
        this.marca = marca
        this.modelo = modelo
        this.categoria = categoria
        this.ano = ano
        this.quilometragem = quilometragem
        this.valor = valor
    }
}


const meuCarro = new Carro("Porsche", "911 Carrera GTS", "Sport", 2024, 0, 1000000)
console.log(meuCarro)

//GET
function Get() {

    return fetch('https://apigenerator.dronahq.com/api/2lCe--PN/carro')
  
      .then((response) => response.json())
  
      .then((data) => console.log(data));
  
  }

Get();



  async function postData(url = 'https://apigenerator.dronahq.com/api/2lCe--PN/carro', data = {}) {

    const response = await fetch(url, {
  
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
  
      mode: 'cors',
  
      cache: 'no-cache',
  
      credentials: 'same-origin',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      redirect: 'follow',
  
      referrerPolicy: 'no-referrer',
  
      body: JSON.stringify(data)
  
    });
  
    return response.json();
  
  }

  const novoCarro = {
    marca: 'Porsche',
    modelo: '911 Carrera GTS',
    categoria: 'Sport',
    ano: 2024,
    quilometragem: 0,
    valor: 1000000,
  };
  
  
  postData('https://apigenerator.dronahq.com/api/2lCe--PN/carro', novoCarro /* OBJETO A SER USADO */)
  
    .then((data) => {
  
      console.log(data);  
  
  });