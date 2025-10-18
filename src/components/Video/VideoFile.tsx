import React from 'react';

interface VideoFileProps extends React.SourceHTMLAttributes<HTMLSourceElement> {}

export const VideoFile: React.FC<VideoFileProps> = (props) => {
    // This component renders a <source> tag and is intended to be used
    // as a child of the <VideoView> component.
    return <source {...props} />;
};
