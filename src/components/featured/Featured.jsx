// import { InfoOutlined, PlayArrow } from "@material-ui/icons";
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
      <img
        src="https://images2.alphacoders.com/995/995185.png"
        alt=""
      />
      <div className="info">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="buttons">
          <button className="play">
            {/* <PlayArrow /> */}
            <span>Play</span>
          </button>
          <button className="more">
            {/* <InfoOutlined /> */}
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}