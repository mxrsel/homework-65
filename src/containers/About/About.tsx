import React, {useEffect, useState} from 'react';
import {pagesInfo} from "../../types.ts";
import Spinner from "../../components/Spinner/Spinner.tsx";
import './About.css';
import fetchPagesData from "../../components/FetchingPages/FetchingPages.tsx";

const About: React.FC = () => {
    const [aboutData, setAboutData] = useState<pagesInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const getAboutPageData = async () => {
            setLoading(true)
            const dataAboutPage = await fetchPagesData('about');
            setAboutData(dataAboutPage);
            setLoading(false)
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