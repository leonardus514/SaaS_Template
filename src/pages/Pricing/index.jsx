import { Prices } from "../../components/Prices.tsx";
import { StripeWrapper } from "../../components/PaymentForm";

const Pricing = () => {
    return (
        <>
            <Prices />
            <StripeWrapper />
        </>
    )
}

export default Pricing;