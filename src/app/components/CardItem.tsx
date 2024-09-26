



import * as React from 'react';
import { Card, Typography } from '@mui/material';
import Image from 'next/image'; // Importing the Next.js Image component
import Welcome from '../../images/Fresh Folk - Teamwork.png'; // Importing from src folder
import AboutUs from '../../images/Olá - Relaxing.png'; // Importing from src folder
import QualityAss from '../../images/Tutto Ricco - Close Up.png'; // Importing from src folder

const WelcomeCard = ({ title, image, description }: any) => {
  return (
    <>
      <Card sx={{ maxWidth: 400, margin: '0 auto', textAlign: 'center', boxShadow: 'none' }}>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Image
          src={image} // Pass the imported image as the src
          alt={`${title} image`}
          width={400}
          height={300} // Set the desired width and height
          style={{ objectFit:'fill', margin: '0 auto' }}
        />
      </Card>

      <br />
      <Typography variant="h6" color="text.secondary">
        {description}
      </Typography>

      <div
          style={{
            position: 'relative',
            width: '90%',
            margin: '30px auto',
            height: '0.5px',
            backgroundColor: 'gray',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: 'gray',
              borderRadius: '50%',
              position: 'absolute',
              top: '-5px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
          </div>


    </>
  );
};

export default function App() {
  return (
    <>
      <WelcomeCard
        title="Welcome"
        image={Welcome} // Using imported image
        description="Precast concrete consists of concrete (a mixture of cement, water,
          aggregates, and admixtures) that is cast into a specific shape at a
          location other than its in-service position. The concrete is placed
          into a form, typically wood or steel, and cured before being stripped
          from the form, usually the following day. These components are then
          transported to the construction site for erection into place."
      />
    {/* Second Card */}
     <WelcomeCard
         title="About Us"
         image={AboutUs}
         description="Established in 1991, DEAL MAGSIL is a prominent company committed towards manufacturing and supplying precast concrete products and Interlocking paver block. Being an experienced company we excel in upholding our quality standards, reliability and efficiency. With time DEAL MAGSIL has emerged as a chief turnkey service manufacturer and provider in National Highway – 2 Panagarh to Barwa Adda Stretch, BAPL Andal Airport, Asansol, Durgapur , Kulti Municipal Corporations and DVC RTPP Raghunathpur Underground Cable Covers Suppliers and many other prestigious projects all over. 
 DEAL MAGSIL is registered under Government of West Bengal S.S.I Unit certified Manufacturer and Supplier of a wide range of Concrete and allied products including Registered Vendor of SAIL - IISCO, DVC, L&T, AMC, DMC and many other Public and Private Authorities.
 Positioned as one of the oldest and biggest SSI unit of its kind in this domain, we rely only on the latest technology and the technical expertise of a qualified team that is committed to excellence. Being a part of the infrastructural development in the country, we are a regular supplier to various government departments and private companies like: Steel Authority of India Ltd IISCO steel plant, National Highway Authority of India, Maheswari Brothers Limited, SMS Infrastructure Limited, Asansol Municipal Corporation, Damodar Valley Corporation and so on. "
       />
       {/* Third Card */}
       <WelcomeCard
         title="Quality Assurance"
         image={QualityAss}
         description="We being Quality conscious always endeavor to excel in quality standards. We use high grade 100% clear virgin raw material. Each of our products is confirming to all Quality Standards and meeting all the parameters for ultimate performance. We believe in high business ethical values and commitment.
 Company established in 1991 with perception of development and to create a benchmark in construction activities Industry by maintaining QUALITY, SPEED and SERVICES with most advanced Hi-tech Technology with super mechanized system and Innovative concepts to lead the market.
 <br>
 Our Technical Team is also engaged in designing and developing the wide range of Innovative concrete products, which are cost effective, maintenance free and environmental friendly and stands better replacement for conventional products. Which are manufactured under precision conditions through automated and Hi-Tech Machines.
 With the aim to achieve and exceed customer expectations our team strives for continuous improvement in our systems of services and quality control by adopting modern technology and enhancing competence of our people. We are committed to improve the quality of our products through Hi- Tech technology & up-gradation and services
 The products developed by the company has its own designs and patterns, which lead to market by its Quality and performance in operation, the market reach of our products extends to every corner of the district. DEAL MAGSIL brand has established a formidable credibility and is associated with high quality, state of the art technology and exemplary services.
 Looking towards to maintain the flagship in market our Team of Technicians also given the emphasis on appearance, Aesthetic view, Strength and Economical range to our products which are Eco-friendly too."
       />
       
     </>
   );
 }




