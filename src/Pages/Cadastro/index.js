import React, {useState} from 'react'
import { Container, Cabecalho ,Form, SubContainerSign, Elements } from './styles'
import Input from '../../Components/Input/index'
import Botao from '../../Components/Botao/index'
import { validarEmail, validarSenha, validarTelefone, validarNome, validarConfirmarSenha, validarCNPJ } from '../../Utils/validadores'
import UserService from '../../Services/UserService'
import { NavLink, useNavigate } from 'react-router-dom'

const userService = new UserService()
 
const Cadastro = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const { data } = await userService.cadastrar({
        nome: form.nome,
        telefone: form.telefone,
        email: form.email,
        password: form.password,
        adm: form.adm,
        cnpj: form.cnpj,
        empresa: form.empresa
      })
      if (data) {
        const responseLogin = await userService.login({
          nome: form.nome,
          email: form.email,
          password: form.password,
          adm: form.adm
        })
        if (responseLogin === true) {
          alert('usuário Cadastrado com Sucesso')
          navigate('/login')
        }
    }
      setLoading(false)
    }
    catch (err) {
      alert('Algo deu errado com o Cadastro' + err)
    }
  }

  const handleChange = (event) =>  {
    if(event.target.value == 'on')
    {
      event.target.value = true
    }
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validarEmail(form.email) 
    && validarSenha(form.password)
    && validarTelefone(form.telefone)
    && validarConfirmarSenha(form.password, form.confirmarPassword)
    && validarNome(form.nome)
    && validarCNPJ(form.cnpj)
  }

  return (
    <>
    <Cabecalho>
        <Elements>
            <h3>WanTicket</h3>
        </Elements>
    </Cabecalho>
    <Container>
      <Form>
        <h1>Faça o seu Cadastro</h1>
        <Input
          name='nome'
          placeholder='Digite o seu nome'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='telefone'
          placeholder='Digite o seu telefone'
          onChange={handleChange}
          type='number'
        />
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
        <Input
          name='confirmarPassword'
          placeholder='Confirme a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Input
          name='adm'
          id='adm'
          value='true'
          onChange={handleChange}
          type='checkbox'
        />
        <label for="adm"> Empresa? </label>        
        {
          form.adm?
          <div>
            <Input
              name='cnpj'
              placeholder='Digite o CNPJ'
              onChange={handleChange}
              type='number'
            />
            <Input
              name='empresa'
              placeholder='Digite a Razão Social'
              onChange={handleChange}
              type='email'
            />
          </div>
          :<div></div>
        }
          <Botao
          type='submit'
          text='Efetuar Cadastro!'
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <SubContainerSign>
          <p>Já possui conta?</p>
          <NavLink to="*"><b>Login</b></NavLink>
        </SubContainerSign>
      </Form>
    </Container>
    </>
    
  )
}

export default Cadastro;