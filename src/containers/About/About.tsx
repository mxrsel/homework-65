import {useEffect, useState} from 'react';
import {pagesInfo} from "../../types.ts";
import axiosApi from "../../axiosApi.ts";
import Spinner from "../../components/Spinner/Spinner.tsx";
import './About.css';

const About = () => {
    const [aboutData, setAboutData] = useState<pagesInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchAboutPageData = async () => {
        try {
            setLoading(true)
            const response = await axiosApi.get('pages/about.json');
            setAboutData(response.data);
            return response.data;
        } catch (e) {
            console.error('Error fetching pages', e);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const getAboutPageData = async () => {
            const dataAboutPage = await fetchAboutPageData();
            setAboutData(dataAboutPage);
        }
        void getAboutPageData()
    }, []);



    return (
        <div className='mainBody'>
            {loading ?
            <Spinner />
            :
                <>
                    {aboutData ? (
                        <>
                            <h1>
                                {aboutData.title}
                            </h1>
                            <p>
                                {aboutData.content}
                            </p>
                        </>
                    ) : (
                        <>
                            <p>Not found</p>
                        </>
                    )}
                </>
            }
        </div>
    );
};

export default About;