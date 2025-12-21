import { Code, Brush, LayoutGrid, Zap, Database, BookOpen } from 'lucide-react'; // Icons for categorization

// Define a type for a single skill category
interface SkillCategory {
  id: number;
  title: string;
  icon: React.ElementType; // Type for the Lucide Icon component
  skills: string[];
}

// Mock Data for Skills
const skillsData: SkillCategory[] = [
  {
    id: 1,
    title: 'Frontend Development',
    icon: Code,
    skills: ['React', 'Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },

  {
    id: 2,
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'C++', 'Rust', 'JavaScript (From Project Context)'],
  },
  {
    id: 3,
    title: 'Data & Database',
    icon: Database,
    skills: ['SQL (Intermediate Proficiency)', 'Data Analysis (Area of Interest)', 'Data Visualization'],
  },
  {
    id: 4,
    title: 'Software & Tools',
    icon: Zap,
    skills: ['Microsoft Office (Word, Excel, PPT)', 'Git / GitHub', 'Apache Netbeans'],
  },

];


// Reusable component for a single Skill Card
const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full">
    {/* Icon uses text-navy */}
    <category.icon className="w-8 h-8 text-navy mb-4" />
    
    {/* Title now explicitly uses text-navy */}
    <h3 className="text-xl font-bold text-deepNavy mb-4 border-b border-accent-yellow/50 pb-2">
      {category.title}
    </h3>
    
    <ul className="space-y-2">
      {category.skills.map(skill => (
        // List item text now explicitly uses text-dark-text
        <li key={skill} className="text-dark-text flex items-center">
          <span className="inline-block w-2 h-2 bg-accent-yellow rounded-full mr-3 border border-navy"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);


export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title explicitly uses text-accent-yellow, which is correct for contrast against the background */}
        <h2 className="text-5xl sm:text-6xl font-extrabold text-amber-200 mb-16 text-center">
          my skills.
        </h2>

        {/* Skills Grid - Responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-deepNavy bg-amber-200">
          {skillsData.map(category => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
}