import React from "react"
import { Card, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"

import styles from "./showcase-card.module.scss"

interface ShowcaseCardProps {
  image: string
  title: string
  description: string
}

const ShowcaseCard = ({ image, title, description }: ShowcaseCardProps) => {
  return (
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
  )
}

export default ShowcaseCard
