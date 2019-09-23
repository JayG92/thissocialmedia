import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { CardFooter } from 'reactstrap';



class Footer extends React.Component {
    render() {
        return (
            <CardFooter className="footer">Footer<br/>More Footer Info<br/>This.Social Media<br/>Jay Guevara,Brent Haskins, Kevin Buchik<br/>© 1997</CardFooter>
        )
    }
}
export default Footer