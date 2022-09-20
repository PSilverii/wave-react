import FilterDesktop from "../components/FilterDesktop"
import ViewsHeader from "../components/ViewsHeader"
import ItemListContainer from "../containers/ItemListContainer"

const Categories = () => {
  return (
    <>
      <ViewsHeader />
      <section className="categories">
        <FilterDesktop />
        <ItemListContainer />
      </section>
    </>
  )
}

export default Categories