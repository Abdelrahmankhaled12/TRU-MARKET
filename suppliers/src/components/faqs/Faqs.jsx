// Importing necessary styles
import './style.scss'

// Importing required components and modules
import ContentWrapper from '../contentWrapper/ContentWrapper'
import * as React from 'react';

// Importing Material-UI components and icons
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const commonQuestions = [
  {
    question: "Who is behind the project",
    answer: "The project is a legally registered company named Agro Smart Contracts Lda. with HQ in Portugal, under the VAT number PT517935392. You can learn more about the company at www.trumarket.tech."
  },
  {
    question: "Do I have any guarantee as an investor?",
    answer: "he operations are backed by official export documentation with reliable companies."
  },
  {
    question: "What type of sustainability does the project promote?",
    answer: "The project promotes ESG in the environmental vertical by measuring and tracking carbon footprint reduction and water consumption. This is highly valued by European companies that source the goods."
  },
  {
    question: "How do I receive the interest and withdraw my money?",
    answer: "Your capital and earnings in USDT will be deposited automatically on your connected wallet via the smart contract instruction once the operation is marked as completed - at the moment the buyer pays. You can withdraw your money from your wallet using any conventional method or exchange."
  },
  {
    question: "What blockchain network and cryptocurrency is being used?",
    answer: "TruMarket leverages the Polygon network (EVM) and Algorand blockchain. The platform works with stablecoin USDT."
  },
  {
    question: "Can I do a traditional loan to participate?",
    answer: "You can do a traditional loan to participate that would be electronically signed with the Portuguese entity."
  },
]


const Faqs = () => {
  return (
    <div className="faqs">
      <ContentWrapper>
        <h1 data-aos="fade-up"
                data-aos-delay="400" data-aos-duration="1000">FAQ</h1>
        <div className="grid" data-aos="fade-up"
                data-aos-delay="400" data-aos-duration="1000">
          <div>
            {
              commonQuestions.map((item, index) => (index % 2 === 0) && (
                < Accordion className='accordion' key={index} >
                  < AccordionSummary
                    expandIcon={< ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography className='titleAccordion'>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='bodyAccordion'>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))
            }
          </div>
          <div>
            {
              commonQuestions.map((item, index) => ((index + 1) % 2 === 0) && (
                < Accordion className='accordion' key={index} >
                  < AccordionSummary
                    expandIcon={< ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography className='titleAccordion'>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='bodyAccordion'>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))
            }
          </div>
        </div>
      </ContentWrapper>
    </div >
  )
}

export default Faqs
