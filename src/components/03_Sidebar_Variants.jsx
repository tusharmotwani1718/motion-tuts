import { useState } from "react";
import { Home, Info, Settings, MessageCircle, Menu, X } from "lucide-react";
import { motion, stagger } from "motion/react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', url: '/', icon: <Home size={18} /> },
        { name: 'About', url: '/about', icon: <Info size={18} /> },
        { name: 'Settings', url: '/settings', icon: <Settings size={18} /> },
        { name: 'Chats', url: '/chats', icon: <MessageCircle size={18} /> },
    ];

    const sidebarVariants = {
        open: {
            width: 200,
            transition: { duration: 0.3 }
        },
        closed: {
            width: 56,
            transition: { duration: 0.2 }
        }
    }

    const linkVariants = {
        open: {
            opacity: 1,
            y: 0
        },
        closed: {
            opacity: 0,
            y: -10
        }
    }

    const listParentVariants = {
        open: {
            transition: {
                staggerChildren: 0.04,
                delayChildren: 0.2,
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.02,
                staggerDirection: -1,
            }
        }
    }

    return (
        <motion.div
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            style={{ display: 'flex', height: '100vh', background: '#f5f5f3' }}
        >
            <motion.aside
                variants={sidebarVariants}
                // animate={isOpen ? 'open' : 'closed'} // no need for this as defined in parent
                style={{
                    background: '#ffffff',
                    borderRight: '0.5px solid #e0ddd6',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '12px 0',
                    overflow: 'hidden',
                    flexShrink: 0,
                }}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isOpen ? 'flex-end' : 'center',
                        padding: '8px 16px',
                        marginBottom: 8,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#888780',
                        borderRadius: 8,
                    }}
                >
                    {isOpen ? <X size={18} /> : <Menu size={18} />}
                </button>

                {isOpen && (
                    <div style={{
                        padding: '0 16px 12px',
                        fontSize: 13,
                        fontWeight: 500,
                        color: '#b4b2a9',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                    }}>
                        Menu
                    </div>
                )}

                <motion.nav
                    variants={listParentVariants}>
                    {links.map((link, index) => (
                        <motion.a
                            variants={linkVariants} // no need for animate as defined in parent
                            key={index}
                            href={link.url}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                                padding: '10px 16px',
                                color: '#444441',
                                textDecoration: 'none',
                                fontSize: 14,
                                fontWeight: 400,
                                whiteSpace: 'nowrap',
                                borderRadius: 0,
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = '#f5f5f3'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                            <span style={{ flexShrink: 0, color: '#888780', display: 'flex' }}>
                                {link.icon}
                            </span>
                            {isOpen && <span>{link.name}</span>}
                        </motion.a>
                    ))}
                </motion.nav>
            </motion.aside>

            <main style={{
                flex: 1,
                padding: 32,
                color: '#444441',
                fontSize: 14,
            }}>
                <p style={{ color: '#b4b2a9' }}>Page content here</p>
            </main>
        </motion.div>
    );
}