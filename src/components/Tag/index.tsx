import * as S from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ children, size = 'small' }: Props) => (
  <S.Tagcontainer size={size}>{children}</S.Tagcontainer>
)

export default Tag
