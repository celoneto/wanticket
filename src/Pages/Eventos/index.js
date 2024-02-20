import React, {useState} from 'react'
import { Container, Form, SubContainerSign } from './styles'
import Input from '../../Components/Input/index'
import Botao from '../../Components/Botao/index'
import {validarNome} from '../../Utils/validadores'
import UserService from '../../Services/UserService'
import { NavLink, useNavigate } from 'react-router-dom'

const userService = new UserService()
 
const Eventos = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const { data } = await userService.evento({
        nome: form.nome,
        local: form.local,
        setor: form.setor,
        capacidade: form.capacidade,
        valor: form.valor,
        setor2: form.setor2,
        capacidade2: form.capacidade2,
        valor2: form.valor2,
        setor3: form.setor3,
        capacidade3: form.capacidade3,
        valor3: form.valor3,
        lote: form.lote,
        acrescimo: form.acrescimo,
        cupom: form.cupom,
        desconto: form.desconto,
        ativo: true
      })
      if (data) {
        alert('Evento Cadastrado com Sucesso')
        navigate('/home')
    }
      setLoading(false)
    }
    catch (err) {
      alert('Algo deu errado com o Cadastro' + err)
    }
  }

  const handleChange = (event) =>  {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validarNome(form.nome) 
  }

  return (
    <Container>
      <Form>
        <h1>Faça o cadastro do Evento</h1>
        <Input
          name='nome'
          placeholder='Nome do evento'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='local'
          placeholder='Local do Evento'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='setor'
          placeholder='Setor'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='capacidade'
          placeholder='Capacidade do Setor'
          onChange={handleChange}
          type='number'
        />
        <Input
          name='valor'
          placeholder='Valor do Ingresso no Setor'
          onChange={handleChange}
          type='number'
        />
        <Input
          name='setor2'
          placeholder='Segundo Setor'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='capacidade2'
          placeholder='Capacidade do Segundo Setor'
          onChange={handleChange}
          type='number'
        />
        <Input
          name='valor2'
          placeholder='Valor do Ingresso no Setor'
          onChange={handleChange}
          type='number'
        />
        <Input
          name='setor3'
          placeholder='Terceiro Setor'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='capacidade3'
          placeholder='Capacidade do Terceiro Setor'
          onChange={handleChange}
          type='number'
        />
        <Input
          name='valor3'
          placeholder='Valor do Ingresso no Setor'
          onChange={handleChange}
          type='number'
        />
        <Input
          name='lote'
          placeholder='Quantidade de lotes'
          onChange={handleChange}
          type='number'
        />
        <Input
          name='acrescimo'
          placeholder='Acrescimo do lote'
          onChange={handleChange}
          type='number'
        />
        <Input
          name='cupom'
          placeholder='Nome do cupom'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='desconto'
          placeholder='Desconto no cupom'
          onChange={handleChange}
          type='number'
        />
        <Botao
          type='submit'
          text='Efetuar Cadastro!'
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <SubContainerSign>
          <NavLink to="/home"><b>Inicio</b></NavLink>
        </SubContainerSign>
      </Form>
    </Container>
    
  )
}

export default Eventos;