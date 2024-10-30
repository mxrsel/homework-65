import React, {useEffect, useState} from "react";
import {Page} from "../../types.ts";
import './Home.css';
import Spinner from "../../components/Spinner/Spinner.tsx";
import axiosApi from "../../axiosApi.ts";
import {useParams} from "react-router-dom";

const Home: React.FC = () => {
    const {pagesId} = useParams();
const [homeData, setHomeData] = useState<Page[]>([]);
    const [loading, setLoading] = useState<boolean>(false)

    const fetchPagesData = async (page: string) => {
        try {
            const response = await axiosApi.get(`/pages/${page}.json`);
            return response.data
        }catch (e) {
            console.error('Error fetching pages', e);
        }
    }


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
                            <p>{homeData.content}</p>
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