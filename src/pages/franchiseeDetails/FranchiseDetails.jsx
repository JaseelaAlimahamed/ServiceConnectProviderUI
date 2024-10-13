import React from 'react'
import Carousel from '../../components/reUsableComponents/Carousel'
import ContactInfo from '../../components/franchisee/ContactInfo';
import Franchisee from '../../components/franchisee/Franchise';

function FranchiseDetails() {

  const imageArray = [
    'https://mir-s3-cdn-cf.behance.net/project_modules/hd/6139fe95757635.5e9f0237cf687.png',
    'https://www.pepsioman.com/orc_admin/uploads/sliders/1661335819_Mainbanner03.jpg',
    'https://www.coca-cola.com/content/dam/onexp/ng/home-image/brands/fanta/banner%20desktop%20fanta.png',
    'https://media.assettype.com/creativegaga%2F2023-05%2F29615382-0486-49dd-ab85-3a3556eac567%2FMirinda_Hero_Image.jpeg',
    'https://cdn.dribbble.com/userupload/13209054/file/original-43dab0c434e30c0a1d7749a7dcfe5b16.jpg?resize=752x',
  ];
  const franchiseeData = {
    FranchiseeName: "COCO COLA",
    name: "Tom Jose",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis cras placerat diam ipsum ut. Nisi vel adipiscing massa bibendum diam. Suspendisse mattis dui maecenas duis mattis. Mattis aliquam at arcu, semper nunc, venenatis et pellentesque eu. Id tristique maecenas tristique habitasse eu elementum sed. Aliquam eget lacus, arcu, adipiscing eget feugiat in dolor sagittis. Non commodo, a justo massa porttitor sed placerat in. Orci tristique etiam tempus sed. Mi varius morbi egestas dictum tempor nisl. In",
  };
  const contactData = [
    { label: "Address", value: "KK Building, Ernakulam" },
    { label: "Pin", value: "22553323" },
    { label: "Email", value: "acr@email.com" },
    { label: "Phone", value: "8528525558" },
  ];
  return (
    <>
      <Carousel images={imageArray} />
      
      <div className="mt-10">
        <Franchisee {...franchiseeData} />
        <ContactInfo contactData={contactData} />
      </div>
    </>
  )
}

export default FranchiseDetails