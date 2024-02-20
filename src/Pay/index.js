import React from 'react'
import QrCode from 'react-qr-code'
import {Card, ContainerCard} from './styles'
import { useNavigate } from 'react-router-dom'



export default function Pay () {
    const navigate = useNavigate()
    const sair = () => {
        navigate("/home")        
    }
    return(
        <>
            <div className='modal'>
            <div className='modalContent'>
            <button className='botaoAlterar' onClick={()=>sair()}><b>X</b></button>                
            <h3>Compra do Ingresso</h3>
                    <ContainerCard>
                        <Card  key={"pegar"}>
                            <h1>{localStorage.getItem("compraNome")}</h1><br/>
                            <p>Setor: {localStorage.getItem("compraSetor")}</p><br/>
                            <p>Valor a ser pago: <b   style={{color: "white"}}>R$ {localStorage.getItem("compraValor")}</b></p><br/>
                            <div style={{ height: "auto", margin: "0 auto", maxWidth: 500, width: "100%"}}>
                                <QrCode
                                fgColor={'#252049'}
                                bgColor= {"#000000"}
                                style={{ height: "auto", maxWidth: "100%", width: "100%"}}
                                value={'Obrigado pela compra de R$'+localStorage.getItem("compraValor")+'. Te aguardamos aqui!'}
                                />
                            </div>
                        </Card>
                    </ContainerCard>
            </div>
            </div>
        
        </>
    )
} 


