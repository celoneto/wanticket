import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  background-color: #7D15E5;

`
export const Logo = styled.div`
  font-size: 30px;
  padding: 10px 100px;
  display: flex;
  flex-direction: row;
  
  `
export const Cabecalho = styled.div`
  width: 30%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #7D15E5;

`

export const Form = styled.form`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #18032D;
  border-radius: 20px;
  width: 100%;
  max-width: 450px;
  gap: 30px 0px;

  h1 {
    color: white;
    font-size: 20px;
    font-weight: light;
  }

  p {
    color: white;
    font-size: 16px;
    font-weight: bold; 
  }

  a {
    color: white;
    font-size: 14px;
  }
`

export const SubContainerSign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 20px;
  align-items: center;
`

