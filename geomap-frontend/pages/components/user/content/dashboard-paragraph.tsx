import React, { useState } from 'react';

interface UserDashboardParagraphProps {
  content: string;
  maxHeight: number;
}

function UserDashboardParagraph({ content, maxHeight }: UserDashboardParagraphProps) {
  const [viewMore, setViewMore] = useState(false);
  const truncatedStyle = `h-${maxHeight} overflow-hidden`;

  const handleViewMoreClick = () => {
    setViewMore(true);
  };

  return (
    <div className={truncatedStyle}>
      <p>{viewMore ? content : `${content.slice(0, 200)}...`}</p>
      {!viewMore && (
        <button onClick={handleViewMoreClick} className="text-blue-500 hover:text-blue-700">
          Read more
        </button>
      )}
    </div>
  );
}

export default UserDashboardParagraph;
