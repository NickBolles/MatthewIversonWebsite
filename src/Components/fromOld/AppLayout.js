import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import { Component } from "react";

// Guide on Typescript theme styles: https://material-ui.com/guides/typescript/#usage-of-withstyles
const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexFlow: "column nowrap",
      height: "100%",
      width: "100%",
      position: "absolute",
      overflow: "hidden"
    }
  });

class AppLayout extends Component<WithStyles<typeof styles>> {
  render() {
    const { children, classes } = this.props;

    return <div className={classes.root}>{children}</div>;
  }
}

export default withStyles(styles)(AppLayout);
