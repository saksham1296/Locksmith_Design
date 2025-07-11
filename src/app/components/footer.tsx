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
		<footer className="w-full h-[464px] px-[80px] py-[48px] bg-[#26344E] flex flex-col items-center justify-center">
			<div className="flex flex-row items-center justify-between w-[1200px] h-[46px] gap-[48px]">
				<div className="flex items-center justify-start gap-[5px] px-[20px] h-full">
					<Image
						src="/logo.png"
						alt="Logo"
						className="w-[35px] h-[48px] mb-[5px] object-contain"
						width={28}
						height={32}
						priority={true}
					/>
					<div className="nav-title font-roboto text-[#FFFFFF] text-[20px]">
						LOCKSMITH HUB
					</div>
				</div>
				<div className="flex items-center bg-white rounded-md overflow-hidden w-[455px] h-[46px]">
					<Image
						src="/image/image 6.png"
						alt="Email Icon"
						className="w-[19.5px] h-[19.5px] object-contain ml-2"
						width={19.5}
						height={19.5}
					/>
					<input
						type="email"
						placeholder="Enter your email for updates"
						className="flex-1 px-2 py-2 outline-none text-sm text-gray-800 placeholder-gray-400"
					/>
					<button className="bg-blue-600 text-white w-[110px] h-[46px] ">
						Submit
					</button>
				</div>
			</div>
			<div className="w-[1200px] h-[1px] bg-[#C1C7CD] mt-4"></div>
			<div className="max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-[140px] text-[16px] text-[#FFFFFF] mt-8 justify-start">
				<div className="flex flex-col gap-3">
					<p>About Us</p>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
					<p>Invest in Locksmith Hub</p>
				</div>

				<div className="flex flex-col gap-3 items-start mx-auto">
					<h3 className="text-center font-bold mb-2">CONTACT US</h3>
					<div className="flex items-start gap-2">
						<FaPhoneAlt className="mt-1" />
						<span>+1 (406) 555-0120</span>
					</div>
					<div className="flex items-start gap-2">
						<FaEnvelope className="mt-1" />
						<span>support@locksmithhub.net</span>
					</div>
					<div className="flex items-start gap-2">
						<FaMapMarkerAlt className="mt-1" />
						<span>
							Allamano Business Hub, 5th Floor, <br />
							Suite 5A, Highway, Austin, Texas, USA
						</span>
					</div>
				</div>

				<div className="flex flex-col items-center gap-3">
					<h3 className="font-bold mb-2">OUR SOCIAL MEDIA</h3>
					<p>Join Us</p>
					<div className="flex gap-4 text-lg">
						<FaYoutube />
						<FaFacebookF />
						<FaTwitter />
						<FaInstagram />
						<FaLinkedinIn />
					</div>
				</div>
			</div>
			<div className="w-[1200px] h-[1px] bg-[#C1C7CD] mt-4"></div>
			<div className="w-[1200px] h-[48px] flex flex-row items-center justify-between mt-4 text-[#FFFFFF] text-[16px]">
				<div className="h-[20px] text-[14px] leading-[20px] font-medium">
					{" "}
					© 2025 Locksmith Hub, Inc. - All Rights Reserved
				</div>
				<div className="flex flex-row items-center justify-evenly gap-[20px]">
					<div>Home</div>
					<div>How it Works</div>
					<div>FAQs</div>
					<div>Blog</div>
					<div>Careers</div>
				</div>
			</div>
		</footer>
	);
}
