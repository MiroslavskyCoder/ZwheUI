import { useContext } from 'react';
import { ChartsContext, ChartsContextType } from './ChartsContext';

export const useCharts = (): ChartsContextType => {
    const context = useContext(ChartsContext);
    if (!context) {
        throw new Error('useCharts must be used within a ChartsProvider');
    }
    return context;
};
