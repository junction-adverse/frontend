
  import team from '../assets/team.jpg';

export default function TeamPicture() {
    return (
        <div className='relative w-full h-40 bg-cover bg-[0rem_-3rem] sm:bg-[0rem_-7rem] md:bg-[0rem_-10rem] lg:bg-[0rem_-13rem] lg:h-60 xl:h-80 xl:bg-center' style={{ backgroundImage: `url(${team})`}}>
            <div className='w-full h-full bg-indigo-900 opacity-80'>
            </div>
            <div className='text-white absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] whitespace-nowrap'>
            <h1 className='font-extrabold text-5xl'>Create content. Share. Get paid.</h1>
            <p className='text-lg mt-6'>Empowering anyone to create content for brands and get paid based on engagement metrics.</p>
            </div>
        </div>
    )
};
