import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="w-full h-[70px] sm:h-[80px] px-4 sm:px-6 md:px-12 lg:px-[80px] py-4 bg-[#26344E] flex flex-row items-center justify-between">
			<div className="flex items-center gap-2 sm:gap-[5px]">
				<Image
					src="/logo.png"
					alt="Logo"
					className="object-contain"
					width={35}
					height={48}
					priority
				/>
				<span className="text-white text-lg sm:text-xl font-roboto">
					LOCKSMITH HUB
				</span>
			</div>
			<div className="bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] text-white text-sm sm:text-base font-roboto px-4 py-1.5 sm:px-5 sm:py-2 rounded-md whitespace-nowrap">
				Launching Soon
			</div>
		</nav>
	);
}
