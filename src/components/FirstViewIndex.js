import indexBgXs from '../assets/img/index-bg/img-bg-index-xs.jpg';
import indexBgMd from '../assets/img/index-bg/img-bg-index-md.jpg';
import indexBgHd from '../assets/img/index-bg/img-bg-index-hd.jpg';

const FirstViewIndex = () => {
  return (
    <>
      <picture className="first-view__img">
        <img className="first-view__img--mobile" src={indexBgXs} alt="imagen-surf" />
        <img className="first-view__img--tablet" src={indexBgMd} alt="imagen-surf" />
        <img className="first-view__img--desktop" src={indexBgHd} alt="imagen-surf" />
      </picture>
    </>
  )
}

export default FirstViewIndex