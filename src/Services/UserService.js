import axios from 'axios';


export default class UserServices{
  constructor () {
    this.axios = axios.create({
      baseURL: "http://localhost:3500" 
    })
    this.state = {
      user:[]
    } 
  }

  async login (dados) {
    await this.axios.post('/login', dados)
    const data = {
      nome: dados.nome,
      email: dados.email,
      pasword: dados.password
    }
    
    if (data) {
      return true
    }

    return
  }

  async cadastrar (dados) {
    const {data} = await this.axios.post('/user', dados)
    return {data}
  }

  async evento (dados) {
    const {data} = await this.axios.post('/evento', dados)
      localStorage.setItem("Evento", data.nome)
      localStorage.setItem("local", data.local)
      localStorage.setItem("setor", data.setor)
      localStorage.setItem("capacidade", data.capacidade)
      localStorage.setItem("valor", data.valor)
      localStorage.setItem("setor2", data.setor2)
      localStorage.setItem("capacidade2", data.capacidade2)
      localStorage.setItem("valor2", data.valor2)
      localStorage.setItem("setor3", data.setor3)
      localStorage.setItem("capacidade3", data.capacidade3)
      localStorage.setItem("valor3", data.valor3)
      localStorage.setItem("lote", data.lote)
      localStorage.setItem("acrescimo", data.acrescimo)
      localStorage.setItem("cupom", data.cupom)
      localStorage.setItem("desconto", data.desconto)
      localStorage.setItem("ativo", data.ativo)
  return {data}
  }

  async editarEvento (dados) {
    const {data} = await this.axios.patch('/evento'+dados, dados)
    return {data}
  }

  usuarioAutenticado () {
    return localStorage.getItem("id") != undefined ? true : false
  }l

  async logout () {
    localStorage.removeItem("adm")
    localStorage.removeItem("nome")
    localStorage.removeItem("email")
    localStorage.removeItem("id")
  }
  async clear () {
    localStorage.clear()
  }
}