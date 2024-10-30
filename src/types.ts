export interface PagesProps {
    id: string;
    title: string
}

export interface pagesInfo{
    title: string;
    content: string;
}

export interface Page extends pagesInfo {
    id: string
}

