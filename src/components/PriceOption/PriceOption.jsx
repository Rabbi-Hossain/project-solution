

import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option
    return (
        <div className="bg-blue-600  p-6 text-white rounded-xl flex flex-col">
            <h2 className='text-3xl font-bold'>{price}</h2>
            <h4 className='text-3xl mt-5'>{name}</h4>

            <div className='mt-12 ml-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='bg-green-500 w-full mt-5 rounded-lg py-2 hover:bg-green-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;