import React, { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Biography from "../../Sections/Biography";

class BioButton extends Component {
    render() {
        return(
            <div>
<ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Auto Biography</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Biography />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
        );
    }
}

export default BioButton;

