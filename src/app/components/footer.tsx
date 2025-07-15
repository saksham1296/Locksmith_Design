import Image from "next/image";
import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaYoutube,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="w-full bg-[#26344E] text-white px-4 sm:px-6 lg:px-[80px] py-10 flex flex-col items-center">
			<div className="w-full max-w-screen-xl flex flex-col md:flex-row justify-between items-center gap-6">
				<div className="flex items-center gap-2">
					<Image
						src="/logo.png"
						alt="Logo"
						width={35}
						height={48}
						className="object-contain"
					/>
					<span className="text-lg sm:text-xl font-roboto">LOCKSMITH HUB</span>
				</div>

				<div className="flex w-full md:w-auto bg-white rounded-md overflow-hidden">
					<Image
						src="/image/image 6.png"
						alt="Email Icon"
						width={20}
						height={20}
						className="ml-3 my-auto object-contain"
					/>
					<input
						type="email"
						placeholder="Enter your email for updates"
						className="flex-1 px-3 py-2 text-sm text-gray-800 outline-none"
					/>
					<button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium whitespace-nowrap">
						Submit
					</button>
				</div>
			</div>

			<hr className="w-full max-w-screen-xl border-t border-gray-300 my-6" />

			<div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-sm sm:text-base">
				<div className="flex flex-col gap-3">
					<p>About Us</p>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
					<p>Invest in Locksmith Hub</p>
				</div>

				<div className="flex flex-col gap-3">
					<h3 className="font-bold">CONTACT US</h3>
					<div className="flex gap-2 items-start">
						<FaPhoneAlt className="mt-1" />
						<span>+1 (406) 555-0120</span>
					</div>
					<div className="flex gap-2 items-start">
						<FaEnvelope className="mt-1" />
						<span>support@locksmithhub.net</span>
					</div>
					<div className="flex gap-2 items-start">
						<FaMapMarkerAlt className="mt-1" />
						<span>
							Allamano Business Hub, 5th Floor, <br />
							Suite 5A, Highway, Austin, Texas, USA
						</span>
					</div>
				</div>

				<div className="flex flex-col items-start gap-3">
					<h3 className="font-bold">OUR SOCIAL MEDIA</h3>
					<p>Join Us</p>
					<div className="flex gap-4 text-xl">
						<FaYoutube />
						<FaFacebookF />
						<FaTwitter />
						<FaInstagram />
						<FaLinkedinIn />
					</div>
				</div>
			</div>

			<hr className="w-full max-w-screen-xl border-t border-gray-300 my-6" />

			<div className="w-full max-w-screen-xl flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm gap-4">
				<p className="text-center md:text-left">
					© 2025 Locksmith Hub, Inc. - All Rights Reserved
				</p>
				<div className="flex flex-wrap justify-center md:justify-end gap-4">
					<span>Home</span>
					<span>How it Works</span>
					<span>FAQs</span>
					<span>Blog</span>
					<span>Careers</span>
				</div>
			</div>
		</footer>
	);
}
