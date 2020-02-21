import React from "react"
import { Card, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"

import styles from "./workCard.module.scss"

interface WorkCardProps {
  image: string
  title: string
  description: string
}

const WorkCard = ({ image, title, description, link }: WorkCardProps) => {
  return (
    <Col md={4} className="my-3">
      <Card className={styles.card}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <h4 className="mb-3">{title}</h4>
          <p className="small mb-3">{description}</p>
          <Link to="/" className="float-right">
            <h6 className="mb-0">
              Learn more
              <FontAwesomeIcon
                icon="chevron-circle-right"
                size="2x"
                className="ml-2"
              />
            </h6>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default WorkCard
