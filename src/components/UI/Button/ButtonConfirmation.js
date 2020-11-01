import React, {useState} from 'react';
import classes from './ButtonConfirmation.module.css';
import {Modal, Button} from 'react-bootstrap';


const ButtonConfirmation = (props) => {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const purchaseSuccess = () => {
            alert("Purchase Success!!");
        }
        const listCheckoutDict = props.listCheckoutDict;

        return(
            <>
                <button className={classes.ButtonConfirmation} type="submit" value="Submit" onClick={handleShow}>
                    <p>{props.children}</p>
                </button>                
                
                <Modal show={show} 
                    onHide={handleClose} 
                    aria-labelledby="contained-modal-title-vcenter"
                    centered >
                    <Modal.Header closeButton>
                        <Modal.Title>Here Is Your Order</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Your Add-On : </p>
                        <div>
                            {listCheckoutDict.map(list =>
                                <div key={list.label}>
                                    <span>{list.label} : </span>
                                    <p className={classes.PriceList}>+ {list.price}</p>
                                </div>
                            )}
                        </div>
                        <p>Quantity : {props.quantity}</p>
                        <p>Total Price: RM {props.totalPrice}</p>
                        <p>Confirmed Order ?</p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={purchaseSuccess}>
                        Confirm
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );

};

export default ButtonConfirmation;