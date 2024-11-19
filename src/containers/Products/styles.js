import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh - 72px);
`

export const ProductsImg = styled.img`
  width: 100%;
`
export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.$isActiveCategory && '2px solid #9758A6'};
  color: ${props => (props.$isActiveCategory ? '#9758A6' : '#9a9a9d')};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
  font-weight: 500;
  text-transform: capitalize;
  transition: color 0.3s ease, border-color 0.3s ease;

  /* Efeito de hover */
  &:hover {
    color: #9758A6;
    border-bottom: 2px solid #9758A6;
  }

  /* Foco no botão */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(151, 88, 166, 0.3); /* Sombra suave no foco */
  }
`;



export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
  padding: 20px;
  justify-items: center;
  margin-top: 20px;
`
