import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://images2.alphacoders.com/995/995185.png" alt="" />
      <div className="info">
        {/* <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6YgOkIkVrg5doy86KG1Uxml3vvi8CsGjNg&usqp=CAU'
          alt=""
        /> */}
        <span className="desc">
        A gambling prodigy comes to an elite school run by games and turns the order upside down. Hyakkaou Private Academy. An institution for the privileged with a very peculiar curriculum.
        </span>
        <div className="buttons">
          <button className="play">
            {/* <PlayArrow /> */}
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon/>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
