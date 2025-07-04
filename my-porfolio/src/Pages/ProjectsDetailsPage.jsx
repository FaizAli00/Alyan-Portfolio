import { useParams } from 'react-router-dom';
import projectsData from '../../data/projects'; // Your projects data
import ProjectDetailContent from '../Pages/ProjectDetailContent';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-details-page">
      <ProjectDetailContent project={project} />
    </div>
  );
};

export default ProjectDetailsPage;