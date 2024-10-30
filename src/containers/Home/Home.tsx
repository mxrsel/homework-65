import React, {useCallback, useEffect, useState} from "react";
import {pagesInfo} from "../../types.ts";
import './Home.css';
import axiosApi from "../../axiosApi.ts";
import {Link, useParams} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner.tsx";

const Home: React.FC = () => {
    const {pagesId} = useParams();
    const [pages, setPages] = useState<pagesInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(false)

    const fetchData = async (page: string) => {
        const response = await axiosApi.get(`/pages/${page}.json`);
        return response.data;
    }

    const fetchPages = useCallback(async () => {
       setLoading(true)
        try {
            if (pagesId !== undefined) {
                const data = await fetchData(pagesId)
                setPages(data)
            }
        }catch (e) {
           console.error('Error fetching pages', e)
        } finally {
            setLoading(false)
        }
    }, [pagesId])



    useEffect(() => {
        void fetchPages()
    }, [fetchPages])

    return (
        <>
        {loading ? <Spinner />
         :
            <>
                <div className='mainBody'>
                    {pages ? (
                        <>
                            <h1>{pages.title}</h1>
                            <p>{pages.content}</p>
                            <Link className='bodyEditBtn mt-1' to={`/pages/edit-pages/${pagesId}`}>Edit</Link>

                        </>
                    ) : (
                        <p>Not found</p>
                    )}
                </div>
            </>
        }
        </>
    );
};

export default Home;