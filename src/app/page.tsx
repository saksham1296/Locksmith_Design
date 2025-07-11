import Image from "next/image";
import Navbar from "./components/navbar";
import "./globals.css";
import Footer from "./components/footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="flex flex-row w-full h-[436px] mt-[116px] px-6 md:px-16 lg:px-32 items-center justify-between overflow-x-hidden">
				<div className="flex flex-col items-start justify-between gap-4 px-10">
					<div className="text-[25px] font-bold font-roboto bg-gradient-to-r from-[#26344E] to-[#0E53D3] bg-clip-text text-transparent w-fit tracking-[-0.02em]">
						Need a Locksmith? Get Help in Minutes – 24/7, Fast & Reliable!
					</div>
					<div className="w-[632px] h-[82px] font-outfit text-[32px] text-[#212121] tracking-[-0.02em]">
						Emergency Lockouts, Installations & Security Upgrades – 24/7
						Availability!
					</div>
					<div className="w-[642px] h-[175px] font-roboto text-[25px] leading-[1.41] font-normal text-gray-500 tracking-[-0.02em]">
						<span className="text-black">
							Fast, Reliable, and Secure Locksmith Services at Your Fingertips!
						</span>
						<span> </span>
						Forget the hassle of searching and waiting – with our easy-to-use
						platform, you can quickly find trusted professionals who are
						<span className="text-black"> available 24/7</span> to assist you.
						Secure your home, car, or office with just a few clicks.
					</div>
					<div className="flex flex-row items-center justify-between gap-12 mt-4">
						<button className="w-[310px] h-[75px] bg-gradient-to-r from-[#26344E] to-[#0E53D3] text-white text-[20px] font-roboto rounded-[4px] px-6 py-3">
							Book A Locksmith Now
						</button>
						<button className="w-[310px] h-[75px] bg-gradient-to-r  from-[#7BB642] to-[#3B7800] text-white text-[20px] font-roboto rounded-[4px] px-6 py-3">
							Get a Locksmith in Minutes!
						</button>
					</div>
				</div>
				<div>
					<Image
						src="/heroImage.jpg"
						alt="Hero Image"
						className="object-cover"
						width={449}
						height={422}
					/>
				</div>
			</div>

			<div className="w-[369px] h-[55px] font-roboto text-[32px] font-400 text-[#010205] leading-[1.3] tracking-[-0.03em] mx-auto mt-20 text-center">
				Who We Serve
			</div>

			<div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-32 mt-8 px-6 md:px-16 lg:px-32">
				<div className="flex flex-col items-center justify-center">
					<Image
						src="/images/hero1.png"
						alt="Who We Serve"
						className="w-[504.5px] h-[362px] object-cover mx-auto mt-4 rounded-[20px]"
						width={504.5}
						height={362}
					/>
					<div className="text-center text-[20px] font-roboto text-[#010205] mt-4">
						For People in Need of Help
					</div>
					<div className="w-[504.5px] h-[152px] text-slate-500 text-[16px] font-roboto  mt-2">
						Locked out? Need a locksmith fast? Get trusted professionals
						available 24/7 – fast, secure, and hassle-free!
					</div>
				</div>
				<div>
					<Image
						src="/img 2.png"
						alt="Locksmiths"
						className="w-[504.5px] h-[362px] object-cover mx-auto mt-4 rounded-[20px]"
						width={504.5}
						height={362}
					/>
					<div className="text-center text-[20px] font-roboto text-[#010205] mt-4">
						For Professionals
					</div>
					<div className="w-[504.5px] h-[152px] text-slate-500 text-[16px] font-roboto mt-2">
						Get more locksmith jobs with LocksmithHub! Verified professionals
						get instant job requests and secure payments.
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center mt-10 w-[1276px] h-[999px] mx-auto ">
				<div className="w-[369px] h-[55px] font-roboto text-[32px] font-400 text-[#010205] leading-[1.3] tracking-[-0.03em] mx-auto mt-10 text-center">
					What Makes Us Unique?
				</div>
				<div className="flex flex-row w-[1108px] h-[846px] gap-[70px] mt-10">
					<div className="w-[402px] h-[846px]">
						<Image
							src="/img3.png"
							alt=""
							width={402}
							height={720}
							className="w-[402px] h-[720px] object-cover rounded-[20px]"
						/>
					</div>
					<div className="w-[0px] h-[846px] border-l-4 border-gray-700"></div>

					<div className="w-[590px] h-[846px] flex flex-col justify-between">
						<div className="flex flex-row w-[590px] h-[106px] gap-4">
							<Image
								src="/Frame.png"
								alt=""
								width={106}
								height={106}
								className="w-[106px] h-[106px] object-cover rounded-[20px] gap-[12px] p-[30px] bg-gradient-to-r from-[#60A5FA] to-[#0b35a7]"
							/>
							<div className="flex flex-col items-start justify-between w-[452px] h-[96px] gap-[12px]">
								<div className="text-[20px] font-roboto text-black">
									Instant Booking
								</div>
								<div className="text-slate-500 text-[20px] font-roboto">
									Find a trusted locksmith near you in seconds – no waiting!
								</div>
							</div>
						</div>
						<div className="flex flex-row w-[590px] h-[106px] gap-4">
							<Image
								src="/img4.png"
								alt=""
								width={106}
								height={106}
								className="w-[106px] h-[106px] object-cover rounded-[20px] gap-[12px]  p-[30px] bg-gradient-to-r from-[#60A5FA] to-[#0b35a7]"
							/>
							<div className="flex flex-col items-start justify-between w-[452px] h-[96px] gap-[12px]">
								<div className="text-[20px] font-roboto text-black">
									24/7 Availability{" "}
								</div>
								<div className="text-slate-500 text-[20px] font-roboto">
									Emergency? We’re here for you day and night, 365 days a year.{" "}
								</div>
							</div>
						</div>
						<div className="flex flex-row w-[590px] h-[106px] gap-4">
							<Image
								src="/img5.png"
								alt=""
								width={106}
								height={106}
								className="w-[106px] h-[106px] object-cover rounded-[20px] gap-[12px] p-[30px] bg-gradient-to-r from-[#60A5FA] to-[#0b35a7]"
							/>
							<div className="flex flex-col items-start justify-between w-[452px] h-[96px] gap-[12px]">
								<div className="text-[20px] font-roboto text-black">
									Live Tracking{" "}
								</div>
								<div className="text-slate-500 text-[20px] font-roboto">
									Know exactly when help will arrive with real-time locksmith
									tracking.
								</div>
							</div>
						</div>
						<div className="flex flex-row w-[590px] h-[106px] gap-4">
							<Image
								src="/image/wallet.png"
								alt=""
								width={106}
								height={106}
								className="w-[106px] h-[106px] object-cover rounded-[20px] gap-[12px] p-[30px] bg-gradient-to-r from-[#60A5FA] to-[#0b35a7]"
							/>
							<div className="flex flex-col items-start justify-between w-[452px] h-[96px] gap-[12px]">
								<div className="text-[20px] font-roboto text-black">
									Secure Payments
								</div>
								<div className="text-slate-500 text-[20px] font-roboto">
									All payments are processed securely – no hidden fees, no
									hassle.{" "}
								</div>
							</div>
						</div>
						<div className="flex flex-row w-[590px] h-[106px] gap-4">
							<Image
								src="/image/lock.png"
								alt=""
								width={106}
								height={106}
								className="w-[106px] h-[106px] object-cover rounded-[20px] gap-[12px]  p-[30px] bg-gradient-to-r from-[#60A5FA] to-[#0b35a7]"
							/>
							<div className="flex flex-col items-start justify-between w-[452px] h-[96px] gap-[12px]">
								<div className="text-[20px] font-roboto text-black">
									Smart Lock Installations
								</div>
								<div className="text-slate-500 text-[20px] font-roboto">
									Upgrade your home with cutting-edge security from top brands.{" "}
								</div>
							</div>
						</div>
						<div className="flex flex-row w-[590px] h-[106px] gap-4">
							<Image
								src="/image/tick.png"
								alt=""
								width={106}
								height={106}
								className="w-[106px] h-[106px] object-cover rounded-[20px] gap-[12px]  p-[30px] bg-gradient-to-r from-[#60A5FA] to-[#0b35a7]"
							/>
							<div className="flex flex-col items-start justify-between w-[452px] h-[96px] gap-[12px]">
								<div className="text-[20px] font-roboto text-black">
									Verified Professionals
								</div>
								<div className="text-slate-500 text-[20px] font-roboto">
									Every locksmith is background-checked and licensed for your
									peace of mind.{" "}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full h-[780px] mx-auto mt-10 flex flex-col items-center justify-center bg-[#EAF2FF] gap-[46px]">
				<div className="w-[469px] h-[44px] mx-auto text-center text-[32px] font-roboto text-black">
					Why Choose Us?
				</div>
				<div className="w-[1108px] mx-auto mt-10 flex flex-col">
					<div className="w-[636px] h-[62px]  flex flex-row mx-auto justify-between items-center">
						<div className="w-[318px] h-[62px] py-[12px] px-[65px]font-roboto text-black">
							<div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#26344E] to-[#0E53D3] text-center text-[30px]">
								For End users
							</div>
							<div className="w-[318px] h-[4px] bg-gradient-to-r from-[#26344E] to-[#0E53D3]"></div>
						</div>
						<div className="w-[318px] h-[62px] py-[12px] px-[65px] text-center text-[20px] font-roboto text-black">
							<div className="text-center text-[30px]">For Partners</div>
						</div>
					</div>
				</div>
				<div className="w-[1177px] h-[254px] mx-auto flex flex-row justify-between gap-[30px]">
					<div className="w-[350px] h-[254px] bg-white rounded-[8px] border-[1px] border-gray-200 flex flex-col items-center justify-center p-2">
						<Image
							alt="locksmith"
							src="/image/image 4.png"
							className="w-[73px] h-[73px] object-cover"
							width={73}
							height={73}
						/>
						<div className="w-[227px] h-[42px] text-center font-roboto text-black text-[18px] mt-2 ">
							Vetted & Verified Locksmiths{" "}
						</div>
						<div className="w-[227px] h-[60px] text-center font-roboto text-gray-500 text-[16px] mt-2">
							Only licensed professionals, background-checked for your safety.
						</div>
					</div>
					<div className="w-[350px] h-[254px] bg-white rounded-[8px] border-[1px] border-gray-200 flex flex-col items-center justify-center p-2">
						<Image
							alt="locksmith"
							src="/image/image 4.png"
							className="w-[73px] h-[73px] object-cover"
							width={73}
							height={73}
						/>
						<div className="w-[227px] h-[42px] text-center font-roboto text-black text-[18px] mt-2 ">
							Vetted & Verified Locksmiths{" "}
						</div>
						<div className="w-[227px] h-[60px] text-center font-roboto text-gray-500 text-[16px] mt-2">
							Only licensed professionals, background-checked for your safety.
						</div>
					</div>
					<div className="w-[350px] h-[254px] bg-white rounded-[8px] border-[1px] border-gray-200 flex flex-col items-center justify-center p-2">
						<Image
							alt="locksmith"
							src="/image/image 4.png"
							className="w-[73px] h-[73px] object-cover"
							width={73}
							height={73}
						/>
						<div className="w-[227px] h-[42px] text-center font-roboto text-black text-[18px] mt-2 ">
							Vetted & Verified Locksmiths{" "}
						</div>
						<div className="w-[227px] h-[60px] text-center font-roboto text-gray-500 text-[16px] mt-2">
							Only licensed professionals, background-checked for your safety.
						</div>
					</div>
					<div className="w-[350px] h-[254px] bg-white rounded-[8px] border-[1px] border-gray-200 flex flex-col items-center justify-center p-2">
						<Image
							alt="locksmith"
							src="/image/image 4.png"
							className="w-[73px] h-[73px] object-cover"
							width={73}
							height={73}
						/>
						<div className="w-[227px] h-[42px] text-center font-roboto text-black text-[18px] mt-2 ">
							Vetted & Verified Locksmiths{" "}
						</div>
						<div className="w-[227px] h-[60px] text-center font-roboto text-gray-500 text-[16px] mt-2">
							Only licensed professionals, background-checked for your safety.
						</div>
					</div>
				</div>
				<button className="w-[310px] h-[75px] bg-gradient-to-r from-[#26344E] to-[#0E53D3] text-white text-[20px] mb-10 font-roboto rounded-[4px] px-6 py-3 mt-10">
					Download Now
				</button>
			</div>

			<div className="w-full h-[674px] flex flex-col items-center justify-center">
				<div className="h-[45px] font-roboto text-[#1E232C] text-[38px]">
					Delivering Locksmith Solutions Across the USA!
				</div>
				<Image
					src="/image/Group 1686551876.png"
					alt="USA Map"
					className="w-[700px] h-[482.67px] object-cover mt-14"
					width={700}
					height={482.67}
				/>
				<div className="w-[375px] h-[25px] gap-[15px] flex flex-row justify-between mt-6">
					<div className="w-[150px] h-[25px] flex flex-row justify-between  gap-[6px]">
						<div className="w-[25px] h-[25px] bg-gradient-to-r from-[#26344E] to-[#0E53D3] rounded-[4px]"></div>
						<div className="font-roboto text-[#1E232C] w-[117px] h-[19px] text-[16px]">
							Current Cities
						</div>
					</div>

					<div className="w-[150px] h-[25px] flex flex-row justify-between gap-[6px]">
						<div className="w-[25px] h-[25px] bg-[#3B7800] rounded-[4px]"></div>
						<div className="font-roboto text-[#1E232C] w-[117px] h-[19px] text-[16px]">
							Coming Soon
						</div>
					</div>
				</div>
			</div>

			<div className="w-full h-[540px] mt-4 relative">
				<Image
					src="/image/Bottom (3).png"
					alt="USA Map"
					className="w-full h-full object-cover"
					width={1920}
					height={540}
				/>
				<div className="absolute top-0 flex flex-row w-[1920px] h-[468px] gap-[100px] mx-auto mt-[30px] justify-between">
					<div className="w-[773px] h-[397px] flex flex-col gap-[40px] mx-auto my-16">
						<div className="w-full h-[359px] ">
							<div className="font-roboto text-[#ffffff] text-[32px] h-[78px] w-full">
								Get the App Now! Enjoy hassle-free services as a user or expand
								your reach as a partner!
							</div>
							<div className="w-full h-[24px] text-[#ffffff] text-[24px] font-roboto font-light mt-4">
								Secure homes, cars, and businesses with ease—whether you need
								help or want to provide it.
							</div>
							<div className="flex flex-row justify-between w-[734px] h-[195px] gap-[24px] mt-16">
								<div className="w-[355px] h-[195px] bg-[#ffffff] bg-opacity-35 rounded-[12px] border-[1px] border-[#ffffff] flex flex-col mt-[12px] ml-[12px] pt-[12px] pl-[12px] ">
									<div className="w-[331px] h-[45px] gap-[12px] flex flex-row align-items-center ">
										<div className="w-[45px] h-[45px] rounded-[5.4px] bg-[#26344E]">
											<Image
												src="/image/logo2.png"
												alt="Google Play"
												className="w-[38px] h-[38px] object-cover"
												width={38}
												height={38}
											/>
										</div>
										<div className="text-[#ffffff] text-[20px] font-roboto mt-2">
											Locksmith Hub
										</div>
									</div>
									<div className="w-[331px] h-[38px] text-[#ffffff] text-[16px] font-roboto mt-2">
										Get instant help for lockouts, key replacements, and
										security upgrades.
									</div>

									<div className="w-[331px] h-[34px] mt-10 flex flex-row gap-[7px] items-center">
										<div className="w-[63px] h-[34px] bg-[#ffffff] rounded-[3.25px] border-[0.75px] border-[#ffffff] px-[8.7px] py-[6.22px] flex justify-center align-items-center">
											<Image
												src="/apple.png"
												alt="Google Play"
												className="w-[16.86px] h-[20.45px] object-contain"
												width={16.86}
												height={20.45}
											/>
										</div>
										<div className="w-[63px] h-[34px] bg-[#ffffff] rounded-[3.25px] border-[0.75px] border-[#ffffff] px-[8.7px] py-[6.22px] flex justify-center align-items-center">
											<Image
												src="/play.png"
												alt="Apple Store"
												className="w-[16.86px] h-[20.45px] object-contain"
												width={16.86}
												height={20.45}
											/>
										</div>
									</div>
								</div>
								<div className="w-[355px] h-[195px] rounded-[12px] bg-[#ffffff] bg-opacity-35 border-[1px] border-[#ffffff] flex flex-col mt-[12px] ml-[12px] pt-[12px] pl-[12px] ">
									<div className="w-[331px] h-[45px] gap-[12px] flex flex-row align-items-center ">
										<div className="w-[45px] h-[45px] rounded-[5.4px] bg-[#26344E]">
											<Image
												src="/image/logo2.png"
												alt="Google Play"
												className="w-[38px] h-[38px] object-cover"
												width={38}
												height={38}
											/>
										</div>
										<div className="text-[#ffffff] text-[20px] font-roboto mt-2">
											Locksmith Hub
										</div>
									</div>
									<div className="w-[331px] h-[38px] text-[#ffffff] text-[16px] font-roboto mt-2">
										Get instant help for lockouts, key replacements, and
										security upgrades.
									</div>

									<div className="w-[331px] h-[34px] mt-10 flex flex-row gap-[7px] items-center">
										<div className="w-[63px] h-[34px] bg-[#ffffff] rounded-[3.25px] border-[0.75px] border-[#ffffff] px-[8.7px] py-[6.22px] flex justify-center align-items-center">
											<Image
												src="/apple.png"
												alt="Google Play"
												className="w-[16.86px] h-[20.45px] object-contain"
												width={16.86}
												height={20.45}
											/>
										</div>
										<div className="w-[63px] h-[34px] bg-[#ffffff] rounded-[3.25px] border-[0.75px] border-[#ffffff] px-[8.7px] py-[6.22px] flex justify-center align-items-center">
											<Image
												src="/play.png"
												alt="Apple Store"
												className="w-[16.86px] h-[20.45px] object-contain"
												width={16.86}
												height={20.45}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-[550px] h-[460px]  mt-16 mx-auto">
						<Image
							src="/mobile2.png"
							alt="Logo"
							className="w-[480px] h-[430px] object-contain"
							width={480}
							height={399}
						/>
					</div>
				</div>
			</div>

			<div className="w-full h-[163px] bg-[#ffffff] mt-10 flex align-items-center justify-center">
				<div className="relative w-[1200px] h-[120px] flex flex-col align-items-center justify-center gap-[14px] px-[21px] py-[19px] border-[1px] border-gray-300 rounded-[8px]">
					<div className="w-[1100] h-[38px] text-[16px]  font-roboto flex flex-row align-items-center justify-start">
						<Image
							src="/image/image 2.png"
							alt="Logo"
							className="w-[32px] h-[32px] object-cover mr-2 mt-2"
							width={32}
							height={32}
						/>
						<div className="text-[#000000] w-[161px] h-[38px] text-[32px] font-roboto">
							Need help?
						</div>
					</div>
					<div className="w-[988px] h-[28px] font-normal text-[24px] font-roboto text-black">
						Contact our 24/7 support at{" "}
						<span className="underline text-[#085CF8]">
							support@locksmithhub.net
						</span>{" "}
						or call at +1 (406) 555-0120.
					</div>
					<Image
						src="/images/help.png"
						alt="help"
						className="absolute w-[94px] h-[94px] object-cover -top-10 -right-10  "
						width={94}
						height={94}
					/>
				</div>
			</div>

			<Footer />
		</>
	);
}
