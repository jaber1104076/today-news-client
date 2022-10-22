import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
const RightSideNav = () => {
    const { signInWithGoogle } = useContext(AuthContext)
    const provider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        signInWithGoogle(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary" size="lg"><FaGoogle></FaGoogle> Log in with Google</Button>
                <Button className='mb-5' variant="outline-success" size="lg"><FaGithub></FaGithub> Log in With Github</Button>
            </ButtonGroup>
            <div>
                <ListGroup>
                    <ListGroup.Item className='mb-4'><FaFacebook></FaFacebook> connect on Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-4'><FaWhatsapp></FaWhatsapp> connect on Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-4'><FaTwitter></FaTwitter> connect on Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-4'><FaLinkedinIn></FaLinkedinIn> connect on LinkdIn</ListGroup.Item>
                    <ListGroup.Item className='mb-4'><FaInstagram></FaInstagram> connect on Insatgarm</ListGroup.Item>
                </ListGroup>
                <div>
                    <BrandCarousel></BrandCarousel>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;