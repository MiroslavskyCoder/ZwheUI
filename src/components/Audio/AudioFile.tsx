import React from 'react';

interface AudioFileProps extends React.SourceHTMLAttributes<HTMLSourceElement> {}

export const AudioFile: React.FC<AudioFileProps> = (props) => {
    // This component renders a <source> tag and is intended to be used
    // as a child of the main <Audio> component.
    return <source {...props} />;
};
