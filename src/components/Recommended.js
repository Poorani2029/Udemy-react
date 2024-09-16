
import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"

function Recommended() {
    return (

        <>
            <div class="recommended">
                <h1 class="recommended__title">Recommended for you</h1>
                <p>Pick the best fit</p>
                <div class="recommended__container">
                    <div class="course-card">
                        <img src={c1}></img>
                        <h3>2024 Python Data Visaulisation Masterclass</h3>
                        <p>Col Steele</p>
                        <p>3.9⭐⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>

                    </div>
                    <div class="course-card">
                        <img src={c2}></img>
                        <h3>Web Development Bootcamp 2024</h3>
                        <p>Col Steele</p>
                        <p>4.9⭐⭐⭐⭐⭐</p>
                        <p>899 <del>5000</del></p>

                    </div>
                    <div class="course-card">
                        <img src={c3}></img>
                        <h3>Master UI/UX Designing</h3>
                        <p>Col Steele</p>
                        <p>3.9⭐⭐⭐⭐</p>
                        <p>999 <del>3999</del></p>

                    </div>
                    <div class="course-card">
                        <img src={c4}></img>
                        <h3>Basic to Advance Programming</h3>
                        <p>Col Steele</p>
                        <p>4.9⭐⭐⭐⭐⭐</p>
                        <p>1999 <del>5999</del> </p>

                    </div>
                </div>
            </div>
        </>
    )
} 

export default Recommended