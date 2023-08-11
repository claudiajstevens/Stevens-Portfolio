function Contact(){
    return(
        <section className="connect mx-8 my-8 w-11/12 rounded-r-full">
            <div className="connect py-8 px-4 mx-auto lg:py-16 max-w-screen-md">
                <h1 className="mb-4 text-center">Connect With Me</h1>
                <form className="space-y-6">
                    <div>
                        <input type="email" placeholder="Email Address" className="input-bx shadow-sm text-sm rounded-lg w-4/5 p-2.5 " required/>
                    </div>
                    <div>
                        <input type="text" placeholder="Subject"className="input-bx shadow-sm text-sm focus:border-primary-500 w-4/5 p-2.5 rounded-lg"/>
                    </div>
                    <div>
                        <textarea row="10" placeholder="Message" className="input-bx shadow-sm text-sm focus:border-primary-500 w-4/5 p-2.5 rounded-lg"></textarea>
                    </div>
                    <button type="submit" className="submit-button py-3 px-5 text-sm font-medium text-center rounded-lg hover:bg-[#BCB4FF]">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;

//bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus-outline-none focus:ring-primary-300

//focus:outline-none focus:ring focus:ring-[#E2F08F]


//input-bx shadow-sm text-sm border focus:border-[#E2F08F] focus:ring focus:ring-[#BCB4FF] w-4/5 p-2.5 rounded-lg

