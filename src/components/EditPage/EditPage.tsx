import {PAGES} from "../../pages.ts";
import './EditPage.css'
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {pagesInfo} from "../../types.ts";
import axiosApi from "../../axiosApi.ts";

const EditPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [page, setPage] = useState<pagesInfo>({
        title: '',
        content: '',
    });

    useEffect(() => {
        const fetchPage = async () => {
            const response = await axiosApi.get<pagesInfo>(`/pages/${id}.json`);
            if(response.data) {
                setPage(response.data)
            }
        };
        void fetchPage()
    }, [id]);

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement| HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setPage((prevState) => ({...prevState, [name]: value}));
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        await axiosApi.put(`/pages/${id}.json`, page)
        navigate(`/pages/${id}`);
    }

    return (
        <div className='container-fluid mt-4'>
        <form onSubmit={handleSubmit}>
            <div className='form-group mb-3'>
                <label htmlFor='page'>Select Page</label>
                <select
                    name='page'
                    className='form-select'
                    value={page.title}
                    onChange={handleChange}>
                    <option>Choose a page</option>
                    {PAGES.map((page) => (
                        <option key={page.id} value={page.id}>
                            {page.title}
                        </option>
                    ))}
                </select>
            </div>

            <div className='form-group mb-3'>
                <label htmlFor='title'>Title</label>
                <input
                    type='text'
                    name='title'
                    value={page.title}
                    onChange={handleChange}
                    className='form-control'
                    required
                />
            </div>

            <div className='form-group'>
                <label htmlFor='content'>Content</label>
                <textarea
                    name='content'
                    value={page.content}
                    onChange={handleChange}
                    className='form-control'
                    required
                />
            </div>

            <button type='submit' className='editBtn'>Save</button>
        </form>
    </div>

);
};

export default EditPage;