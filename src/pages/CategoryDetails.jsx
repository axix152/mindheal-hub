import 'react';
import { useParams } from 'react-router-dom';

const CategoryDetails = () => {
  const { category } = useParams();

  const categoryDetails = {
    stress: {
      title: 'Stress Management',
      content: 'Learn how to effectively manage stress through mindfulness and relaxation techniques.',
    },
    anxiety: {
      title: 'Anxiety Relief',
      content: 'Overcome anxiety with proven strategies and practical guidance.',
    },
    productivity: {
      title: 'Boost Productivity',
      content: 'Enhance your focus and productivity with effective time management tips.',
    },
    relationships: {
      title: 'Build Better Relationships',
      content: 'Improve your relationships with active listening and open communication.',
    },
  };

  const details = categoryDetails[category] || {
    title: 'Unknown Category',
    content: 'No information available for this category.',
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{details.title}</h2>
      <p>{details.content}</p>
    </div>
  );
};

export default CategoryDetails;
