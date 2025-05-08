import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants/content";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">
          My <span className="text-red-600">Projects</span>
        </h2>
        
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-3">
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
        
        {/* Featured Projects */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8">
            Featured <span className="text-red-600">Projects</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={`featured-${index}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}