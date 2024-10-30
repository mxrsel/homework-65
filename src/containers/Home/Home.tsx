import React, {useEffect, useState} from "react";
import {pagesInfo} from "../../types.ts";
import './Home.css';
import Spinner from "../../components/Spinner/Spinner.tsx";
import fetchPagesData from "../../components/FetchingPages/FetchingPages.tsx";

const Home: React.FC = () => {
const [homeData, setHomeData] = useState<pagesInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(false)



    useEffect(() => {
        const getHomeData = async () => {
            setLoading(true)
            const data = await fetchPagesData('home');
            setHomeData(data);
            setLoading(false)
        }

        void getHomeData();
    }, []);

    return (

        <div className='mainBody'>
            {loading ?
                <Spinner />
                :
                <>
                {homeData ? (
                        <>
                            <h1>{homeData.title}</h1>
                            <p>{homeData?.content}</p>
                        </>
                    ) : (
                        <p>Not found</p>
                    )}
                </>
            }

        </div>
    );
};

export default Home;