import Link from "next/link";


const Contract = () => {

const data = [
  {
    id: 1,
    title: "Dhaka Street Food Tour | Best Iftar in Old Dhaka",
    thumbnail: "/thumbnails/vlog1.jpg",
    duration: "18:45",
    views: "245K",
    uploadDate: "2 days ago",
    channel: "Babul Vlogs",
    category: "Food",
    description: "Exploring the most delicious Iftar items in Old Dhaka during Ramadan."
  },
  {
    id: 2,
    title: "Cox's Bazar Beach Vlog | Sunrise to Sunset",
    thumbnail: "/thumbnails/vlog2.jpg",
    duration: "22:10",
    views: "189K",
    uploadDate: "5 days ago",
    channel: "Babul Vlogs",
    category: "Travel",
    description: "Full day vlog at the world's longest sea beach - Cox's Bazar"
  },
  {
    id: 3,
    title: "My First Solo Trip to Sylhet | Waterfall Hunting",
    thumbnail: "/thumbnails/vlog3.jpg",
    duration: "25:30",
    views: "312K",
    uploadDate: "1 week ago",
    channel: "Babul Vlogs",
    category: "Travel",
    description: "Solo adventure in Sylhet - Jaflong, Bichanakandi and more!"
  },
  {
    id: 4,
    title: "Budget PC Build 2026 | Under 80,000 Taka",
    thumbnail: "/thumbnails/vlog4.jpg",
    duration: "14:55",
    views: "156K",
    uploadDate: "2 weeks ago",
    channel: "Babul Vlogs",
    category: "Tech",
    description: "Building a powerful gaming & editing PC in Bangladesh budget"
  }
];



    return (
        <div>
            <h2>contract</h2>

            {
                data.map(dat => <div key={dat.id}>
                    
                    <h2>{dat.title}</h2>
                    <Link href={`/bloge/${blog.id}`}> show details </Link>

                    </div>
                    )}
        </div>
    );
};

export default Contract;