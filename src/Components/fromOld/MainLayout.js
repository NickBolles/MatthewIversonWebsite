import { createStyles, Theme, withStyles } from "@material-ui/core";
import { Component, Fragment } from "react";
import AppLayout from "./AppLayout";
import { renderComponent } from "recompose";

// Guide on Typescript theme styles: https://material-ui.com/guides/typescript/#usage-of-withstyles

const styles = ({ spacing }: Theme) =>
  createStyles({
    drawerHeader: {
      marginTop: "auto",
      padding: spacing.unit * 2
    },
    drawerHeaderFill: {
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
      flex: "none",
      display: "flex",
      flexFlow: "column nowrap"
    },
    content: {
      display: "flex",
      flexFlow: "column nowrap",
      flex: "1 1 auto",
      padding: spacing.unit,
      overflow: "auto"
    }
  });
class MainLayout extends Component {
    render() {
      return(
      <div>
        <AppLayout />
      </div>
      );
    }
  }


export default withStyles(styles)(MainLayout);
