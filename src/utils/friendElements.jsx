import React from 'react' ; 
import {Row, Col,} from 'reactstrap';
import { BsStar, BsStarFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./list.scss"

export const FriendElemet = ({ friend , starHandler , deleteHandler }) => (
    <>
      <Row className="h-20">
        <Col md={8}>
          <strong>{friend.fName} </strong>
        </Col>
        <Col md={2}>{friend.fav ?
          <div onClick={()=>starHandler(friend.id,false)} className="text-center element" >
            <BsStarFill  />
          </div>
          :
          <div onClick={()=>starHandler(friend.id,true)}  className="text-center element" >
            <BsStar  />
          </div>
        }</Col>
        <Col md={2}>
          <div onClick={()=>deleteHandler(friend.id)}  className="text-center element" >
            <RiDeleteBin6Line />
          </div>
        </Col>
      </Row>
      <small> is your friend </small>
      <hr className="hr-s" />
    </>
  )