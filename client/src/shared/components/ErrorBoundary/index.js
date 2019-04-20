import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null, open: false };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
      errorSnackOpened: true
    });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      errorSnackOpened: false
    });
  };

  render() {
    return this.state.errorInfo ? (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={this.state.errorSnackOpened}
        onClose={this.handleClose}
        message='Something went wrong'
        action={[
          <IconButton key='close' color='inherit' onClick={this.handleClose}>
            <CloseIcon />
          </IconButton>
        ]}
      />
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
