import icon from "./imageicon.png"
import {useState,useEffect} from "react"


//https://api.imgflip.com/get_memes

export default function Section(){
    const [setState,getState] = useState({
        toptext : "",
        bottomtext : "",
        randomImage: "https:\/\/i.imgflip.com\/1ur9b0.jpg"
    })

    const [setImg,getImg] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => getImg(data.data.memes))
    }, [])
    


    function getImage() {
        const randomImg = Math.floor(Math.random() * setImg.length)
        const url = setImg[randomImg].url
        getState(prevImg => ({
            ...prevImg,
            randomImage: url
        }))
    }
   
    function change(e) {
        e.preventDefault()
        const { name, value } = e.target
        getState(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    return (
        <div>
            <div class="inputsection">
                <input 
                className="input1"
                type="text"
                name="toptext"
                placeholder="Top text"
                onChange={change}
                value={setState.toptext}
                />

                <input
                type="text"
                name="bottomtext"
                placeholder="Bottom text"
                onChange={change}
                value={setState.bottomtext}
                />
            </div>

           <div class="btn">
            <button onClick={getImage}>Get Image <img src={icon} width="15px" />
            </button>
           </div>

           <div className="imgsection">
            <img src={setState.randomImage} width="450px"/>
           <div className="toptext">
                <h4>{setState.toptext}</h4>
           </div>
            <div className="bottomtext">
                <h4>{setState.bottomtext}</h4>
            </div>
           </div>
        </div>
    )
    }
