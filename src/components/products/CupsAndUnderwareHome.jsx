import { Link } from 'react-router-dom';
import { BottomBar } from '../';
import { productCards } from '../../constants';

const CupsAndUnderwareHome = () => {
   return (
      <>
         <div className="custom-container mx-auto pt-20">
            <h1 className="text-4xl font-poppins font-bold capitalize text-primaryGreen text-center md:text-left">cups and underwires for<br />intimate apparel</h1>
            <div className="w-full my-4 border border-t-primaryBlue"></div>
            <div className="block md:flex md:flex-row justify-around">
               {
                  productCards[2].categories.map((product, index) => (
                     <div key={index}>
                        <div className="mt-10 mb-32 md:mb-0">
                           <h1 className="text-4xl md:text-5xl font-poppins font-bold uppercase text-center text-primaryBlue mb-10">{product.title}</h1>
                           <div className="relative w-4/5 mx-auto rounded-6xl overflow-hidden green-shadow">
                              <img src={product.image} alt={`image-${index}`} className="w-full" />
                           </div>
                           <div className="text-center my-14">
                              <span className="text-center">
                                 <Link to={product.path} aria-label={'See all products ' + index} title="Link to view all products" className="px-10 py-5 rounded-4xl font-poppins font-semibold text-white uppercase bg-primaryBlue hover:bg-primaryGreen transition-all">See all products</Link>
                              </span>
                           </div>
                           <div className="mt-10 text-center">
                              <a href="mailto:info@metricproducts.com" aria-label="Contact metric company by sending a email" title="Contact us email on cups and underware products page" className="uppercase font-poppins font-semibold text-white bg-primaryGreen hover:bg-primaryBlue transition-all rounded-3xl px-5 py-2" accessKey="cupAndUnderwareContact">contact us</a>
                           </div>
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
         <BottomBar />
      </>
   );
}

export default CupsAndUnderwareHome;