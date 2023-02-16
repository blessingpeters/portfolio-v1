import Link from "next/link";

function NotFound() {
    return ( 
        <div className="notfound">
                <h1>Oopsies</h1>
                <h2>The page you are looking for doesnot exist</h2>
                <p>Go back <Link href="/"></Link>homepage</p>
        </div>
     );
}

export default NotFound;