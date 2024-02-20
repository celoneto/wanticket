import React, {useState, useEffect} from 'react'
import { Container, Form, SubContainerSign, Cabecalho, Logo } from './styles'
import Input from '../../Components/Input/index'
import Botao from '../../Components/Botao/index'
import { validarEmail, validarSenha } from '../../Utils/validadores'
import { NavLink, useNavigate } from 'react-router-dom'
import WanTicket from '../../Midia/wanticket.png'

const Login = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()
  const [logar, setLogar] = useState([])

  useEffect(()=>{
    pegarEvento()
},[])

const pegarEvento = async () => {
    const api = await fetch(
        "http://localhost:3500/login",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    const uso = await api.json()
    setLogar(uso)
}


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const data = {
        email: form.email,
        pasword: form.password
      }
      logar.map(
        (item)=>{
          if (data.email === item.email && data.pasword == item.password) {
            localStorage.setItem("nome", item.nome)      
            localStorage.setItem("email", item.email)
            localStorage.setItem("id", item.id)      
            localStorage.setItem("adm", item.adm)      
            alert('usuário Logado com Sucesso')
            navigate('/home')
          }
        }
      )
      setLoading(false)
      }
    catch (err) {
      alert('Algo deu errado com o Login' + err)
    }
  }

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.password)
  }

  return (
    <>
    <Cabecalho>
        <Logo>
            <img style={{width:'50px', height: '50px'}} src={WanTicket}/>
            <h3>WanTicket</h3>
        </Logo>
    </Cabecalho>
    <Container>
      <Form>
        <h1>Faça o seu Login</h1>
        <Input
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleChange}
          type='email'
        />
        <Input
          name='password'
          placeholder='Digite a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Botao
          type='submit'
          text='Entrar!'
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <SubContainerSign>
          <p>Não possui conta?</p>
          <NavLink to="/cadastrar"><b>Cadastrar</b></NavLink>
        </SubContainerSign>
      </Form>
    </Container>
  </>
  )
}

export default Login;