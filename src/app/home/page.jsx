import Image from "next/image";
import imag from "../../../public/my-photo.jpg";


const Home = () => {
    return (
        <div>

            <Image
            width={500}
            height={300}
            src="https://unsplash.com/photos/lemon-water-in-footed-glass-RgplfXbxLFs"
            alt="helll"
            />

            {/* <Image
            src={imag}
            alt="hello"
            /> */}
            <h1>home</h1>
            {/* <Image 
            width={500}
            height={300}
            src="/my-photo.jpg"
            alt="hello"
            /> */}

        </div>
    );
};

export default Home;