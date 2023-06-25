import React from "react";
export default function Contact() {
    return (
        <div className="bg-slate-800">
            <form className="flex justify-center" onSubmit={(e) => {
                e.preventDefault();
                const email = e.target[1].value;
                const subject = e.target[1].value;
                const body = e.target[2].value;
                window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }}>
                <input type="email" placeholder="Enter your email" className="p-2 w-80 m-4 bg-gray-200 rounded" />
                <input type="email" value="kidusbirhane9@gmail.com" className="p-2 w-80 m-4 bg-gray-200 rounded" />
                <input type="text" placeholder="Your text to send" className="p-2 w-80 m-4 bg-gray-200 rounded" />
                <input type="submit" value="Send" className="p-2 m-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded" />
            </form>

            <div id="contact" className="flex justify-around bg-slate-800">
                <a className="w-16 py-10" href="https://t.me/kid12bi">
                    <img src="telegram.png" alt="Telegram" />
                </a>
                <a className="w-16 py-10" href="">
                    <img src="instagram.png" alt="Instagram" />
                </a>
                <a className="w-16 py-10" href="https://github.com/kid3234">
                    <img src="github.png" alt="Github" />
                </a>
                <a className="w-16 py-10" href="">
                    <img src="linkedin.png" alt="Linkedin" />
                </a>
            </div>
        </div>
    )
}