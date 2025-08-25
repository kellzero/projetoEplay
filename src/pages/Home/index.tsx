import Banner from '../../components/Banner'
import ProducList from '../../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: OnSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: SoonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  {
    return (
      <>
        <Banner />
        <ProducList
          games={OnSaleGames}
          title="Promoções"
          background="gray"
          id="on-sale"
          isLoading={isLoadingSale}
        />
        <ProducList
          games={SoonGames}
          title="Em breve"
          background="black"
          id="coming-soon"
          isLoading={isLoadingSoon}
        />
      </>
    )
  }
}

export default Home
