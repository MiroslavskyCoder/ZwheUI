
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Session {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
    expires: string;
}

interface SessionContextValue {
    data: Session | null;
    status: 'loading' | 'authenticated' | 'unauthenticated';
}

const SessionContext = createContext<SessionContextValue | undefined>(undefined);

export const SessionProvider: React.FC<{ children: ReactNode, session?: Session | null }> = ({ children, session }) => {
    const [data, setData] = useState(session);
    // In a real app, this would involve fetching the session
    const status = data ? 'authenticated' : 'unauthenticated';

    return (
        <SessionContext.Provider value={{ data: data || null, status }}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = () => {
    const context = useContext(SessionContext);
    if (context === undefined) {
        throw new Error('useSession must be used within a SessionProvider');
    }
    return context;
};
