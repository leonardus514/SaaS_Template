import { Features } from "../../components/Features.tsx";
import { Dashboard } from "../../components/Dashboard.tsx";
import { LandingPage } from "../../components/LandingPage.tsx";
import { useSelector } from 'react-redux';

const Home = () => {
    const isLogin = useSelector((state) => state.user.isLogin)

    return (
        <>
            {isLogin ? (<Dashboard/>) : (<LandingPage/>)}
            <Features />
        </>
    )
}

export default Home;