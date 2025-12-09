"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    resolvedTheme: ResolvedTheme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "lockbloom-theme";

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>("system");
    const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");
    const [mounted, setMounted] = useState(false);

    const getSystemTheme = (): ResolvedTheme => {
        if (typeof window === "undefined") return "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    const resolveTheme = (themeToResolve: Theme): ResolvedTheme => {
        if (themeToResolve === "system") {
            return getSystemTheme();
        }
        return themeToResolve;
    };

    const applyTheme = (newResolvedTheme: ResolvedTheme) => {
        console.log("Applying theme:", newResolvedTheme); // Debug log
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(newResolvedTheme);
        root.setAttribute("data-theme", newResolvedTheme);

        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute("content", newResolvedTheme === "dark" ? "#000000" : "#ffffff");
        }
    };

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem(STORAGE_KEY, newTheme);
        const resolved = resolveTheme(newTheme);
        setResolvedTheme(resolved);
        applyTheme(resolved);
    };

    useEffect(() => {
        try {
            const storedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
            const initialTheme: Theme = storedTheme && ["light", "dark", "system"].includes(storedTheme)
                ? storedTheme
                : "system";

            setThemeState(initialTheme);
            const resolved = resolveTheme(initialTheme);
            setResolvedTheme(resolved);
            applyTheme(resolved);
        } catch (error) {
            console.error("Failed to load theme preference:", error);
            const resolved = getSystemTheme();
            setResolvedTheme(resolved);
            applyTheme(resolved);
        }

        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            if (theme === "system") {
                const newResolvedTheme = e.matches ? "dark" : "light";
                setResolvedTheme(newResolvedTheme);
                applyTheme(newResolvedTheme);
            }
        };

        try {
            mediaQuery.addEventListener("change", handleSystemThemeChange);
        } catch (error) {
            console.error("Failed to add system theme change listener:", error);
        }

        return () => {
            try {
                mediaQuery.removeEventListener("change", handleSystemThemeChange);
            } catch (error) {
                console.error("Failed to remove system theme change listener:", error);
            }
        };
    }, [theme, mounted]);

    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
