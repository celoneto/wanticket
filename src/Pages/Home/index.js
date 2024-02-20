import React,{ useState, useEffect } from 'react'
import { Container, Required, SubContainerSign, Content, Card, ContainerCard, Cabecalho, ContainerBody, Elements, Logo } from './styles'
import { validarSenha, validarConfirmarSenha, validarEmail } from '../../Utils/validadores'
import Input from '../../Components/Input/index'
import Botao from '../../Components/Botao/index'
import UserService from '../../Services/UserService'
import { NavLink, useNavigate } from 'react-router-dom'
import WanTicket from '../../Midia/wanticket.png'
import './style.css'

const Home = () => {
    const [pegar, setPegar] = useState([])
    const [comprar, setComprar] = useState(false)
    const [adm, setAdm] = useState(false)
    const [form, setForm] = useState([])
    const [cartao, setCartao] = useState([])
    const [loading, setLoading] = useState()
    const [mudarSenha, setMudarSenha] = useState([])
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()
    
    const userService = new UserService()

    useEffect(()=>{
        pegarEvento()
        pegarUser()
        pegarADM()
    },[])

    const pegarADM = () => {
        if(localStorage.getItem("adm")==='true'){
            setAdm(!adm)
        }else{
            setAdm(false)
        }
    }

    const pegarEvento = async () => {
        const api = await fetch(
            "http://localhost:3500/evento",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        const uso = await api.json()
        setPegar(uso)
        return uso
    }

    const alterarModal = () => {
        setModal(!modal)
    }

    const pegarUser = async () => {
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
        setMudarSenha(uso)
        return uso
    }

    const editar = (dado, novoDado) => {
        excluir(dado)
        navigate("/edit")
    }

    const excluir = (dado) => {
        const api = fetch(
            "http://localhost:3500/evento/"+dado,
            {
                method: "DELETE",
            })
            .then(resposta => {
                if(resposta.ok){
                    pegarEvento()
                }
            })
    }

    const compra = (item) => {
        setComprar(!comprar)
        setCartao(item)
    }

    const compraIngresso = (a,b,c,d,e) => {
        localStorage.setItem("compraNome", a)
        localStorage.setItem("compraLocal", b)
        localStorage.setItem("compraSetor", c)
        localStorage.setItem("compraCapacidade", d)
        localStorage.setItem("compraValor", e)
        navigate("/pagar")
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        setLoading(true)
        const data = {
            email: form.email,
            lastPassword: form.password,
            password: form.newPassword
        }
        mudarSenha.map(
            (item)=>{
                if (data.email === item.email && data.lastPassword === item.password) {
                    const response = fetch("http://localhost:3500/login/"+item.id, 
                    {
                        method: 'PUT',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                        })
                        .then(resposta => {
                            if(resposta.ok){
                                console.log("User",pegarUser())
                            }
                        })
                        alert('A senha foi alterada')
                        alterarModal()
                }
            }
          )
        setLoading(false)
        }
        catch (err) {
          alert('Algo deu errado' + err)
        }
    }
    
    const sair = () => {
        userService.logout()
        userService.clear()
        navigate('/login')
    }

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
      }
    
    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password)
        && validarConfirmarSenha(form.newPassword, form.confirmarNewPassword)
    }
    

    return(
        <ContainerBody>
            <Cabecalho>
                <Logo>
                    <img style={{width:'50px', height: '50px'}} src={WanTicket}/>
                    <h3>WanTicket</h3>
                </Logo>
                <Elements>
                    <span>Olá, {localStorage.getItem("nome")} </span>
                    <button style={{borderRadius: "80%" ,backgroundColor: '#7e14e5', fontSize: '20px', cursor: 'pointer', padding: "10px 15px", border: 0}} onClick={()=>alterarModal()}>👤</button>
                    <button style={{border:0, backgroundColor: '#7e14e5', color:'#000',fontSize: '20px', cursor:'pointer'}} onClick={()=>sair()}> ⎗ Sair</button>
                </Elements>
            </Cabecalho>
            <Container>
            {
                modal?
                <div className='modal'>
                    <div className='modalContent'>
                        <button className='botaoAlterar' onClick={()=>alterarModal()}><b>X</b></button>
                        <h3>Editar Perfil</h3>
                        <Input
                            name='email'
                            placeholder='Digite o seu e-mail'
                            onChange={handleChange}
                            type='email'
                        />
                        <Input
                            name='password'
                            placeholder='Digite a senha atual'
                            onChange={handleChange}
                            type='password'
                        />
                        <Input
                        name='newPassword'
                        placeholder='Digite a nova senha'
                        onChange={handleChange}
                        type='password'
                        />
                        <Input
                        name='confirmarNewPassword'
                        placeholder='Confirme a nova senha'
                        onChange={handleChange}
                        type='password'
                        />
                        <Botao
                            type='submit'
                            text='Alterar'
                            onClick={handleSubmit}
                            disabled={!validadorInput()}
                        /><br/>
                    </div>
                </div>
                :
                <div></div>
            }
            {
                comprar?
                <div className='modal'>
                    <div className='modalContent'>
                        <button className='botaoAlterar' onClick={()=>compra()}><b>X</b></button>
                        <h3>Comprar Ingresso</h3>
                        <ContainerCard>
                            <Card>
                                <h1>{cartao.nome}</h1><br/>
                                <p>Local: {cartao.local} </p><br/>
                                <p className='cardP'  onClick={()=>(compraIngresso(cartao.nome, cartao.local ,cartao.setor, cartao.capacidade, cartao.valor))}>{cartao.setor}</p>
                                <p>Cabem {cartao.capacidade} pessoas</p>
                                <p>Ingresso: R$ {cartao.valor}</p><br/>
                                <p className='cardP'  onClick={()=>(compraIngresso(cartao.nome, cartao.local ,cartao.setor2, cartao.capacidade2, cartao.valor2))}>{cartao.setor2}</p>
                                <p>Cabem {cartao.capacidade2} pessoas</p>
                                <p>Ingresso: R$ {cartao.valor2}</p><br/>
                                <p className='cardP'  onClick={()=>(compraIngresso(cartao.nome, cartao.local ,cartao.setor3, cartao.capacidade3, cartao.valor3))}>{cartao.setor3}</p>
                                <p>Cabem {cartao.capacidade3} pessoas</p>
                                <p>Ingresso: R$ {cartao.valor3}</p>
                                <br/>
                                </Card>
                        </ContainerCard>
                    </div>
                </div>
                :
                <div></div>
            }
            <Required>
                <h1>Eventos</h1>
                    <Content >
                        {pegar.map(
                            (item)=>
                                (
                                    <ContainerCard>
                                        <Card key={"item.id"}>
                                            <h1>{item.nome}</h1><br/>
                                            <p>Local: {item.local} </p><br/>
                                            <p>{item.setor}</p>
                                            <p>Cabem {item.capacidade} pessoas</p>
                                            <p>Ingresso: R$ {item.valor}</p><br/>
                                            <p>{item.setor2}</p>
                                            <p>Cabem {item.capacidade2} pessoas</p>
                                            <p>Ingresso: R$ {item.valor2}</p><br/>
                                            <p>{item.setor3}</p>
                                            <p>Cabem {item.capacidade3} pessoas</p>
                                            <p>Ingresso: R$ {item.valor3}</p>
                                            <br/>
                                            {
                                                adm?
                                                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                                    <button style={{backgroundColor: '#ccc', color: '#7D15E5', border: 0, borderRadius: '5px', padding: '5px 5px', marginRight: '10px', cursor: 'pointer'}} onClick={()=>(editar(item))}> ﹅ Editar</button>
                                                    <button style={{backgroundColor: '#ccc', color: 'red', border: 0, borderRadius: '5px', padding: '5px 5px', cursor: 'pointer'}} onClick={()=>(excluir(item.id))}> ✘ Excluir</button>
                                                </div>
                                                :
                                                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                                    <button style={{backgroundColor: '#ccc', color: 'green', border: 0, borderRadius: '5px', padding: '5px 5px', marginRight: '10px', cursor: 'pointer'}} onClick={()=>(compra(item))}>✔︎ Comprar</button>
                                                </div>
                                            }
                                        </Card>
                                    </ContainerCard>
                                )
                            )
                        }
                    </Content>
                    {
                    adm?
                    <SubContainerSign>
                        <p>Adicionar Evento?</p>
                        <NavLink to="/evento"><b>Adicionar</b></NavLink>
                    </SubContainerSign>
                    :
                    <div></div>
                    }
            </Required>
            </Container>
        </ContainerBody>
    
    )
}

export default Home;

