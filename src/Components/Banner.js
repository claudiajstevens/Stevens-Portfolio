function Banner() {
    return(
        <div>
            <div className="banner-info banner rounded-t-full my-8 h-80 mx-8 w-11/12">
                <div className="hello font-bold">
                    <p>Hi,</p>
                    <p>I'm Claudia,</p>
                    <p>Software Engineer</p>
                </div>          
            </div>
            <div className="contact-info rounded-full my-8 mx-8 w-11/12">
                <p>claudiajstevens@gmail.com</p>
                <p>916-494-8202</p>
                <a href="https://github.com/claudiajstevens" target="_blank" className="hover:text-[#FFB985] hover:font-bold">GitHub</a>
                <p>Resume</p> 
            </div>


      </div>
    )
}

export default Banner;