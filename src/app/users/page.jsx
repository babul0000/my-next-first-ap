import Link from "next/link";


import { Geist, Oswald } from 'next/font/google'
 
const geist = Geist({
    weight:"400",
  subsets: ['latin'],
})

const oswald = Oswald({
    weight:"400",
  subsets: ['latin'],
})


const UsersPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await data.json();

  // console.log(post);

  return (
    <div className ={`grid grid-cols-3 gap-5 ${oswald.className}`}>
      
      {posts.map((post) => (
        <div
          key={post.id}
          className="card bg-primary text-primary-content"
        >
          <div className="card-body">
            <h2 className="card-title">{post.name}</h2>
            <p>
              {post.company.catchPhrase}
            </p>
            <div className="card-actions justify-end">
              <Link href={`/users/${post.id}`}><button className="btn">Buy Now</button></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
