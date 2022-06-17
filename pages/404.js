import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="not-found">
<h1>Oooooops....</h1>
<h2>the page cannot be found.</h2>
<p>Go back to the <Link href="/"><a className="btn" >Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;