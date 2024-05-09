export default function About() {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='max-w-6xl mx-auto p-3 flex flex-row-reverse'>
          <img
            src='https://i.ibb.co/2M0SdDb/images.jpg'
            alt='Image'
            className='w-96 h-auto rounded-lg mr-4'
          />
          <div className='text-center'>
            <h1 className='text-3xl font font-semibold text-center my-7'>
              Welcome to my blog!
            </h1>
            <div className='text-md text-gray-500 flex flex-col gap-6'>
              <p>
                Meet the person behind the blog. I'm a passionate individual
                with a background in technology and a keen interest in sharing my
                experiences and expertise with others. Join me on this journey as
                we explore the ever-evolving landscape of technology together.
              </p>
  
              <p>
                My mission is to empower individuals and businesses by delivering
                high-quality content that educates, inspires, and informs. I
                strive to be your go-to source for all things related to
                technology, whether you're a seasoned professional or just
                starting your journey.
              </p>
  
              <p>
                We encourage you to leave comments on our posts and engage with
                other readers. You can like other people's comments and reply to
                them as well. We believe that a community of learners can help
                each other grow and improve.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  