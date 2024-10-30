import React, {useEffect, useState} from "react";
import {pagesInfo} from "../../types.ts";
import axiosApi from "../../axiosApi.ts";
import './Home.css';
import Spinner from "../../components/Spinner/Spinner.tsx";


const Home: React.FC = () => {
const [homeData, setHomeData] = useState<pagesInfo | null>(null);
const [loading, setLoading] = useState<boolean>(false);

    const fetchPages = async () => {
        try {
            setLoading(true)
            const response = await axiosApi.get('pages/home.json');
            setHomeData(response.data);
            return response.data;
        } catch (e) {
            console.error('Error fetching pages', e);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const getHomeData = async () => {
            const data = await fetchPages();
            setHomeData(data);
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