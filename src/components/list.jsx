import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Input } from 'reactstrap';
import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import { FriendElemet } from './../utils/friendElements'
import notification from "./../utils/notification";
import { CgSortAz } from "react-icons/cg";
import { GrNext,GrPrevious } from "react-icons/gr";
import "./../utils/list.scss"

export default function List(props) {

// All initials defined here
  let [list, setList] = useState([])
  let [fName, setFrendName] = useState("")
  let [sortStar, setSortStar] = useState(true)
  let [page, setPage] = useState(0)


// for the first time on page configuration for states
  useEffect(() => {
    setList(props.state.list)
  }, [])


// for passing a blank string on search bar hadling
  useEffect(() => {
    if (fName == "")
      setList(props.state.list)
  }, [fName])


// for adding and removing a friend message handling
  useEffect(() => {
    if (props.state.list.length > list.length) {
      notification("success", "Friend has been added")
    }
    else if (props.state.list.length < list.length) {
      notification("error", "Friend has been deleted")
    }
    setList(props.state.list)
  }, [props.state.changes])



// For adding or removing a star from a friends listing Handler
  let starHandler = (id, evnt) => {
    let newData = [...list].filter((key) => {
      if (key.id == id) {
        key.fav = evnt;
      }
      return key
    })
    props._setStar(newData)
  }

  // Deleting a friend Handler
  let deleteHandler = (id) => props._deleteFriend(id);

// Searching friends name handler
  let friendName = (e) => {
    setFrendName(e.target.value)
    let searchFriend = [...list].filter((key) => key.fName.includes(e.target.value))
    setList(searchFriend)
  };


  // Adding a friend Handler
  let createFriend = (event) => {
    if (event && event.key == "Enter") {
      if (fName == "" || !/^[a-zA-Z ]*$/.test(fName))
        return notification("error", "Please write valid name for your friend")
      setFrendName("")
      props._addFriend({ fname: fName });
    }
    
  }
  

  // Sorting based on start Handler
  let SortByStart = ()=>{
    console.log(list)
    if(sortStar){
      let sortedList = [...list].sort((a,b)=>{
        if(a.fav >b.fav) return -1
        if(a.fav <b.fav ) return 1
      })
      setList(sortedList)
      setSortStar(false) 
    }else{
      setList(props.state.list)
      setSortStar(true)
    }
  }

  return (
    <Container>
      <Row className="mt-5" >
        <Col md={3}></Col>
        <Col md={6} className="mt-5">
          <Card>
            <CardHeader>
              <Row>
                <Col md={10}>
                  <strong> Friends List </strong>
                </Col>
                <Col md={2}>
                  <CgSortAz className="cur" onClick={()=>SortByStart()} />
                </Col>
              </Row>
            </CardHeader>
            <Input
              value={fName}
              onKeyDown={(e) => createFriend(e)}
              className="br-0"
              placeholder={"Enter your Friends name"}
              onChange={(e) => friendName(e)}
            />
            <CardBody>
              {list.length > 0 && list.slice(4*page,4*(page+1)).map((friend) => {
                return (
                  <React.Fragment key={friend.id}>
                    {/*
                    Friends Element Handling for multiple friends cards 
                     */}
                    <FriendElemet
                      starHandler={starHandler}
                      friend={friend}
                      deleteHandler={deleteHandler}
                    />
                    <br />
                  </React.Fragment>
                )
              })}
              <Row>
                <Col md={6} className="text-right"> <GrPrevious className="cur"  onClick={()=>page>0 && setPage(page-1)} /></Col>
                <Col md={6} className="text-left"> <GrNext className="cur"  onClick={()=> list.slice(4*(page+1),4*(page+2)).length>0 && setPage(page+1)} /></Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )

}
