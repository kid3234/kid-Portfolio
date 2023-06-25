import React from "react"
export default function Profile() {
    return (
        <div id="about" className="flex flex-col items-center bg-gray-700">
            <img className="w-60 h-80 rounded-full mb-4 pt-10" src="../public/kid.jpg" alt="Kidsu Birhane" />
            <h3 className="text-xl font-bold">Kidsu Birhane</h3>
            <p className="text-gray-200 mt-2 text-center w-80 text-justify pb-10">
                I am a MERN stack developer. I have built some projects that are listed below and have experience using GitHub and working on projects in groups. I also have good communication skills.
            </p>
        </div>

    )
}