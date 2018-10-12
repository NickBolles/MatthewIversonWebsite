import React, { Component } from "react";
import { Typography, Paper } from "@material-ui/core/";
import Biography from "../../Sections/Biography";

class BioButton extends Component {
  render() {
    return (
      <div className="outside-container">
        <Typography className="expansion">
          <Paper className="word-paper">
            <p>
              Matthew Iverson has an unique and valuable vision towards how he
              lives. He builds his ideas out beautifully, typically over the
              doubts and opposition of others. Matthew has solidified his
              approach to life with the philosophy of stoicism.
            </p>
            <p>
              He loves bringing his ideas to fruition to help aid others in
              their lives. Matthew has always had a sense of entrepreneurship
              and creativity in his veins because of his mother who taught him
              all about them from a young age. His Father taught him about how
              to deliver on a deal and knowledge of the importance of being able
              to have a analytical and business mind.
            </p>
            <p>
              Together his parents taught him the foundation of how to create
              his vision to thrive in business. Matthew loves creating, guiding
              and inspiring by his actions rather than forcing others into boxes
              with fear, how other “leaders” create the culture in their
              business. Matthew strives to create a better existences for all of
              us.
            </p>
            <Paper className="BioButton">
            <Biography />
            </Paper>
          </Paper>
        </Typography>
      </div>
    );
  }
}

export default BioButton;
