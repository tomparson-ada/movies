export default function WatchList() {

    let [watchlist,setWatchlist] = useState(() => {
        return localStorage.getItem('watchlist') ?? [
            'The Dark Knight',
            'Barbie',
            'Toy Story 3'
        ]
    })

    useEffect((watchlist) => {
        localStorage.setItem('watchlist', watchlist)
    },[watchlist])

    return (
        <>
        {watchlist}
        </>
    )
}