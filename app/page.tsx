import Link from "next/link";

function HomePage() {
    return (
        <div>
            <h1 className="text-7xl">HomePage</h1>
            <Link href="/about">about page</Link>
        </div>
    );
}

export default HomePage;
