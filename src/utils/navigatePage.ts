import SetPage_t from '../type/setpage'

const clamp = (value: number, min: number, max: number) => (
    Math.min(max, Math.max(min, value))
);

const navigatePage = (
    newDirection: number,
    currentPage: number,
    setPage: SetPage_t,
    maxPage = 3
) => {
    setPage([clamp(currentPage + newDirection, 0, maxPage), newDirection]);
};

export default navigatePage;
