import React, {useState} from 'react';
import classes from './ButtonCheckout.module.css';
import {Modal, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ButtonConfirmation = (props) => {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const listCheckoutDict = props.listCheckoutDict;

        let history = useHistory(); 
        const handlecheckout = () => {
            var _addon = listCheckoutDict.map(list => list.label);

            const foodCheckoutList = ({
                maindish:"Nasi Lemak",
                type:"Local Food",
                addon: _addon,
                quantity: props.quantity,
                totalprice:props.totalPrice,
                baseprice:4,
                remarks: props.specialInstruction
            });

            axios.post('/fooder_checkout/add', foodCheckoutList).then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });

            history.push('/checkout');
        }
        
        return(
            <>
                <button className={classes.ButtonConfirmation} type="submit" value="Submit" onClick={handleShow}>
                    <p>{props.children}</p>
                </button>                
                
                <Modal show={show} 
                    onHide={handleClose} 
                    aria-labelledby="contained-modal-title-vcenter"
                    centered >

                    <div className={classes.ModalHeader}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <h3 className={classes.ModalTitle}>Here Is Your Order</h3>  
                            </Modal.Title>
                        </Modal.Header>
                    </div>

                    <form onSubmit={handlecheckout}>
                        <div className={classes.ModalContent}>
                            <Modal.Body>
                                    <p>Your Add-On : </p>
                                    <div>
                                        {listCheckoutDict.map(list =>
                                            <div key={list.label}>
                                                <li>{list.label} <p className={classes.PriceList}>+ {list.price}</p> </li>                                     
                                            </div>
                                        )}
                                    </div>
                                    <br />
                                    <p>Quantity : {props.quantity}</p>
                                    <p>Special Instructions :</p>
                                    <p>{props.specialInstruction}</p>
                                    <p>Total Price: RM {props.totalPrice}</p>
                                    <p>Confirmed Order ?</p>
                            </Modal.Body>   
                        </div>              

                        <div className={classes.ModalFooter}>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" type="submit">
                                    Confirm
                                </Button>         
                            </Modal.Footer>
                        </div>    
                    </form>
                </Modal>
            </>
        );

};

export default ButtonConfirmation;