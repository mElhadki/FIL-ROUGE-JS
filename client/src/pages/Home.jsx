import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { Button } from 'flowbite-react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

export default function Home() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);



  return (
    <div>
         <div className='p-3 bg-amber-100 dark:bg-slate-700'>
<div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
<div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="https://hawat.qodeinteractive.com/wp-content/uploads/2022/12/main-home-rev-img.png" alt="Image 1" />
          <div className="flex-2 justify-center flex flex-col w-1/2" style={{ width: '40%' }}>
        <h1 className='text-3xl font-bold lg:text-6xl'>Dive in and enrich your knowledge</h1>
        <br/>   <br/>
                   <h2 className='text-2xl'>
            Welcome to my Blog!<br/> Explore a diverse range of articles and tutorials covering topics spanning web development, software engineering, and programming languages.
            </h2>
            <br/>   <br/>
            <Button id='btn' gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="/search" target='_blank' rel='noopener noreferrer'>
                View all posts
                </a>
            </Button>
     
        </div>
        </div>

            <div className="swiper-slide">
          <img src="https://hawat.qodeinteractive.com/wp-content/uploads/2022/12/main-home-rev-img.png" alt="Image 1" />
          <div className="flex-2 justify-center flex flex-col w-1/2" style={{ width: '40%' }}>
        <h1 className='text-3xl font-bold lg:text-6xl'>Dive in and enrich your knowledge</h1>
        <br/>   <br/>
                   <h2 className='text-2xl'>
            Welcome to my Blog!<br/> Explore a diverse range of articles and tutorials covering topics spanning web development, software engineering, and programming languages.
            </h2>
            <br/>   <br/>
            <Button id='btn' gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="/search" target='_blank' rel='noopener noreferrer'>
                View all posts
                </a>
            </Button>
    
        </div>
        </div>
      
      
      </div>
   
    </div>
    </div>
    </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
            <div className='p-3  dark:bg-slate-700'>
        <CallToAction />
      </div>
      </div>
    </div>
  );
}
