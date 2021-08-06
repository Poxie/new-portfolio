import { Footer } from './Footer';
import './Home.scss';
import { HomeHeader } from './HomeHeader';
import { HomeTree } from './HomeTree';
import { Technologies } from './Technologies';

export const Home = () => {
    return(
        <div className="home">
            <HomeHeader />
            <HomeTree />
            <Technologies />
            <Footer />
        </div>
    )
}