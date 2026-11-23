import { Head, Link, usePage } from "@inertiajs/react";
import { dashboard, login, register } from "@/routes";
import type { Auth } from "@/types";
import { type SubmitEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Moon, Pencil, Sun, Trash2, X } from "lucide-react";

interface Item {
    id: number;
    title: string;
}

export default function Welcome() {
    const { auth } = usePage<{ auth: Auth }>().props;

    // --- START: Add dark mode state & effect here ---
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof window === "undefined") return false;
        const saved = localStorage.getItem("appearance");
        if (saved === "dark") return true;
        if (saved === "light") return false;
        return document.documentElement.classList.contains("dark");
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("appearance", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("appearance", "light");
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);
    // --- END: Dark mode state & effect ---//

    const [title, setTitle] = useState("");

    const [items, setItems] = useState<Item[]>([]);

    const handleCreate = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title.trim()) return;

        const newItem: Item = {
            id: Date.now(),
            title: title.trim(),
        };

        setItems([newItem, ...items]);
        setTitle("");
    };

    const [editingId, setEditingId] = useState<number | null>(null);
    const [editTitle, setEditTitle] = useState("");

    const startEditing = (item: Item) => {
        setEditingId(item.id);
        setEditTitle(item.title);
    };

    const handleUpdate = (id: number) => {
        if (!editTitle.trim()) return;

        setItems(
            items.map((item) =>
                item.id === id ? { ...item, title: editTitle.trim() } : item,
            ),
        );
        setEditingId(null);
    };

    const handleDelete = (id: number) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 pb-20 text-[#1b1b18] lg:p-8 lg:pb-24 dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
                <header className="mb-24 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:bg-black/5 dark:text-[#EDEDEC]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:bg-black/5 dark:text-[#EDEDEC]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={register()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:bg-black/5 dark:text-[#EDEDEC]"
                                >
                                    Register
                                </Link>
                            </>
                        )}

                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={
                                isDark
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                            className="inline-flex h-8.5 w-8.5 items-center justify-center rounded-sm border border-transparent text-[#1b1b18] hover:bg-black/5 dark:text-[#EDEDEC] dark:hover:bg-white/10"
                        >
                            {isDark ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <Moon className="h-4 w-4" />
                            )}
                        </button>
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="w-full max-w-[335px] space-y-6 lg:max-w-4xl">
                        {/* Your existing Create Item <Card> stays right here */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Create Item</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form
                                    onSubmit={handleCreate}
                                    className="flex flex-col gap-3 sm:flex-row"
                                >
                                    <Input
                                        type="text"
                                        placeholder="Enter title..."
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        className="flex-1"
                                    />
                                    <Button type="submit">Create</Button>
                                </form>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Items ({items.length})</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {items.length === 0 ? (
                                    <p className="text-sm text-muted-foreground">
                                        No items yet. Add your first title
                                        above.
                                    </p>
                                ) : (
                                    <ul className="divide-y">
                                        {items.map((item) => (
                                            <li
                                                key={item.id}
                                                className="flex items-center justify-between gap-3 py-3 text-sm"
                                            >
                                                {editingId === item.id ? (
                                                    <div className="flex flex-1 items-center gap-2">
                                                        <Input
                                                            type="text"
                                                            value={editTitle}
                                                            onChange={(e) =>
                                                                setEditTitle(
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            onKeyDown={(e) => {
                                                                if (
                                                                    e.key ===
                                                                    "Enter"
                                                                ) {
                                                                    handleUpdate(
                                                                        item.id,
                                                                    );
                                                                }
                                                                if (
                                                                    e.key ===
                                                                    "Escape"
                                                                ) {
                                                                    setEditingId(
                                                                        null,
                                                                    );
                                                                }
                                                            }}
                                                            className="h-8 flex-1"
                                                            autoFocus
                                                        />
                                                        <Button
                                                            type="button"
                                                            size="icon"
                                                            variant="ghost"
                                                            className="h-8 w-8 shrink-0"
                                                            onClick={() =>
                                                                handleUpdate(
                                                                    item.id,
                                                                )
                                                            }
                                                            aria-label="Save item"
                                                        >
                                                            <Check className="h-4 w-4" />
                                                        </Button>
                                                        <Button
                                                            type="button"
                                                            size="icon"
                                                            variant="ghost"
                                                            className="h-8 w-8 shrink-0"
                                                            onClick={() =>
                                                                setEditingId(
                                                                    null,
                                                                )
                                                            }
                                                            aria-label="Cancel editing"
                                                        >
                                                            <X className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <span className="truncate font-medium">
                                                            {item.title}
                                                        </span>
                                                        <div className="flex shrink-0 items-center gap-1">
                                                            <Button
                                                                type="button"
                                                                size="icon"
                                                                variant="ghost"
                                                                className="h-8 w-8"
                                                                onClick={() =>
                                                                    startEditing(
                                                                        item,
                                                                    )
                                                                }
                                                                aria-label="Edit item"
                                                            >
                                                                <Pencil className="h-4 w-4" />
                                                            </Button>
                                                            <Button
                                                                type="button"
                                                                size="icon"
                                                                variant="ghost"
                                                                className="h-8 w-8"
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        item.id,
                                                                    )
                                                                }
                                                                aria-label="Delete item"
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </div>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </CardContent>
                        </Card>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
