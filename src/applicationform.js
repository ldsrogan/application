import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function ApplicationForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="이름"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="성"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="gender"
            name="gender"
            label="성별"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="unit"
            name="unit"
            label="와드/지부"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phonenumber"
            name="phonenumber"
            label="연락처"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="email" name="email" label="이메일" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mission"
            name="mission"
            label="전임 선교사로 봉사한 선교부"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="callings"
            name="callings"
            label="봉사했던 교회 부름"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}