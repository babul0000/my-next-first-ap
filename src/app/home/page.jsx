import Image from "next/image";
import imag from "../../../public/my-photo.jpg";


const Home = () => {
    return (
        <div>
{/* first seystem */}
            <Image
            width={500}
            height={300}
            src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd"
            alt="hell"
            />
{/* second seystem */}

            {/* <Image
            src={imag}
            alt="hello"
            /> */}
            <h1>home</h1>
{/* third seystem */}


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