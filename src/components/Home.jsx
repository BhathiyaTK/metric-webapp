import { Link } from 'react-router-dom';
import { productCards } from '../constants';

const Home = () => {
    return (
        <div role="presentation" className="custom-container m-auto h-full">
            <h1 title='Main page' className="invisible">Metric main page</h1>
            <div role="main" className="block md:flex md:flex-row items-start justify-center md:space-x-16 absolute top-56 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4/5">
                {productCards.map((card, index) => (
                    <div role="presentation" className="w-full md:w-1/3 text-center mb-16 md:mb-0" key={index}>
                        <div role="presentation" className="flex flex-row space-x-7 items-center">
                            <div role="img" aria-label='Image-one' className="w-1/2 rounded-4xl overflow-hidden green-shadow">
                                <img src={card.imageOne} alt="image-one" />
                            </div>
                            <div role="img" aria-label='Image-two' className="w-1/2 rounded-4xl overflow-hidden green-shadow">
                                <img src={card.imageTwo} alt="image-two" />
                            </div>
                        </div>
                        <div role="contentinfo" aria-label='Three main product categories of metric' className="bg-primaryGreen px-2 py-3 rounded-3xl mt-10 md:mt-20">
                            <Link to={'products/' + card.path} aria-label={card.name} role="link">
                                <div className="uppercase text-linkBlack hover:text-primaryBlue transition-all font-poppins font-semibold text-2xl md:text-3xl lg:text-4xl mb-2">
                                    {card.name}
                                </div>
                            </Link>
                            <div className="uppercase font-poppins font-medium text-2xl text-linkBlack">{card.subName}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;