import { BottomBar } from '../';
import { productCards } from '../../constants';

function renderCardName(param) {
   switch (param) {
      case 'push-up cups':
         return <span>push-up<br />cups</span>;
      case 'strapless cups':
         return <span>strapless<br />cups</span>;
      case 'bando shapes cups':
         return <span>bando shapes<br />cups</span>;
      default:
         return <span>triangular<br />cups</span>;
   }
}

const ComfortFitPets = () => {
   return (
      <>
         <div className="custom-container mx-auto pt-20">
            <h1 className="text-4xl font-poppins font-bold capitalize text-primaryGreen">cups and underwires for<br />intimate apparel</h1>
            <div className="w-full my-4 border border-t-primaryBlue"></div>
            <h1 className="text-5xl font-poppins font-bold uppercase text-center text-primaryBlue mt-14">bra underwires</h1>
            <div className="flex flex-row justify-center space-x-10">
               {
                  productCards[2].categories[1].types.map((type, index) => (
                     <div key={index}>
                        <div className="mt-10">
                           <h1 className="text-3xl font-poppins font-semibold uppercase text-center text-primaryGreen mb-10">
                              {productCards[2].categories[1].title === 'bra underwires' ? type.title : renderCardName(type.title)}
                           </h1>
                           {
                              type.images.map((img, imgIndex) => (
                                 <div key={imgIndex} className="w-full mx-auto rounded-tr-4xl rounded-bl-4xl overflow-hidden mb-10">
                                    <img src={img} alt={`image-${imgIndex}`} className="w-full" />
                                 </div>
                              ))
                           }
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

export default ComfortFitPets;