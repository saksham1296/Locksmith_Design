import Image from "next/image";
import Navbar from "./components/navbar";
import "./globals.css";
import Footer from "./components/footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="w-full mt-28 px-4 sm:px-6 md:px-12 lg:px-32">
				<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 -mt-10">
					<div className="w-full lg:w-1/2 flex flex-col items-center gap-5 ">
						<h2 className="text-center lg:text-center md:text-center sm:text-centertext-[20px] sm:text-[24px] lg:text-[20px] font-bold font-roboto bg-gradient-to-r from-[#26344E] to-[#0E53D3] bg-clip-text text-transparent tracking-tight md:leading-6">
							Need a Locksmith? Get Help in Minutes – 24/7, Fast & Reliable!
						</h2>

						<h1 className="text-center text-[22px] sm:text-[22px] md:text-[24px] lg:text-[22px] lg:text-center sm:text-center font-outfit text-[#212121] tracking-tight leading-snug md:text-center ">
							Emergency Lockouts, Installations & Security Upgrades – 24/7
							Availability!
						</h1>

						<p className="-mt-3 text-center text-[14px] sm:text-[14px] md:text-[16px] lg:text-center md:text-center sm:text-centerlg:text-[18px] font-roboto text-gray-600 tracking-tight leading-relaxed max-w-[650px]">
							<span className="text-black font-medium">
								Fast, Reliable, and Secure Locksmith Services at Your
								Fingertips!
							</span>{" "}
							Forget the hassle of searching and waiting – with our easy-to-use
							platform, you can quickly find trusted professionals who are{" "}
							<span className="text-black font-medium">available 24/7</span> to
							assist you. Secure your home, car, or office with just a few
							clicks.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full max-w-[650px]">
							<button className="w-full sm:w-[310px] h-[60px] sm:h-[75px] bg-gradient-to-r md:leading-6 from-[#26344E] to-[#0E53D3] text-white text-[18px] sm:text-[20px] font-roboto rounded-md px-6">
								Book A Locksmith Now
							</button>
							<button className="w-full sm:w-[310px] h-[60px] sm:h-[75px] bg-gradient-to-r md:leading-6 from-[#7BB642] to-[#3B7800] text-white text-[18px] sm:text-[20px] font-roboto rounded-md px-6">
								Get a Locksmith in Minutes!
							</button>
						</div>
					</div>

					<div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
						<div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[100%] max-w-[449px]">
							<Image
								src="/heroImage.jpg"
								alt="Hero Image"
								width={449}
								height={422}
								className="w-full h-auto object-contain"
								priority
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full text-center font-roboto text-[24px] sm:text-[28px] md:text-[32px] font-normal text-[#010205] leading-[1.3] tracking-[-0.03em] mt-7">
				Who We Serve
			</div>

			<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-32 mt-8 px-6 md:px-16 lg:px-32">
				<div className="flex flex-col items-center text-center max-w-[504px]">
					<Image
						src="/images/hero1.png"
						alt="Who We Serve"
						className="w-full h-[240px] md:h-[320px] lg:h-[362px] object-cover rounded-[20px]"
						width={504}
						height={362}
					/>
					<div className="text-[18px] md:text-[20px] font-roboto text-[#010205] mt-4">
						For People in Need of Help
					</div>
					<div className="text-slate-500 text-[14px] md:text-[16px] font-roboto mt-2">
						Locked out? Need a locksmith fast? Get trusted professionals
						available 24/7 – fast, secure, and hassle-free!
					</div>
				</div>

				<div className="flex flex-col items-center text-center max-w-[504px]">
					<Image
						src="/img 2.png"
						alt="Locksmiths"
						className="w-full h-[240px] md:h-[320px] lg:h-[362px] object-cover rounded-[20px]"
						width={504}
						height={362}
					/>
					<div className="text-[18px] md:text-[20px] font-roboto text-[#010205] mt-4">
						For Professionals
					</div>
					<div className="text-slate-500 text-[14px] md:text-[16px] font-roboto mt-2">
						Get more locksmith jobs with LocksmithHub! Verified professionals
						get instant job requests and secure payments.
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center mt-8 px-4 sm:px-6 lg:px-12 max-w-screen-xl mx-auto lg:mb-10 mb-10  ">
				<h2 className="text-[24px] sm:text-[28px] mb-0 lg:mb-10 md:text-[32px] lg:text-[36px] font-roboto font-normal text-[#010205] leading-[1.3] tracking-[-0.03em] text-center mt-10">
					What Makes Us Unique?
				</h2>

				<div className="flex flex-col lg:flex-row gap-8 mt-0 w-full  justify-center items-center ">
					<div className="w-full lg:w-[90%] md:w-[70%] md:h-[90%] lg:h-[90%]">
						<Image
							src="/img3.png"
							alt="Unique Value Image"
							width={800}
							height={720}
							className="w-full h-auto max-h-[500px] sm:max-h-[600px] lg:max-h-[720px] object-fit rounded-[20px]"
						/>
					</div>

					<div className="hidden lg:block w-[4px] bg-gray-700 rounded-full"></div>

					<div className="w-full lg:w-[60%] flex flex-col gap-6 md:max-w-[650px] sm:max-w-[500px]">
						{[
							{
								icon: "/Frame.png",
								title: "Instant Booking",
								desc: "Find a trusted locksmith near you in seconds – no waiting!",
							},
							{
								icon: "/img4.png",
								title: "24/7 Availability",
								desc: "Emergency? We’re here for you day and night, 365 days a year.",
							},
							{
								icon: "/img5.png",
								title: "Live Tracking",
								desc: "Know exactly when help will arrive with real-time locksmith tracking.",
							},
							{
								icon: "/image/wallet.png",
								title: "Secure Payments",
								desc: "All payments are processed securely – no hidden fees, no hassle.",
							},
							{
								icon: "/image/lock.png",
								title: "Smart Lock Installations",
								desc: "Upgrade your home with cutting-edge security from top brands.",
							},
							{
								icon: "/image/tick.png",
								title: "Verified Professionals",
								desc: "Every locksmith is background-checked and licensed for your peace of mind.",
							},
						].map((item, index) => (
							<div key={index} className="flex  gap-4 items-center">
								<Image
									src={item.icon}
									alt={item.title}
									width={64}
									height={64}
									className="min-w-[64px] sm:min-w-[80px] w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] p-[16px] sm:p-[20px] bg-gradient-to-r from-[#60A5FA] to-[#0b35a7] rounded-[20px] object-contain"
								/>
								<div className="flex flex-col">
									<h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-roboto text-black">
										{item.title}
									</h3>
									<p className="text-[14px] sm:text-[16px] text-slate-500 font-roboto">
										{item.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="w-full bg-[#EAF2FF] py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-10">
				<h2 className="text-center text-[24px] sm:text-[28px] md:text-[32px] font-roboto text-black font-medium">
					Why Choose Us?
				</h2>

				<div className="flex flex-col items-center">
					<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
						<div className="text-center">
							<div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#26344E] to-[#0E53D3] text-[24px] sm:text-[28px] md:text-[30px]">
								For End Users
							</div>
							<div className="w-full h-[4px] mt-1 bg-gradient-to-r from-[#26344E] to-[#0E53D3] rounded-full" />
						</div>
						<div className="text-[24px] sm:text-[28px] md:text-[30px] text-black text-center">
							For Partners
						</div>
					</div>
				</div>

				<div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{[1, 2, 3, 4].map((_, index) => (
						<div
							key={index}
							className="bg-white rounded-[8px] border border-gray-200 p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
						>
							<Image
								alt="locksmith"
								src="/image/image 4.png"
								className="w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] object-contain"
								width={65}
								height={65}
							/>
							<h3 className="mt-4 text-[16px] sm:text-[18px] font-roboto text-black font-medium">
								Vetted & Verified Locksmiths
							</h3>
							<p className="mt-2 text-[14px] sm:text-[15px] text-gray-500 font-roboto leading-snug px-2">
								Only licensed professionals, background-checked for your safety.
							</p>
						</div>
					))}
				</div>

				<button className="mt-8 w-[220px] sm:w-[260px] md:w-[310px] h-[60px] sm:h-[70px] bg-gradient-to-r from-[#26344E] to-[#0E53D3] text-white text-[18px] sm:text-[20px] rounded-[6px] font-roboto transition hover:brightness-110">
					Download Now
				</button>
			</div>

			<div className="w-full py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center bg-white">
				<h2 className="font-roboto text-[#1E232C] text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] font-semibold leading-tight max-w-[800px]">
					Delivering Locksmith Solutions Across the USA!
				</h2>

				<div className="mt-10 w-full max-w-[800px]">
					<Image
						src="/image/Group 1686551876.png"
						alt="USA Map"
						width={700}
						height={482}
						className="w-full h-auto object-contain"
					/>
				</div>

				<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12">
					<div className="flex items-center gap-3">
						<div className="w-5 h-5 bg-gradient-to-r from-[#26344E] to-[#0E53D3] rounded-sm"></div>
						<span className="text-[16px] text-[#1E232C] font-roboto">
							Current Cities
						</span>
					</div>

					<div className="flex items-center gap-3">
						<div className="w-5 h-5 bg-[#3B7800] rounded-sm"></div>
						<span className="text-[16px] text-[#1E232C] font-roboto">
							Coming Soon
						</span>
					</div>
				</div>
			</div>

			<div className="relative w-full bg-black text-white">
				<Image
					src="/image/Bottom (3).png"
					alt="Background"
					width={1920}
					height={540}
					className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
				/>

				<div className="relative z-10 px-4 py-12 sm:px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center gap-10">
					<div className="w-full lg:w-1/2 flex flex-col gap-6 max-w-2xl">
						<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-roboto leading-snug text-center lg:text-left">
							Get the App Now! Enjoy hassle-free services as a user or expand
							your reach as a partner!
						</h2>
						<p className="text-sm sm:text-base font-light font-roboto text-center lg:text-left">
							Secure homes, cars, and businesses with ease—whether you need help
							or want to provide it.
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{[1, 2].map((_, i) => (
								<div
									key={i}
									className="bg-white bg-opacity-20 border border-white rounded-xl p-4 flex flex-col gap-3 backdrop-blur-md"
								>
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 bg-[#26344E] rounded-md flex items-center justify-center">
											<Image
												src="/image/logo2.png"
												alt="App Icon"
												width={30}
												height={30}
												className="object-contain"
											/>
										</div>
										<p className="text-white text-lg font-semibold font-roboto">
											Locksmith Hub
										</p>
									</div>
									<p className="text-white text-sm font-roboto leading-tight">
										Get instant help for lockouts, key replacements, and
										security upgrades.
									</p>
									<div className="flex gap-3 mt-2">
										<div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
											<Image
												src="/apple.png"
												alt="App Store"
												width={18}
												height={18}
											/>
										</div>
										<div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
											<Image
												src="/play.png"
												alt="Google Play"
												width={18}
												height={18}
											/>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-1/2 flex justify-center">
						<Image
							src="/mobile2.png"
							alt="Mobile Preview"
							width={400}
							height={400}
							className="w-full h-auto object-contain"
						/>
					</div>
				</div>
			</div>

			<div className="w-full bg-white py-10 px-4 flex justify-center">
				<div className="relative w-full max-w-5xl bg-white border border-gray-300 rounded-lg p-6 sm:p-8 flex flex-col gap-4 items-start">
					<Image
						src="/images/help.png"
						alt="Help Icon"
						width={80}
						height={80}
						className="absolute -top-10 right-4 sm:right-6 md:right-10 w-[60px] sm:w-[70px] md:w-[80px] h-auto object-contain"
					/>

					<div className="flex items-center gap-3">
						<Image
							src="/image/image 2.png"
							alt="Help Logo"
							width={32}
							height={32}
							className="w-8 h-8 object-contain"
						/>
						<h3 className="text-xl sm:text-2xl font-bold font-roboto text-black">
							Need help?
						</h3>
					</div>

					<p className="text-base sm:text-lg md:text-xl font-roboto text-black">
						Contact our 24/7 support at{" "}
						<a
							href="mailto:support@locksmithhub.net"
							className="text-[#085CF8] underline"
						>
							support@locksmithhub.net
						</a>{" "}
						or call at{" "}
						<a href="tel:+14065550120" className="text-[#085CF8] underline">
							+1 (406) 555-0120
						</a>
						.
					</p>
				</div>
			</div>

			<Footer />
		</>
	);
}
