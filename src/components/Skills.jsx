import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Code2, 
  Brain, 
  Database, 
  BarChart3, 
  GitBranch, 
  Terminal,
  Layers,
  Cpu
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Deep Learning',
      icon: Code2,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Keras', level: 90 },
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 75 },
        { name: 'OpenCV', level: 80 },
      ],
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Scikit-learn', level: 85 },
        { name: 'Python', level: 90 },
        { name: 'NLP / Embeddings', level: 72 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      title: 'Data Analysis',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'EDA', level: 88 },
        { name: 'Data Cleaning', level: 90 },
        { name: 'Pandas & NumPy', level: 85 },
      ],
    },
    {
      title: 'Visualization & Tools',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Power BI', level: 82 },
        { name: 'Excel', level: 88 },
        { name: 'Matplotlib / Seaborn', level: 80 },
      ],
    },
  ];

  const additionalSkills = [
    { name: 'Git & GitHub', icon: GitBranch },
    { name: 'Jupyter Notebook', icon: Terminal },
    { name: 'Machine Learning Pipelines', icon: Layers },
    { name: 'Model Deployment', icon: Cpu },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="skills" className="section-padding bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">My Expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, machine learning, and building 
            intelligent systems that drive business value.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card p-6 md:p-8 rounded-2xl"
              onMouseEnter={() => setHoveredSkill(categoryIndex)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-accent text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-primary-light rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: 0.3 + skillIndex * 0.1,
                          ease: 'easeOut'
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} progress-bar`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-8">Additional Tools & Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="flex items-center gap-3 px-5 py-3 glass rounded-full"
              >
                <skill.icon className="w-5 h-5 text-accent" />
                <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
