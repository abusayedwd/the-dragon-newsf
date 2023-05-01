import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  FaEye, FaRegBookmark,  FaRegStar,  FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Newscard = ({news}) => {
        
         const {_id, details, title,image_url,author,rating, total_view} = news;
        return (
                <div>
                       <Card className="  mb-4">
      <Card.Header className='d-flex justify-content-between'>
<div className='d-flex align-items-center'>
      <div>
      <Image style={{height: '40px'}} src= {author.img} roundedCircle />
      </div>
      <div className='ms-3'>
        < p>{author.name}</ p>
        <p><small>{moment( author?.published_date).format('yyyy-MM-D')}</small></p>
      </div>
</div>

  <div className='d-flex align-items-center '>
  <p className='mx-2'> <FaRegBookmark /> </p>
  <p> <FaShareAlt /> </p>
  </div>


      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src= {image_url} />
        <Card.Text>
           {details.length < 240 ? <>{details}</> : 
           <>{details.slice(0, 240)} ...<Link to ={`/news/${_id}`}>Read more</Link></>
           }
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted"> 
      <div className='d-flex justify-content-between'>
        <div className='d-flex'>
        <Rating
         placeholderRating={rating.number}
         emptySymbol={<FaRegStar></FaRegStar>}
         placeholderSymbol={<FaStar className='text-warning'></FaStar>}
         fullSymbol={ <FaStar></FaStar>}
        ></Rating>
        <p className='ms-2'> {rating.number}</p>
        </div>
        <p><FaEye></FaEye> {total_view}</p>
      </div>
      </Card.Footer>
    </Card> 
                </div>
        );
};

export default Newscard;