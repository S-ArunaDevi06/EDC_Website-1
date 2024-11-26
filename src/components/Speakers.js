import './Speakers.css';
import React from 'react';
import profile_image from "../image_for_speakers/profile.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function App(){
  

  return (
    <div className='Background'>

      <h2 className='innovative-speakers' >INNOVATIVE SPEAKERS</h2>
      {/*carousel*/ }
      <div className='Body'>
      <Carousel autoFocus={true}  infiniteLoop={true} autoPlay={true} interval={2000} width={1000} dynamicHeight={false} swipeable={true} centerMode={true} centerSlidePercentage={33.33} showThumbs={false} showIndicators={true} showStatus={false}>
        {data.map((d,index) => (
          <div className="speakercard"  style={{ cursor: 'pointer' }}>
            <img src={d.person_image} alt='card_image' className='card_image'></img>
            <div className='card-body'>
              <h3 className='person_name'>{d.person_name}</h3>
              <p className='person_description'><em>{d.person_description}</em></p>
              <p className='short_description'>{d.short_description}</p>
            </div>
          </div>
        ))}
        </Carousel>
    </div>
    </div>
  );
}


const data = [
  {
    person_image: 'speakers/sycon23/Rajmohan_Arumugam.png',
    person_name: 'Rajmohan Arumugam',
    person_description: 'Sycon 2023',
    short_description:
      'A comedian, motivational speaker, radio jockey, writer, orator, and social media influencer. He was the channel director of the famous YouTube channel \'Put Chutney\' and also founded its sister channel \'Tamil Vannakam.\' '
  },
  {
    person_image: 'speakers/sycon23/vigneshkanth.jpg',
    person_name: 'Vigneshkanth',
    person_description: 'Sycon 2023',
    short_description:
      'An actor, comedian and former radio jockey.',
  },
  {
    person_image: 'speakers/sycon23/narendra_prasad.jpg',
    person_name: 'Narendra Prasad',
    person_description: 'Sycon 2023',
    short_description:
      'An actor ',
  },
  {
    person_image: 'speakers/sycon23/settai_sheriff.jpg',
    person_name: 'Settai Sheriff',
    person_description: 'Sycon 2023',
    short_description:
      'An actor, anchor, comedian and social media influencer',
  },
  {
    person_image:'speakers/sycon23/vivek-anandan.jpg',
    person_name: 'Vivek Anandhan',
    person_description: 'Sycon 2023',
    short_description:
      'An actor and comedian',
  },
  {
    person_image:'speakers/sycon23/harshath-khan.jpg',
    person_name: 'Harshath Khan',
    person_description: 'Sycon 2023',
    short_description:
      'An engineer, a mimicry artist and a stage performer',
  },
  {
    person_image: 'speakers/sycon23/adhirchi-arun.jpg',
    person_name: 'Adhirchi Arun',
    person_description: 'Sycon 2023',
    short_description:
      'An actor, comedian and youtuber',
  },
  {
    person_image: 'speakers/sycon23/vikkals-vikram.jpg',
    person_name: 'Vikram',
    person_description: 'Sycon 2023',
    short_description:
      'An actor, stand-up comedian and youtuber',
  },
  {
    person_image:'speakers/sycon23/santhosh-premkumar.jpg',
    person_name: 'Santhosh Premkumar',
    person_description: 'Sycon 2023',
    short_description:
      'An instagram and youtube influencer',
  },
  {
    person_image: 'speakers/sycon23/sudharsanan-ganapathy.jpg',
    person_name: 'Sudharsanan Ganapathy',
    person_description: 'Sycon 2023',
    short_description:
      'An entrepreneur and a personal branding expert and currently runs an agency named "The Social Company"',
  },
  {
    person_image: 'speakers/sycon23/ananth-ram.jpg',
    person_name: 'Ananth Ram',
    person_description: 'Sycon 2023',
    short_description:
      'An actor, writer and director',
  },
  {
    person_image: 'speakers/sycon23/pooranesh.jpg',
    person_name: 'Pooranesh',
    person_description: 'Sycon 2023',
    short_description:
      'An actor and a producer',
  },
  {
    person_image: 'speakers/sycon23/wilspat.jpg',
    person_name: 'Wilspat',
    person_description: 'Sycon 2023',
    short_description:
      'Content creator and a social media star',
  },

  {
    person_image: 'speakers/sycon23/sabarish.jpg',
    person_name: 'Sabarish',
    person_description: 'Sycon 2023',
    short_description:
      'An actor and choreographer',
  },
  {
    person_image: 'speakers/sycon23/ganesh-ram.jpg',
    person_name: 'Ganesh Ram',
    person_description: 'Sycon 2023',
    short_description:
      'A food blogger and a youtube celebrity',
  },
  {
    person_image: 'speakers/sycon24/hariharan.jpg',
    person_name: 'Hariharan',
    person_description: 'Sycon 2024',
    short_description:
      'The visionary behind Hawkeye Tamil Trading Community',
  },
  {
    person_image: 'speakers/sycon24/mohammed-rasool.jpg',
    person_name: 'Mohammed Rasool',
    person_description: 'Sycon 2024',
    short_description:
      'A teen entrepreneur with incredible marketing skills',
  },
  {
    person_image: 'speakers/sycon24/sethu.jpg',
    person_name: 'Sethu',
    person_description: 'Sycon 2024',
    short_description:
      'CEO and a social media influencer',
  },
  {
    person_image: 'speakers/sycon24/Aarif.jpg',
    person_name: 'Aarif',
    person_description: 'Sycon 2024',
    short_description:
      'A food media and travel vlogger',
  },
  {
    person_image: 'speakers/sycon24/thajmola.jpg',
    person_name: 'Thajmola',
    person_description: 'Sycon 2024',
    short_description:
      'A digital content creator and host of a podcast',
  },
  {
    person_image: 'speakers/sycon24/Sumaiya-naaz.jpg',
    person_name: 'Sumaiya Naaz',
    person_description: 'Sycon 2024',
    short_description:
      'A physiotherapist and a fitness influencer',
  },
  {
    person_image: 'speakers/sycon24/srimathy-kesan.jpg',
    person_name: 'Srimathy Kesan',
    person_description: 'Sycon 2024',
    short_description:
      'Founder of SPACE KIDZ INDIA and president of SPACE RICKSHAW',
  },
  {
    person_image: 'speakers/sycon24/Karthik-raghavendran.jpg',
    person_name: 'Karthik Raghavendran',
    person_description: 'Sycon 2024',
    short_description:
      'CEO of Neurostellar, a pioneering deep technology startup',
  },
  {
    person_image: profile_image,
    person_name: 'NAME OF THE SPEAKER 5',
    person_description: 'What does he do',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    person_image: profile_image,
    person_name: 'NAME OF THE SPEAKER 5',
    person_description: 'What does he do',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    person_image: profile_image,
    person_name: 'NAME OF THE SPEAKER 5',
    person_description: 'What does he do',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    person_image: profile_image,
    person_name: 'NAME OF THE SPEAKER 5',
    person_description: 'What does he do',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    person_image: profile_image,
    person_name: 'NAME OF THE SPEAKER 5',
    person_description: 'What does he do',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    person_image: profile_image,
    person_name: 'NAME OF THE SPEAKER 5',
    person_description: 'What does he do',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    person_image: profile_image,
    person_name: 'NAME OF THE SPEAKER 5',
    person_description: 'What does he do',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default App;

