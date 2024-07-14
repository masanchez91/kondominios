import { ReactNode, createContext, useState } from 'react';
import LogoKondominios from '../../molecules/Sidebar/LogoKondominios';
import LogoWithButton from '../../molecules/Sidebar/LogoWithButton';
import UserProfile from '../../molecules/Sidebar/UserProfile';
import VersionKondominios from '../../molecules/Sidebar/VersionKondominios';

const SidebarContext = createContext({ expanded: true });

export default function Sidebar({ children }: { children: ReactNode }) {
    const [expanded, setExpanded] = useState(true);

    const toggleExpand = () => setExpanded(curr => !curr);

    return (
        <>
            <aside
                className="h-screen"
                style={{
                    maxWidth: '100%',
                    margin: '0',
                    position: 'fixed',
                    left: '0',
                    top: '0',
                    bottom: '0',
                }}
            >
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <LogoWithButton
                        expanded={expanded}
                        toggleExpand={toggleExpand}
                    />
                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>
                    <LogoKondominios expanded={expanded} />
                    <VersionKondominios expanded={expanded} />
                    <UserProfile expanded={expanded} />
                </nav>
            </aside>
        </>
    );
}

export { SidebarContext };
