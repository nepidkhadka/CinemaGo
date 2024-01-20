import React, {useEffect, useState} from "react"
import "./Movie.css"
import { useParams } from "react-router-dom"
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../../Services/firebase"
import { UserAuth } from "../../Context/AuthContext"

const Movie = () => {
    // Use State for Current Fetch Movie, ID, Current Logged In User Data From FireStore
    const [currentMovieDetail, setCurrentMovieDetail] = useState([])
    const { id } = useParams()
    const [favourite, setfavourite] = useState(false);
    const [userdata, setuserdata] = useState([]);
    const {user} = UserAuth()

    // Fetching Movie Data From ID
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setCurrentMovieDetail(data))
        .catch(err=>alert(err))
    }

    // Add to Favourite Function
    const addFavourite = async () =>{
        const userEmail = user?.email
        if(userEmail){
            const userDocs = doc(db, "users", userEmail)
            setfavourite(!favourite);

            await updateDoc(userDocs,{
                favourite : arrayUnion({...currentMovieDetail})
            })
        }
        else{
            alert("Please Login To Add Favourite Movies")
        }
    }
    
    // Remove to Favourite Function
    const removeFavourite = async (id) =>{
        
        const updateduserdata = userdata.filter((movie)=>movie.id != id) 
        setuserdata(updateduserdata);

        const userEmail = user?.email

        if(userEmail){
            const userDocs = doc(db, "users", userEmail)
            setfavourite(!favourite);

            await updateDoc(userDocs,{
                favourite : updateduserdata,
            })
        }
        else{
            alert("Please Login To Remove Favourite Movies")
        }
    }

    // UseEffect For Fetching Movie Data
    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [id])

    // Use Effect For Fetching Currrent Logged In User Data
    useEffect(() => {
        if (user) {
          onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
            if (doc.data()) setuserdata(doc.data().favourite);
          });
        }
      }, [user?.email]);


    //   PreLoader
    if(currentMovieDetail =="")
    return(
        <div className="preloader">
            <div className="loader"></div>
        </div>
    )

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}favourite</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i className="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <span key={genre.id} className="movie__genre" id={genre.id}>{genre.name}</span>
                                )) 
                                : 
                                ""
                            }
                        </div>
                        <div className="fav">
                            {!userdata.find(user=>user.id==id) && (<button onClick={addFavourite} id="favbtn" >Add Favourite</button>)}
                            {userdata.find(user=>user.id==id) && (<button onClick={()=>removeFavourite(id)} id="favbtn" >Remove Favourite</button>)}
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                {/* <div className="movie__heading">Useful Links</div> */}
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company =>(
                       
                       <> 
                            { company.logo_path  && 
                                <span key={company.name} className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{ company.name && company.name}</span>
                                </span>
                            }
                        </>
                       )
                    )
                }
            </div>
        </div>
    )
}

export default Movie