import Link from "next/link";

export default function NotFound(){
    return(
        <div className="flex flex-col gap-4 justify-center items-center h-screen">
            <h1 className="text-4xl text-black">Page not found</h1>
            <Link href="/" className="text-blue-500 text-center">
                Go Back to Home
            </Link>
        </div>
    )
}