import { AvatarCanvas } from "./AvatarCanvas";

const Hero = () => {
	return (
		<section className="bg-[url('/hero-bck.jpg')] bg-center bg-no-repeat bg-cover relative w-full h-screen mx-auto">
			<div className="px-6  absolute inset-0 top-[132px] max-w-7xl mx-auto gap-6">
				{/*  message */}
				<div style={{marginTop:"-5%"}}>
					<h1 className="text-white text-7xl font-extrabold">
						Hi, I'm <span className="text-theme">Mario</span>
					</h1>
					<p className="hidden sm:block text-lg mt-9 text-white w-[550px]">
						Welcome to my <span className="text-theme">Metaverse</span>, Step into the boundless Metaverse as Mario, 
						where your <span className="text-theme">avatar </span>
						<br />
						takes center stage in a dynamic digital realm,
						 opening doors to limitless adventures.
					</p>
				</div>
			</div>

			<AvatarCanvas />
		</section>
	);
};

export default Hero;
