import memeimg from "./meme-header.png"
export default function Header() {
    return (
        <div>
            <nav>
                <img src={memeimg} width="70px" />
                <h2>Meme Generator</h2>
            </nav>
        </div>

    )
}