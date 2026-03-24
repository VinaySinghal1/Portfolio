import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: 'Diamond Price Prediction',
      description: 'A comprehensive machine learning pipeline that predicts diamond prices based on various features like carat, cut, color, clarity, and dimensions. Implemented data preprocessing, feature engineering, and multiple regression models to achieve high accuracy predictions.',
      image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=800&q=80',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      github: 'https://github.com/VinaySinghal1/Diamond-Price-Prediction',
      demo: null,
      featured: true,
    },
    {
      title: 'Leaf Disease Detection System',
      description: 'Deep learning-based system for detecting plant leaf diseases using Convolutional Neural Networks. Implemented image preprocessing, data augmentation, and trained CNN model to classify healthy and diseased leaves with high accuracy.',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80',
      tech: ['Python', 'Keras', 'CNN', 'OpenCV', 'Deep Learning'],
      github: 'https://github.com/VinaySinghal1/Leaf-Disease-Detection-system',
      demo: null,
      featured: true,
    },
    {
      title: 'Network Security',
      description: 'Machine learning solution for network intrusion detection and security analysis. Implemented anomaly detection algorithms to identify suspicious network traffic patterns and potential security threats in real-time.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      tech: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Docker'],
      github: 'https://github.com/VinaySinghal1/Network-Security',
      demo: null,
      featured: true,
    },
    {
      title: 'Sales Dashboard',
      description: 'An interactive Power BI dashboard providing comprehensive sales analytics with KPI tracking, trend analysis, and regional performance insights. Features dynamic filtering, drill-through capabilities, and automated data refresh.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tech: ['Power BI', 'DAX', 'Excel', 'Data Modeling'],
      github: 'https://github.com/VinaySinghal1/Sales-Dashboard',
      demo: null,
      featured: false,
    },
    {
      title: 'Pizza Sales Analysis',
      description: 'In-depth SQL analysis of pizza sales data to uncover business insights including best-selling pizzas, peak sales hours, revenue trends, and customer preferences. Created complex queries for data extraction and transformation.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
      tech: ['SQL', 'MySQL', 'Data Analysis', 'Query Optimization'],
      github: 'https://github.com/VinaySinghal1/Pizza-Sales-Analysis',
      demo: null,
      featured: false,
    },
  ];

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-primary-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">My Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my hands-on experience in machine learning, data analysis, 
            and business intelligence through real-world projects.
          </p>
        </motion.div>

        {/* Featured Project Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative">
            {/* Main Project Display */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <motion.img
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent lg:bg-gradient-to-r" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-10 flex flex-col justify-center">
                  <motion.div
                    key={`content-${activeIndex}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4">
                      {projects[activeIndex].title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {projects[activeIndex].description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {projects[activeIndex].tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {projects[activeIndex].github && (
                        <motion.a
                          href={projects[activeIndex].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-primary-light text-white rounded-full hover:bg-primary-light/80 transition-colors"
                        >
                          <Github size={18} />
                          View Code
                        </motion.a>
                      )}
                      {projects[activeIndex].demo && (
                        <motion.a
                          href={projects[activeIndex].demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-dark transition-colors"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevProject}
                className="p-3 glass rounded-full text-white hover:bg-accent/20 transition-colors"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <div className="flex items-center gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex
                        ? 'bg-accent w-8'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextProject}
                className="p-3 glass rounded-full text-white hover:bg-accent/20 transition-colors"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass-card rounded-xl overflow-hidden card-hover cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary-light text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
