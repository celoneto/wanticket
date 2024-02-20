import styled from 'styled-components'

export const ContainerBody = styled.div`

`
export const Elements = styled.div`
  font-size: 30px;
  padding: 10px 100px;

  span{
    font-size: 24px;
  }
  `
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93vh;
  min-width: 100vw;
  background-color: #7D15E5;

`
export const Cabecalho = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #7D15E5;

`

export const Logo = styled.div`
  font-size: 30px;
  padding: 10px 100px;
  display: flex;
  flex-direction: row;
  
  `


export const Required = styled.div`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #18032D;
  border-radius: 20px;
  width: 100%;
  max-width:1350px;
  gap: 30px 0px;

  h1 {
    color: white;
    font-size: 40px;
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
export const Card = styled.div`
align-items: center;
background-color: #000;

h1 {
  color: #7D15E5;
  font-size: 30px;
  font-weight: light;
  cursor: pointer;
}

p {
  color: gray;
  font-size: 16px;
  font-weight: bold; 
  align-items: left;
}

a {
  color: gray;
  font-size: 14px;
}
`

export const Content = styled.div`
  display: flex;
  padding: 3rem;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  background-color: #18032D;
  margin: 10px auto;
  border-radius: 20px;
  width: 100%;
  max-width: 1300px;
  gap: 30px 0px;
`

export const ContainerCard = styled.div`
  display: flex;
  padding: 3rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #000;
  margin: 10px auto;
  border-radius: 20px;
  width: 100%;
  max-width: 350px;
  gap: 30px 0px;

  p{
    cursor: pointer;
  }
`

export const SubContainerSign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 20px;
  align-items: center;
`

