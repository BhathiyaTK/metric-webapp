import { Link } from 'react-router-dom';
import { productCards } from '../../constants';

function renderCardName(param) {
   switch (param) {
      case 'comfort fit pets':
         return <span>comfort fit<br />pets</span>;
      case 'drift to sleep':
         return <span>drift to<br />sleep</span>;
      default:
         return <span>cups and underwire<br />for intimate apparel</span>;
   }
}

const ProductHome = () => {
   return (
      <main className="custom-container mx-auto h-full">
         <div className="block md:flex md:flex-row items-start justify-center md:space-x-16 absolute top-48 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4/5">
            {productCards.map((card, index) => (
               <div className="w-full md:w-1/3 text-center mb-16 md:mb-0" key={index}>
                  <div className="flex flex-row space-x-7 items-center">
                     <div className="w-1/2 rounded-4xl overflow-hidden green-shadow">
                        <img src={card.imageOne} alt="image-one" />
                     </div>
                     <div className="w-1/2 rounded-4xl overflow-hidden green-shadow">
                        <img src={card.imageTwo} alt="image-two" />
                     </div>
                  </div>

                  <h1 className="capitalize text-primaryBlue font-poppins font-semibold text-2xl lg:text-5xl mt-10 mb-3 md:mt-14 md:mb-5">
                     {renderCardName(card.name)}
                  </h1>
                  <Link to={card.path} aria-labelledby={'See all products' + index} title="Link to see all products">
                     <button title="See all products" aria-labelledby={'See All Products' + index}
                        className="font-poppins uppercase font-semibold text-white text-2xl rounded-xl px-5 py-1 bg-primaryGreen hover:bg-primaryBlue transition-all"
                        id={'seeAllProductsButton' + index} accesskey="i">
                        See all products
                     </button>
                  </Link>
               </div>
            ))}
         </div>
      </main>
   )
}

export default ProductHome;