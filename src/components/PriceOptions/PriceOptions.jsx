import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const PriceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to cardio equipment",
                "Access to weight training area",
                "Locker usage",
                "Fitness assessment",
                "Discounts on gym merchandise"
            ],
            "price": "$29.99/month"
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to all equipment including premium machines",
                "Access to group fitness classes",
                "Towel service",
                "Personal training session (1/month)",
                "Nutritional counseling",
                "Sauna and steam room access"
            ],
            "price": "$49.99/month"
        },
        {
            "id": 3,
            "name": "VIP Membership",
            "features": [
                "Priority access to all facilities",
                "Unlimited personal training sessions",
                "Access to exclusive VIP lounge",
                "Complimentary smoothies/snacks",
                "Massage therapy sessions (2/month)",
                "Free guest passes (2/month)"
            ],
            "price": "$99.99/month"
        }
    ]



    return (
        <div>
            <h2>Price option is best website very fast and inter active</h2>

            <div className="grid md:grid-cols-3 text-center gap-6 m-12">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;