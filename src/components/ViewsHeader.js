import bannerPantalonesXS from '../assets/img/banner-pages/banner-pantalones/foto-banner-pantalones-xs.jpg';
import bannerPantalonesMD from '../assets/img/banner-pages/banner-pantalones/foto-banner-pantalones-md.jpg';
import bannerPantalonesHD from '../assets/img/banner-pages/banner-pantalones/foto-banner-pantalones-hd.jpg';


const ViewsHeader = () => {
  return (
    <picture className="main-header">
      <img className="header-img--mobile" src={bannerPantalonesXS} alt="" />
      <img className="header-img--tablet" src={bannerPantalonesMD} alt="" />
      <img className="header-img--desktop" src={bannerPantalonesHD} alt="" />
    </picture>
  )
}

export default ViewsHeader