import axiosApi from "../../axiosApi.ts";

const fetchPagesData = async (page: string) => {
    try {
        const response = await axiosApi.get(`/pages/${page}.json`);
        return response.data
    }catch (e) {
        console.error('Error fetching pages', e);
    }
}

export default fetchPagesData