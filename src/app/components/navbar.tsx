import Image from "next/image";
export default function Navbar() {
	return (
		<nav className="w-full h-[74px] bg-[#26344E] flex flex-wrap items-center justify-between overflow-x-hidden">
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
			<div className="bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] text-[#FFFFFF] text-[16px] font-roboto mx-[20px] my-[4px]  px-[20px] py-[4px] rounded-[4px]">
				Launching Soon
			</div>
		</nav>
	);
}
