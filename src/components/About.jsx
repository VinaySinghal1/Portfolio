import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Brain, BarChart3 } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Code,
      title: 'Deep Learning',
      description: 'Keras,TensorFlow,pytorch',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Scikit-learn, TensorFlow',
    },
    {
      icon: Database,
      title: 'Data Analysis',
      description: 'EDA, Cleaning, Visualization',
    },
    {
      icon: BarChart3,
      title: 'Visualization',
      description: 'Power BI, Excel',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="section-padding bg-primary-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <span className="text-accent font-medium mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Transforming Data into
              <span className="gradient-text"> Actionable Insights</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I'm Vinay Singhal, an aspiring Data Analyst and Machine Learning enthusiast
             with a growing interest in Deep Learning and Natural Language Processing (NLP).
              Currently pursuing my B.E. in Artificial Intelligence & Data Science, 
              I am passionate about leveraging data and advanced technologies to solve 
              real-world problems.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              My journey in data science has equipped me with hands-on experience in building 
              ML pipelines, performing exploratory data analysis, and creating compelling 
              visualizations. I'm constantly learning and exploring new technologies in the 
              ever-evolving field of AI and data analytics.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 glass-card rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">2+</div>
                <div className="text-sm text-gray-400">Internships</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 glass-card rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">5+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 glass-card rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">2+</div>
                <div className="text-sm text-gray-400">Hackathons</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div variants={containerVariants} className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-2xl card-hover"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
