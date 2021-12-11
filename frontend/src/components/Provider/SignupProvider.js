
import { Link} from 'react-router-dom'


function SignUp() {
    return ( <>
    <h2>SignUp page</h2>
<p>I have account <Link to={`/ProviderLogin`}>Login</Link></p>

    </> );
}

export default SignUp;