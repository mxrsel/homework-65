import {useEffect, useState} from "react";
import {pagesInfo} from "../../types.ts";
import './Projects.css';
import Spinner from "../../components/Spinner/Spinner.tsx";
import fetchPagesData from "../../components/FetchingPages/FetchingPages.tsx";

const Projects = () => {
    const [projectsData, setProjectsData] = useState<pagesInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(false)



    useEffect(() => {
        const getHomeData = async () => {
            setLoading(true)
            const data = await fetchPagesData('projects');
            setProjectsData(data);
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
                    {projectsData ? (
                        <>
                            <h1>{projectsData.title}</h1>
                            <p>{projectsData?.content}</p>
                        </>
                    ) : (
                        <p>Not found</p>
                    )}
                </>
            }

        </div>
    );
};

export default Projects;