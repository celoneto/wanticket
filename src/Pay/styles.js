import styled from 'styled-components'

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
