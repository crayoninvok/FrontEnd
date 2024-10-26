function Contact() {
    return (
        <div className="flex flex-col">
            {/* Top Row with 3 Columns */}
            <div className="flex justify-center">
                <div className="w-[100%] h-[60vh] bg-fuchsia-500 flex justify-center">
                    <span className="text-white mt-[7vh] font-semibold text-[43px] font-open-sans">Get In Touch w/ me</span>
                </div>
            </div>

            {/* Bottom Row with 1 Column */}
            <div className="flex justify-center">
                <div className="w-[100%] h-[40vh] bg-fuchsia-800 flex justify-center items-center">
                    <span className="text-white">Single Column Below</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;