
// saveToWatchList is passed to FaveMovieAdder from parent component
export default function FaveMovieAdder({saveToWatchList}) {

    function handleSubmit(formData) {
        const movie = formData.get('new-movie');
        console.log(movie,'<--- movie');

        saveToWatchList(movie);
        // call to saveToWatchList defined in the parent component will trigger an update to state at the parent level
    }
    return <form action={handleSubmit}>
        <input style={{color: 'black'}}  name="new-movie" type="text"></input>
        <button type="submit">Add to watch list</button>
    </form>
}