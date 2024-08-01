import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Img, Row, SegoeP, Col } from '../../style';
import { bottleImage } from '../../constants/images';
import { useDeviceType } from '../../context/DeviceContext';

interface NotificationProps {
    duration?: number; // duration in milliseconds
    bottom?:string
}

interface NotificationMessage{
    rCustomerFirst :string,
    rCustomerLast : string,
    rStates : string,
    rQuantities : string,
    rAgo : number
}

const customerFirst = ['Liam', 'Emma', 'Noah', 'Olivia', 'William', 'Ava', 'James', 'Isabella',
    'Logan', 'Sophia', 'Benjamin', 'Mia', 'Mason', 'Charlotte', 'Elijah', 'Amelia', 'Oliver',
    'Evelyn', 'Jacob', 'Abigail', 'Lucas', 'Harper', 'Michael', 'Emily', 'Alexander',
    'Elizabeth', 'Ethan', 'Avery', 'Daniel', 'Sofia', 'Matthew', 'Ella', 'Aiden', 'Madison',
    'Henry', 'Scarlett', 'Joseph', 'Victoria', 'Jackson', 'Aria', 'Samuel', 'Grace',
    'Sebastian', 'Chloe', 'David', 'Camila', 'Carter', 'Penelope', 'Wyatt', 'Riley', 'Jayden',
    'Layla', 'John', 'Lillian', 'Owen', 'Nora', 'Dylan', 'Zoey', 'Luke', 'Mila', 'Gabriel',
    'Aubrey', 'Anthony', 'Hannah', 'Isaac', 'Lily', 'Grayson', 'Addison', 'Jack', 'Eleanor',
    'Julian', 'Natalie', 'Levi', 'Luna', 'Christopher', 'Savannah', 'Joshua', 'Brooklyn',
    'Andrew', 'Leah', 'Lincoln', 'Zoe', 'Mateo', 'Stella', 'Ryan', 'Hazel', 'Jaxon', 'Ellie',
    'Nathan', 'Paisley', 'Aaron', 'Audrey', 'Isaiah', 'Skylar', 'Thomas', 'Violet', 'Charles',
    'Claire', 'Caleb', 'Bella', 'Josiah', 'Aurora', 'Christian', 'Lucy', 'Hunter', 'Anna',
    'Eli', 'Samantha', 'Jonathan', 'Caroline', 'Connor', 'Genesis', 'Landon', 'Aaliyah',
    'Adrian', 'Kennedy', 'Asher', 'Kinsley', 'Cameron', 'Allison', 'Leo', 'Maya', 'Theodore',
    'Sarah', 'Jeremiah', 'Madelyn', 'Hudson', 'Adeline', 'Robert', 'Alexa', 'Easton', 'Ariana',
    'Nolan', 'Elena', 'Nicholas', 'Gabriella', 'Ezra', 'Naomi', 'Colton', 'Alice', 'Angel',
    'Sadie', 'Brayden', 'Hailey', 'Jordan', 'Eva', 'Dominic', 'Emilia', 'Austin', 'Autumn',
    'Ian', 'Quinn', 'Adam', 'Nevaeh', 'Elias', 'Piper', 'Jaxson', 'Ruby', 'Greyson', 'Serenity',
    'Jose', 'Willow', 'Ezekiel', 'Everly', 'Carson', 'Cora', 'Evan', 'Kaylee', 'Maverick',
    'Lydia', 'Bryson', 'Aubree', 'Jace', 'Arianna', 'Cooper', 'Eliana', 'Xavier', 'Peyton',
    'Parker', 'Melanie', 'Roman', 'Gianna', 'Jason', 'Isabelle', 'Santiago', 'Julia', 'Chase',
    'Valentina', 'Sawyer', 'Nova', 'Gavin', 'Clara', 'Leonardo', 'Vivian', 'Kayden', 'Reagan',
    'Ayden', 'Mackenzie', 'Jameson', 'Madeline', 'Noah', 'William', 'James', 'Logan',
    'Benjamin', 'Mason', 'Elijah', 'Oliver', 'Jacob', 'Lucas', 'Michael', 'Alexander', 'Ethan',
    'Daniel', 'Matthew', 'Aiden', 'Henry', 'Joseph', 'Jackson', 'Samuel', 'Sebastian', 'David',
    'Carter', 'Wyatt', 'Jayden', 'John', 'Owen', 'Dylan', 'Luke', 'Gabriel', 'Anthony', 'Isaac',
    'Grayson', 'Jack', 'Julian', 'Levi', 'Christopher', 'Joshua', 'Andrew', 'Lincoln', 'Mateo',
    'Ryan', 'Jaxon', 'Nathan', 'Aaron', 'Isaiah', 'Thomas', 'Charles', 'Caleb', 'Josiah',
    'Christian', 'Hunter', 'Eli', 'Jonathan', 'Connor', 'Landon', 'Adrian', 'Asher', 'Cameron',
    'Leo', 'Theodore', 'Jeremiah', 'Hudson', 'Robert', 'Easton', 'Nolan', 'Nicholas', 'Ezra',
    'Colton', 'Angel', 'Brayden', 'Jordan', 'Dominic', 'Austin', 'Ian', 'Adam', 'Elias',
    'Jaxson', 'Greyson', 'Jose', 'Ezekiel', 'Carson', 'Evan', 'Maverick', 'Bryson', 'Jace',
    'Cooper', 'Xavier', 'Parker', 'Roman', 'Jason', 'Santiago', 'Chase', 'Sawyer', 'Gavin',
    'Leonardo', 'Kayden', 'Ayden', 'Jameson', 'Kevin', 'Bentley', 'Zachary', 'Everett', 'Axel',
    'Tyler', 'Micah', 'Vincent', 'Weston', 'Miles', 'Wesley', 'Nathaniel', 'Harrison',
    'Brandon', 'Cole', 'Declan', 'Luis', 'Braxton', 'Damian', 'Silas', 'Tristan', 'Ryder',
    'Bennett', 'George', 'Emmett', 'Justin', 'Kai', 'Max', 'Diego', 'Luca', 'Ryker', 'Carlos',
    'Maxwell', 'Kingston', 'Ivan', 'Maddox', 'Juan', 'Ashton', 'Jayce', 'Rowan', 'Kaiden',
    'Giovanni', 'Eric', 'Jesus', 'Calvin', 'Abel', 'King', 'Camden', 'Amir', 'Blake', 'Alex',
    'Brody', 'Malachi', 'Emmanuel', 'Jonah', 'Beau', 'Jude', 'Antonio', 'Alan', 'Elliott',
    'Elliot', 'Waylon', 'Xander', 'Timothy', 'Victor', 'Bryce', 'Finn', 'Brantley', 'Edward',
    'Abraham', 'Patrick'
];
const customerLast = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
const customerStates = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL',
    'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV',
    'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX',
    'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];
const customerQuantities = ['1', '3', '5'];



export const Notification: React.FC<NotificationProps> = ({ bottom, duration = 7000 }) => {
    const {isMobile} = useDeviceType()
    const getMessage = ():NotificationMessage => {
        return {
            rCustomerFirst : customerFirst[Math.floor(Math.random() * customerFirst.length)],
            rCustomerLast : customerLast[Math.floor(Math.random() * customerLast.length)],
            rStates : customerStates[Math.floor(Math.random() * customerStates.length)],
            rQuantities : customerQuantities[Math.floor(Math.random() * customerQuantities.length)],
            rAgo : Math.floor(Math.random() * 21) + 1
        }
      
    
    }


    const [visible, setVisible] = useState(false);
    const [message,setMessage] = useState<NotificationMessage>(getMessage())

    useEffect(() => {
        // Initial setup to set visible to true and then false after 3 seconds
        // setVisible(true);
        // getMessage()
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        // Interval to repeat the process every 10 seconds (3 seconds + 7 seconds)
        const interval = setInterval(() => {
            setVisible(true);
            setMessage(getMessage())
            getMessage()
            setTimeout(() => {
                setVisible(false);
            }, duration);
        }, 14000); // 10 seconds

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [duration]);

   
    const onClick =  ()=>{
        setVisible(false)
    }



    return (
        <>
            <NotificationContainer $visible={visible} $isMobile={isMobile} onClick={onClick} bottom={bottom}>
                <Row>
                    <Col $maxWidth='30%'>
                        <Img src={bottleImage} width={"41px"} />

                    </Col>
                    <Col justify='flex-start' align='start' $maxWidth='70%'>
        
                        <SegoeP color='#808080' margin='-3px 0px' $fontSize='14px'> {message?.rCustomerFirst} {message?.rCustomerLast}. - {message?.rStates}</SegoeP>
                        <SegoeP color='#808080' margin='-3px 0px' $fontSize='14px'>Purchased <b>{message?.rQuantities}</b> Bottle(s) of BioKetix</SegoeP>
                        <SegoeP color='#808080' margin='-3px 0px' $fontSize='14px'>Keto Gummies</SegoeP>
                        <SegoeP color='#808080' margin='0px 0px' $fontSize='11px'>{message?.rAgo} minutes ago</SegoeP>

        
                    </Col>

                </Row>







            </NotificationContainer>
        </>
    )

};



const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const NotificationContainer = styled.div<{ $visible: boolean, $isMobile:boolean,bottom?:string }>`
  position: fixed;
  z-index: 50;
  bottom: ${props=>props.$isMobile?props.bottom || "16px":"16px"};
  left: 10px;
  padding: 8px;
  width: 300px;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 2px hsla(0,4%,4%,.6);
  color: #fff;
  background-color: #fff;
  animation: ${(props) => props.$visible ? slideIn : slideOut} 1s forwards;
`;
