import * as S from './styles'
import { useSelector } from 'react-redux'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootState } from '../../app/store'

const Header = () => {
  // Fetching itensNoCarrinho and favoritos from Redux store
  const itensNoCarrinho = useSelector((state: RootState) => state.cart.items)
  const favoritos = useSelector((state: RootState) => state.favorites.items)

  console.log(itensNoCarrinho) // Check cart data for debugging

  const valorTotal = itensNoCarrinho.reduce(
    (acc: number, item: { preco: number; quantity: number }) => {
      console.log(item) // Debug the structure of each cart item
      acc += item.preco * item.quantity
      return acc
    },
    0
  )

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Cart" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
