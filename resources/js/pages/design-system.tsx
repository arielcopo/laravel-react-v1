import { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import {
    ArrowRight,
    Bold,
    Check,
    ChevronDown,
    ChevronsUpDown,
    FileText,
    Info,
    Italic,
    Moon,
    Pencil,
    Plus,
    Search,
    Sun,
    Terminal,
    Trash2,
    Underline,
} from "lucide-react";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Calendar } from "@/components/ui/calendar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { DirectionProvider } from "@/components/ui/direction";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupText,
} from "@/components/ui/input-group";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemTitle,
} from "@/components/ui/item";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Label } from "@/components/ui/label";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";
import {
    NativeSelect,
    NativeSelectOption,
} from "@/components/ui/native-select";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { home } from "@/routes";

const ACCORDION_ITEMS = [
    {
        id: "quote-calc",
        title: "How is base coating price calculated?",
        content:
            "Base pricing combines surface area (sq ft / sq m), selected coating system, and surface prep tier before discounts or tax.",
    },
    {
        id: "revisions",
        title: "Can customers revise line items before approval?",
        content:
            "Yes. Draft quotes can have quantities, finish tiers, and notes updated until a quote is marked as sent or approved.",
    },
    {
        id: "tree-shaking",
        title: "Do unused UI components bloat production builds?",
        content:
            "Vite tree-shakes unused exports during npm run build, so only components imported in active app pages are bundled.",
    },
];

export default function DesignSystem() {
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof window === "undefined") return false;
        const saved = localStorage.getItem("appearance");
        if (saved === "dark") return true;
        if (saved === "light") return false;
        return document.documentElement.classList.contains("dark");
    });

    const [openAccordionId, setOpenAccordionId] = useState<string | null>(
        "quote-calc",
    );
    const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
    const [comboOpen, setComboOpen] = useState(false);
    const [selectedCoating, setSelectedCoating] = useState("Epoxy Primer");
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [sliderVal, setSliderVal] = useState<number[]>([65]);

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

    const toggleAccordion = (id: string) => {
        setOpenAccordionId((prev) => (prev === id ? null : id));
    };

    return (
        <>
            <Head title="Design System" />

            <div className="min-h-screen bg-background text-foreground">
                {/* Top Navigation Bar */}
                <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
                    <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                        <div>
                            <h1 className="text-lg font-semibold tracking-tight">
                                UI Design System Guide
                            </h1>
                            <p className="text-xs text-muted-foreground">
                                Complete shadcn/ui &amp; Tailwind CSS v4
                                monochrome reference
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link
                                href={home()}
                                className="rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent"
                            >
                                Back to Home
                            </Link>

                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={toggleTheme}
                                aria-label={
                                    isDark
                                        ? "Switch to light mode"
                                        : "Switch to dark mode"
                                }
                            >
                                {isDark ? (
                                    <Sun className="h-4 w-4" />
                                ) : (
                                    <Moon className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Vertical Component Sections (Alphabetical) */}
                <main className="mx-auto max-w-5xl space-y-12 px-6 py-10 pb-24">
                    {/* 1. ACCORDION */}
                    <section aria-labelledby="section-accordion">
                        <h2
                            id="section-accordion"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Accordion
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="divide-y divide-border rounded-lg border border-border">
                            {ACCORDION_ITEMS.map((item) => {
                                const isOpen = openAccordionId === item.id;
                                return (
                                    <div key={item.id}>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                toggleAccordion(item.id)
                                            }
                                            aria-expanded={isOpen}
                                            className="flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-medium hover:bg-muted/50"
                                        >
                                            <span>{item.title}</span>
                                            <ChevronDown
                                                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                                                    isOpen ? "rotate-180" : ""
                                                }`}
                                            />
                                        </button>
                                        {isOpen && (
                                            <div className="border-t border-border bg-muted/20 px-4 py-3 text-sm text-muted-foreground">
                                                {item.content}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* 2. ALERT */}
                    <section aria-labelledby="section-alert">
                        <h2
                            id="section-alert"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Alert
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-1.5">
                                <Alert>
                                    <Terminal className="h-4 w-4" />
                                    <AlertTitle>Quote Draft Saved</AlertTitle>
                                    <AlertDescription>
                                        Your coating estimate has been saved to
                                        local state.
                                    </AlertDescription>
                                </Alert>
                                <span className="block text-xs text-muted-foreground">
                                    default
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <Alert className="border-foreground/30 bg-muted/50">
                                    <Info className="h-4 w-4" />
                                    <AlertTitle>Monochrome Notice</AlertTitle>
                                    <AlertDescription>
                                        Styled with neutral gray surfaces and
                                        high-contrast borders.
                                    </AlertDescription>
                                </Alert>
                                <span className="block text-xs text-muted-foreground">
                                    muted / high-contrast border
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 3. ALERT DIALOG */}
                    <section aria-labelledby="section-alert-dialog">
                        <h2
                            id="section-alert-dialog"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Alert Dialog
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline">
                                    Confirm Quote Archive
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Archive Quote QT-2026-004?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This removes the quote from active
                                        client submissions while keeping its
                                        pricing history intact.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction>
                                        Continue
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </section>

                    {/* 4. ASPECT RATIO */}
                    <section aria-labelledby="section-aspect-ratio">
                        <h2
                            id="section-aspect-ratio"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Aspect Ratio
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="max-w-sm space-y-1.5">
                            <AspectRatio
                                ratio={16 / 9}
                                className="flex items-center justify-center rounded-lg border border-border bg-muted/40 text-xs text-muted-foreground"
                            >
                                16 : 9 Surface Preview Container
                            </AspectRatio>
                            <span className="block text-xs text-muted-foreground">
                                ratio=&#123;16 / 9&#125;
                            </span>
                        </div>
                    </section>

                    {/* 5. AVATAR */}
                    <section aria-labelledby="section-avatar">
                        <h2
                            id="section-avatar"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Avatar
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="flex flex-wrap items-end gap-8">
                            <div className="flex flex-col items-center gap-1.5">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="text-xs">
                                        AC
                                    </AvatarFallback>
                                </Avatar>
                                <span className="text-xs text-muted-foreground">
                                    sm (h-8 w-8)
                                </span>
                            </div>

                            <div className="flex flex-col items-center gap-1.5">
                                <Avatar>
                                    <AvatarImage
                                        src="https://github.com/shadcn.png"
                                        alt="User avatar"
                                        className="grayscale"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span className="text-xs text-muted-foreground">
                                    default (grayscale image)
                                </span>
                            </div>

                            <div className="flex flex-col items-center gap-1.5">
                                <Avatar className="h-12 w-12">
                                    <AvatarFallback>QA</AvatarFallback>
                                </Avatar>
                                <span className="text-xs text-muted-foreground">
                                    lg fallback (h-12 w-12)
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 6. BADGE */}
                    <section aria-labelledby="section-badge">
                        <h2
                            id="section-badge"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Badge
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="flex flex-wrap items-start gap-6">
                            <div className="flex flex-col items-center gap-1.5">
                                <Badge variant="default">Default</Badge>
                                <span className="text-xs text-muted-foreground">
                                    default
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                                <Badge variant="secondary">Secondary</Badge>
                                <span className="text-xs text-muted-foreground">
                                    secondary
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                                <Badge variant="outline">Outline</Badge>
                                <span className="text-xs text-muted-foreground">
                                    outline
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                                <Badge
                                    variant="outline"
                                    className="gap-1 border-foreground/40"
                                >
                                    <Check className="h-3 w-3" />
                                    Approved
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                    with icon
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 7. BREADCRUMB */}
                    <section aria-labelledby="section-breadcrumb">
                        <h2
                            id="section-breadcrumb"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Breadcrumb
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="space-y-1.5">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="#">
                                            Quotes
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="#">
                                            Industrial Epoxy
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>
                                            QT-2026-001
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                            <span className="block text-xs text-muted-foreground">
                                default path trail
                            </span>
                        </div>
                    </section>

                    {/* 8. BUTTON */}
                    <section aria-labelledby="section-button">
                        <h2
                            id="section-button"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Button
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="space-y-6">
                            <div>
                                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    Monochrome Variants
                                </p>
                                <div className="flex flex-wrap items-start gap-6">
                                    <div className="flex flex-col items-center gap-1.5">
                                        <Button variant="default">
                                            Default
                                        </Button>
                                        <span className="text-xs text-muted-foreground">
                                            default
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5">
                                        <Button variant="secondary">
                                            Secondary
                                        </Button>
                                        <span className="text-xs text-muted-foreground">
                                            secondary
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5">
                                        <Button variant="outline">
                                            Outline
                                        </Button>
                                        <span className="text-xs text-muted-foreground">
                                            outline
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5">
                                        <Button variant="ghost">Ghost</Button>
                                        <span className="text-xs text-muted-foreground">
                                            ghost
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5">
                                        <Button variant="link">Link</Button>
                                        <span className="text-xs text-muted-foreground">
                                            link
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    Sizes &amp; Icons
                                </p>
                                <div className="flex flex-wrap items-end gap-6">
                                    <div className="flex flex-col items-center gap-1.5">
                                        <Button size="sm">Small</Button>
                                        <span className="text-xs text-muted-foreground">
                                            size=&quot;sm&quot;
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5">
                                        <Button size="default">Default</Button>
                                        <span className="text-xs text-muted-foreground">
                                            size=&quot;default&quot;
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5">
                                        <Button size="lg">Large</Button>
                                        <span className="text-xs text-muted-foreground">
                                            size=&quot;lg&quot;
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5">
                                        <Button>
                                            <Plus className="h-4 w-4" />
                                            Add Item
                                        </Button>
                                        <span className="text-xs text-muted-foreground">
                                            leading icon
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5">
                                        <Button variant="outline">
                                            Continue
                                            <ArrowRight className="h-4 w-4" />
                                        </Button>
                                        <span className="text-xs text-muted-foreground">
                                            trailing icon
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            aria-label="Delete sample"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                        <span className="text-xs text-muted-foreground">
                                            size=&quot;icon&quot;
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5">
                                        <Button disabled>Disabled</Button>
                                        <span className="text-xs text-muted-foreground">
                                            disabled
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 9. BUTTON GROUP */}
                    <section aria-labelledby="section-button-group">
                        <h2
                            id="section-button-group"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Button Group
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="space-y-1.5">
                            <ButtonGroup>
                                <Button variant="outline" size="sm">
                                    Draft
                                </Button>
                                <Button variant="outline" size="sm">
                                    Pending
                                </Button>
                                <Button variant="outline" size="sm">
                                    Approved
                                </Button>
                            </ButtonGroup>
                            <span className="block text-xs text-muted-foreground">
                                grouped status filter controls
                            </span>
                        </div>
                    </section>

                    {/* 10. CALENDAR */}
                    <section aria-labelledby="section-calendar">
                        <h2
                            id="section-calendar"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Calendar
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="inline-block space-y-1.5">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-lg border border-border"
                            />
                            <span className="block text-xs text-muted-foreground">
                                single date selection (also powers Date Picker)
                            </span>
                        </div>
                    </section>

                    {/* 11. CARD */}
                    <section aria-labelledby="section-card">
                        <h2
                            id="section-card"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Card
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="grid gap-6 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Standard Quote Card</CardTitle>
                                    <CardDescription>
                                        CardHeader, CardTitle, CardDescription,
                                        CardContent, and CardFooter.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    Surface Area: 1,250 sq. ft. &bull; Two-Coat
                                    Polyurethane System
                                </CardContent>
                                <CardFooter className="justify-between border-t border-border pt-4">
                                    <span className="text-sm font-medium">
                                        $3,450.00
                                    </span>
                                    <Button size="sm" variant="outline">
                                        Inspect
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card className="bg-muted/30">
                                <CardHeader>
                                    <CardTitle>Subtle Gray Surface</CardTitle>
                                    <CardDescription>
                                        Using bg-muted/30 for secondary panels
                                        or summary totals.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    Ideal for grouping read-only breakdown
                                    figures alongside an active form card.
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* 12. CAROUSEL */}
                    <section aria-labelledby="section-carousel">
                        <h2
                            id="section-carousel"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Carousel
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="mx-auto max-w-md px-10">
                            <Carousel>
                                <CarouselContent>
                                    {[
                                        "Tier 1: Standard Epoxy",
                                        "Tier 2: High-Build Polyurethane",
                                        "Tier 3: Chemical-Resistant Novolac",
                                    ].map((tier, index) => (
                                        <CarouselItem key={tier}>
                                            <div className="flex h-28 flex-col items-center justify-center rounded-lg border border-border bg-muted/20 p-4 text-center">
                                                <span className="text-xs text-muted-foreground">
                                                    Slide {index + 1}
                                                </span>
                                                <span className="mt-1 text-sm font-medium">
                                                    {tier}
                                                </span>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </section>

                    {/* 13. CHART & DIRECTION */}
                    <section aria-labelledby="section-chart-direction">
                        <h2
                            id="section-chart-direction"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Chart &amp; Direction
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-1.5 rounded-lg border border-border p-4">
                                <p className="text-sm font-medium">
                                    Monochrome Bar Preview (ChartContainer
                                    ready)
                                </p>
                                <div className="flex h-24 items-end gap-3 pt-4">
                                    {[40, 70, 55, 90, 65].map((height, i) => (
                                        <div
                                            key={i}
                                            style={{ height: `${height}%` }}
                                            className="flex-1 rounded-t-sm bg-foreground/80"
                                        />
                                    ))}
                                </div>
                                <span className="block text-xs text-muted-foreground">
                                    chart.tsx (Recharts wrapper installed)
                                </span>
                            </div>

                            <div className="space-y-1.5 rounded-lg border border-border p-4">
                                <DirectionProvider dir="ltr">
                                    <p className="text-sm font-medium">
                                        DirectionProvider (LTR / RTL wrapper)
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Wraps components when switching reading
                                        direction.
                                    </p>
                                </DirectionProvider>
                                <span className="block pt-4 text-xs text-muted-foreground">
                                    direction.tsx
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 14. CHECKBOX */}
                    <section aria-labelledby="section-checkbox">
                        <h2
                            id="section-checkbox"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Checkbox
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="flex flex-wrap items-center gap-8">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="chk-unchecked" />
                                <Label htmlFor="chk-unchecked">Unchecked</Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox id="chk-checked" defaultChecked />
                                <Label htmlFor="chk-checked">
                                    Checked (defaultChecked)
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox id="chk-disabled" disabled />
                                <Label
                                    htmlFor="chk-disabled"
                                    className="text-muted-foreground"
                                >
                                    Disabled
                                </Label>
                            </div>
                        </div>
                    </section>

                    {/* 15. COLLAPSIBLE */}
                    <section aria-labelledby="section-collapsible">
                        <h2
                            id="section-collapsible"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Collapsible
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <Collapsible
                            open={isCollapsibleOpen}
                            onOpenChange={setIsCollapsibleOpen}
                            className="max-w-md space-y-2 rounded-lg border border-border p-4"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">
                                    Optional Surface Prep Add-ons (3 items)
                                </span>
                                <CollapsibleTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        aria-label="Toggle add-ons"
                                    >
                                        <ChevronsUpDown className="h-4 w-4" />
                                    </Button>
                                </CollapsibleTrigger>
                            </div>
                            <div className="rounded-md border border-border px-3 py-2 text-sm">
                                Diamond Grinding &amp; Dust Extraction
                            </div>
                            <CollapsibleContent className="space-y-2">
                                <div className="rounded-md border border-border px-3 py-2 text-sm">
                                    Crack Chasing &amp; Epoxy Joint Filler
                                </div>
                                <div className="rounded-md border border-border px-3 py-2 text-sm">
                                    Moisture Vapor Barrier Primer
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    </section>

                    {/* 16. COMBOBOX */}
                    <section aria-labelledby="section-combobox">
                        <h2
                            id="section-combobox"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Combobox
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="space-y-1.5">
                            <Popover
                                open={comboOpen}
                                onOpenChange={setComboOpen}
                            >
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={comboOpen}
                                        className="w-64 justify-between"
                                    >
                                        {selectedCoating}
                                        <ChevronsUpDown className="h-4 w-4 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-64 p-0">
                                    <Command>
                                        <CommandInput placeholder="Search coating..." />
                                        <CommandList>
                                            <CommandEmpty>
                                                No coating found.
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {[
                                                    "Epoxy Primer",
                                                    "Polyurethane Topcoat",
                                                    "Zinc-Rich Primer",
                                                    "Acrylic Enamel",
                                                ].map((item) => (
                                                    <CommandItem
                                                        key={item}
                                                        value={item}
                                                        onSelect={(val) => {
                                                            setSelectedCoating(
                                                                val,
                                                            );
                                                            setComboOpen(false);
                                                        }}
                                                    >
                                                        <Check
                                                            className={`mr-2 h-4 w-4 ${
                                                                selectedCoating ===
                                                                item
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            }`}
                                                        />
                                                        {item}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <span className="block text-xs text-muted-foreground">
                                searchable popover + command select
                            </span>
                        </div>
                    </section>

                    {/* 17. COMMAND */}
                    <section aria-labelledby="section-command">
                        <h2
                            id="section-command"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Command
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <Command className="max-w-md rounded-lg border border-border">
                            <CommandInput placeholder="Filter actions or materials..." />
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup heading="Quick Actions">
                                    <CommandItem>New Quote Draft</CommandItem>
                                    <CommandItem>
                                        Calculate Square Footage
                                    </CommandItem>
                                    <CommandItem>Export Quote PDF</CommandItem>
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </section>

                    {/* 18. CONTEXT MENU */}
                    <section aria-labelledby="section-context-menu">
                        <h2
                            id="section-context-menu"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Context Menu
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <ContextMenu>
                            <ContextMenuTrigger className="flex h-28 max-w-md items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground">
                                Right-click inside this box
                            </ContextMenuTrigger>
                            <ContextMenuContent className="w-48">
                                <ContextMenuItem>
                                    Duplicate Line Item
                                    <ContextMenuShortcut>
                                        ⌘D
                                    </ContextMenuShortcut>
                                </ContextMenuItem>
                                <ContextMenuItem>
                                    Edit Unit Rate
                                </ContextMenuItem>
                                <ContextMenuSeparator />
                                <ContextMenuItem>Remove Row</ContextMenuItem>
                            </ContextMenuContent>
                        </ContextMenu>
                    </section>

                    {/* 19. DIALOG */}
                    <section aria-labelledby="section-dialog">
                        <h2
                            id="section-dialog"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Dialog
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Open Dialog</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Edit Coating Rate</DialogTitle>
                                    <DialogDescription>
                                        Update the base price per square foot
                                        for this quote line item.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-2 py-2">
                                    <Label htmlFor="dialog-rate">
                                        Rate ($ / sq. ft.)
                                    </Label>
                                    <Input
                                        id="dialog-rate"
                                        defaultValue="2.75"
                                    />
                                </div>
                                <DialogFooter>
                                    <Button type="button">Save Changes</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </section>

                    {/* 20. DRAWER */}
                    <section aria-labelledby="section-drawer">
                        <h2
                            id="section-drawer"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Drawer
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button variant="outline">Open Drawer</Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <div className="mx-auto w-full max-w-md">
                                    <DrawerHeader>
                                        <DrawerTitle>
                                            Quote Summary Breakdown
                                        </DrawerTitle>
                                        <DrawerDescription>
                                            Slide-up bottom sheet for mobile or
                                            quick totals.
                                        </DrawerDescription>
                                    </DrawerHeader>
                                    <div className="px-4 py-2 text-sm text-muted-foreground">
                                        Subtotal: $3,200.00 &bull; Prep Fee:
                                        $250.00
                                    </div>
                                    <DrawerFooter>
                                        <Button>Confirm Quote</Button>
                                        <DrawerClose asChild>
                                            <Button variant="outline">
                                                Close
                                            </Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </section>

                    {/* 21. DROPDOWN MENU */}
                    <section aria-labelledby="section-dropdown-menu">
                        <h2
                            id="section-dropdown-menu"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Dropdown Menu
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">Quote Actions</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-48">
                                <DropdownMenuLabel>
                                    Manage Quote
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Edit Items</DropdownMenuItem>
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                <DropdownMenuItem>Archive</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </section>

                    {/* 22. EMPTY */}
                    <section aria-labelledby="section-empty">
                        <h2
                            id="section-empty"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Empty
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <Empty className="max-w-md border border-dashed border-border">
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                    <FileText className="h-4 w-4" />
                                </EmptyMedia>
                                <EmptyTitle>No Quotes Created Yet</EmptyTitle>
                                <EmptyDescription>
                                    Create your first surface coating estimate
                                    to populate this list.
                                </EmptyDescription>
                            </EmptyHeader>
                            <EmptyContent>
                                <Button size="sm">Create Quote</Button>
                            </EmptyContent>
                        </Empty>
                    </section>

                    {/* 23. FIELD */}
                    <section aria-labelledby="section-field">
                        <h2
                            id="section-field"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Field
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <FieldGroup className="max-w-md">
                            <Field>
                                <FieldLabel htmlFor="field-project">
                                    Project Name
                                </FieldLabel>
                                <Input
                                    id="field-project"
                                    placeholder="Warehouse Floor Coating"
                                />
                                <FieldDescription>
                                    Appears on the customer PDF header.
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </section>

                    {/* 24. HOVER CARD */}
                    <section aria-labelledby="section-hover-card">
                        <h2
                            id="section-hover-card"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Hover Card
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Button variant="link" className="px-0">
                                    Hover to preview @industrial-epoxy
                                </Button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-72">
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">
                                        Industrial Two-Part Epoxy
                                    </h4>
                                    <p className="text-xs text-muted-foreground">
                                        Coverage: 250 sq. ft. per gallon &bull;
                                        Cure time: 24 hours.
                                    </p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </section>

                    {/* 25. INPUT, INPUT GROUP & INPUT OTP */}
                    <section aria-labelledby="section-input">
                        <h2
                            id="section-input"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Input / Input Group / Input OTP
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="grid max-w-2xl gap-6 sm:grid-cols-2">
                            <div className="space-y-1.5">
                                <Input placeholder="Default text input..." />
                                <span className="block text-xs text-muted-foreground">
                                    Input (default)
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <Input
                                    disabled
                                    placeholder="Disabled input..."
                                />
                                <span className="block text-xs text-muted-foreground">
                                    Input (disabled)
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <InputGroup>
                                    <InputGroupAddon>
                                        <InputGroupText>$</InputGroupText>
                                    </InputGroupAddon>
                                    <InputGroupInput placeholder="0.00" />
                                    <InputGroupAddon align="inline-end">
                                        <Search className="h-4 w-4 text-muted-foreground" />
                                    </InputGroupAddon>
                                </InputGroup>
                                <span className="block text-xs text-muted-foreground">
                                    InputGroup (prefix &amp; trailing icon)
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <InputOTP maxLength={6}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                                <span className="block text-xs text-muted-foreground">
                                    InputOTP (6-digit quote code)
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 26. ITEM */}
                    <section aria-labelledby="section-item">
                        <h2
                            id="section-item"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Item
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <Item variant="outline" className="max-w-lg">
                            <ItemContent>
                                <ItemTitle>Surface Shot Blasting</ItemTitle>
                                <ItemDescription>
                                    1,000 sq. ft. &times; $0.85 / sq. ft.
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <span className="text-sm font-medium tabular-nums">
                                    $850.00
                                </span>
                            </ItemActions>
                        </Item>
                    </section>

                    {/* 27. KBD & LABEL */}
                    <section aria-labelledby="section-kbd-label">
                        <h2
                            id="section-kbd-label"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Kbd &amp; Label
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="flex flex-wrap items-center gap-10">
                            <div className="space-y-1.5">
                                <KbdGroup>
                                    <Kbd>Ctrl</Kbd>
                                    <span>+</span>
                                    <Kbd>S</Kbd>
                                </KbdGroup>
                                <span className="block text-xs text-muted-foreground">
                                    Kbd / KbdGroup
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="sample-label-input">
                                    Standard Form Label
                                </Label>
                                <span className="block text-xs text-muted-foreground">
                                    Label
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 28. MENUBAR & NAVIGATION MENU */}
                    <section aria-labelledby="section-menus">
                        <h2
                            id="section-menus"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Menubar &amp; Navigation Menu
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="flex flex-wrap items-start gap-8">
                            <div className="space-y-1.5">
                                <Menubar>
                                    <MenubarMenu>
                                        <MenubarTrigger>File</MenubarTrigger>
                                        <MenubarContent>
                                            <MenubarItem>New Quote</MenubarItem>
                                            <MenubarSeparator />
                                            <MenubarItem>
                                                Export CSV
                                            </MenubarItem>
                                        </MenubarContent>
                                    </MenubarMenu>
                                    <MenubarMenu>
                                        <MenubarTrigger>View</MenubarTrigger>
                                        <MenubarContent>
                                            <MenubarItem>
                                                Compact Rows
                                            </MenubarItem>
                                            <MenubarItem>
                                                Show Margin
                                            </MenubarItem>
                                        </MenubarContent>
                                    </MenubarMenu>
                                </Menubar>
                                <span className="block text-xs text-muted-foreground">
                                    Menubar
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink
                                                href="#"
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                Products
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink
                                                href="#"
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                Clients
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                                <span className="block text-xs text-muted-foreground">
                                    NavigationMenu
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 29. NATIVE SELECT & SELECT */}
                    <section aria-labelledby="section-selects">
                        <h2
                            id="section-selects"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Native Select &amp; Select
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="grid max-w-xl gap-6 sm:grid-cols-2">
                            <div className="space-y-1.5">
                                <NativeSelect defaultValue="sqft">
                                    <NativeSelectOption value="sqft">
                                        Square Feet (sq. ft.)
                                    </NativeSelectOption>
                                    <NativeSelectOption value="sqm">
                                        Square Meters (sq. m.)
                                    </NativeSelectOption>
                                </NativeSelect>
                                <span className="block text-xs text-muted-foreground">
                                    NativeSelect
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <Select defaultValue="gloss">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose finish" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="matte">
                                            Matte Finish
                                        </SelectItem>
                                        <SelectItem value="satin">
                                            Satin Finish
                                        </SelectItem>
                                        <SelectItem value="gloss">
                                            High-Gloss Finish
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <span className="block text-xs text-muted-foreground">
                                    Select (shadcn custom trigger)
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 30. PAGINATION & POPOVER */}
                    <section aria-labelledby="section-pagination-popover">
                        <h2
                            id="section-pagination-popover"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Pagination &amp; Popover
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="flex flex-wrap items-center justify-between gap-6">
                            <div className="space-y-1.5">
                                <Pagination className="mx-0 w-auto">
                                    <PaginationContent>
                                        <PaginationItem>
                                            <PaginationPrevious href="#" />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#" isActive>
                                                1
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">
                                                2
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationNext href="#" />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                                <span className="block text-xs text-muted-foreground">
                                    Pagination
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline">
                                            Open Popover
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-64 text-sm">
                                        Configure tax rate or discount
                                        multiplier for this quote.
                                    </PopoverContent>
                                </Popover>
                                <span className="block text-xs text-muted-foreground">
                                    Popover
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 31. PROGRESS, RADIO GROUP & SLIDER */}
                    <section aria-labelledby="section-controls">
                        <h2
                            id="section-controls"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Progress / Radio Group / Slider
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="space-y-2">
                                <Progress value={68} />
                                <span className="block text-xs text-muted-foreground">
                                    Progress (68%)
                                </span>
                            </div>

                            <div className="space-y-2">
                                <RadioGroup defaultValue="standard">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value="standard"
                                            id="r-standard"
                                        />
                                        <Label htmlFor="r-standard">
                                            Standard Cure
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value="fast"
                                            id="r-fast"
                                        />
                                        <Label htmlFor="r-fast">
                                            Fast-Cure Additive
                                        </Label>
                                    </div>
                                </RadioGroup>
                                <span className="block text-xs text-muted-foreground">
                                    RadioGroup
                                </span>
                            </div>

                            <div className="space-y-2">
                                <Slider
                                    value={sliderVal}
                                    onValueChange={setSliderVal}
                                    max={100}
                                    step={5}
                                />
                                <span className="block text-xs text-muted-foreground">
                                    Slider ({sliderVal[0]}% coverage buffer)
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 32. RESIZABLE, SCROLL AREA & SEPARATOR */}
                    <section aria-labelledby="section-layout-helpers">
                        <h2
                            id="section-layout-helpers"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Resizable / Scroll Area / Separator
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-1.5">
                                <ResizablePanelGroup
                                    orientation="horizontal"
                                    className="h-32 rounded-lg border border-border"
                                >
                                    <ResizablePanel defaultSize={50}>
                                        <div className="flex h-full items-center justify-center p-4 text-xs">
                                            Line Items Panel
                                        </div>
                                    </ResizablePanel>
                                    <ResizableHandle withHandle />
                                    <ResizablePanel defaultSize={50}>
                                        <div className="flex h-full items-center justify-center p-4 text-xs">
                                            Live Totals Panel
                                        </div>
                                    </ResizablePanel>
                                </ResizablePanelGroup>
                                <span className="block text-xs text-muted-foreground">
                                    ResizablePanelGroup
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <ScrollArea className="h-32 rounded-lg border border-border p-3">
                                    <div className="space-y-2 text-xs">
                                        <p className="font-medium">
                                            Coating Specifications
                                        </p>
                                        <Separator />
                                        <p className="text-muted-foreground">
                                            1. Mechanical surface preparation
                                        </p>
                                        <Separator />
                                        <p className="text-muted-foreground">
                                            2. Moisture barrier primer coat
                                        </p>
                                        <Separator />
                                        <p className="text-muted-foreground">
                                            3. High-build epoxy base coat
                                        </p>
                                        <Separator />
                                        <p className="text-muted-foreground">
                                            4. UV-stable aliphatic topcoat
                                        </p>
                                    </div>
                                </ScrollArea>
                                <span className="block text-xs text-muted-foreground">
                                    ScrollArea + Separator
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 33. SHEET, SKELETON, SONNER (TOAST), SPINNER & SWITCH */}
                    <section aria-labelledby="section-feedback-overlays">
                        <h2
                            id="section-feedback-overlays"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Sheet / Skeleton / Sonner / Spinner / Switch
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="flex flex-wrap items-center gap-8">
                            <div className="space-y-1.5">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="outline">
                                            Open Sheet
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle>
                                                Quote Revision History
                                            </SheetTitle>
                                            <SheetDescription>
                                                Side slide-over panel for audit
                                                logs or item details.
                                            </SheetDescription>
                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>
                                <span className="block text-xs text-muted-foreground">
                                    Sheet
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <Button
                                    variant="outline"
                                    onClick={() =>
                                        toast("Quote QT-2026-001 updated")
                                    }
                                >
                                    Trigger Toast
                                </Button>
                                <span className="block text-xs text-muted-foreground">
                                    Sonner (Toast)
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex items-center gap-2">
                                    <Skeleton className="h-8 w-8 rounded-full" />
                                    <div className="space-y-1.5">
                                        <Skeleton className="h-3 w-28" />
                                        <Skeleton className="h-3 w-20" />
                                    </div>
                                </div>
                                <span className="block text-xs text-muted-foreground">
                                    Skeleton
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex h-8 items-center gap-2">
                                    <Spinner className="h-4 w-4" />
                                    <span className="text-xs">Loading</span>
                                </div>
                                <span className="block text-xs text-muted-foreground">
                                    Spinner
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex h-8 items-center space-x-2">
                                    <Switch id="include-tax" defaultChecked />
                                    <Label htmlFor="include-tax">
                                        Include VAT
                                    </Label>
                                </div>
                                <span className="block text-xs text-muted-foreground">
                                    Switch
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 34. TABLE (ADMIN QUOTING PREVIEW) */}
                    <section aria-labelledby="section-table">
                        <h2
                            id="section-table"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Table (Admin Quoting Preview)
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="rounded-lg border border-border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Quote ID</TableHead>
                                        <TableHead>Client</TableHead>
                                        <TableHead>Coating System</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">
                                            Total
                                        </TableHead>
                                        <TableHead className="text-right">
                                            Actions
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        {
                                            id: "QT-2026-001",
                                            client: "Apex Logistics Hub",
                                            system: "Heavy-Duty Epoxy (3-Coat)",
                                            status: "Approved",
                                            total: "$8,450.00",
                                        },
                                        {
                                            id: "QT-2026-002",
                                            client: "Northport Cold Storage",
                                            system: "Polyurethane Cement",
                                            status: "Pending",
                                            total: "$12,900.00",
                                        },
                                    ].map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell className="font-mono text-xs">
                                                {row.id}
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                {row.client}
                                            </TableCell>
                                            <TableCell className="text-muted-foreground">
                                                {row.system}
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant={
                                                        row.status ===
                                                        "Approved"
                                                            ? "default"
                                                            : "outline"
                                                    }
                                                >
                                                    {row.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right font-medium tabular-nums">
                                                {row.total}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="inline-flex items-center gap-1">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        aria-label="Approve quote"
                                                    >
                                                        <Check className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        aria-label="Edit quote"
                                                    >
                                                        <Pencil className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        aria-label="Delete quote"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </section>

                    {/* 35. TABS, TEXTAREA, TOGGLE, TOGGLE GROUP & TOOLTIP */}
                    <section aria-labelledby="section-tabs-textarea-toggles">
                        <h2
                            id="section-tabs-textarea-toggles"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Tabs / Textarea / Toggle / Tooltip
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="space-y-4">
                                <Tabs defaultValue="items">
                                    <TabsList>
                                        <TabsTrigger value="items">
                                            Line Items
                                        </TabsTrigger>
                                        <TabsTrigger value="notes">
                                            Scope Notes
                                        </TabsTrigger>
                                    </TabsList>
                                    <TabsContent
                                        value="items"
                                        className="rounded-md border border-border p-3 text-xs text-muted-foreground"
                                    >
                                        Active coating materials and labor
                                        quantities.
                                    </TabsContent>
                                    <TabsContent
                                        value="notes"
                                        className="rounded-md border border-border p-3 text-xs text-muted-foreground"
                                    >
                                        Site access hours and cure window
                                        instructions.
                                    </TabsContent>
                                </Tabs>

                                <div className="flex flex-wrap items-center gap-4">
                                    <Toggle
                                        variant="outline"
                                        aria-label="Toggle bold"
                                    >
                                        <Bold className="h-4 w-4" />
                                    </Toggle>

                                    <ToggleGroup
                                        type="multiple"
                                        variant="outline"
                                    >
                                        <ToggleGroupItem
                                            value="bold"
                                            aria-label="Bold"
                                        >
                                            <Bold className="h-4 w-4" />
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="italic"
                                            aria-label="Italic"
                                        >
                                            <Italic className="h-4 w-4" />
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="underline"
                                            aria-label="Underline"
                                        >
                                            <Underline className="h-4 w-4" />
                                        </ToggleGroupItem>
                                    </ToggleGroup>

                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="outline" size="sm">
                                                Hover Tooltip
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>
                                                Includes 10% surface waste
                                                allowance
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="scope-textarea">
                                    Textarea (Project Scope &amp; Terms)
                                </Label>
                                <Textarea
                                    id="scope-textarea"
                                    rows={4}
                                    placeholder="Enter surface preparation requirements, warranty terms, and exclusions..."
                                />
                            </div>
                        </div>
                    </section>

                    {/* =========================================================
                        TAILWIND CSS v4 DESIGN SYSTEM SPECS (TYPOGRAPHY & SHADES)
                       ========================================================= */}

                    {/* 36. TAILWIND TYPOGRAPHY & NUMERIC ALIGNMENT */}
                    <section aria-labelledby="section-typography">
                        <h2
                            id="section-typography"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Tailwind CSS Typography &amp; Scale
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="divide-y divide-border rounded-lg border border-border">
                            <div className="flex flex-wrap items-baseline justify-between gap-4 p-4">
                                <p className="text-3xl font-bold tracking-tight">
                                    Page Heading (text-3xl font-bold)
                                </p>
                                <span className="font-mono text-xs text-muted-foreground">
                                    30px / 1.875rem
                                </span>
                            </div>
                            <div className="flex flex-wrap items-baseline justify-between gap-4 p-4">
                                <p className="text-xl font-semibold tracking-tight">
                                    Section Heading (text-xl font-semibold)
                                </p>
                                <span className="font-mono text-xs text-muted-foreground">
                                    20px / 1.25rem
                                </span>
                            </div>
                            <div className="flex flex-wrap items-baseline justify-between gap-4 p-4">
                                <p className="text-base font-medium">
                                    Card / Group Title (text-base font-medium)
                                </p>
                                <span className="font-mono text-xs text-muted-foreground">
                                    16px / 1rem
                                </span>
                            </div>
                            <div className="flex flex-wrap items-baseline justify-between gap-4 p-4">
                                <p className="text-sm text-muted-foreground">
                                    Standard Body &amp; Form Copy (text-sm)
                                </p>
                                <span className="font-mono text-xs text-muted-foreground">
                                    14px / 0.875rem
                                </span>
                            </div>
                            <div className="flex flex-wrap items-baseline justify-between gap-4 p-4">
                                <p className="font-mono text-sm tabular-nums">
                                    $14,280.50 &bull; QT-2026-009 (font-mono
                                    tabular-nums)
                                </p>
                                <span className="font-mono text-xs text-muted-foreground">
                                    Aligned currency columns
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 37. MONOCHROME COLOR TOKENS & NEUTRAL GRAY SHADES */}
                    <section aria-labelledby="section-colors">
                        <h2
                            id="section-colors"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Monochrome Tokens &amp; Gray Shades
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="space-y-6">
                            <div>
                                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    Active Theme Tokens (Light / Dark Reactive)
                                </p>
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                                    {[
                                        {
                                            name: "bg-background",
                                            cls: "bg-background border border-border",
                                        },
                                        {
                                            name: "bg-card",
                                            cls: "bg-card border border-border",
                                        },
                                        {
                                            name: "bg-muted",
                                            cls: "bg-muted border border-border",
                                        },
                                        {
                                            name: "bg-accent",
                                            cls: "bg-accent border border-border",
                                        },
                                        {
                                            name: "bg-secondary",
                                            cls: "bg-secondary border border-border",
                                        },
                                        {
                                            name: "bg-primary",
                                            cls: "bg-primary border border-border",
                                        },
                                    ].map((token) => (
                                        <div
                                            key={token.name}
                                            className="space-y-1.5"
                                        >
                                            <div
                                                className={`h-12 w-full rounded-md ${token.cls}`}
                                            />
                                            <span className="block font-mono text-xs text-muted-foreground">
                                                {token.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    Tailwind Neutral Gray Scale (50 – 950)
                                </p>
                                <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 md:grid-cols-11">
                                    {[
                                        {
                                            step: "50",
                                            cls: "bg-neutral-50 border border-border",
                                        },
                                        { step: "100", cls: "bg-neutral-100" },
                                        { step: "200", cls: "bg-neutral-200" },
                                        { step: "300", cls: "bg-neutral-300" },
                                        { step: "400", cls: "bg-neutral-400" },
                                        { step: "500", cls: "bg-neutral-500" },
                                        { step: "600", cls: "bg-neutral-600" },
                                        { step: "700", cls: "bg-neutral-700" },
                                        { step: "800", cls: "bg-neutral-800" },
                                        { step: "900", cls: "bg-neutral-900" },
                                        {
                                            step: "950",
                                            cls: "bg-neutral-950 border border-border",
                                        },
                                    ].map((shade) => (
                                        <div
                                            key={shade.step}
                                            className="space-y-1 text-center"
                                        >
                                            <div
                                                className={`h-10 w-full rounded-md ${shade.cls}`}
                                            />
                                            <span className="block font-mono text-xs text-muted-foreground">
                                                {shade.step}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 38. TAILWIND SPACING, 1PX BORDERS & RADIUS */}
                    <section aria-labelledby="section-spacing-radius">
                        <h2
                            id="section-spacing-radius"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Spacing (4px Base), 1px Borders &amp; Radius
                        </h2>
                        <hr className="my-3 border-t border-border" />

                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="space-y-2.5">
                                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    Spacing Rhythm
                                </p>
                                {[
                                    { label: "p-2 (8px)", width: "w-8" },
                                    { label: "p-4 (16px)", width: "w-16" },
                                    { label: "p-6 (24px)", width: "w-24" },
                                    { label: "p-12 (48px)", width: "w-48" },
                                    { label: "mb-24 (96px)", width: "w-72" },
                                ].map((sp) => (
                                    <div
                                        key={sp.label}
                                        className="flex items-center gap-3"
                                    >
                                        <div
                                            className={`h-3 rounded-xs bg-foreground/80 ${sp.width}`}
                                        />
                                        <span className="font-mono text-xs text-muted-foreground">
                                            {sp.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-2.5">
                                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    Corner Radius Scale
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {[
                                        "rounded-none",
                                        "rounded-sm",
                                        "rounded-md",
                                        "rounded-lg",
                                        "rounded-xl",
                                        "rounded-full",
                                    ].map((rad) => (
                                        <div
                                            key={rad}
                                            className="flex flex-col items-center gap-1.5"
                                        >
                                            <div
                                                className={`h-12 w-12 border border-foreground/40 bg-muted/40 ${rad}`}
                                            />
                                            <span className="font-mono text-xs text-muted-foreground">
                                                {rad}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
